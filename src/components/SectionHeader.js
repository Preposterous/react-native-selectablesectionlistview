import React, { PureComponent, PropTypes } from 'react'
import { View, Text, findNodeHandle } from 'react-native'

export default class SectionHeader extends PureComponent {
  componentDidMount () {
    const { updateTag, sectionId } = this.props
    updateTag && updateTag(findNodeHandle(this.refs.view, sectionId))
  }

  render () {
    const { component: SectionComponent, title } = this.props

    if (SectionComponent) {
      return (
        <View ref='view'>
          <SectionComponent {...this.props} />
        </View>
      )
    }

    return (
      <View ref='view'>
        <Text>{title}</Text>
      </View>
    )
  }
}

SectionHeader.propTypes = {
  /**
   * The id of the section
   */
  sectionId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * A component to render for each section item
   */
  component: PropTypes.func,

  /**
   * A function used to propagate the root nodes handle back to the parent
   */
  updateTag: PropTypes.func,

  /**
  * Title of Section Header
  */

  title: PropTypes.string
}
