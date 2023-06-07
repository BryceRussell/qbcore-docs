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
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/qbcore-docs/apple-touch-icon.png'
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            sizes: '32x32',
            href: '/qbcore-docs/favicon-32x32.png',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            sizes: '16x16',
            href: '/qbcore-docs/favicon-16x16.png',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'manifest',
            href: '/qbcore-docs/site.webmanifest',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'mask-icon',
            href: '/qbcore-docs/safari-pinned-tab.svg',
            color: '#dc143b'
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'apple-mobile-web-app-title',
            content: 'QBCore Docs',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'application-name',
            content: 'QBCore Docs',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'msapplication-TileColor',
            content: '#dc143b',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#23272E',
          },
        },
      ]
    }),
  ],
});
