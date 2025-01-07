export default function Joke(props) {
    return (
        <article className="joke-card">
            {props.setup &&
                <p className="setup">{props.setup}</p>
            }
            <p className="punchline">{props.punchline}</p>
        </article>
    )
}