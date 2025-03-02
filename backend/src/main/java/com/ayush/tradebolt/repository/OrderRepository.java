package com.ayush.tradebolt.repository;

import com.ayush.tradebolt.Modal.Order;
import com.ayush.tradebolt.service.OrderService;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserId(Long userId);
}
