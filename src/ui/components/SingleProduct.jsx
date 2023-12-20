import { Link } from "react-router-dom";
import "./Singleproduct.css";

const SingleProduct = (props) => {
  const { product } = props;
  return (
    // <Link
    //   to={`/products/${product.slug}`}
    //   className="card popular text-decoration-none"
    // >
    //   <div className="popular-item">
    //     <img
    //       className="img-fluid mt-3 mb-2"
    //       src={product.thumbnil?.cloudPath}
    //       alt={product?.name}
    //     />
    //   </div>

    //   <div className="item-prices">
    //     <h5 className="item-name">{product?.name}</h5>
    //   </div>
    //   <div className="item-prices">
    //     <h4 className="item-mrp">MRP-Rs {product?.mrp}</h4>
    //   </div>
    //   <div>
    //     <h4 className="item-price">price-Rs {product?.price}</h4>
    //   </div>
    // </Link>
    <Link to={`/products/${product.slug}`}>
      <div class="product-card">
        <div class="badge">Hot</div>
        <div class="product-tumb">
          <img src={product.thumbnil?.cloudPath} alt={product?.name} />
        </div>
        <div class="product-details">
          <span class="product-catagory">Women,bag</span>
          <h4>
            <a href="">{product?.name}</a>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
            possimus nostrum!
          </p>
          <div class="product-bottom-details">
            <div class="product-price">
              <small>mrp ${product?.mrp}</small>${product?.price}
            </div>
            <div class="product-links">
              <a href="">
                <i class="fa fa-heart"></i>
              </a>
              <a href="">
                <i class="fa fa-shopping-cart"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleProduct;
