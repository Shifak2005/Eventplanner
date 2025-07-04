import React from "react";
import image from "../pages/image/pic12.webp";
import logo from "../pages/image/sklogo.png";
import logo2 from "../pages/image/team.png";
import image2 from "../pages/image/person1.png";
import image3 from "../pages/image/person2.png";
import image4 from "../pages/image/person3.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import img5 from "../pages/image/pic6.avif";

import { IoHome } from "react-icons/io5";

const About = () => {
  return (
    <>
      <div className="">
        <img src={image} className=" w-full h-160 -mt-40  absolute " alt="" />
        <div className=" absolute text-6xl font-bold  font-serif text-gray-900 italic ml-150 mt-20 ">
          About Us-
        </div>

        {/* <a href="/">  <IoHome className=" text-3xl mt-10 ml-185 absolute hover:text-amber-200" /></a> */}
      </div>

      <div className=" w-300 ml-40 h-130 mt-50 opacity-90 absolute shadow-2xl shadow-black bg-black">
        <div className="w-24 bg-amber-50 rounded-full mt-10 ml-140 ">
          <img src={logo} className=" " alt="" />
        </div>
        <div className=" text-white font-bold font-serif text-6xl ml-99 mt-10">
          Ceremony and <br />
          <span className=" -ml-10"> Event Specialists</span>
        </div>

        <p className=" text-amber-50 ml-40 mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          inventore consectetur dolorum sint, optio illum ullam, incidunt <br />
          reiciendis, nihil explicabo deleniti. Excepturi vel itaque, architecto
          saepe fuga dolorem nobis minima accusamus eaque, eligendi inct <br />
          quis vitae? Velit provident harum tempore ea ad? Facere provident
          porro sint, modi, ad fugit molestias eius iste ipsa ea illo <br />
          repudiandae adipisci accusamus nobis minus explicabo voluptate .
        </p>
      </div>

      <div className=" bg-red-100 w-full h-280 mt-110">
        <img src={logo2} className=" w-60 mt-70 ml-159 absolute" alt="" />
        <div className=" text-6xl mt-115 ml-130 absolute text-pink-900 font-bold font-serif">
          Meet Our Team
        </div>
        <div className=" text-2xl mt-134 ml-124 absolute text-gray-500 ">
          Purus velit at volutpat sapien ullamcorper rhoncus.
        </div>

        <div className=" w-full h-100 flex bg-tranparent absolute mt-150">
          <div className="  w-100 h-40 mt-20 ml-40 ">
            <img src={image2} className="w-40 rounded-full" alt="" />
            <div className=" text-3xl font-bold -ml-3 text-red-950">
              Alex Bennett
            </div>
            <div className=" -ml-20 text-gray-700 text-xl">
              Lorem ipsum dolor consetetur sadipscing
            </div>
            <div className=" flex text-3xl ml-2 gap-5 mt-3 text-red-950 ">
              <div
                className=" hover:text-amber-300
              "
              >
                {" "}
                <FaFacebook />
              </div>
              <div
                className=" hover:text-amber-300
              "
              >
                {" "}
                <AiFillTwitterCircle />
              </div>
              <div
                className=" hover:text-amber-300
              "
              >
                {" "}
                <FaLinkedin />
              </div>
            </div>
          </div>

          <div className="  w-100 h-40 mt-20 ml-30 ">
            <img src={image3} className="w-40 rounded-full" alt="" />
            <div className=" text-3xl font-bold -ml-3 text-red-950">
              Morgan Davis
            </div>
            <div className=" -ml-20 text-gray-700 text-xl">
              Lorem ipsum dolor consetetur sadipscing
            </div>
            <div className=" flex text-3xl ml-2 gap-5 mt-3 text-red-950 ">
              <div
                className=" hover:text-amber-300
              "
              >
                {" "}
                <FaFacebook />
              </div>
              <div
                className=" hover:text-amber-300
              "
              >
                {" "}
                <AiFillTwitterCircle />
              </div>
              <div
                className=" hover:text-amber-300
              "
              >
                {" "}
                <FaLinkedin />
              </div>
            </div>
          </div>

          <div className="  w-100 h-40 mt-20 ml-30 ">
            <img src={image4} className="w-40 rounded-full" alt="" />
            <div className=" text-3xl font-bold -ml-3 text-red-950">
              Jordan Taylor
            </div>
            <div className=" -ml-20 text-gray-700 text-xl">
              Lorem ipsum dolor consetetur sadipscing
            </div>
            <div className=" flex text-3xl ml-2 gap-5 mt-3 text-red-950 ">
              <div
                className=" hover:text-amber-300
              "
              >
                {" "}
                <FaFacebook />
              </div>
              <div
                className=" hover:text-amber-300
              "
              >
                {" "}
                <AiFillTwitterCircle />
              </div>
              <div
                className=" hover:text-amber-300
              "
              >
                {" "}
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full h-screen mt-20 flex justify-center gap-20 bg-pink-200">
        <div className=" text-amber-950  font-bold italic text-7xl mt-50 w-130 ">
          What Our Clients Are Saying
          <p className=" mt-10 text-2xl font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            recusandae aperiam mollitia magnam, inventore ullam, iste quae
            sapiente impedit in nostrum praesentium. Corporis eum minima
            incidunt! Atque quis perspiciatis ab.
          </p>
        </div>

        <div className="flex justify-center items-center  w-160 ">
          <div className="h-130 w-90 -ml-80 mt-30 absolute">
            <img className="h-130" src={img5} alt="" />
          </div>
          <div className="h-130 w-80 ml-60 mt-6 absolute bg-red-300  ">
            <div className=" text-white ml-10 mt-10 text-4xl absolute">
              Choose a life <br /> partner not <br /> because you <br />
              can merely live <br /> with them, but <br /> because you <br />
              cannot imagine <br /> living without <br /> them
            </div>
            <div className=" text-white italic mt-110 text-2xl ml-40 ">
              Emly
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-black w-full h-120 ">
        <img src={logo2} className="w-50  ml-165" alt="" />
        <div className=" text-white ml-115 -mt-5 font-bold font-serif text-4xl">
          Start Planning Your Events Today{" "}
        </div>
        <div className=" text-gray-500 text-xl ml-95 mt-4">
          “Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin
          libero, vel malesuada <br />
          <span className=" ml-5">
            velit. Nullam et maximus lorem. Suspendisse maximus dolor quis
            consequat volutpat.".
          </span>
        </div>

        <a href="/Register">
          {" "}
          <button className=" bg-pink-500 text-white text-2xl p-3 ml-175 mt-10 hover:bg-pink-800">
            Start Now
          </button>
        </a>
      </div>
    </>
  );
};

export default About;
