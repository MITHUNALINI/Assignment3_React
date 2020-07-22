import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import GroupIcon from '@material-ui/icons/Group';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PeopleIcon from '@material-ui/icons/People';


const classes = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
     
    },
   
  }));
  const style = {
    root: {
      minWidth: 275,
      backgroundColor:'#263238',
      marginTop: 20,
      color: 'white'
    },
    title: {
      fontSize: 24,
      textAlign:'center'
    },
}


  class Admin extends Component {
    UserAdd = (e) => {
      localStorage.removeItem("isLogin2");
      this.props.history.push('/adduser');
      window.location.reload();
    }
    UserUpdate = (e) => {
      this.props.history.push('/adduser');
      window.location.reload();
    }
    UserView = (e) => {
      this.props.history.push({pathname :'/userlist'});
      window.location.reload();
    }
    render(){
    return (
      <div className={classes.root}  style={{ padding: 10 }}>
        <Grid container spacing={1} >
          <Grid item xs>
          </Grid>
          <Grid item xs = {5}>
          <Paper>
              <Card style={style.root} variant="outlined">
                <div style = {{margin:30} }>
                  <center><h1 style = {{backgroundColor : "#3e2723"}}><strong>Welcome to Admin Panel</strong></h1></center>
                </div>
                <div style = {{margin:20} }>
                    <Grid container spacing={1}>
                        <Grid item xs = {5}>
                            <Paper className={classes.paper} style = {{backgroundColor : "#795548"}}>
                            <center>
                                <PeopleIcon style={{ fontSize: 200 }}/>
                            </center>
                                <br/>
                                <p style = {{color: "white"}}>Manage Users</p>
                                <button onClick = {this.UserAdd} style={{fontSize:15}}>Add user</button>&emsp; &emsp;
                                <button style={{ float: 'right' }}onClick = {this.UserView}style={{fontSize:15}}>View User</button>
                            </Paper>
                            </Grid>
                        <Grid item xs = {2}/>
                        <Grid item xs ={5}>
                        <Paper className={classes.paper} style = {{backgroundColor : "#795548"}}>
                            <center>
                                <MenuBookIcon style={{ fontSize: 200 }}/>
                            </center>
                                <br/>
                                <p style = {{color: "white"}}>Manage Books</p>
                                <button href='userlist'>Add Book</button>
                                <button style={{ float: 'right' }}>View Books</button>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs>
          </Grid>
        </Grid>
        </div>
    )
  }
}

export default Admin