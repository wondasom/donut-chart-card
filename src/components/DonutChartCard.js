import React, { useState } from 'react';
import Donut from './Donut';
import styled from 'styled-components';

import { Button, Menu, MenuItem } from '@material-ui/core';
import { COLORS } from '../assets/colors';

function DonutChartCard(props) {
	const chartData = props.profile.data;
	const totalLabel = props.profile.totalLabel;
	const chartTitle = props.profile.title;
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClone = () => {
		props.onClone(props.profile);
		handleClose()
	};

	const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

	return (
		<div>
			<Title>{chartTitle}</Title>
			<Donut chartData={chartData} totalLabel={totalLabel}></Donut>
			<button onClick={handleClone}>clone</button>
			{/* <Button
				aria-controls='simple-menu'
				aria-haspopup='true'
				onClick={handleClone}
			>
				...
			</Button>
			<Menu
				id='simple-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose}>clone</MenuItem>
			</Menu> */}
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
