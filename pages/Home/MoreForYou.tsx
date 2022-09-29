import { NextPage } from "next";
// UI
import { Link } from "@mui/material"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { ModuleHeadTitle, ProductList } from "@/components"

const MoreForYou: React.FC = () => {
    return (
        <div className="py-10">
            <ModuleHeadTitle title="More For You" moreText="View all" moreUrl="/"/>
            <ProductList />
        </div>
    )
}

export default MoreForYou