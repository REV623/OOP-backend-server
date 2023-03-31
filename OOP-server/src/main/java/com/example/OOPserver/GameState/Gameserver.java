package com.example.OOPserver.GameState;

import lombok.Getter;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;

@Component
@Getter
public class Gameserver {
    private HashMap<String,Territory> Server;
    private HashMap<String, ArrayList<String>> Room;
    private HashMap<String, Long[]> Config;

    public Gameserver(){
        Server = new HashMap<>();
        Room = new HashMap<>();
        Config = new HashMap<>();
    }

    public HashMap<String, Territory> getServer() {
        return Server;
    }

    public HashMap<String, ArrayList<String>> getRoom() {
        return Room;
    }

    public HashMap<String, Long[]> getConfig() {
        return Config;
    }

    public Territory newGame(String host){
        return null;
    }
}
