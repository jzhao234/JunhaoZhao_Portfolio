"use client";

import {useState, useRef, useEffect, ReactNode} from "react"

type ExperienceItemProps = {
  logo: ReactNode;
  name: string; 
  location: string;
  date: string; 
  [key: string]: any;
};

export default function ExperienceItem({logo, name, location, date, ...rest}: ExperienceItemProps){
  const [isOpen, setIsOpen] = useState(false);
  const [parentWidth, setParentWidth] = useState(0);
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current){
      setParentWidth(parentRef.current.offsetWidth);
    }
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev)
  }

  return(
    <div ref={parentRef} onClick={toggleDropdown} className = "m-2 p-2 text-black bg-white dark:text-white dark:bg-[#131213] rounded-xl shadow-xs shadow-[#1E90FF]/25 flex-col cursor-pointer">
      <div className = "flex justify-between items-center space-x-8">
        <div className = "flex items-center space-x-2 px-1">
          <div className = "w-10 h-10 mr-3">
            {logo}
          </div>
          <div className = "flex-col">
            <div className = "flex-col">
              <div>
                <p className = "font-medium">{name}</p>
              </div>
              <div>
                <p className = "font-thin"> {location} </p>
              </div>
            </div>
          </div>
        </div>
        <div className = "flex-col items-center">
          <div className = "pr-1">
            <p className = "flex justify-end font-light">{date}</p>
          </div>
          <div className = "flex justify-end text-[#1E90FF]">
            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="currentColor" className = {`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
              <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
            </svg>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className = "pl-5 pr-3 py-5" style = {{width: parentWidth}}>
          <div>
            <p> {rest.title} </p>
          </div>
          <div>
            <p> {rest.classTitle} </p>
            <p> {rest.class1} </p>
            <p> {rest.class2} </p>
            <p> {rest.class3} </p>
            <p> {rest.class4}</p>
            <p> {rest.class5} </p>
            <p> {rest.class6} </p>
            <p> {rest.class7} </p>
            <p> {rest.class8} </p>
            <p> {rest.class9} </p>
            <p> {rest.class10} </p>
            <p> {rest.class11} </p>
            <p> {rest.class12} </p>
            <p> {rest.class13} </p>
          </div>
        </div>
      )}
    </div>
  );
}