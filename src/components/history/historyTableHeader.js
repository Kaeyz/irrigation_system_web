import React from 'react';

export const historyTableHeader = [
	{
		title: () => {
			return <p>Moisture Sensor</p>;
		},
		render: (rowData) => {
			return <p>{rowData['moistureSensor']}</p>;
		},
	},
	{
		title: () => {
			return <p>Control Valve</p>;
		},
		render: (rowData) => {
			return <p>{rowData['controlValve']}</p>;
		},
	},
/* 	{
		title: function title() {
			return <p>Platform</p>;
		},
		render: function DateTaken(rowData) {
			return <ViewPlatform platform={rowData['platform']} />;
		},
	}, */
	{
		title: () => {
			return <p>Moisture Value</p>;
		},
		render: (rowData) => {
			return <p>{rowData['moistureValue']}</p>;
		},
	},
	{
		title: () => {
			return <p>Is Irrigated</p>;
		},
		render: (rowData) => {
			return <p>{String(rowData['isIrrigated'])}</p>;
		},
	},
	{
		title: () => {
			return <p>Time</p>;
		},
		render: (rowData) => {
			return <p>{rowData['createdAt']}</p>;
		},
	}
];