package com.example.OOPserver.GameState;

import lombok.Getter;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Objects;

@Component
@Getter
public class Gameserver {
    private HashMap<String,Territory> Server;
    private HashMap<String, ArrayList<String>> Room;
    private HashMap<String, ArrayList<String>> NamePlayer;
    private HashMap<String, Long[]> Config;

    public Gameserver(){
        Server = new HashMap<>();
        Room = new HashMap<>();
        NamePlayer = new HashMap<>();
        Config = new HashMap<>();
    }

    public HashMap<String, Territory> getServer() {
        return Server;
    }

    public HashMap<String, ArrayList<String>> getRoom() {
        return Room;
    }

    public HashMap<String, ArrayList<String>> getNamePlayer() {
        return NamePlayer;
    }

    public HashMap<String, Long[]> getConfig() {
        return Config;
    }

    public void newGame(String host){
        Long[] config = this.Config.get(host);
        String[] players = new String[config[2].intValue()];
        for(int i=0 ; i<players.length ; i++){
            players[i] = this.Room.get(host).get(i);
        }
        Territory upbeat = new Territory(players,config[0].longValue(),config[1].longValue(),
                config[3].longValue(),config[4].longValue(),config[5].longValue(),
                config[6].longValue(),config[7].longValue(),config[8].longValue(),
                config[9].longValue(),config[10].longValue(),config[11].longValue());
        this.Server.put(host,upbeat);
    }

    public String[][] getGameData(String host){
        Territory upbeat = this.Server.get(host);
        String[][] data = new String[upbeat.playerSet.length+1][3];
        data[0][0] = host;
        data[0][1] = upbeat.TERRITORY_ROW()+"/"+upbeat.TERRITORY_COL();
        for(int i=0 ; i<upbeat.playerSet.length ; i++){
            data[i+1][0] = upbeat.playerSet[i].playerName;
            data[i+1][1] = this.NamePlayer.get(host).get(i);
            StringBuilder playerData = new StringBuilder();
            for(Region region : upbeat.playerSet[i].regionSet){
                playerData.append(region.getRow());
                playerData.append("/");
                playerData.append(region.getCol());
                playerData.append("/");
                playerData.append(Math.round(Math.floor(region.getDeposit())));
                playerData.append("_");
            }
            data[i+1][2] = playerData.toString();
        }
        return data;
    }
}
