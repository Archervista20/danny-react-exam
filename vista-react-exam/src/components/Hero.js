import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './Posts'
import RecipeList from './RecipeList'
import PageLink from './PageLink'
import mainBg from '../images/bg4.jpg'


const  Hero = ({recipeResult}) => {
  const [posts, setPosts] = useState({})
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6
  
  const fetchPosts = async () => {
    setLoading(true);
    await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=fish&app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9`)
               .then(res => {
      setPosts(res.data.hits);
      setLoading(false);
    });
  }
  
  useEffect(() => {
    
    if (recipeResult.hits !== undefined) {
      //assign value input to new post
      setPosts(recipeResult.hits);
    } else {
      // on reload page..
      fetchPosts();
    }
  },[recipeResult]);

  // Get pagination posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts && posts !== undefined && posts.length > 0 && posts.slice(indexOfFirstPost, indexOfLastPost);

  
  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  };

  return (
    <div style={{
      backgroundImage: `url(${mainBg})`
    }}>
      {/* <img /> */}
      <div className="container mt-5">
        <h2 className="text-heading text-primary mt-4 pt-4 text-light">Search Your Favorite Recipe</h2>
        <Posts post={currentPosts} loading={loading} />
        {Object.keys(posts).length > 0 ? (
          <div>
            <RecipeList postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
            <PageLink postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage}/>
          </div>
        ) : (
          <div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Hero
