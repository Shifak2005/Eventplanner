import React from "react";
import image1 from "../pages/image/pic13.webp";
import cp1 from "../pages/image/couple1.jpeg";
import cp2 from "../pages/image/couple2.jpg";
import cp3 from "../pages/image/couple3.jpg";
import cp4 from "../pages/image/couple4.jpg";
import cp5 from "../pages/image/couple5.jpg";
import cp6 from "../pages/image/couple6.jpg";
import cp7 from "../pages/image/couple7.jpg";
import cp8 from "../pages/image/couple8.jpg";
import cp9 from "../pages/image/couple9.jpg";

import cp67 from "../pages/image/pic67.jpg";

const Stories = () => {
  return (
    <>
      <div className="w-full  -mt-30">
        <img src={image1} className=" w-full h-160    opacity-90" alt="" />
      </div>
      <div className=" w-full h-160 bg-black opacity-45  -mt-160"></div>
      <div className=" text-7xl font-serif font-bold ml-162  text-white absolute -mt-90">
        Stories
      </div>

      <div className=" flex bg-red-950 w-280 absolute -mt-50 ml-50 h-130">
        <div>
          <img src={cp67} className="w-90 h-110 ml-20 mt-10" alt="" />
        </div>
        <div className=" w-140 text-white text-4xl italic ml-10 mt-10 font-serif">
          Our Client's Feedback :-
          <div className=" text-2xl leading-loose p-9 ">
            “As parents, we wanted everything to be perfect for our daughter’s
            big day. The planners made sure every guest was looked after, and
            all events ran smoothly. We truly felt like guests at our own event
            – stress-free and happy!”......
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-3  gap-10  bg-red-100 h-750 w-full  ">
        <div className=" bg-white h-screen  mt-100 ml-20 ">
          <img src={cp1} className="h-150" w-100 alt="" />
          <div className=" text-2xl text-red-950 font-serif font-bold  ml-10 mt-2">
            Riya & Aman – April 2025{" "}
          </div>
          <div className=" text-sm p-3 text-gray-700">
            “Absolutely magical! From the floral décor to the lighting and stage
            setup, everything exceeded our expectations. The team understood our
            vision perfectly and brought it to life. Our guests still talk about
            how beautiful the venue looked!”
          </div>
        </div>

        <div className=" bg-white h-screen mt-100 w-100 ml-10 ">
          <img src={cp4} className="h-150 " alt="" />
          <div className=" text-2xl text-red-950 font-serif font-bold  ml-10 mt-2">
            Aisha & Azhar – April 2025{" "}
          </div>
          <div className=" text-sm p-3 text-gray-700">
            “We are so grateful for the seamless coordination. The planners
            handled everything so professionally that we could just focus on
            enjoying our day. Special thanks to the team for accommodating
            last-minute changes without any stress.”
          </div>
        </div>

        <div className=" bg-white h-screen  mt-100 w-100 ">
          <img src={cp2} className="h-150" alt="" />
          <div className=" text-2xl text-red-950 font-serif font-bold  ml-10 mt-2">
            Anjali & Raj – Dec 2024
          </div>
          <div className=" text-sm p-3 text-gray-700">
            “The catering was exceptional – every dish was delicious, and the
            presentation was top-notch. Many of our guests went out of their way
            to compliment the food. The live chaat and dessert counters were a
            big hit!”
          </div>
        </div>

        <div className=" bg-white h-screen   ml-20 ">
          <img src={cp3} className="h-150" w-100 alt="" />
          <div className=" text-2xl text-red-950 font-serif font-bold  ml-10 mt-2">
            Alfiza & Rahib – April 2025{" "}
          </div>
          <div className=" text-sm p-3 text-gray-700">
            “What we appreciated the most was the attention to detail. From
            personalized name cards to customized welcome hampers, every little
            thing was thoughtfully curated. Thank you for making our wedding so
            special and memorable.”
          </div>
        </div>

        <div className=" bg-white h-screen  w-100 ml-10 ">
          <img src={cp5} className="h-150 " alt="" />
          <div className=" text-2xl text-red-950 font-serif font-bold  ml-10 mt-2">
            Ana & Zyan – April 2025{" "}
          </div>
          <div className=" text-sm p-3 text-gray-700">
            “The entire wedding was like a dream come true. The team managed
            logistics so smoothly – from guest transportation to vendor
            coordination. We didn’t have to worry about a thing. Truly
            professional and heartfelt service.”
          </div>
        </div>

        <div className=" bg-white h-screen  w-100 ">
          <img src={cp7} className="h-150" alt="" />
          <div className=" text-2xl text-red-950 font-serif font-bold  ml-10 mt-2">
            Sneha & Rohan – June 2025
          </div>
          <div className=" text-sm p-3 text-gray-700">
            "The mehendi and sangeet décor was vibrant and fun – exactly what we
            wanted! Everything was on time, and the entertainment arrangements
            kept the energy high. Thank you for making our pre-wedding events
            just as unforgettable.”
          </div>
        </div>

        <div className=" bg-white h-screen  w-100  ml-20">
          <img src={cp8} className="h-150" alt="" />
          <div className=" text-2xl text-red-950 font-serif font-bold  ml-7 mt-2">
            Diya & Manish – Dec 2024
          </div>
          <div className=" text-sm p-3 text-gray-700">
            “From the first consultation to the final send-off, we felt
            supported and understood. Our planner was patient, responsive, and
            had great vendor connections. We couldn’t have asked for a better
            team.”
          </div>
        </div>

        <div className=" bg-white h-screen  w-100 ml-10">
          <img src={cp6} className="h-150" alt="" />
          <div className=" text-2xl text-red-950 font-serif font-bold  ml-10 mt-2">
            Siza & Asif June 2025
          </div>
          <div className=" text-sm p-3 text-gray-700">
            “The pre-wedding shoot setup was breathtaking. They found us a
            stunning location and arranged everything—props, outfits,
            photographer. Those pictures are now the highlight of our album!”
          </div>
        </div>

        <div className=" bg-white h-screen  w-100 ">
          <img src={cp9} className="h-150" alt="" />
          <div className=" text-2xl text-red-950 font-serif font-bold  ml-10 mt-2">
            Nikhil & Tanya – Nov 2024
          </div>
          <div className=" text-sm p-3 text-gray-700">
            “We had a multicultural wedding and the team handled everything so
            respectfully and gracefully. From the Punjabi rituals to the
            Christian ceremony, each part was perfectly planned and executed.”
          </div>
        </div>
      </div>
      
      <a href=""><button className=" bg-pink-600 text-white text-2xl rounded p-3 ml-165 mt-10 hover:bg-pink-800">See more Stories</button></a>

    </>
  );
};

export default Stories;
