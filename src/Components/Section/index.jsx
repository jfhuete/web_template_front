import React from "react"
import PropTypes from "prop-types"

import Box from "@mui/material/Box"

import style from "./Section.module.scss"

export const Section = (props) => {
  return (
    <Box sx={{ width: 1 }} className={ style.container }>
      <Box sx={{ width: "100%" }} className={ style.header }></Box>
      <Box sx={{ width: 1 }} className={ style.content }>
        { props.children }
      </Box>
    </Box>
  )
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default Section
