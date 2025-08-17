'use client';

import React, { useEffect, useState } from 'react';

interface LocalTimeProps {
	timeZone?: string;
	className?: string;
}

function formatTimeForZone(timeZone: string): string {
	try {
		const formatter = new Intl.DateTimeFormat('en-NG', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: true,
			timeZone,
		});
		// Ensure AM/PM is uppercase (some environments return lowercase)
		return formatter.format(new Date()).replace(/am|pm/i, (m) => m.toUpperCase());
	} catch {
		// Fallback to browser local time if timezone unsupported
		const fallback = new Intl.DateTimeFormat(undefined, {
			hour: '2-digit',
			minute: '2-digit',
			hour12: true,
		});
		return fallback.format(new Date()).replace(/am|pm/i, (m) => m.toUpperCase());
	}
}

export const LocalTime: React.FC<LocalTimeProps> = ({ timeZone = 'Africa/Lagos', className }) => {
	const [time, setTime] = useState<string>(() => formatTimeForZone(timeZone));

	useEffect(() => {
		setTime(formatTimeForZone(timeZone));
		const intervalId = window.setInterval(() => {
			setTime(formatTimeForZone(timeZone));
		}, 60 * 1000); // update every minute
		return () => window.clearInterval(intervalId);
	}, [timeZone]);

	return <span className={className}>{time}</span>;
};


