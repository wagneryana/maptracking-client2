
const menus = [
  {
    path: '/Inicio',
    title: 'Inicio!',
    icon: 'home',
  },  
  {
    path: '/maptracking',
    title: 'maptracking!',
    icon: 'list',
    routes: [
      {
        path: '/maptracking/categorias',
        title: 'Categoria!',
        replace: '/maptracking/categorias/list',
        icon: 'usb',
        routes: [
          {
            path: '/maptracking/categorias/list',
            title: 'list cat!',
          },
          {
            path: '/maptracking/categorias/new',
            title: 'new cat!',
          },
          {
            path: '/maptracking/categorias/edit/:id',
            title: 'edit cat!',
          }
        ]

      },
      {
        path: '/maptracking/facultades',
        title: 'Perfil!',
        replace: '/maptracking/facultades/list',
        icon: 'cart-plus',
        routes: [
          {
            path: '/maptracking/facultades/list',
            title: 'list Perfils!',
          },
          {
            path: '/maptracking/facultades/new',
            title: 'new perfil',
          },
          {
            path: '/maptracking/facultades/edit/:id',
            title: 'edit perfil!',
          }
        ]
      }
    ]
  }
]

export { menus }
