import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Location from './containers/Location'
import Locations from  './containers/Locations'
import AboutPage from './components/About'
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
    if(this.props.loading){
      return <div className={'loading'}><br/>Loading...</div>
    }
  }
  
  render(){
    console.log('App render', this.props)

    return (<div> 
       <Router>
          <div>
            <NavBar locations={this.props.locations}/>
              <Switch>
                <Route path="/locations/:id" render={routerProps => <Location location={this.props.locations.find(loc => loc.id === routerProps.match.params.id )}/>}/>
                <Route exact path='/locations' component={Locations} />
                <Route exact path= '/' component={AboutPage}/>
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
