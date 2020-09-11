import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage]=useState('');
  const [tweetImg, setTweetImg]=useState('');
  const sendTweet=(e)=>{
    e.preventDefault();
    
      db.collection("posts").add({
          displayName: "Serhio Ramos",
          username: "sergiRam22",
          verified: true,
          text: tweetMessage,
          image: tweetImg,
          avatar: "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
    });
   
    setTweetMessage("");
    setTweetImg("");
  };

  

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          <input 
            onChange={e=>setTweetMessage(e.target.value)}
            placeholder="What's happening?" 
            type="text" 
            value={tweetMessage}
          />
        </div>
        <input
          onChange={e=>setTweetImg(e.target.value)}
          value={tweetImg}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button 
          className="tweetBox__tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
