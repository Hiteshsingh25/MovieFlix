
import { useState} from 'react'
import Button from '@mui/material/Button'
// import Autocomplete from '@mui/material/Autocomplete'
// import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import MailIcon from '@mui/icons-material/Mail'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography'
import img9 from '../images/img9.png'
import InfoIcon from '@mui/icons-material/Info';
import ListItemIcon from '@mui/material/ListItemIcon'
// import img10 from '../images/img10.png'
// import Container from '@mui/material/Container'
// import Skeleton from '@mui/material/Skeleton'
import Snackbar from '@mui/material/Snackbar'
import Avatar from '@mui/material/Avatar'
import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import { top100Films } from './Form'
import Person3Icon from '@mui/icons-material/Person3';
import Alert from '@mui/material/Alert'
import './Form.css'
import Drawer1 from './Drawer1'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Grid from '@mui/material/Grid'

export default function Header(){
    const [anchorEl, setAnchorEl] = useState()
    const open2 = Boolean(anchorEl)

    const handleClicks = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleCloses = () => {
        setAnchorEl(null)
    }
    const [login, setlogin] = useState(false)
    const [state, setState] = useState({
        horizontal: 'top',
        vertical: 'center',
        open: false
    })
    const { horizontal, vertical, open } = state;
    const handleLogin = () => {
        setlogin(!login)
    }
    const handleOpen = () => {
        setState({ ...state, open: true })
    }

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setState({ ...state, open: false })
    }
    const action = (
        <>
            <Button color='primary' onClick={handleClose}>
                Undo
            </Button>
            <IconButton
                aria-label=''
                color='inherit'
                onClick={handleClose}
            >
                <CloseIcon />
            </IconButton>
        </>
    )
    return (
        <Grid container className='navbar'>
        <Grid item style={{backgroundColor:'black',width:'100%vh',mx:2}}>
                <Drawer1 sx={{backgroundColor:'black'}} />
            </Grid>
            <Grid item xs={7} sm={7.6} md={8.5} lg={9.8}>
            <Button size='medium' sx={{fontSize:{xs:'15px',sm:'20px'},mx:{xs:1}}} onClick={handleOpen} color='primary'>
                {open ? 'Hollywood' : 'Bollywood'}
            </Button>
            </Grid>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                message={open ? 'Switch to Hollywood' : 'Switch to Bollywood'}
                action={action}
            />
            <div className='badge'>

                <IconButton sx={{display:{xs:'none',sm:'block'}}} color='inherit'>
                    <Badge badgeContent={top100Films.length} color='secondary'>
                        <MailIcon color='primary' />
                    </Badge>
                </IconButton>

            </div>
            
            <Grid item sx={{float:'right'}}>
                <Tooltip title='Login' followCursor>
                    <Button className='button' sx={{fontSize:{xs:'15px',sm:'20px'}}}   onClick={handleLogin}>
                        LogIn
                    </Button>
                </Tooltip>
                </Grid>

                <Grid item>
            <Box sx={{display:{xs:'none',sm:'block'}}}>
                <Button
                    aria-controls={open2 ? 'basic-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={open2 ? 'true' : undefined}
                    onClick={handleClicks}
                >
                    <Avatar src={img9} />
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={open2}
                    onClose={handleClose}
                    MenuListProp={{
                        'aria-labelledby': 'basic-button'
                    }}
                >
                    <MenuItem onClick={handleCloses}>
                        <ListItemIcon>
                        <Person3Icon/>
                        </ListItemIcon>
                        <Typography>
                            Profile
                        </Typography>
                        </MenuItem>
                    <MenuItem onClick={handleCloses}>
                    <ListItemIcon>
                        <ManageAccountsIcon/>
                        </ListItemIcon>
                        <Typography>
                            My Account
                        </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloses}>
                        <ListItemIcon>
                        <InfoIcon/>
                        </ListItemIcon>
                        <Typography>
                            Helps
                        </Typography>
                        </MenuItem>
                    <MenuItem onClick={handleCloses}>
                    <ListItemIcon>
                        <LogoutIcon/>
                        </ListItemIcon>
                        <Typography>
                            Logout
                        </Typography>
                    </MenuItem>
                </Menu>
            </Box>
            </Grid>
            <div>
                <Snackbar open={login} autoHideDuration={6000} close={handleLogin} anchorOrigin={{ horizontal, vertical }} key={horizontal + vertical}>
                    <Alert variant='filled' autoHideDuration={4000} sx={{ width: '30%' }} severity='success' onClose={handleLogin}>
                        You Logged in !
                    </Alert>
                </Snackbar>
            </div>
        </Grid>
    )
}