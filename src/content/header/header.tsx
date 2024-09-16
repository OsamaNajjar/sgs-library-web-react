export const Header =() => {
    return (
        <div className="header">
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: 'rgb(79, 181, 162,0.75)'}}>
            <div className="container-fluid">
                <img src="./react.svg"/>
                <a className="navbar-brand" href="#"> SGS Library </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Books</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Reports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Maps</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                        </a>
                        <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Books</a></li>
                        <li><a className="dropdown-item" href="#">Rports</a></li>
                        <li><a className="dropdown-item" href="#">Maps</a></li>
                        </ul>
                    </li>
                    </ul>
                <span className="navbar-text">
                    <i className="fa-solid fa-user" style={{marginRight:'5px'}}></i>
                    Najjar, OM
                </span>
                </div>
            </div>
        </nav>
        </div>
        
    );
};