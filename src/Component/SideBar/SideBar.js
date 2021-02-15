import React from 'react';
import{Link} from "react-router-dom";
import "./SideBar.css";
import image from "../../icons/menu.jpg";
import AddResource from '../AddResource/AddResource';
import {Route, Switch} from"react-router-dom";
class SideBar extends React.Component{

   state={
       isOpen:false
   };

    handleOnClick=()=>
    {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
          }))
    }
  
    render()
    {

        let sidebar= (this.state.isOpen ?
              <div className="sidebar">  <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/addResource">Add the Resource</Link>
              </li>
              <li>
                <Link to="/getResource">Get the Resource</Link>
              </li>
            </ul>

           
            </div> 
            
            : null)     
       
       return(
          <div>
              <img src="image" onClick={this.handleOnClick} />
              {sidebar}
          </div> 
        );
    }
    
}

 export default SideBar;