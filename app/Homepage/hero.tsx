import RoomSearch from "./roomSelect";

export default function Hero() {
  return (
    <section>
      <div className="relative w-full h-screen bg-[url('/HeaderAssets/bkg.png')] bg-no-repeat bg-cover bg-center">
        <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-center">
            <p className="text-xl text-white">
              COMMITMENT TOWARDS HONOURABLE & SUSTAINABLE TOURISM
            </p>
            <br />
            <br />
            <p className="text-6xl text-white mb-4">
              Enjoy a Luxury Experience
            </p>
          </div>

          <RoomSearch></RoomSearch>
        </div>
      </div>
    </section>
  );
}
