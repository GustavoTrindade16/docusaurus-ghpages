import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'f56'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '1c1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '5ad'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'ded'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '85f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '568'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '479'),
    exact: true
  },
  {
    path: '/Manutenção e serviços',
    component: ComponentCreator('/Manutenção e serviços', '2ee'),
    exact: true
  },
  {
    path: '/Manutenção e serviços/archive',
    component: ComponentCreator('/Manutenção e serviços/archive', '635'),
    exact: true
  },
  {
    path: '/Manutenção e serviços/first-Manutenção e serviços-post',
    component: ComponentCreator('/Manutenção e serviços/first-Manutenção e serviços-post', '004'),
    exact: true
  },
  {
    path: '/Manutenção e serviços/long-Manutenção e serviços-post',
    component: ComponentCreator('/Manutenção e serviços/long-Manutenção e serviços-post', 'c52'),
    exact: true
  },
  {
    path: '/Manutenção e serviços/mdx-Manutenção e serviços-post',
    component: ComponentCreator('/Manutenção e serviços/mdx-Manutenção e serviços-post', '264'),
    exact: true
  },
  {
    path: '/Manutenção e serviços/tags',
    component: ComponentCreator('/Manutenção e serviços/tags', '7a3'),
    exact: true
  },
  {
    path: '/Manutenção e serviços/tags/docusaurus',
    component: ComponentCreator('/Manutenção e serviços/tags/docusaurus', 'd61'),
    exact: true
  },
  {
    path: '/Manutenção e serviços/tags/facebook',
    component: ComponentCreator('/Manutenção e serviços/tags/facebook', 'e3d'),
    exact: true
  },
  {
    path: '/Manutenção e serviços/tags/hello',
    component: ComponentCreator('/Manutenção e serviços/tags/hello', '1db'),
    exact: true
  },
  {
    path: '/Manutenção e serviços/tags/hola',
    component: ComponentCreator('/Manutenção e serviços/tags/hola', 'b5d'),
    exact: true
  },
  {
    path: '/Manutenção e serviços/welcome',
    component: ComponentCreator('/Manutenção e serviços/welcome', 'a5f'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3c6'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'aa5'),
    routes: [
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-Manutenção e serviços-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-Manutenção e serviços-post', '68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '373'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
