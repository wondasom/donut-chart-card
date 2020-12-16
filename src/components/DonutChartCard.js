import React, { useState } from 'react';
import Donut from './Donut';

function DonutChartCard(props) {
  const chartData = props.profile.data;
  const totalLabel = props.profile.totalLabel;
	return (
		<div>
			<p>{props.profile.title}</p>
			<Donut chartData={chartData} totalLabel={totalLabel}></Donut>
		</div>
	);
}

export default DonutChartCard;
