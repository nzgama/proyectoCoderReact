import { useState } from "react";
import { Link } from "react-router-dom";

const Contactanos = () => {
  const [product, setProduct] = useState(true);

  const enviar = () => {
    setProduct();
  };

  return (
    <div className="container mb-5">
      {product ? (
        <>
          <div className="py-5 text-center">
            <h2>Quieres ponerte en contacto con nosotros ?</h2>
            <p className="lead">Claro que no puedes, pero puedes intentalo.</p>
          </div>
          <div className="row g-3">
            <div className="col-sm-6">
              <label for="Nombre" className="form-label">
                Nombre
              </label>
              <input
                type="nombre"
                className="form-control"
                id="nombre"
                placeholder="Tu nombre"
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label for="Apellido" className="form-label">
                Apellido
              </label>
              <input
                type="apellido"
                className="form-control"
                id="apellido"
                placeholder="Tu apellido"
              />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-12">
              <label for="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-12">
              <label for="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="1234 Main St"
                required=""
              />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="col-12">
              <label for="address" className="form-label">
                Mensaje
              </label>
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
          </div>
          <hr className="my-4"></hr>
          <button className="w-25 btn btn-primary btn-lg" onClick={enviar}>
            Enviar
          </button>
        </>
      ) : (
        <>
          <div className="py-5 text-center">
            <h2>Gracias por tu mensaje</h2>
            <p className="lead">Nadie se pondrá en contacto con tigo</p>
          </div>
          <hr className="my-4"></hr>
          <Link to="/">
            <button className="w-100 btn btn-primary btn-lg">
              Ir a comprar
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Contactanos;
