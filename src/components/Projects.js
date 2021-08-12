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
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <div>10</div>
                    <div>11</div>
                    <div>12</div>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <div>13</div>
                    <div>14</div>
                    <div>15</div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Projects
