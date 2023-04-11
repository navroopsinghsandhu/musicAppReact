import React ,{useState, useEffect} from 'react';
import './SubscriptionArea.css';
import Footer from './Footer';
import Music from './Music';
import { API_HOST } from './constants';

function SubscriptionArea() {

    function createMusic(music) {
        return (
            <Music
                key={music.MusicId}
                MusicId={music.MusicId}
                MusicTitle={music.title}
                artist={music.artist}
                Year={music.year}
                WebUrl={music.web_url}
                ArtistImage={music.img_url}
                isSubscribed = {true}
            />
        );
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(API_HOST + "/subscribedmusicuser", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              'email': localStorage.getItem('token')
            })
            })
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            console.log("data", data)
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (

    <div>
        <h1 style={{margin:"1%"}}>{localStorage.getItem('token') != null ? "Your subscribed music" :''}</h1>
        <h3 style={{margin:"1%"}}>{(localStorage.getItem('token') != null)? data.map(createMusic) : "Please login to see your subscription"}</h3>
        <Footer />
    </div>

    );
}

export default SubscriptionArea;