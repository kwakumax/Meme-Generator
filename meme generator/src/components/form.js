import React from "react"


export default function Meme(){

  const [meme, setMeme] = React.useState({
    topText:"",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg"
  });
  
  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(()=> {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => setAllMemes(data.data.memes) )
  },[])
  

  function getMemeImage(){
    let randomID=Math.floor(Math.random()* allMemes.length);
    const url=allMemes[randomID].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage:url
    }))

  
  }

  function handleChange(event){
    const {name, value}=event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]:value
    }))
  }

  
      
    
  
  return(
    <main className="form">
      <input
       className="one" 
       placeholder="topText" 
       type="text"
       onChange={handleChange}
       name="topText"
       value={meme.topText}
       />
      <input 
      className="two" 
      placeholder="secondText"
      type="text"
      onChange={handleChange}
      name="bottomText"
      value={meme.bottomText}
      />
      <button
       className="button"
       onClick={getMemeImage}
       >
        Get a new meme image
       </button>
       <div className="meme">
       <img src={meme.randomImage}
        className="meme-Image"
        />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
       </div>
    </main>
  )
}