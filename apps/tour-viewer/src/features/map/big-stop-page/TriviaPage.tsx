import React, { useState } from "react";
import { Box, BoxProps, Button, Typography } from "@mui/material";
import { Stop } from "@app/shared/models/tour.type";
import { Seperator } from "@app/shared/components";
import ReactPlayer from "react-player";
import backgroundImage from "../../../assets/images/bg-question.png";

export type TriviaPageProps = {
  question: any;
  children?: React.ReactNode;
};

export const TriviaPage = React.memo(
  React.forwardRef<BoxProps, TriviaPageProps & BoxProps>(function TriviaPage(
    { question },
    ref
  ) {
    const [correctAnswer, setCorrectAnswer] = useState(-1);

    const handleSelect = () => {
      question.options.map((option: any, idx: number) => {
        if (option.isAnswer) {
          setCorrectAnswer(idx);
        }
      });
    };

    return (
      <Box ref={ref}>
        <Box
          style={
            {
              height: "100vh",
              color: "white",
              backgroundImage: `url(${backgroundImage})`,
              "background-repeat-y": "no-repeat",
            } as any
          }
        >
          <Box className="flex justify-center pt-12 mb-3">
            <Typography color="white" className="center" variant="h1">
              מי מוכן למשחק טריויה !?
            </Typography>
          </Box>
          <Box className="flex justify-center">
            <Typography color="white" className="center mb-10" variant="h2">
              {question.question_text}
            </Typography>
          </Box>
          {question?.options?.map((option: any, idx: number) => (
            <Box
              className="pt-7 pb-7"
              onClick={handleSelect}
              style={
                {
                  borderRadius: 10,
                  margin: 10,
                  color: "white",
                  background: idx % 2 === 0 ? "#FF725F" : "rgb(41, 230, 166)",
                  outline:
                    correctAnswer === ((idx && "5px solid white") as any),
                } as any
              }
            >
              <Box className="flex justify-center">
                <Typography color="white" className="center" variant="h2">
                  - {idx + 1} -
                </Typography>
              </Box>
              <Box className="mr-2 flex justify-center">
                <Typography color="white" className="center" variant="h2">
                  {option.option}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    );
  })
);
