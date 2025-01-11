import React from "react"

export default function App() {
    const [isGoingOut, setGoingOut] = new React.useState(true)

    function toggleGoingOut() {
        setGoingOut(isGoingOut => !isGoingOut)
    }

    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value" onClick={toggleGoingOut}>{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}
