import Button from "./button";

const ImageBox=({src,clippath})=>(

        <div className={clippath}>
                        <img
                        src={src}
                        />
                    </div>

)

const Contact = () => {
    return ( 
        <>
        <div className="my-20 min-h-96 w-screen px-10" id="contact">
            <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
                <div className="absolute -left-20 top-0 lg:w-96  hidden h-full w-72 overflow-hidden sm:block lg:left-20">
                        <ImageBox
                        src="img/contact-1.webp"
                        clippath="contact-clip-path-1"
                        />
                        <ImageBox
                        src="img/contact-2.webp"
                        clippath="contact-clip-path-2 lg:translate-y-10 translate-y-60"
                        />
                </div>
                <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80 ">
                <ImageBox
                        src="img/swordman-partial.webp"
                        clippath="absolute md:scale-125"
                        />
                             <ImageBox
                        src="img/swordman.webp"
                        clippath="sword-man-clip-path md:scale-125"
                        />
                </div>
                <div className="flex flex-col items-center text-center ">
                    <p className="font-general text-[10px] uppercase">
                        zepedan
                    </p>
                    <p className="special-font mt-5 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
                        NEW GAME <br/>BORDERLAND2 
                    </p>
                    
                    <Button 
                    title="contact US"
                    containerClass="mt-10 bg-slate-500 "

                    />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Contact;