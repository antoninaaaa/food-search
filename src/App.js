import { useEffect, useState } from 'react';
import './App.css';
import video from './video.mp4';
import MyRecipeComponent from './MyRecipeComponent';


//https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=eadd155d&app_key=%204f9f32e3f717f59dbbf4564c7b78d8da%09
function App() {
  const MY_ID= "eadd155d";
  const MY_KEY = "%204f9f32e3f717f59dbbf4564c7b78d8da%09";

  const [mySearch, setMySearch] = useState("");
  const[myRecipes, setMyRecipes] = useState([]);
  const[wordSubmitted, setWordSubmitted] = useState("avocado");


  useEffect(() => {
    const getRecipe = async() => {
      const response= await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
    }
    getRecipe();
  }, [wordSubmitted])
  
  const myRecipeSearch = (e) => {
  setMySearch(e.target.value);

  }
  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }
  return (
    <div className="App">
      
      <div className='container'>
        <video autoPlay muted loop playsInline>
          <source src={video} type="video/mp4"/>
        </video>
        <h1>RECIPES SEARCH</h1>
      </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search'onChange={myRecipeSearch} value={mySearch}/>
        </form>
      </div>

      <div className='container'>
        <button onClick={finalSearch}>
          <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
        </button>
      </div>

{myRecipes.map((element,index) => (
  <MyRecipeComponent key={index} 
  label={element.recipe.label}
  image={element.recipe.image}
  country ={element.recipe.cuisineType}
  calories={element.recipe.calories}
  ingredients={element.recipe.ingredientLines}
  
  />
)
  )}
    </div>
  );
}

export default App;
