import React, {Component} from 'react'
import PoiCardDeck from './PoiCardDeck'
import PlacesSearch from './PlacesSearch'
import LocationDetails from '../components/LocationDetails'

class Location extends Component {
    state={
        viewing: false,
        btnTitle: 'Search for Places to Visit'
    }

    toggleButton = () => {
        const newTitle = () => {
            let original = 'Search for Places to Visit'
            let alternative = 'View Saved Points of Interest'
            switch(this.state.btnTitle){
                case original:
                    return alternative
                case alternative:
                    return original
                default:
                    return original
            }
        }
        this.setState(prevState =>({
            viewing: !prevState.viewing, 
            btnTitle: newTitle()
        }))
    }

    render(){
        console.log('thisLocation render props:', this.props)
        return(
            <div>
                <LocationDetails thisLocation={this.props.location.attributes}/>
                <div>
                    <button onClick={this.toggleButton}>{this.state.btnTitle}</button>
                    {!this.state.viewing && <PoiCardDeck locationId={this.props.location.id}/>}
                    {this.state.viewing && <PlacesSearch locationName={this.props.location.attributes.name} locationId={this.props.location.id}/>}
                        
                </div>
                
            </div>
        )
    
    }
}

export default Location