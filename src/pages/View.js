import React, { useState, useEffect } from "react";
import Datatable from "../components/Datatable";
import HeroCard from "../components/HeroCard";
import Navbar from "../components/Navbar";
import googleLogo from "../assets/GOOGL.png";
import fbLogo from "../assets/FB.png";
import amazLogo from "../assets/AMZN.svg";
import { Grid, Chip, Button } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";
const View = () => {
  const [apidata, setApidata] = useState();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await axios.get(
      "https://quikieapps-backend.herokuapp.com/api/table"
    );
    setApidata(data);
  };

  const DeleteTableFromDb = async (id) => {
    try {
      const data = await axios.delete(
        `https://quikieapps-backend.herokuapp.com/api/table/delete/${id}`
      );
      if (data.status === 200) {
        fetchData();
      }
    } catch (error) {}
  };

  const tableData = [];
  apidata &&
    apidata.data.map((data) => {
      let formData = {};
      formData = {
        currency: data.currency,
        description: data.description,
        displaySymbol: data.displaySymbol,
        type: data.type,
        id: data._id,
      };

      tableData.push(formData);
    });

  const columnData = [
    {
      title: "Company Name",
      field: "description",
    },

    {
      title: "Symbol",
      field: "displaySymbol",

      render: ({ displaySymbol }) => {
        return (
          <Chip
            style={{
              color: "#4A4AFF",
              backgroundColor: "#E6E6F2",
              fontWeight: "bold",
            }}
            label={displaySymbol}
            size="small"
          />
        );
      },
    },
    {
      title: "Currency",
      field: "currency",
    },

    {
      title: "Delete",
      field: "displaySymbol",

      render: ({ id }) => {
        return (
          <Button
            onClick={() => DeleteTableFromDb(id)}
            variant="contained"
            style={{
              backgroundColor: "#6D5BD0",
              color: "white",
            }}
            size="small"
          >
            Delete
          </Button>
        );
      },
    },

    {
      title: "Type",
      field: "type",
    },
  ];

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
        <Datatable tableData={tableData} columnData={columnData} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#6D5BD0",
              color: "white",
            }}
          >
            Go Back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default View;
