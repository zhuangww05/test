import { NextPage } from "next"
// UI
import BigDiscount from "./BigDiscounts"
import Categories from "./Categories"
import CategoryProductListOverview from "./CategoryProductListOverView"
import MoreForYou from "./MoreForYou"
import Features from "./Features"

const Home: NextPage = () => {
    return (
        <div className="page-bg-color px-20">
            <BigDiscount />
            <CategoryProductListOverview />
            <Categories />
            <MoreForYou />
            <Features />
        </div>
    )
}

export default Home