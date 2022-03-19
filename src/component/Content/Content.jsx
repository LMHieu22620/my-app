import React, { useEffect, useState } from "react";
import "./content.css";
import datae from "../../asset/fake-data/data";
import productData from "../../asset/fake-data/data";

const Content = () => {
  console.log(datae.length);
  const product = productData.getAllProducts();
  const [page, setPage] = useState([]);
  let perpage = Math.ceil(product.length / 3);
  let currentPage = 1;
  let start = 0;
  let end = perpage;

  const getProducts = (count) => {
    const max = product.length - count;
    const min = 0;
    const start = Math.floor(Math.random() * (max - min) + min);
    console.log(start, count);
    return product.slice(start, start + count);
  };

  const handleNext = () => {
    currentPage++;
    start = (currentPage - 1) * perpage;
    end = currentPage * perpage;
    console.log(start, end);
    setPage(getProducts(6));
    console.log(getProducts(6));
    return getProducts(6);
  };
  return (
    <div className="content">
      <div className="container content-ctn ">
        <div className="content-content">
          {getProducts(6).map((item, index) => (
            <div className="content-card">
              <div className="content-card__image">
                <img src={item.image} alt="" />
              </div>
              <div className="content-card__desctiption">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <button>More Info</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pagination">
        <div className="container pagination-ctn">
          <div className="pagination-next" onClick={handleNext}>
            Next
          </div>
          <div className="number-page">
            <div>1</div>
            <div className="number-page-mid">2</div>
            <div>3</div>
          </div>
          <div className="pagination-prev">Prev</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
