import TaskList from '../components/TaskList'
function Landing(){
    return(
        <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-32'>
    <h1 className='text-center font-bold text-2xl text-gray-700'>TO DO LIST </h1>
    <TaskList/>
        </div>
    )

}
export default Landing;