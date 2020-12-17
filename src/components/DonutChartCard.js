import React, { useState } from 'react';
import Donut from './Donut';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';

import { Button, Menu, MenuItem } from '@material-ui/core';
import { COLORS } from '../assets/colors';

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
			</TitleContainer>
			<Donut chartData={chartData} totalLabel={totalLabel}></Donut>
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
			)}
		</CardContainer>
	);
}

export default DonutChartCard;

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid red;
`;

const Title = styled.h2`
	color: ${COLORS.darkBlue};
	border-bottom: dashed 2px ${COLORS.lightGrey};
	padding-bottom: 0.5rem;
	display: inline;
`;

const TitleContainer = styled.div`
	width: 100%;
`;

const StyledButton = styled(Button)`
	width: 1rem;
	background-color: #6772e5;
	color: #fff;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	padding: 7px 14px;
	&:hover {
		background-color: #5469d4;
	}
`;
