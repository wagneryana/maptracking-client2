
const menus = [
  {
    path: '/home',
    title: 'Home!',
    icon: 'home',
  },
  {
    path: '/sandwiches',
    title: 'sandwiches!',
    icon: 'fa',
  },
  {
    path: '/tacos',
    title: 'tacos!',
    icon: 'list',
    routes: [
      {
        path: '/tacos/bus',
        title: 'bus!',
        icon: 'list',
      },
      {
        path: '/tacos/cart',
        title: 'cart!',
        icon: 'yelp',
      }
    ]
  },
  
  {
    path: '/xtacos2',
    title: 'tacos2!',
    icon: 'list',
    routes: [
      {
        path: '/xtacos2/bus2',
        title: 'bus2!',
        icon: 'gg',
      },
      {
        path: '/xtacos2/cart2',
        title: 'cart2!',
        icon: 'send',
      }
    ]
  },
  {
    path: '/maptracking',
    title: 'maptracking!',
    icon: 'list',
    routes: [
      {
        path: '/maptracking/categorias',
        title: 'categorias!',
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
        title: 'facultades!',
        replace: '/maptracking/facultades/list',
        icon: 'qq',
        routes: [
          {
            path: '/maptracking/facultades/list',
            title: 'list facultades!',
          },
          {
            path: '/maptracking/facultades/list2',
            title: 'new facultad2',
          }
        ]
      }
    ]
  }
]

export { menus }
