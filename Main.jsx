export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const ingredientsList = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)

    return (
        <main>
            <form className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsList}
            </ul>
        </main>
    )
}