package com.proj.bookbook.Model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column(name="role_id")
    @OneToMany(fetch = FetchType.EAGER, mappedBy="user", cascade = CascadeType.ALL)
    private Long role_id;

//    @Column(name="role_name")
//    private String role_name;

}
