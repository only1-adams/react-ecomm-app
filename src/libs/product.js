export const getFeaturedProducts = async function (url, ACCESS_TOKEN) {
	const response = await fetch(url, {
		headers: {
			Authorization: `JWT ${ACCESS_TOKEN}`,
		},
	});
	const data = await response.json();

	if (!response.ok) {
		throw new Error("An error occurred! Please try again.");
	}

	return data;
};

export const getSingleProduct = async function (url) {
	const response = await fetch(url);
	const data = await response.json();

	if (!response.ok) {
		throw new Error("An error occurred! Please try again.");
	}

	return data;
};
