import { motion, useAnimationControls } from "framer-motion";
import "../../assets/css/loginHeader.css";
import {
  headingVariants,
  animateSiteHero,
} from "../../animations/framerAnimations";
const SiteHero = () => {
  const logoControls = useAnimationControls();
  const headingcontrols = useAnimationControls();

  animateSiteHero(logoControls, headingcontrols);

  return (
    <div className="logo-container">
      <div className="logo-inner-container mx-auto">
        
        <motion.h1
          variants={headingVariants}
          initial="hidden"
          animate={headingcontrols}
          className="site-header"
        >
          MAILBOX CLIENT
        </motion.h1>
      </div>
    </div>
  );
};

export default SiteHero;
