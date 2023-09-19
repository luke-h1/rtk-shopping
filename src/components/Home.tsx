import { useMounted } from "@frontend/hooks/useMounted";
import { addToCart } from "@frontend/slices/cartSlice";
import { useGetProductsQuery } from "@frontend/slices/productApi";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const router = useRouter();

  const { data, error, isLoading } = useGetProductsQuery({});

  const handleAddToCCart = (product) => {
    dispatch(addToCart(product));
    router.push("/cart");
  };


  const { isMounted } = useMounted();
  

  if (!isMounted) return null;

  return (
    <div className="home-container">
      {status === "success" ? (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data &&
              data?.map((product) => (
                <div key={product.id} className="product">
                  <h3>{product.name}</h3>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                  />
                  <div className="details">
                    <span>{product.desc}</span>
                    <span className="price">${product.price}</span>
                  </div>
                  <button onClick={() => handleAddToCCart(product)}>
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
};

export default Home;
