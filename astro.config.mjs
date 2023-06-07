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
          tag: "meta",
          attrs: {
            property:"og:url",
            content:"https://brycerussell.github.io/qbcore-docs/"
          }
        },
        { 
          tag:"meta",
          attrs: {
            property:"og:type",
            content:"website"
          }
        },
        { 
          tag:"meta",
          attrs: {
            property:"og:title",
            content:"Welcome to QBCore"
          }
        },
        { 
          tag:"meta",
          attrs: {
            property:"og:description",
            content:"Welcome aboard! QBCore is an ever-expanding framework for Grand Theft Auto V utilizing the FiveM platform. It offers extensive customization, ease of use, ongoing maintenance and active support!"
          }
        },
        { 
          tag:"meta",
          attrs: {
            property:"og:image",
            content:"/og.png"
          }
        },
      ]
    }),
  ],
});
