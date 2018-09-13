const express = require("express");
const app = express();
const soapify = require("soapify");

// initialize environment variables
require("dotenv").config();

// to support JSON post: for bulk calls
app.use(require("body-parser").json());

// EU VAT example
app.use(
  ...soapify(
    "/api/eu_vat",
    "http://ec.europa.eu/taxation_customs/vies/checkVatService.wsdl",
    { proxy: process.env.HTTP_PROXY }
  )
);

app.listen(3000);
