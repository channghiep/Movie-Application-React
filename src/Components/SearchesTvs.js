import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'
import TvCard from './TvCard'

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, DropdownButton } from 'react-bootstrap';


const getStyles = makeStyles(theme => ({
    root: {
      margin: '5em 0'
    }
  }))

  const MultiSearch = (props) => {
      const classes = getStyles()
      return (
    
          <div className='container'>
                <DropdownButton id="dropdown-basic-button" title="Filter">
                    <Dropdown.Item href="/SearchContainers">Search Movie</Dropdown.Item>
                    <Dropdown.Item href="/SearchMultiContainers">Search Multi</Dropdown.Item>
                    <Dropdown.Item href="/SearchTvsContainers">Search Tv</Dropdown.Item>
                    
                </DropdownButton>
              <Grid container className={classes.root} spacing={5}>
                {props.movies.map(movie => {
                        const { id, poster_path, name, overview } = movie
                        return (
                            <Grid item xs={3}>
                            <TvCard
                                key={id}
                                
                                id={id}
                                
                                imageurl={"https://image.tmdb.org/t/p/w400/"+ poster_path}
                                
                                title = {name}
                               
                                overview = {overview}
                            />
                            </Grid>
                        )

                })}
                </Grid>
          </div>
      )
  }

  export default MultiSearch