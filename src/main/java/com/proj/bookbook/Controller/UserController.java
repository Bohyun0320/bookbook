package com.proj.bookbook.Controller;


import com.proj.bookbook.DTO.ResponseDTO;
import com.proj.bookbook.DTO.UserDTO;
import com.proj.bookbook.Model.User;
import com.proj.bookbook.Service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth" )
@CrossOrigin("*")
public class UserController {

    @Autowired
    private final UserService userService;





    @PostMapping("/join")
    public ResponseEntity save (@RequestBody UserDTO userDTO){


        userService.save(userDTO);
        return  ResponseEntity.ok().body(userDTO);
    }



//    @GetMapping("/login")
//    public String login(@RequestBody UserDTO userDTO) {
//        User loginResult = userService.login(userDTO);
//        if(loginResult != null){
//            //로그인 성공
//            return "/";
//        }else{
//            return  "로그인 실패";
//        }
//
//    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticate(@RequestBody UserDTO userDTO){

        User user = userService.getByCredentials(
                userDTO.getEmail(),
                userDTO.getPasswordCheck());

        if(user!= null){

            UserDTO userDTOs = UserDTO.builder()
                    .email(userDTO.getEmail()).password(userDTO.getPasswordCheck())
                    .build();
            return ResponseEntity.ok().body(userDTOs);
        }
        else {

            ResponseDTO responseDTO = ResponseDTO.builder().error("로그인 실패하였습니다.").build();
            return ResponseEntity.badRequest().body(responseDTO);
        }



    }

    @PostMapping("/admin")
    public String admin (){
        return "admin";
    }
}
