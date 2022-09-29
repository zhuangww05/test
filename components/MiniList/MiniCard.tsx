// UI
import Image from "next/image"
import { Link } from "@mui/material"
// type 
import { IProduct } from "@/types"

const MiniCard: React.FC<{ content: IProduct }> = ({ content }) => {
    return (
        <div className="card p-4" style={{ width: "200px" }}>
            <Link href={ content.url }>
                <Image className="mini-card__image" width={ 200 }height={ 200 } src={ content.image } alt={ content.title } />
            </Link>
            <div className="font-medium">{ content.title }</div>
            <div>
                <span className="discounted-price font-medium mr-2">RMB { content.discountedPrice }</span>
                <del className="inactive-color">{ content.costPrice }</del>
            </div>
        </div>
    )
}

export default MiniCard