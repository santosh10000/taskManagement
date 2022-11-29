import Head from 'next/head'
import Image from 'next/image'
import { TaskList } from '../components/TaskList'
import styles from '../styles/Home.module.css'
import AddUser from './add'
import HomePage from './home'


export default function Home() {
  return (
    <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-32'>
      
      <HomePage/>
      
     
    </div>
  )
}
