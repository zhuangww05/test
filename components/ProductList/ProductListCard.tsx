// UI
import Image from "next/image"
import { Paper, Link, IconButton, Rating, Button } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
// type 
import type { IProduct } from "@/types"

const ProductListCard: React.FC<{ product: IProduct}> = ({ product }) => {
    return (
        <Paper elevation={ 0 }  className="product-list-card text-center flex-col justify-around rounded-md relative">
            <Link href={ product.url }>
                <div>
                    <Image src={ product.image } width={512} height={512} alt={ product.title } />
                </div>
            </Link>
            <span className="absolute product-list-card__tag rounded-full px-3 py-1 text-xs font-medium left-2.5 top-2.5">{ product.tag }</span>
            <div className="absolute top-1 right-1 flex flex-col">
                <IconButton>
                    <VisibilityIcon className="w-5 h-5 product-list-card__icon"/>
                </IconButton>
                <IconButton>
                    {
                        product.isFavorite ? <FavoriteIcon className="w-5 h-5 product-list-card__icon"/> : <FavoriteBorderIcon className="w-5 h-5 product-list-card__icon"/>
                    }
                </IconButton>
            </div>
            <div className="flex justify-between text-left px-3 pb-5 font-medium">
                <div>
                    <div>{ product.title }</div>
                    <Rating name="read-only" size="small" value={product.rate} className="my-1.5"/>
                    <div>
                        <span className="mr-2 discounted-price">RMB { product.discountedPrice }</span>
                        <del className="inactive-color">{ product.costPrice }</del>
                    </div>
                </div>
                <div className="flex flex-col justify-end">
                    <IconButton className="w-10 h-10">
                        <AddIcon className="rounded-full product-list-card__add-to-cart"/>
                    </IconButton>
                </div>
            </div>
        </Paper>
    )
}

export default ProductListCard