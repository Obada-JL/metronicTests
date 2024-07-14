import React, { Component } from "react";
import Chart from "react-apexcharts";

class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
      },
      series: [
        {
          name: "series-1",
          data: [3, 0, 42, 50, 59, 10, 29],
        },
        {
          name: "series-2",
          data: [25, 84, 12, 30, 46, 75, 29],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="600"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;

// class Charts extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {},
//       series: [47, 50, 41, 12, 10],
//       labels: ["A", "B", "C", "D", "E"],
//     };
//   }

//   render() {
//     return (
//       <div className="donut">
//         <Chart
//           options={this.state.options}
//           series={this.state.series}
//           type="donut"
//           width="380"
//         />
//       </div>
//     );
//   }
// }
// export default Charts;
