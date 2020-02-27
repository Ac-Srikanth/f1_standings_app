import React from 'react'
import TweetsList from './TweetsList'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TwitterIcon from '@material-ui/icons/Twitter'
import Drawer from '@material-ui/core/Drawer'


const useStyles = makeStyles({
    fullTweetsListStyle: {
        width: "100%"
    },
    buttonStyle: {
        width: 200,
        margin: 30
    },
    paperStyle: {
        width: 500
    }
})

const TwitterArea = () => {

    const classes = useStyles()
    const [state, setState] = React.useState({
        left: false
      });
    
    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [side]: open });
      }

    const fullList = side => (
    <div
        className={classes.fullTweetsListStyle}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
    >
        <TweetsList />
    </div>
      )

    return(
        <>
            <Button
                variant="outlined"
                color="primary"
                size="large"
                className={classes.buttonStyle}
                startIcon={<TwitterIcon />}
                onClick={toggleDrawer('left', true)}
            >
            LastNews
            </Button>
            <Drawer 
                anchor="left" 
                open={state.left} 
                onClose={toggleDrawer('left', false)}
                transitionDuration={500}
                
            >
                {fullList('left')}
                
            </Drawer>
        </>
    )
} 

export default TwitterArea