import { motion } from "framer-motion";
import { styles } from "../styles";
import { blueGradientText } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { FC } from "react";

type TestimonialType = (typeof testimonials)[0];

interface FeedbackCardProps {
  testimonial: TestimonialType;
  index: number;
}

const FeedbackCard: FC<FeedbackCardProps> = ({ index, testimonial }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">
        {testimonial.testimonial}
      </p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className={blueGradientText}>@</span> {testimonial.name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {testimonial.designation} of {testimonial.company}
          </p>
        </div>
        <img
          src={testimonial.image}
          alt={`feedback-by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <SectionWrapper idName="feedbacks">
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div
          className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
        >
          <motion.div variants={textVariant(0)}>
            <p className={styles.sectionSubText}>What others say</p>
            <p className={styles.sectionHeadText}>Testimonials</p>
          </motion.div>
        </div>

        <div
          className={`${styles.paddingX} -mt-20 pb-14 flex -flex-wrap gap-7`}
        >
          {testimonials.map((test, index) => (
            <FeedbackCard key={test.name} index={index} testimonial={test} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Feedbacks;
