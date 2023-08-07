package com.proj.bookbook.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User  {

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column(name="user_id")
    private Long user_id;

    @Column(name = "email" , nullable = false, unique = true)
    private String email;

    @Column(name="password")
    private String password;


    @Column(name="passwordCheck")
    private String passwordCheck;


    @Column(name="name" )
    private String name;

    @Column(name="birth")
    private String birth;

    @CreatedDate
    private LocalDateTime register_date;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "role_id")
    private Role role;






}
