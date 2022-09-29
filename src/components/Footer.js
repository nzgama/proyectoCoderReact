const Footer = () => {
  return (
    <div className="main-footer bg-primary">
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <h4>MiTienda</h4>
            <ul className="list-unstyled">
              <li>AR 456-789-123</li>
              <li>US 123-456-789</li>
              <li>EU 789-654-321</li>
            </ul>
          </div>
          <div className="col">
            <h4>La Tienda ficticia mas visitada</h4>
          </div>
          <div className="col">
            <h4>Seguinos</h4>
            <ul className="list-unstyled">
              <i className="bi bi-instagram p-2"></i>
              <i className="bi bi-twitter p-2"></i>
              <i className="bi bi-facebook p-2"></i>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} GAMA INC | All right reserved |
            Terms of service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
