import React, {useState} from 'react';
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

const mqtt = require('mqtt');
const options = {
    protocol: 'mqtt',
    clientId: '0x001'
};
const client = mqtt.connect('mqtt://192.168.0.101:9001/', options);

// subscribe to topic
client.subscribe('house/wifi')

function Content(props) {
    const {classes} = props;
    let d;

    client.on('message', function (topic, message) {
        d = message.toString();
        setDevices(JSON.parse(d));
    })

    const [devices, setDevices] = useState([])

    return <Paper className={classes.paper}>
        <div className={classes.contentWrapper}>
            <Typography color="textSecondary" align="center">
                {devices.map(device => (
                    <React.Fragment key={device.BSSID}>
                        <Device mac={device.BSSID} type={device.SSID} name={device.SSID}
                                signal_strength={device.dbm_Signal}
                                channel={device.Channel} encryption={device.Crypto}
                                probe_request={device.Probe_Request}/>
                    </React.Fragment>
                ))}
            </Typography>
        </div>
    </Paper>;
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);