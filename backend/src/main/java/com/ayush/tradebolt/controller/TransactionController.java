package com.ayush.tradebolt.controller;

import com.ayush.tradebolt.Modal.User;
import com.ayush.tradebolt.Modal.Wallet;
import com.ayush.tradebolt.Modal.WalletTransaction;
import com.ayush.tradebolt.service.TransactionService;
import com.ayush.tradebolt.service.UserService;
import com.ayush.tradebolt.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @Autowired
    private UserService userService;

    @Autowired
    private WalletService walletService;

    @GetMapping("/transactions")
    public ResponseEntity<List<WalletTransaction>> getWalletTransactions(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        Wallet wallet = walletService.getUserWallet(user);
        List<WalletTransaction> transactions = transactionService.getTransactionsByWalletId(wallet.getId());
        return ResponseEntity.ok(transactions);
    }
}
