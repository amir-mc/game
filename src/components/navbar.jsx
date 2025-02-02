import { useEffect, useRef, useState } from "react";
import Button from "./button";
import { TiLocationArrowOutline } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const Navbar = () => {
    const userefnav=useRef(null)
    const [scrolll ,setscroll]=useState(0)
    const [visibleScroll ,setsvisibleScroll]=useState(false)

    const{y: currentScrollY  }=useWindowScroll()
    useEffect(()=>{
        if(currentScrollY===0){
            setsvisibleScroll(true)
            userefnav.current.classList.remove('floating-nav')
        }else if(currentScrollY>scrolll){
            setsvisibleScroll(false)
            userefnav.current.classList.add('floating-nav')
        }else if(currentScrollY<scrolll){
            setsvisibleScroll(true)
            userefnav.current.classList.add('floating-nav')
        }
        setscroll(currentScrollY)
    },[currentScrollY])

    useEffect(()=>{
        gsap.to(userefnav.current,{
                y:visibleScroll ? 0:-100,
                opacity:visibleScroll ? 1:0,
                duration:   0.2
        })
    },[visibleScroll,scrolll])

    const navItem=['Team','Vault','About','Contact']
    
    return ( 
        <>
        <div ref={userefnav} className="fixed inset-x-0 top-19 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
            <header className="absolute top-0.1 w-full-translate-y-12 ">
                <nav className="flex size-full items-center justify-between p-4 ">
                    <div className="flex items-center gap-7 ">
                        <img
                        src="/img/logo.png"
                        alt="logo"
                        className="w-10 "
                        />
                        <Button
                        id={'product-button'}
                        title={'product'}
                        rightIcon={<TiLocationArrowOutline/>}
                        containerClass={"bg-blue-50 md:flex hidden items-center justify-center gap-1"}
                        />
                    </div>
                    <div className="flex h-full item-center ">
                        <div className="hidden md:block">
                            {navItem.map((nav)=>(
                                <a key={nav} className="nav-hover-btn" href={`#${nav.toLocaleLowerCase()}`}>
                                    {nav}
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>
            </header>
        </div>
        </>
     );
}
 
export default Navbar;