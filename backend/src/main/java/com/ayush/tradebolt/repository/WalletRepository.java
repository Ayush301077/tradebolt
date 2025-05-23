package com.ayush.tradebolt.repository;

import com.ayush.tradebolt.Modal.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WalletRepository extends JpaRepository<Wallet, Long> {

    Wallet findByUserId(Long userId);
}
