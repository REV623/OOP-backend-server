package com.example.OOPserver;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.stereotype.Controller;

@Controller
@Getter
public class GameServerController {
    @SubscribeMapping("/game")
    public String test(){
        return "hello";
    }

    @MessageMapping("/join")
    @SendTo("/topic/game")
    public String join(JoinMessage joinMessage){
        return joinMessage.getUser()+joinMessage.getHost();
    }

    @MessageMapping("/host")
    @SendTo("/topic/game")
    public String host(HostMessage hostMessage){
        return hostMessage.getUser()+hostMessage.getHost();
    }
}
