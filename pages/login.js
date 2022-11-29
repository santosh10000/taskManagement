import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { TextFeild } from "../components/TextFeild";
import userService from "../service/userService";

function Login(){
    const [password, setPassword]= useState('')
    const [userName, setUserName]= useState('')
    const[dbUsername, setdbUsername]= useState([])
    const[dbpassword, setdbpassword]= useState([])

    const verfiedUserName = dbUsername.findIndex(function(user, index){
        return user.userName === userName && user.password === password;
    })
   const user = dbUsername[verfiedUserName]
    useEffect(()=>{
        userService.getAllUser().then((response)=>{
          setdbUsername(response.data)


        }).catch(error=>console.log(error))
    }, [])
 function submit(){
    
    if(user){
        console.log(user)
    }else{
        alert("Incorrent Credentials")
    }
    
 }
    

    return(
        <div className='mt-10 max-w-xl mx-auto'>
      
        <TextFeild label="User-name"
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
        inputprops={{type: 'text', placeholder: 'Coding'}}
        />
        <br />
       
        <TextFeild label="Password"
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        inputprops={{type: 'password', placeholder: '5hrs'}}
        />
        { user?  <Link href='/landing'>
        <Button onClick={submit} >
         Submit
        </Button>
       </Link>: <Link  href=''>
        <Button onClick={submit}>
         Submit
        </Button>
       </Link> }
       
    </div>
    )

}
export default Login;