import React from 'react'
import { FcApproval } from "react-icons/fc";

import imgWord from '../../assets/word.png'
import options from '../../assets/ponto.png'

export default function HeaderCard({data}){

    // const generationLinkTags = (text) => {
    //     let newText = text.split(' ')
    //     let textFiltered = []
    //     let filtro = '#'
      
    //     let hashtags = newText.filter((has) => {

        
    //         if(has.indexOf('/>') !== -1){
    //             return console.log(has)
    //         }else if(has.indexOf('#') !== -1 || has.indexOf('http') !== -1 || has.indexOf('https') !== -1 ){
    //             return textFiltered.push(`<a href="${has}">${has}</a>`)}

    //         else{
    //             return textFiltered.push(has)
    //         }
    //     })

    //     return console.log(textFiltered.join(' '))
    //   }

    return(
        <div className='card-header'>
            <div className='card-header-info'>
                <div className='card-header-info-content'>
                    <img width={56} src={data.user.avatar} alt='coca-cola'/>
                    <div>
                        <a href='#' className='card-header-info-content-name'>{data.user.name}</a>
                        {data.user.verified ? < FcApproval size={17}/> : '' }
                        
                        <div className='card-header-info-content-patrocinado'>
                            <p>Patrocinado.</p>
                            <img src={imgWord}/>
                        </div>
                    </div>

                </div>

                <img src={options}/>
            </div>

            <p>{data.content}</p>
        </div>
    )
}