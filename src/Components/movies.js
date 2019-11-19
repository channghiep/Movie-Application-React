import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'
import MovieCard from './MovieCard'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, DropdownButton } from 'react-bootstrap';


const getStyles = makeStyles(theme => ({
    root: {
      margin: '5em 0'
    }
  }))

  const Movies = (props) => {
      const classes = getStyles()
      return (
    
          <div className='container'>
                <DropdownButton id="dropdown-basic-button" title="Filter">
                    <Dropdown.Item href="/">Now Playing</Dropdown.Item>
                    <Dropdown.Item href="/MoviesPopContainers">Popular</Dropdown.Item>
                    <Dropdown.Item href="/MoviesTopRatedContainers">Top_rated</Dropdown.Item>
                    <Dropdown.Item href="/MoviesUpComingContainers">Up Coming</Dropdown.Item>
                </DropdownButton>
              <Grid container className={classes.root} spacing={5}>
                {props.movies.map(movie => {
                const { id, poster_path, title, overview } = movie
                return (
                    <Grid item xs={3}>
                    <MovieCard
                        key={id}
                        
                        id={id}
                        
                        imageurl={"https://image.tmdb.org/t/p/w400/"+ poster_path}
                        title={title}
                        overview = {overview}
                        // publisher={publisher}
                    />
                    </Grid>
                )
                })}
                </Grid>
          </div>
      )
  }

  export default Movies