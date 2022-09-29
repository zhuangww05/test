// UI
import { ModuleHeadTitle, CarouselMiniList } from "@/components"
// type
import { IProduct } from "@/types"

const BigDiscount: React.FC = () => {
    return (
        <div className="py-10">
            <ModuleHeadTitle title="Big Discounts" moreText="View all" moreUrl="/"/>
            <CarouselMiniList list={ bigDiscounts }/>
        </div>
    )
}

const bigDiscounts: Array<IProduct> = [{
    title: "Tarz T3",
    url: "/",
    image: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F3.PanasonicCharge.png&w=1920&q=75",
    rate: 4,
    discountedPrice: 115.32,
    costPrice: 124.00,
    tag: "7% off",
    isFavorite: false,
}, {
    title: "Atech Cam 1080p",
    url: "/",
    image: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F4.LumixDSLR.png&w=1920&q=75",
    rate: 5,
    discountedPrice: 264.60,
    costPrice: 294.00,
    tag: "10% off",
    isFavorite: false,
}, {
    title: "Tony a9",
    url: "/",
    image: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F5.AtechCam1080p.png&w=1920&q=75",
    rate: 3,
    discountedPrice: 233.70,
    costPrice: 246.00,
    tag: "5% off",
    isFavorite: false,
}, {
    title: "best sw3",
    url: "/",
    image: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F6.Sonya9.png&w=1920&q=75",
    rate: 5,
    discountedPrice: 112.53,
    costPrice: 121.00,
    tag: "5% off",
    isFavorite: false,
}, {
    title: "Tarz T3",
    url: "/",
    image: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F3.PanasonicCharge.png&w=1920&q=75",
    rate: 4,
    discountedPrice: 115.32,
    costPrice: 124.00,
    tag: "7% off",
    isFavorite: false,
}, {
    title: "Atech Cam 1080p",
    url: "/",
    image: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F4.LumixDSLR.png&w=1920&q=75",
    rate: 5,
    discountedPrice: 264.60,
    costPrice: 294.00,
    tag: "10% off",
    isFavorite: false,
}, {
    title: "Tony a9",
    url: "/",
    image: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F5.AtechCam1080p.png&w=1920&q=75",
    rate: 3,
    discountedPrice: 233.70,
    costPrice: 246.00,
    tag: "5% off",
    isFavorite: false,
}, {
    title: "best sw3",
    url: "/",
    image: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F6.Sonya9.png&w=1920&q=75",
    rate: 5,
    discountedPrice: 112.53,
    costPrice: 121.00,
    tag: "5% off",
    isFavorite: false,
}]

export default BigDiscount