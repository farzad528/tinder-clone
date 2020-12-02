import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Rihanna",
      image:
        "https://cdn.britannica.com/83/211883-050-46933F1A/Rihanna-Barbadian-singer-Robyn-Fenty.jpg",
      message: "Whats up ❤️",
    },
    {
      name: "Rihanna",
      image:
        "https://cdn.britannica.com/83/211883-050-46933F1A/Rihanna-Barbadian-singer-Robyn-Fenty.jpg",
      message: "How you doing Farzad?",
    },
    {
      message: "Can I come under your Umbrella, ella, ella, eh, eh? 😉☔", 
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };


  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH RIHANNA ON 12/1/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <div>
        <form className="chatScreen__input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen__inputField"
            placeholder="Type a message..."
            type="text"
          />
          <button onClick={handleSend} className="chatScreen__inputButton">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
