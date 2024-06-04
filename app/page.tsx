import HomePage from "./Homepage/pageLayout";

export default function Home() {
    return (
        <main className="">
            <div
                className="home fixed left-0 top-0 z-[-1] h-screen w-screen"
                data-aos="fade-in"
                data-aos-delay="200"
            ></div>
            <HomePage />
        </main>
    );
}
