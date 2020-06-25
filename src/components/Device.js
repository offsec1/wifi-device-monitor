import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import WifiIcon from '@material-ui/icons/Wifi';

const styles = (theme) => ({
    paper: {
        maxWidth: 936,
        margin: 'auto',
        overflow: 'hidden',
    },
    contentWrapper: {
        margin: '40px 16px',
    },
});

function Device(props) {
    const {classes} = props;
    const {mac} = props;
    const {type} = props;
    const {name} = props;
    const {signal_strength} = props;
    const {channel} = props;
    const {encryption} = props;
    const {probe_request} = props;

    return (
        <Paper className={classes.paper}>
            <div className={classes.contentWrapper}>
                <Typography>
                    <h3> {mac} </h3>
                    <p> type: {type === "client" ? <span>Client Device <PhoneAndroidIcon/></span> :
                        <span>Access Point <WifiIcon/></span>} </p>
                    <p> name: {name} </p>
                    <p> signal-strength: {signal_strength} </p>
                    <p> last used wifi channel: {channel} </p>
                    <p> encryption used: {encryption}</p>
                    <p> probe-request: {probe_request} </p>
                </Typography>
            </div>
        </Paper>
    );
}

Device.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Device);