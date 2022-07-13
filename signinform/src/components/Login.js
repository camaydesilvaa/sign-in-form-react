import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Paper, TextField } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


const paperStyle={
    padding: "20px",
    height: '70vh',
    width: 280,
    margin: "20px auto"
}
const avatarStyle={backgroundColor:"green"}
const textField={padding: "5px"}
const btnstyle={margin: '8px 0'}
const Login=()=> {
    return (
        <Grid>
            <Paper elevation={10} style = {paperStyle}>
                <Grid align="center">
                <Avatar style={avatarStyle}><LockIcon></LockIcon></Avatar>
                <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter Username' style={textField} fullWidth required></TextField>
                <TextField label='Password' placeholder='Enter Password' style={textField} type='password' fullWidth required></TextField>
                <FormControlLabel
                control={
                    <Checkbox
                    name='Checked'
                    color="primary"
                />}
                label='Remember me'
             />
                
            <Button style={btnstyle} type="submit" color="primary" variant="contained" fullWidth> Sign In</Button>
          
            <Typography 
                style={textField} align='left'>
                   <Link href="#">
                    Forgot Password?
                    </Link>
                </Typography>
                <Typography
                style={textField} align='left'> 
                    <Link href="#">
                    Don't have an account? Sign up!
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;