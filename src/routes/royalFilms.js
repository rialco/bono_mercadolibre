const scraper = require("../services/scraper");
require("events").EventEmitter.defaultMaxListeners = 15;

async function get(req, res) {
  try {
    const url = "https://www.mercadolibre.com.co/jm/search";

    res.writeJSONResponse({ data }, 200);
  } catch (err) {
    res.writeJSONResponse({ data: null, err: err.message }, 500);
  }
}

module.exports = {
  get,
};
