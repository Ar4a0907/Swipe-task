import React, { useState } from 'react';
import styles from './TextInputStyle.module.scss';

export default function TextInput(props) {

    const[value, setValue] = useState('');

    const handleSubmit = (event) => {
        props.callbackFun(value)
        setValue('')
        event.preventDefault()
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <textarea className={styles.input} rows='3' value={value} onChange={handleChange}/>
            <input className={styles.inputSubmit} type='submit' value='Отправить' />
        </form>
    )
}