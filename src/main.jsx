import { createRoot } from "react-dom/client"
import Header from "./header"
import MainContent from "./main-content"
import Footer from "./footer"

const root = createRoot(document.getElementById("root"))

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

root.render(
    <Page />
)
