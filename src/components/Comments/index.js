import React, {useState} from 'react'
import like from '../../assets/like.png'
import heart from '../../assets/heart.png'
import ok from '../../assets/ok.png'
import share from '../../assets/share.png'
import comment from '../../assets/comment.png'
import Modal from '../Modal'
import InputUser from '../InputUser'

import { FcApproval } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";


export default function({data}){

    const [divComment, setDivComment] = useState(false)
    const [comments, setComments] = useState(data.comments)
    const [userLike, setUserLike] = useState(false)
    const [TextNewPost, setTextNewPost] = useState('')
    const [modalVisible, setModalVisible] = useState(false)

    const handleDivComment = () => {
        setDivComment(true)
    }

    const handleLike = () => {
        setUserLike( !userLike)
    }

    const handleSubmit =(e)=> {
        if(e.key === 'Enter'){
            setComments([
                ...comments,{
                    user:{
                        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHKcNQxUNFhelw3G7ew9QDCu3NOMImCS12YA&usqp=CAU',
                        name: 'Wellington Ferreira',
    
                    },
                    content: TextNewPost
                }
            ])

            setTextNewPost('')
            
        }
    }


    return(
        <div className='comments'>

            <div className='comments-info'>

                <div className='comments-info-like'>
                    <div>
                        <img src={like} alt='like'/>
                        <img src={heart} alt='heart'/>
                    </div>

                    <p>
                        {!userLike ? data.likes : data.likes +1}
                    </p>
                </div>

                <div className='comments-info-share'>
                    <p>{data.total_comments} Comentários</p>
                    <p>{data.shares} Compartilhamentos</p>
                </div>
            </div>

            <hr></hr>

            <div className='comments-comentario'>
                <div onClick={handleLike}  >
                    {userLike ? <AiFillLike size={20} color='blue' /> : <img src={ok} /> }  
                    <p>Like</p>
                </div>
                <div onClick={handleDivComment}>
                    <img src={comment} />
                    <p>Comentar</p>
                </div>
                <div onClick={() => setModalVisible(true)}>
                    <img src={share} />
                    <p>Compartilhar</p>
                </div>
            </div>

            {modalVisible ? 
            <Modal onClose={() => setModalVisible(false)} data={data}> 
        
                <h2>Compartilhar</h2> 

                <hr></hr>

                <InputUser />

                <img src={data.content_image} />

                <button onClick={() => setModalVisible(false)} >Publicar</button>
            
            </Modal> : null}

            {divComment ? 
                <div className='comments-users'>
                    <hr></hr>

                    <div className='comments-users-input'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHKcNQxUNFhelw3G7ew9QDCu3NOMImCS12YA&usqp=CAU' />
                        <input type='text' placeholder='Escreva um comentário...' value={TextNewPost} onChange={e => setTextNewPost(e.target.value)} onKeyUp={handleSubmit}/>
                    </div>

                    {comments.map((user) => (

                        <div className='comments-users-list'>
                            <img src={user.user.avatar} />

                            <div className='comments-users-list-container'>
                                <div className='comments-users-list-msg'>
                                    <div>
                                        <p>{user.user.name} { user.user.verified ? <FcApproval/> : ''}</p> 
                                    </div>
                                    <p>{user.content}</p>
                                </div>
                                <p id='curtir'>Curtir</p>
                                <p id='curtir'>Responder</p>
                            </div>              
                        </div>         
                    ))}

                </div>
            : ''}

        </div>
    )
}