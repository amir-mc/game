import { useRef } from "react";
import { useState } from "react";

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
                            className="size-64 origin-center scale-150 object-cover object-center"
                            onLoadedData={handlevidLoaded}
                            />
                        </div>
                     </div>
                </div>
            </div>
        </div>
        </>
     );
}
     
export default Hero;