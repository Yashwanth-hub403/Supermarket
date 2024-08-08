package com.example.supermarket_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.supermarket_backend.Model.User;

@Repository
public interface UserRepo extends JpaRepository<User,Integer>{

    User findById(Long userId);

}
