import {
  CardContent,
  Grid,
  Typography,
  Box,
  Card,
  makeStyles,
} from "@material-ui/core";
import Countup from "react-countup";

const useStyle = makeStyles({
  header: {
    background: "#F5F5F5",
    padding: 10,
  },
});
const CardComponent = ({ cardTitle, value, desc, lastUpdate }) => {
  const classes = useStyle();
  return (
    <Grid
      component={Card}
      style={{ margin: 20, borderBottom: "10px solid black" }}
    >
      <Box className={classes.header}>
        <Typography variant="h5" color="textSecondary">
          {cardTitle}
        </Typography>
      </Box>
      <CardContent>
        <Typography variant="h5">
          <Countup start={0} end={value} duration={5} separator="," />
        </Typography>
        <Typography color="textSecondary">{desc}</Typography>
        <Typography>{new Date(lastUpdate).toDateString()}</Typography>
      </CardContent>
    </Grid>
  );
};
export default CardComponent;
