import Link from "next/link";
import { Button } from "../components/Button";

function HomePage(){
  const santosh = "hello";

return(
    <div className="body-format">
      
        <h1 className='text-center mx-4 font-bold text-2xl text-gray-700'>
            WELCOME TO MY TODO APP
            <p>{santosh}</p></h1>
            
            <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-32'>
              <div className="text-center font-bold text-lg  text-gray-700">
                <h2 className="text-center body-text">If you are new to app then please sign up</h2>
                <Link href='/signup'>
                <Button>
                   Sign Up </Button>
                    </Link>
              </div>
              <div className="text-center font-bold text-lg  text-gray-700">
                <h2 className="text-center body-text">Already a user?? Please Login !!</h2>
                <Link href='/login'>
                <Button>
                   Login </Button>
                    </Link>
              </div>
            </div>

            <style jsx>{`
            .body-format{
              padding: 7rem;
            } 

          
`}</style>
           
    </div>


)

}
export default HomePage;