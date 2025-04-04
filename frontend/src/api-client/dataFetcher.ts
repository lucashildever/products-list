import { Product } from '../types/productType';
import rawData from './data.json';

const data = rawData.data;

// Simulate fetch delay
const simulateApiDelay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

export const fetchAllProducts = async () => {
    // verify cache before fetching
    await simulateApiDelay(500); // simulate delay
    return data.products;
};

// must return an array with a single product
export const fetchByID = async (id: string) => {
    // verify cache before fetching
    await simulateApiDelay(500);
    return [data.products.find((product: any) => product.id === id)];
};

export const fetchByCategory = async (category: string) => {
    // verify cache before fetching
    await simulateApiDelay(500);
    return data.products.filter(
        (product: Product) =>
            product.category.toLowerCase() === category.toLowerCase()
    );
};
