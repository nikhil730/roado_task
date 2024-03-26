import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from '../CSS/dashboard.module.css';

const PremiumCard = () => {
  return (
    <Card className={styles.roundedCard} style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}>
      <CardContent className={styles.cardContentLeft}>
        <Typography fontSize={"big"}
          fontWeight={300}
          color={"white"}
          variant="h5">Unlock Premium</Typography>
        <Typography fontSize={"small"}
          fontWeight={300}
          color={"white"}
          variant="body1">Get upto 10Gb storage for a limited time</Typography>
      </CardContent>
      <CardContent className={styles.cardContentRight}>
        <Button className={styles.unlockButton} variant="contained" style={{ backgroundColor: 'white' }} >
          <Typography
            fontSize={"small"}
            fontWeight={400}
            color={"black"}
            variant="body3"
          >
            Unlock
          </Typography>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PremiumCard;
