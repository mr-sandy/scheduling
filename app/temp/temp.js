const retailersRaw = require("./retailersandurls.json");
const storeRetailers = require("./storeRetailers.json");

const fs = require("fs");

function findCountry(r) {
  const index = r.lastIndexOf("-");
  return index > -1 ? r.substr(index + 1).toLowerCase() : "uk";
}

function findDomain(r) {
  const index = r.indexOf("/", 8);
  return index > -1 ? r.substr(0, index).toLowerCase() : "uk";
}

function getType(r) {
  const index = r.indexOf("-APP-");
  return index > -1 ? "app" : "website";
}

function getMultistore(r) {
  return storeRetailers.includes(r);
}

const retailers = retailersRaw.map((raw) => ({
  retailerId: raw.retailer,
  type: getType(raw.retailer),
  countryCode: findCountry(raw.retailer),
  domain: findDomain(raw.url),
  multistore: getMultistore(raw.retailer),
}));

function compare(a, b) {
  if (a.retailerId < b.retailerId) {
    return -1;
  }
  if (a.retailerId > b.retailerId) {
    return 1;
  }
  return 0;
}

retailers.sort(compare);

fs.writeFile("./retailers.js", JSON.stringify(retailers, null, "  "), (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
