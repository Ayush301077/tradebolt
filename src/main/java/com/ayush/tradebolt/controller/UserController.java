package com.ayush.tradebolt.controller;

import com.ayush.tradebolt.request.ForgotPasswordTokenRequest;
import com.ayush.tradebolt.Modal.ForgotPasswordToken;
import com.ayush.tradebolt.Modal.User;
import com.ayush.tradebolt.Modal.VerificationCode;
import com.ayush.tradebolt.domain.VerificationType;
import com.ayush.tradebolt.request.ResetPasswordRequest;
import com.ayush.tradebolt.response.ApiResponse;
import com.ayush.tradebolt.response.AuthResponse;
import com.ayush.tradebolt.service.EmailService;
import com.ayush.tradebolt.service.ForgotPasswordService;
import com.ayush.tradebolt.service.UserService;
import com.ayush.tradebolt.service.VerificationCodeService;
import com.ayush.tradebolt.utils.OtpUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
public class UserController  {
    @Autowired
    private VerificationCodeService verificationCodeService;

    @Autowired
    private UserService userService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private ForgotPasswordService forgotPasswordService;
    private String jwt;


    @GetMapping("/api/users")
    public ResponseEntity<User> getUserProfile(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @PostMapping("/api/users/verification/{verificationType}/send-otp")
    public ResponseEntity<String> sendVerificationOtp(@RequestHeader("Authorization") String jwt, @PathVariable VerificationType verificationType) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);

        VerificationCode verificationCode = verificationCodeService.getVerificationCodeByUser(user.getId());
        if (verificationCode == null)
        {
            verificationCode = verificationCodeService.sendVerificationCode(user, verificationType);
        }

        if (verificationType.equals(VerificationType.EMAIL))
        {
            emailService.sendVerificationOtpEmail(user.getEmail(), verificationCode.getOtp());
        }


        return new ResponseEntity<>("Verification otp sent successfully", HttpStatus.OK);
    }

    @PatchMapping("/api/users/enable-two-factor/verify-otp/{otp}")
    public ResponseEntity<User> enableTwoFactorAuthentication(@PathVariable String otp, @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);

        VerificationCode verificationCode = verificationCodeService.getVerificationCodeByUser(user.getId());
        String sendTo = verificationCode.getVerificationType().equals(VerificationType.EMAIL)?
                verificationCode.getEmail():verificationCode.getMobile();

        boolean isVerified = verificationCode.getOtp().equals(otp);

        if (isVerified)
        {
            User updatedUser = userService.enableTwoFactorAuhthentication(verificationCode.getVerificationType(), sendTo, user);
            verificationCodeService.deleteVerificationCodeById(verificationCode);
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        }

        throw new Exception("Wrong OTP");
    }

    @PostMapping("/auth/users/reset-password/send-otp")
    public ResponseEntity<AuthResponse> sendForgotPasswordOtp( @RequestBody ForgotPasswordTokenRequest req) throws Exception {

        User user = userService.findUserByEmail(req.getSendTo());
        String otp = OtpUtils.generateOTP();
        UUID uuid = UUID.randomUUID();
        String id = uuid.toString();

        ForgotPasswordToken token = forgotPasswordService.findByUser(user.getId());

        if (token == null)
        {
            token = forgotPasswordService
                    .createtoken(user, id, otp, req.getVerificationType(), req.getSendTo());
        }

        if (req.getVerificationType().equals(VerificationType.EMAIL))
        {
            emailService.sendVerificationOtpEmail(user.getEmail(), token.getOtp());
        }

        AuthResponse response = new AuthResponse();
        response.setSession(token.getId());
        response.setMessage("Password reset otp sent successfully");


        return new ResponseEntity<>(response, HttpStatus.OK);
    }


    @PatchMapping("/auth/users/reset-password/verify-otp")
    public ResponseEntity<ApiResponse> resetPassword(@RequestParam String id, @RequestBody ResetPasswordRequest req, @RequestHeader("Authorization") String jwt) throws Exception {

        ForgotPasswordToken forgotPasswordToken = forgotPasswordService.findById(id);
        boolean isVerified = forgotPasswordToken.getOtp().equals(req.getOtp());

        if (isVerified)
        {
            userService.updatePassword(forgotPasswordToken.getUser(), req.getPassword());
            ApiResponse res = new ApiResponse();
            res.setMessage("Password updated successfully");
            return new ResponseEntity<>(res, HttpStatus.ACCEPTED);
        }

        throw new Exception("Wrong Otp");
    }


}
