import formatDistance from "date-fns/formatDistance";

export function getTimeAgo(commitDate: any) {
	return formatDistance(new Date(commitDate), new Date(), {
		addSuffix: true,
	});
}
