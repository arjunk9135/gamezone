import React from 'react';
import topBanner from '../../assets/topbanner1.jpeg';
import Typewriter from "typewriter-effect";
import { TypeAnimation } from 'react-type-animation';
import { Topbar } from '../../layouts/topbar/Topbar';
import { Grid, Col, Typography } from '@mui/material'; // Assuming you're using MUI for grid
import { Card } from '../../components/productCard/Card';
import './home.css';
import { Footer } from '../../layouts/footer/footer';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();

    const handleRouteToProducts=()=>{
        navigate('products');
    }
    return (
        <div className='homeBody'>
            <div className='topBannerDiv'>
                {/* <div>
          <Topbar />
        </div> */}
                <div><img style={{ width: '100%', opacity: '0.2' }} id='bannerimg' src={topBanner} /></div>
                <div className='typeWriter'>
                    <TypeAnimation
                        sequence={[
                            'ACTION',
                            1000,
                            ' DRAMA ',
                            1000,
                            ' SPIRIT ',
                            1000,
                            'JOIN NOW',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{
                            fontSize: '5em',
                            display: 'inline-block',
                            color: 'white',
                            zIndex: '99',
                            position: 'absolute',
                            top: '50%',
                            left: '40%',
                            wordSpacing: '5rem',
                            fontFamily: 'monospace'
                        }}
                        repeat={Infinity}
                    />
                </div>
            </div>
            <Grid container spacing={1} >  {/* Add container and spacing */}
                <Grid item xs={12} sx={{ textAlign: 'center', position: 'relative' }} >  {/* Use xs for responsive sizing */}
                    <Typography variant='h3' className='btn-shine'>New Releases</Typography>
                </Grid>
                <Grid item xs={12} >
                    <Grid container justifyContent='space-between' sx={{ padding: '10rem', top: '1rem' }}>
                        <Grid item lg={3} xs={12}>
                            <Card imageUrl={'https://w0.peakpx.com/wallpaper/495/282/HD-wallpaper-mace-call-of-duty-portrait-blue-stone-background-call-of-duty-characters-mace-character-mace-call-of-duty.jpg'} />
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <Card />
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <Card />
                        </Grid>


                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent='center'>
                        <Grid item xs={2}>
                            <button className='get-started' onClick={handleRouteToProducts}>
                                GET STARTED
                            </button>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
              <footer>
                 <Footer />
              </footer>
               
           
        </div>
    );
}