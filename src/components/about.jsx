import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Animatetitle from "./animat";
gsap.registerPlugin(ScrollTrigger)

const About = () => {
    
    useGSAP(()=>{
        const clipanimate=gsap.timeline({
            scrollTrigger:{
                trigger:'#clip',
                start:'center center',
                end:'+=800 center',
                scrub:0.02,
                pin:true,
                pinSpacing:true
            }
        })
        clipanimate.to('.mask-clip-path',{
            width:'100vw',
            height:'100vh',
            borderRadius:0
        })
    })





    return ( 
        <>
        <div id="about" className="min-h-screen w-screen ">
                <div className="relative mb-8 mt-36 flex flex-col items-center gap-5 ">
                    <h2 className="font-general text-sm  uppercase md:text-[10px]">
                            adventure
                    </h2>
                    <Animatetitle title='adventure game' containerClass='mt-5 !text-black text-center'/>
                    <div className="about-subtext">
                        <p>try new</p>
                        <p>try the best</p>
                    </div>  
                </div>
                <div className="h-dvh w-screen"id="clip">
                    <div className="mask-clip-path about-image">
                        <img 
                        src="img/about.webp"
                        alt="about"
                        className="absolute left-0 top-0 size-full object-cover"
                        />
                    </div>
                </div>
        </div>
        </>
     );
}
 
export default About;