import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, FormControl, Typography,InputLabel, NativeSelect, FormHelperText } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import ReplayIcon from '@material-ui/icons/Replay';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { Style } from '@material-ui/icons';



const style = {
  root: {
    minWidth: 275,
    backgroundColor:'#212121',
    marginTop: 50,
    color: '#e0f7fa'
  },
  button: {
    fontSize: '20px'
  },
}

export default class AddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Title: "",
      Author: "",
      CoverphotoURL: "",
      ISBNNumber: "",
      Price: "",
      SelectLangue: "",
      SelectGenre: "",
      successful: false
    };
  }

  onChangeTitle = (event) => {
    this.setState({
      Title: event.target.value
    });
  }

  onChangeAuthor = (event) => {
    this.setState({
      Author: event.target.value
    });
  }

  onChangeCoverPhotoURL = (event) => {
    this.setState({
      CoverphotoURL: event.target.value
    });
  }

  onChangeISBNNumber = (event) => {
    this.setState({
      ISBNNumber: event.target.value
    });
  }

  onChangePrice = (event) => {
    this.setState({
      Price: event.target.value
    });
  }

  onChangeSelectLangue = (event) => {
    this.setState({
      SelectLangue: event.target.value
    });
  }

  onChangeSelectGenre = (event) => {
    this.setState({
      SelectGenre: event.target.value
    });
  }

  handleAddBook = (event) => {
    event.preventDefault();

    if (this.state.Title && this.state.Author && this.state.CoverphotoURL && this.state.ISBNNumber && this.state.Price && this.state.SelectLangue && this.state.SelectGenre) {
      console.log(this.state.Title + " " + this.state.Author + " " + this.state.CoverphotoURL + "" +this.state.ISBNNumber + ""+ this.state.Price + "" + this.state.SelectLangue + "" + this.state.SelectGenre)
      this.setState({
        successful: true,
        message: "Success -Book Saved Successfully."
      })
    } else {
      this.setState({
        successful: false,
        message: "Not valied"
      })
    }
  }

  render() {
    return (
        <Grid container spacing={1}>
        <Grid item xs={4}/>
        <Grid item xs={5} style={{backgroundColor:"black"}}>
          <Card className={style.root} style={{margin:20}}>
           <CardContent>
           <Paper variant="outlined">
             <form className={style.root} noValidate autoComplete="off" style={{width:'150%'}}onSubmit={this.handleRegister}>
                  {!this.state.successful && (
             <Grid container spacing={1}>
                      <Grid item xs={11}>
                        {
                          localStorage.getItem("exportin")? (
                            <h3 style= {{color:'black'}}> <AddBoxIcon fontSize="small"/> Update BOOK</h3>
                           ) : ( <h5 style={{fontSize:30}}><AddBoxIcon Style={{fontSize:10}}/>Add New Book</h5>)
                        }
                       
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                        <TextField type="text" id="outlined-required" label="Title*" variant="outlined" helperText="Enter Book Title" style={{width:"100%"}} onChange={this.onChangeTitle} />
                        </FormControl>&emsp; &emsp; &emsp; 
                        

                        
                        <FormControl >
                        <TextField type="text" id="outlined-size-small" label="Author*" variant="outlined" helperText="Enter Book Author" onChange={this.onChangeAuthor} />
                        </FormControl>
                        </Grid>
                         
                        <Grid item xs={12}>
                        <FormControl>
                        <TextField type="text" id="outlined-required" label="Cover photo URL*" variant="outlined" helperText="Enter Book cover photo URL" onChange={this.onChangeCoverPhotoURL} />
                        </FormControl>&emsp; &emsp; &emsp; 
                        
                      

                      
                        <FormControl>
                        <TextField type="" id="outlined-required" label="ISBN Number*" variant="outlined" helperText="Enter Book ISBAN Number" onChange={this.onChangeISBNNumber} />
                        </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                        <FormControl >
                        <TextField type= "" id="outlined-required" label="price*" variant="outlined" helperText="Enter Book Price " size="small" onChange={this.onChangePrice}/>
                        </FormControl> &emsp; &emsp; 
                        

                        
                        <FormControl size="small"onChange={this.onChangeSelectLangue}>
                            <InputLabel>Language</InputLabel>
                            <NativeSelect
                              inputProps={{
                                  name:'Language',
                                  id: 'Language',
                                  
                              }}
                            >
                            <option value={"Select Language"}>Select Language</option>
                            <option value={"Tamil"}>Tamil</option>
                            <option value={"English"}>English</option>
                            <option value={"Science"}>Science</option>
                            </NativeSelect>
                            <FormHelperText>Please select your Language</FormHelperText>
                        </FormControl>&emsp; &emsp; 
                        
                        
                      
                        <FormControl size="small" onChange={this.onChangeSelectGenre}>
                            <InputLabel>Genre</InputLabel>
                            <NativeSelect
                              inputProps={{
                                  name:'Genre',
                                  id: 'Genre',
                              }}
                            >
                            <option value={"Select Genre"}>Select Genre</option>
                            <option value={"Fantasy"}>Fantasy</option>
                            <option value={"Romance"}>Romance</option>
                            <option value={"Mystery"}>Mystery</option>
                            
                            </NativeSelect>
                            <FormHelperText>Please select your Genre</FormHelperText>

                        </FormControl>&emsp; &emsp; 
                        </Grid>
                        <Paper variant="outlined">
                        <Button href="/Save" variant="contained"onClick={this.handleAddBook} style={{backgroundColor:'#1b5e20'}}> <SaveIcon style={{fontSize:20}}/>Save</Button>&emsp; &emsp; 
                        <Button  href="/Reset"variant="contained" style={{backgroundColor:'#0d47a1'}}> <ReplayIcon style={{fontSize:20}}/>RESET</Button>&emsp; &emsp; 
                        <Button href="/Booklist" variant="contained" style={{backgroundColor:'#0d47a1'}}><FormatListBulletedIcon style={{fontSize:20}}/>BOOK LIST</Button>
                        </Paper>
                 </Grid>   
                 )}
                 {this.state.message && (
               <div>
                 <Typography color='#d50000' variant="overline" display="block" gutterBottom> 
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




                        


                        
     
        
        
        
     