package com.ayush.tradebolt.service;

import com.ayush.tradebolt.Modal.ForgotPasswordToken;
import com.ayush.tradebolt.Modal.User;
import com.ayush.tradebolt.domain.VerificationType;

public interface ForgotPasswordService {

    ForgotPasswordToken createtoken(User user, String id, String otp, VerificationType verificationType, String sendTo);

    ForgotPasswordToken findById(String id);
    ForgotPasswordToken findByUser(Long userId);

    void deleteToken(ForgotPasswordToken token);
}
