// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/nightOwlLight');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

const config = {
  title: 'Harpocrates',
  tagline: 'Harpocrates was the Greek god of silence, secrets, and confidentiality. He will help you keep your private information safe and secure.',
  url: 'https://harpocrates.tech/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'leskaa', // Usually your GitHub org/user name.
  projectName: 'harpocrates', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Harpocrates',
        logo: {
          alt: 'Harpocrates Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'tutorial/intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/features', label: 'Features', position: 'left'},
          {
            type: 'doc',
            docId: 'about/process',
            position: 'left',
            label: 'About',
          },
          {
            href: 'https://discord.com/oauth2/authorize?client_id=934589572011134987&permissions=8&scope=bot',
            label: 'Add Harpocrates to your Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/tutorial/intro',
              },
            ],
          },
          {
            title: 'Hackathon',
            items: [
              {
                label: 'Minnehack',
                href: 'https://minnehack.io/',
              },
              {
                label: 'Devpost',
                href: 'https://minnehack-2022.devpost.com/',
              },
              {
                label: 'Harpocrates Demo Discord',
                href: 'https://discord.gg/6QgcJWsZ',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/leskaa',
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} Harpocrates Team. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
