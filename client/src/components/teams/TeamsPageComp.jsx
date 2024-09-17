import React from 'react';
import './TeamsPageComp.css';
import imgSrc from '../../assets/event-temp-img.jpg'
import teamsData from '../../data/member.json'
import { GithubIcon, InstagramIcon, Linkedin } from 'lucide-react';

// const teamsData = [
//   {
//     fullName: "Daliya Debbarma",
//     enrollmentNumber: "22UEI038",
//     roleInTriac: "Graphic design (Member)",
//     yourPhotoAccessibleDriveLink: "https://drive.google.com/drive/folders/1WB_zBtVn354Jrvvp7Q21RYNq_KSMM9Cc",
//     linkedinProfileUrl: "https://www.linkedin.com/in/daliya-debbarma-957819289",
//     instagramProfileUrl: "https://www.instagram.com/_._dly_._"
//   },
//   {
//     fullName: "Diganta Das",
//     enrollmentNumber: "21UEI036",
//     roleInTriac: "Public Relations Executive Head",
//     yourPhotoAccessibleDriveLink: "https://drive.google.com/file/d/1Y5V5Q2wohD3vcE2QwxOcjmeGCqp72L09/view?usp=drivesdk",
//     linkedinProfileUrl: "https://www.linkedin.com/in/diganta-das-662589229",
//     instagramProfileUrl: "https://www.instagram.com/invites/contact/?i=yvizxvv8i0kq"
//   },
//   {
//     fullName: "Anushka Acharjee",
//     enrollmentNumber: "21UEI003",
//     roleInTriac: "Vice President (Management)",
//     yourPhotoAccessibleDriveLink: "https://drive.google.com/file/d/1TbxrtP7mLFOX7U_Eitf0m06w-MZfvVvr/view?usp=drivesdk",
//     linkedinProfileUrl: "https://www.linkedin.com/in/anushka-acharjee-57b6bb255",
//     instagramProfileUrl: "Nil"
//   },
//   // Add all other members here
// ];

const TeamsPageComp = () => {
    return (
        <div className="teams-section w-full min-h-screen">
            <h1 className="teams-title">Meet Our Teams</h1>
            <div className="teams-cards">
                {teamsData.map((team, index) => (
                    <div key={index} className="team-card">
                        <img
                            src={imgSrc}
                            alt={team.fullName}
                            className="team-photo"
                            onError={(e) => e.target.src = 'default.jpg'} // Default photo if link fails
                        />
                        <div className="team-info">
                            <h2 className="team-name">{team.fullName}</h2>
                            <p className="team-role">{team.roleInTriac}</p>
                            <div className="team-links flex flex-row gap-3 justify-center items-center">
                               <span>
                               <a href={team.linkedinProfileUrlPleaseKeepYourActive} target="_blank" rel="noopener noreferrer" className="linkedin-link"> 
                                    <span> <Linkedin size={30} className="bg-[#645be6] rounded text-white p-1" /> </span>
                                </a>
                               </span>

                                {team.instagramProfileUrl !== "Nil" && (
                                    <a href={team.instagramProfileUrl} target="_blank" rel="noopener noreferrer" className="instagram-link"><span>

                                        <InstagramIcon size={30} className=" bg-pink-700 rounded text-white p-1" /> </span></a>
                                )}
                                {team.githubProfileUrl !== "Nil" && (
                                    <a href={team.githubProfileUrl} target="_blank" rel="noopener noreferrer" className="instagram-link"> <span> <GithubIcon size={30} className="bg-black rounded text-white p-1" /> </span></a>
                                )}


                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamsPageComp;
