import { defineConfig, type UserConfig } from "vite";
import { qwikVite as qwik } from "@qwik.dev/core/optimizer";
import { nitro } from "nitro/vite";

export default defineConfig((): UserConfig => {
	return {
		plugins: [
			nitro({}),
			qwik({
				devSsrServer: false,
			}),
		],
	};
});
