import {NavLink} from "react-router-dom"; 
  

export default function Header(){
    return(
        <ul className="header">
        <li>
          <NavLink to="/" activeClassName="selected">Home</NavLink> {/*If we want to add class, we add "activeClassName" */}
        </li>
        <li>
          <NavLink to="/users" activeClassName="selected">Users</NavLink>
        </li>

      </ul>
    );
}