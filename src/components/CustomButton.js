import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const CustomButton = (props) => {
    const colorEnter = (e) => {
        e.target.style.color = 'red'
    }

    const colorLeave = (e) => {
        e.target.style.color = 'black'
    }

    return (
        <Link
            style={{
                fontSize: 'large',
                textDecoration: 'none',
                margin: '20px',
                color: 'black',
            }}
            to={props.linkpath}
        >
            <div onMouseEnter={colorEnter} onMouseLeave={colorLeave}>
                {props.content}
            </div>
        </Link>
    )
}

export default CustomButton
