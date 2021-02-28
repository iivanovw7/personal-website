## personal-website

Webpage client application.
Uses [graphcms](https://graphcms.com/).

---
### Table of Contents

- [Requirements](#requirements)
- [Libs](#libs)
- [Clone](#clone)
- [Installation](#installation)
- [Configuration](#configuration)
- [Files](#files)
- [ToDo](#todo)
- [License](#license)

---
### Requirements

- [NodeJS 14.x](https://nodejs.org/en/)
- [NPM 6.12.0](https://www.npmjs.com/get-npm)
---
### Libs

Technologies used
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [styled-components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [Babel](http://babeljs.io)
- [Webpack](https://webpack.js.org/)
- [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/)
- [Gulp](https://gulpjs.com/)
- [ESLint](https://eslint.org)
- [stylelint](https://stylelint.io)
- [typescript](https://www.typescriptlang.org/)

---
### Clone

- Clone repository: <br />
  `git clone https://github.com/iivanovw7/personal-website.git` <br />
---
### Installation

- Navigate into the application directory <br />
  `cd personal-website` <br />
- Installing setup modules: <br />
  `npm install` <br />
- Running in dev mode: <br />
  `npm run dev` <br />
- Running in dev mode with dashboard: <br />
  `npm run dev:dashboard` <br />
- Create production build: <br />
  `npm run build` <br />
- Running tests: <br />
  `npm run test` <br />
- Create test coverage report in `dist/coverage`: <br />
  `npm run coverage` <br />
- Create jsdoc in `dist/doc`: <br />
  `npm run doc` <br />

---
### Configuration

The movie database API key ([TMDB](https://www.themoviedb.org/settings/api)) is needed to run this application:

Any access keys or tokens should be stored in application root folder inside `./.env` in the similar way:
```
SOME_TOKEN=...
```


Additional arguments could be added to `npm run dev`, `npm run dev:dashboard`, `npm run build` after `--`:
* `--source-maps` {string | false} [false] - creates [source maps](https://webpack.js.org/configuration/devtool/).
* `--zip` {string | boolean} [false] - creates archive in `./dist` folder (uses `archive` filename by default, if called with `boolean`, or sets custom filename in case it was called with `string`).
  Examples:
* `npm run build -- --source-map=true`
* `npm run build -- --zip=true`
* `npm run build -- --zip=build`

---
### Files
Contains information about configuration files.

`./.nvmrc` -- contains current Node.js version.

`./.stylelintrc` -- contains stylelint configuration.

`./.env` -- contains API auth keys.

`./assets` -- folder contains application resources (images, svg, fonts and etc...)

`./config/jsdoc` -- contains JSDoc setup.

`./config/webpack` -- contains webpack config files.

`./doc/` -- folder contains additional readme files included in JSDoc.

`./gulpfile.js` -- contains gulp config.

`./src/` -- main application folder.

`./src/config` -- contains application config.

`./src/locale` -- locale related modules.

`./src/service` -- logic relate to data acquisition.

`./src/template` -- html template file.

`./src/types` -- additional ts types.

`./src/ui` -- contains application ui related files, such as pages components, styles, etc.

`./src/utils` -- contains application config.

`./tool` -- contains additional scripts used during build, testing, debugging, etc.

---
### ToDo

- ~~Create base application structure.~~ <br/>
- ~~Setup webpack for prod and dev, setup loaders and npm scripts.~~ <br/>
- ~~Setup linting~~ <br/>
- ~~Add localization~~ <br/>
- ~~Add locale toggle~~ <br/>
- Migrate all src folder to ts <br />
- Migrate to Typedoc <br />
- Add unit tests <br />
- Add e2e test <br />
- Posts lazy loading <br/>
- Single post page <br/>
- Tag search <br/>
- Migrate from jsdoc to tsdoc <br />
- Home screen structure <br/>
- Notes search component  <br/>
- Add offline support with https://developers.google.com/web/tools/workbox <br />

### License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="/" target="_blank">personal-website</a>
