const Buttons = ({ title,id,rightIcon,leftIcon,containerClass }) => {
  return (
    <button id="id"
     className={`group relative z-10 w-fit cursor-pointer overflow-hidden
         rounded-full  px-7 py-3 text-blak ${containerClass}`}
         >  
         {leftIcon}
            <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
                <div>
                {title}
                    </div>
                
               
            </span>
             {rightIcon}
         </button>
    

  );
};

export default Buttons;
