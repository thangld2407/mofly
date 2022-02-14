import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mockData } from "../../api/data";
import { setListProduct } from "../../redux/reducerProduct";
import { formatPrice } from "../../utils/formatCash";
const ListProduct = () => {
  const product = useSelector((state) => state.product.listProduct);
  console.log(product)
  const [active, setActive] = useState(true);
  const [className, setClassName] = useState("card col-md-4");
  const dispatch = useDispatch();
  const getListProduct = () => {
    dispatch(setListProduct(mockData));
  };

  const handleShowColumn = () => {
    // dispatch(showColumn(''));
  };

  const handleShowGrid = () => {
    if (active === true) setActive(false);
    else setActive(true);
    setClassName("card col-md-4");
  };

  useEffect(() => {
    getListProduct();
  }, [product]);
  console.log(product);
  const options = [
    {
      value: "Name (A - Z)",
      key: "nameaz",
    },
    {
      value: "Price (Lowest)",
      key: "lowest",
    },
    {
      value: "Name (Z - A)",
      key: "nameza",
    },
    {
      value: "Price (Highest)",
      key: "highest",
    },
  ];
  return (
    <>
      <div className="container content">
        <div className="row">
          <div className="content__left-bar col-md-3 col-lg-3"></div>
          <div className="content__right-bar col-md-9 col-lg-9">
            <div className="header">
              <div className="header__button">
                <button
                  className="btn btn-outlet-dark"
                  onClick={handleShowGrid}
                >
                  <i className="fas fa-border-all"></i>{" "}
                </button>
                <button
                  className="btn btn-outlet-dark"
                  onClick={handleShowColumn}
                >
                  <i className="fas fa-bars"></i>
                </button>
                <span> {product.length} Product Found</span>
              </div>
              <hr />
              <div className="header__filter">
                <span>
                  Sort by:
                  <select name="" id="">
                    {options.map((item, index) => (
                      <option key={index} value={item.key}>
                        {item.value}
                      </option>
                    ))}
                  </select>
                </span>
              </div>
            </div>
            <div className="product row ">
              {product &&
                product.map((item, index) => (
                  <div className={className } key={index}>
                    <div className="card-body">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="card-footer">
                      <div className="product__title">
                        <p>{item.name}</p>
                      </div>
                      <div className="product__price">
                        <p>${formatPrice(item.price)}</p>
                      </div>
                    </div>
                    <button className="btn btn-outline-dark">
                      <i className="fas fa-cart-plus"></i>
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProduct;
