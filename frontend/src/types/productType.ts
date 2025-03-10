export interface Product {
    id: string;
    name: string;
    inStock: boolean;
    gallery: string[];
    description: string;
    category: string;
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
    prices: {
        currency: {
            label: string;
            symbol: string;
        };
        amount: number;
    }[];
    brand: string;
}
