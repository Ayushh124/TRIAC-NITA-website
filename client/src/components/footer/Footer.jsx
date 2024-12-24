import React from 'react';

function Footer({ id }) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-[#A8A9B4]">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-4 sm:px-6 lg:px-8 lg:pt-24">
        {/* Back to Top Button */}
        <div className="flex justify-end">
          <div
            className="inline-block rounded-full bg-teal-600 p-3 shadow-lg transition transform hover:scale-110 hover:bg-teal-500 hover:animate-pulse"
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
          >
            <span className="sr-only">Back to top</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          {/* Logo and Mission */}
          <div>
            <div className="flex justify-center text-teal-600 lg:justify-start">
              <h1 className="text-4xl font-bold">TRIAC</h1>
            </div>

            <p className="mx-auto mt-6 max-w-md text-lg text-center leading-relaxed lg:text-left">
              Welcome to TRIAC! Our mission is to drive innovation in electronics and engineering through hands-on projects and community engagement.
            </p>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer Nav" className="mt-12 lg:mt-0">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12">
              <li>
                <button
                  className="transition hover:text-teal-300 hover:underline"
                  onClick={() => handleScrollToSection('about-section')}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  className="transition hover:text-teal-300 hover:underline"
                  onClick={() => handleScrollToSection('events-section')}
                >
                  Events
                </button>
              </li>
              <li>
                <button
                  className="transition hover:text-teal-300 hover:underline"
                  onClick={() => handleScrollToSection('join-section')}
                >
                  Join Us
                </button>
              </li>
              <li>
                <button
                  className="transition hover:text-teal-300 hover:underline"
                  onClick={() => handleScrollToSection('contact-section')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-8 lg:justify-start">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-teal-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M23 3a10.78 10.78 0 01-3.107.85A4.774 4.774 0 0022.452.468a9.486 9.486 0 01-3.125 1.19A4.769 4.769 0 0016.615 0c-2.633 0-4.771 2.137-4.771 4.771 0 .373.042.737.123 1.084A13.553 13.553 0 011.671 2.356a4.772 4.772 0 001.476 6.366A4.744 4.744 0 01.9 8.666c0 .09 0 .18.002.269a4.774 4.774 0 003.83 4.68A4.688 4.688 0 01.808 15.4a4.774 4.774 0 004.398 3.283c-2.563 2.01-5.805 3.216-9.137 3.216a13.481 13.481 0 01-1.62-.1A19.04 19.04 0 0023 3z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-teal-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12 0c-6.627 0-12 5.373-12 12 0 5.3 3.438 9.853 8.205 11.463.6.111.82-.258.82-.574v-2.216c-3.338.73-4.038-1.605-4.038-1.605-.546-1.378-1.334-1.744-1.334-1.744-1.09-.745.082-.73.082-.73 1.205.085 1.835 1.235 1.835 1.235 1.07 1.835 2.809 1.304 3.493.998.108-.776.418-1.304.762-1.604-2.666-.305-5.466-1.33-5.466-5.929 0-1.305.467-2.379 1.236-3.221-.124-.303-.536-1.523.117-3.168 0 0 1.008-.316 3.3 1.21 1.357-.377 2.812-.563 4.25-.569 1.438.006 2.893.192 4.25.569 2.292-1.527 3.3-1.21 3.3-1.21.653 1.645.241 2.865.117 3.168.77.842 1.236 1.916 1.236 3.221 0 4.61-2.8 5.624-5.466 5.929.343.36.65.955.65 1.91v2.671c0 .316.22.685.824.574 4.767-1.61 8.205-6.163 8.205-11.463 0-6.627-5.373-12-12-12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-teal-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M20.448 20.448H16.75v-5.568c0-1.327-.025-3.03-1.84-3.03-1.845 0-2.126 1.444-2.126 2.929v5.669H9.48V9.81h3.494v2.255h.049c.487-.92 1.675-1.88 3.444-1.88 3.677 0 4.35 2.418 4.35 5.56v5.269zM5.662 7.615c-1.296 0-2.345 1.05-2.345 2.346 0 1.297 1.05 2.345 2.345 2.345 1.297 0 2.347-1.048 2.347-2.345 0-1.296-1.05-2.346-2.347-2.346zm1.734 12.833H3.928V9.81h3.468v10.638zM22.25 0H1.75C.783 0 0 .784 0 1.75v20.5C0 23.216.783 24 1.75 24h20.5c.967 0 1.75-.784 1.75-1.75V1.75C24 .784 23.217 0 22.25 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center text-xs text-center space-y-4">
            <div className="flex space-x-4">
              <a className="hover:underline hover:text-teal-300" href="/privacy-policy">
                Privacy Policy
              </a>
              <span>|</span>
              <a className="hover:underline hover:text-teal-300" href="/terms-of-service">
                Terms of Service
              </a>
            </div>
            <p>Made with ❤️ by the TRIAC Team</p>
            <p>© 2024 triac-nita. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
