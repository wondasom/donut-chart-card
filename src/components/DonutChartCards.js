import React, { useState, useEffect } from 'react';
import DonutChartCard from './DonutChartCard';

import styled from 'styled-components';

import uuid from 'react-uuid';

function DonutChartCards() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [profiles, setProfiles] = useState([]);
	const [insertAfter, setInsertAfter] = useState(false);

	const insert = (arr, index, newItem) => [
		...arr.slice(0, index),
		newItem,
		...arr.slice(index)
	];

	const handleClone = (profile) => {
		const index = profiles.indexOf(profile);
		const newProfile = { ...profile };
		const newProfiles = insertAfter
			? insert(profiles, index + 1, newProfile)
			: [...profiles, newProfile];
		setProfiles(newProfiles);
	};

	useEffect(() => {
		fetch('profiles.json')
			.then((res) => res.json())
			.then(
				(result) => {
					result.profiles.forEach((item) => {
						item.id = uuid();
					});
					setProfiles(result.profiles);
				},
				(error) => {
					setError(error);
				}
			)
			.finally(() => setIsLoaded(true));
	}, []);

	if (isLoaded) {
		if (error) {
			return <Error>🤔 Something went wrong!</Error>;
		}
		return (
			<Container>
				{profiles.map((item, index) => (
					<DonutChartCard
						profile={item}
						onClone={handleClone}
						key={`${item.id}-${index}`}
					></DonutChartCard>
				))}
			</Container>
		);
	}
	return <Loading>Loading...</Loading>;
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
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	text-align: center;
`;

const Loading = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	text-align: center;
`;
