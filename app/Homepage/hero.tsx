import RoomSearch from "./roomSelect";

export default function Hero() {
    return (
        <section>
            <div className="relative h-screen w-full bg-[url('/HeaderAssets/bkg.png')] bg-cover bg-center bg-no-repeat">
                <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform">
                    <div className="text-center">
                        <p className="text-xl text-white">
                            COMMITMENT TOWARDS HONOURABLE & SUSTAINABLE TOURISM
                        </p>
                        <br />
                        <br />
                        <p className="mb-4 text-6xl text-white">
                            Enjoy a Luxury Experience
                        </p>
                    </div>

                    <RoomSearch></RoomSearch>
                </div>
            </div>
        </section>
    );
}
