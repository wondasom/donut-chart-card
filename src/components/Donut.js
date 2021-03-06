import React, { PureComponent, memo } from 'react';

import styled from 'styled-components';
import { COLORS } from '../assets/colors';
import { SIZE } from '../assets/size';

import Chart from 'react-apexcharts';

class Donut extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			options: {
				colors: [COLORS.pink, COLORS.skyBlue, COLORS.purple],
				tooltip: {
					enabled: false
				},
				stroke: {
					show: false
				},
				dataLabels: {
					enabled: false
				},
				legend: {
					show: false
				},
				plotOptions: {
					pie: {
						expandOnClick: false,
						donut: {
							size: '65%',
							background: 'transparent',
							labels: {
								show: true,
								name: {
									show: true,
									offsetY: 26 // position of total.label
								},
								value: {
									show: true,
									fontSize: '36px',
									fontFamily: 'Noto Sans, Arial, sans-serif',
									fontWeight: 600,
									color: COLORS.darkBlue,
									offsetY: -20,
									formatter: function(val) {
										return val;
									}
								},
								total: {
									show: true,
									showAlways: true,
									label: props.totalLabel.toUpperCase(),
									fontSize: '18px',
									fontFamily: 'Nunito, Arial, sans-serif',
									fontWeight: 800,
									color: COLORS.darkBlue
								}
							}
						}
					}
				}
			}
		};
	}

	render() {
		return (
			<ChartContainer>
				<Chart
					options={this.state.options}
					series={this.props.chartSeries}
					type='donut'
					width='360'
				/>
				<Legend>
					{this.props.chartLabels.map((item) => (
						<LegendItem>
							<Bullet props={this.props.chartLabels.indexOf(item)}></Bullet>
							<Item>{item}</Item>
						</LegendItem>
					))}
				</Legend>
			</ChartContainer>
		);
	}
}

export default memo(Donut);

const ChartContainer = styled.div`
	display: flex;
	flex-direction: row;
	@media (max-width: ${SIZE.medium}) {
		flex-direction: column;
	}
`;

const Legend = styled.div`
	width: 35%;
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
	@media (max-width: ${SIZE.medium}) {
		width: 100%;
	}
`;

const Bullet = styled.div`
	width: 1rem;
	height: 1rem;
	border-radius: 100%;
	margin-right: 0.7rem;
	position: relative;
	bottom: -2.3px;
	${({ props }) => props === 0 && `background-color: ${COLORS.pink}`};
	${({ props }) => props === 1 && `background-color: ${COLORS.skyBlue}`};
	${({ props }) => props === 2 && `background-color: ${COLORS.purple}`};
`;

const LegendItem = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 0.8rem;
	color: ${COLORS.darkBlue};
	font-weight: 800;
	letter-spacing: 0.9;
`;

const Item = styled.span`
	font-size: 1rem;
`;
