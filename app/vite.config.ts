import { defineConfig, type UserConfig } from "vite";
import { qwikVite as qwik } from "@qwik.dev/core/optimizer";
import { nitro } from "nitro/vite";
import { qwikEntryConfig } from "qwik-start";

export default defineConfig((): UserConfig => {
	return {
		plugins: [nitro()],
	};
});
