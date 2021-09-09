import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-gray-500">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-black-300 hover:text-yellow-300 text-4xl font-bold tracking-widest"
          >
            Alex
          </NavLink>
          <NavLink
            to="post"
            className="inflex-flex items-center py-3 px-3 my-4 rounded text-black-100 hover:text-yellow-300"
            activeClassName="text-yellow-100 bg-yellow-300"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="project"
            className="inflex-flex items-center py-3 px-3 my-4 rounded text-black-100 hover:text-yellow-300"
            activeClassName="text-yellow-100 bg-yellow-300"
          >
            Projects
          </NavLink>
          <NavLink
            to="about"
            className="inflex-flex items-center py-3 px-3 my-4 rounded text-black-100 hover:text-yellow-300"
            activeClassName="text-yellow-100 bg-yellow-300"
          >
            About Me!
          </NavLink>
        </nav>
        <div>
          <SocialIcon
            url="https://www.linkedin.com/in/christenson10/"
            className="mr-4"
            target="-blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/christenson10"
            className="mr-4"
            target="-blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/christenson10"
            className="mr-4"
            target="-blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://open.spotify.com/user/djohomum3yhyybr22q9s7ayry?si=c291da255cee4356"
            className="mr-4"
            target="-blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
