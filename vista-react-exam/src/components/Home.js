import React, { useEffect, useState } from 'react'
import Header from './Header'
import RecipeList from './RecipeList'
import axios from 'axios'
import Hero from './Hero'
import { useNavigate } from 'react-router-dom'

const Home = ({currentStorage}) => {
  let history = useNavigate();

  const [recipeResult, setRecipeResult] = useState({});

  useEffect(() => {
    if (!currentStorage) {
      history('/');
    } else {
      history('/home');
    }
  }, [currentStorage])

  const getResultSearch = async (value) => {
    await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${value}&app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9`)
                .then(res => {

                  setRecipeResult(res.data);
                });
  }
  
  useEffect(() => {

  }, [recipeResult])
  
  const callHandlerSearch = (value) => {
    getResultSearch(value);
  }

  return (
    <div>
      <Header valueSearch={callHandlerSearch}/>
      <RecipeList/>
      <Hero recipeResult={recipeResult}/>
      {/* <Posts /> */}
      </div>
  )
}

export default Home
