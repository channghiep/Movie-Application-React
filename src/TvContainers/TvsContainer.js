import React, { Component } from 'react'
import { getTvs } from '../services/api'
import Tvs from '../Components/Tvs'

class TvsContainer extends Component{
    // state = {
    //     movies: getMovies
    // }
    
    constructor(props){

        super(props)
        this.state = {
            isFetching: false,
            Tvs: [],
           
            
        }
    }
    
    componentWillMount(){
        // sort='airing_today'
        this.fetchData(this.props.sort)
    }
    fetchData = (sort) => {
        getTvs(sort).then(Tvs => {
            this.setState({
                Tvs: Tvs
            })
        })
    }

    render(){
        // const { movies } = this.state.movies
        return(
            <div>
                <Tvs
                    // title = {title}
                    Tvs = {this.state.Tvs}
                    />
            </div>
        )
    }
}
export default TvsContainer