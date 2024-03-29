import { useState } from 'react';

export default function MyLayout({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a href="/posts" className="btn btn-success">Створити петицію</a><br/>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        <a href="/posts/info" className="btn btn-success">Переглянути петицію</a>
                        <a className="nav-item nav-link" href="#">Pricing</a>
                        <a className="nav-item nav-link disabled" href="#" tabIndex="-1"
                           aria-disabled="true">Disabled</a>
                    </div>
                </div>
            </nav>
        </div>

    );

}
