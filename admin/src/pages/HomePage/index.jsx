/*
 *
 * HomePage
 *
 */

import React, { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";

// import PropTypes from 'prop-types';
import { Box, GridLayout, Typography } from "@strapi/design-system";

Chart.register(CategoryScale);

const HomePage = () => {
  const data = {
    labels: ["Red", "Orange", "Blue"],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: "Popularity of colours",
        data: [55, 23, 96],
        // you can set indiviual colors for each bar
        backgroundColor: [
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
          "rgba(255, 255, 255, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const Data = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
    },
    {
      id: 5,
      year: 2020,
      userGain: 4300,
      userLost: 234,
    },
  ];

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "&quot;#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  async function fetchData() {
    // fetch().then(res=>res.json())
    //   .then((data) =>{console.log(data); return data})
  }

  return (
    <div>
      <div
        style={{
          padding: 20,
        }}
      >
        <Typography variant="alpha">Analyse DealSanio</Typography>
      </div>
      <Box padding={8} background="neutral100">
        <GridLayout>
          {Array(12)
            .fill(null)
            .map((_, idx) => (
              <Box
                padding={4}
                hasRadius
                background="neutral0"
                key={`box-${idx}`}
                shadow="tableShadow"
              >
                <Pie
                  data={chartData}
                  options={{
                    plugins: {
                      title: {
                        display: true,
                        text: "Users Gained between 2016-2020",
                      },
                    },
                  }}
                />
              </Box>
            ))}
        </GridLayout>
      </Box>
    </div>
  );
};

export default HomePage;
