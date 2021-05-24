import React, { useState, useEffect } from 'react';
import styles from './TimeViewerStyles.module.scss';

export default function TimeViewer(props) {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect( () => {
        let timer = setInterval( () => setTime(new Date().toLocaleTimeString()), 1000);
        return async function clean() {
            clearInterval(timer);
        };
    },[]);

    return (
        <div className={styles.root}>
            {time}
        </div>
    )
}