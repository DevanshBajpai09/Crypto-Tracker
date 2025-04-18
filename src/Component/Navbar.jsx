

import React from 'react'

import { IoIosArrowForward } from "react-icons/io";
import { Button } from "@/components/ui/button"


const Navbar = () => {



  return (
    

  
    <div className="flex items-center justify-between py-3 px-10">
        
    <Button  className="flex items-center gap-1">
    <a href="/singup">
      <h3 className="text-3xl font-semibold">
        Crypto<span className="text-blue-500">Predicition</span>
      </h3>
    </a>
    </Button>

    


  
      <Button href="/auth/signup" className="bg-black text-white rounded-none px-4 py-2 ml-2">
        Get Started <IoIosArrowForward />
      </Button>
 
  </div>

  )
};

export default Navbar;
