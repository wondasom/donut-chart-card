import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';

import DonutChartCard from './DonutChartCard';

function DonutChartCards() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [profiles, setProfiles] = useState([]);

	const insert = (arr, index, newItem) => [
		...arr.slice(0, index),
		newItem,
		...arr.slice(index)
	];

	const handleClone = (profile) => {
		// (1) if you want to put the new card next to the original card so that they are put together
		const index = profiles.indexOf(profile);
		const newProfile = { ...profile };
		const newProfiles = insert(profiles, index + 1, newProfile);
		setProfiles(newProfiles);
		// (2) if you want to put the new card in the end
		// const newProfile = {...profile}
		// const newProfiles = [...profiles, newProfile];
		// setProfiles(newProfiles);
	};

	useEffect(() => {
		fetch('profiles.json')
			.then((res) => res.json())
			.then(
				(result) => {
					result.profiles.forEach((item) => {
						item.id = uuid();
					});
					setIsLoaded(true);
					setProfiles(result.profiles);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	if (error) {
		return <Error>🤔 Something went wrong!</Error>;
	} else if (!isLoaded) {
		return <Loading>Loading...</Loading>;
	} else {
		return (
			<Container>
				{profiles.map((item) => (
					<DonutChartCard
						profile={item}
						onClone={handleClone}
						key={item.id}
					></DonutChartCard>
				))}
			</Container>
		);
	}
}

export default DonutChartCards;

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
`;

const Error = styled.div`
	width: 100%;
	height: 100vw;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1rem;
`;

const Loading = styled.div`
	width: 100%;
	height: 100vw;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1rem;
`;
