import AddSquareIcon from "./icons/add-square"
import { ArrowCircleDownIcon, ArrowCircleUpIcon } from "./icons/arrow-circle"
import { ArrowSquareDownIcon, ArrowSquareUpIcon } from "./icons/arrow-square"
import { ArrowLeftIcon, ArrowRightIcon } from "./icons/arrows"
import BagIcon from "./icons/bag"
import CategoryIcon from "./icons/category"
import ClockIcon from "./icons/clock"
import ExportIcon from "./icons/export"
import EyeIcon from "./icons/eye"
import FilterSearchIcon from "./icons/filter-search"
import FlagIcon from "./icons/flag"
import FlashIcon from "./icons/flash"
import GameIcon from "./icons/game"
import ImportIcon from "./icons/import"
import LayerIcon from "./icons/layer"
import LikeTagIcon from "./icons/like-tag"
import MobileIcon from "./icons/mobile"
import MoneysIcon from "./icons/moneys"
import MonitorIcon from "./icons/monitor"
import ReceiptIcon from "./icons/receipt"
import SettingsIcon from "./icons/settings"
import StarIcon from "./icons/star"
import { Icons } from "./types"

type Props = {
    icon: Icons,
    className?: string
}

const Icon = ({ icon, className }: Props) => {


    switch (icon) {
        case 'category':
            return <CategoryIcon className={className} />
        case 'add-square':
            return <AddSquareIcon className={className} />
        case 'game':
            return <GameIcon className={className} />
        case 'layer':
            return <LayerIcon className={className} />
        case 'flash':
            return <FlashIcon className={className} />
        case 'arrow-left':
            return <ArrowLeftIcon className={className} />
        case 'arrow-right':
            return <ArrowRightIcon className={className} />
        case 'mobile':
            return <MobileIcon className={className} />
        case 'monitor':
            return <MonitorIcon className={className} />
        case 'arrow-circle-down':
            return <ArrowCircleDownIcon className={className} />
        case 'arrow-circle-up':
            return <ArrowCircleUpIcon className={className} />
        case 'filter-search':
            return <FilterSearchIcon className={className} />
        case 'star':
            return <StarIcon className={className} />
        case 'bag':
            return <BagIcon className={className} />
        case 'like-tag':
            return <LikeTagIcon className={className} />
        case 'eye':
            return <EyeIcon className={className} />
        case 'moneys':
            return <MoneysIcon className={className} />
        case 'settings':
            return <SettingsIcon className={className} />
        case 'clock':
            return <ClockIcon className={className} />
        case 'flag':
            return <FlagIcon className={className} />
        case 'receipt':
            return <ReceiptIcon className={className} />
        case 'export':
            return <ExportIcon className={className} />
        case 'import':
            return <ImportIcon className={className} />
        case 'arrow-sqare-down':
            return <ArrowSquareDownIcon className={className} />
        case 'arrow-sqare-up':
            return <ArrowSquareUpIcon className={className} />
    }
}


export default Icon;