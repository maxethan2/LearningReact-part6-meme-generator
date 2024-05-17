import React, { useState, useEffect } from "react";

export const Meme = () => {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = useState("")

  // getting memes from api
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then(res => res.json()).then(data => setAllMemeImages(data))
  }, [])

  // const [memeImage, setMemeImage] = useState(meme.randomImage)

  const getMemeImage = () => {
    // const rand_num = Math.floor(Math.random() * memeData.data.memes.length)
    // setMemeImage(memeData.data.memes[rand_num].url)
    const rand_num = Math.floor(Math.random() * allMemeImages.data.memes.length)
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: allMemeImages.data.memes[rand_num].url
      }
    })
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
        <input 
          type="text" 
          className="form-inputs"
          name="topText" 
          value={meme.topText}
          onChange={handleChange}
          placeholder="top text">
        </input>
        <input 
          type="text" 
          className="form-inputs" 
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          placeholder="bottom text">
        </input>
        
        <button className="form-button" onClick={getMemeImage}>Get a new meme image 🎨</button>
      </div>
      {/* <img src={meme.randomImage} className="meme-image"></img> */}
      <div className="meme">
        <img src={meme.randomImage} className="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div> 
    </main>

  )
}