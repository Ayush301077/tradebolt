package com.ayush.tradebolt.service;

import com.ayush.tradebolt.Modal.User;
import com.ayush.tradebolt.Modal.VerificationCode;
import com.ayush.tradebolt.domain.VerificationType;

public interface VerificationCodeService {

    VerificationCode sendVerificationCode(User user, VerificationType verificationType);
    VerificationCode getVerificationCodeById(Long id) throws Exception;
    VerificationCode getVerificationCodeByUser(Long userId);

    void deleteVerificationCodeById(VerificationCode verificationCode);
}
