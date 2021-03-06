import React, { Component } from 'react';
import {connect} from 'react-redux'
import {changePoiVote, removePoi, savePoi} from '../actions/actions'

class CardButtons extends Component {
    buttons = () => {
        switch(this.props.type){
            case 'poi':
                return <form>
                    <button name={'DOWNVOTE_POI'} onClick={this.handleClickChange}>DownVote</button>
                    <button name={'UPVOTE_POI'} onClick={this.handleClickChange}>UpVote</button>
                    <button name={'removePoi'} onClick={this.handleClickDelete}>Delete Point Of Interest</button>
                </form>
            case 'place':
                return <form><button name={'savePoi'} onClick={this.handleClickSave}>Save Point Of Interest</button> </form>
            default:
                return null
        }
    }

    votes = btnName => {
        let num = this.props.item.attributes.votes
        console.log('votes props', this.props)
        console.log('num', num)
        switch(btnName){
            case 'UPVOTE_POI':
                return num+1
            case 'DOWNVOTE_POI':
                return num-1
            default:
                return num
        }
    }
    
    handleClickChange = event => {
        event.preventDefault()
       let btnName = event.target.name
       
       let newVote = this.votes(btnName)
       console.log('votes:', newVote)
       this.props.changePoiVote(newVote, this.props.item.attributes.location_id, this.props.item.id)   
       }
    
    handleClickDelete = event => {
        event.preventDefault()
        this.props.removePoi(this.props.item.attributes.location_id, this.props.item.id)
    }

    handleClickSave = event => {
        event.preventDefault()
        const{
            item: {attributes: {icon_url, name, street, city, state, country, zip, location_id},}
         } = this.props

        //  const{ item: {...attributes}}

        //  can the ...rest grab all the attributes so i don't have to type them?
        //  would be nice if i coult make this destructure item available to all handlers but i think i would have to use hooks


         this.props.savePoi(icon_url, name, street, city, state, country, zip, location_id)
 }

    render(){
        return(<form>{this.buttons()}</form>)
    }
}

export default connect(null, {changePoiVote, removePoi, savePoi})(CardButtons)