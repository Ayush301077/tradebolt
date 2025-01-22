package com.ayush.tradebolt.service;

import com.ayush.tradebolt.Modal.PaymentDetails;
import com.ayush.tradebolt.Modal.User;

public interface PaymentDetailsService {
    public PaymentDetails addPaymentDetails(String accountNumber,
                                            String accountHolderName,
                                            String ifsc,
                                            String bankName,
                                            User user);

    public PaymentDetails getUsersPaymentDetails(User user);
}
