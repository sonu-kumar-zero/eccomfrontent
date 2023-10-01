import { useCallback, useEffect, useState } from "react";
import { BACKEND_URL } from "../../helper";
const ImageSet = ({ images }) => {
  const [mainicon, setmainicon] = useState(null);

  useEffect(() => {
    setmainicon(`${BACKEND_URL + images[0].attributes.url}`);
  }, [setmainicon, images]);

  const changemainimage = useCallback((e) => {
    setmainicon(e.target.src);
  }, []);

  return (
    <>
      <div className="im1">
        <div className="im2">
          {images.map((item, index) => {
            return (
              <div className="im3" key={index}>
                <img
                  src={`${BACKEND_URL + item.attributes.url}`}
                  alt="icon"
                  onClick={changemainimage}
                  onMouseEnter={changemainimage}
                />
              </div>
            );
          })}
        </div>
        <div className="im4">
          {mainicon && <img src={mainicon} alt="icon" style={{objectFit:"contain"}} />}
        </div>
      </div>
    </>
  );
};

export default ImageSet;
