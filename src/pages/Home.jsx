import React from "react";
import { MenuBtn } from "../components/MenuBtn";
import "./Home.css";
import AboutImg from "../utils/img/hombre-chef-preparando-donas-cocina_8595-16145.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light shadow">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex flex-column align-items-start justify-content-start">
              <h2 className="mb-0 text-white fw-bold text-start">
                Bienvenidos a
              </h2>
              <h1 className="mb-5 text-white fw-bold text-start text-sm-start">
                La Dona Gatona
              </h1>
              <MenuBtn />
            </div>
          </div>
        </div>
      </header>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center d-none d-lg-flex">
            <img src={AboutImg} className="img-fluid" alt="about img " />
          </div>
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
            <h2 className="fs-1 mb-5 text-uppercase fw-bold">Sobre nostros</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              similique eaque officiis at sint fugiat ipsam harum ullam iure
              enim ipsum quod illo nobis, quis hic exercitationem. Accusantium,
              tempora minima!
            </p>
            <p className="mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis voluptates labore officiis odit voluptatem consectetur
              itaque, dicta at, excepturi consequuntur quae delectus
              voluptatibus. Suscipit neque, aperiam enim dicta tempore
              voluptatibus!
            </p>
            <Link to="/about">
              <button type="button" className="btn btn-outline-success btn-lg">
                Más sobre nosotros
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="menu-section py-5 text-light shadow">
        <div className="container d-flex flex-column align-items-center">
            <h2 className="fs-1 mb-5 text-uppercase fw-bold">Nuestros favoritos</h2>
            <div className="row mb-5 w-100">
                <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
                    <h3 className="fs-2 mb-5">Donas</h3>
                    <ul className="px-0">
                        <li className="d-flex justify-content-between">
                            <p className="fs-3 mx-2">RayaDona</p>
                            <p className="fs-3 mx-2 text-success fw-nold">$1.500</p>
                        </li>
                        <li className="d-flex justify-content-between">
                            <p className="fs-3 mx-2">ChispiDona</p>
                            <p className="fs-3 mx-2 text-success fw-nold">$1.500</p>
                        </li>
                        <li className="d-flex justify-content-between">
                            <p className="fs-3 mx-2">CocoDona</p>
                            <p className="fs-3 mx-2 text-success fw-nold">$1.500</p>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
                    <h3 className="fs-2 mb-5">Bebestibles</h3>
                    <ul className="px-0">
                        <li className="d-flex justify-content-between">
                            <p className="fs-3 mx-2">Ristretto</p>
                            <p className="fs-3 mx-2 text-success fw-nold">$1.200</p>
                        </li>
                        <li className="d-flex justify-content-between">
                            <p className="fs-3 mx-2">Espresso</p>
                            <p className="fs-3 mx-2 text-success fw-nold">$1.200</p>
                        </li>
                        <li className="d-flex justify-content-between">
                            <p className="fs-3 mx-2">Capucchino</p>
                            <p className="fs-3 mx-2 text-success fw-nold">$1.200</p>
                        </li>
                    </ul>
                </div>
            </div>
            <MenuBtn/>
        </div>
      </div>
    </div>
  );
}

export default Home;
