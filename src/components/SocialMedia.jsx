import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.linkedin.com/in/ahmed-mohsen-web/">
      <div>
        <FaLinkedinIn />
      </div>
    </a>
    <a href="https://www.facebook.com/AHMEDMOHSENSOBHI">
      <div>
        <FaFacebookF />
      </div>
    </a>
    <a href="https://github.com/ahmed-mohsen88">
      <div>
        <FaGithub />
      </div>
    </a>
  </div>
);

export default SocialMedia;
