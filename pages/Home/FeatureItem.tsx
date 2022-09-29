import { NextPage } from "next";
// UI
import { Paper, IconButton, Icon } from "@mui/material"
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import GppGoodIcon from '@mui/icons-material/GppGood';
import AtmIcon from '@mui/icons-material/Atm';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
// type 
import { IFeature } from "@/types"

const FeatureItem: React.FC<{featureItem: IFeature}> = (props) => {
    return (
        <Paper elevation={ 0 }  className="feature__item text-center flex-col justify-around px-10 py-16 rounded-md">
            <IconButton className="feature__item-icon mb-4">
                <FeatureItemIcon icon={ props.featureItem.icon }/>
            </IconButton>
            <div className="font-medium mb-3">{ props.featureItem.title }</div>
            <div className="feature__item-text">{ props.featureItem.text }</div>
        </Paper>
    )
}

const FeatureItemIcon: React.FC<{ icon: string }> = (props) => {
    switch(props.icon) {
        case "LocalShippingOutlinedIcon":
            return <Icon component={ LocalShippingOutlinedIcon } className="w-8 h-8"/>
        case "GppGoodIcon":
            return <Icon component={ GppGoodIcon } className="w-8 h-8"/>
        case "AtmIcon":
            return <Icon component={ AtmIcon } className="w-10 h-10"/>
        case "SettingsPhoneIcon":
            return <Icon component={ SettingsPhoneIcon } className="w-8 h-8"/>
    }
    return <div className="text-xs">Not Fount Icon</div>
}

export default FeatureItem