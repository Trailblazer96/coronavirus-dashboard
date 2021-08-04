import {
  makeStyles,
  Typography,
  Box,
  CircularProgress,
  Grid,
} from "@material-ui/core";

import Card from "./Card";

const useStyles = makeStyles({
  component: {
    margin: "50px 0",
    flexDirection: "column",
    alignItems: "center",
    display: "flex",
  },
  container: {
    color: "#00cc00",
    marginBottom: 40,
  },
});

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const classes = useStyles();
  if (!confirmed) {
    return <CircularProgress />;
  }
  return (
    <Box className={classes.component}>
      <Typography className={classes.container} variant="h4" gutterBottom>
        Covid-19 casses Worldwide{" "}
      </Typography>
      <Grid container spacing={3} justify="center">
        <Card
          cardTitle="Infected"
          value={confirmed.value}
          desc="Number of Infected Cases of Covid-19"
          lastUpdate={lastUpdate}
        />
        <Card
          cardTitle="Recovered"
          value={recovered.value}
          desc="Number of Recovered Cases from Covid-19"
          lastUpdate={lastUpdate}
        />
        <Card
          cardTitle="Deaths"
          value={deaths.value}
          desc="Number of Death Caused by Covid-19"
          lastUpdate={lastUpdate}
        />
      </Grid>
    </Box>
  );
};

export default Cards;
