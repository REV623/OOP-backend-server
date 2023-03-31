import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { Client } from "@stomp/stompjs"
import JoinGame from "./JoinGame";
import HostGame from "./HostGame";
import WaitRoom from "./WaitRoom";
import UPBEAT from "./UPBEAT";

const url = "ws://192.168.1.109:8080/upbeat-websocket";
let client;
let username;
let numPlayer;
let host;

export default function exp() {
  const [gameState,setGameState] = useState(0);
  const [gameRoom,setGameRoom] = useState(0);
  const [count, setCount] = useState(0);

  function topicMesage(message){
    const body = JSON.parse(message.body);

  }

  function sendWait(){
    if (client) {
      if (client.connected) {
        client.publish({
          destination: "/app/wait",
          body: JSON.stringify({
            user: username,
            host: host,
            isClick: false,
          }),
        });
      }
    }
  }

  function handleHost(body){
    if(body[0] === username){
      if(body[2] === "false"){
        console.log("host1");
        host = body[1];
        numPlayer = body[3];
        setGameState(3);
        sendWait();
      }else{
        alert("Room name is duplicate!");
        console.log("host2");
      }
    }
  }

  function handleJoin(body){
    if(body[0] === username){
      if(body[2] === "true"){
        if(body[3] === "false"){
          alert("Room is full!");
        }else{
          console.log("join1");
          host = body[1];
          numPlayer = body[3];
          setGameState(3);
          sendWait();
        }
      }else{
        alert("Room name not found!");
        console.log("join2");
      }
    }
  }

  function handleWait(body){
    if(body[1] === host){
      if(body[2] === "true"){
        console.log("wait1");
        setGameState(4);
      }else{
        console.log("wait2");
        setCount(body[2]);
        setGameState(3);
      }
    }
  }

  useEffect(() => {
    if (!client) {
      username = "#"+Math.floor(Math.random()*16777215).toString(16);
      client = new Client({
        brokerURL: url,
        onConnect: () => {
          client.subscribe("/app/game", (message) => {
            console.log(message.body+"app");
          });
          client.subscribe("/topic/join", (message) => {
            console.log(message.body);
            const body = JSON.parse(message.body);
            handleJoin(body);
          });
          client.subscribe("/topic/host", (message) => {
            console.log(message.body);
            const body = JSON.parse(message.body);
            handleHost(body);
          });
          client.subscribe("/topic/game", (message) => {
            console.log(message.body);
          });
          client.subscribe("/topic/wait", (message) => {
            console.log(message.body);
            const body = JSON.parse(message.body);
            handleWait(body);
          });
        },
      });
      client.activate();
    }
  }, []);

  if(gameState === 0){
    return (
      <div>
        <Navbar key="GameOption" link="GameOption" />
        <div class="m-5 mt-0 py-4">
          <div
            style={{ alignContent: "center" }}
            class="mx-4 my-4 vstack d-flex justify-content-center"
          >
            <div class="m-3">
              <h1 style={{ textAlign: "center" }}>Game Option</h1>
              <hr />
            </div>

            {/* cards */}
            <div onClick={()=>setGameState(1)} style={{ marginBottom: "20px" }}>
              <Card
                isLeftCard={true}
                imgSrc="./multi_icon.png"
                title="JOIN GAME"
                content="Find you opponent and play with them!"
              />
            </div>

            <div onClick={()=>setGameState(2)} style={{ marginBottom: "20px" }}>
              <Card
                isLeftCard={true}
                imgSrc="./hosting_icon.png"
                title="HOST GAME"
                content="Host your own game and play against your friend!"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }else if(gameState === 1){
    return (<div><JoinGame user={client} username={username}></JoinGame></div>)
  }else if(gameState === 2){
    return (<div><HostGame user={client} username={username}></HostGame></div>)
  }else if(gameState === 3){
    return (<div><WaitRoom user={client} username={username} amountPlayer={count} numPlayer={numPlayer}></WaitRoom></div>)
  }else if(gameState === 4){
    return (<div><UPBEAT></UPBEAT></div>)
  }
}
