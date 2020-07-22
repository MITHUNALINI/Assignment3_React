import React, { Component } from "react";

import { Card, CardContent, Typography, Grid, FormControl, TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';



const style = {
  root: {
    minWidth: 300,
    backgroundColor:'#212121',
    marginTop: 50,
    color: 'blue'
  },
  button: {
    fontSize: '20px'
  },
  
  
    


  }
  

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      message: ""
    };
  }

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  handleLogin = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
          console.log("username = " + this.state.username)
          console.log("password = " + this.state.password)
          
          localStorage.setItem('id', '1');
          localStorage.setItem('username', this.state.username);
          localStorage.setItem('email', 'Mithuna@gmail.com');
          localStorage.setItem('roles', 'ROLE_USER');
          this.props.history.push("/profile");
          window.location.reload();
    } else {
      this.setState({
        message: "Empty username or password"
      })
    }
  }

  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={4}/>
        <Grid item xs={1}/>
        <Grid item xs={3}>
      
          <Card style={style.root}>
              <CardContent>
                <Paper variant="outlined" >
                <form onSubmit={this.handleLogin} >
                  <Grid container spacing={1}>
                      <Grid item xs={11}>
                        <strong>
                       <h1 style={{color:"blue"}}>Login to Books Shop</h1>
                       </strong>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                        <TextField id="filled-helperText" label="Username" defaultValue="text" helperText="please enter username" variant="outlined" value={this.state.username}
                            onChange={this.onChangeUsername}/>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} >
                        <FormControl fullWidth>
                        <TextField id="filled-helperText" label="Passworld" defaultValue="text" helperText="please enter password" variant="outlined" value={this.state.password}
                            onChange={this.onChangePassword}/>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} >
                        <FormControl>
                          <button style={style.button}>Login</button>
                        </FormControl>
                      </Grid>
                  </Grid>
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