import { defineConfig, type UserConfig } from "vite";
import { qwikVite } from "@qwik.dev/core/optimizer";

export default defineConfig((): UserConfig => {
	return {
		plugins: [qwikVite()],
	};
});
