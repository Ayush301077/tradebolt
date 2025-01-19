package com.ayush.tradebolt.repository;

import com.ayush.tradebolt.Modal.PaymentOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentOrderRepository extends JpaRepository<PaymentOrder, Long> {
}
