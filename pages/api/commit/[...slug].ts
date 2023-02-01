import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "GET") {
		try {
			const [user, repo] = req.query.slug as string[];
			const response = await fetch(
				`https://api.github.com/repos/${user}/${repo}/commits`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${process.env.gitUserToken}`,
					},
				}
			)
				.then((response) => {
					if (response.ok) {
						return response.json();
					}
					return response.json().then((data) => {
						throw new Error(data.error || "Something went wrong!");
					});
				})
				.then((data) => {
					return data;
				})
				.catch((error) => {
					return error;
				});

			res.status(200).json({ data: response });
		} catch (error: any) {
			res.status(500).json({ error: error.message });
		}
	}
}

export default handler;
