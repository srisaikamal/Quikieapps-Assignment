import React from "react";
import Datatable from "../components/Datatable";
import HeroCard from "../components/HeroCard";
import Navbar from "../components/Navbar";
import googleLogo from "../assets/GOOGL.png";
import fbLogo from "../assets/FB.png";
import amazLogo from "../assets/AMZN.svg";
import { Grid } from "@material-ui/core";
const Home = () => {
  return (
    <div>
      <Navbar />

      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div className="cardHero">
          <Grid item xs={12} md={4}>
            <HeroCard img={googleLogo} title={"GOOGL"} price={"1515 USD"} />
          </Grid>
        </div>
        <div className="cardHero">
          <Grid item xs={12} md={4}>
            <HeroCard img={fbLogo} title={"FB"} price={"266 USD"} />
          </Grid>
        </div>
        <div className="cardHero">
          <Grid item xs={12} md={4}>
            <HeroCard img={amazLogo} title={"AMZN"} price={"3116 USD"} />
          </Grid>
        </div>
      </Grid>

      <div className="tableCss">
        <Datatable />
      </div>
    </div>
  );
};

export default Home;
