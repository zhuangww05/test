// tool
import styled from "styled-components"
// UI
import { IconButton } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MiniCard from "./MiniCard"
// type
import { IProduct } from "@/types"

const CarouselMiniList: React.FC<{ list: Array<IProduct> }> = ({ list }) => {
    return (
        <div className="relative px-5">
            <div className="rounded-full w-9 h-9 carousel-button-inactive absolute left-0 z-10 top-1/2 -translate-y-1/2 flex justify-center items-center">
                <ArrowBackIcon className="w-5 h-5"/>
            </div>
            <div className="relative overflow-hidden" style={{ height: "260px" }}>
                <div className="absolute">
                    {
                        list.map((item, index) => 
                            <div className="absolute" key={ index } style={{ left: 232 * index + "px" }}>
                                <MiniCard content={ item }/>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="rounded-full w-9 h-9 carousel-button-active absolute right-0 z-10 top-1/2 -translate-y-1/2 flex justify-center items-center">
                <ArrowForwardIcon className="w-5 h-5"/>
            </div>
        </div>
    )
}

export default CarouselMiniList