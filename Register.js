import React, { Component } from "react";


import { Card, CardContent, Grid, FormControl, Typography, TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';




const style = {
  root: {
    minWidth: 250,
    backgroundColor:'#212121',
   
    color: '#e0f7fa'
  },
  button: {
    fontSize: '20px'
  },
}

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      message: "",
      successful: false
    };
  }

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  handleRegister = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.email && this.state.password) {
      console.log(this.state.username + " " + this.state.password + " " + this.state.email)
      this.setState({
        successful: true,
        message: " USER REGISTERED SUCCESSFULLY !!!"
      })
    } else {
      this.setState({
        successful: false,
        message: "username/password/email is empty"
      })
    }
  }

  render() {
    return (
      <Grid container style={{margin:40}}>
        <Grid item xs={4}/>
        <Grid item xs={4} style={{backgroundColor:"black"}}>
          <Card style={style.root} >
              <CardContent>
              <Paper variant="outlined" style={{margin:20}}>
                 <form onSubmit={this.handleRegister}>
                  {!this.state.successful && (
                  <Grid container spacing={1}>
                      <Grid item xs={11}>
                        <h1 style={{color:"blue"}}>Register Account at Books Shop</h1>
                      </Grid>

                      <Grid item xs={12}>
                        <FormControl fullWidth>
                        <TextField id="filled-helperText" label="Username" defaultValue="text" helperText="please enter username" variant="outlined"  value={this.state.username}
                         onChange={this.onChangeUsername}/>
                            
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                        <TextField id="filled-helperText" label="Email" defaultValue="text" helperText="please enter email" variant="outlined"  value={this.state.email}
                            onChange={this.onChangeEmail}/>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                        <TextField id="filled-helperText" label="Passworld" defaultValue="text" helperText="please enter passworld" variant="outlined" value={this.state.password}
                            onChange={this.onChangePassword}/>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                          <button style={style.button}>Sign Up</button>
                        </FormControl>
                      </Grid>
                      </Grid>
                  )}
                      {this.state.message && (
                    <div>
                      <Typography color='error' variant="overline" display="block" gutterBottom>
                          <strong>{this.state.message}</strong>
                      </Typography>
                    </div>
                  )}
                </form>
                </Paper>
              </CardContent>
        </Card>
        </Grid>
        <Grid item xs={4}/>
      </Grid>
    );
  }
}