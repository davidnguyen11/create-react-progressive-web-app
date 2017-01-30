import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './styles.css';

function CardComponent(props) {
  const { title, urlToImage, description, url, author, publishedDate } = props;
  return (
    <Card className="cardItem">
      <CardHeader
        title={author}
        subtitle={publishedDate}
      />

      <CardMedia overlay={<CardTitle title={title} subtitle={author} />}>
        {urlToImage && <img src={urlToImage} role="presentation" />}
      </CardMedia>

      <CardTitle title={title} subtitle={publishedDate} />

      <CardText>{description}</CardText>

      <CardActions>
        <a href={url} target="blank">
          <FlatButton primary={true} label="Detail" />
        </a>
      </CardActions>
    </Card>
  )
}

export default CardComponent;