import {
  CarouselComponent,
  CarouselItemComponent,
} from "@/features/shared/components/commons/CarouselComponent";
import useDisabledScroll from "@/features/get-city/hooks/useDisabledScroll";
import { AnimatePresence, motion } from "framer-motion";
import React, { Suspense } from "react";
import { FaXmark } from "react-icons/fa6";

interface PhotoCollectionsPopupProps {
  dataset: string[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PhotoCollectionsPopup: React.FC<PhotoCollectionsPopupProps> = ({
  dataset,
  isOpen,
  setIsOpen,
}) => {
  useDisabledScroll(isOpen);
  return (
    <div
      className={isOpen ? "absolute inset-0 w-full h-screen z-50" : "hidden"}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-75">
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={"video-popup"}
            >
              <Suspense fallback="Loading...">
                <CarouselComponent isShowNavigation>
                  {dataset.map((data, index) => (
                    <CarouselItemComponent
                      className="flex flex-col py-6 gap-y-4 flex items-center just"
                      index={`${index}+${data}`}
                    >
                      <img
                        src={data}
                        alt={"Gambar " + ++index}
                        className="w-10/12 text-center"
                      />
                    </CarouselItemComponent>
                  ))}
                </CarouselComponent>

                <div className="absolute top-0 right-0 space-x-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-4 text-foreground"
                  >
                    <FaXmark />
                  </button>
                </div>
              </Suspense>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PhotoCollectionsPopup;
