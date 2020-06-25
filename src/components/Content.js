import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import Device from "./Device";

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

const devices = [
    {
        mac: "00:00:00:00",
        type: "AP",
        name: "YouShallNotPass",
        signal_strength: "-35db",
        channel: 3,
        encryption: "WPA2",
        probe_request: "N/A"
    },
    {
        mac: "00:00:00:02",
        type: "client",
        name: "N/A",
        signal_strength: "-35db",
        channel: 3,
        encryption: "N/A",
        probe_request: "[BROADCAST]"
    }
]

function Content(props) {
    const {classes} = props;

    return (
        <Paper className={classes.paper}>
            <div className={classes.contentWrapper}>
                <Typography color="textSecondary" align="center">
                    <ul>
                        {props.data.map(message => <li>{message}</li>)}
                    </ul>
                    {devices.map(({id, mac, type, name, signal_strength, channel, encryption, probe_request}) => (
                        <React.Fragment key={id}>
                            <Device mac={mac} type={type} name={name} signal_strength={signal_strength}
                                    channel={channel} encryption={encryption} probe_request={probe_request}/>
                        </React.Fragment>
                    ))}
                </Typography>
            </div>
        </Paper>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);