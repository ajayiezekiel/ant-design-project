import React from 'react';
import { BoxIcon } from '../CustomIcon';
import { IconButton, Badge, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FaUserCircle } from 'react-icons/fa';
import { CustomNotification } from '../CustomIcon';

const useStyles = makeStyles(() => ({
    MuiButtonRoot: {
      color: '#0f61d9',
      fontWeight: 400,
      textTransform: 'none',
    },
  }));

const Header = () => {
    const classes = useStyles()
    return (
        <div className='headerContainer'>
            <Button 
                className={classes.MuiButtonRoot}
                startIcon={<BoxIcon />}> 
                New Features
            </Button>
            <IconButton>
                <Badge color="secondary" variant="dot">
                    <CustomNotification />
                </Badge>
            </IconButton>
            <IconButton>
                <FaUserCircle />
            </IconButton>
        </div>
    )
}

export default Header
