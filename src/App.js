import { Component } from "react";
import { Box, Typography, withStyles } from "@material-ui/core";
import logo from "./images/COVID19img.jpg";
import Cards from "./components/Cards";
import { fetchData } from "./service/api";
import Countries from "./components/Countries";
import Chart from "./components/Chart";

const style = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#f2f2f2",
    width: 400,
    textAlign: "center",
    fontSize: 22,
    padding: 10,
    color: "#000000",
  },
  lastUpdated: {
    color: "000000",
    fontSize: 12,
  },
};

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    console.log(fetchedData);
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
    console.log(fetchedData);
  };
  render() {
    const { data } = this.state;
    return (
      <Box className={this.props.classes.container}>
        <box className={this.props.classes.header}>
          COVID-19 CORONAVIRUS PANDEMIC
        </box>
        <Typography className={this.props.classes.lastUpdated}>
          Last Updated :{" "}
          {data.lastUpdate && new Date(data.lastUpdate).toDateString()}
        </Typography>
        <img style={{ width: 350 }} src={logo} alt="Covid" />
        <Cards data={data} />
        <Countries handleCountryChange={this.handleCountryChange} />
        <Chart data={data} />
      </Box>
    );
  }
}
export default withStyles(style)(App);
