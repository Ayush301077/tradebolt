package com.ayush.tradebolt.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping     // to map http get requersts to home method
    public String home(){
        return "Welcome to trading platform";
    }
    @GetMapping("/api")   // to map http get requersts to home method
    public String secure(){
        return "Welcome to trading platform secure";
    }
}
