import Header from "./Header/Header";
import Hero from "./hero";
import Home from "./home";
export default function page() {
    return (
        <>
            <Header
                title1="Our News"
                title2="hotels blogs"
                image="/HeaderAssets/img_header.png"
            />
            <div className="px-8 py-10 lg:px-96">
                <Home />
            </div>
        </>
    );
}
