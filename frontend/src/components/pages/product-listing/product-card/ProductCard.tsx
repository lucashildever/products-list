import { generateProductKey } from '../../../../utils/generateProductKey';
import { useCartContext } from '../../../../hooks/useCartContext';
import { Link } from 'react-router-dom';
import CardContainer from './product-card.styles';
import cartIcon from '/white-cart.svg';

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    image: string;
    inStock: boolean;
    attributes: {
        id: string;
        name: string;
        type: string;
        items: {
            displayValue: string;
            value: string;
            id: string;
        }[];
    }[];
}

const ProductCard = ({
    id,
    name,
    price,
    image,
    inStock,
    attributes,
}: ProductCardProps) => {
    const { cartDispatch } = useCartContext();

    const handleAddToCart = (event: React.MouseEvent<HTMLDivElement>) => {
        // default selected attributes
        event.preventDefault();
        const selectedAttributes = attributes.map((attr) => ({
            attrId: attr.id,
            optionId: attr.items[0].id,
        }));

        cartDispatch({
            type: 'ADD_PRODUCT',
            payload: {
                product: {
                    id: id,
                    cartItemKey: generateProductKey(id, selectedAttributes),
                    name,
                    amount: 1,
                    image,
                    price,
                    attributes,
                    selectedAttributes: selectedAttributes,
                },
            },
        });
    };

    return (
        <Link
            to={`/product/${id}`}
            onClick={(e) => !inStock && e.preventDefault()}
        >
            <CardContainer className={`${inStock ? 'in-stock' : ''}`}>
                <div
                    className="card-image"
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                >
                    <div className="quick-shop-btn" onClick={handleAddToCart}>
                        <img src={cartIcon} alt="cart icon" />
                    </div>
                </div>
                <h2>{name}</h2>
                <p>${price.toFixed(2)}</p>
            </CardContainer>
        </Link>
    );
};

export default ProductCard;
