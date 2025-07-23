import { defineConfig, type UserConfig } from "vite";
import { qwikVite as qwik } from "@qwik.dev/core/optimizer";
import { nitro } from "nitro/vite";
import { symbolMapper } from "@qwik.dev/core/optimizer";

export default defineConfig((): UserConfig => {
	return {
		plugins: [
			{
				name: "get-symbol-mapper",
				enforce: "pre",
				configResolved(config) {
					globalThis.symbolMapper = symbolMapper;
				},
			},
			nitro({}),
			qwik({
				devSsrServer: false,
			}),
		],
	};
});
