import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), mdx(), react()],
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		}
	}),
});
