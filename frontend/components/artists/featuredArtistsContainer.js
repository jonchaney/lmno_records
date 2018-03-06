import { connect } from 'react-redux';
import { fetchArtists } from '../../actions/artistActions.js'
import FeaturedArtists from './featuredArtists.js';

const mapStateToProps = ( state ) => ({
    artists: state.artists
});

const mapDispatchToProps = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedArtists);
