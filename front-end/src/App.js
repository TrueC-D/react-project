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

  // handleLoading = () => {
  //   if(this.props.loading) {
  //     return <div>Loading...</div>
  //   } else {
  //    return (<div>
  //       <Router>
  //         <div>
  //           <NavBar locations={this.props.locations}/>
  //             <Switch>
  //               <Route path="/locations/:id" render={routerProps => <Location location={this.props.locations.find(loc => loc.id === routerProps.match.params.id )}/>}/>
  //               <Route exact path='/' component={Locations} />
  //             </Switch>
  //         </div>
  //       </Router>
        
  //     </div>)
      
  //   }
  // }

  handleLoading = () => {
    if(this.props.loading){
      return <div className={'loading'}><br/>Loading...</div>
    }
  }
  

  // I want to render current locations - start visit & end visit,  create & delete locations & link to location page

  render(){
    console.log('App render', this.props)
    // in labs movies (plural) was passed to the movieId.. but i wasn't sure if this was a good idea so i haven't done that here.

    return (<div> 
       <Router>
          <div>
            <NavBar locations={this.props.locations}/>
              <Switch>
                <Route path="/locations/:id" render={routerProps => <Location location={this.props.locations.find(loc => loc.id === routerProps.match.params.id )}/>}/>
                <Route exact path='/' component={Locations} />
              </Switch>
              {this.handleLoading()} 
          </div>
        </Router>
      
      </div>)
  }


}
const mapStateToProps = state => ({
  locations: state.locations,
  loading: state.loading
})

export default connect(mapStateToProps, {myLocations})(App)
