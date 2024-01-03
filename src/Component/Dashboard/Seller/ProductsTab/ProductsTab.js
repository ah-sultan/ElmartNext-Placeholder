import Image from "next/image";
import Link from "next/link";
import productData from "./productData.json";
import MagnifyPopup from "@/Component/Shared/MagnifyPopup/MagnifyPopup";
import ProductForm from "./ProductForm";
import { useState } from "react";
import Pagination from "@/Component/widgets/Pagination/Pagination";

const ProductsTab = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formType, setFormType] = useState("add");

  //   Const handle Add Products
  const handleAddProducts = () => {
    setShowPopup(false);
  };

  //   Const handle Edit Products
  const handleEditProducts = () => {
    setShowPopup(false);
  };
  return (
    <>
      <div id="seller-dshbrd-products">
        <h2>My Products</h2>
        <table>
          <thead>
            <tr className="wishlist-heading">
              <th scope="col" className="product">
                Products
              </th>
              <th scope="col" className="price">
                Price
              </th>
              <th scope="col" className="cart-button">
                In Stock
              </th>
              <th scope="col" className="cart-button">
                Sales
              </th>
              <th scope="col" className="close-icon">
                Action
              </th>
            </tr>
          </thead>
          {/* Table data */}
          <tbody>
            {productData &&
              Array.isArray(productData) &&
              [...productData].map((data, index) => {
                const isbg = (index + 1) % 2 === 0;

                return (
                  <tr
                    key={index}
                    className={`wish-item  ${isbg ? "with-bg" : "no-bg"}`}
                  >
                    <td className="product">
                      <div className="item-image">
                        <Image
                          quality={100}
                          width={56}
                          height={56}
                          src={data.image}
                          alt={data.title}
                          className="img-fluid w-auto"
                        />
                      </div>
                      <p>{data.title}</p>
                    </td>
                    <td className="price" data-title="Price">
                      <p>${data.price}</p>
                    </td>
                    <td className="cart-button" data-title="In Stock">
                      <p>{data.stock}</p>
                    </td>
                    <td className="size" data-title="Sales">
                      <p>{data.sales}</p>
                    </td>
                    <td className="close-icon">
                      <Link
                        href="#seller-product-edit"
                        className="seller-product-edit-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowPopup(true);
                          setFormType("edit");
                        }}
                      >
                        <i className="fa-solid fa-pen"></i>
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <nav className="shop-page-navigation ">
          <Pagination />
          <Link
            className="seller-product-add-btn"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setShowPopup(true);
              setFormType("add");
            }}
          >
            Add New Product
          </Link>
        </nav>
      </div>
      <MagnifyPopup show={showPopup} handleHide={setShowPopup}>
        {formType === "add" && (
          <ProductForm handleEvent={handleAddProducts} type={formType} />
        )}
        {formType === "edit" && (
          <ProductForm handleEvent={handleEditProducts} type={formType} />
        )}
      </MagnifyPopup>
    </>
  );
};

export default ProductsTab;
