/**
 * Module contains tag cloud component.
 * @module ui/components/TagCloud
 * @author Igor Ivanov
 */
import { always, map } from 'ramda';
import React, { Dispatch, memo, ReactElement, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { Post } from '../../../generated/graphcms-schema';
import { selectLocation } from '../../containers/App/model/selectors';
import { setTags, TSetTags } from '../../containers/Posts/model';
import { basePath, isPostAreaPath } from '../../routes';
import appHistory from '../../routes/history';

import Container from './Container';
import TagButton from './TagButton';

interface ITagCloudProps {
    /** [props.tags = []] - list of tag strings. */
    tags: Post['tags'] | [];
    /** tag click handler, sets tag name as posts filter condition. */
    onTagClick: (tag: string) => void;
    /** Current location. */
    location: Location;
}

interface IDispatchProps extends Pick<ITagCloudProps, 'onTagClick'> {
    /** Dispatches action. */
    dispatch: Dispatch<TSetTags>;
}

/**
 * Creates tag cloud component.
 * @method
 * @param {Object.<module:ui/components/TagCloud~propTypes>} props
 *  contains component props
 *  @see {@link module:ui/components/TagCloud~propTypes}
 * @return {JSX.Element} React component with children.
 * @constructor
 */
function TagCloud(props: ITagCloudProps): ReactElement {
    const { tags = [], onTagClick, location: appLocation } = props;

    /**
     * Handles any tag click event.
     * Sets new tag search query and redirects to `posts` page in case single post is open.
     * @param {Event | SyntheticEvent} eventData - object represents event data.
     */
    function handleClick(eventData: SyntheticEvent): void {
        eventData.preventDefault();
        const data = eventData.currentTarget.getAttribute('data-id');

        if (data) {
            onTagClick(data);

            if (isPostAreaPath(appLocation.pathname)) {
                appHistory.push(basePath.posts);
            }
        }
    }

    /**
     * Creates single tag button component.
     * @param {string} text - tag text.
     * @return {JSX.Element} returns tag button element.
     */
    const TagButtonElement = (text: string): ReactElement => (
        <TagButton key={uuidv4()} text={text} onClick={handleClick} />
    );

    /**
     * Tag buttons list.
     */
    const TagButtons = always(map(TagButtonElement, tags)) as any; // eslint-disable-line

    return (
        <Container>
            <TagButtons />
        </Container>
    );
}

/**
 * Function selects parts of the state required in component.
 * @method
 * @param {Object} state
 *    Object contains application state.
 * @return {Function} selector
 */
const mapStateToProps = (state) => {
    return {
        location: selectLocation(state),
    };
};

/**
 * Function mapping dispatch to props.
 * Dispatching action which may cause change of application state.
 * @func mapDispatchToProps
 * @param {Function} dispatch method.
 * @return {Object} redux container
 */
export function mapDispatchToProps(dispatch: Dispatch<TSetTags>): IDispatchProps {
    return {
        onTagClick: (tag: string) => dispatch(setTags([tag])),
        dispatch,
    };
}

// Not using `compose` here due to errors https://stackoverflow.com/questions/51605112/react-recompose-causing-typescript-error-on-props
export default connect(mapStateToProps, mapDispatchToProps)(
    memo(TagCloud)
);
