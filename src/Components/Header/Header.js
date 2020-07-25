import React, { Fragment, useState, useEffect } from 'react';

// Component
import Home from '../Home/Home'

// Services
import { getNew } from '../../Services/newService';

const Header = () => {

    const [articulos, setArticulos] = useState([]);
    const [totalRegister, setTotalRegister] = useState(0);
    const [topic, setTopic] = useState("bitcoins");
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        getNew(topic)
            .then(res => {
                setArticulos(res.data.articles);
                setTotalRegister(res.data.totalResults);
            })
            .catch(error => {
                console.log(error);
            })
    }, [isFetching]);

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#a">News Google API</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#a">Football <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#a">Programing</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2"
                            type="search" placeholder="Search"
                            aria-label="Search"
                            onChange={(e) => setTopic(e.target.value)} />
                        <button className="btn btn-outline-primary my-2 my-sm-0"
                            type="submit"
                            onClick={() => setIsFetching(!isFetching)}>
                            Search
                    </button>
                    </form>
                </div>
            </nav>
            <Home
                articulos={articulos}
                totalRegister={totalRegister} />
        </Fragment>

    );
}

export default Header;