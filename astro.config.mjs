import { defineConfig, sharpImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://brycerussell.github.io',
  base: '/qbcore-docs',
  image: {
    service: sharpImageService(),
  },
  integrations: [
    starlight({
      title: '',
      logo: {
        src: '/src/assets/qbcore-logo-full.png',
      },
      social: {
        github: 'https://github.com/qbcore-framework/qb-core',
        discord: 'https://discord.com/invite/qbcore',
        twitter: 'https://twitter.com/qbcoreframework'
      },
      customCss: ['/src/custom.css'],
      sidebar: [
        {
          label: 'Introduction',
          autogenerate: { directory: 'introduction' },
        },
        {
          label: 'Project Sponsors',
          autogenerate: { directory: 'project-sponsors' },
        },
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'QB Core',
          autogenerate: { directory: 'qb-core' },
        },
        {
          label: 'QB Core Resources',
          autogenerate: { directory: 'qbcore-resources' },
        },
      ],
    }),
  ],
});
