package com.example.OOPserver.GameState;

import org.springframework.stereotype.Component;

import java.util.HashMap;

@Component
public class Gameserver {
    HashMap<String,Territory> Server;

    public Gameserver(){
        Server = new HashMap<>();
    }


}
