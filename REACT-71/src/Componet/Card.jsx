import React from "react";

const Card = (props) => {
  return (
    <div className="h-100 w-2xs bg-emerald-400 relative top-2 rounded-2xl flex justify-center " style={{
      backgroundImage: `url(${props.users.coverImage})`
    }}>
      <img
        className="object-cover bg-cover bg-center rounded-b-full h-30 justify-center  "
        src={props.users.profile}
        alt=""
      />
      <div className="absolute top-40">
         <h3 className="text-sm  p-2 font-bold leading-1 uppercase">Full Name :- {props.users.fullName}</h3>
      <p className="text-sm uppercase p-2  font-bold leading-1">likesCount :- {props.users.likesCount}</p>
      <p className="text-sm text-emerald-900 text-center font-bold"> TITLE - {props.users.title}</p>
      <h3 className="font-bold uppercase text-center">viewsCount - {props.users.viewsCount}</h3>
      
      <button className="text-center p-4 bg-blue-500 rounded-3xl ml-20- font-bold text-sm leading-1 hover:bg-black hover:text-white overflow-hidden mt-3">followed </button>
      </div>
      
     
    </div>
  );
};

export default Card;
