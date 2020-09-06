import React from 'react';
import { Typography } from '@material-ui/core';

const NoMatch = () => {
    return (
        <div>
            <Typography variant="h1" align="center" color="error" >404</Typography>
            <Typography variant="h2" align="center" color="error" >Page Not Found</Typography>
        </div>
    );
};

export default NoMatch;