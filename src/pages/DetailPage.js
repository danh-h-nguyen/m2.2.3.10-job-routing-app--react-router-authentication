import React from "react";
import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import jobs from "../data/jobs.json";

function DetailPage() {
  const { id } = useParams();

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return (
      <Container>
        <Typography variant="h5" color="error">
          Job not found!
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4">{job.title}</Typography>

      <Typography variant="body1">
        <strong>Description:</strong> {job.description}
      </Typography>

      <Typography variant="body2">
        <strong>Location: </strong> {job.city}
      </Typography>

      <Typography variant="body2">
        <strong>Salary: </strong> ${job.salaryLow} - ${job.salaryHigh}
      </Typography>
    </Container>
  );
}

export default DetailPage;
