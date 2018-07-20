import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);
      this.state = {
        rooms: [],
        newRoom: ''
      };

    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) })
    });
  }

  handleChange(e) {
    this.setState({
      newRoom: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.roomsRef.push({
      name: this.state.newRoom
    });
    this.setState({
      newRoom:""
    });
  }

  render() {
    const roomList = this.state.rooms.map((room) =>
      <li key={room.key}>{room.name}</li>
    );
    return(
      <section>
        <ul>{roomList}</ul>
        <div><form id="newroom" onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text"  value={ this.state.newRoom } onChange={ (e) => this.handleChange(e)} placeholder="Enter room name here."/>
          <button>Create</button>
        </form></div>
      </section>
    );
  }
}

export default RoomList;
