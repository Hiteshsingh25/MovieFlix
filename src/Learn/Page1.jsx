import {useState} from 'react'
import Button from '@mui/material/Button'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import LoadingButton from '@mui/lab/LoadingButton'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Fade from '@mui/material/Fade'
import TableGrid from './TableGrid'
import Alert from '@mui/material/Alert'
import Tooltip from '@mui/material/Tooltip'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import CircularProgress from '@mui/material/CircularProgress'
import AlertTitle from '@mui/material/AlertTitle'
import ProgressBar from './ProgressBar'
// import LinearProgress from './LinearProgress'
// import OutlinedInput from '@mui/material/OutlinedInput'

export default function Page1(){

    const [open,setOpen] =useState(false)

    const handleOpen=()=>{
        setOpen(true)
    }

    const handleClose= ()=>{
        setOpen(false)
    }
    const [checked,setChecked]= useState([true,false])

    const handleChange=(e)=>{
        setChecked([e.target.checked,e.target.checked])
    }

    const handleChange1=(e)=>{
        setChecked([e.target.checked,checked[1]])
    }

    const handleChange2=(e)=>{
        setChecked([checked[0],e.target.checked])
    }
    return(
        <>
        Hello
        <TableGrid/>
        <Button variant='elevated' href='#text-button' onClick={()=>alert('Heloo')} color='error'>
            Hello
        </Button>
        <ProgressBar/>
        {/* <LinearProgress/> */}
        <Autocomplete 
        disablePortal
        // id='combo-box-demo'
        options={top100Films}
        sx= {{width:'300px'}}
        renderInput = {(params)=> <TextField {...params} label='Movie' />}
        />
        <IconButton>
            <DeleteIcon color='error'/>
        </IconButton>
        <LoadingButton loading varient='outline'>
            Submit
        </LoadingButton>
        {/* <Checkbox 
        checked={checked} 
        onChange={handleChange} 
        inputProps={{'aria-label': 'controlled'}} */}
        {/* /> */}

        <FormControlLabel
        control={<Checkbox checked={checked[0]} onChange={handleChange1}/>}
        />

        <FormControlLabel
        control={<Checkbox checked={checked[1]} onChange={handleChange2}/>}
        />

        <FormControlLabel
        control={<Checkbox checked={checked[0] && checked[1]} indeterminate={checked[0] !== checked[1]} onChange={handleChange}/>}
        />
        <TextField error variant='standard' label='Menu'/>
        <TextField variant='filled' label='Menu2'/>
        <TextField variant='outlined' label='Menu3'/>
        <TextField label='Menu4' multiline rows={10}/>
        <TextField select variant='outlined' label='selected'>
        </TextField>
        <Tooltip title='Heloo' TransitionComponent={Fade} TransitionProps={{timeout: 600}} followCursor>
            <Button variant='contained' color='secondary'>Submit</Button>
        </Tooltip>
        <Alert severity='success' action={<Button color='inherit'>Undo</Button>}>
            <AlertTitle>LogIn</AlertTitle>
            Hey you just login in our application
        </Alert>
        <Button variant='outlined' onClick={handleOpen}>
            Open
        </Button>
        <CircularProgress variant='determinate' value={50}/>


        <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='aria-dialog-description'>
            <DialogTitle>
                {'Hey! i want some permissions '}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id='aria-dialog-description'>

                Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    Disagree
                </Button>
                <Button onClick={handleClose}>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
      label: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    }
]