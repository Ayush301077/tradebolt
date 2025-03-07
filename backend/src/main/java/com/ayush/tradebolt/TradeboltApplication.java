package com.ayush.tradebolt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching
@SpringBootApplication
public class TradeboltApplication {

	public static void main(String[] args) {
		SpringApplication.run(TradeboltApplication.class, args);
	}

}

