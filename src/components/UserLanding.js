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
import React, { useState } from 'react'
import CustomButton from './CustomButton'

const UserLanding = (props) => {
    return (
        <div>
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

export default UserLanding
