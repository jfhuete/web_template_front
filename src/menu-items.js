import Home from "Sections/Home"
import Dashboard from "Sections/Dashboard"

import { faHome, faGauge } from "@fortawesome/free-solid-svg-icons"

const menuItems = [
  {
    id: "Home",
    index: true,
    title: "Home",
    url: "/home",
    component: Home,
    icon: faHome,
  },
  {
    id: "Dashboard",
    title: "Dashboard",
    url: "/dashboard",
    component: Dashboard,
    icon: faGauge,
  },
]

export default menuItems
