const Spinner = () => {
  return (
    <button className="btn btn-dark" type="button" disabled>
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
      Loading...
    </button>
  );
};

export default Spinner;
