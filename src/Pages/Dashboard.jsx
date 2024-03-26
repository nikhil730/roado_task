import { Grid, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import LeftDashboard from "./LeftDashboard";
import styles from "../CSS/dashboard.module.css";
import RightDashboard from "./RightDashboard";

const Dashboard = () => {

    const theme = useTheme();
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Grid container className={styles.main_dashboard}>
                {!isSmallDevice && (
                    <Grid item sx={{ width: `${"17.5%"}` }}>
                        <LeftDashboard />
                    </Grid>
                )}

                <Grid
                    item
                    sx={{ width: isSmallDevice ? '100%' : '82.5%' }}
                    className={styles.rightPanel}
                >
                    <RightDashboard />
                </Grid>
            </Grid>
        </>
    );
};

export default Dashboard;
