import React from "react";
import { NavLink} from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-blue-500">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink to="/" 
          exact 
          activeClassName="text-white"
          className="inflex-flex items-center py-7 px-3 mr-4 text-blue-100 hover:text-green-200 text-4xl font-bold cursive tracking-widest">
            Davi Oliveira
          </NavLink>
          <NavLink to="/post"
          activeClassName="text-green-100 bg-blue-700"
          className="inflex-flex items-cente py-3 px-3 my-6 rounded text-blue-200 hover:text-green-200"
          >
            Blog Posts
          </NavLink>
          <NavLink to="/project"
          activeClassName="text-green-100 bg-blue-700"
          className="inflex-flex items-cente py-3 px-3 my-6 rounded text-blue-200 hover:text-green-200"
          >
            Projects
          </NavLink>
          <NavLink to="/about"
          activeClassName="text-green-100 bg-blue-700"
          className="inflex-flex items-cente py-3 px-3 my-6 rounded text-blue-200 hover:text-green-200"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-3">
          <SocialIcon url="https://www.facebook.com/breadz.davi/" 
            bgColor="#0b4e7c" 
            className="mr-4" 
            target="_blank" 
            fgColor="#fff" 
            style={{height: 35, width: 35}} 
          />
          <SocialIcon 
            url="https://github.com/zBreadz" 
              bgColor="#0b4e7c" 
              className="mr-4" 
              target="_blank" 
              fgColor="#fff" 
              style={{height: 35, width: 35}} />
          <SocialIcon 
          url="https://www.linkedin.com/in/davi-oliveira-vieira/" 
            bgColor="#0b4e7c" 
            className="mr-4" 
            target="_blank" 
            fgColor="#fff" 
            style={{height: 35, width: 35}} />
        </div>
      </div>
    </header>
  )
}