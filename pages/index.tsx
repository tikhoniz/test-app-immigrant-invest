import { getCommits } from "@/helpers/api-commits";
import Head from "next/head";

export default function Home({ commitList }: any) {
	return (
		<>
			<Head>
				<title>Test App for Immigrant Invest</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main></main>
		</>
	);
}

export async function getStaticProps() {
	const commitList = await getCommits();
	return {
		props: { commitList },
		revalidate: 2,
	};
}
