const BentoCart=({src1,title,discription})=>{
    return(
        <div className="relative size-full">
            <video
            src={src1}
            loop
            muted
           // autoPlay
            className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                    <h1 className="bento-title special-font">
                        {title}
                    </h1>
                    {
                        discription &&(
                            <p className="mt-3 max-w-64 text-xs md:text-base">
                                    {discription}
                            </p>
                        ) 
                    }
                </div>

            </div>
        </div>
    )
}
const Features = () => {

    return ( 
        <>
        <section className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="font-circular-web text-lg text-blue-50 opacity-45">
                        Into the Game

                    </p>


                
                <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-40">
                In the world of pixels and endless battles, a true gamer knows that every respawn is just another chance to win 
                </p>
                </div>
          
            <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
            <BentoCart
             src1="videos/feature-2.mp4"
             title={ <>BO<b>R</b>DER LAND</> }
             discription="Borderlands is an action role-playing first-person looter shooter video game franchise in a space Western science fantasy setting, created and produced"
 
            />
            </div>
            <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
                <div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 ">
                        <BentoCart
                         src1="videos/feature-2.mp4"
                         title={ <>BO<b>R</b>DER LAND</> }
                         discription="Borderlands is an action "
                        />
                </div>
                    <div className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                    <BentoCart
                         src1="videos/feature-3.mp4"
                         title={ <>BO<b>R</b>DER LAND</> }
                         discription="Borderlands  "
                        />
                    </div>
                    <div className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                    <BentoCart
                         src1="videos/feature-4.mp4"
                         title={ <><b>N</b>EXTUS</> }
                         discription="Borderlands  "
                        />
                    </div>
                    <div className="bento-tilt_2 me-20 ms-5">
                        <video
                        src="videos/feature-5.mp4"
                        autoPlay
                        muted
                        loop
                        className="size-full object-cover object-center"
                        />
                    </div>
            </div>

            </div>
        </section>
        </>
     );
}
 
export default Features;