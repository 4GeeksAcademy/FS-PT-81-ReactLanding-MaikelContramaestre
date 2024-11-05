import React from "react";

export const Card = () => {
    return (
        <div className="container-fluid d-flex justify-content-around p-2">
            <div className="row d-flex justify-content-center">
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl- my-3 col-xxl-3 card  m-3" style={ {width: '18rem' }}>
                    <img src="https://picsum.photos/seed/picsum/200/200" className="card-img-top" alt="..."/>
                         <div className="card-body">
                            <h8 className="card-title">Card title</h8>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl- my-3 col-xxl-3 card  m-3" style={ {width: '18rem' }}>
                    <img src="https://picsum.photos/seed/picsum/200/200" className="card-img-top" alt="..."/>
                         <div className="card-body">
                            <h8 className="card-title">Card title</h8>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl- my-3 col-xxl-3 card m-3" style={ {width: '18rem' }}>
                    <img src="https://picsum.photos/seed/picsum/200/200" className="card-img-top" alt="..."/>
                         <div className="card-body">
                            <h8 className="card-title">Card title</h8>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl- my-3 col-xxl-3 card m-3" style={ {width: '18rem' }}>
                    <img src="https://picsum.photos/seed/picsum/200/200" className="card-img-top" alt="..."/>
                         <div className="card-body">
                            <h8 className="card-title">Card title</h8>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        </div>
    )
}