import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import Error from './Error';

// this is a class based component
class App extends React.Component {
    //init state object
    state = { lat: null, errorMessage: ''};

    componentDidMount() {
        // get user location
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <Error errorMessage="There was an issue getting your location"/>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner loadingMessage="Please accept location request" />
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render( <App />, document.querySelector('#root'));