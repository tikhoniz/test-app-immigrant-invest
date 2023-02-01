export const getCommits = async () => {
	const response = await fetch(
		`https://api.github.com/repos/${process.env.user}/${process.env.repo}/commits`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.gitUserToken}`,
			},
		}
	)
		.then(async (response) => {
			if (response.ok) {
				return response.json();
			}
			const data = await response.json();

			throw new Error(
				data.message || "Something went wrong! [API function createWorkout]"
			);
		})
		.catch((error) => {
			return error;
		});

	return response;
};
