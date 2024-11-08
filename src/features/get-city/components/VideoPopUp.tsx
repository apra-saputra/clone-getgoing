import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaXmark } from "react-icons/fa6";
import useDisabledScroll from "@/features/get-city/hooks/useDisabledScroll";

interface VideoPopUpProps {
  src: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const VideoPopUp: React.FC<VideoPopUpProps> = ({ src, isOpen, setIsOpen }) => {
  useDisabledScroll(isOpen);

  function extractYouTubeVideoId(url: string) {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  console.log({ src });
  return (
    <div
      className={isOpen ? "absolute inset-0 w-full h-screen z-50" : "hidden"}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-75">
        <AnimatePresence initial={isOpen}>
          {isOpen && (
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${extractYouTubeVideoId(
                  src
                )}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg w-[400px] md:w-[1024px] aspect-video"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-10 -right-10 bg-white p-2 rounded"
              >
                <FaXmark />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VideoPopUp;
