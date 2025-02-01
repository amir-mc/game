import { useRef } from "react";
import { useState } from "react";

import Button from "./button";
import { FaPlay } from "react-icons/fa";
import Buttons from "./button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";



const Hero = () => {
    const [curentIndex,setcurentIndex]=useState(1)
    const [hasClick,serhasclick]=useState(false)
    const [isLoading ,setisLoading]=useState(true)
    const [loadVideo,setloadVideo]=useState(0)

    const totalVideo=4
    const nextVideoref=useRef(null)

    const videoSrc=(index)=>`videos/hero-${index}.mp4` 

    const handleMinivid=()=>{   
        serhasclick(true)
        setcurentIndex((prevIndex)=>prevIndex+1)
    } 
    const upComingVideo=(curentIndex % totalVideo)+1
    const handlevidLoaded=()=>{
        setloadVideo(upComingVideo)
    }
   

    const videoSrc=(index)=>`/videos/hero-${index}.mp4` 

    const handlevidLoaded=()=>{   
        
        setloadVideo((prev)=>prev+1)
    } 
    //const upComingVideo=(curentIndex % totalVideo)+1
    const handleMinivid=()=>{
        serhasclick(true)
        setcurentIndex((previndex)=>(previndex % totalVideo)+1)
    }
    useGSAP(
        () => {
          if (hasClick) {
            gsap.set("#next-video", { visibility: "visible" });
            gsap.to("#next-video", {
              transformOrigin: "center center",
              scale: 1,
              width: "100%",
              height: "100%",
              duration: 1,
              ease: "power1.inOut",
              onStart: () => nextVideoref.current.play(),
            });
            gsap.from("#current-video", {
              transformOrigin: "center center",
              scale: 0,
              duration: 1.5,
              ease: "power1.inOut",
            });
          }
        },
        {
          dependencies: [curentIndex],
          revertOnUpdate: true,
        }
      );

    return ( 
        <>
        <div className="relative h-dvh w-screen overflow-x-hidden ">
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                <div>
                     <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">

                        <div className="origin-center scale-50 opacity-0 transition-all duration-500 hover:scale-100 hover:opacity-100" onClick={handleMinivid}>
                            <video 
                            ref={nextVideoref}
                            src={videoSrc((curentIndex % totalVideo)+1)}
                            loop
                            muted
                            id="curent-video"

                        <div className="origin-center scale-50 opacity-0 transition-all duration-500 hover:scale-100 hover:opacity-100" 
                        onClick={handleMinivid}>
                            <video 
                            ref={nextVideoref}
                            src={videoSrc((curentIndex % totalVideo) + 1)}
                            loop
                            muted
                            id="current-video"

                            className="size-64 origin-center scale-150 object-cover object-center"
                            onLoadedData={handlevidLoaded}
                            />
                        </div>
                     </div>

                     <video 
                     ref={nextVideoref}
                     src={videoSrc(curentIndex)}
                    id="next-video"
                     loop
                     muted 
                     className="absolute-center invisible absolute z-0 size-64 object-cover object-center"
                     onLoadedData={handlevidLoaded}
                     />
                     <video
                     src={videoSrc(curentIndex === totalVideo-1 ? 1:curentIndex)}
                     autoPlay
                     muted
                     loop
                     className="absolute left-0 top-0 size-full object-cover object-center"
                     onLoadedData={handlevidLoaded}
                     />

                </div>
                <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75 ">
                <b>A</b>mir 
                </h1>
                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className="mt-24 px-5 sm:px-10">
                        <h5 className=" text-sm special-font hero-heading text-blue-100">
                            <span>G<b>A</b>mig hub</span>

                        </h5>
                        <p className="mt-5 font-robert-regular text-lg text-blue-100"> 
                            the gaming website for gamers<br/>
                            <span className="font-robert-medium">
                                Gaming community
                            </span>
                        </p>
                        <Buttons id="watch-trailer" title="watch trailer" leftIcon={<TiLocationArrow />} containerClass="bg-yellow-500 flex-center gap-1"/>
                       
                    </div>



                </div>
            </div>
        </div>
        </>
     );
}
     
export default Hero;