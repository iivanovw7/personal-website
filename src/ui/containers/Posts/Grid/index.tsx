/**
 * Module contains posts list component.
 * @module ui/containers/Posts/Grid
 */
import React, { memo, useRef } from 'react';
import { injectIntl, IntlShape, WrappedComponentProps } from 'react-intl';
import { connect } from 'react-redux';

import { Post } from '../../../../generated/graphcms-schema';
import { getText } from '../../../../locale';
import TagCloud from '../../../components/TagCloud';
import H6 from '../../../elements/H6';
import NavLink from '../../../elements/NavLink';
import { basePath } from '../../../routes';
import { selectLocation } from '../../App/model/selectors';

import Bar from './Bar';
import Cell from './Cell';
import Container from './Container';
import { LinkIconStyles, LinkTitleStyles, LinkTitleH6Styles } from './Styles';

export interface IPostProps {
    /** [hasMore = false] - `true` if there are new posts to load and `else` otherwise. */
    hasMore?: boolean;
    /** Object represents router `location`. */
    location: Location;
    /** `react-intl` object provides access  to localization methods. */
    intl: IntlShape;
    /** [posts = []] - list of posts to show. */
    posts?: Post[];
}

/**
 * Creates Posts grid component.
 * @method
 * @param {IPostProps} props - contains component props
 *
 * @return {JSX.Element} React component with children.
 * @constructor
 */
function Grid(props: IPostProps & WrappedComponentProps) {
    const { hasMore = false, posts = [], location: appLocation } = props;
    const listRef = useRef(null);

    return (
        <Container ref={listRef} hasMore={hasMore}>
            {posts.map((post: Post) => {
                const { id, title, tags = [], subject } = post;

                return (
                    <Cell key={id}>
                        <NavLink
                            variant="title"
                            exact={false}
                            location={appLocation}
                            link={`${String(basePath.post)}/${id}`}
                            styles={LinkTitleStyles}>
                            <H6 styles={LinkTitleH6Styles}>{title}</H6>
                        </NavLink>
                        <p>{subject}</p>
                        <Bar>
                            <TagCloud tags={tags} />
                            <NavLink
                                variant="secondary"
                                exact={false}
                                location={appLocation}
                                link={`${String(basePath.post)}/${id}`}
                                icon="read_more"
                                text={getText('read_more', props)}
                                styles={LinkIconStyles}
                            />
                        </Bar>
                    </Cell>
                );
            })}
        </Container>
    );
}


/**
 * Function selects parts of the state required in component.
 * @method
 * @param {Object} state
 *    Object contains application state.
 * @see {@link module:containers/App/model/selectors}
 * @return {Function} selector
 */
const mapStateToProps = (state) => {
    return {
        location: selectLocation(state),
    };
};

// Not using `compose` here due to errors https://stackoverflow.com/questions/51605112/react-recompose-causing-typescript-error-on-props
export default connect(mapStateToProps)(
    injectIntl(memo(Grid))
);
