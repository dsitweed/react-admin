import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import Header from "../../components/Header";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const questions = [
    {
      summary: "An important question",
      detail:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt molestiae dignissimos, blanditiis deleniti consequatur velit eaque",
    },
    {
      summary: "An important question",
      detail:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt molestiae dignissimos, blanditiis deleniti consequatur velit eaque",
    },
    {
      summary: "An important question",
      detail:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt molestiae dignissimos, blanditiis deleniti consequatur velit eaque",
    },
    {
      summary: "An important question",
      detail:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt molestiae dignissimos, blanditiis deleniti consequatur velit eaque",
    },
    {
      summary: "An important question",
      detail:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt molestiae dignissimos, blanditiis deleniti consequatur velit eaque",
    },
    {
      summary: "An important question",
      detail:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt molestiae dignissimos, blanditiis deleniti consequatur velit eaque",
    },
    {
      summary: "An important question",
      detail:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt molestiae dignissimos, blanditiis deleniti consequatur velit eaque",
    },
    {
      summary: "An important question",
      detail:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt molestiae dignissimos, blanditiis deleniti consequatur velit eaque",
    },
    {
      summary: "An important question",
      detail:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt molestiae dignissimos, blanditiis deleniti consequatur velit eaque",
    },
    {
      summary: "An important question",
      detail:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt molestiae dignissimos, blanditiis deleniti consequatur velit eaque",
    },
    {
      summary: "An important question",
      detail:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt molestiae dignissimos, blanditiis deleniti consequatur velit eaque",
    },
    {
      summary: "An important question",
      detail:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt molestiae dignissimos, blanditiis deleniti consequatur velit eaque",
    },
  ];

  return (
    <Box m="20px">
      <Header title="faq" subTitle="Frequently asked questions page" />

      <Box mt="20px" p="5px" borderRadius="5px">
        {questions.map((question, index) => (
          <Accordion
            sx={{
              backgroundColor: "#f3f5f5",
            }}
            key={index}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              id={index}
            >
              <Typography variant="h6" color="#063970" fontWeight={600}>{question.summary}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>{question.detail}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQ;
