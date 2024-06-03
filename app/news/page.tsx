import Header from "../_components/Header/Header";
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
            <div className="flex min-h-screen flex-col items-stretch justify-center px-4 md:flex-row">
                <div className="hidden flex-grow bg-[url('../public/short_border.svg')] bg-contain bg-center bg-repeat md:w-1/12 lg:block lg:w-1/6"></div>
                <Home />
                <div className="hidden flex-grow bg-[url('../public/short_border.svg')] bg-contain bg-center bg-repeat md:w-1/12 lg:block lg:w-1/6"></div>
            </div>
        </>
    );
}
