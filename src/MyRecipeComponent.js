function MyRecipeComponent({label, image, calories, ingredients, country}) {
    return(
        <div>
            <div className="container">
            <h2>{label}</h2>
            </div>
            <div className="container">
            <img src={image}width="200px"alt="food"/>
            </div>
            <div className="container">
                <p className="name">{country}</p>
            </div>

            <ul className="container list">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>
                        <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png 
"alt="check" className="icon"/>
{ingredient}</li>
                ))}
            </ul>
            <div className="container">
            <p>{calories.toFixed()} calories</p>
            </div>

        </div>
    )
}

export default MyRecipeComponent;