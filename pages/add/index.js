
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { TextFeild } from '../../components/TextFeild';
import TodoService from '../../service/todoService';
 function AddUser (){
  const [task, setTask]= useState('');
    const [time, setTime]= useState('');
    const router = useRouter();
    const {id} = router.query;

    function addUser(){
      const todo ={task, time}
      if(id){
        TodoService.updateTask(id, todo).then((response)=>{

        }).catch(error=>{
          console.log(error)
        })
      }else{
        TodoService.add(todo).then((response)=>{
          console.log(response.data)
          setTask('')
          setTime('')
         })
      }

    }
    const title = () =>{
      if(id){
        return <h2 className='text-center font-bold text-2xl text-gray-700'>Update Task</h2>
      }else{
        <h2 className='text-center font-bold text-2xl text-gray-700'>Add Task</h2>
      }
    }
    useEffect(()=>{
        TodoService.getTaskById(id).then((response)=>{
          setTask(response.data.task)
          setTime(response.data.time);       
           
        }).catch((error)=>{
            console.log(error)
        })
    }, [])
  return (
    <div className='mt-10 max-w-xl mx-auto'>
        {title()}
        <TextFeild label="Task"
        value={task}
        onChange={(e)=>setTask(e.target.value)}
        inputprops={{type: 'text', placeholder: 'Coding'}}
        />
        <br />
        <TextFeild label="Time"
        onChange={(e)=>setTime(e.target.value)}
        value={time}
        inputprops={{type: 'text', placeholder: '5hrs'}}
        />
       <Link href='/landing'>
        <Button onClick={addUser}>
         Submit
        </Button>
       </Link>
    </div>
  )
}
export default AddUser;
