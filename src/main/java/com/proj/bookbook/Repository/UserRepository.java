package com.proj.bookbook.Repository;

import com.proj.bookbook.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface UserRepository extends JpaRepository <User, Long> {

    public  User save( User user);
    public User findUserByEmail(String email);
}
