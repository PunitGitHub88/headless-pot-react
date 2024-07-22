import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../utils/css/home.css'; 

export default function HomeSectionMui() {
  return (
    <div className="homesection3">
      <div className="container">
      <Card sx={{ maxWidth: "32%", boxShadow:'none', borderRadius: 0}}>
      <CardMedia
        component="img"
        height="200"
        image="https://honeywell.scene7.com/is/image/honeywell/Healthy-Building-Occupant-Survery-Landing-Page_2880x1440_0222_V2_Option01"
        alt="green iguana"
        sx={{"&:hover": {cursor: "pointer"}}}
      />
      <CardContent sx={{paddingLeft: 0}}>
        <Typography gutterBottom variant="h5" component="div" className='title'>
         CASE STUDY
        </Typography>
        <Typography gutterBottom variant="h5" component="div" className='main-heading'>
        Creating a safer workplace during a pandemic
        </Typography>
        <Typography variant="body2" color="text.secondary" className='description-text'>
        Our R&amp;D facility in Bangalore had to continue critical work.
                So we incorporated touchless technology, monitoring and
                compliance solutions. Result? Audit to healthy building in 60
                days.&nbsp;
        </Typography>
      </CardContent>
      <CardActions>
        <a size="small" className='read-more-link'>Share</a>
        <a size="small" className='read-more-link'>Learn More</a>
      </CardActions>
    </Card>
      <Card sx={{ maxWidth: "32%", boxShadow:'none', borderRadius: 0}}>
      <CardMedia
        component="img"
        height="200"
        image="https://honeywell.scene7.com/is/image/honeywell/honeywell-building-2880x1440"
        alt="green iguana"
        sx={{"&:hover": {cursor: "pointer"}}}
      />
      <CardContent sx={{paddingLeft: 0}}>
        <Typography gutterBottom variant="h5" component="div" className='title'>
         CASE STUDY
        </Typography>
        <Typography gutterBottom variant="h5" component="div" className='main-heading'>
        Creating a safer workplace during a pandemic
        </Typography>
        <Typography variant="body2" color="text.secondary" className='description-text'>
        Our R&amp;D facility in Bangalore had to continue critical work.
                So we incorporated touchless technology, monitoring and
                compliance solutions. Result? Audit to healthy building in 60
                days.&nbsp;
        </Typography>
      </CardContent>
      <CardActions>
        <a size="small" className='read-more-link'>Share</a>
        <a size="small" className='read-more-link'>Learn More</a>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: "32%", boxShadow:'none', borderRadius: 0}}>
      <CardMedia
        component="img"
        height="200"
        image="https://honeywell.scene7.com/is/image/honeywell/funding-options-2880x1440"
        alt="green iguana"
        sx={{"&:hover": {cursor: "pointer"}}}
      />
      <CardContent sx={{paddingLeft: 0}}>
        <Typography gutterBottom variant="h5" component="div" className='title'>
         CASE STUDY
        </Typography>
        <Typography gutterBottom variant="h5" component="div" className='main-heading'>
        Creating a safer workplace during a pandemic
        </Typography>
        <Typography variant="body2" color="text.secondary" className='description-text'>
        Our R&amp;D facility in Bangalore had to continue critical work.
                So we incorporated touchless technology, monitoring and
                compliance solutions. Result? Audit to healthy building in 60
                days.&nbsp;
        </Typography>
      </CardContent>
      <CardActions>
        <a size="small" className='read-more-link'>Share</a>
        <a size="small" className='read-more-link'>Learn More</a>
      </CardActions>
    </Card>

    </div>
    </div>
    
  );
}