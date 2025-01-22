package com.ayush.tradebolt.service;

import com.ayush.tradebolt.Modal.Coin;
import com.ayush.tradebolt.Modal.Order;
import com.ayush.tradebolt.Modal.OrderItem;
import com.ayush.tradebolt.Modal.User;
import com.ayush.tradebolt.domain.OrderType;

import java.util.List;

public interface OrderService {

    Order createOrder(User user, OrderItem orderItem, OrderType orderType);

    Order getOrderById(Long ordrId) throws Exception;

    List<Order> getAllOrdersForUser(Long userId, OrderType orderType, String assetSymbol);

    Order processOrder(Coin coin, double quantity, OrderType orderType, User user) throws Exception;
}
