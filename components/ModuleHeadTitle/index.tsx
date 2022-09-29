import { NextPage } from "next";
// UI
import { Link } from "@mui/material"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

interface IModuleHeadTitle {
    title: string;
    titleIcon?: string;
    moreText?: string;
    moreUrl?: string;
}

const ModuleHeadTitle: React.FC<IModuleHeadTitle> = (props) => {
    return (
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">{ props.title }</h3>
            <div>
            { 
                props.moreText && <Link sx={{ color: "#7D879C" }} className="text-sm text-black flex items-center" underline="none" href={ props.moreUrl }>{ props.moreText }<ArrowRightIcon className="w-4 h-4" /></Link> 
            }
            </div>
        </div>
    )
}

export default ModuleHeadTitle