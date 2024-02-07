import { useWindowSize } from "@uidotdev/usehooks";
import { motion, scroll } from "framer-motion";
import user from "../assets/user.png";
const Home = () => {
  const size = useWindowSize();

  const multiplier = size.width > 700 ? 2000 : 800;

  scroll((progress) => {
    const el = document.getElementById("title");
    if (el) {
      el.style.left = `-${progress * multiplier}px`;
    }
  });

  return (
    <div className="w-full h-full">
      <motion.div
        className="relative h-[100dvh] w-full flex items-center overflow-hidden bg-[#4d403d]"
        style={{
          backgroundImage: `url(${user})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.h1
          id="title"
          className="absolute bottom-0 p-0 ml-10 text-[76px] md:text-[130px] lg:text-[160px] whitespace-nowrap font-bold text-white"
          style={{
            fontFamily: "Roboto 'sans-serif'",
            backgroundRepeat: "repeat",
            color: "#f8f3e8",
          }}
        >
          Yaya Mohamed - JavaScript Developer
        </motion.h1>
      </motion.div>
      <div className="relative w-full h-[100dvh] bg-white flex items-center justify-center">
        <span className="absolute bottom-0 p-2 text-sm font-bold" id="end">
          Scroll end here - Image by rawpixel.com
        </span>
      </div>
    </div>
  );
};

export default Home;
