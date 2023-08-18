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
import java.util.List;

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

    private Long role_id;

    UserDTO(User user){
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.passwordCheck = user.getPasswordCheck();
        this.name = user.getName();
        this.birth = user.getBirth();
        this.register_date = user.getRegister_date();
        this.role_id =user.getRole().getRole_id();

    }


}
