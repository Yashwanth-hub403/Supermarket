package com.example.supermarket_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.example.supermarket_backend.Model.User;
import com.example.supermarket_backend.service.UserServices;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
public class UserController {

    @Autowired
    UserServices userService;

    @PostMapping("/supermarket/postUser")
    public User saveUserDetails(@RequestBody User user)
   {
     return userService.saveUserDetails(user);
   }

   @GetMapping("/supermarket/getUser")

   public List<User> getUserDetails()
   {
    return userService.getUserDetails();
   }

   @GetMapping("/supermarket/getUser/{id}")
   public User getUserDetailsById(@PathVariable int id)
   {
    return userService.getUserDetailsById(id);
   }

   @PutMapping("/supermarket/updatePassword/{id}")
   public User updatePassword(@PathVariable int id, @RequestBody User user)
   {
    return userService.updatePassword(id, user);
   }

   @DeleteMapping("supermarket/deleteUser/{userId}")
   public void deleteByUserId(@PathVariable ("userId") int id )
   {
    userService.deleteUserById(id);
   }


}