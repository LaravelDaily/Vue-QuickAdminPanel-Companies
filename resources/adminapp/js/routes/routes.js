import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const View = { template: '<router-view></router-view>' }

const routes = [
  {
    path: '/',
    component: () => import('@pages/Layout/DashboardLayout.vue'),
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@pages/Dashboard.vue'),
        meta: { title: 'Dashboard' }
      },
      {
        path: 'user-management',
        name: 'user_management',
        component: View,
        redirect: { name: 'permissions.index' },
        children: [
          {
            path: 'permissions',
            name: 'permissions.index',
            component: () => import('@cruds/Permissions/Index.vue'),
            meta: { title: 'Permissions' }
          },
          {
            path: 'permissions/create',
            name: 'permissions.create',
            component: () => import('@cruds/Permissions/Create.vue'),
            meta: { title: 'Permissions' }
          },
          {
            path: 'permissions/:id',
            name: 'permissions.show',
            component: () => import('@cruds/Permissions/Show.vue'),
            meta: { title: 'Permissions' }
          },
          {
            path: 'permissions/:id/edit',
            name: 'permissions.edit',
            component: () => import('@cruds/Permissions/Edit.vue'),
            meta: { title: 'Permissions' }
          },
          {
            path: 'roles',
            name: 'roles.index',
            component: () => import('@cruds/Roles/Index.vue'),
            meta: { title: 'Roles' }
          },
          {
            path: 'roles/create',
            name: 'roles.create',
            component: () => import('@cruds/Roles/Create.vue'),
            meta: { title: 'Roles' }
          },
          {
            path: 'roles/:id',
            name: 'roles.show',
            component: () => import('@cruds/Roles/Show.vue'),
            meta: { title: 'Roles' }
          },
          {
            path: 'roles/:id/edit',
            name: 'roles.edit',
            component: () => import('@cruds/Roles/Edit.vue'),
            meta: { title: 'Roles' }
          },
          {
            path: 'users',
            name: 'users.index',
            component: () => import('@cruds/Users/Index.vue'),
            meta: { title: 'Users' }
          },
          {
            path: 'users/create',
            name: 'users.create',
            component: () => import('@cruds/Users/Create.vue'),
            meta: { title: 'Users' }
          },
          {
            path: 'users/:id',
            name: 'users.show',
            component: () => import('@cruds/Users/Show.vue'),
            meta: { title: 'Users' }
          },
          {
            path: 'users/:id/edit',
            name: 'users.edit',
            component: () => import('@cruds/Users/Edit.vue'),
            meta: { title: 'Users' }
          }
        ]
      },
      {
        path: 'cities',
        name: 'cities.index',
        component: () => import('@cruds/Cities/Index.vue'),
        meta: { title: 'Cities' }
      },
      {
        path: 'cities/create',
        name: 'cities.create',
        component: () => import('@cruds/Cities/Create.vue'),
        meta: { title: 'Cities' }
      },
      {
        path: 'cities/:id',
        name: 'cities.show',
        component: () => import('@cruds/Cities/Show.vue'),
        meta: { title: 'Cities' }
      },
      {
        path: 'cities/:id/edit',
        name: 'cities.edit',
        component: () => import('@cruds/Cities/Edit.vue'),
        meta: { title: 'Cities' }
      },
      {
        path: 'categories',
        name: 'categories.index',
        component: () => import('@cruds/Categories/Index.vue'),
        meta: { title: 'Categories' }
      },
      {
        path: 'categories/create',
        name: 'categories.create',
        component: () => import('@cruds/Categories/Create.vue'),
        meta: { title: 'Categories' }
      },
      {
        path: 'categories/:id',
        name: 'categories.show',
        component: () => import('@cruds/Categories/Show.vue'),
        meta: { title: 'Categories' }
      },
      {
        path: 'categories/:id/edit',
        name: 'categories.edit',
        component: () => import('@cruds/Categories/Edit.vue'),
        meta: { title: 'Categories' }
      },
      {
        path: 'companies',
        name: 'companies.index',
        component: () => import('@cruds/Companies/Index.vue'),
        meta: { title: 'Companies' }
      },
      {
        path: 'companies/create',
        name: 'companies.create',
        component: () => import('@cruds/Companies/Create.vue'),
        meta: { title: 'Companies' }
      },
      {
        path: 'companies/:id',
        name: 'companies.show',
        component: () => import('@cruds/Companies/Show.vue'),
        meta: { title: 'Companies' }
      },
      {
        path: 'companies/:id/edit',
        name: 'companies.edit',
        component: () => import('@cruds/Companies/Edit.vue'),
        meta: { title: 'Companies' }
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: '/admin',
  routes
})
