import React from 'react'
import PropTypes from 'prop-types'

const SvgIcon = ({ svgString }) => {
  return <div dangerouslySetInnerHTML={{ __html: svgString }} />
}

SvgIcon.propTypes = {
  svgString: PropTypes.string.isRequired,
}

export default SvgIcon
