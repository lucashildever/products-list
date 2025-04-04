import { useState } from 'react';
import { Product } from '../types/productType';
import {
    fetchAllProducts,
    fetchByID,
    fetchByCategory,
} from '../api-client/dataFetcher';

export enum FetchType {
    ALL,
    CATEGORY,
    ID,
}

export const useProducts = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchProducts = async (fetchType: FetchType, param?: string) => {
        setIsLoading(true);
        let data;

        try {
            switch (fetchType) {
                case FetchType.ALL:
                    data = await fetchAllProducts();
                    break;
                case FetchType.CATEGORY:
                    data = await fetchByCategory(param as string);
                    break;
                case FetchType.ID:
                    data = await fetchByID(param as string);
                    break;
                default:
                    throw new Error('Invalid fetch type');
            }
        } catch (err) {
            console.error('Error fetching products:', err);
        } finally {
            if (fetchType === FetchType.ID) {
                setProduct(data?.[0] as Product);
            } else {
                setProducts(
                    (data ?? []).filter(
                        (item): item is Product => item !== undefined
                    )
                );
            }
            setIsLoading(false);
        }
    };

    return {
        product,
        products,
        fetchProducts,
        isLoading,
    };
};
