function genericImport (page) {
  return import('pages/' + page + '.vue')
}

const routes = [
  // {
  //   path: '/login', component: () => genericImport('login')
  // },
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'home', component: () => genericImport('home') },
      { path: 'qc', component: () => genericImport('qc') },
      { path: 'help', component: () => genericImport('help') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
