package com.ayush.tradebolt.repository;

import com.ayush.tradebolt.Modal.Coin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoinRepository extends JpaRepository<Coin, String> {
}
