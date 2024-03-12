import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
export default function Footer(){
    return(
        <>
        <Box sx={{padding:'30px'}}>
            <Container>
        <Typography sx={{color:'white',fontSize:'30px',textAlign:'center'}}>
                        MovieTlix
                    </Typography>
            <Grid container sx={{marginTop:'30px'}}>
            <Grid xs={12} sm={4} md={3} lg={3}>
                    <TextField variant='filled' label='Enter your mail id' sx={{backgroundColor:'white',borderRadius:'13px',padding:'2px'}}/>
                    <p>
                            <Button  variant='contained' sx={{marginLeft:'35px'}}>
                                Subscribe Now!
                            </Button>
                        </p>
                </Grid>
                <Grid xs={12} sm={3} md={3} lg={3} sx={{alignContent:'center'}}>
                    
                    <Typography variant='h5' component='h2' sx={{color:'white',mt:{xs:'5px',sm:'0px'}}}>
                    Company
                    </Typography>
                    <Typography sx={{color:'white'}}>
                        Contact us
                    </Typography>
                    <Typography sx={{color:'white'}}>
                        Help
                    </Typography>
                    <Typography sx={{color:'white'}}>
                        Blog
                    </Typography>
                    <Typography sx={{color:'white'}}>
                        FAQs
                    </Typography>

                </Grid>
                <Grid xs={12} sm={3} md={3} lg={3} sx={{alignContent:'center'}}>
                <Typography variant='h5' component='h2' sx={{color:'white',mt:{xs:'5px',sm:'0px'}}}>
                        About
                    </Typography>
                    <Typography sx={{color:'white'}}>
                        Contact us
                    </Typography>
                    <Typography sx={{color:'white'}}>
                        Help
                    </Typography>
                    <Typography sx={{color:'white'}}>
                        Blog
                    </Typography>
                    <Typography sx={{color:'white'}}>
                        FAQs
                    </Typography>
                </Grid>
                <Grid xs={12} sm={2} md={3} lg={3} sx={{alignContent:'center'}}>
                    <Typography variant='h5' component='h2' sx={{color:'white',mt:{xs:'5px',sm:'0px'}}}>
                       Online Shows
                    </Typography>
                    
                    <Typography sx={{color:'white'}}>
                        Contact us
                    </Typography>
                    <Typography sx={{color:'white'}}>
                        Help
                    </Typography>
                    <Typography sx={{color:'white'}}>
                        Blog
                    </Typography>
                    <Typography sx={{color:'white'}}>
                        FAQs
                    </Typography>

                </Grid>
            </Grid>
            </Container>
        </Box>
        </>
    )
}