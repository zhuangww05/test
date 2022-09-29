import { useState } from "react";
// UI
import { Grid, Divider, List, ListItemButton, ListItemText, ListItemIcon, Collapse, Box } from "@mui/material"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// type
import { ICategoryProductListOverview } from "@/types"
import Image from "next/image"
import { ModuleHeadTitle, ProductList } from "@/components";

const CategoryProductListOverview: React.FC = () => {
    const [ selectedCategoryProductList, setSelectedCategoryProductList ] = useState(Reflect.ownKeys(categoryProductListOverview.classifications)?.[0].toString())
    const [ openedCollapse, setOpenedCollapse ] = useState(false)
    // 标题样式
    const classificationClassname = (classification: string) => {
        return `flex-grow cursor-pointer ${ selectedCategoryProductList !== classification && 'inactive-color' }`
    }

    return (
        <Grid container className="py-10" spacing={ 4 }>
            <Grid xs={ 2.5 } item>
                <div className="card px-5 py-5">
                    <div className="flex text-center font-medium mb-3">
                        {
                            Reflect.ownKeys(categoryProductListOverview.classifications).map((classification, index, array) => 
                                <>
                                    <div className={ classificationClassname(classification.toString()) } onClick={ () => setSelectedCategoryProductList(classification.toString()) }> { classification.toString() } </div>
                                    { array.length - 1 !== index && <Divider orientation="vertical" flexItem/> }
                                </>
                            )
                        }
                    </div>
                    <List component="div">
                        {
                            categoryProductListOverview.classifications[selectedCategoryProductList].map((item, index) => 
                                <ListItemButton key={ index } className="category-product-list-overview__class-item mb-2">
                                    <ListItemIcon>
                                        <Image className="object-contain" width={ 24 } height={ 24 } src={ item.image } alt={ item.title }/>
                                    </ListItemIcon>
                                    <ListItemText primary={ item.title } />
                                </ListItemButton>
                            )
                        }
                    </List>
                    <Collapse in={ openedCollapse }>
                        <div>More { selectedCategoryProductList }</div>
                    </Collapse>
                    <div className="flex justify-center cursor-pointer" onClick={ () => setOpenedCollapse(!openedCollapse) }>
                        { openedCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
                    </div>
                </div>

            </Grid>
            <Grid xs={ 9.5 } item>
                <ModuleHeadTitle title="Mobile Phones" moreText="View all" moreUrl="/"/>
                <ProductList rowCount={ 3 }/>
            </Grid>
        </Grid>
    )
}

const categoryProductListOverview: ICategoryProductListOverview = {
    classifications: {
        "Brands": [{
            title: "Apple",
            image: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fapple.png&w=32&q=75",
            url: "/"
        }, {
            title: "Dell",
            image: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fdell.png&w=32&q=75",
            url: "/"
        }, {
            title: "Xiaomi",
            image: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fxiaomi.png&w=32&q=75",
            url: "/"
        }],
        "Shops": [{
            title: "Herman Miller",
            image: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fshops%2Fherman%20miller.png&w=32&q=75",
            url: "/"
        }, {
            title: "Otobi",
            image: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fshops%2Fotobi.png&w=32&q=75",
            url: "/"
        }, {
            title: "Hatil",
            image: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fshops%2Fhatil.png&w=32&q=75",
            url: "/"
        }],
    }
}

export default CategoryProductListOverview