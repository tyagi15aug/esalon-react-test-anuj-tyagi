import React, { Component } from "react";
import { Cell, Legend, PieChart, Pie } from "recharts";
import { bottleReducer } from "../reducers";

class ColorChart extends Component<any> {
  constructor(props: any) {
    super(props);
  }
  render() {
		const chartData: any = this.props.bottleData.colors;
		const bottleInfo:any = this.props.bottleData;
    return (
      <React.Fragment>
				<div className="bottleInfo">
						{bottleInfo.name} {bottleInfo.dye_type}
						<br/>
						{bottleInfo.formula_id}
					</div>
        <PieChart width={350} height={200}>
          <Pie
            data={chartData}
            innerRadius={50}
            outerRadius={70}
            fill="#82ca9d"
            dataKey="percent"
          >
            {chartData.map((entry: any, index: number) => (
              <Cell fill={entry.hex} key={index}/>
            ))}
          </Pie>
          <Legend
            verticalAlign="middle"
            align="left"
            iconType="rect"
            layout="vertical"
          />
        </PieChart>
      </React.Fragment>
    );
  }
}

export default ColorChart;
