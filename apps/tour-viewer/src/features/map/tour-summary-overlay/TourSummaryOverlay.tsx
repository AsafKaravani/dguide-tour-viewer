import { TourStartPage } from "@app/pages/tour-start-page/TourStartPage";
import { atom_tourState } from "@app/shared/state/tour.atom";
import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { OpeningStopBlock } from "@app/features/map/opening-stop-block/OpeningStopBlock";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";
import { atom_openedStopState } from "@app/shared/state/opened-stop.atom";
import { BigStopPage } from "@app/features/map/big-stop-page/BigStopPage";

type TourSummaryOverlayProps = {
  children?: React.ReactNode;
};

const framerSlideLeft: HTMLMotionProps<"div"> = {
  transition: { duration: 0.3, ease: "easeInOut" },
  initial: { translateX: "100vw" },
  animate: { translateX: "0vw" },
  exit: { translateX: "-100vw" },
};

const framerSlideUpDown: HTMLMotionProps<"div"> = {
  transition: { duration: 0.2, ease: "easeInOut" },
  initial: { translateY: "100vh" },
  animate: { translateY: "0vh" },
  exit: { translateY: "100vh" },
};

export const TourSummaryOverlay: React.FC = React.memo<TourSummaryOverlayProps>(
  function TourSummaryOverlay(_p) {
    const state_tourState = useRecoilValue(atom_tourState);
    const [hidePage, setHidePage] = useState(false);
    const [startTour, setStartTour] = useState(false);
    const [state_openedStopState, setState_openedStopState] =
      useRecoilState(atom_openedStopState);
    return (
      <AnimatePresence>
        {!state_tourState && (
          <Box
            className="fixed top-0 bottom-0 w-screen h-screen bg-white overflow-auto flex flex-col justify-center items-center"
            sx={{ zIndex: 99999 }}
          >
            <Typography variant="h2" className="mb-2">
              טוען מסלול
            </Typography>
            <CircularProgress />
          </Box>
        )}
        {state_tourState && !hidePage && (
          <motion.div
            className="fixed top-0 bottom-0 w-screen h-screen bg-white overflow-auto"
            style={{ zIndex: 999999 }}
            transition={{ ...framerSlideLeft, initial: { translateX: "0vw" } }}
          >
            <TourStartPage
              onClickStart={() => {
                setHidePage(true);
                setStartTour(true);
              }}
              tour={state_tourState}
              className=""
            />
          </motion.div>
        )}
        {state_tourState && startTour && (
          <motion.div
            className="fixed top-0 bottom-0 w-screen h-screen bg-white overflow-auto"
            style={{ zIndex: 999999, height: 1000 }}
            {...framerSlideLeft}
          >
            <OpeningStopBlock
              stop={state_tourState.stops[0]}
              onClickSkip={() => setStartTour(false)}
            />
          </motion.div>
        )}
        {state_tourState && state_openedStopState && (
          <motion.div
            key={"asd"}
            className="fixed top-0 bottom-0 w-screen h-screen bg-white overflow-auto"
            style={{ zIndex: 999999 }}
            {...framerSlideUpDown}
          >
            <BigStopPage
              stop={state_openedStopState}
              onClickBack={() => setState_openedStopState(undefined)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);
