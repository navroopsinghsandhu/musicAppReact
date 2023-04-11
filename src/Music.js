import React from 'react';
import { useState } from 'react';
import { API_HOST } from './constants';

function Music(props) {
    const [subscriptionFlag, setSubscriptionFlag] = useState(props.isSubscribed)
    function handleSubscription(title, artist, year, web_url, image_url){
        if(localStorage.getItem('token') != null){
            var userEmail = localStorage.getItem('token') 
            if(subscriptionFlag){
                fetch(API_HOST + "/musicuser",{ 
                    method: 'DELETE',
                    body: JSON.stringify({
                        "email": userEmail,
                        "title": title
                    })
                }
                )
                .then(() => {
                    alert("Music unsubscribed")
                    setSubscriptionFlag(false)
                });
            } else {
                fetch(API_HOST + "/musicuser", {
                    method: "POST",
                    body: JSON.stringify({
                        "email": userEmail,
                        "title": title
                    }),
                })
                .then((res) =>{
                    alert("Subscribed successfully")
                    setSubscriptionFlag(true)
                });
            }
        } else {
            alert("Please login to subscribe")
        }
    }

    return (

    <div>
        <div className="music"style={{}}>
            <div style={{border: '2px solid #006778', marginLeft:"25%", marginBottom:"2%", width:"50%", height:"50%", alignSelf:"middle"}}>
                <img className="circle-img" src={props.ArtistImage} alt="" />
                <div className="info">Title : {props.MusicTitle}</div>
                <div className="info">Artist : {props.artist}</div>
                <div display="inline" className="info">Year : {props.Year}</div>
                <button display="inline" id ={props.title} className='subscribe_button' style={{marginLeft:10, padding:5}} onClick={(e) =>{handleSubscription(props.MusicTitle, props.artist, props.Year, props.Year, props.web_url, props.image_url)}}> {subscriptionFlag ? "Remove": "Subscribe"} </button>
                <br></br>
                <br></br>
            </div>
        </div>
    </div>

    );
}

export default Music;