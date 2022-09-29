import { NextPage } from "next";
// UI
import { Grid } from "@mui/material"
import FeatureItem from "./FeatureItem";
// type 
import { IFeature } from "@/types"

const Features: React.FC = () => {
    return (
        <Grid container spacing={ 4 } className="py-10">
            {
                featurContent.map(
                    (item, index, array) => <Grid key={ index } item xs={ 12 / array.length }>
                        <FeatureItem featureItem={ item }/>
                    </Grid>
                )
            }
        </Grid>
    )
}

const featurContent: Array<IFeature> = [{
    icon: "LocalShippingOutlinedIcon",
    title: "Worldwide Delivery",
    text: "We offer competitive prices on our 100 million plus product any range."
}, {
    icon: "AtmIcon",
    title: "Safe Payment",
    text: "We offer competitive prices on our 100 million plus product any range."
}, {
    icon: "GppGoodIcon",
    title: "Shop With Confidence",
    text: "We offer competitive prices on our 100 million plus product any range."
}, {
    icon: "SettingsPhoneIcon",
    title: "24/7 Support",
    text: "We offer competitive prices on our 100 million plus product any range."
}]

export default Features