import { defineConfig, type UserConfig } from "vite";
import {
	qwikVite as qwik,
	type QwikVitePluginOptions,
} from "@qwik.dev/core/optimizer";
import { nitro } from "nitro/vite";

const entryConfig: QwikVitePluginOptions = {
	devSsrServer: false,
};

export default defineConfig((): UserConfig => {
	return {
		plugins: [qwik(entryConfig), nitro()],
	};
});
