import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';


function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
  return (
    <div className='post'>
        <div className="post__avatar">
            <Avatar src={avatar}/>
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        {displayName} <span className='post__headerSpecial'>
                            {verified && <VerifiedIcon className='post__badge' />} @{username}
                        </span>
                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p>{text}</p>
                </div>
            </div>
            <img src={image} alt="" />
  
            <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize='small' className='footer__icon'/>
                <RepeatIcon fontSize='small' className='footer__icon'/>
                <FavoriteBorderIcon fontSize='small' className='footer__icon'/>
                <PublishIcon fontSize='small' className='footer__icon'/>

            </div>
        </div>
    </div>
  )
}

export default Post