import {useEffect, useState} from 'react'
import Box from '@mui/material/Box'
export default function  LinearProgress(){

    const [progress,setProgress] = useState(0)

   useEffect(() => {
        const timer = setInterval(() => {
          setProgress((oldProgress) => {
            if (oldProgress === 100) {
              return 0;
            }
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 100);
          });
        }, 500);
    
        return () => {
          clearInterval(timer);
        };
      }, []);



//     useEffect(()=>{
//     const timer = setInterval(()=>{
//         setPorgress((old)=>{
//             if(old === 100){
//                 return 0
//             }

//             const diff = Math.random()*10
//             return Math.min(old + diff,100)
//         })
//     },500)
//         return ()=>{
//             clearInterval(timer)
//         }
   
// },[])
    return(
        <Box>
            <LinearProgress variant="determinate" value={progress}/>
        </Box>
    )
}