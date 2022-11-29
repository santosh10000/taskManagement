package com.service;

import com.domain.User;

import java.util.List;

public interface UserService {
    public User addUser(User user);
    public List<User> getAllUser();
}
