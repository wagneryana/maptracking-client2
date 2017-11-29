import React from 'react'
//import loadable from 'loadable-components';

import CategoriaList from './components/categoria/List'
import CategoriaForm from './components/categoria/Form'
import FacultadList from './components/facultad/List'
import FacultadForm from './components/facultad/Form'

import { RouteWithSubRoutes } from 'react-router-dom-ext'


const Home = () => (
  <div>
    <h2>Inicio</h2>
  </div>
)

const Mapa = ({ routes }) => (
  <div>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </div>
)

const routes = [
  {
    path: '/inicio',
    //title: 'Home!',
    component: Home
  },
  {
    path: '/maptracking',
    //title: 'maptracking!',
    component: Mapa,
    routes: [
      {
        path: '/maptracking/categorias',
        //title: 'categorias!',
        component: Mapa,
        routes: [
          {
            path: '/maptracking/categorias/list',
            //title: 'list cat!',
            component: CategoriaList
          },
          {
            path: '/maptracking/categorias/new',
            //title: 'new cat!',
            component: CategoriaForm
          },
          {
            path: '/maptracking/categorias/edit/:id',
            //title: 'edit cat!',
            component: CategoriaForm
          }

        ],

      },

      {
        path: '/maptracking/facultades',
        //title: 'facultades!',
        component: Mapa,
        routes: [
          {
            path: '/maptracking/facultades/list',
            //title: 'list cat!',
            component: FacultadList
          },
          {
            path: '/maptracking/facultades/new',
            //title: 'new cat!',
            component: FacultadForm
          },
          {
            path: '/maptracking/facultades/edit/:id',
            //title: 'edit cat!',
            component: FacultadForm
          }
        ],
      }

    ]
  }
]

export { routes }
