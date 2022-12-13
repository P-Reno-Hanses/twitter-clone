import React from 'react'
import "./TweetBox.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material';

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox__input">
                <Avatar/>
                <input placeholder='Whats Happening?' type="text" />
            </div>
                <input className='tweetBox__imageInput' placeholder='Optional: Enter Image URL' type="text" />
            <button className='tweetBox__button'>Tweet</button>
        </form>
    </div>
  )
}

export default TweetBox