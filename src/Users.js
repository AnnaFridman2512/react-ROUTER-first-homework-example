import React, {useState, useEffect} from 'react';
import {Route, Link, useRouteMatch} from "react-router-dom"; 
import User from "./User";



export default function Users(){
    let match = useRouteMatch();
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
          .then(response => response.json())
          .then(data => setUsers(data));
  }, []);

    
   return (
        <>  
        <h1>Users</h1>
            {users.map(user => (
                <ul key={user.id}>
                    <li>
                    <Link to={`${match.url}/${user.name}`}>{user.name}</Link>
                    </li>
                </ul>
            ))}
    
        
        <Route path={`${match.path}/:name`}>
            <User />
        </Route>
        

        </>
    );
}