# vue2-boilerplate-better

Vue.js (v2) project boilerplate with some interesting features included.

## Index

- [vue2-boilerplate-better](#vue2-boilerplate-better)
  - [Index](#index)
  - [Online demo](#online-demo)
  - [Features](#features)
  - [Installation](#installation)
  - [Directory structure](#directory-structure)
  - [Usage](#usage)
    - [Watchdog for CSS](#watchdog-for-css)
    - [Watchdog for JS](#watchdog-for-js)
    - [Create new translation](#create-new-translation)
    - [Create new utility](#create-new-utility)
    - [Create new file](#create-new-file)
    - [Create new route](#create-new-route)
    - [Create new component](#create-new-component)
    - [Modify styles](#modify-styles)
    - [Reuse zcomponents](#reuse-zcomponents)

## Online demo

Go to the online demo on:

 - [https://allnulled.github.io/vue-boilerplate-better](https://allnulled.github.io/vue-boilerplate-better)

## Features

These are the main features that make interesting this project:

 - Internationalization - [`i18next`](https://github.com/i18next/i18next) + [`vue-i18next`](https://github.com/panter/vue-i18next)
 - Routing - [`vue-router`](https://github.com/vuejs/vue-router)
 - Local database - [`dexie`](https://github.com/dexie/Dexie.js) + [`dexie-relationships`](https://github.com/ignasbernotas/dexie-relationships)
 - Local storage - [`localStorage`](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
 - Send AJAX requests - [`axios`](https://github.com/axios/axios)
 - Send push notifications - [`push.js`](https://github.com/Nickersoft/push.js/)
 - Easy checkings - [`@allnulled/check-that`](https://github.com/allnulled/check-that)
 - Drag and drop - [`vue-draggable`](https://github.com/SortableJS/Vue.Draggable)
 - Navigation topbar and menu
 - Responsive
 - Customizable badges
 - Dialogs - based on `win7.css`
 - Dynamic styles - `sass`
 - Customizable styles per-component and per-zcomponent
 - Basic utility functions
 - Customizable utilities
 - Landing screen
 - Application metadata
 - Roboto font by default
 - +60 reusable **zcomponents** based on **win7.css**
 - Others...

## Installation

Clone the repo in a fresh directory, then from console: `npm install`

## Directory structure

The `vue-boilerplate-better` follows the next directory structure:

- [src](./src)
   - [assets](./src/assets)
   - [components](./src/components)
   - [database](./src/database)
   - [i18n](./src/i18n)
   - [routes](./src/routes)
   - [styles](./src/styles)
   - [utils](./src/utils)

You can navigate the documentation through these links.

## Usage

### Watchdog for CSS

Run from console: `npm run dev-styles`

### Watchdog for JS

Run from console: `npm run serve`

### Create new translation

Go to [`src/i18n/translation/{ Language ISO }.js`](./src/i18n) and add a new key.

### Create new utility

Go to [`src/utils`](./src/utils) and create a new file with your utility. Then go to `src/utils/all.js` and add it too from there.

### Create new file

Go to [`src/assets`](./src/assets) and add your new file.

### Create new route

Go to [`src/routes`](./src/routes), open the `factory.js` file and add a new route.

### Create new component

Go to [`src/components`](./src/components) and create a new folder (in camel-case). Then inside, create your component file (in CapitalCase) with the `.vue` extension, and code there your component.

### Modify styles

Go to [`src/styles/all.scss`](./src/styles) and add your file, then save it. If you are running `npm run dev-styles`, the Sass files will be compiled automatically.

### Reuse zcomponents

The `zcomponents` library is a kit of user-interface web components coded for Vue.js (v2) and based on `win7.css` too. They will provide you a basic setup for user-interface building that is already familiar to the user.

See [zcomponents](./src/components/zcomponents/zcomponents.md) to know more.