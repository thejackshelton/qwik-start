import { defineConfig, type UserConfig } from "vite";
import { qwikVite } from "@qwik.dev/core/optimizer";
import { nitro } from "nitro/vite";

export default defineConfig((): UserConfig => {
	return {
		plugins: [qwikVite(), nitro()],
	};
});
