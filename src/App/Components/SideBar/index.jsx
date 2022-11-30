import React, { useState } from "react"

import { Sidebar as ReactProSideBar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import menuItems from "menu-items"

import style from "./Sidebar.module.scss"


const SideBar = () => {

  const [itemActive, setItemActive] = useState(false)

  const { collapseSidebar } = useProSidebar()

  return (
    <div id="sidebar" className={ style.sidebar }>
      <ReactProSideBar className={ style.sidebar }
        onMouseEnter={() => collapseSidebar()}
        onMouseLeave={() => collapseSidebar()}
        width="18rem"
        defaultCollapsed={true}
      >
        <Menu>
          {
            menuItems.map(item => {

              const active = window.location.pathname === item.url || itemActive === item.id

              return (
                <MenuItem key={item.id}
                  routerLink={<Link to={item.url} />}
                  icon={<FontAwesomeIcon icon={item.icon}/>}
                  className={ active ? style.menuItemActive : style.menuItem}
                  onClick= {() => setItemActive(item.id)}
                >
                  {item.title}
                </MenuItem>
              )
            })
          }
        </Menu>
      </ReactProSideBar>
    </div>
  )
}

export default SideBar
