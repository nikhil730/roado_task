import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import Chip from '@mui/material/Chip';
import { useSelector } from 'react-redux';
const styles = {
    card: {
        minWidth: 250,
        maxWidth: 300,
        borderRadius: 16,
        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
        margin: '16px',
        minHeight: 150,
        maxHeight: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    cardContent: {
        padding: '16px',
        color: "black",
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',  // Fill the full height of the CardContent
    },
    title: {
        fontSize: 20,
        marginBottom: '10px',
        margin: "2px"
    },
};

const Cards = () => {
    const cardData = useSelector((state) => state.card_data);
    return (
        <Grid container spacing={2} style={styles.cardContainer}>
            <Grid item xs={12} sm={6} md={3}>  {/* Adjust Grid item based on your needs */}
                <Card style={{ ...styles.card }} >
                    <CardContent style={styles.cardContent}>
                        <Typography fontSize={"small"}
                            fontWeight={300}
                            color={"grey"}
                            variant="h5">Revenue</Typography>
                        <CardContent>
                            <Typography variant="h5">
                                ${cardData[0].toLocaleString()}
                            </Typography>
                        </CardContent>

                        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center' }}>
                            <Chip label="+45%" style={{ backgroundColor: 'green', color: 'white', marginRight: '8px' }} />
                            <Typography variant="body2" color="textSecondary">
                                From 4.6%
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card style={{ ...styles.card }}>
                    <CardContent style={styles.cardContent}>
                        <Typography fontSize={"small"}
                            fontWeight={300}
                            color={"grey"}
                            variant="h5">Users</Typography>
                        <CardContent>

                            <Typography variant="h5">
                                {cardData[1].toLocaleString()}%
                            </Typography></CardContent>

                        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center' }}>
                            <Chip label="-1.7%" style={{ backgroundColor: 'red', color: 'white', marginRight: '8px' }} />
                            <Typography variant="body2" color="textSecondary">
                                From 4.6%
                            </Typography>
                        </div>

                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card style={{ ...styles.card }}>
                    <CardContent style={styles.cardContent}>
                        <Typography fontSize={"small"}
                            fontWeight={300}
                            color={"grey"}
                            variant="h5">New Signups</Typography>
                        <CardContent>

                            <Typography variant="h5">
                                {cardData[2].toLocaleString()}
                            </Typography>
                        </CardContent>
                        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center' }}>
                            <Chip label="0.0" style={{ backgroundColor: 'grey', color: 'white', marginRight: '8px' }} />

                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card style={{ ...styles.card }}>
                    <CardContent style={styles.cardContent}>
                        <Typography fontSize={"small"}
                            fontWeight={300}
                            color={"grey"}
                            variant="h5">Retention</Typography>
                        <CardContent>

                            <Typography variant="h5">
                                {cardData[3].toLocaleString()} %
                            </Typography></CardContent>
                        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center' }}>
                            <Chip label="0.6%" style={{ backgroundColor: 'red', color: 'white', marginRight: '8px' }} />
                            <Typography variant="body2" color="textSecondary">
                                From 4.6%
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Cards;