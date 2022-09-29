// UI
import { Grid } from "@mui/material"
import { ModuleHeadTitle } from "@/components"
import CategoryCard from "./CategoryCard"
// type
import type { ICategory } from "@/types"

const Categories: React.FC = () => {
    return (
        <div className="py-10">
            <ModuleHeadTitle title="Categories" moreText="View all" moreUrl="/"/>
            <Grid container spacing={4}>
                {
                    categories.map((category, index) => 
                        <Grid key={ index } xs={2} item>
                            <CategoryCard category={ category }/>
                        </Grid>
                    )
                }
            </Grid>
        </div>
    )
}

const categories: Array<ICategory> = [{
    title: "Camera",
    image: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F4.LumixDSLR.png&w=1920&q=75",
    url: "/"
}, {
    title: "Electronics",
    image: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F3.PanasonicCharge.png&w=1920&q=75",
    url: "/"
}]

export default Categories