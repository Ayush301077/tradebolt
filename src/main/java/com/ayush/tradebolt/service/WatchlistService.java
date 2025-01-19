package com.ayush.tradebolt.service;

import com.ayush.tradebolt.Modal.Coin;
import com.ayush.tradebolt.Modal.User;
import com.ayush.tradebolt.Modal.Watchlist;

public interface WatchlistService {

    Watchlist findUserWatchlist(Long userId) throws Exception;
    Watchlist createWatchlist(User user);
    Watchlist findById(Long id) throws Exception;

    Coin addItemToWatchlist(Coin coin, User user) throws Exception;
}
