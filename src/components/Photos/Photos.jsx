import React from 'react'
import './Photos.css'
import photo_1 from '../../assets/IMG_0657.jpeg'
import photo_2 from '../../assets/IMG_0874.jpg'
import photo_3 from '../../assets/IMG_4788.jpeg'
import photo_4 from '../../assets/IMG_3253.jpeg'
import photo_5 from '../../assets/number4.jpeg'
import photo_6 from '../../assets/number4.jpeg'
import photo_7 from '../../assets/number3.jpeg'
import next_icon from '../../assets/next-button.png'
import back_icon from '../../assets/next-button.png'
import { useRef } from 'react'


const Photos = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () =>{
        // increase by 25 for each picture added.
        if(tx> -75){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () =>{
        if(tx< 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    return (
        <div className='photo'>
            <div className="button-container">
              <img src={back_icon} alt='' className='back-btn' onClick={slideBackward} />
              <img src={next_icon} alt='' className='next-btn' onClick={slideForward} />
            </div>
          <div className="gallery">
            <div ref={slider} className="image-container slider">
              <img src={photo_1} alt='' />
              <img src={photo_2} alt='' />
              <img src={photo_3} alt='' />
              <img src={photo_4} alt='' />
              <img src={photo_5} alt='' />
              <img src={photo_6} alt='' />
              <img src={photo_7} alt='' />
            </div>
          </div>
        </div>
      );
}


export default Photos