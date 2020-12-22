import React, { Component } from 'react';
import './PostComponent.css';
import image from '../Images/img.png';
import image1 from '../Images/img1.png';
import image2 from '../Images/img2.png';


class postComponent extends Component {
    state = {
        img: require('../Images/img.png')
    }


    render() {    
        return (
            <div className="post">
                <div className="aboutPost">
                    <img className="circular_image" src={image1}/>
                    <label className="userName">Ion Vasilescu</label>
                    <button className="likeBtn"></button>
                </div>
                <hr/>
                <div className="divImage" >
                    <img className='image' src={image2} alt='Not Found'/>
                </div>
                
                <p className="description">Ha ha ha! This haircut looks creazy :)</p>
            </div>
        )
    };
};

export default postComponent;