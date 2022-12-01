import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';


import {Videos, ChannelCard } from './';
import { fetchFromAPI } from './utils/fetchFromAPI';
import axios from 'axios';
import {options } from './utils/fetchFromAPI'


const ChannelDetail = () => {
  const [channelDetail, setChannelDetail]= useState(null)
  const [videos, setVideos] = useState([])

const { id } = useParams();

console.log(channelDetail, videos)

useEffect(() =>{
 axios.get(`https://youtube-v31.p.rapidapi.com/captions/channels?part=snippets&id=${id}`)
 .then((data) => setChannelDetail(data?.items[0]) );

 axios.get(`https://youtube-v31.p.rapidapi.com/captions/search?channelId=${id}&part="snippets& order=date`)
 .then((data) => setVideos(data?.items) );
}, [id] )

  return (
    <Box minHeight="95vh" >
    <Box>
    <div style={{
      background: ''

    }}
    
    />
    </Box>
    </Box>
  )
}

export default ChannelDetail;