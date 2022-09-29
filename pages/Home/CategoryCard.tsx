// UI
import Image from "next/image"
import { Link } from "@mui/material"
// tpye
import type { ICategory } from "@/types"

const CategoryCard: React.FC<{ category: ICategory }> = ({ category }) => {
    return (
        <Link href={ category.url } underline="none" className="category-card flex items-center py-2 px-4">
            <Image width={52} height={52} src={ category.image } alt={ category.title }/>
            <span className="font-medium pl-2">{ category.title }</span>
        </Link>
    )
}

export default CategoryCard