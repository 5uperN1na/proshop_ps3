// import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
//import products from '../products';
// import axios from 'axios';
import { useGetProductsQuery } from '../slices/productsApiSlice';


const HomeScreen = () => {

    const { data: products, isLoading, error } = useGetProductsQuery();

    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     console.log('in the use effect')
    //     const fetchProducts = async () => {
    //         const { data } = await axios.get('/api/products');
    //         setProducts(data);
    //     };
    //     fetchProducts();

    // }, []);

    return (
        <>
            {isLoading ? (
                <h2>Loading...</h2>
            ) : error ? (<div>{error?.data?.message || error.error} </div>) : (<>
                <h1>Lastest Products</h1>
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            </>)}




        </>
    );
};

export default HomeScreen
