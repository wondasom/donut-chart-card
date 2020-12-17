import React, { useState } from 'react';
import Donut from './Donut';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';

import { Button, Menu, MenuItem } from '@material-ui/core';
import { COLORS } from '../assets/colors';
import menu from '../images/menu.png';

function DonutChartCard(props) {
	const chartData = props.profile.data;
	const totalLabel = props.profile.totalLabel;
	const chartTitle = props.profile.title;
	const [anchorEl, setAnchorEl] = useState(null);
	const [isCloned, setIsCloned] = useState(false);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
		props.onClone(props.profile);
		setIsCloned(true);
	};

	return (
		<CardContainer>
			<TitleContainer>
				<Title>{chartTitle}</Title>
				{!isCloned && (
					<StylesProvider injectFirst>
						<StyledButton
							aria-controls='simple-menu'
							aria-haspopup='true'
							onClick={handleClick}
						>
							⋮
						</StyledButton>
						<Menu
							id='simple-menu'
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose}>Clone</MenuItem>
						</Menu>
					</StylesProvider>
				)}{' '}
			</TitleContainer>
			<Donut chartData={chartData} totalLabel={totalLabel}></Donut>
		</CardContainer>
	);
}

export default DonutChartCard;

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 40rem;
	padding: 1rem;
	margin-bottom: 1rem;
`;

const Title = styled.h2`
	color: ${COLORS.darkBlue};
	border-bottom: dashed 2px ${COLORS.lightGrey};
	padding-bottom: 0.5rem;
	display: inline;
`;

const TitleContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0;
`;

const StyledButton = styled(Button)`
	width: 0.5rem;
	background-image: url(${menu});
	background-repeat: no-repeat;
	background-position: center;
	color: #fff;
	&:hover {
		opacity: 0.8;
	}
`;
