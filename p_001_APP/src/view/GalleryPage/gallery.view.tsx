import * as React from 'react';
import './gallery.style.scss';

export class GalleryPage extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <div className="gallery-container">
                <h1 className="welcome">Welcome</h1>
            </div>
        );
    }
}