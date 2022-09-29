// 品类
export interface ICategory {
    title: string;
    image: string;
    url: string;
}

// 商品
export interface IProduct {
    title: string;
    url: string;
    image: string;
    rate: number;
    discountedPrice: number;
    costPrice: number;
    tag: string;
    isFavorite: boolean;
}

// 商店特点
export interface IFeature {
    icon: string;
    title: string;
    text: string;
}

// 品类商品总览展示
export interface ICategoryProductListOverview {
    classifications: {
        [key: string]: Array<{
            title: string;
            image: string;
            url: string;
        }>
    }
}