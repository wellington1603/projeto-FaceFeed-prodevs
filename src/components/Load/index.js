import React from 'react'
import Lottie from 'react-lottie'
import Loading from '../../assets/loading.json'

export default function Load() {
    
    const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
   
  };

    return(
        <div>
            <Lottie 
                options = {defaultOptions}
                height={300}
                width={300}
            />
        </div>
    )
}