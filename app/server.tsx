import { H3, defineHandler } from "h3";
import { renderToStream } from "@qwik.dev/core/server";
import { Counter } from "./src/components/counter";
import { manifest } from "@qwik-client-manifest";

const app = new H3();

const handler = defineHandler(() => {
	let html = "";

	renderToStream(<Counter />, {
		manifest,
		containerTagName: "div",
		stream: {
			write: (chunk: string) => {
				console.log("Chunk: ", chunk);
				html += chunk;
			},
		},
	});

	console.log("HTML: ", html);

	return html;
});

export default handler;

app.get("/", handler);
