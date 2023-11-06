import { Component } from 'react';
// import ClCard from '../components/Card';
import Sort from '../components/Sort';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import cardContent from '../constant/common';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Rating, Divider, Typography, Chip, Button, Grid, IconButton, Pagination } from '@mui/material';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StopIcon from '@mui/icons-material/Stop';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

class Dashboard extends Component<any, any> {
  render() {
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '30px' }}>
          <Typography variant='h5'>
            <span style={{ fontSize: '20px' }}>Explore</span> 75 Missions
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className='sort'>
            <Sort />
            <IconButton sx={{ backgroundColor: 'lightgray' }}>
              <GridViewOutlinedIcon />
            </IconButton>
            <IconButton>
              <MenuOutlinedIcon />
            </IconButton>
          </div>
        </div >
        <Grid container style={{ display: 'flex', columnGap: '28px', rowGap: '35px' }}>

          {cardContent.map((item, index) => (
            <>
              <Card sx={{ maxWidth: 365, maxHeight: 598, position: 'relative' }} key={item.id} >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt="Paella dish"
                  style={{ position: 'relative' }}
                />
                <Chip label={item.cardTitleChip} className='cardTitleChip' />
                <Chip icon={<LocationOnOutlinedIcon />} label={item.location} variant="outlined" className='locationChip' />
                <div className='favoriteIcon' style={{
                  position: 'absolute', right: '7px', top: '115px',
                }}>
                  <FavoriteBorderIcon style={{ color: 'white', display: 'flex' }} />
                </div>
                <div className='favoriteIcon' style={{ position: 'absolute', right: '7px', top: '160px' }}>
                  <StopIcon />
                </div>
                <CardContent>
                  <Typography variant="h6" component="div" textAlign='start' color='#1f1e1e' fontSize={20}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color='#757575' fontSize={15} textAlign='start' paddingTop={1}>
                    {item.description}
                  </Typography>
                  <CardActions disableSpacing style={{ display: 'flex', padding: 0, justifyContent: 'space-between', paddingTop: '8px' }}>
                    <Typography component="p" color={'#414141'} fontSize={17}>
                      {item.company}
                    </Typography>
                    <Typography>
                      <Rating name="half-rating" defaultValue={2.5} precision={0.5} color='yellow' className='rating' />
                    </Typography>
                  </CardActions>
                </CardContent>
                <Divider className='divider'>
                  <Chip label={item.chipLabel} className='chip' />
                </Divider>
                <CardContent style={{ textAlign: 'start', display: 'flex', justifyContent: 'space-between', padding: '16px 16px' }}>
                  <div style={{ display: 'flex', gap: '7px' }}>
                    <PersonAddAltOutlinedIcon sx={{ color: '#757575', fontSize: '30px' }} />
                    <Typography color={'#414141'} fontSize={16} fontWeight={500}>
                      {item.seats}
                      <Typography color={'#757575'} fontSize={15}>
                        {item.seatsTitle}
                      </Typography>
                    </Typography>
                  </div>
                  <div style={{ display: 'flex', gap: '7px' }}>
                    <AccessTimeOutlinedIcon sx={{ color: '#757575', fontSize: '30px' }} />
                    <Typography color={'#414141'} fontSize={16} fontWeight={500} >
                      {item.date}
                      <Typography color={'#757575'} fontSize={15}>
                        {item.dateTitle}
                      </Typography>
                    </Typography>
                  </div>
                </CardContent>
                <Divider />
                <Button variant='outlined' className='CardButton' endIcon={<ArrowForwardOutlinedIcon />} >
                  Apply
                </Button>
              </Card>
            </>
          ))}
        </Grid>

        <div className='pagination'>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
      </>

    );
  }
}

export default Dashboard;