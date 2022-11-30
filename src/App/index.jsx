import React from "react"
import { Route, Routes } from "react-router-dom"

import Grid from "@mui/material/Grid"
import { ProSidebarProvider } from "react-pro-sidebar"

import AppBar from "./Components/AppBar"
import SideBar from "./Components/SideBar"

import menuItems from "menu-items"

import styles from "./App.module.scss"


const App = () => {

  const indexComponent = menuItems.find(item => item.index)

  if (window.location.pathname === "/")
    window.location.href = indexComponent.url

  return (
    <ProSidebarProvider>
      <AppBar />
      <Grid container className={ styles.content }>
        <Grid item>
        </Grid>
        <Grid item className={ styles.content }>
          <SideBar />
          <Routes>
            <Route index element={indexComponent} />
            {
              menuItems.map(item => (
                <Route path={item.url} element={<item.component />} />
              ))
            }
          </Routes>
        </Grid>
      </Grid>
    </ProSidebarProvider>
  )
}

export default App
