// dto - data transfer object
export default class CommitDto {
	id: any;
	name: any;
	message: any;
	date: any;

	constructor(model: { commit: any }) {
		this.name = model.commit.author.name;
		this.name = model.commit.author.name;
		this.message = model.commit.message;
		this.date = model.commit.author.date;
	}
}
