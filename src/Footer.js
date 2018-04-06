import React, { Component } from 'react';

class DestinationList extends Component {
    render() {
        const destinations = this.props.destinations.map((destination) => (
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

class Footer extends Component {
    render() {
        return (
            <a href={this.props.link}>
              {this.props.name}
            </a>
        );
    }
}
export default DestinationList;