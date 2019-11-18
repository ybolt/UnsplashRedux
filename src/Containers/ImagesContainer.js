import Images from './../Components/Images'
import { connect } from 'react-redux'
import {fetchPhotos} from '../Actions/imageAction'

const mapStateToProps = state => ({
  	 images: state.imagesReducer.images,
})

const mapDispatchToProps = dispatch => {
	return {
    fetchPhotos: () => dispatch(fetchPhotos())
	};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Images)

