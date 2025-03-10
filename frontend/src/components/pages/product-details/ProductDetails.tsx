import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useCartContext } from '../../../hooks/useCartContext';
import { generateProductKey } from '../../../utils/generateProductKey';
import { useProducts, FetchType } from '../../../hooks/useProducts';

import Loading from '../../shared/loading/Loading';
import SubmitButton from '../../shared/submit-button/SubmitButton';
import ProductAttribute from '../../shared/product-attribute/ProductAttribute';

import ProductDetailsContainer from './product-details.styles';
import leftArrow from '/arrow-left.svg';
import rightArrow from '/arrow-right.svg';

const ProductDetails = () => {
    const { cartDispatch } = useCartContext();

    const { productId } = useParams();
    const { product, fetchProducts, isLoading } = useProducts();
    const [imageIndex, setImageIndex] = useState<number>(0);
    const [selectedAttributes, setSelectedAttributes] = useState<
        {
            attrId: string;
            optionId: string;
        }[]
    >([
        {
            attrId: '',
            optionId: '',
        },
    ]);

    useEffect(() => {
        fetchProducts(FetchType.ID, productId);
    }, []);

    useEffect(() => {
        setSelectedAttributes(
            product?.attributes.map((attr) => ({
                attrId: attr.id,
                optionId: attr.items[0].id,
            })) || []
        );
    }, [product]);

    // verifies if the attribute is selected is order to apply the 'selected style'
    const handleDetailsSelected = (
        attributeId: string,
        optionId: string
    ): boolean => {
        const selectedAttr = selectedAttributes.find(
            (attr) => attr.attrId === attributeId
        );

        if (!selectedAttr) return false;

        return selectedAttr.optionId === optionId;
    };

    // handle product -details page- option click
    const handleDetailsOptionClick = (
        attributeId: string,
        optionId: string
    ) => {
        setSelectedAttributes((prevAttributes) =>
            prevAttributes.map((attr) =>
                attr.attrId === attributeId ? { ...attr, optionId } : attr
            )
        );
    };

    const handleImageChange = (direction: 'left' | 'right') => {
        switch (direction) {
            case 'left':
                if (imageIndex === 0) {
                    setImageIndex(product!.gallery!.length - 1);
                } else {
                    setImageIndex(imageIndex - 1);
                }
                break;
            case 'right':
                if (imageIndex === product!.gallery!.length - 1) {
                    setImageIndex(0);
                } else {
                    setImageIndex(imageIndex + 1);
                }
                break;
        }
    };

    const handleAddToCart = () => {
        cartDispatch({
            type: 'ADD_PRODUCT',
            payload: {
                product: {
                    id: product!.id,
                    cartItemKey: generateProductKey(
                        product!.id,
                        selectedAttributes
                    ),
                    name: product!.name,
                    amount: 1,
                    image: product!.gallery[0],
                    price: product!.prices[0].amount,
                    attributes: product!.attributes,
                    selectedAttributes: selectedAttributes,
                },
            },
        });
    };

    return isLoading ? (
        <Loading />
    ) : (
        <ProductDetailsContainer>
            <div className="image-list">
                {product?.gallery.map((image, index) => (
                    <div
                        key={image}
                        className="img-list-item"
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                        onClick={() => setImageIndex(index)}
                    ></div>
                ))}
            </div>
            <div
                className="prod-main-image"
                style={{
                    backgroundImage: `url(${product?.gallery[imageIndex]})`,
                }}
            >
                <div
                    className="carousel-control-left"
                    onClick={() => handleImageChange('left')}
                >
                    <img src={leftArrow} alt="left-arrow" />
                </div>
                <div
                    className="carousel-control-right"
                    onClick={() => handleImageChange('right')}
                >
                    <img src={rightArrow} alt="left-arrow" />
                </div>
            </div>
            <div className="product-form">
                <h1>{product?.name}</h1>
                <div className="attributes-selector">
                    {product?.attributes.map((attr) => (
                        <ProductAttribute
                            key={attr.id}
                            attribute={attr}
                            handleDetailsSelected={handleDetailsSelected}
                            handleDetailsOptionClick={handleDetailsOptionClick}
                        />
                    ))}
                </div>
                <div className="price">
                    <h2>Price</h2>
                    <span>{`${product?.prices[0].currency.symbol} ${product?.prices[0].amount}`}</span>
                </div>
                <SubmitButton onClick={handleAddToCart}>
                    ADD TO CART
                </SubmitButton>
                <div
                    className="product-desc"
                    dangerouslySetInnerHTML={{
                        __html: product?.description as string,
                    }}
                ></div>
            </div>
        </ProductDetailsContainer>
    );
};

export default ProductDetails;
