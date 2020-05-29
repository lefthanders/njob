import React, { useState, useEffect } from "react";
import "../styles/category.scss";

const Categories = (props) => {
  const { onClick, currentCategory, pageReset } = props;

  return (
    <div className="categories">
      <Category
        category="전체"
        onClick={(text) => {
          onClick(text);
          pageReset();
        }}
        currentCategory={currentCategory}
      />
      <Category
        category="스마트스토어"
        onClick={(text) => {
          onClick(text);
          pageReset();
        }}
        currentCategory={currentCategory}
      />
      <Category
        category="아마존셀러"
        onClick={(text) => {
          onClick(text);
          pageReset();
        }}
        currentCategory={currentCategory}
      />
      <Category
        category="pdf셀러"
        onClick={(text) => {
          onClick(text);
          pageReset();
        }}
        currentCategory={currentCategory}
      />
      <Category
        category="부동산경매"
        onClick={(text) => {
          onClick(text);
          pageReset();
        }}
        currentCategory={currentCategory}
      />
      <Category
        category="재테크"
        onClick={(text) => {
          onClick(text);
          pageReset();
        }}
        currentCategory={currentCategory}
      />
      <Category
        category="주식"
        onClick={(text) => {
          onClick(text);
          pageReset();
        }}
        currentCategory={currentCategory}
      />
      <Category
        category="유튜버"
        onClick={(text) => {
          onClick(text);
          pageReset();
        }}
        currentCategory={currentCategory}
      />
      <Category
        category="블로거"
        onClick={(text) => {
          onClick(text);
          pageReset();
        }}
        currentCategory={currentCategory}
      />
      <Category
        category="기타"
        onClick={(text) => {
          onClick(text);
          pageReset();
        }}
        currentCategory={currentCategory}
      />
    </div>
  );
};

const Category = (props) => {
  const [categoryClick, setCategoryClick] = useState(false);
  const { category, onClick, currentCategory } = props;
  useEffect(() => {
    if (currentCategory !== category) {
      setCategoryClick(false);
    } else {
      setCategoryClick(true);
    }
  }, [currentCategory]);
  return categoryClick ? (
    <div
      className="category-click"
      onClick={() => {
        setCategoryClick(!categoryClick);
      }}
    >
      <span>{category}</span>
    </div>
  ) : (
    <div
      className="category"
      onClick={() => {
        setCategoryClick(!categoryClick);
        onClick(category);
      }}
    >
      <span>{category}</span>
    </div>
  );
};

export default Categories;
