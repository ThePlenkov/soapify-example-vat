# Node.JS API to check EU VAT numbers

This is a nice example how soapify npm module can be used.

Node.js API for http://ec.europa.eu/taxation_customs/vies/checkVatService.wsdl

It supports two modes:

1) Single check

In this case just the URL is enough:
localhost:3000/api/eu_vat/checkVat?countryCode=HU&vatNumber=104858XX

2) Bulk check

As there is no dedicated WSDL operation on the provider site what you can do is to send POST to URL like this:
localhost:3000/api/eu_vat/checkVat

with JSON body like this:
[{"countryCode":"HU","vatNumber":"104858XX"},{"countryCode":"HU","vatNumber":"104858YY"},{"countryCode":"HU","vatNumber":"104858ZZ"}]

It's important to have Content-Type application/json in the HTTP header.

In both cases the service replies with JSON
