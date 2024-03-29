import React from 'react';

export const devicesTableHeader = [
	{
		title: () => {
			return <p>Serial Number</p>;
		},
		render: (rowData) => {
			return <p>{rowData['serialNumber']}</p>;
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
			return <p>Type</p>;
		},
		render: (rowData) => {
			return <p>{rowData['type']}</p>;
		},
	},
	{
		title: () => {
			return <p>Is Mapped</p>;
		},
		render: (rowData) => {
			return <p>{String(rowData['isMapped'])}</p>;
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