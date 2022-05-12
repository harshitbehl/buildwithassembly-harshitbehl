import React from "react";
import "./Showcase.scss";

import showcaseBackground from "../../assets/videos/showcaseBackground.mp4";
import showcaseIllustration from "../../assets/svg/showcaseIllustration.svg";
import showcaseWave from "../../assets/svg/showcaseWave.svg";
import { motion } from "framer-motion";

function Showcase() {
  return (
    <section className="showcase">
      <div className="showcase__background-video">
        <video src={showcaseBackground} autoPlay muted loop></video>
      </div>
      <div className="showcase__container main-container">
        <div className="showcase__content-container">
          <h1>
            <motion.span
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              Searchhub
            </motion.span>{" "}
            GitHub Search Application
          </h1>
          <p>Search GitHub Database</p>
          <a href="#task-section">
            <motion.button
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 1.5,
                repeat: 2,
                delay: 1.5,
              }}
            >
              Search
            </motion.button>
          </a>
        </div>
        <div className="showcase__graphic-container">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src={showcaseIllustration}
            alt="Showcase Illustration"
          />
        </div>
      </div>
      <div className="showcase__background-wave">
        <img src={showcaseWave} alt="Showcase Wave" />
      </div>
    </section>
  );
}

export default Showcase;
