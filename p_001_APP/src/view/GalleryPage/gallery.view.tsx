import * as React from 'react';
import { AppBar } from 'material-ui';
import { Link } from 'react-router-dom';

export class GalleryPage extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <div>
                <AppBar>
                    <Link to="/login">login</Link>
                    <Link to="/main_page">main</Link>
                </AppBar>
            </div>
        );
    }
}