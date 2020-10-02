import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="LeBron"
        message="I am the best player in the world 👑"
        timestamp="40 seconds ago"
        profilePic="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NzA3MjE1MzQyNzczNTQw/lebron-james-photo-by-streeter-lecka_getty-images.jpg"
      />
      <Chat
        name="Stephen"
        message="I blew a 3-1 lead 😢"
        timestamp="55 minutes ago"
        profilePic="https://imageproxy.themaven.net//https%3A%2F%2Fwww.biography.com%2F.image%2FMTM5OTQxMjg1NzA3MzkyMDQw%2Fstephen-curry-gettyimages-538912798_1600jpg.jpg"
      />
      <Chat
        name="Michael"
        message="I am the 🐐"
        timestamp="3 days ago"
        profilePic="https://www.biography.com/.image/t_share/MTY2Njc5NDYzOTQ4NDYxNDA4/michael-jordan.jpg"
      />
      <Chat
        name="Kawhi"
        message="Board man 🏀"
        timestamp="1 week ago"
        profilePic="https://s.yimg.com/uu/api/res/1.2/i6EIhC6mWLhuXOjwQgmiYg--~B/aD0xMDgwO3c9MTkyMDtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/omnisport.uk/78a5b9d25dd7bfed22d8d42bed0f4ee9"
      />
    </div>
  );
}

export default Chats;
