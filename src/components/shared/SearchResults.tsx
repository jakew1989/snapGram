import { Models } from 'appwrite';
import { Loader } from 'lucide-react';
import React from 'react'
import GridPostList from './GridPostList';

type searchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
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
