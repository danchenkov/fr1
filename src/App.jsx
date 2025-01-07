import Contact from "./components/Contact";

function App() {
    return (
        <div className="contacts">
			<Contact
				image="/images/whiskerson.png"
				name="Mr. Whiskerson"
				phone="(212) 555-1234"
				email="mr.whiskaz@catnap.meow"
			/>
			<Contact
				image="/images/fluffykins.png"
				name="Fluffykins"
				phone="(212) 555-2345"
				email="fluff@me.com"
			/>
			<Contact
				image="/images/felix.png"
				name="Felix"
				phone="(212) 555-4567"
				email="thecat@hotmail.com"
			/>
			<Contact
				image="/images/pumpkin.png"
				name="Pumpkin"
				phone="(0800) CAT KING"
				email="pumpkin@scrimba.com"
			/>
        </div>
    )
}

export default App