import React, { useState } from 'react';
import Donut from './Donut';
import styled from 'styled-components';
import { COLORS } from '../assets/colors';

function DonutChartCard(props) {
	const chartData = props.profile.data;
	const totalLabel = props.profile.totalLabel;
	return (
		<div>
			<Title>{props.profile.title}</Title>
			<Donut chartData={chartData} totalLabel={totalLabel}></Donut>
		</div>
	);
}

export default DonutChartCard;

const Title = styled.h2`
	color: ${COLORS.darkBlue};
  border-bottom: dashed 2px ${COLORS.darkBlue};
 	display: inline;
  padding-bottom: 0.5rem;
`;
