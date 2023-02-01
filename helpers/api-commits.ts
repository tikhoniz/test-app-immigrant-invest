export const getCommits = async() =>{
	const response = await fetch(`${process.env.localhost}/api/commit/${process.env.user}/${process.env.repo}`, {
		method: "GET",
	})
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