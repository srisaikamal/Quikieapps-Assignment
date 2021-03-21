import React, { useState, useEffect } from "react";
import Datatable from "../components/Datatable";
import HeroCard from "../components/HeroCard";
import Navbar from "../components/Navbar";
import googleLogo from "../assets/GOOGL.png";
import fbLogo from "../assets/FB.png";
import amazLogo from "../assets/AMZN.svg";
import { Grid, Chip, Button, Snackbar } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [apidata, setApidata] = useState();
  const [alertOpen, setAlertOpen] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await axios.get(
      "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=c1atgkn48v6rcdq9scsg"
    );
    setApidata(data);
  };

  const SaveData = async ({ description, displaySymbol, currency, type }) => {
    const formData = {
      description,
      displaySymbol,
      currency,
      type,
    };

    try {
      const data = await axios.post(
        "https://quikieapps-backend.herokuapp.com/api/table/add",
        formData
      );

      if (data.status === 200) {
        setAlertOpen(true);
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
      title: "Save",

      render: (rowData) => {
        return (
          <Button
            onClick={() => SaveData(rowData)}
            variant="contained"
            style={{
              backgroundColor: "#6D5BD0",
              color: "white",
            }}
            size="small"
          >
            Save Data
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
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={alertOpen}
        message="Saved Successfully"
      />

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
        <Datatable columnData={columnData} tableData={tableData} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Link to="/view" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#6D5BD0",
              color: "white",
            }}
          >
            Saved Data
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
