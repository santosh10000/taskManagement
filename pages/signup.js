
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { TextFeild } from "../components/TextFeild";
import userService from "../service/userService";

function SignUp(){
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [userName, setUserName]= useState('')
    const[  userContentFromDb, setuserContentFromDb] = useState([]);
   
    const verfiedUserName = userContentFromDb.findIndex(function(user, index){
        return user.userName === userName && user.email === email;
    })
    const users = userContentFromDb[verfiedUserName]
    function addUser(){
        
        const user = {email, userName, password}
       
            userService.add(user).then((response)=>{
                console.log(email)
                console.log(userName)
                console.log(password)
                console.log(userContentFromDb);
                setEmail('')
                setPassword('')
                setUserName('');
            })
        
    }
    function alertHandle(){
        alert("Username / email seems to be taken, please use other credentials!!")
    }

    useEffect(()=>{
        userService.getAllUser().then((response)=>{
            setuserContentFromDb(response.data)


        }).catch(error=>console.log(error))
    }, [])
    
    return(
        <div className='mt-10 max-w-xl mx-auto'>
      
        <TextFeild label="User-name"
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
        inputprops={{type: 'text', placeholder: 'santosh10'}}
        />
        <br />
        <TextFeild label="Email"
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        inputprops={{type: 'email', placeholder: 'santoshkharel9684@gmail.com'}}
        />
       <br />
        <TextFeild label="Password"
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        inputprops={{type: 'password', placeholder: ''}}
        />
      {
        users ?  <Link href=''>
        <Button onClick={alertHandle} >
         Submit
        </Button>
       </Link> :  <Link href='/login'>
        <Button onClick={addUser} >
         Submit
        </Button>
       </Link>
      }
    </div>
    )
}
export default SignUp;