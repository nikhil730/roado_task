import { Box, Link, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import styles from "../CSS/dashboard.module.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import FolderIcon from '@mui/icons-material/Folder';
import DashboardIcon from '@mui/icons-material/Dashboard';
const LeftDashboard = () => {

    //  for dropdown of Dashboard Box 
    const [showDropdown, setShowDropdown] = useState(true);

    const handleDashboardClick = () => {
        setShowDropdown(!showDropdown);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showDropdown && event.target.closest('.dashboardbox') === null) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showDropdown]);

    const fontStyles = {
        fontSize: '18px', // Increased font size for all text elements
        fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif',
    };

    return (
        <Box className={styles.left_dashboard} style={fontStyles}>
            <Box>
                <Box>
                    <Link href="/" style={{ textDecoration: "none" }}>
                        <Box sx={{ marginBottom: '25    px' }}>
                            <Typography id={styles.logo} variant="h5">
                                Clonify
                            </Typography>
                        </Box>
                    </Link>

                    {/* DASHBOARD headline */}
                    <Box sx={{ marginBottom: "10px" }} className={styles.services_header}>
                        <Typography
                            fontSize={"small"}
                            fontWeight={600}
                            color={"gray"}
                            variant="body3"

                        >
                            D A S H B O A R D
                        </Typography>
                    </Box>

                    {/* all the tabs under master data */}
                    <Box sx={{ marginBottom: 0 }} className={styles.tabs_section}>
                        <Box className="dashboardbox" onClick={handleDashboardClick} sx={{
                            color: 'rgb(38, 38, 38)',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px',
                            paddingLeft: '10%',
                        }} >
                            <Typography variant="body2" style={{ fontSize: "medium" }}><DashboardIcon sx={{ fontSize: "small" }} /> Dashboard <ArrowDownwardIcon sx={{ fontSize: "small" }} /> </Typography>
                        </Box>
                        {showDropdown && (
                            <>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Box className={`${styles.tab}`}>
                                        <Typography variant="body2" style={{ fontSize: "medium" }}>Analytics</Typography>
                                    </Box>
                                    <Box className={`${styles.tab}`}>
                                        <Typography variant="body2" style={{ fontSize: "medium" }}>Finance</Typography>
                                    </Box>
                                    <Box className={`${styles.tab}`}>
                                        <Typography variant="body2" style={{ fontSize: "medium" }}>Job Board</Typography>
                                    </Box>
                                </Box>
                            </>
                        )}
                        <Box className={`${styles.tab}`}>
                            <Typography variant="body2" style={{ fontSize: "medium" }}> <MailOutlineIcon sx={{ fontSize: "small" }} /> Messages</Typography>
                        </Box>
                        <Box className={`${styles.tab}`}>
                            <Typography variant="body2" style={{ fontSize: "medium" }}> <PeopleAltIcon sx={{ fontSize: "small" }} /> Friends</Typography>
                        </Box>
                        <Box className={`${styles.tab}`}>
                            <Typography variant="body2" style={{ fontSize: "medium" }}> <AppsIcon sx={{ fontSize: "small" }} /> Apps</Typography>
                        </Box>
                    </Box>

                    {/* PAGES HEADING*/}
                    <Box sx={{ marginTop: 0 }} className={styles.services_header}>
                        <Typography
                            fontSize={"small"}
                            fontWeight={600}
                            color={"gray"}
                            variant="body3"
                        >
                            P A G E S
                        </Typography>
                    </Box>

                    <Box className={styles.tabs_section}>
                        <Box className={`${styles.tab}`}>
                            <Typography variant="body2" style={{ fontSize: "medium" }}>< HelpCenterIcon sx={{ fontSize: "small" }} /> Help Center</Typography>
                        </Box>
                        <Box className={`${styles.tab}`}>
                            <Typography variant="body2" style={{ fontSize: "medium" }}> <FolderIcon sx={{ fontSize: "small" }} /> File Manager</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default LeftDashboard;
