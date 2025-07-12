import type { QwikVitePluginOptions } from "@qwik.dev/core/optimizer";

// The relative path to the core package from the app directory
const relativeAppBase = "../core/src/";

export const qwikEntryConfig: QwikVitePluginOptions = {
	devSsrServer: false,
	ssr: {
		input: `${relativeAppBase}/server.tsx`,
	},
};
