import { React, useEffect, useState } from 'react'
import UserCard from '../userCard/UserCard'
import Post from '../post/Post'
import { useLocation } from 'react-router-dom';

const SearchResult = () => {
  const location = useLocation();
  const data = location.state.data;
  console.log(data.posts)
  return (
    <div>

    {data.users.map((item, index) => (
      <UserCard key={index} data={item} />
    ))}
    {data.posts.map((item, index) => (
      <Post key={index} data={item} />
    ))}
    </div>
  )
}

export default SearchResult