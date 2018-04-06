import React, { Component } from 'react';

class DestinationList extends Component {
   destinations =[
    {id: 1, name:"place1", link:"#" },
    {id: 2, name:"place2", link:"#" },
    {id: 3, name:"place3", link:"#" },
    {id: 4, name:"place4", link:"#" },
    ]  

  render() {
        const destinations = this.destinations.map((destination) => (
          <Footer
            key={destination.id}
            id={destination.id}
            name={destination.name}
            link={destination.link}
          />
        ));
        return (
          <div>
            {destinations}
          </div>
        );
      }
}

function Footer(props) {
    return (
        <a href={props.link}>
          {props.name}
        </a>
    );
}

export default DestinationList;