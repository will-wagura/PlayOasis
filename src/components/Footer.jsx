import React from "react";
import ItemsContainer from "../footer/ItemsContainer";
import SocialIcons from "../footer/SocialIcons";
import { Icons } from "../footer/Menu";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-screen pl-40">
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2024 Play Oasis. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;