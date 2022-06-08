import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
	return (
		<div className="my-5">
			<Bar data={chartData} />
		</div>
	);
}

export default BarChart;
