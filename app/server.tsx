import { renderToStream } from "@qwik.dev/core/server";
import { Counter } from "./src/components/counter";

export default {
	async fetch(req: Request) {
		let html = "";

		await renderToStream(<Counter />, {
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
