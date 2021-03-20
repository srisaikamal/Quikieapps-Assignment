import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    width: 309,
    height: 195,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const HeroCard = ({ img, title, price }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <h3 style={{ fontSize: "25px" }}>{title}</h3>
        <img src={img} style={{ height: "70px", width: "70px" }} alt="" />
      </div>

      <div>
        <h1 style={{ textAlign: "center" }}>{price}</h1>
      </div>
    </Card>
  );
};

export default HeroCard;
