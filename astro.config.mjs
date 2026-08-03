import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://tools-docs.bytcloud.org',
	integrations: [
		starlight({
			title: '工具书',
			defaultLocale: 'root',
			locales: {
				root: { label: '简体中文', lang: 'zh-CN' },
			},
		}),
	],
});
