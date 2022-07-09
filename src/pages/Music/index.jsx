import { Component } from 'react';
import { connect } from 'react-redux';

class MusicPage extends Component {

    render() {
        return (
            <ul>
                { this.props.allMusic.map(music => <li>{music.name}</li>)}
            </ul>
        )
    }
}

const mSTP = state => ({ allMusic: state.all })

export default connect(mSTP)(MusicPage);