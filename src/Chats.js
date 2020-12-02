import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Rihanna"
        message="Can I come under your Umbrella, ella, ella, eh, eh?"
        timestamp="40 seconds ago"
        profilePic="https://cdn.britannica.com/83/211883-050-46933F1A/Rihanna-Barbadian-singer-Robyn-Fenty.jpg"
      />
      <Chat
        name="Lolo Jones"
        message="Wanna race at the LSU track?"
        timestamp="55 minutes ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/2/23/LoloJones2008.jpg"
      />
      <Chat
        name="Ariana Grande"
        message="Please don't say 'Thank you Next' on me?"
        timestamp="3 days ago"
        profilePic="https://www.biography.com/.image/t_share/MTQ3MzM3MTcxNjA5NTkzNjQ3/ariana_grande_photo_jon_kopaloff_getty_images_465687098.jpg"
      />
      <Chat
        name="Taylor Swift"
        message="If you reply to me, I promise I won't interrupt you anytime you speak!"
        timestamp="1 week ago"
        profilePic="https://www.biography.com/.image/t_share/MTU1NDc3MTEyODE0MzE0NTcy/taylor-swift-attends-the-2016-vanity-fair-oscar-party-hosted-by-graydon-carter-at-wallis-annenberg-center-for-the-performing-arts-on-february-28-2016-in-beverly-hills-california-photo-by-anthony-harve.jpg"
      />
    </div>
  );
}

export default Chats;
