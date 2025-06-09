import { useRef, useState } from "react";
import { ArrowLongRightIcon, ArrowLongLeftIcon, } from "@heroicons/react/24/outline";

export default function Carousel() {
    const [index, setIndex] = useState(0)
    const imgRef=useRef(null)

    const PrevImage=()=>{
        imgRef.current.backgroundColor="red"
        
        // animate(
        //     [
        //       { opacity: 1, easing: "ease-out" },
        //       { opacity: 0.1, easing: "ease-in" },
        //       { opacity: 0 },
        //     ],
        //     2000,
        //   );
        // (index<images.length)?setIndex(index+1):setIndex(images.length)
        
    }

    const NextImage=()=>{
        imgRef.current.animate(
            [
              { opacity: 1, easing: "ease-out" },
              { opacity: 0.1, easing: "ease-in" },
              { opacity: 0 },
            ],
            2000,
          );
        (index<images.length)?setIndex(index+1):setIndex(images.length)
    }

    const images = [
        {
            index: 1,
            src: "src/assets/images/Carousel1.jpg"
        },
        {
            index: 2,
            src: "src/assets/images/Carousel2.jpg"
        },
        {
            index: 3,
            src: "/src/assets/images/openmic2.o2.png",
        }, 
        {
            index: 4,
            src: "/src/assets/images/logo.png"
        },
    ]
    return (
        <>
            <div className="flex flex-row w-8/12 object-fill overflow-hidden h-8/12 m-auto relative items-center">
             <button onClick={PrevImage} className="cursor-pointer opacity-70 bg-gray-100 rounded-full absolute left-3"><ArrowLongLeftIcon className="size-16 hover:-translate-x-2 ease-in-out duration-500"/></button>
                {
                    images.map((item) =>
                        <img ref={imgRef} src={item.src} key={item.index} />

                    )
                }
             <button onClick={NextImage} className="cursor-pointer opacity-70 bg-gray-100 rounded-full absolute right-3"><ArrowLongRightIcon className="size-16 hover:translate-x-2 ease-in-out duration-500"/></button>
             </div>
        </>
    )
}