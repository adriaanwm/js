import React from 'react'

export const component = ({constructor, ...obj}) => class extends React.Component {
  constructor (props) {
    super(props)
    constructor && constructor(props)
    if (obj) Object.assign(this, obj)
  }
}

export default component
