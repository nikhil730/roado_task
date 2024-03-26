import { React } from "react";
import { Box } from "@mui/material";
import styles from "../CSS/dashboard.module.css";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import PremiumCard from "../Components/PremiumCard";
import Cards from "../Components/Cards";
import LineChartCard from "../Components/LineChartCard";

const RightDashboard = () => {
  return (
    <>
      <Box className={styles.right_dashboard}>
        {/* <Box className={styles.dashboard_nav}> */}
        <PrimarySearchAppBar />
        {/* </Box> */}
        <PremiumCard />
        <Cards />
        <LineChartCard />
      </Box>
    </>
  );
};

export default RightDashboard;
