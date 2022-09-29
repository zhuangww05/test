// UI
import { Grid } from "@mui/material"
import MiniCard from "./MiniCard"
// type
import { IProduct } from "@/types"

const GridMiniList: React.FC<{ rowCount?: number; list: Array<IProduct> }> = ({ rowCount = 4, list }) => {
    return (
        <Grid container spacing={ 4 }>
            {
                list.map((item, index) => 
                    <Grid key={ index } xs={ 12 / rowCount } item>
                        <MiniCard content={ item }/>
                    </Grid>
                )
            }
        </Grid>
    )
}

export default GridMiniList