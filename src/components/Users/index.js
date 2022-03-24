
import React, {useEffect,useState, Component} from 'react';
import api from '../../axios';
export default function Users()
{
    const [users,setUsers] = useState([]);
    useEffect(() => {
      api.get("users").then(({data})=>{
        setUsers(data);
      })
      //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    console.log(users);

    return <div className='users'></div>
    
}
