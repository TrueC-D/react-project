import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import Location from './containers/Location'
import Locations from  './containers/Locations'
import NavBar from './components/NavBar'
import { myLocations } from './actions/actions';
import {connect} from 'react-redux'
import './App.css';

class App extends Component {
 componentDidMount(){
   this.props.myLocations()
 }

  handleLoading = (locationRoutes) => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      <Switch>
        <Route exact path='/' component={Locations} />
        {locationRoutes}

      </Switch>
    }
  }
  

  // I want to render current locations - start visit & end visit,  create & delete locations & link to location page

  render(){
    // in labs movies (plural) was passed to the movieId.. but i wasn't sure if this was a good idea so i haven't done that here.
    const locationRoutes = this.props.locations.map(location => <Route key={location.id} path={`locations/:locationId`} render={routerProps => <Location {...routerProps} location={location}/>}/>)
    return (
      <Router>
        <div>
          <NavBar locations={this.props.locations}/>
          {() => this.handleLoading(locationRoutes)}
          {/* will this work? */}
        </div>
      </Router>
    )
  }


}
const mapStateToProps = state => ({
  locations: state.locations,
  loading: state.loading
})

export default connect(mapStateToProps, {myLocations})(App)
