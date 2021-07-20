import React, { Component } from 'react'

class ProfileComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            newCar : ""
        }

    }

    handleChange = (e) =>{ 
        this.setState({
          newCar: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault(); 
        
        this.props.addCar(this.state.newCar)
    }

    render(){
        return (
            <div>
                <h1>Add a car:</h1>
                <form onSubmit={(e) => {this.handleSubmit(e)}}>
                    <input name="newCar" type="text" placeholder="new car" value={this.state.newCar} onChange={e => {this.handleChange(e)}}/>
                    <input type="submit"/>
                </form>
                {this.props.cars.map((car, idx) =>{
                    return (
                        <h2 key={idx}>{car}</h2>
                    )
                })}
                <h2>There are: {this.props.cars.length} cars</h2>
            </div>
        )
    }
}

export default ProfileComponent