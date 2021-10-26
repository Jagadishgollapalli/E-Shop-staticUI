import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart=(props)=>{
    return(
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a class="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelled by="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            🛒Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p>
                </div>
            </div>
        </header>
    <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center ">
    {
                    props.jsonCard.map((cart)=>{
                        return(
                          <div className="col-mb-5 mt-4">
                          <div className="card h-100">
                          <img className="card-img-top" src={cart.image}/>
                          <div className="card-body p-4">
                          <div class="text-center">
                              <h4 className="fw-bolder">{cart.title}</h4>
                              <div className="d-flex justify-content-center small text-warning mb-2">{cart.rating}</div>
                              <p className="fw-bolder">{cart.price}</p>
                              <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">{cart.footer}</a></div>
                          </div>
                          </div>
                          </div>
                          </div>
                          
                        )
                    })
    }
    </div> 
    </div>
    </section>
    </div>
    )                
}
export default Cart;

