/* eslint-disable react/prop-types */
import { GithubIcon, Instagram, InstagramIcon, Linkedin, Twitter } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
// {
//   "timestamp": "2024-03-21T05:58:52.258Z",
//   "fullName": "Daliya Debbarma ",
//   "enrollmentNumber": "22UEI038",
//   "roleInTriac": "Graphic design(member)",
//   "yourPhotoAccessibleDriveLink": "https://drive.google.com/drive/folders/1WB_zBtVn354Jrvvp7Q21RYNq_KSMM9Cc",
//   "linkedinProfileUrlPleaseKeepYourActive": "https://www.linkedin.com/in/daliya-debbarma-957819289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//   "instagramProfileUrl": "https://www.instagram.com/_._dly_._?igsh=MXIzM2pkbDNzOGMwMw=="
// }
const Card = ({item}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="relative cursor-pointer w-64 h-80 bg-gray-200 rounded-lg overflow-hidden shadow-md">
      <img
        src={item.yourPhotoAccessibleDriveLink}
        alt="placeholder"
        className={`w-full h-full object-cover`}
      />
      <div
        className={`${
          isHovered ? "opacity-100 bg-gray-900 bg-opacity-75  text-white  translate-y-0 " : "opacity-0   translate-y-[100%]"
        } absolute inset-0 flex justify-center items-center  transition-all duration-500 ease-in-out`}
      >
        <div className=" text-white rounded flex flex-col gap-4
         items-center justify-evenly  w-full h-full text-center
         ">
          <div>
          <h3 className="text-lg font-semibold">{item.fullName}</h3>
          <p className="text-sm">{item.roleInTriac}</p>
          </div>
        
          <div className="flex flex-row gap-4 justify-center items-center">
              <NavLink to={item.linkedinProfileUrlPleaseKeepYourActive}>
              <span>
                <Linkedin size={30} className=" bg-blue-700 rounded text-white p-1" />
              </span>
              </NavLink>
              <span> 
             
                <InstagramIcon size={30} className=" bg-pink-700 rounded text-white p-1" /> </span>
              <span> <GithubIcon size={30} className="bg-black rounded text-white p-1"/> </span>
              <span> <Linkedin size={30} className="bg-[#645be6] rounded text-white p-1" /> </span>
          </div>
          
        </div>
      </div>
      <div
        className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></div>
    </div>
  );
};

export default Card;
