

import React from 'react'

import { IoIosArrowForward } from "react-icons/io";



const Navbar = () => {



  return (
    

  
    <div className="flex items-center justify-between py-3 px-10">
        
  
    <a href="/singup" className=' className="flex items-center gap-1"'>
      <h3 className="text-3xl font-semibold">
        Crypto<span className="text-blue-500">Predicition</span>
      </h3>
    </a>
   

    


   
      <Button  className="bg-black text-white rounded-none px-4 py-2 ml-2">
        Get Started <IoIosArrowForward />
      </Button>
  
  </div>

  )
};

export default Navbar;
