import React, { useState } from 'react'

const Projects = (props) => {
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

export default Projects
