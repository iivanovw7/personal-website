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

