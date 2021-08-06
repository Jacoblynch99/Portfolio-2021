import React, { useState } from 'react'
import CustomButton from './CustomButton'
import {
    AppBar,
    Box,
    Grid,
    Select,
    MenuItem,
    Button,
    Typography,
    Card,
    CardContent,
    CardActions,
    Chip,
    Dialog,
    DialogTitle,
    DialogActions,
    Container,
} from '@material-ui/core'

const NavBar = (props) => {
    return (
        <div style={{ background: 'green' }}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <CustomButton linkpath={'/'} content={'Home'} />
                <CustomButton linkpath={'/Contact'} content={'Contact'} />
                <CustomButton linkpath={'/AboutMe'} content={'About Me'} />
                <CustomButton linkpath={'/Projects'} content={'Projects'} />
            </Grid>
        </div>
    )
}

export default NavBar
