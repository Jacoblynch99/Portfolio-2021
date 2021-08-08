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

const Projects = (props) => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid>1</Grid>
            <Grid>2</Grid>
            <Grid>3</Grid>
            <Grid>4</Grid>
            <Grid>5</Grid>
        </Grid>
    )
}

export default Projects
