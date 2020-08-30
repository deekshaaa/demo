import React,{ Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component{
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src="https://image.freepik.com/free-vector/woman-profile-cartoon_18591-58480.jpg"
                        alt="avatar"
                        className="avatar-img"
                        />


                        <div className="banner-text">
                            <h1>Student</h1>

                            <hr />

                        <p>HTML/CSS | Bootstrap | Javascript | React | Content Writing </p>
                    <div className="social-links" >
                        {/* Linked in*/}
        

                            <a href="https://www.linkedin.com/in/deeksha-garg-49a3a0185/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>
                        

                        {/* Github*/}
        

                            <a href="https://github.com/deekshaaa/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>
                                                    
                        {/* Wordpress */}
                        

                            <a href="http://withmeinc.wordpress.com/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-wordpress"  aria-hidden="true" />
                            </a>
                            

                        {/* Facebook */}
                            <a href="https://www.facebook.com/profile.php?id=100009411012829" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square"  aria-hidden="true" />
                            </a>
                        
                        {/* Instagram */}
                        <a href="https://www.instagram.com/deekshaa.___/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram"  aria-hidden="true" />
                            </a>
                            

                    
                        </div>
                        </div>
                    </Cell>

                </Grid>
            </div>
        );
    }
}

export default Landing;