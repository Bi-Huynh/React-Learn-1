import React from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button,
} from 'reactstrap';

List.propTypes = {
    products: PropTypes.array,
};

List.defaultProps = {
    products: [],
};

function List(props) {
    const { products } = props;
    return (
        <Container>
            <h2>Product</h2>
            <Row>
                {products.map((product, index) => {
                    return (
                        <Col sm="4" key={index}>
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src={product.imageUrl}
                                    alt="Card image cap"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {product.name}
                                    </CardTitle>
                                    <CardText>{product.description}</CardText>
                                    <Button>Add To Cart</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

export default List;
