import { Container, Heading, Text, Button, Flex, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Card from "component/card/Card";
import { ListProduct } from '../utils/ListProduct';

interface IProduct {
  name: string,
  price: number,
  imageUrl: string
}

const HomePage = () => {
  let ListCart:Object[];

  const navigate = useNavigate();
  const handleAddToCart = (data: any) => {
    ListCart.push(data);
  }
  
  return (
    <div className="container">
      <Heading>Products</Heading>
      <Flex flexDirection="row" maxW="lg" flexWrap="wrap">
        {
          ListProduct.map((data: IProduct, index: number) => {
            const { name, price, imageUrl } = data;
            return <Card key={index} name={name} price={price} imageUrl={imageUrl} handleAddToCart={handleAddToCart} />
          })
        }
      </Flex>
      <div>
        <h5>Cart</h5>
        {
          ListCart?.map((data: any, index: number) => {
            return (
              <div key={index} className="list-cart-product">
                <p className="title-product">{data.name}</p>
                <p className="price-product">Rp. {data.price}</p>
                <div className="btn-edit-prodct">
                  <button>-</button>
                  <span>{ListCart.length}</span>
                  <button>+</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default HomePage;
