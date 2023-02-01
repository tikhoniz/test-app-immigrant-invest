import formatDistance from "date-fns/formatDistance";
import { format } from "date-fns";

export function getTimeAgo(commitDate: any) {
	return formatDistance(new Date(commitDate), new Date(), {
		addSuffix: true,
	});
}

export function dayMonthYearDate(time: any) {
	return format(new Date(time), "dd MMMM hh:mm");
}
