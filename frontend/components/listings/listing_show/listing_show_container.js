import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { updateFilter, clearFilter } from './../../../actions/filter_actions';
import { fetchListings } from '../../../actions/listing_actions';
import { clearReviews } from './../../../actions/review_actions';

const mapStateToProps = (state, { match: { params } }) => {
    // console.log(this.state)
    return {
        listings: state.entities.listings,
        listing: state.entities.listings[params.listingId],
        listingId: parseInt(params.listingId),
        reviews: Object.values(state.entities.reviews).reverse(),
        reservations: Object.values(state.entities.reservations)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateFilter: (filter,value) => dispatch(updateFilter(filter, value)),
    clearFilter: (filter) => dispatch(clearFilter(filter)),
    fetchListings: (filters) => dispatch(fetchListings(filters))
    // clearReviews: () => dispatch(clearReviews()),
})


export default connect (mapStateToProps, mapDispatchToProps)(ListingShow)