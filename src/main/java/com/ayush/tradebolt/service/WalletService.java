package com.ayush.tradebolt.service;

import com.ayush.tradebolt.Modal.Order;
import com.ayush.tradebolt.Modal.User;
import com.ayush.tradebolt.Modal.Wallet;

public interface WalletService {
    Wallet getUserWallet(User user);
    Wallet addBalance(Wallet wallet, Long money);
    Wallet findWalletById(Long id) throws Exception;
    Wallet walletToWalletTransfer(User sender, Wallet receiverWallet, Long amount) throws Exception;
    Wallet payOrderPayment(Order order, User user) throws Exception;
}
