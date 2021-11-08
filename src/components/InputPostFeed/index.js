import React from "react";
import { FcVideoCall, FcAddImage, FcDecision } from "react-icons/fc";
import InputUser from "../InputUser";

export default function InputPostFeed(){
    return(
        <div className='PostFeed'>
            <InputUser />
            <hr></hr>

            <div className='PostFeed-midia'>
                <div>
                    <FcVideoCall size={30}/> 
                    <p>Vídeo ao vivo</p>
                </div>
                <div>
                    <FcAddImage size={30}/> 
                    <p>Foto/vídeo</p>
                </div>
                <div>
                    <FcDecision  size={30}/> 
                    <p>Sentimento/atividade</p>
                </div>
            </div>
        </div>
    )
}