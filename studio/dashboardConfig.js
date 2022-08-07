export default {
  widgets: [
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
                  buildHookId: '62ef67f88e24d65ad2d929e2',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ko4x4wjc',
                  apiId: 'b7346d35-3c8c-4511-a18b-25b3fed77fe2'
                },
                {
                  buildHookId: '62ef67f90e3e5c5cc38b1416',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-os337sxj',
                  apiId: '2b58710e-2aa6-4261-a6fc-c22a6e34549a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alpeza/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-os337sxj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
