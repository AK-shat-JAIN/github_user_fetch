import { useState } from "react";
import useUserlist from "../../hooks/useUserlist";
import Usercard from "../Usercard/Usercard";
import useDebounce from "../../hooks/useDebounce";

import "./Display.css"

function Display(){

    const [name, setName] = useState("");
    const userlist = useUserlist(name);
    const debouncedCallback = useDebounce((e)=> setName(e.target.value), 500);

    return (
        <div className="outer-cover">
            <div>
                <input type="text" placeholder="Enter User Id" onChange={debouncedCallback}/>
            </div>
            <div className="users">
                {
                    userlist.loading ? <h1>Loading...</h1> :
                    (userlist.list==undefined) ? <h1> No User Found</h1> :
                    userlist.list.map((user) => {
                        return <Usercard key={user.id} avatar={user.imgsrc} name={user.id} />
                    })
                }
            </div>
        </div>
    )
}

export default Display;