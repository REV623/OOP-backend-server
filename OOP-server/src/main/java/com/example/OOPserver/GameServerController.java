package com.example.OOPserver;

import com.example.OOPserver.GameState.Gameserver;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.stereotype.Controller;

import java.util.ArrayList;

@Controller
@Getter
public class GameServerController {
    @Autowired
    private Gameserver gameserver;

    @SubscribeMapping("/game")
    public String test(){
        return "hello";
    }

    @MessageMapping("/join")
    @SendTo("/topic/join")
    public String[] join(JoinMessage joinMessage){
        String[] roomMessage = new String[3];
        roomMessage[0] = joinMessage.getUser();
        roomMessage[1] = joinMessage.getHost();
        return roomMessage;
    }

    @MessageMapping("/host")
    @SendTo("/topic/host")
    public String[] host(HostMessage hostMessage){
        String[] roomMessage = new String[3];
        roomMessage[0] = hostMessage.getUser();
        roomMessage[1] = hostMessage.getHost();
        roomMessage[2] = "true"; // used
        if(gameserver.getRoom().containsKey(hostMessage.getHost())) return roomMessage;
        ArrayList<String> players = new ArrayList<>();
        players.add(hostMessage.getUsername());
        gameserver.getRoom().put(hostMessage.getHost(),players);
        roomMessage[2] = "false"; // isn't used
        return roomMessage;
    }

    @MessageMapping("/game")
    @SendTo("/topic/game")
    public void game(HostMessage hostMessage){

    }
}
