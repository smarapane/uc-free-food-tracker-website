import React from 'react';
import { Redirect } from 'react-router';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Event:'',Description:'', Latitude:'', Longitude:'', redirect: false}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name] : event.target.value});
  }

  async handleSubmit(event) {
    const { Event, Description, Latitude, Longitude } = this.state
    event.preventDefault();
    if (Latitude.length === 0 || Longitude.length === 0 || isNaN(Latitude) || isNaN(Longitude)) {
      alert("Invalid response");
    }
    else {
      // Hit API here
      await this.createPost(Event, Latitude, Longitude, Description);
      alert("Submitted!");
    }
  }

  async createPost(Event, Latitude, Longitude, Description) {
    fetch("YOURURL/api/locations", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        foodName: Event,
        latitude: Latitude,
        longitude: Longitude,
        description: Description
      })
    })
    .then((response) => {
      this.setState({ redirect: true});
      return response.json();
    })
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

  getResponse(event) {
    return event.target.value
  }

  render(){
    const { redirect } = this.state.redirect;

    if(redirect) {
      return <Redirect to='/'/>
    }

    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='Event'>Enter Title of Event:  </label>
          <input className="EventInput"
            name='Event'
            placeholder='e.g. Canes at TUC' 
            value = {this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='Description'>Enter Description of Event: </label>
          <input className="DescriptionInput"
            name='Description' 
            placeholder='e.g. Student Government handing out chicken and fries'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='Latitude'>Enter Latitude of Event: </label>
          <input className="LatitudeInput"
            name='Latitude' 
            placeholder='e.g. 39.1329'
            value={this.state.age}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='Longitude'>Enter Longitude of Event: </label>
          <input className="LongitudeInput"
            name='Longitude' 
            placeholder='e.g. 84.5150'
            value={this.state.address}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button className="Submit">
            Submit
          </button>
        </div>
      </form>
    )
    };
}


export default Form;
