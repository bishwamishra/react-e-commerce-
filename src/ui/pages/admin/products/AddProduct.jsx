import React, { useEffect, useState } from "react";
import ViewHeading from "../../../components/ViewHeading";
import { PRODUCT_FEATURED_IN } from "../../../../contants/Product";
import API_ROUTES from "../../../../api/apiRoutes";
import useFetch from "../../../../hook/useFetch";
import { PrivateAxios } from "../../../../api/AxiosInstance";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const navigate = useNavigate();
  const [isPostLoading, setIsPostLoading] = useState(false);
  const baseUrl = API_ROUTES.GET_PRIVATE_CATEGORY_LIST;
  const { data: catgList, fetchDataByUrl } = useFetch();
  const [imageList, setimageList] = useState([]);
  const [selectedCatg, setSelectedCatg] = useState("");
  const [selectedFeaturedIn, setSelectedFeaturedIn] = useState("");
  const [productData, setProductData] = useState({
    name: "",
    mrp: "",
    price: "",
    quantity: "",
    brand: "",
    description: "",
  });

  useEffect(() => {
    fetchDataByUrl(`${API_ROUTES.GET_PRIVATE_CATEGORY_LIST}?level=1`);
  }, [baseUrl, fetchDataByUrl]);

  const handleFileChange = (e) => {
    const tempImageList = Array.from(e.target.files);
    setimageList(tempImageList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("mrp", productData.mrp);
    formData.append("price", productData.price);
    formData.append("quantity", productData.quantity);
    formData.append("description", productData.description);
    formData.append("brand", productData.brand);
    formData.append("category", selectedCatg);
    formData.append("featuredIn", selectedFeaturedIn);

    for (let i = 0; i < imageList.length; i++) {
      formData.append("file", imageList[i]);
    }

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      setIsPostLoading(true);

      const response = await PrivateAxios.post(
        API_ROUTES.POST_PRODUCT,
        formData,
        config
      );

      if (response.data.success) {
        toast.success("Product Added Successfully");
        navigate(-1);
      } else {
        toast.error("Failed to add product. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error. Please try again.");
    } finally {
      setIsPostLoading(false);
    }
  };

  return (
    <div>
      <ViewHeading className="hero__title" headingTitle={"Add Products"} />
      <section className="card p-3">
        <form className="row">
          <div className="col-12">
            <div className="row">
              {imageList.length > 0 &&
                imageList.map((item, index) => (
                  <div className="col-md-3 m-3" key={index}>
                    <img
                      className="img-fluid"
                      // change imge intor url form
                      src={URL.createObjectURL(item)}
                      alt={index}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="">Product Image</label>
            <input
              className="form-control"
              type="file"
              multiple
              accept="image/png,image/jpeg"
              onChange={(e) => handleFileChange(e)}
            />
            <p className="text-muted">Upload upto 5 images</p>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label>Products Name</label>
              <input
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    name: e.target.value,
                  })
                }
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label>Description</label>
              <input
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    description: e.target.value,
                  })
                }
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Brand</label>
              <input
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    brand: e.target.value,
                  })
                }
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Featured In</label>
              <select
                onChange={(e) => setSelectedFeaturedIn(e.target.value)}
                className="form-select"
              >
                {PRODUCT_FEATURED_IN.map((item) => (
                  <option value={item} key={item}>
                    {item.replace("_", " ")}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="form-group">
              <label>MRP</label>
              <input
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    mrp: e.target.value,
                  })
                }
                type="number"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="form-group">
              <label>Price</label>
              <input
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    price: e.target.value,
                  })
                }
                type="number"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="form-group">
              <label>Quantity</label>
              <input
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    quantity: e.target.value,
                  })
                }
                type="number"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-12 col-md-12">
            <div className="form-group">
              <label>Category</label>
              <select
                onChange={(e) => setSelectedCatg(e.target.value)}
                className="form-select"
              >
                {catgList?.map((itemLevelOne) => {
                  const levelOneTitle = itemLevelOne.title;
                  const levelTwo = itemLevelOne.children;
                  return levelTwo.map((levelTwoItem) => {
                    const levelThree = levelTwoItem.children;
                    return levelThree.map((item) => {
                      return (
                        <option value={item._id} key={item._id}>
                          Level-1 :-{levelOneTitle}
                          Level-2 :-
                          {levelTwoItem.title}
                          Level-3 :-{item.title}
                        </option>
                      );
                    });
                  });
                })}
              </select>
            </div>
          </div>

          <div className="my-3">
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary"
              disabled={isPostLoading}
            >
              {isPostLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddProduct;
