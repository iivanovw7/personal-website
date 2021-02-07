/**
 * Module contains utils used in Post component
 * @module ui/containers/Post/model/utils
 * @author Igor Ivanov
 */
import { replace, pipe } from 'ramda';

const formattedPostText = pipe(
    replace(/__code-start__/g, '<pre class="prettyprint">'),
    replace(/__code-end__/g, '</pre>')
);

export default formattedPostText;
