import React from "react"
import Sonny from "../assests/sonny.png"
import UI from "../assests/ui-icon.png"
import GRAPHIC from "../assests/graphic-icon.png"
import SOFTWARE from "../assests/software-icon.png"
import APPLICATION from "../assests/application-icon.png"
import ServiceComponent from "./serviceComponent"

export default function Landing() {
  return (
    <div className="h-screen">
        <img src={Sonny} alt="sonny" className="mt-32  mx-auto w-[300px] h-[300px] rounded-full"/>
        <h1 className="mt-20 text-center text-[#ADEFD1] text-4xl sm:text-5xl font-semibold">My name is Sonny Sangha.</h1>
        <h1 className="mt-5 text-center text-[#ADEFD1] text-4xl sm:text-5xl font-semibold">UI/UX Designer</h1>
        <h3 className="mt-5 text-center text-[#ADEFD1] text-xl sm:text-2xl font-semibold">HEAD OF PIXELBERRY STUDIO</h3>
        <div className="mt-32 grid sm:grid md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-4 place-items-center">
          <div><ServiceComponent title="Graphic Design" icon={GRAPHIC}/></div>
          <div><ServiceComponent title="Web Design" icon={UI} /></div>
          <div><ServiceComponent title="Software" icon={SOFTWARE} /></div>
          <div><ServiceComponent title="Application" icon={APPLICATION} /></div>
        </div>
        <h1 className="text-center mt-20 text-[#ADEFD1] text-2xl sm:text-3xl md:text-4xl sm:px-12">I am happy to know you that 300+ projects done successfully!</h1>
        <div className="flex justify-center items-center">
        <button className="text-xl text-[#ADEFD1] mt-10 mb-5 border-4 border-[#ADEFD1] h-20 w-72">SEND A MESSAGE</button>
        </div>
    </div>
  )
}






