import React from 'react'

function Footer({id}) {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 text-[#A8A9B4]">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <div
            className="inline-block rounded-full bg-teal-600 p-2 shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
            onClick={handleScroll}
          >
            <span className="sr-only">Back to top</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          <div>
            <div className="flex justify-center text-teal-600 lg:justify-start">
              <svg className="h-8" viewBox="0 0 118 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="20" fill="currentColor" className="font-bold text-2xl">
                  ClubName
                </text>
              </svg>
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed lg:text-left">
              Welcome to ClubName! Our mission is to [insert mission statement here]. Join us for events, networking, and more.
            </p>
          </div>

          <nav aria-label="Footer Nav" className="mt-12 lg:mt-0">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12">
              <li>
                <a className="transition hover:text-teal-300" href="/about">
                  About Us
                </a>
              </li>

              <li>
                <a className="transition hover:text-teal-300" href="/events">
                  Events
                </a>
              </li>

              <li>
                <a className="transition hover:text-teal-300" href="/join">
                  Join Us
                </a>
              </li>

              <li>
                <a className="transition hover:text-teal-300" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6">
          <div className="text-center text-sm">
            <p>© 2024 ClubName. All rights reserved.</p>
            <p>
              <a className="hover:underline" href="/privacy-policy">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a className="hover:underline" href="/terms-of-service">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer


/*



*/