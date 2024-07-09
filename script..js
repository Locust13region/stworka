const source = [
	{
		length: 1665,
		angle: 0,
	},
	{
		length: 947,
		angle: 90,
	},
	{
		length: 557,
		angle: 0,
	},
	{
		length: 1300,
		angle: 90,
	},
	{
		length: 2225,
		angle: 180,
	},
	{
		length: 2239,
		angle: 270,
	},
];

let x = 0;
let y = 0;

function compute(l, a) {
	const roundedLength = Math.round(l / 10);
	switch (a) {
		case 0:
			x += roundedLength;
			break;
		case 90:
			y += roundedLength;
			break;
		case 180:
			x -= roundedLength;
			break;
		case 270:
			y -= roundedLength;
			break;
		default:
			break;
	}
	return { x: x, y: y };
}

const target = source.reduce((acc, current) => {
	const coordinates = compute(current.length, current.angle);
	acc.push(coordinates);
	return acc;
}, []);
console.log(target);
