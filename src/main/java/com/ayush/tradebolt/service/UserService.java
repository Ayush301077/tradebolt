package com.ayush.tradebolt.service;

import com.ayush.tradebolt.Modal.User;
import com.ayush.tradebolt.domain.VerificationType;

public interface UserService {

    public User findUserProfileByJwt(String jwt) throws Exception;
    public User findUserByEmail(String email) throws Exception;
    public User findUserById(Long userId) throws Exception;
    public User enableTwoFactorAuhthentication(VerificationType verificationType, String sendTo,  User user);
    User updatePassword(User user, String newPassword);
}
