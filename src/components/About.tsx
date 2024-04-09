import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FC } from "react";
import { SectionWrapper } from "../hoc";

type ServicesType = (typeof services)[0];

interface ServiceCardProps extends ServicesType {
  index: number;
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, index, title }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full bg-gradient-to-b from-green-600 to-pink-500 p-[1px] rounded-[20px] shadow-card"
      >
        <div
          data-options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About: FC = () => {
  return (
    <SectionWrapper idName="about">
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Senior Frontend engineer with 6+ years developing web applications using
        Javascript, Typescript, React, Angular, BabylonJs, Canvas, Mobx, Redux,
        and GraphQl for clients from the USA, Poland, Portugal, India, and Peru.
        Experience leading teams and working on the creation of frontend
        architecture, 3D web development, and dashboards. I am a self-taught
        enthusiast, I love challenges and learning new technologies creating
        multiple web solutions, modeling 3D shapes and animations on the
        browser.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
