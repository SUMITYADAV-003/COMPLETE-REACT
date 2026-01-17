import React, { useState } from "react";
import Card from "./Component/Card.jsx";

const App = () => {
  const [Name, setName] = useState("");
  const [Image, setImage] = useState("");
  const [Role, setRole] = useState("");
  const [Email, setEmail] = useState("");
  const [AllUser, setAllUsers] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    // console.log(Name);
    // console.log(Image);
    // console.log(Role);
    // console.log(Email);

    const oldusers = [...AllUser];
    oldusers.push({ Name, Image, Role, Email });
    setAllUsers(oldusers);
    console.log(oldusers);

    setEmail("");
    setName("");
    setRole("");
    setImage("");
  };

  const deleteHandler = (idx) => {
    const copyUsers = [...AllUser];
    copyUsers.splice(idx, 1);
    console.log("Delete users");
    setAllUsers(copyUsers);
  };

  return (
    <div className="h-screen bg-black text-white">
      <form
        onSubmit={(e) => {
          SubmitHandler(e);
        }}
        className="flex flex-wrap px-2 py-10 justify-center">
        <input
          required
          className="border-2 py-2 px-5 rounded m-2 font-semibold text-xl w-[45%]"
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          value={Name}
          placeholder="Enter Your Name "
        />
        <input
          required
          onChange={(e) => {
            setImage(e.target.value);
          }}
          className="border-2 py-2 px-5 rounded m-2 font-semibold text-xl w-[45%]"
          type="text"
          value={Image}
          placeholder="Enter Your Image Url "
        />
        <input
          required
          className="border-2 py-2 px-5 rounded m-2 font-semibold text-xl w-[45%]"
          type="text"
          value={Role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
          placeholder="Enter Your Role "
        />
        <input
          required
          className="border-2 py-2 px-5 rounded m-2 font-semibold text-xl w-[45%]"
          type="text"
          value={Email}
          placeholder="Enter Your Email "
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button className="py-2 px-5 active:scale-95 cursor-alias rounded w-[90%] m-2 font-semibold text-xl bg-emerald-700">
          Create User
        </button>
      </form>
      <div className="px-4 py-10 gap-4 flex flex-wrap m-5">
        {AllUser.map(function (elem, idx) {
          return <Card idx={idx} elem={elem} deleteHandler={deleteHandler} />;
        })}
      </div>
    </div>
  );
};

export default App;
