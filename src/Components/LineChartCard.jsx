import * as React from "react";
import { Card, CardContent, Typography, useMediaQuery } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { useTheme } from "@mui/material/styles";

const firstLinePoints = [180, 250, 180, 150, 250, 130, 260];
const secondLineMarks = [200, 200, 300, 400, 250, 350, 200];
const xLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function DualLineChart() {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      style={{
        margin: "16px",
        width: "100vw",
        maxWidth: isSmallDevice ? "100vw" : "80vw",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
          align="left"
          style={{
            fontWeight: 200,
            fontFamily:
              '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
          }}
        >
          Performanc
        </Typography>
        <LineChart
          width={isSmallDevice ? 0.7 * window.innerWidth : 1080} // Adjust width for small devices
          height={300}
          series={[
            {
              data: firstLinePoints,
              area: true,
              stack: "total",
              showMark: false,
              showLabel: false,
            },
            {
              data: secondLineMarks,
              area: true,
              stack: "total",
              showMark: false,
              showLabel: false,
            },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
          sx={{
            ".MuiLineElement-root": {
              display: "none",
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
