import NewListing from './containers/NewsListing/sagas';

export default function* AppSaga () {
  yield [
    NewListing(),
  ]
}
