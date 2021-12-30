import React from 'react';
import { Link } from 'react-router-dom';

export const plotsTableHeader = [
	{
		title: () => {
			return <p>Plot Name</p>;
		},
		render: (rowData) => {
			return <p>{rowData['name']}</p>;
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
			return <p>Moisture Requirement</p>;
		},
		render: (rowData) => {
			return <p>{rowData['moistureRequirement']}</p>;
		},
	},
	{
		title: () => {
			return <p>Moisture Sensor</p>;
		},
		render: (rowData) => {
			return <p>{String(rowData['moistureSensor'])}</p>;
		},
	},
	{
		title: () => {
			return <p>Control Valve</p>;
		},
		render: (rowData) => {
			return <p>{String(rowData['controlValve'])}</p>;
		},
	},
	{
		title: () => {
			return <p>Moisture History</p>;
		},
		render: (rowData) => {
			return <Link to={`/plots/history/${rowData._id}`}>View</Link>;
		},
	},
];