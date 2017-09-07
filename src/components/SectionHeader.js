import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListView, StyleSheet, View, UIManager, findNodeHandle } from 'react-native'

export default class SectionHeader extends Component {
  componentDidMount () {
    const { updateTag, sectionId } = this.props
    updateTag && updateTag(findNodeHandle(this._view), sectionId)
  }

  render () {
    var SectionComponent = this.props.component
    var content = SectionComponent
      ? <SectionComponent {...this.props} />
      : <Text style={styles.text}>
          {this.props.title}
        </Text>

    return (
      <View ref={c => this._view = c} style={styles.container}>
        {content}
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#ececec'
  },
  text: {
    fontWeight: '700',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 2
  }
})

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
  updateTag: PropTypes.func
}
