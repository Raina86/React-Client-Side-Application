import React, { useState} from 'react';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'; //1

const Signup =( props) => {
    const [username,setUsername] = useState('');//2
    const [ password,setPassword]= useState(''); //2
    

    const handleSubmit= (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/user/register",{ //1
          method:'POST',//2
          body:JSON.stringify({user:{username:username,password:password}}),  //3
          headers:new Headers({
               'Content-Type': 'appliaction/json'   //4
          })

        }).then(
            (response) => response.json() //5
        ).then((data)  =>{
            props.updateToken(data.sessionToken)//6
        })
    }
    
    return(
        <div>
          <h1>Sign Up </h1>
          <Form on submit= {handleSubmit}> 
           <Form>
           <FormGroup>
               <Label htmlFor="username">Username</Label>
               <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
           </FormGroup>
           <FormGroup>
               <Label htmlFor="password">Password</Label>
               <Input onChange={(e)=> setPassword(e.target.value)} name="password" value={password}/>            </FormGroup>
           <Button type ="submit">Signup</Button>
           </Form>
           </Form>
        
        </div>
    )
}

// let handleSubmit= (event) => { //1
//     event.preventDefault();
//     console.log(username,password);
// }

export default Signup;