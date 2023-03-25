package com.example.OOPserver;

import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.stereotype.Controller;

@Controller
public class GameServerController {
    @SubscribeMapping("/game")
    public String test(){
        return "hello";
    }
}
