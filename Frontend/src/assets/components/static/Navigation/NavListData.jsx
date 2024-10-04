import ApplicationSvg from '../../../icon/ApplicationSvg'
import CatalogSvg from '../../../icon/CatalogSvg'
import CustomerSvg from '../../../icon/CustomerSvg'
import DateSvg from '../../../icon/DateSvg'
import Dropdown from '../../../icon/Dropdown'
import ExtensionSvg from '../../../icon/ExtensionSvg'
import LogoutSvg from '../../../icon/LogoutSvg'
import OrderSvg from '../../../icon/OrderSvg'
import ProductSvg from '../../../icon/ProductSvg'
import SaleSvg from '../../../icon/SaleSvg'
import SettingSvg from '../../../icon/SettingSvg'
import StoreSvg from '../../../icon/StoreSvg'
import SupportSvg from '../../../icon/SupportSvg'
import HomeSvg from '../../../icon/HomeSvg'
import Home from '../../../pages/Home'
import Store from '../../../pages/Store'
import Catalog from '../../../pages/Catalog'
import Product from '../../../pages/Product'
import Order from '../../../pages/Order'
import Application from '../../../pages/Application'
import Extension from '../../../pages/Extension'
import Setting from '../../../pages/Setting'
import Support from '../../../pages/Support'
import Logout from '../../../pages/Logout'

const mainList = [
    {
        title: "Home",
        path: "/",
        element: Home,
        svg: HomeSvg
    },
    {
        title: "Stores",
        path: "/stores",
        element: Store,
        svg: StoreSvg
    },
    {
        title: "Catalog",
        path: "/catalog",
        element: Catalog,
        svg: CatalogSvg,
        children: [
            { title: "children-1" },
            { title: "children-2" },
            { title: "children-3" },
        ]
    },
    {
        title: "Products",
        path: "/product",
        element: Product,
        svg: ProductSvg
    },
    {
        title: "Orders",
        path: "/order",
        element: Order,
        svg: OrderSvg,
        children: [
            { title: "children-1" },
            { title: "children-2" },
            { title: "children-3" },
        ]
    },
    {
        title: "Applications",
        path: "/application",
        element: Application,
        svg: ApplicationSvg
    },
    {
        title: "Extensions",
        path: "/extension",
        element: Extension,
        svg: ExtensionSvg,
        children: [
            { title: "children-1" },
            { title: "children-2" },
            { title: "children-3" },
        ]
    },
]

const generalList = [
    {
        title: "Setting",
        path: "/setting",
        element: Setting,
        svg: SettingSvg,
        children: [
            { title: "children-1" },
            { title: "children-2" },
            { title: "children-3" },
        ]
    },
    {
        title: "Support",
        path: "/support",
        element: Support,
        svg: SupportSvg,
        children: [
            { title: "children-1" },
            { title: "children-2" },
            { title: "children-3" },
        ]
    },
    {
        title: "Logout",
        path: "/logout",
        element: Logout,
        svg: LogoutSvg
    },
]

const horizontalList = [
    {
        title: "Language",
        path: "",
        children: [
            { title: "children-1" },
            { title: "children-2" },
            { title: "children-3" },
        ]
    },
    {
        title: "All Stores",
        path: "",
        children: [
            { title: "children-1" },
            { title: "children-2" },
            { title: "children-3" },
        ]
    },
]

export { mainList, generalList, horizontalList }