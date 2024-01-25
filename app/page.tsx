"use client";
import { useState } from "react";
import { FaMoon } from "react-icons/fa6";
import Image from "next/image";
import Folio_pic from "./images/folio_pic.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import HTML from "./images/html.svg"
import CSS from "./images/css.svg"
import Javascript from "./images/Javascript.svg"
import Tailwind from "./images/tailwind.svg"
import Nodejs from "./images/Nodejs.svg"
import Mongodb from "./images/mongodb.svg"
import Next from "./images/nextjs.svg"
import Firebase from "./images/firebase.svg"
import Supabase from "./images/supabase.svg"
import Google from "./images/google.svg"
import React from "./images/React.svg"
import Github from "./images/Github.svg"
import Typescript from "./images/typescript.svg"
import Vscode from "./images/vscode.svg"
import Netflix from "./images/netflix.svg"
import Shipment from "./images/shipment.svg"
import Rocket from "./images/esendurocket.svg"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
// import { AcmeLogo } from "./AcmeLogo.jsx";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const menuItems = ["Home", "Projects", "Resume", "Contact Me"];

  return (
    <div className={darkMode ? "dark h-screen pb-8 bg-black text-white" : ""}>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            {/* <AcmeLogo /> */}
            <p className="font-bold">Dev-Franqqi</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>
            <Link color="foreground" aria-current="page" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#">Projects</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Resume
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem
            onClick={() => {
              setDarkMode(!darkMode);
              console.log(darkMode);
            }}
          >
            <FaMoon />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={index === 0 ? "primary" : "foreground"}
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      <main
        className={darkMode ? " bg-black pt-16 px-5" : " bg-white pt-16 px-5"}
      >


        
        <Image loading="lazy" className="mx-auto" src={Folio_pic} alt="" />
        <h1 className="text-3xl mt-2 font-bold mx-auto w-2/5 text-center">
          Franklin Ebi
        </h1>
        <p className="text-center text-lg mt-2">Full Stack Developer</p>
        <p className="text-center text-sm mt-1">
          Freelancer providing services for programming and design content
          needs. Join me down below and lets get cracking!
        </p>
        <div className="flex justify-between w-3/5 md:w-1/5 mx-auto mt-3 text-3xl">
          <FaLinkedin />
          <FaGithub />
          <FaInstagram />
          <BsTwitterX />
        </div>

        <section className="mt-16 font-medium md:px-20 pb-7">
          <h2 className="text-center font-bold">My TOOLS</h2>

          <div className=" dark:bg-opacity-50 dark:brightness-110 text-black rounded-md bg-white shadow-small mt-7 p-7 justify-between flex flex-wrap  text-xs text-center">
            <div className="w-fit mb-4">
              <Image loading="lazy" className=" scale-50" src={HTML} alt="" />
              <p className="text-black">HTML</p>
            </div>
            <div className=" w-fit">
              <Image loading="lazy" className=" scale-50" src={CSS} alt="" />
              <p className="text-black ">CSS</p>
            </div>
            <div className=" w-fit">
              <Image loading="lazy" className=" scale-50" src={Javascript} alt="" />
              <p className="text-black ">Javascript</p>
            </div>
            <div className=" w-fit">
              <Image loading="lazy" className=" scale-50" src={Tailwind} alt="" />
              <p className="text-black ">Tailwind</p>
            </div>
            <div className=" w-fit">
              <Image loading="lazy" className=" scale-50" src={Typescript} alt="" />
              <p className="text-black ">Typescript</p>
            </div>
            <div className=" w-fit">
              <Image loading="lazy" className=" scale-50" src={React} alt="" />
              <p className="text-black ">React</p>
            </div>
            <div className=" w-fit">
              <Image loading="lazy" className=" scale-50" src={Next} alt="" />
              <p className="text-black ">Next</p>
            </div>
            <div className=" w-fit">
              <Image loading="lazy" className=" scale-50" src={Nodejs} alt="" />
              <p className="text-black ">Nodejs</p>
            </div>
            <div className=" w-fit">
              <Image loading="lazy" className=" scale-50" src={Github} alt="" />
              <p className="text-black ">Github</p>
            </div>
            <div className=" w-fit">
              <Image loading="lazy" className=" scale-50" src={Mongodb} alt="" />
              <p className="text-black ">Mongodb</p>
            </div>
            <div className=" w-fit">
              <Image loading="lazy" className=" scale-50" src={Firebase} alt="" />
              <p className="text-black ">Firebase</p>
            </div>
            <div className=" w-fit">
              <Image loading="lazy" className=" scale-50" src={Supabase} alt="" />
              <p className="text-black ">Supabase</p>
            </div>
            <div className=" w-fit">
              <Image loading="lazy" className=" scale-50" src={Vscode} alt="" />
              <p className="text-black ">Vscode</p>
            </div>
            <div className=" w-fit">
              <Image loading="lazy" className=" scale-50" src={Google} alt="" />
              <p className="text-black ">Google</p>
            </div>
          </div>
        </section>

        <section className="py-10 px-3">
          <h3 className="text-center font-bold ">MY PROJECTS</h3>

          <ol className="">
            <li className="shadow dark:shadow-gray-200  w-full border mt-5 p-5 rounded-md">
              <span className="font-semibold">Netflix Clone</span>
              <Image loading="lazy" src={Netflix} alt="" className="mb-3" />

              <div>
                <div className="flex justify-between text-xs font-semibold">
                  <button className="text-blue-500 border-2 p-2 rounded-md bg-white">
                    View website
                  </button>
                  <button className="text-white border-2 p-2 rounded-md bg-black">
                    View Repo
                  </button>
                </div>
                <p className="text-sm">
                  Description: A UI clone of the Netflix website
                </p>

                <p className="text-xs mt-3">
                  Tools Used: Nextjs, Tailwind, Shadcn UI
                </p>
              </div>
            </li>
            <li className="shadow dark:shadow-gray-200 border mt-5 p-5 rounded-md">
              <span className="font-semibold">Esendu Rocket</span>
              <Image loading="lazy" src={Rocket} alt="" className="mb-3" />

              <div>
                <div className="flex justify-between text-xs font-semibold">
                  <button className="text-blue-500 border-2 p-2 rounded-md bg-white">
                    View website
                  </button>
                  <button className="text-white border-2 p-2 rounded-md bg-black">
                    View Repo
                  </button>
                </div>
                <p className="text-sm">
                  Description: A web app that uses the wikepedia API to return
                  resilts according to user searches
                </p>

                <p className="text-xs mt-3">Tools Used: Nextjs, Typescript</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="py-10">
          <h2 className="font-bold text-2xl text-center">CONTACT ME</h2>

          <p className="text-sm text-center mt-4 mb-2">Send me an email</p>
          <form className="flex flex-col gap-y-3 text-sm w-fit mx-auto ">
            <input
              type="email"
              className="border rounded-md w-[20rem] p-3"
              placeholder="Email"
            />
            <input
              type="text"
              className="border rounded-md w-[20rem] p-3"
              placeholder="Subject"
            />
            <input
              className="border rounded-md w-[20rem] h-[10rem] p-3"
              type="text"
              placeholder="Message Body"
            />
          </form>
        </section>
      </main>
    </div>
  );
}
