import { useContext, useState, useEffect, memo } from "react";
import { Link, Outlet } from "react-router-dom";
import { formatPrice } from "../../utils/formatCash";

import { AppContext } from "../../Context/AppContext";
const ProductComponent = memo(() => {
  const { product } = useContext(AppContext);
  const [category, setCateGory] = useState([]);
  const [company, setCompany] = useState([]);
  const [color, setColor] = useState([]);
  const [active, setActive] = useState(true);
  var [className, setClassName] = useState("card col-md-4");

  function getCategory() {
    const res = product;
    const newCate = [];
    const newCompany = [];
    const newColors = [];
    const colors = [];
    for (let i = 0; i < res.length; i++) {
      newCate.push(res[i].category);
      newCompany.push(res[i].company);
      newColors.push(res[i].colors);
    }

    for (let i = 0; i < newColors.length; i++) {
      colors.push(...newColors[i]);
    }
    let newData = [...new Set(newCate)];
    console.log(newData);

    setCateGory(newData);

    let newDataCompany = newCompany.filter(
      (item, index) => newCompany.indexOf(item) === index
    );
    setCompany(newDataCompany);

    let dataOfColor = colors.filter(
      (item, index) => colors.indexOf(item) === index
    );
    setColor(dataOfColor);
  }
  const handleShowColumn = () => {
    setClassName("card col-md-12");
    if (active === false) setActive(true);
    else setActive(false);
    console.log(className);
  };

  const handleShowGrid = () => {
    if (active === true) setActive(false);
    else setActive(true);
    setClassName("card col-md-4");
  };
  useEffect(() => {
    getCategory();
  }, [product]);

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
    <div className="container content">
      <div className="row">
        <div className="content__left-bar col-md-3 col-lg-3">
          <input
            type="text"
            className="form-control"
            aria-label="Small"
            placeholder="Searching...."
            aria-describedby="inputGroup-sizing-sm"
          />
          <h4>Category</h4>
          <ul>
            {category &&
              category.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          <h4>Company</h4>
          <select name="" id="">
            {company &&
              company.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
          </select>
          <h4>Colors</h4>
          <div className="color-button">
            {color.map((item, index) => (
              <button
                key={index}
                className=""
                style={{
                  backgroundColor: item,
                }}
              ></button>
            ))}
          </div>
        </div>
        <div className="content__right-bar col-md-9 col-lg-9">
          <div className="header">
            <div className="header__button">
              <button
                className={
                  active
                    ? "btn btn-outline-dark active"
                    : "" + "btn btn-outline-dark btn-active"
                }
                onClick={handleShowGrid}
              >
                <i className="fas fa-border-all"></i>{" "}
              </button>
              <button
                className={
                  active
                    ? "btn btn-outline-dark"
                    : "" + "btn btn-outline-dark btn-active active"
                }
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
                <div className={className} key={index}>
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
  );
});

export default ProductComponent;
