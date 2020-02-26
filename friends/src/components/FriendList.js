import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axios
            .get('/api/friends')
            .then(res => {
                setFriends(res)
            })
            .catch(err => {
                
            })
    })

        return (
            <div className="friend-box">

            </div>
        )
    

}

export default FriendsList;