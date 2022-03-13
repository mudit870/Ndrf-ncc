import React, { useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import Post from './Post';

function Feed() {
    const [posts, setPosts] = useState([]);

    const sendPost = e => {
        e.preventDefault();

        // push operation from api
    }

  return (
    <div className='feed'>
        <div className='feed_inputContainer'>
            <div className='feed_input'>
                <CreateIcon />
                <form>
                    <input type="text"/>
                    <button onClick={sendPost} type="submit">Send</button>
                </form>
            </div>
            <div className='feed_inputOption'>
                <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
                <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
                <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
                <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7fc15e" />
            </div>
        </div>

        {posts.map((post) => (
            <Post />
        ))}
        <Post 
            name='Mudit Sharma' 
            description='This is test' 
            message='Wow it worked'
        />
    </div>
  )
}

export default Feed