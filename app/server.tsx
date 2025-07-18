import { renderToStream } from "@qwik.dev/core/server";
import { Counter } from "./src/components/counter";
import { manifest } from "@qwik-client-manifest";

export default {
	async fetch(req: Request) {
		let html = "";

		await renderToStream(<Counter />, {
			manifest,
			containerTagName: "div",
			stream: {
				write: (chunk: string) => {
					console.log("Chunk: ", chunk);
					html += chunk;
				},
			},
		});

		return new Response(html, {
			headers: {
				"content-type": "text/html",
			},
		});
	},
};
