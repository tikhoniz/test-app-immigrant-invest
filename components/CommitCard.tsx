import React, { FC, useEffect, useState } from "react";
import { dayMonthYearDate, getTimeAgo } from "@/helpers/utils/getTime";
import { ICommit } from "@/interfaces/card.interface";

interface CommitCardProps {
	commit: ICommit;
}

const CommitCard: FC<CommitCardProps> = ({ commit }) => {
	const [timeAgo, setTimeAgo] = useState(getTimeAgo(commit.date));

	useEffect(() => {
		const timerID = setInterval(
			() => setTimeAgo(getTimeAgo(commit.date)),
			30000
		);
		return () => clearInterval(timerID);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const commitTime = dayMonthYearDate(commit.date);

	return (
		<li className="flex flex-col border border-r-10 hover:border-blue-600 hover:text-blue-600 py-7 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-50 transition-all cursor-pointer">
			<p className="text-xl text-bold mb-3">{commit.message}</p>
			<div className="flex justify-between items-end">
				<p className="text-sm">by {commit.name}</p>
				<div className="flex flex-col ">
					<time className="text-neutral-500">{timeAgo}</time>
					<time className="text-neutral-500">{commitTime}</time>
				</div>
			</div>
		</li>
	);
};

export default CommitCard;
