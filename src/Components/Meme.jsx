import React, { useState } from "react";
import memeData from "../memeData";

export const Meme = () => {

  const [memeImage, setMemeImage] = useState("")

  const getMemeImage = () => {
    const rand_num = Math.floor(Math.random() * memeData.data.memes.length)
    setMemeImage(memeData.data.memes[rand_num].url)
  }

  return (
    <main>
      <div className="form">
        <input 
          type="text" 
          className="form-inputs" 
          placeholder="top text">
          </input>
        <input 
          type="text" 
          className="form-inputs" 
          placeholder="bottom text">
          </input>
        
        <button className="form-button" onClick={getMemeImage}>Get a new meme image 🎨</button>
      </div>
      <img src={memeImage} className="meme-image"></img>
    </main>

  )
}