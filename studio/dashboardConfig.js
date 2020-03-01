export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e5b0ac5d2a6049e34094e13',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-44ogzptk',
                  apiId: '987e5728-eb0c-4ffb-9da1-5d2d475768d2'
                },
                {
                  buildHookId: '5e5b0ac567d7dac06e427103',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4oembpuv',
                  apiId: '7663fcdc-4872-4888-8a1d-7f48a7741a0f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajanick3/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4oembpuv.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
