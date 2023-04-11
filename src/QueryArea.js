import React ,{useState, useEffect} from 'react';
import Footer from './Footer';
import Music from './Music';
import { API_HOST } from './constants';

function QueryArea() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function createMusic(music) {
        return (
          <Music
            key={music.title + music.artist}
            MusicTitle={music.title}
            artist={music.artist}
            Year={music.year}
            WebUrl={music.web_url}
            ArtistImage={music.img_url}
            isSubscribed = {false}
          />
        );
    }

    const [data, setData] = useState([]);  

      const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    
        var { title, artist, year } = document.forms[0];
        var email = localStorage.getItem('token')
        
        console.log("email", email == "None")
        fetch(API_HOST + "/music", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'title': title.value,
          'artist': artist.value,
          'year': year.value,
          "email" : email
        })
        })
        .then((res) => res.json())
        .then((data) => {
          let sliceData = data.slice(0,10)
          console.log("data", sliceData)
          if(Object.keys(data).length == 0){
              alert("No result is retrieved. Please query again")
          } else {
              setData(data);
              setIsSubmitted(true)
          }
          
        })
      };

      const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Title </label>
              <input type="text" name="title"   className="input"/>
            </div>
            <div className="input-container">
              <label>Artist </label>
              <input type="text" name="artist"   className="input"/>
            </div>
            <div className="input-container">
              <label>Year </label>
              <input type="text" name="year"   className="input"/>
            </div>
            <div className="button-container">
            <input type="submit" value="Query" className="btn_register"/>
            </div>
          </form>
        </div>
      );

    return (
        <div className="app">
          <div className="login-form">
            <h1 className="title" style={{margin:"1%"}}>Music Query</h1>
            {isSubmitted ? data.map(createMusic) : renderForm}
          </div>
          <Footer />
        </div>
    );

}

export default QueryArea;