import {
  makeStyles,
  Typography,
  Box,
  CircularProgress,
} from "@material-ui/core";

const useStyles = makeStyles({
  component: {
    margin: "50px 0",
  },
  container: {
    color: "#ff0000",
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
        Coronavirus casses Globally{" "}
      </Typography>
    </Box>
  );
};

export default Cards;
