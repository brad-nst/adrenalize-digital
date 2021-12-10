import React, { useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { BiCaretRightCircle, BiCodeBlock, BiCaretRight } from "react-icons/bi"
import { MdWeb, MdPhoneAndroid, MdLaptopMac, MdOutlineDraw, MdCode } from "react-icons/md"
import { IoIosRocket } from 'react-icons/io'
import { IoGlobeOutline } from 'react-icons/io5'
import { useWindowHeight, useWindowWidth } from "../hooks"

const Index = () => {
  let windowWidth = useWindowWidth()
  let windowHeight = useWindowHeight()

  const [heroBgDimensions, setHeroBgDimensions] = useState({
    height: 0,
    width: 0,
  })

  useEffect(() => {
    if (document.getElementById("hero") !== null) {
      setHeroBgDimensions({
        height: document.getElementById("hero").offsetHeight,
        width: document.getElementById("indexWrapper").offsetWidth,
      })
    }
  }, [windowWidth, windowHeight])

  return (
    <div id="indexWrapper">
      <div
        id="hero"
        className="relative flex flex-col md:flex-row max-w-screen-xl mx-auto py-3"
      >
        <div
          className="heroBg"
          style={{
            height: heroBgDimensions.height,
            width: heroBgDimensions.width,
          }}
        />
        <StaticImage
          src="../assets/images/nstHeroImage.jpg"
          alt="Visually stunning, highly performant web, mobile and desktop applications"
          placeholder="blurred"
          className="md:w-1/2 mr-4 rounded-r-xl xl:rounded-xl shadow-md my-4"
        />
        <div className="flex flex-col w-full md:w-1/3 p-4 mx-auto">
          <h1 className="font-subheader text-4xl md:text-5xl font-bold text-gray-900 mt-auto">
            Visually stunning,
          </h1>
          <h1 className="font-subheader text-4xl md:text-5xl font-bold text-gray-900">
            Highly performant.
          </h1>
          <p className="py-4 font-medium text-lg md:text-xl leading-snug my-auto">
            Top businesses thrive on data-driven smart technologies, which is why we
            apply the latest in development technology to create products that
            push the limits of how our clients define success.
          </p>
          <h3 className="font-semibold text-xl md:text-2xl mx-auto md:mx-0">
            Are you ready to push limits with us?
          </h3>
          <button className="flex flex-row items-center text-xl px-4 py-2 bg-gray-900 hover:bg-gray-800 text-gray-100 font-bold font-subheader rounded-lg shadow-md mt-6 mb-2 md:my-auto mx-auto md:mx-0 md:mr-auto">
            Find out more
            <BiCaretRightCircle className="ml-3 text-2xl" />
          </button>
        </div>
      </div>
      <div className="flex my-4 p-4 max-w-screen-xl mx-auto">
        <h1 className="font-subheader text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          Build with the best.
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 py-2 max-w-screen-xl mx-auto">
        <div className="flex flex-col mt-1 p-4 hover:shadow-md rounded-lg">
          <div className="flex flex-row items-center mb-2">
            <MdWeb className="text-4xl text-gray-900" />
            <h2 className="text-2xl font-semibold text-gray-900 ml-2">
              Web Projects
            </h2>
          </div>
          <p className="text-base text-gray-900">
            From marketing to e-commerce, we build top of the line websites and progressive web applications
            to help you extend your business capabilities beyond average.
          </p>
          <button className="flex flex-row items-center mr-auto text-lg font-semibold mt-2 cursor-pointer">Learn More<BiCaretRight className="ml-2 text-xl"/></button>
        </div>
        <div className="flex flex-col mt-1 p-4 hover:shadow-md rounded-lg">
          <div className="flex flex-row items-center mb-2">
            <MdPhoneAndroid className="text-4xl text-gray-900" />
            <h2 className="text-2xl font-semibold text-gray-900 ml-2">
              Mobile Apps
            </h2>
          </div>
          <p className="text-base text-gray-900">
            Build your mobile app leveraging the same modern frameworks powering
            Spotify, Airbnb, Pinterest, Uber Eats and other enterprise grade
            applications.
          </p>
          <button className="flex flex-row items-center mr-auto text-lg font-semibold mt-2 cursor-pointer">Learn More<BiCaretRight className="ml-2 text-xl"/></button>
        </div>
        <div className="flex flex-col mt-1 p-4 hover:shadow-md rounded-lg">
          <div className="flex flex-row items-center mb-2">
            <MdLaptopMac className="text-4xl text-gray-900" />
            <h2 className="text-2xl font-semibold text-gray-900 ml-2">
              Desktop Apps
            </h2>
          </div>
          <p className="text-base text-gray-900">
            Designed and built to be distributed across all modern macOS,
            Windows and Linux operating systems, our desktop applications
          </p>
          <button className="flex flex-row items-center mr-auto text-lg font-semibold mt-2 cursor-pointer">Learn More<BiCaretRight className="ml-2 text-xl"/></button>
        </div>
        <div className="flex flex-col mt-1 p-4 hover:shadow-md rounded-lg">
          <div className="flex flex-row items-center mb-2">
            <BiCodeBlock className="text-4xl text-gray-900" />
            <h2 className="text-2xl font-semibold text-gray-900 ml-2">
              Hybrid Suites
            </h2>
          </div>
          <p className="text-base text-gray-900">
            Our flagship - custom developed application suites designed to unify
            multiple devices, platforms and operations to boost organizational
            productivity.
          </p>
          <button className="flex flex-row items-center mr-auto text-lg font-semibold mt-2 cursor-pointer">Learn More<BiCaretRight className="ml-2 text-xl"/></button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center max-w-screen-xl mx-auto p-4 mt-4">
        <div className="md:w-2/3">
          <h2 className="font-subheader font-semibold text-2xl md:text-3xl mb-2">From design to launch, we've got your back.</h2>
          <p className="text-base text-gray-900">
            <strong>It's all about the client. </strong>That rings true for us just as much as it does for you, which is why we work hand in hand with you through the entire design / build process to ensure you get a world-class product while your users get a world-class experience. Click on any one of our 4 design phases to learn more about how we work.
          </p>
        </div>
        <div className="flex flex-col items-center md:w-1/3 my-6 md:my-auto">
          <ul className="text-base text-gray-900 ">
            <li className="flex flex-row items-center mt-1 transform hover:scale-105 cursor-pointer"><IoGlobeOutline className="mr-3 text-4xl text-blue-600"/><h3 className="text-2xl font-semibold">Project Discovery</h3></li>
            <li className="flex flex-row items-center mt-1 transform hover:scale-105 cursor-pointer"><MdOutlineDraw className="mr-3 text-4xl text-blue-600"/><h3 className="text-2xl font-semibold">Agile Prototyping</h3></li>
            <li className="flex flex-row items-center mt-1 transform hover:scale-105 cursor-pointer"><MdCode className="mr-3 text-4xl text-blue-600"/><h3 className="text-2xl font-semibold">Integrated Dev Ops</h3></li>
            <li className="flex flex-row items-center mt-1 transform hover:scale-105 cursor-pointer"><IoIosRocket className="mr-3 text-4xl text-blue-600"/><h3 className="text-2xl font-semibold">Product Launch</h3></li>
          </ul>
        </div>
      </div>

      {/*2/3 width photo with overlay: Our products are: Flexible, Scalable, Something*/}
    </div>
  )
}

export default Index
