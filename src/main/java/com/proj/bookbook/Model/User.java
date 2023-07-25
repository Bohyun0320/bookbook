package com.proj.bookbook.Model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;

@Entity
@Builder
@Getter @Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class User{

    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column(name="user_id")
    private Long user_id;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name="password")
    private String password;

    @Column(name="name")
    private String name;

    @Column(name="birth_y")
    private Long birth_y;

    @Column(name="birth_m")
    private Long birth_m;

    @Column(name="birth_d")
    private Long birth_d;

    @CreatedDate
    private LocalDateTime register_date;

//    @JoinColumn(n)





}
