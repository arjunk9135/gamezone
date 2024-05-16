import React from 'react'
import { Topbar } from '../../layouts/topbar/Topbar'
import { Grid } from '@mui/material'
import Products2 from '../../components/Products2/Products2'

const Products = () => {

const dummyProd=[
    {
        id:'1',
        name:'FIFA 24',
        price:'99',
        platform:'PC/XBOX/PS5',
        image:'https://cdn.wallpapersafari.com/78/84/noYXZb.jpg'
    },
    {
        id:'2',
        name:'FOrza',
        price:'99',
        platform:'PC/XBOX/PS5',
        image:'https://cdn.wallpapersafari.com/78/84/noYXZb.jpg'
    },
    {
        id:'3',
        name:'GTA 5',
        price:'99',
        platform:'PC/XBOX/PS5',
        image:'https://cdn.wallpapersafari.com/78/84/noYXZb.jpg'
    },
    {
        id:'3',
        name:'GTA 5',
        price:'99',
        platform:'PC/XBOX/PS5',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1pXTvV4ix2mfvlkY9gaqEhsg77Cyc9s2eTH6q3CTdWQ&s'
    },
    {
        id:'3',
        name:'GTA 5',
        price:'99',
        platform:'PC/XBOX/PS5',
        image:'https://cdn.wallpapersafari.com/78/84/noYXZb.jpg'
    },
    {
        id:'3',
        name:'GTA 5',
        price:'99',
        platform:'PC/XBOX/PS5',
        image:'https://cdn.wallpapersafari.com/78/84/noYXZb.jpg'
    }
]

  return (
    <div>
        <Topbar/>
        <Grid container spacing={3} justifyContent='flex-start' sx={{marginTop:'5rem',paddingLeft:'6rem'}}>
         {dummyProd?.map((i)=>{
            return(
                <>
                <Grid item xs={4}>
                    <Products2 details={i} />
                </Grid>
                </>
            )
         })}
        </Grid>
    </div>
  )
}

export default Products