(function() {
  'use strict';

  var util = require('util');

  var domain = "";
  process.argv.forEach(function(val, index, array) {
    console.log("Paramater: " + val);
    var arg = val.split("=");
    if (arg.length > 1) {
      if (arg[0] == "--domain") {
        domain = "." + arg[1];
        console.log("Setting domain to:", domain);
      }
    }
  });

  if (domain == "") {
    console.log("Environment variable: " + process.env.DOMAIN);
    if (process.env.DOMAIN != undefined) {
      console.log("Setting domain to default (for PCF): .apps.pcfeu.dev.dynatracelabs.com");
      domain = process.env.DOMAIN;
    }
  }
  //main-sockshop-carts-prod.cfapps.eu10.hana.ondemand.com
  module.exports = {
    catalogueUrl: util.format("https://main-sockshop-catalogue-prod%s", domain),
    tagsUrl: util.format("https://main-sockshop-catalogue-prod%s/tags", domain),
    cartsUrl: util.format("https://main-sockshop-carts-prod%s/carts", domain),
    ordersUrl: util.format("https://orders%s", domain),
    customersUrl: util.format("https://user%s/customers", domain),
    addressUrl: util.format("https://user%s/addresses", domain),
    cardsUrl: util.format("https://user%s/cards", domain),
    loginUrl: util.format("https://user%s/login", domain),
    registerUrl: util.format("https://user%s/register", domain),
  };
}());