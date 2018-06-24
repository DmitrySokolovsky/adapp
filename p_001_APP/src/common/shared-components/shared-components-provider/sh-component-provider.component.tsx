import * as React from 'react';

import { jss, generateClassName } from './sh-component-provider-const';

const JssProvider = require('react-jss/lib/JssProvider').default;

export const ShComponentsProvider = (props: React.Props<{}>) => {
    return (
        <JssProvider jss={jss} generateClassName={generateClassName} >
            {props.children}
        </JssProvider>
    );
};