package com.proj.bookbook.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.proj.bookbook.Model.User;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private  Long userIndex;
    private String email;
    private String password;
    private String passwordCheck;
    private String name;
    private String birth;
    private LocalDateTime register_date;

    UserDTO(User user){
        this.userIndex = user.getUser_id();
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.passwordCheck = user.getPasswordCheck();
        this.name = user.getName();
        this.birth = user.getBirth();
        this.register_date = user.getRegister_date();
    }
}
