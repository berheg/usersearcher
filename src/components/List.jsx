import React, {Component} from "react";
import {UserConsumer} from "./context/userContext";
class List extends Component {

  render(){
    
    return (    
      <UserConsumer>
        {
          (user) => {
            return <li >
                      <a href={`//github.com/${user.login}`}>{user.login}</a> 
                    </li> 
          }
        }
      </UserConsumer>      
            
    )
       
  };
}

export default List;
