// @flow

import React from 'react';
import Base from '../components/base';
import Posts from '../components/base/components/posts/index';
import { createPostsPath } from './urlGenerator';

export default [
    {
        component: Base,
        routes: [
            {
                path: createPostsPath(),
                component: Posts,
                exact: true
            }
        ]
    }
]
