import React, {Component} from 'react';

class Navbar extends Component{
    render(){
        return(
<nav>
<a href="/" className="">Movies</a>
<a href="/TvContainers" className="">Tvs</a>
<a href="/SearchMoviesContainers" className="">Search</a>

</nav>
        );
    }
}
export default Navbar