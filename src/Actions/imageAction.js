import axios from 'axios';
const state = {
    first: 1,
    last: 25
}
export const fetchPhotos = () => dispatch => {
    console.log('fetch photos');
    axios.get(`/api/photos?last=${state.last}&first=${state.first}`)
        .then(posts => dispatch({
            type: 'NEW_IMAGES',
            payload: posts.data
        }));
}

// export const fetchNextPhotos = () => dispatch => {

//     const { first, last } = state;
//     const firstt = first + last
//     axios.get(`/api/photos?last=${last}&first=${firstt}`)
//         .then(res =>
//             dispatch({
//                 type: NEXT_PHOTOS,
//                 payload: res.data
//             })
//         );
//     state.first = state.first + state.last;
//     console.log(state.first);
//     axios.get(`/api/photos?last=${state.last}&first=${state.first}`)
//         .then(posts => dispatch({
//             type: NEXT_PHOTOS,
//             payload: posts.data
//         }));
// }
