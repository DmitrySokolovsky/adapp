import * as React from 'react';
import { AppBar, Button } from 'material-ui';
import { NavLink } from 'react-router-dom';
import './header.style.scss';

export class Header extends React.Component {
    public render(): JSX.Element {
        return (
            <AppBar position="absolute">
                <ul className="navigation">
                    <li className="navigation-item">
                        <NavLink to="/main">
                            <Button>MAIN PAGE</Button>
                        </NavLink>
                    </li>
                    <li className="navigation-item">
                        <NavLink to="/login">
                            <Button>Login</Button>
                        </NavLink>
                    </li>

                </ul>

            </AppBar>
        );
    }
}