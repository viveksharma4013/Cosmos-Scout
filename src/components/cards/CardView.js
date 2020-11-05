import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor:"#373a3d",
    color:"#ffffff"
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({data}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
      <Typography gutterBottom variant="caption" component="h6">
            {data.title}
          </Typography>
        <CardMedia
          className={classes.media}
          image={data.imageLink}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="p" color="#ffffff" component="p">
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
