import React from 'react';
import Axios from '../../Axios';
import InputType from "../../Containers/InputType/InputType"

class AddResource extends React.Component{


    state={
       resourcename: "",
       email:" ",
       enterprizeid:" ",
       employeenumber:" ",
       billable:" ",
       location:" "

    }

 


   
    onChangeHandler=(event)=>{
     event.preventDefault()
     this.setState({
        
        [event.target.name]: event.target.value
    })
    }

    onPostHandler=(event)=>
    {
        event.preventDefault()
        this.setState({
           
           [event.target.name]: event.target.value
       })
        const formData={
            resourcename: this.state.resourcename,
            email:this.state.email,
            enterprizeid:this.state.enterprizeid,
            employeenumber:this.state.employeenumber,
            billable:this.state.billable,
            location:this.state.location
     
        }
     

        Axios.post('/employeeDetails.json',formData).then(
            response=>{
                console.log(response)
            })
    }

    
    render()
    {
        return (
            <div>
               <form onSubmit={this.onPostHandler}>
                ResourceName : <input type = "text" name = "resourcename" placeholder="resourceName"  onChange={this.onChangeHandler} /><br/>
                
                EmailId :<input type = "email" name = "email" placeholder="email" onChange={this.onChangeHandler}/><br/>

                EnterprizeId :<input type = "text" name = "enterprizeid" placeholder="enterprizeid"  onChange={this.onChangeHandler}/><br/>

                EmployeeNumber : <input type="text" name="employeenumber" placeholder="employeenumber"  onChange={this.onChangeHandler}/><br/>

               Billable : <select name="billable" placeholder="billable" onChange={this.onChangeHandler}>
                    <option value="selectVal">--Select a Value--</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  
                  </select> 

                   <br/>
                  Offshore:<input type="radio"  value="Offshore" name="location" onChange={this.onChangeHandler} />
                  Onshore : <input type ="radio" value="Onshore" name="location"onChange={this.onChangeHandler}/>
                <br/>
                <input type="Submit" name="Submit"/>
                </form>
               
            </div>
        );
        

    }

}

export default  AddResource;