import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Location from './containers/Location'
import Locations from  './containers/Locations'
import NavBar from './components/NavBar'
import { myLocations } from './actions/actions';
import {connect} from 'react-redux'
import './App.css';

class App extends Component {

 componentDidMount(){
   console.log('App componentDidMount pops', this.props )
   
   this.props.myLocations()
 }

  handleLoading = () => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      const locationRoutes = this.props.locations.map(location => <Route key={location.id} path={`locations/:locationId`} render={routerProps => <Location {...routerProps} location={location}/>}/>)
     return (<div>
        <Router>
          <div>
            <NavBar locations={this.props.locations}/>
              <Switch>
                <Route exact path='/' component={Locations} />
                {locationRoutes}
              </Switch>

          </div>
        </Router>
        
      </div>)
      
    }
  }
  

  // I want to render current locations - start visit & end visit,  create & delete locations & link to location page

  render(){
    console.log('App render', this.props)
    // in labs movies (plural) was passed to the movieId.. but i wasn't sure if this was a good idea so i haven't done that here.

    return (<div> {this.handleLoading()} </div>)
  }


}
const mapStateToProps = state => ({
  locations: state.locations,
  loading: state.loading
})

// const mapStateToProps = state => {
//   console.log('in App mapStateToProps')
//   debugger
//   return {
//     locations: state.locationsReducer.locations,
//     loading: state.locationsReducer.loading
//   }
// }

export default connect(mapStateToProps, {myLocations})(App)
