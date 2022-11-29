package com.controller;

import com.domain.User;
import com.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/user")
@CrossOrigin
public class UserController {
   @Autowired
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/add")
    public String addUser(@RequestBody User user){
        userService.addUser(user);
        return "New user added";

    }
    @GetMapping("/getAllUser")
    public List<User> getAll(){
        return userService.getAllUser();
    }
}
