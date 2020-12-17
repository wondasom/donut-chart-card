import React, { useState, useEffect } from 'react';
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
		const index = profiles.indexOf(profile);
		// (1) if you want to put same cards together
		const newProfiles = insert(profiles, index + 1, profile);
		setProfiles(newProfiles);
		// (2) if you want to put the new card in the end
		// const newProfiles = [...profiles, profile];
		// setProfiles(newProfiles);
	};

	useEffect(() => {
		fetch('profiles.json')
			.then((res) => res.json())
			.then(
				(result) => {
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
		return <div>Error</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<div>
				{profiles.map((item) => (
					<DonutChartCard profile={item} onClone={handleClone}></DonutChartCard>
				))}
			</div>
		);
	}
}

export default DonutChartCards;
