import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components';
import { COLORS } from '../assets/colors';

class Donut extends Component {
	constructor(props) {
		super(props);
		this.chartLabels = this.props.chartData.map((item) => item.label);
		this.chartSeries = this.props.chartData.map((item) => item.value);
		this.state = {
			series: this.chartSeries,
			labels: this.chartLabels,
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
						dataLabels: {
							offset: 0,
							minAngleToShowLabel: 10
						},
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
									fontFamily: 'Montserrat, Arial, sans-serif',
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
									fontFamily: 'Helvetica, Arial, sans-serif',
									fontWeight: 600,
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
					series={this.state.series}
					type='donut'
					width='380'
				/>
				<Legend>
					{this.props.chartData
						.map((item) => item.label)
						.map((item) => (
							<LegendItem>
								<Bullet
									props={this.props.chartData
										.map((item) => item.label)
										.indexOf(item)}
								></Bullet>
								<Item>{item}</Item>
							</LegendItem>
						))}
				</Legend>
			</ChartContainer>
		);
	}
}

export default Donut;

const ChartContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const Legend = styled.div`
	width: 30%;
	display: flex;
	flex-direction: column;
	margin-top: 1rem;
`;

const Bullet = styled.div`
	position: relative;
	bottom: -1px;
	min-width: 1rem;
	max-width: 1rem;
	min-height: 1rem;
	max-height: 1rem;
	border-radius: 100%;
	margin-right: 0.7rem;
	${({ props }) => props === 0 && `background-color: ${COLORS.pink}`};
	${({ props }) => props === 1 && `background-color: ${COLORS.skyBlue}`};
	${({ props }) => props === 2 && `background-color: ${COLORS.purple}`};
`;

const LegendItem = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 0.8rem;
	color: ${COLORS.darkBlue};
	font-weight: 600;
`;

const Item = styled.span`
	font-size: 1rem;
`;
