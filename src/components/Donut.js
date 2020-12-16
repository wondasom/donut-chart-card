import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components';

class Donut extends Component {
	constructor(props) {
		super(props);
		this.chartLabels = this.props.chartData.map((item) => item.label);
		this.chartSeries = this.props.chartData.map((item) => item.value);
		this.state = {
			series: this.chartSeries,
			labels: this.chartLabels,
			options: {
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
									offsetY: 30 // position of total.label
								},
								value: {
									show: true,
									fontSize: '46px',
									fontFamily: 'Helvetica, Arial, sans-serif',
									fontWeight: 400,
									color: 'red',
									offsetY: -26,
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
									color: 'green'
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
					{this.state.labels.map((item) => (
						<LegendItem>
							<Bullet></Bullet>
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

const Bullet = styled.div`
	min-width: 1rem;
	max-width: 1rem;
	min-height: 1rem;
	max-height: 1rem;
	border: 1px solid black;
	border-radius: 100%;
	margin-right: 0.7rem;
`;

const Legend = styled.div`
	width: 30%;
	display: flex;
	flex-direction: column;
`;

const LegendItem = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 0.8rem;
`;

const Item = styled.span`
	font-size: 1rem;
`;
