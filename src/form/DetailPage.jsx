import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Box from '@mui/material/Box'
// import img11 from '../images/img10.png'
import {useNavigate} from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './Form.css'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Loading from './Loading'
import Button from '@mui/material/Button'
import axios from 'axios'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


const baseUrl='https://api.themoviedb.org/3'
const API_Key='165c0e3fd9b4e30eb844ab6401a92b4c'
export default function DetailPage(){

    const  [isloading,setIsLoading] = useState(true)
    const navigate  = useNavigate()
    const {movieId} = useParams()
console.log(movieId)
    const [get,setGet] = useState()

   

    const handleBack=()=>{
        navigate('/')
    }
    useEffect(()=>{
        axios.get(`${baseUrl}/movie/${movieId}`,{
            params:{
                api_key:API_Key
            }
        })
        .then(resp=>setGet(resp?.data))
        .catch(err=>console.log(err))
        .finally(()=> setIsLoading(false))
    },[])

    console.log({get})
    return(
        <>
        {!isloading ? 
       ( !movieId ?  
             (
                <h1>
                Search For Movie....
                </h1>
            )
            :    
            (<Box sx={{background:'black',color:'white',height:'100%vh',width:'100%vh'}}>

                    <Button color='inherit' sx={{color:'white'}} onClick={handleBack}>
                            <KeyboardBackspaceIcon/>
                        </Button>
                        {/* <p style={{fontSize:'40px'}}>
                    {get?.title}
                    </p> */}
                    <Container>
                <Grid container>
                    
                <Grid item xs={12} sm={4} lg={4} sx={{m:{xs:1,sm:5,md:10}}}>
               <img className='img' src={`https://image.tmdb.org/t/p/w500/${get?.poster_path}`} alt='' />
                    </Grid>
                    <Grid item  xs={12} sm={4} lg={4} sx={{m:{xs:1,sm:5,md:10}}}>
                        <div className='dtls'>
                        <b style={{color:'white'}}>Langauge:-</b> <b style={{color:'white'}}>{get?.original_language}</b>
                    
                        <h4 style={{display:'flex'}}>
                        overview:-  <p style={{color:'white'}}>{get?.overview}</p>
                        </h4>
                        <h4>
                        popularity:-  <b style={{color:'white'}}>{get?.popularity}</b>
                        </h4>
                        <h4>
                        Realse-Date:- <b style={{color:'white'}}>{get?.release_date}</b>
                        </h4>
                        <h4>
                        Title:-  <b style={{color:'white'}}>{get?.title}</b>
                        </h4>
                        <h4>
                        Voting:  <b style={{color:'white'}}>{get?.vote_average}</b>
                        </h4>
                        <h4>
                        Vote Count:- <b style={{color:'white'}}>{get?.vote_count}</b>
                        </h4>
                        <Button variant='contained' color='error'>
                            <PlayArrowIcon/>
                        </Button>
                        </div>
                    </Grid>
                
                </Grid>
                </Container>
            </Box>)
            )
            :
            (  <Loading/>) 
        }
     </>
    )
}