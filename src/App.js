import React, { useState } from "react";
import "./App.css";
import CutOut from "./assets/Images/Cut  Out.png";
import Logo from "./assets/Images/swiggy.png";
import person from "./assets/Images/Business.jpg";
import GroupImg from "./assets/Images/group photo.png";

function App() {
  const companies = [
    { name: "Swiggy", logo: Logo },
    { name: "Swiggy", logo: Logo },
    { name: "Swiggy", logo: Logo },
    { name: "Swiggy", logo: Logo },
    { name: "Swiggy", logo: Logo },
    { name: "Swiggy", logo: Logo },
    { name: "Swiggy", logo: Logo },
    { name: "Swiggy", logo: Logo },
    { name: "Swiggy", logo: Logo },
    { name: "Swiggy", logo: Logo },
    { name: "Swiggy", logo: Logo },
    { name: "Swiggy", logo: Logo },
    { name: "Swiggy", logo: Logo },
    { name: "Swiggy", logo: Logo },
    { name: "Swiggy", logo: Logo },
    { name: "Swiggy", logo: Logo },
    { name: "Swiggy", logo: Logo },
    { name: "Swiggy", logo: Logo },
  ];

  const faculty = [
    {
      name: "ASHISH DAVE",
      designation: "CEO, Mirae Asset Venture Investments",
      image: person,
      company: Logo,
    },
    {
      name: "ASHISH DAVE",
      designation: "CEO, Mirae Asset Venture Investments",
      image: person,
      company: Logo,
    },
    {
      name: "ASHISH DAVE",
      designation: "CEO, Mirae Asset Venture Investments",
      image: person,
      company: Logo,
    },
    {
      name: "ASHISH DAVE",
      designation: "CEO, Mirae Asset Venture Investments",
      image: person,
      company: Logo,
    },
    {
      name: "ASHISH DAVE",
      designation: "CEO, Mirae Asset Venture Investments",
      image: person,
      company: Logo,
    },
    {
      name: "ASHISH DAVE",
      designation: "CEO, Mirae Asset Venture Investments",
      image: person,
      company: Logo,
    },
    {
      name: "ASHISH DAVE",
      designation: "CEO, Mirae Asset Venture Investments",
      image: person,
      company: Logo,
    },
    {
      name: "ASHISH DAVE",
      designation: "CEO, Mirae Asset Venture Investments",
      image: person,
      company: Logo,
    },
    {
      name: "ASHISH DAVE",
      designation: "CEO, Mirae Asset Venture Investments",
      image: person,
      company: Logo,
    },
    {
      name: "ASHISH DAVE",
      designation: "CEO, Mirae Asset Venture Investments",
      image: person,
      company: Logo,
    },
    {
      name: "ASHISH DAVE",
      designation: "CEO, Mirae Asset Venture Investments",
      image: person,
      company: Logo,
    },
    {
      name: "ASHISH DAVE",
      designation: "CEO, Mirae Asset Venture Investments",
      image: person,
      company: Logo,
    },
  ];

  const mentors = [
    {
      name: "NITHIN KAMATH",
      title: "Co-Founder, Zerodha",
      image: person,
    },
    {
      name: "NITHIN KAMATH",
      title: "Co-Founder, Zerodha",
      image: person,
    },
    {
      name: "NITHIN KAMATH",
      title: "Co-Founder, Zerodha",
      image: person,
    },
    {
      name: "NITHIN KAMATH",
      title: "Co-Founder, Zerodha",
      image: person,
    },
    {
      name: "NITHIN KAMATH",
      title: "Co-Founder, Zerodha",
      image: person,
    },
    {
      name: "NITHIN KAMATH",
      title: "Co-Founder, Zerodha",
      image: person,
    },
  ];

  const faqData = [
    {
      title: "Do you guarantee placements?",
      content:
        "Stoa’s week-long 'skill sprints' enable individuals to develop diverse business skills and build a proof of their competence, making it easier to make career transitions or pivot roles. However, success depends on an individual’s hard work and dedication to their goals, supported by Stoa’s career assistance resources.",
    },
    {
      title: "Do you guarantee placements?",
      content:
        "Stoa’s week-long 'skill sprints' enable individuals to develop diverse business skills and build a proof of their competence, making it easier to make career transitions or pivot roles. However, success depends on an individual’s hard work and dedication to their goals, supported by Stoa’s career assistance resources.",
    },
    {
      title: "Do you guarantee placements?",
      content:
        "Stoa’s week-long 'skill sprints' enable individuals to develop diverse business skills and build a proof of their competence, making it easier to make career transitions or pivot roles. However, success depends on an individual’s hard work and dedication to their goals, supported by Stoa’s career assistance resources.",
    },
    {
      title: "Do you guarantee placements?",
      content:
        "Stoa’s week-long 'skill sprints' enable individuals to develop diverse business skills and build a proof of their competence, making it easier to make career transitions or pivot roles. However, success depends on an individual’s hard work and dedication to their goals, supported by Stoa’s career assistance resources.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="bg-[#4d0210]  justify-center items-center">
            <div className="container mx-auto py-8  justify-between items-start px-6 px-12">
              <div className="text-white w-3/6 ">
                <h2 className="text-2xl ms-5">Stoa</h2>
                <p className="text-sm w-3/6 text-stone-500">
                  Asia's best altertive to an MBA
                </p>
                <h1 className="text-4xl font-medium  leading-tight">
                  Online MBA is dull, unlike Stoa. Change your career trajectory
                  in 24 weeks.
                </h1>
                <p className="text-sm w-3/6 text-stone-500">
                  Learn business skills by doing, build proof of work & get
                  feedback, join a community of 1000+ active professionals, and
                  access career services.
                </p>
                <div className="flex justify-end">
                  <img src={CutOut} alt="Founder" className="w-2/3" />
                </div>
              </div>
              <div className="absolute top-[200px] left-[670px] bg-white rounded p-4 shadow-lg w-3/12 mt-8 mt-0">
                <h2 className="text-sm text-red-900 font-semibold ">
                  Talk to our team and get your profile evaluated.
                </h2>
                <p className="text-sm  text-stone-500">
                  next cohort start 5 Jan 2024
                </p>
                <form className="space-y-1">
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-1/2 px-4 py-0 border"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-1/2 px-4 py-2 border"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <input
                      type="email"
                      placeholder="Email ID"
                      className="w-1/2 px-4 py-2 border"
                    />
                    <input
                      type="text"
                      placeholder="City"
                      className="w-1/2 px-4 py-2 border"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-full px-4 py-2 border"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      placeholder="Work Exp."
                      className="w-1/2 px-4 py-2 border"
                    />
                    <input
                      type="text"
                      placeholder="Job Title"
                      className="w-1/2 px-4 py-2 border"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      placeholder="Job Function"
                      className="w-1/2 px-4 py-2 border"
                    />
                    <input
                      type="text"
                      placeholder="Current CTC"
                      className="w-1/2 px-4 py-2 border"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="consent" />
                    <label className="text-xs mt-3">
                      I allow Stoa to contact me regarding their offerings via
                      email, WhatsApp, and call.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-3 bg-red-600 text-white py-2 rounded-md font-semibold"
                  >
                    TALK TO US
                  </button>
                  <p className="text-xs ms-3 text-stone-500">
                    THE FIRST STEP OF 1000+ HAPPY STOANS
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="bg-[#f3e4ce] min-h-screen ms-12 z-index-5 w-7/12">
            <div className="bg-[#dec49e] p-7 -mt-8  ">
              <div className="grid grid-cols-2 grid-cols-3 text-center ">
                <div className="border-b border-red-700 pb-2">
                  <h2 className="text-red-700 font-bold  text-sm">6 months</h2>
                  <p className="text-sm text-red-700 font-bold">
                    ONLINE PROGRAM
                  </p>
                </div>
                <div className="border-b border-red-700">
                  <h2 className="text-red-700 font-bold text-sm">
                    3 day induction
                  </h2>
                  <p className="text-sm text-red-700 font-bold">
                    OFFLINE IN BANGALORE
                  </p>
                </div>
                <div className="border-b border-red-700">
                  <h2 className="text-red-700 font-bold text-sm">10-12 hrs</h2>
                  <p className="text-sm text-red-700 font-bold">
                    ONLINE PER WEEK
                  </p>
                </div>
                <div className="pt-2">
                  <h2 className="text-red-700 font-bold text-sm">1,000+</h2>
                  <p className="text-sm text-red-700 font-bold">
                    ALUMNI NETWORK
                  </p>
                </div>
                <div className="pt-2">
                  <h2 className="text-red-700 font-bold text-sm">300+</h2>
                  <p className="text-sm text-red-700 font-bold">
                    HIRING PARTNERS
                  </p>
                </div>
                <div className="pt-2">
                  <h2 className="text-red-700 font-bold text-sm">
                    2.95L <span className="text-sm">+ 18% GST</span>
                  </h2>
                  <p className="text-sm text-red-700 font-bold">PROGRAM FEE</p>
                </div>
              </div>
            </div>
            <div className="bg-white py-2 mt-3">
              <div className="flex justify-start ms-8">
                <h3 className="text-stone-500 text-lg font-semibold text-center mb-6">
                  Featured in
                </h3>
              </div>
              <div className="flex justify-center space-x-10 items-center">
                <img src="" alt="Times of India" className="h-10 grayscale" />
                <img src="" alt="The Ken" className="h-10 grayscale" />
                <img src="" alt="TechCrunch" className="h-10 grayscale" />
                <img
                  src=""
                  alt="The Economic Times"
                  className="h-10 grayscale"
                />
              </div>
            </div>
            <div className="bg-green-900 p-10 mt-3">
              <h2 className="text-white text-lg font-bold mb-6">
                Careers after Stoa
              </h2>
              <div className="flex justify-between mb-10">
                <div className="content-start bg-green-700 text-white p-3 px-6 rounded-md text-center">
                  <p className="text-xxs">AVG RISE IN SALARY</p>
                  <h3 className="text-xl font-bold">62%</h3>
                </div>
                <div className="bg-green-700 text-white p-3 px-6 rounded-md text-center">
                  <p className="text-xxs">AVG SALARY</p>
                  <h3 className="text-xl font-bold">12.7 LPA</h3>
                </div>
                <div className="bg-green-700 text-white p-3 px-6 rounded-md text-center">
                  <p className="text-xxs">MEDIAN SALARY</p>
                  <h3 className="text-xl font-bold">11.5 LPA</h3>
                </div>
                <div className="bg-green-700 text-white p-3 px-6 rounded-md text-center">
                  <p className="text-xxs">HIGHEST SALARY</p>
                  <h3 className="text-xl font-bold">20 LPA</h3>
                </div>
              </div>
              <div className="grid grid-cols-6 gap-6">
                {companies.map((company, index) => (
                  <div
                    key={index}
                    className="bg-white flex justify-center items-center h-12 w-20 rounded-md"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-12"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white mt-3 p-8">
              <h1 className="text-2xl font-bold mb-6">
                Faculty with real-world experience
              </h1>
              <div className="grid grid-cols-4 gap-6">
                {faculty.map((member, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center text-center space-y-4"
                  >
                    <img
                      src={member.image}
                      alt={`${member.name}`}
                      className="h-12"
                    />
                    <img
                      src={member.company}
                      alt={`${member.name}-company`}
                      className="bg-stone-400 absolute right-[20px] top-[13px] h-5 w-8 mt-2 object-contain"
                    />
                    <div>
                      <h3 className="font-bold text-xs">{member.name}</h3>
                      <p className="content-start text-xxs text-gray-600">
                        {member.designation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="mt-3">
                <img src={GroupImg} alt="Group Imahge" />
              </div>
            </div>
            <div className="bg-[#edc88f] border-stone-700 border-2 mt-3">
              <div className=" ms-6 py-5">
                <h1 className="text-red-700 mb-3 font-bold ">
                  Here from alumini
                </h1>
                <p className="text-sm px-3 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="flex">
                  <div>
                    <img className="h-7 m-3" src={person} alt="Group Imahge" />
                  </div>
                  <div className="mt-3">
                    <h2 className="text-red-700 font-bold text-xs">
                      chitrangada Mishra
                    </h2>
                    <p className="text-gray-600 text-xxs">COHORT 9</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p- mt-3">
              <h1 className="text-lg mb-2 p-2 font-bold text-red-600">
                Backed by the best
              </h1>
              <div className="grid grid-cols-6  justify-items-center">
                {mentors.map((mentor, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-12 object-cover rounded-full"
                    />
                    <h3 className="font-bold text-xxs">{mentor.name}</h3>
                    <p className="text-xs text-gray-400">{mentor.title}</p>
                  </div>
                ))}
              </div>
              {/* <p className="text-center text-lg text-gray-600">and many more</p> */}
            </div>
          </div>
        </div>
        <div className="bg-[#3c0a0b] min-h-screen flex mt-3 mx-12 justify-center items-center">
          <div className="text-white max-w-screen-md p-6 pt-12">
            <h1 className="text-4xl font-bold mb-1 text-center">
              Ready to level up?
            </h1>
            <p className="text-center text-gray-500 text-sm mb-6">
              Attend an info session to understand how Stoa can benefit you.
            </p>
            <div className="text-center mb-8">
              <button className="bg-yellow-500 text-xs text-black font-bold py-2 px-4">
                REGISTER FOR INFO SESSION
              </button>
              <p className="text-yellow-400 text-xs mt-2">
                NEXT COHORT STARTS 22ND SEPTEMBER 2023
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white text-black p-6 rounded shadow-lg ">
                <h2 className="text-red-700 text-2xl font-bold mb-4">
                  Pricing
                </h2>
                <p className="text-xl  font-semibold">
                  Rs. 2.95L <span className="text-sm">+ 18% GST</span>
                </p>
                <p className="text-red-700 mt-2">What you get</p>
                <ul className="mt-4 text-xs space-y-2">
                  <li className="border-b-2 p-1 border-gray-300">
                    ✔️ Access to the Stoa Program
                  </li>
                  <li className="border-b-2 p-1 border-gray-300">
                    ✔️ 23+ learning sprints led by industry experts
                  </li>
                  <li className="border-b-2 p-1 border-gray-300">
                    ✔️ Access to career mentoring and coaching sessions
                  </li>
                  <li className="border-b-2 p-1 border-gray-300">
                    ✔️ Lifetime access to the Stoa Community
                  </li>
                  <li className="border-b-2 p-1 border-gray-300">
                    ✔️ Access to career services and the Charter exam
                  </li>
                </ul>
              </div>

              <div className="bg-white text-black p-6 rounded shadow-lg">
                <h2 className="text-2xl text-red-700 font-bold mb-4">
                  Admission Process
                </h2>
                <h2 className="font-bold text-sm mt-2">
                  Join the info session
                </h2>
                <p className="text-xs w-11/12 text-gray-500">
                  Get an overview of the Program and Charter and understand if
                  it's the right fit for you.
                </p>
                <h2 className="font-bold text-sm mt-2">
                  Join the info session
                </h2>
                <p className="text-xs w-11/12 text-gray-500">
                  Get an overview of the Program and Charter and understand if
                  it's the right fit for you.
                </p>
                <h2 className="font-bold text-sm mt-2">
                  Join the info session
                </h2>
                <p className="text-xs w-11/12 text-gray-500">
                  Get an overview of the Program and Charter and understand if
                  it's the right fit for you.
                </p>
                <h2 className="font-bold text-sm mt-2">
                  Join the info session
                </h2>
                <p className="text-xs w-11/12 text-gray-500">
                  Get an overview of the Program and Charter and understand if
                  it's the right fit for you.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-3 mx-11 bg-[#f8f1e1] p-6  shadow-lg">
            <h1 className="text-center text-4xl">FAQs</h1>
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 py-4">
                <div
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h2 className=" font-semibold">{faq.title}</h2>
                  <span
                    className={`text-2xl transition-transform transform ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>
                {openIndex === index && (
                  <div className="mt-4 text-sm text-gray-700">
                    <p>{faq.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <footer className="bg-black text-white py-8 px-5 mx-12 mt-3">
          <div className="container mx-auto n items-center">
            <div className="flex justify-between">
              <div className="flex items-center space-x-4">
                <img src={Logo} alt="Stoa Logo" className="w-12 h-12" />
                <span className="text-2xl font-bold">stoa</span>
              </div>
              <div className="flex flex-row space-x-8 text-lg m-4 ">
                <p href="#" className="">
                  Stoa Daily
                </p>
                <p href="#" className="">
                  Stoa Events
                </p>
                <p href="#" className="">
                  Community
                </p>
              </div>
            </div>
            <div className="flex flex-row space-x-8 text-xs justify-end">
              <p href="#" className="">
                About
              </p>
              <p href="#" className="">
                Work at Stoa
              </p>
              <p href="#" className="">
                Hire from Stoa
              </p>
              <p href="#" className="">
                Teach at Stoa
              </p>
              <p href="#" className="">
                Contact Us
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
