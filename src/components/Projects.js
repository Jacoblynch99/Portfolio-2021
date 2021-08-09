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
        <Container style={{ width: '100vw' }}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Projects
