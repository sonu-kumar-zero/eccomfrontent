import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { responsive } from "../data/responsive";
// import data1 from "../data/carousal";
import ProductCarousal from "./ProductCarousal";
import { useQuery } from "@apollo/client";
import { GET_ALL_CAROUSAL } from "../gql/queries";

const Carousal = () => {
  const { loading, error, data } = useQuery(GET_ALL_CAROUSAL);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    console.error(error);
  }

  const product = data
    ? data.carousals.data.map((item, index) => (
        <ProductCarousal
          key={index}
          name={item.attributes.name}
          url={item.attributes.image.data.attributes.url}
        />
      ))
    : null;

  return (
    <>
      {product && (
        <div className="carousal1">
          <Carousel
            showDots={true}
            responsive={responsive}
            autoPlay={true}
            infiniteLoop={true}
            showArrows={true}
            interval={2000}
            showThumbs={false}
          >
            {product}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default Carousal;
