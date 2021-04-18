### Code Style

#### Imports
Imports from another modules should be arranged in special order, provided below:

1.Another libraries sorted in alphabetical order. In case of importing multiple functions/methods from one library,
they should be also sorted in alphabetical order.
```javascript
import FontFaceObserver from 'fontfaceobserver';
import React from 'react';
import ReactDOM from 'react-dom';
import { css } from 'styled-components';
```

2.Imports from another directories, after a blanc line, sorted in alphabetical order.
```javascript
import { RESIZE } from '../src/constants';
import App from '../src/core/index';
import * as utils from '../src/utils';
```

3.Imports from tha same directory, after a blanc line, sorted in alphabetical order.
```javascript
import * as constants from './constants';
import { resize } from './actions';
```

4.CSS imports starting from another libraries imports, also sorted in alphabetical order.
```javascript
import '../sampleDir/index.css';
import './dir/data.css';
import './index.pcss';
```

#### [Ducks](https://github.com/erikras/ducks-modular-redux)
Ducks should de stored in `model/index.ts` file and should be organized according to the following structure:
1. Objects representing actions or events should comply [Flux Standard Action](https://github.com/acdlite/flux-standard-action).
2. `initialState` object could be exported in order to be used in tests.
3. Any types, interfaces, helpers or constants should be arranged in alphabetical order.
4. State selectors should be placed in `model/select.ts` file.
5. Utils should be placed in `model/utils.ts`.
6. `reducer` should be exported as default method.
7. Methods used to describe actions should be also arranged in alphabetical order.
