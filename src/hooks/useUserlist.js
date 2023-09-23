import axios from 'axios';
import { useState, useEffect } from 'react';

function useUserlist(userid) {
  const [userlist, setUserlist] = useState({
    loading: true,
    list: [],
  });
  const UserId = userid || 'AK-shat-JAIN'; 
  
  async function fetchUserlist() {

    const response = await axios.get(`https://api.github.com/search/users?q=${UserId}`);

    const result = response.data.items.map((data)=>{
        return {
            id: data.login,
            imgsrc: data.avatar_url
        }
    });

    setUserlist({
        list: result
    })    
  }

  useEffect(() => {
    fetchUserlist();
  }, [UserId]);

  return userlist;
}

export default useUserlist;