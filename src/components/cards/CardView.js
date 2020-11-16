import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth:345,
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
        />
        <CardContent>
          <Typography style={{maxHeight:"28px"}} variant="caption" color="#ffffff" component="p">
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
