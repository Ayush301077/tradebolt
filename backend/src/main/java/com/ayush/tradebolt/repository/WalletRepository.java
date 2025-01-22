package com.ayush.tradebolt.repository;

import com.ayush.tradebolt.Modal.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WalletRepository extends JpaRepository<Wallet, Long> {

    static Wallet findByUserId(Long userId) {
        return null;
    }
}
