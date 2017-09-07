import React, { Component, PropTypes } from 'react'
import { View, findNodeHandle } from 'react-native'

export default class CellWrapper extends Component {
  componentDidMount () {
    const { updateTag, sectionId } = this.props
    updateTag && updateTag(findNodeHandle(this.refs.view, sectionId))
  }

  render () {
    const { component: Cell } = this.props
    return (
      <View ref='view'>
        <Cell {...this.props} />
      </View>
    )
  }
}

CellWrapper.propTypes = {
  /**
   * The id of the section
   */
  sectionId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * A component to render for each cell
   */
  component: PropTypes.func.isRequired,

  /**
   * A function used to propagate the root nodes handle back to the parent
   */
  updateTag: PropTypes.func
}
