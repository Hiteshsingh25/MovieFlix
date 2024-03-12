import {useEffect, useState,useRef} from 'react'
import Box from '@mui/material/Box'
import CheckIcon from '@mui/icons-material/Check'
import SaveIcon from '@mui/icons-material/Save'
import {green} from '@mui/material/colors'
import Button from '@mui/material/Button'
import Fab from '@mui/material/Fab'
import CircularProgress from '@mui/material/CircularProgress'
export default function ProgressBar(){

    const [loading,setLoading]  = useState(false)
    const [success,setSuccess] = useState(false)
    const timer = useRef()

    const buttonsx = {
        ...(success && {
            bgColor: green[500],
            '&.hover': {
                bgColor:green[700]
            }
        })
    }

    useEffect(()=>{
        return()=>{
            clearTimeout(timer.current)
        }
    },[])

    const handleClick =()=>{
        if(!loading){
            setSuccess(false)
            setLoading(true)
            timer.current = window.setTimeout(()=>{
                setSuccess(true)
                setLoading(false)
            },2000)
        }
    }
    return (
        <Box>
            <Box>
                <Fab 
                aria-label='save'
                color='primary'
                sx={buttonsx}
                onClick={handleClick}
                >
                    {success  ? <CheckIcon/> : <SaveIcon/>}
                </Fab>
                {loading && (
                <CircularProgress
                size={68}
                sx={{
                    color:green,
                    position:'absolute',
                    top:-6,
                    left:-6,
                    zIndex:1
                }}
                />
                )}
            </Box>
            <Box sx={{m:1,position:'relative'}}>
                <Button 
                variant='contained'
                disabled={loading}
                sx={buttonsx}
                onClick={handleClick}
                >
                    Accept Terms
                </Button>
                {loading && (
                <CircularProgress
                size={68}
                sx={{
                    color:green[500],
                    position:'absolute',
                    top:'50%',
                    left:'50%',
                    marginTop:'-12px',
                    marginLeft:'-12px'
                }}
                />
                )}
            </Box>

        </Box>
    )
}