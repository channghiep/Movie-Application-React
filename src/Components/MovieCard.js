import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/styles'
// import { Link } from 'react-router-dom'

const getStyles = makeStyles(theme => ({
    media: {
      height: 0,
      paddingTop: '56.25%'
    }
  }))

  const MovieCard = props => {
      const classes = getStyles()
      const { id, imageurl, title, overview  } = props

      return (
        <Card key={id}>
            <CardMedia 
            className={classes.media}
                image={imageurl}/>
            <CardHeader
              
              title={title}
              
              />
              <CardContent>
              {overview}
              </CardContent>
              
            
        </Card>
    )
  }
  export default MovieCard
