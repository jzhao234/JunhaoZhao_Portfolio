"use client";

export default function Projects({photo, title, description, ...rest}){
    return(
    <div className="flex-col"> 
        <div> 
            {photo}
        </div>
        <div> 
            <div> 
                {title}
            </div>
            <div>
                {description}
            </div>
            <div> 
                {rest.technology1}
                {rest.technology2}
                {rest.technology3}
                {rest.technology4}
                {rest.technology5}
                {rest.technology6}
                {rest.technology7}
                {rest.technology8}
                {rest.technology9}
                {rest.technology10}
            </div>
        </div>
        <div>
            <button>
                demo
            </button>
            <button> 
                git repository
            </button>
        </div>
    </div>
    );
}