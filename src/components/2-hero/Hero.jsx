import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';  

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex" id="about">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./profile.jpg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
Detail-oriented and creative React Developer and Web Application Designer        </motion.h1>

        <p className="sub-title">
          I’m Haidar Ahmad, a software designer with 2 years 
          of experience in designing, developing, and maintaining web applications. Proficient in transforming user requirements into functional and aesthetically pleasing applications. Passionate about building interactive and user-friendly experiences that engage and inspire users.
        </p>

        <div className="all-icons flex">
        <a href="https://github.com/HaidarAhmad123/" target="_blank" className="icon"><i className="fab fa-github icon" style={{ position:"absolute"}}></i> </a>
        <a href="https://www.facebook.com/profile.php?id=61552543141467&mibextid=ZbWKwL" target="_blank" className="icon"><i className="fab fa-facebook icon" style={{ position:"absolute"}}></i> </a>
        <a href="" className="icon whatsapp"><i className="fab fa-whatsapp icon" style={{ position:"absolute"}}></i> <div className="number">0982593034</div></a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  )
}

export default Hero;
