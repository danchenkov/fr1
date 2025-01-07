import Joke from "./components/Joke";

/**
 * EXTRA CREDIT:
 * Some jokes are only a punchline with no setup:
 *
 * E.g.: ""
 *
 * If you don't pass in a "question" prop, how might you make it only
 * show the punchline?
 */

export default function App() {
    return (
        <>
			<Joke
				setup="I got my daughter a fridge for her birthday."
				punchline="I can't wait to see her face light up when she opens it." />
			<Joke
				setup="How did the hacker escape the police?"
				punchline="He just ransomware!" />
			<Joke
				setup="Why don't pirates travel on mountain roads?"
				punchline="Scurvy." />
			<Joke
				setup="Why do bees stay in the hive in the winter?"
				punchline="Swarm." />
			<Joke
				setup="What's the best thing about Switzerland?"
				punchline="I don't know, but the flag is a big plus!" />
			<Joke
				punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally." />
		</>
    )
}
