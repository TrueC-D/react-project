import React, {Component} from 'react'
import { connect } from 'react-redux'
import {myPois} from '../actions/actions'
import PoiCardDeck from './PoiCardDeck'
import PlacesSearch from './PlacesSearch'
import LocationDetails from '../components/LocationDetails'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LocationLinks from '../components/LocationLinks'

// I want to render poi list, poi search bar, add poi to saved

class Location extends Component {

    componentDidMount(){
        console.log('location componentDidMount')
        this.props.myPois(this.props.location.id)
        
    }

    handleLoading = () => {
        console.log('Location handleLoading props', this.props)
        if(this.props.loading) {
        return <div>Loading...</div>
        } else {
            console.log('Location loading is done')
            return(<Router>
                <div>
                    <LocationLinks/>
                    <Switch>
                        <Route render={() =><PoiCardDeck pois={this.props.pois}/> }/>
                        <Route render={() => <PlacesSearch locationId={this.props.location.id}/>} />
                    </Switch>
                </div>

            </Router>)

        }
    }

    render(){
        return(
            <div>
                {/* <LocationDetails location={this.props.location}/> */}
                {this.handleLoading()}
                
            </div>
        )
    
    }
}


export default connect(null, {myPois})(Location)