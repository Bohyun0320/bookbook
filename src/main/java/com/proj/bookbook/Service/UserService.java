package com.proj.bookbook.Service;

import com.proj.bookbook.DTO.UserDTO;
import com.proj.bookbook.Model.User;
import com.proj.bookbook.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class UserService {

    @Autowired
    private  UserRepository userRepository;

    public void save(UserDTO userDTO) {

        User user = User.builder()
                .user_id(userDTO.getUserIndex())
                .email(userDTO.getEmail())
                .password(userDTO.getPassword())
                .passwordCheck(userDTO.getPassword())
                .name(userDTO.getName())
                .birth((userDTO.getBirth()))
                .register_date(LocalDateTime.now()).build();

        // 이미 등록이 되어있는지 확인.
        if(userRepository.findUserByEmail(user.getEmail()) != null) {
            throw new RuntimeException("등록된 이메일입니다.");
        }

        userRepository.save(user);
    }
    public User findUserByEmail(String email) {

        if (userRepository.findUserByEmail(email) == null) {
            throw new RuntimeException("invalid email");
        }

        return userRepository.findUserByEmail(email);
    }
}
