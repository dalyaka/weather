import React, { Component } from 'react';

import styles from './Page.styl';


export default class Page extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.container}>
        {children}
      </div>
    );
  }
}
