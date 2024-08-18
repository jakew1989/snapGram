
import GridPostList from './GridPostList';
import Loader from './Loader';

type searchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: any;
}

const SearchResults = ({ isSearchFetching, searchedPosts }: searchResultsProps) => {
  if(isSearchFetching) return <Loader />

  if(searchedPosts && searchedPosts.documents.length > 0) {
    return (
      <GridPostList posts={searchedPosts.documents} />
    )
  }
  return (
    <p className="text-light-4 mt-10 text-center">No results found</p>
  )
}

export default SearchResults
