import React, { useEffect, useState } from "react";
import { getTimeAgo } from "@/helpers/utils/getTime";

const CommitCard = ({ commit }: any) => {
	const [time, setTime] = useState(getTimeAgo(commit.commit.author.date));

	useEffect(() => {
		const timerID = setInterval(
			() => setTime(getTimeAgo(commit.commit.author.date)),
			30000
		);
		return () => clearInterval(timerID);
	});

	return (
		<div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
			<p className="text-sm">
				Commit: <span className="text-bold mr-2 ">{commit.commit.message}</span>
				Author: <span className="text-bold">{commit.commit.author.name}</span>
				Date: <span className="text-bold">{time}</span>
			</p>
		</div>
	);
};

export default CommitCard;
