import { BACKEND_URL } from "./../helper";
const ProductCarousal = (props) => {
  return (
    <>
      <div className="card">
        <img
          className="product--image"
          src={`${BACKEND_URL + props.url}`}
          alt="imageproduct"
        />
        <h2>{props.name}</h2>
      </div>
    </>
  );
};

export default ProductCarousal;
