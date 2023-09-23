import axios from 'axios';
import { useState, useEffect } from 'react';

function useUserlist(userid) {
    const [userlist, setUserlist] = useState({
        loading: true,
        list: [],
    });
  
  async function fetchUserlist() {

    try {
        let response;
        if(userid) {
            response = await axios.get(`https://api.github.com/search/users?q=${userid}`);
        }
        else{
            response = await axios.get(`https://api.github.com/search/users?q=AKSHAT`);
        }

        const result = response.data.items.map((data)=>{
            return {
                id: data.login,
                imgsrc: data.avatar_url
            }
        });

        setUserlist((state)=>({
            ...state,
            loading: false,
            list: result
        }))
    } catch (error) {
        console.log("Error while fetching Data",error.message)
        setUserlist((state)=>({
            ...state,
            loading: false,
            list: undefined
        }))  
    }
  }

  useEffect(() => {
    fetchUserlist();
  }, [userid]);

  return userlist;
}

export default useUserlist;