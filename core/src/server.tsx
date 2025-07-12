import {
	type RenderToStreamOptions,
	renderToStream,
} from "@qwik.dev/core/server";
import { manifest } from "@qwik-client-manifest";
import Root from "../../app/pages/index";

export default function (opts: RenderToStreamOptions) {
	return renderToStream(<Root />, {
		manifest,
		...opts,
		containerAttributes: {
			lang: "en-us",
			...(opts.containerAttributes ?? {}),
		},
		serverData: {
			...(opts.serverData ?? {}),
		},
	});
}
