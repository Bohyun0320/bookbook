package com.proj.bookbook.Controller;


import com.proj.bookbook.DTO.UserDTO;
import com.proj.bookbook.Model.User;
import com.proj.bookbook.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
@RequestMapping("/api")
public class UserController {

    @Autowired
    private final UserService userService;


    @PostMapping("/join")
    public User save (@RequestBody UserDTO userDTO, User user){
        System.out.println(userDTO);
        userService.save(userDTO);
        return  user;
    }
}
