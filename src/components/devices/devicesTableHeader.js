import React from 'react';

export const devicesTableHeader = [
	{
		title: function title() {
			return <p>Serial Number</p>;
		},
		render: function DateTaken(rowData) {
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
		title: function title() {
			return <p>Type</p>;
		},
		render: function DateTaken(rowData) {
			return <p>{rowData['type']}</p>;
		},
	},
	{
		title: function title() {
			return <p>Is Mapped</p>;
		},
		render: function DateTaken(rowData) {
			return <p>{String(rowData['isMapped'])}</p>;
		},
	},
	{
		title: function title() {
			return <p>Time</p>;
		},
		render: function SerialNumber(rowData) {
			return <p>{rowData['createdAt']}</p>;
		},
	}
];