// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Component } from 'react';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import { Rating, Divider, Typography, Chip, Button, Grid } from '@mui/material';
// import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
// import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
// import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import StopIcon from '@mui/icons-material/Stop';
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import cardContent from '../../constant/common';

// class ClCard extends Component<any, any> {

//     constructor(props: any) {
//         super(props)
//     }
//     render() {
//         return (
//             <>

//                 <Card sx={{ maxWidth: 365, position: 'relative' }} >
//                     <CardMedia
//                         component="img"
//                         height="200"
//                         image="src\assets\blog_img_2018-11-09_11-14-55_Y1HyDbI6XseN3pLj.jpg"
//                         alt="Paella dish"
//                         style={{ position: 'relative' }}
//                     />
//                     <Chip label={this.props.cardTitleChip} className='cardTitleChip' />
//                     <Chip icon={<LocationOnOutlinedIcon />} label={this.props.location} variant="outlined" className='locationChip' />
//                     <div className='favoriteIcon' style={{
//                         position: 'absolute', right: '7px', top: '115px',
//                     }}>
//                         <FavoriteBorderIcon style={{ color: 'white', display: 'flex' }} />
//                     </div>
//                     <div className='favoriteIcon' style={{ position: 'absolute', right: '7px', top: '160px' }}>
//                         <StopIcon />
//                     </div>
//                     <CardContent>
//                         <Typography variant="h6" component="div" textAlign='start' color='#1f1e1e' fontSize={20}>
//                             {this.props.title}
//                         </Typography>
//                         <Typography variant="body2" color='#757575' fontSize={15} textAlign='start' paddingTop={1}>
//                             {this.props.description}
//                         </Typography>
//                         <CardActions disableSpacing style={{ display: 'flex', padding: 0, justifyContent: 'space-between', paddingTop: '8px' }}>
//                             <Typography component="p" color={'#414141'} fontSize={17}>
//                                 {this.props.company}
//                             </Typography>
//                             <Typography>
//                                 <Rating name="half-rating" defaultValue={2.5} precision={0.5} color='yellow' className='rating' />
//                             </Typography>
//                         </CardActions>
//                     </CardContent>
//                     <Divider className='divider'>
//                         <Chip label={this.props.chipLabel} className='chip' />
//                     </Divider>
//                     <CardContent style={{ textAlign: 'start', display: 'flex', justifyContent: 'space-between', padding: '16px 16px' }}>
//                         <div style={{ display: 'flex', gap: '7px' }}>
//                             <PersonAddAltOutlinedIcon sx={{ color: '#757575', fontSize: '30px' }} />
//                             <Typography color={'#414141'} fontSize={16} fontWeight={500}>
//                                 {this.props.seats}
//                                 <Typography color={'#757575'} fontSize={15}>
//                                     {this.props.seatsTitle}
//                                 </Typography>
//                             </Typography>
//                         </div>
//                         <div style={{ display: 'flex', gap: '7px' }}>
//                             <AccessTimeOutlinedIcon sx={{ color: '#757575', fontSize: '30px' }} />
//                             <Typography color={'#414141'} fontSize={16} fontWeight={500} >
//                                 {this.props.date}
//                                 <Typography color={'#757575'} fontSize={15}>
//                                     {this.props.dateTitle}
//                                 </Typography>
//                             </Typography>
//                         </div>
//                     </CardContent>
//                     <Divider />
//                     <Button variant='outlined' className='CardButton' endIcon={<ArrowForwardOutlinedIcon />} >
//                         Apply
//                     </Button>
//                 </Card>
//             </>

//         );
//     }
// }

// export default ClCard;