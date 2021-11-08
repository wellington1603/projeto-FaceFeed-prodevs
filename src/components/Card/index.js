import React, {useState, useEffect} from 'react'
import HeaderCard from '../HeaderCard'
import Comments from '../Comments'
import Load from '../Load'
import {SRLWrapper} from 'simple-react-lightbox'

import axios from 'axios'

export default function Card ()  {

    const [dadosApi, setDadosApi] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        
        async function getApi(){
            const response = await axios.get('https://api.npoint.io/144c46739f80c9eeb6b7')
            setDadosApi(response.data.data)

            setLoading(false)
        }
        getApi()
    },[])

    const options = {
        buttons: {
            showAutoplayButton : false,
            showDownloadButton : true,
            
            showNextButton : false , 
            showPrevButton : false , 
        },
        caption: {
            showThumbnails: false,
        },
        thumbnails: {
            showThumbnails: false,
        }
       
      }

    if(loading)
        return <Load />
    return(
        <div>
            {dadosApi.map((post) => {
                return(
                    <div className='Card' key={post.id}>
                        <HeaderCard data={post}/>
                        
                        <div>
                            <SRLWrapper options={options}>
                                <a href={post.content_image}>
                                    <img src={post.content_image} alt={post.user.name} width='100%' />
                                </a>
                            </SRLWrapper>
                        </div>
                        <Comments data={post}/>
                     
                    </div>
                )
            })}
    
        </div>
    )
}