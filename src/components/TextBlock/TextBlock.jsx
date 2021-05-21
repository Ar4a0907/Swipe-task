import React from 'react';
import styles from './TextBlockStyle.module.scss';

export default function TextBlock(props) {
    return(
      <div className={styles.root}>
          <p>{props.children}</p>
      </div>
    )
}