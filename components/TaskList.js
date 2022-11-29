import { Button } from './Button'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import TodoService from '../service/todoService'

function TaskList(){
    const [taskList, setTaskList]= useState([])

    useEffect(()=>{
        getAllTask();
    }, [])
    const getAllTask = () =>{
        TodoService.getAll().then((response)=>{
            setTaskList(response.data)
        })
    }
    const removeTask = (id)=>{
      TodoService.deleteTask(id).then((response)=>{
        getAllTask();
      }).catch(error=>{
        console.log(error)
      })
    }
    
    const renderCard = ()=> taskList.map((user)=>
    <div className='bg-gray-300 p-5 flex items-center justify-between ' key={user.id}>
     <div> 
      <h3 className='font-bold text-lg  text-gray-700'>{user.task}</h3>
      <span className='font-normal text-gray-600'>{user.time > 1 ? <h3><b>{user.time} hrs</b></h3>: <h3><b>{user.time} hr</b></h3> }
      </span>
     </div>
     <div className='flex gap-4'>
     <Link href={`add/${user.id}`} >
     <button>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
</svg>
      </button>
     </Link>
      <button onClick={()=>removeTask(user.id)} >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
      </button>
     </div>
    </div>)
  return (
    <div>
        
          <Link href='/add'>
          <Button>ADD TASK</Button>
          </Link>
        
        <div className="grid gap-5 md:grid-cols-2">
        {taskList.length ? renderCard():
         <h1 className='text-center col-span-2 text-gray-700 font-semibold'><b> NO TASK , PLEASE ADD TASKS!</b></h1>}
    </div>
    <br /><br />
    <div className='text-center'>
    <Link href='/home'>
        <Button>
         Logout
        </Button>
       </Link>
    </div>
    </div>
  )
}
export default TaskList;
