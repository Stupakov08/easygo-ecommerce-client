import React from 'react';

const Currency = (c, cur) => {
	if (!c) return;
	let price = c.toString().split('.');
	return (
		<span>
			<span>{price[0]}.</span>
			<sup>
				{price[1]
					? price[1].length === 1
						? price[1] + '0'
						: price[1].slice(0, 2)
					: '00'}
			</sup>
			<span>{` ${cur || '₴'}`}</span>
		</span>
	);
};

export default Currency;
