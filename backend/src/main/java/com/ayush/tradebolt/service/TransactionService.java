package com.ayush.tradebolt.service;

import com.ayush.tradebolt.Modal.Wallet;
import com.ayush.tradebolt.Modal.WalletTransaction;
import com.ayush.tradebolt.domain.WalletTransactionType;

import java.util.List;

public interface TransactionService {
    WalletTransaction createTransaction(Wallet wallet, WalletTransactionType type, Long receiverId, String purpose, Long amount);
    List<WalletTransaction> getTransactionsByWalletId(Long walletId);
}
