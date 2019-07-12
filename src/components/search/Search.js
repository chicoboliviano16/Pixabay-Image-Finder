import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class Search extends Component {
    state = {
        searchText: '',
        amount: 15,
        apiURL: 'https://pixabay.com/api',
        apiKey: '13015518-19e42a5b284a5c0bf3a887151',
        images: []

    }

    render() {
        
        return (
            <div>
                <TextField 
                    name="Search Text"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="Search for Images"
                    fullWidth={true}
                />
                <br/>
                
            </div>
            
        )
    }
}
export default Search;
