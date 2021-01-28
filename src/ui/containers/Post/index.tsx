/**
 * Module contains post main component.
 * @module ui/containers/Post
 */
import { useQuery } from '@apollo/client';
import { compose } from '@reduxjs/toolkit';
import { always, cond, pipe, prop, T, split, take } from 'ramda';
import React, { memo, ReactNode } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import { getText } from '../../../locale';
import { GET_POST } from '../../../service/graphcms/queries/posts';
import { isNilOrEmpty } from '../../../utils/helpers';
import ErrorMessage from '../../components/ErrorMessage';
import Spinner from '../../elements/Spinner';
import commonMessages from '../App/model/messages';
import { makeSelectLocation } from '../App/model/selectors';

import Article from './Article';

export interface PostProps {
    location: Location;
}

/**
 * Creates Post component.
 * @param {PostProps} props - contains component props.
 * @method
 * @return {ReactNode} Post component.
 * @constructor
 */
function Post(props: PostProps): ReactNode {
    const { location } = props;
    const { noResults } = commonMessages;
    const id = pipe(split('/'), take(2))(location.pathname);
    const { data, loading, error } = useQuery(GET_POST, {
        variables: { id },
        fetchPolicy: 'cache-and-network',
    });

    const Content = cond([
        // @ts-ignore
        [prop('error'), always(<ErrorMessage />)],
        // @ts-ignore
        [prop('loading'), always(<Spinner />)],
        [pipe(prop('post'), isNilOrEmpty), always(<p>{getText(noResults, props)}</p>)],
        // eslint-disable-next-line react/no-unused-prop-types
        [T, ({ post }: { post: { html: string } }) => <p>{post.html}</p>],
    ]);

    // prettier-ignore
    return (
        <Article error={error}>
            <Content
                error={error}
                loading={loading}
                post={data
                    ? data.post
                    : null} />
        </Article>
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
    const { location } = makeSelectLocation(state);

    return {
        location,
    };
};

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect, injectIntl, memo)(Post);
