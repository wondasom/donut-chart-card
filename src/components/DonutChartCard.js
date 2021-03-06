import React, { useState, memo } from 'react';
import Donut from './Donut';
import menu from '../images/menu.png';

import styled from 'styled-components';
import { COLORS } from '../assets/colors';
import { SIZE } from '../assets/size';

import { Button, Menu, MenuItem } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';

function DonutChartCard(props) {
	const totalLabel = props.profile.totalLabel;
	const chartTitle = props.profile.title;
	const chartLabels = props.profile.data.map((item) => item.label);
	const chartSeries = props.profile.data.map((item) => item.value);
	const [anchorEl, setAnchorEl] = useState(null);
	const [isCloned, setIsCloned] = useState(false);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleClone = () => {
		props.onClone(props.profile);
		setIsCloned(true);
	};

	const handleMenuClick = () => {
		handleClose();
		handleClone();
	};

	return (
		<CardContainer>
			<Header>
				<Title>{chartTitle}</Title>
				{!isCloned && (
					<StylesProvider injectFirst>
						<StyledButton
							aria-controls='simple-menu'
							aria-haspopup='true'
							onClick={handleClick}
						></StyledButton>
						<Menu
							id='simple-menu'
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem onClick={handleMenuClick}>Clone</MenuItem>
						</Menu>
					</StylesProvider>
				)}
			</Header>
			<Donut
				totalLabel={totalLabel}
				chartLabels={chartLabels}
				chartSeries={chartSeries}
			></Donut>
		</CardContainer>
	);
}

export default memo(DonutChartCard);

const CardContainer = styled.div`
	width: 38rem;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	margin: 1rem;
	@media (max-width: ${SIZE.mobile}) {
		width: 100%;
		margin: 0;
	}
`;

const Title = styled.h2`
	border-bottom: dashed 2px ${COLORS.lightGrey};
	padding-bottom: 0.5rem;
	margin-bottom: 0.6rem;
	color: ${COLORS.darkBlue};
	font-weight: 800;
`;

const Header = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0;
`;

const StyledButton = styled(Button)`
	height: 64px;
	background-image: url(${menu});
	background-repeat: no-repeat;
	background-position: center;
	color: #fff;
	&:hover {
		opacity: 0.8;
	}
`;
