import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatePage = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="bg-gradient-to-br from-blue-600 items-center justify-center  via-pink-200 to-pink-400"
          initial={{ width: "100vw", height: "100vh", opacity: 1 }}
          animate={{ width: "100vw", height: "100vh", opacity: 1 }}
          exit={{
            width: 0,
            height: 0,
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 9999,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div className="flex items-center justify-center flex-col">


          <motion.div
          className="flex flex-col"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut", bounce:0.25, delay: 0.3 }}
          >
            <h1 className="text-slate-600 text-center font-semibold  text-6xl">AI - Powered</h1>
            <h1 className="text-center font-semibold text-6xl  ">Text to Image Generator</h1>
            
          </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatePage;
