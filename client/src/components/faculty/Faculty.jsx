import React, { useState, useEffect } from 'react';
import './Faculty.css';
import imgSrc from '../../assets/event-temp-img.jpg'; // Your image

const facultyData = [
  {
    name: "Dr. Jayanta Kumar Rakshit",
    position: "HOD & Associate Professor",
    department: "Electronics and Instrumentation Engineering",
    email: "jayantarakshit.eie@nita.ac.in",
    image: imgSrc // Replace with actual image path
  },
  {
    name: "Dr. Debanjan Acharyya",
    position: "Assistant Professor",
    department: "Electronics and Instrumentation Engineering",
    email: "iammdebanjan@gmail.com",
    image: imgSrc // Replace with actual image path
  },
  {
    name: "Dr. SUBIR DAS",
    position: "Assistant Professor",
    department: "Electronics and Instrumentation Engineering",
    email: "subir.mcet@gmail.com",
    image: imgSrc // Replace with actual image path
  },
  {
    name: "Dr. Yogesh Kumar Sariya",
    position: "Assistant Professor",
    department: "Electronics and Instrumentation Engineering",
    email: "yogesh.sariyal@gmail.com",
    image: imgSrc // Replace with actual image path
  },
  {
    name: "Dr. APARUPA KAR",
    position: "Assistant Professor (Contractual)",
    department: "Electronics and Instrumentation Engineering",
    email: "goldylocks1990@gmail.com",
    image: imgSrc // Replace with actual image path
  },
  {
    name: "Dr. PRIYANKA DEY",
    position: "Assistant Professor (Contractual)",
    department: "Electronics and Instrumentation Engineering",
    email: "priyankadey.mtech@gmail.com",
    image: imgSrc // Replace with actual image path
  },
  {
    name: "Mrs. Priyanka Roy Goswami",
    position: "Assistant Professor (Contractual)",
    department: "Electronics and Instrumentation Engineering",
    email: "priyankad198219@gmail.com",
    image: imgSrc // Replace with actual image path
  },
  {
    name: "Dr. Rupam Gupta Roy",
    position: "Assistant Professor (Contractual)",
    department: "Electronics and Instrumentation Engineering",
    email: "rupamguptaroy05@gmail.com",
    image: imgSrc // Replace with actual image path
  }
];

const Faculty = () => {
  const [loading, setLoading] = useState(false); // Initial loading state
  const [imagesLoaded, setImagesLoaded] = useState(0); // To track number of loaded images

  // Handle image load
  const handleImageLoad = () => {
    setImagesLoaded((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    // When all images are loaded, stop showing the loader
    if (imagesLoaded === facultyData.length) {
      setLoading(false);
    }
  }, [imagesLoaded]);

  return (
    <div className="faculty-section w-full min-h-screen">
    {loading ? (
      // Show loader while images are loading
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    ) : (
      // Show content after all images are loaded
      <>
        <h1 className="faculty-title">Meet Our Faculty</h1>
        <div className="faculty-cards">
          {facultyData.map((faculty, index) => (
            <div key={index} className="faculty-card">
              <img
                src={faculty.image}
                alt={faculty.name}
                className="faculty-image"
                onLoad={handleImageLoad} // Trigger this function when the image loads
              />
              <div className="faculty-info">
                <h2 className="faculty-name">{faculty.name}</h2>
                <p className="faculty-position">{faculty.position}</p>
                <p className="faculty-department">{faculty.department}</p>
                <p className="faculty-email">
                  <a href={`mailto:${faculty.email}`} className="email-link">
                    {faculty.email}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </>
    )}
  </div>
  
  );
};

export default Faculty;
