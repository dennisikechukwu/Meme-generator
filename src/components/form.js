import React from "react";
import memesData from "./formData.js";

export default function Meme() {
 // const [imageUrl, setImageUrl] = React.useState("");

const [meme, setMeme] = React.useState({
  topText: "",
  buttomText : "",
  randomImage: "./images/img1.jpg"
})
const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const selectedMeme = memesArray[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage:selectedMeme
    }))
    
  }
 console.log(meme.topText)
  function handleChange(event) {
    const{name, value} = event.target
    setMeme(prevMeme => {
      return{
        ...meme,
        [name] : value

      }
    })
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--inputs"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form--inputs"
          placeholder="Bottom text"
          name="buttomText"
          value={meme.buttomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme">
      <img src={meme.randomImage} alt="Meme" className="images" />
      <h2 className="meme-text-top">{meme.topText}</h2>
      <h2 className="meme-text-buttom">{meme.buttomText}</h2>
      </div>
     
    </main>
  );
}
