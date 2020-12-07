/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "E:\\Vuecli3\\flameIce\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-a0e1e8ae",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-a0e1e8ae").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-929cac88",
    path: "/guide/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-929cac88").then(next)
    },
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-020e9ff6",
    path: "/guide/interview_questions.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-020e9ff6").then(next)
    },
  },
  {
    name: "v-327bb10c",
    path: "/config.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-327bb10c").then(next)
    },
  },
  {
    name: "v-b1564aac",
    path: "/tag/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tags", "v-b1564aac").then(next)
    },
    meta: {"pid":"tags","id":"tags"}
  },
  {
    path: "/tag/index.html",
    redirect: "/tag/"
  },
  {
    name: "v-ef9325c4",
    path: "/categories/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterKey", "v-ef9325c4").then(next)
    },
    meta: {"pid":"categories","id":"categories"}
  },
  {
    path: "/categories/index.html",
    redirect: "/categories/"
  },
  {
    name: "v-6319eb4e",
    path: "/timeline/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("TimeLines", "v-6319eb4e").then(next)
    },
    meta: {"pid":"timeline","id":"timeline"}
  },
  {
    path: "/timeline/index.html",
    redirect: "/timeline/"
  },
  {
    name: "v-49a56e2a",
    path: "/tag/前端/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-49a56e2a").then(next)
    },
    meta: {"pid":"tags","id":"前端"}
  },
  {
    path: "/tag/前端/index.html",
    redirect: "/tag/前端/"
  },
  {
    name: "v-14bbbf36",
    path: "/categories/前端/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Category", "v-14bbbf36").then(next)
    },
    meta: {"pid":"categories","id":"前端"}
  },
  {
    path: "/categories/前端/index.html",
    redirect: "/categories/前端/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]