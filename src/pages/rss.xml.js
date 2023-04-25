import rss from "@astrojs/rss"
import { getCollection } from "astro:content"

export async function get(context) {
	const post = await getCollection("tips")
	return rss({
		title: "AtroBuild.tips",
		description: "Page Example with Astro",
		site: context.site,
		items: post.map((post) => ({
			...post.data,
			link: `/posts/${post.slug}/`,
		})),
	})
}
