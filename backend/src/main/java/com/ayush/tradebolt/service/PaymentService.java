package com.ayush.tradebolt.service;

import com.ayush.tradebolt.Modal.PaymentOrder;
import com.ayush.tradebolt.Modal.User;
import com.ayush.tradebolt.domain.PaymentMethod;
import com.ayush.tradebolt.response.PaymentResponse;
import com.razorpay.RazorpayException;
import com.stripe.exception.StripeException;

public interface PaymentService {

    PaymentOrder createOrder(User user, Long amount, PaymentMethod paymentMethod);

    PaymentOrder getPaymentOrderById(Long id) throws Exception;

    Boolean proceedPaymentOrder(PaymentOrder paymentOrder, String paymentId) throws RazorpayException;

    PaymentResponse createRazorpayPaymentLing(User user, Long amount) throws RazorpayException;

    PaymentResponse createStripePaymentLing(User user, Long amount,
                                            Long orderId) throws StripeException;

}
