import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FC } from "react";

type ProjectType = (typeof projects)[0];

interface ProjectCardProps extends ProjectType {
  index: number;
}

const ProjectCard: FC<ProjectCardProps> = ({
  description,
  image,
  index,
  name,
  source_code_link,
  tags,
}) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="absolute inset-0 flex justify-end m-3 card-image_hover">
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className="bg-gradient-to-r from-black to-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img
            src={github}
            alt="github"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => {
  return (
    <SectionWrapper idName="works">
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>My work</p>
        <p className={styles.sectionHeadText}>Projects</p>
      </motion.div>

      <div className="2-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following my projects for showcases you will see all my experience
          through the years.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Works;
