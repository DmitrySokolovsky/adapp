import React from 'react';
import { SubHeaderMenu, SubheaderBackground } from '../subheader';

export class Header extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <SubHeaderMenu />
                <SubheaderBackground />
            </React.Fragment>
        );
    }
}