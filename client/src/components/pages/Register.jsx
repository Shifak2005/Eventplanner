import React, { useState } from "react";
import image from "../pages/image/pic6.jpg";

const Register = () => {

  const [fname,setfname]= useState();
  const[lname,setlname]=useState();
  const [password,setpassword]=useState();
  const [city,setcity]=useState();
  const [gender,setgender]=useState();
  const [address,setaddress]=useState();



  const [Regiserdata, setRegisterdata]=useState({
        fname:"",
        lname:"",
        password:"",
        city:"",
        gender:"",
        address:""
      })

      const handelchange=(e)=>{
      const{name,value}=e.target;
      setRegisterdata((previousdata)=>({...previousdata,[name]:value})) 
    }

    const handleSubmit=(e)=>
    {
      e.preventDefault();
      console.log(Regiserdata);

      setRegisterdata({
        fname:"",
        lname:"",
        password:"",
        city:"",
        gender:"",
        address:""
      })
    }

  return (
    <>
      <div className="w-full h-screen -mt-30 bg-amber-300 relative">
        <div>
          <img className="w-700 h-194 blur" src={image} alt="" />
          <div className="w-100 h-150 bg-red-300 -mt-160 ml-140  rounded-2xl absolute">
            <form action="" onSubmit={handleSubmit}>
              <div className=" text-4xl text-amber-50 mt-5 ml-23">
                {" "}
                <u>Register Now </u>
              </div>
              
              <label
                className=" text-2xl ml-10 mt-5 absolute text-amber-50"
                htmlFor=""
              >
                First name
              </label>
              <input
                type=" text"
                name="fname"
                className="bg-amber-50 w-80 p-3 rounded-sm ml-10 mt-15"
                id=""
                placeholder="Enter Your First name"
                value={Regiserdata.fname}
                onChange={handelchange}
              />
              <label className=" text-2xl ml-10 mt-10 text-amber-50" htmlFor="">
                Last name
              </label>
              <input
                type="text"
                name="lname"
                className="bg-amber-50 w-80 p-3 rounded-sm ml-10 mt-5"
                id=""
                placeholder="Enter your Last Name"
                 value={Regiserdata.lname}
                 onChange={handelchange}
              />
              
              <div className=" ">
                  <label className=" text-2xl ml-10 mt-10 text-amber-50" htmlFor="">
               City
              </label>
              <input
                type="text"
                name="city"
                className="bg-amber-50 w-80 p-3 rounded-sm ml-10 mt-5"
                id=""
                placeholder="Enter your city"
                 value={Regiserdata.city}
                 onChange={handelchange}
              />
                
              </div>


              <div className=" text-amber-50 text-xl ml-10 mt-5 ">
                <label htmlFor="Gender " name="Gender" value={Regiserdata.gender} onChange={handelchange}>Gender : </label>
                <label htmlFor="Gender">Male</label>
                <input type="radio"  />
                <label className="ml-8" htmlFor="Gender">
                  Female
                </label>
                <input type="radio" />
              </div>


              
              
              <div className=" mt-5 ml-10">
                <label className=" text-xl text-amber-50" htmlFor="address">Address</label>
                <input name="address" value={Regiserdata.address} onChange={handelchange} className="bg-amber-50 text-gray-600 w-60 h-10 ml-2 rounded-sm " id=""/>
              </div>


              <button className=" bg-amber-50 w-34 h-14 rounded-sm ml-34 text-gray-500 mt-2 hover:bg-amber-200 hover:text-black" type="submit">
               Submit
              </button>
               <div className=" text-amber-50 text-md mt-3 ml-22">
                 <span>Already have an account? </span>
                 <a className=" hover:text-blue-700" href="/Btn1">Login </a>
                 
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Register;
