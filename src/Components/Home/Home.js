import React, { Fragment } from 'react';

const Home = ({ articulos, totalRegister }) => {
    let i = 1;
    return (
        <Fragment>
            <div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Total registers: {totalRegister}</li>
                    </ol>
                </nav>
                <div className="row row-cols-1 row-cols-md-4">
                    {articulos.map(articulo =>
                        <div className="col mb-4" key={i++}>
                            <div className="card h-100 m-1">
                                <img src={articulo.urlToImage} className="card-img-top" alt={articulo.description} />
                                <div className="card-body">
                                    <h5 className="card-title">{articulo.title}</h5>
                                    <p className="card-text">{articulo.description}</p>
                                    <a className="btn btn-outline-info" target="blank"
                                        href={articulo.url}>
                                        More info +
                                    </a>
                                </div>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </Fragment >
    );
}
export default Home;