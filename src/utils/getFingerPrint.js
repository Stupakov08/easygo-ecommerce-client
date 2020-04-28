import fp from 'fingerprintjs2';

export const getFingerprint = () =>
	new Promise((resolve) => {
		fp.get((components) => {
			const values = components.map((component) => component.value);
			var murmur = fp.x64hash128(values.join(''), 31);
			resolve(murmur);
		});
	});
