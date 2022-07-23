import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import useFirestore from "../hooks/useFirestore";
import "./imageGrid.css";
import { motion } from "framer-motion/dist/framer-motion";

const ImageGrid = () => {
  const { docs } = useFirestore("image");

  const { handleClickImage } = useContext(AppContext);
  return (
    <div className="img__grid">
      {docs &&
        docs.map((doc) => {
          return (
            <motion.div
              layout
              className="img__wrap"
              key={doc.id}
              whileHover={{ opacity: 1, cursor: "pointer" }}
              onClick={() => handleClickImage(doc.url)}
            >
              <motion.img
                src={doc.url}
                alt="Nightmare"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
