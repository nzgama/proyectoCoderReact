import { Link } from "react-router-dom";

const QuienesSomos = () => {
  return (
    <div className="px-4 pt-5 my-5 text-center">
      <h1 className="display-4 fw-bold">Quienes Somos ?</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Somos una página ficticia creada a fines de practicar cómo crear un
          ecommerce con la librería de react y entregar este proyecto a Coder
          House.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <Link to="/">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-sm-3"
            >
              Ir a comprar
            </button>
          </Link>
          <Link to="/contactanos">
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Contactanos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
