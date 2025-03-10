/**
 * Generates a unique product key based on product Id and selected attributes.
 * This ensures that identical products with the same attribute selections are
 * grouped together in the cart, while products with different attribute
 * selections remain separate.
 */

export const generateProductKey = (
    productId: string,
    selectedAttributes: {
        attrId: string;
        optionId: string;
    }[]
): string => {
    if (!selectedAttributes || selectedAttributes.length === 0)
        return productId;

    const sortedAttributes = [...selectedAttributes].sort((a, b) =>
        a.attrId.localeCompare(b.attrId)
    );

    return `${productId}->${sortedAttributes
        .map(
            (attr) =>
                `${attr.attrId.trim().replace(/\s/g, '')}:${attr.optionId.trim().replace(/\s/g, '')}`
        )
        .join('-')}`;
};
