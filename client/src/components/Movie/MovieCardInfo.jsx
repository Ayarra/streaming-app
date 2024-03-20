import bg from "../../../public/background.jpg";

function MovieCardInfo() {
  return (
    <div
      className="absolute top-1/4 left-1/3 w-72 h-auto bg-cover bg-center bg-no-repeat z-10 p-5 rounded-lg"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="text-white text-3xl mb-2">Title</h1>
      <div className="text-white  mb-2">
        <span className="mr-2 text-lg" id="rating">
          7.3/10
        </span>
        <span id="production-year">9999</span>
      </div>
      <div className="text-white text-sm line-clamp-6" id="synopsis">
        After suffering from serial paranormal events, a wealthy family living
        in LA summons a young rising shaman duo Hwa-rim and Bong-gil to save the
        newborn of the family. Once they arrive, Hwa-rim senses a dark shadow of
        their ancestor has latched on the family, so-called a Grave`&apos;`s
        Calling. In order to exhume the grave and relieve the ancestor, Hwa-rim
        seeks help from the top-notch geomancer Sang-duk and the mortician
        Young-geun. To their dismay, the four find the grave at a shady location
        in a remote village in Korea. Unaware of the consequences, the
        exhumation is carried out, yet this rather unleashes a malevolent force
        buried underneath.
      </div>
    </div>
  );
}

export default MovieCardInfo;
