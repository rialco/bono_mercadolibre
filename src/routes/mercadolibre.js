const scraper = require("../services/scraper");
require("events").EventEmitter.defaultMaxListeners = 15;

async function get(req, res) {
  try {
    const query = "celular";

    const prueba = await scraper.makeSearch(query);
    console.log(prueba);

    res.writeJSONResponse({ data }, 200);
  } catch (err) {
    res.writeJSONResponse({ data: null, err: err.message }, 500);
  }
}

module.exports = {
  get,
};
