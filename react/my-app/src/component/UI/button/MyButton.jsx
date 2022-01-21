import React from 'react'
import classes from './button.module.css'

export default function MyButton({children,...props}) {
    return (
        <button {...props} className={classes.myBtn}>
    {children}
        </button>
    )
}
