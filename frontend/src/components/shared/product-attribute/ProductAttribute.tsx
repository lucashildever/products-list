import { OptionBtnType } from '../../../types/optionBtnType';
import OptionButton from './option-button/OptionButton';

import AttrContainer from './product-attribute.style';

interface ProductAttributeProps {
    attribute: {
        id: string;
        name: string;
        type: string;
        items: {
            displayValue: string;
            value: string;
            id: string;
        }[];
    };
    isCartItemAttr?: boolean;
    handleCartSelected?: (attributeId: string, itemId: string) => boolean;
    handleDetailsSelected?: (attrId: string, optionId: string) => boolean;
    handleDetailsOptionClick?: (attrId: string, optionId: string) => void;
}

const ProductAttribute = ({
    attribute,
    isCartItemAttr,
    handleCartSelected,
    handleDetailsSelected,
    handleDetailsOptionClick,
}: ProductAttributeProps) => {
    return (
        <AttrContainer>
            <p>{attribute.name}</p>
            <div className="option-selector">
                {attribute.items.map((item: any) =>
                    attribute.type === OptionBtnType.TEXT ? (
                        <OptionButton
                            isClickable={isCartItemAttr ? false : true}
                            key={item.id}
                            type={attribute.type}
                            selected={
                                isCartItemAttr
                                    ? handleCartSelected &&
                                      handleCartSelected(attribute.id, item.id)
                                    : handleDetailsSelected &&
                                      handleDetailsSelected(
                                          attribute.id,
                                          item.id
                                      )
                            }
                            onClick={
                                !isCartItemAttr && handleDetailsOptionClick
                                    ? () =>
                                          handleDetailsOptionClick(
                                              attribute.id,
                                              item.id
                                          )
                                    : undefined
                            }
                        >
                            {item.displayValue}
                        </OptionButton>
                    ) : (
                        <OptionButton
                            isClickable={isCartItemAttr ? false : true}
                            key={item.id}
                            type={attribute.type as OptionBtnType}
                            value={item.value}
                            selected={
                                !isCartItemAttr && handleDetailsSelected
                                    ? handleDetailsSelected(
                                          attribute.id,
                                          item.id
                                      )
                                    : handleCartSelected &&
                                      handleCartSelected(attribute.id, item.id)
                            }
                            onClick={
                                !isCartItemAttr && handleDetailsOptionClick
                                    ? () =>
                                          handleDetailsOptionClick(
                                              attribute.id,
                                              item.id
                                          )
                                    : undefined
                            }
                        />
                    )
                )}
            </div>
        </AttrContainer>
    );
};

export default ProductAttribute;
