import React from 'react'
import { Typography, Box, CardContent, CardMedia } from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import {Link} from 'react-router-dom'
import {demoChannelTitle, demoProfilePicture} from '../utils/constants'



const ChannelCard = ({channelDetail}) => {
  return (
      <Box sx={{boxShadow:'none',borderRadius:'20px',display:'flex', justifyContent:'center',alignItems:'center',backgroundColor:'#1e1e1e',width:{xs:'356px', md:'320px'},height:'326px',margin:'auto'}}>

        <Link to={`/channel/${channelDetail?.id}`} >
        <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', color:'#fff'}}>
             <CardMedia 
             image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
             alt = {channelDetail?.snippet?.title}
             sx={{ borderRadius:'50%', height:'180px',width:'180px',mb:2,border:'1px solid #e3e3e3' }}
             />
             <Typography variant="h6">
                {channelDetail?.snippet?.title}
                {/* Error might be here */}
                {channelDetail.snippet?.channelTitle|| demoChannelTitle}
                <CheckCircle sx={{fontSize:12, color:'gray', ml:'5px'}} /> 
            </Typography>
            {channelDetail?.statisics?.subscriberCount && (
                <Typography>
                    {parseInt(channelDetail?.statisics?.subscriberCount).toLocaleString()} Subscibers
                </Typography>
            )}
        </CardContent>
        </Link >

      </Box>

  )
}

export default ChannelCard