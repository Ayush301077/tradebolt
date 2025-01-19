package com.ayush.tradebolt.repository;

import com.ayush.tradebolt.Modal.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepositry extends JpaRepository<OrderItem, Long> {
}
