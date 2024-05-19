import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const NumericalAnalysis = ({ dataset, calculationType, header }) => {
  const calculateAnalysis = (dataset, calculationType) => {
    let result;
    switch (calculationType) {
      case "sum":
        result = dataset.reduce((acc, curr) => acc + curr, 0);
        break;
      case "average":
        result = dataset.reduce((acc, curr) => acc + curr, 0) / dataset.length;
        break;
      case "min":
        result = Math.min(...dataset);
        break;
      case "max":
        result = Math.max(...dataset);
        break;
      case "totalEntries":
        result = dataset.length;
        break;
      default:
        result = "Invalid calculation type";
    }
    return result;
  };

  return (
    <Card sx={{ width: 300 }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {header}
        </Typography>
        <Typography variant="h5" component="div">
          {calculateAnalysis(dataset, calculationType)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NumericalAnalysis;
