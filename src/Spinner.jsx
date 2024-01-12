import "./spinner.css";

const Spinner = () => {
  return (
    <div className="container">
      <div className="spinner"></div>
      <h2 className="loading-text">Wait, your news is loading...</h2>
    </div>
  );
};

export default Spinner;
