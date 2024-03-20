const magnetLink =
  "magnet:?xt=urn:btih:B62D2F41246461D2DE0A5469683C4EEC949BD8A2&dn=Halo.S02E07.WEB.x264-PHOENiX&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.birkenwald.de%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.moeking.me%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentor.org%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fuploads.gamecoast.net%3A6969%2Fannounce&tr=https%3A%2F%2Ftracker.foreverpirates.co%3A443%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce";
const torrentStream = require("torrent-stream");

exports.stream = async (req, res) => {
  const engine = torrentStream(magnetLink);
  const timestamp = parseInt(req.query.timestamp); // Extract timestamp from the request
  engine.on("ready", () => {
    const file = engine.files.find((file) => file.name.endsWith(".mkv")); // Adjust the file extension as per your requirement
    const bytesPerSecond = file.length / file.duration;
    const byteOffset = Math.floor(timestamp * bytesPerSecond);
    const stream = file.createReadStream({ start: byteOffset });

    // Set the appropriate content type header
    res.setHeader("Content-Type", "video/mp4");
    res.setHeader("Content-Disposition", "inline");

    // Pipe the stream to the HTTP response
    stream.pipe(res);
  });

  engine.on("error", (err) => {
    // Handle errors
    console.error(err);
    res.status(500).send("An error occurred while streaming the torrent.");
  });
};
