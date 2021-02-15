import logo from './logo.svg';
import './App.css';
import {Route,Switch} from "react-router-dom";
import AddResource from "./Component/AddResource/AddResource";
import SideBar from './Component/SideBar/SideBar';
function App() {
  return (
    
    <div>

        
       
     
      <SideBar/>
       
      <Route path="/addResource" component={AddResource}/>
     
    </div>
    
  );
}

export default App;
