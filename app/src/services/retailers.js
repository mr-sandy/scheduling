const retailers =[
  {
    "retailerId": "11st-KR",
    "type": "website",
    "countryCode": "kr",
    "domain": "https://global.11st.co.kr",
    "multistore": false
  },
  {
    "retailerId": "7NOW-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.7now.com",
    "multistore": false
  },
  {
    "retailerId": "7eleven-TH",
    "type": "website",
    "countryCode": "th",
    "domain": "https://www.allonline.7eleven.co.th",
    "multistore": false
  },
  {
    "retailerId": "AB-GR",
    "type": "website",
    "countryCode": "gr",
    "domain": "https://www.ab.gr",
    "multistore": false
  },
  {
    "retailerId": "AO-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://ao.com",
    "multistore": false
  },
  {
    "retailerId": "ARN-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.automaticretailing.com",
    "multistore": false
  },
  {
    "retailerId": "ASDA",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://groceries.asda.com",
    "multistore": true
  },
  {
    "retailerId": "Acme-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.acmemarkets.com",
    "multistore": false
  },
  {
    "retailerId": "AeonMall-VN",
    "type": "website",
    "countryCode": "vn",
    "domain": "https://aeoneshop.com",
    "multistore": false
  },
  {
    "retailerId": "Agrocampo-CO",
    "type": "website",
    "countryCode": "co",
    "domain": "https://www.agrocampo.com.co",
    "multistore": false
  },
  {
    "retailerId": "Ahorramas-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.ahorramas.com",
    "multistore": false
  },
  {
    "retailerId": "Albert-Heijn",
    "type": "website",
    "countryCode": "heijn",
    "domain": "https://www.ah.nl",
    "multistore": false
  },
  {
    "retailerId": "Albert-Heijn-BE",
    "type": "website",
    "countryCode": "be",
    "domain": "https://www.ah.be",
    "multistore": false
  },
  {
    "retailerId": "Albertsons-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.albertsons.com",
    "multistore": true
  },
  {
    "retailerId": "AlbertsonsMarket-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.albertsonsmarket.com",
    "multistore": true
  },
  {
    "retailerId": "Alcampo-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.alcampo.es",
    "multistore": true
  },
  {
    "retailerId": "Aldi-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://groceries.aldi.co.uk",
    "multistore": true
  },
  {
    "retailerId": "AlfaGift-APP-ID",
    "type": "app",
    "countryCode": "id",
    "domain": "https://agift.alfagift.id",
    "multistore": false
  },
  {
    "retailerId": "Alimerka-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.alimerkaonline.es",
    "multistore": false
  },
  {
    "retailerId": "Allegro-PL",
    "type": "website",
    "countryCode": "pl",
    "domain": "https://allegro.pl",
    "multistore": false
  },
  {
    "retailerId": "Alza-CZ",
    "type": "website",
    "countryCode": "cz",
    "domain": "https://www.alza.cz",
    "multistore": false
  },
  {
    "retailerId": "Amazon-AE",
    "type": "website",
    "countryCode": "ae",
    "domain": "https://www.amazon.ae",
    "multistore": false
  },
  {
    "retailerId": "Amazon-AU",
    "type": "website",
    "countryCode": "au",
    "domain": "https://www.amazon.com.au",
    "multistore": false
  },
  {
    "retailerId": "Amazon-BR",
    "type": "website",
    "countryCode": "br",
    "domain": "https://www.amazon.com.br",
    "multistore": false
  },
  {
    "retailerId": "Amazon-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.amazon.ca",
    "multistore": false
  },
  {
    "retailerId": "Amazon-DE",
    "type": "website",
    "countryCode": "de",
    "domain": "https://www.amazon.de",
    "multistore": false
  },
  {
    "retailerId": "Amazon-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.amazon.es",
    "multistore": false
  },
  {
    "retailerId": "Amazon-FR",
    "type": "website",
    "countryCode": "fr",
    "domain": "https://www.amazon.fr",
    "multistore": false
  },
  {
    "retailerId": "Amazon-FR-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.amazon.ca",
    "multistore": false
  },
  {
    "retailerId": "Amazon-Fresh",
    "type": "website",
    "countryCode": "fresh",
    "domain": "https://www.amazon.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Amazon-Fresh-DE",
    "type": "website",
    "countryCode": "de",
    "domain": "https://www.amazon.de",
    "multistore": false
  },
  {
    "retailerId": "Amazon-Fresh-Dia-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.amazon.es",
    "multistore": false
  },
  {
    "retailerId": "Amazon-Fresh-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.amazon.es",
    "multistore": true
  },
  {
    "retailerId": "Amazon-Fresh-SG",
    "type": "website",
    "countryCode": "sg",
    "domain": "https://www.amazon.sg",
    "multistore": false
  },
  {
    "retailerId": "Amazon-Fresh-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.amazon.com",
    "multistore": true
  },
  {
    "retailerId": "Amazon-IN",
    "type": "website",
    "countryCode": "in",
    "domain": "https://www.amazon.in",
    "multistore": false
  },
  {
    "retailerId": "Amazon-Italy",
    "type": "website",
    "countryCode": "italy",
    "domain": "https://www.amazon.it",
    "multistore": false
  },
  {
    "retailerId": "Amazon-JP",
    "type": "website",
    "countryCode": "jp",
    "domain": "https://www.amazon.co.jp",
    "multistore": false
  },
  {
    "retailerId": "Amazon-MX",
    "type": "website",
    "countryCode": "mx",
    "domain": "https://www.amazon.com.mx",
    "multistore": false
  },
  {
    "retailerId": "Amazon-Morrisons-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.amazon.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Amazon-NL",
    "type": "website",
    "countryCode": "nl",
    "domain": "https://www.amazon.nl",
    "multistore": false
  },
  {
    "retailerId": "Amazon-PL",
    "type": "website",
    "countryCode": "pl",
    "domain": "https://www.amazon.de",
    "multistore": false
  },
  {
    "retailerId": "Amazon-Pet-Supplies",
    "type": "website",
    "countryCode": "supplies",
    "domain": "https://www.amazon.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Amazon-SA",
    "type": "website",
    "countryCode": "sa",
    "domain": "https://www.amazon.sa",
    "multistore": false
  },
  {
    "retailerId": "Amazon-SG",
    "type": "website",
    "countryCode": "sg",
    "domain": "https://www.amazon.sg",
    "multistore": false
  },
  {
    "retailerId": "Amazon-TR",
    "type": "website",
    "countryCode": "tr",
    "domain": "https://www.amazon.com.tr",
    "multistore": false
  },
  {
    "retailerId": "Amazon-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.amazon.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Amazon-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.amazon.com",
    "multistore": false
  },
  {
    "retailerId": "Amazon-WholeFoods-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.amazon.com",
    "multistore": true
  },
  {
    "retailerId": "Amazon-ZA",
    "type": "website",
    "countryCode": "za",
    "domain": "https://www.amazon.com",
    "multistore": false
  },
  {
    "retailerId": "AmigosUnited-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.amigosunited.com",
    "multistore": true
  },
  {
    "retailerId": "Andronicos-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.andronicos.com",
    "multistore": false
  },
  {
    "retailerId": "Animates-NZ",
    "type": "website",
    "countryCode": "nz",
    "domain": "https://www.animates.co.nz",
    "multistore": false
  },
  {
    "retailerId": "Animed-Direct-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.animeddirect.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Apetete-PL",
    "type": "website",
    "countryCode": "pl",
    "domain": "https://apetete.pl",
    "multistore": false
  },
  {
    "retailerId": "Apotek-NO",
    "type": "website",
    "countryCode": "no",
    "domain": "https://www.apotek1.no",
    "multistore": false
  },
  {
    "retailerId": "Apotera-NO",
    "type": "website",
    "countryCode": "no",
    "domain": "https://www.apotera.no",
    "multistore": false
  },
  {
    "retailerId": "ApplianceCity-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.appliancecity.co.uk",
    "multistore": false
  },
  {
    "retailerId": "AppliancesDirect-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.appliancesdirect.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Arbuz-KZ",
    "type": "website",
    "countryCode": "kz",
    "domain": "https://arbuz.kz",
    "multistore": false
  },
  {
    "retailerId": "Argos",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.argos.co.uk",
    "multistore": true
  },
  {
    "retailerId": "Argos-IE",
    "type": "website",
    "countryCode": "ie",
    "domain": "https://www.argos.ie",
    "multistore": false
  },
  {
    "retailerId": "ArkenZoo-SE",
    "type": "website",
    "countryCode": "se",
    "domain": "https://www.arkenzoo.se",
    "multistore": false
  },
  {
    "retailerId": "ArlasKundwebb-SE",
    "type": "website",
    "countryCode": "se",
    "domain": "https://kund.arla.se",
    "multistore": false
  },
  {
    "retailerId": "Askul-JP",
    "type": "website",
    "countryCode": "jp",
    "domain": "https://lohaco.yahoo.co.jp",
    "multistore": false
  },
  {
    "retailerId": "Asos-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.asos.com",
    "multistore": false
  },
  {
    "retailerId": "Astro-APP-ID",
    "type": "app",
    "countryCode": "id",
    "domain": "https://api.astronauts.id",
    "multistore": false
  },
  {
    "retailerId": "Auchan",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.auchan.fr",
    "multistore": true
  },
  {
    "retailerId": "Auchan-PL",
    "type": "website",
    "countryCode": "pl",
    "domain": "https://zakupy.auchan.pl",
    "multistore": true
  },
  {
    "retailerId": "Auchan-PT",
    "type": "website",
    "countryCode": "pt",
    "domain": "https://www.auchan.pt",
    "multistore": false
  },
  {
    "retailerId": "Auchan-RO",
    "type": "website",
    "countryCode": "ro",
    "domain": "https://www.auchan.ro",
    "multistore": false
  },
  {
    "retailerId": "AzbukaVkusa-RU",
    "type": "website",
    "countryCode": "ru",
    "domain": "https://av.ru",
    "multistore": false
  },
  {
    "retailerId": "BB-Foodservice",
    "type": "website",
    "countryCode": "foodservice",
    "domain": "https://www.bbfoodservice.co.uk",
    "multistore": false
  },
  {
    "retailerId": "BJs-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.bjs.com",
    "multistore": true
  },
  {
    "retailerId": "BM-Supermercados-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.online.bmsupermercados.es",
    "multistore": false
  },
  {
    "retailerId": "BMStores-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.bmstores.co.uk",
    "multistore": false
  },
  {
    "retailerId": "BWS-AU",
    "type": "website",
    "countryCode": "au",
    "domain": "https://bws.com.au",
    "multistore": false
  },
  {
    "retailerId": "BakersPlus-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.bakersplus.com",
    "multistore": false
  },
  {
    "retailerId": "Balducci-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.balduccis.com",
    "multistore": false
  },
  {
    "retailerId": "Banabi-APP-TR",
    "type": "app",
    "countryCode": "tr",
    "domain": "https://disco.deliveryhero.io",
    "multistore": false
  },
  {
    "retailerId": "BandQ",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.diy.com",
    "multistore": false
  },
  {
    "retailerId": "Barbora-PL",
    "type": "website",
    "countryCode": "pl",
    "domain": "https://barbora.pl",
    "multistore": false
  },
  {
    "retailerId": "Benesse-JP",
    "type": "website",
    "countryCode": "jp",
    "domain": "https://pf.benesse.ne.jp",
    "multistore": false
  },
  {
    "retailerId": "Best-One-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://retailer.best-one.co.uk",
    "multistore": false
  },
  {
    "retailerId": "BestBuy-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.bestbuy.ca",
    "multistore": false
  },
  {
    "retailerId": "BestBuy-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.bestbuy.com",
    "multistore": false
  },
  {
    "retailerId": "Bestway",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.bestwaywholesale.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Bidfood-NL",
    "type": "website",
    "countryCode": "nl",
    "domain": "https://www.bidfood.nl",
    "multistore": false
  },
  {
    "retailerId": "Bidfood-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.bidfooddirect.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Big-C-TH",
    "type": "website",
    "countryCode": "th",
    "domain": "https://www.bigc.co.th",
    "multistore": false
  },
  {
    "retailerId": "Bilka-DK",
    "type": "website",
    "countryCode": "dk",
    "domain": "https://www.bilka.dk",
    "multistore": false
  },
  {
    "retailerId": "BilkaToGo-DK",
    "type": "website",
    "countryCode": "dk",
    "domain": "https://www.bilkatogo.dk",
    "multistore": true
  },
  {
    "retailerId": "Billa-AT",
    "type": "website",
    "countryCode": "at",
    "domain": "https://shop.billa.at",
    "multistore": false
  },
  {
    "retailerId": "Bitiba-DE",
    "type": "website",
    "countryCode": "de",
    "domain": "https://www.bitiba.de",
    "multistore": false
  },
  {
    "retailerId": "Blibli-APP-ID",
    "type": "app",
    "countryCode": "id",
    "domain": "https://www.blibli.com",
    "multistore": false
  },
  {
    "retailerId": "Bodystore-NO",
    "type": "website",
    "countryCode": "no",
    "domain": "https://www.bodystore.no",
    "multistore": false
  },
  {
    "retailerId": "Bol-NL",
    "type": "website",
    "countryCode": "nl",
    "domain": "https://www.bol.com",
    "multistore": false
  },
  {
    "retailerId": "Bolt-APP-PL",
    "type": "app",
    "countryCode": "pl",
    "domain": "https://node.bolt.eu",
    "multistore": false
  },
  {
    "retailerId": "Bolt-APP-RO",
    "type": "app",
    "countryCode": "ro",
    "domain": "https://node.bolt.eu",
    "multistore": false
  },
  {
    "retailerId": "Bon-Preu-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.compraonline.bonpreuesclat.cat",
    "multistore": false
  },
  {
    "retailerId": "Booker",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.booker.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Boots",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.boots.com",
    "multistore": false
  },
  {
    "retailerId": "Brakes-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.brake.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Braunhousehold",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.braunhousehold.com",
    "multistore": false
  },
  {
    "retailerId": "Brekz-NL",
    "type": "website",
    "countryCode": "nl",
    "domain": "https://www.brekz.nl",
    "multistore": false
  },
  {
    "retailerId": "Bringmeister-APP-DE",
    "type": "app",
    "countryCode": "de",
    "domain": "https://appi.bringmeister.de",
    "multistore": false
  },
  {
    "retailerId": "Bringmeister-DE",
    "type": "website",
    "countryCode": "de",
    "domain": "https://www.bringmeister.de",
    "multistore": true
  },
  {
    "retailerId": "Bringo-Carrefour-RO",
    "type": "website",
    "countryCode": "ro",
    "domain": "https://www.bringo.ro",
    "multistore": false
  },
  {
    "retailerId": "Budget-Pet-APP-AU",
    "type": "app",
    "countryCode": "au",
    "domain": "https://www.budgetpetproducts.com.au",
    "multistore": false
  },
  {
    "retailerId": "Budget-Pet-AU",
    "type": "website",
    "countryCode": "au",
    "domain": "https://www.budgetpetproducts.com.au",
    "multistore": false
  },
  {
    "retailerId": "CVS-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.cvs.com",
    "multistore": true
  },
  {
    "retailerId": "Canadian-Tire-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.canadiantire.ca",
    "multistore": false
  },
  {
    "retailerId": "Candy-Store-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.candystore.com",
    "multistore": false
  },
  {
    "retailerId": "Candy-Warehouse-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.candywarehouse.com",
    "multistore": false
  },
  {
    "retailerId": "Cannatas-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.cannatas.com",
    "multistore": false
  },
  {
    "retailerId": "Caprabo-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.capraboacasa.com",
    "multistore": false
  },
  {
    "retailerId": "Carrefour-AE",
    "type": "website",
    "countryCode": "ae",
    "domain": "https://www.carrefouruae.com",
    "multistore": true
  },
  {
    "retailerId": "Carrefour-AR-SA",
    "type": "website",
    "countryCode": "sa",
    "domain": "https://www.carrefourksa.com",
    "multistore": false
  },
  {
    "retailerId": "Carrefour-EN-SA",
    "type": "website",
    "countryCode": "sa",
    "domain": "https://www.carrefourksa.com",
    "multistore": false
  },
  {
    "retailerId": "Carrefour-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.carrefour.es",
    "multistore": true
  },
  {
    "retailerId": "Carrefour-EU",
    "type": "website",
    "countryCode": "eu",
    "domain": "https://drive.carrefour.be",
    "multistore": true
  },
  {
    "retailerId": "Carrefour-FR",
    "type": "website",
    "countryCode": "fr",
    "domain": "https://www.carrefour.fr",
    "multistore": true
  },
  {
    "retailerId": "Carrefour-FR-BE",
    "type": "website",
    "countryCode": "be",
    "domain": "https://drive.carrefour.be",
    "multistore": true
  },
  {
    "retailerId": "Carrefour-IT",
    "type": "website",
    "countryCode": "it",
    "domain": "https://www.carrefour.it",
    "multistore": false
  },
  {
    "retailerId": "Carrefour-KE",
    "type": "website",
    "countryCode": "ke",
    "domain": "https://www.carrefour.ke",
    "multistore": false
  },
  {
    "retailerId": "Carrefour-PL",
    "type": "website",
    "countryCode": "pl",
    "domain": "https://www.carrefour.pl",
    "multistore": true
  },
  {
    "retailerId": "Carrefour-Supermarket-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.carrefour.es",
    "multistore": true
  },
  {
    "retailerId": "Carrefour-TR",
    "type": "website",
    "countryCode": "tr",
    "domain": "https://www.carrefoursa.com",
    "multistore": false
  },
  {
    "retailerId": "Carrs-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.carrsqc.com",
    "multistore": true
  },
  {
    "retailerId": "Casino-FR",
    "type": "website",
    "countryCode": "fr",
    "domain": "https://www.casino.fr",
    "multistore": false
  },
  {
    "retailerId": "Castell-Howells-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://castell.coldweb.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Catch-AU",
    "type": "website",
    "countryCode": "au",
    "domain": "https://www.catch.com.au",
    "multistore": false
  },
  {
    "retailerId": "Catycan-AR",
    "type": "website",
    "countryCode": "ar",
    "domain": "https://www.catycan.com.ar",
    "multistore": false
  },
  {
    "retailerId": "Cdiscount-FR",
    "type": "website",
    "countryCode": "fr",
    "domain": "https://www.cdiscount.com",
    "multistore": false
  },
  {
    "retailerId": "Central-Market-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.centralmarket.com",
    "multistore": false
  },
  {
    "retailerId": "Centralvet-CL",
    "type": "website",
    "countryCode": "cl",
    "domain": "https://www.centralvet.cl",
    "multistore": false
  },
  {
    "retailerId": "Checkers-Online-ZA",
    "type": "website",
    "countryCode": "za",
    "domain": "https://www.checkers.co.za",
    "multistore": false
  },
  {
    "retailerId": "Chedraui-MX",
    "type": "website",
    "countryCode": "mx",
    "domain": "https://www.chedraui.com.mx",
    "multistore": false
  },
  {
    "retailerId": "Cheetay-APP-PK",
    "type": "app",
    "countryCode": "pk",
    "domain": "https://www.cheetay.pk",
    "multistore": false
  },
  {
    "retailerId": "Chewy-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.chewy.com",
    "multistore": false
  },
  {
    "retailerId": "Chronodrive-FR",
    "type": "website",
    "countryCode": "fr",
    "domain": "https://www.chronodrive.com",
    "multistore": false
  },
  {
    "retailerId": "CityGross-SE",
    "type": "website",
    "countryCode": "se",
    "domain": "https://www.citygross.se",
    "multistore": true
  },
  {
    "retailerId": "CityMarket-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.citymarket.com",
    "multistore": false
  },
  {
    "retailerId": "Club-De-Perrosy-Gatos-CL",
    "type": "website",
    "countryCode": "cl",
    "domain": "https://www.clubdeperrosygatos.cl",
    "multistore": false
  },
  {
    "retailerId": "Cobasi-BR",
    "type": "website",
    "countryCode": "br",
    "domain": "https://www.cobasi.com.br",
    "multistore": false
  },
  {
    "retailerId": "CocoonCenter-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.cocooncenter.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Coles-AU",
    "type": "website",
    "countryCode": "au",
    "domain": "https://www.coles.com.au",
    "multistore": true
  },
  {
    "retailerId": "CollectAndGo-Colruyt-BE",
    "type": "website",
    "countryCode": "be",
    "domain": "https://www.collectandgo.be",
    "multistore": true
  },
  {
    "retailerId": "CollectAndGo-Colruyt-FR-BE",
    "type": "website",
    "countryCode": "be",
    "domain": "https://www.collectandgo.be",
    "multistore": false
  },
  {
    "retailerId": "Colruyt-BE",
    "type": "website",
    "countryCode": "be",
    "domain": "https://www.colruyt.be",
    "multistore": false
  },
  {
    "retailerId": "Condis-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.condisline.com",
    "multistore": false
  },
  {
    "retailerId": "Consum-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://tienda.consum.es",
    "multistore": false
  },
  {
    "retailerId": "Continente-PT",
    "type": "website",
    "countryCode": "pt",
    "domain": "https://www.continente.pt",
    "multistore": true
  },
  {
    "retailerId": "Coolshop-DK",
    "type": "website",
    "countryCode": "dk",
    "domain": "https://www.coolshop.dk",
    "multistore": false
  },
  {
    "retailerId": "Coop-CH",
    "type": "website",
    "countryCode": "ch",
    "domain": "https://www.coop.ch",
    "multistore": false
  },
  {
    "retailerId": "Coop-NL",
    "type": "website",
    "countryCode": "nl",
    "domain": "https://www.coop.nl",
    "multistore": true
  },
  {
    "retailerId": "Coop-SE",
    "type": "website",
    "countryCode": "se",
    "domain": "https://www.coop.se",
    "multistore": true
  },
  {
    "retailerId": "Coop-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://shop.coop.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Cornershop-Chedraui-MX",
    "type": "website",
    "countryCode": "mx",
    "domain": "https://web.cornershopapp.com",
    "multistore": false
  },
  {
    "retailerId": "Cornershop-Jumbo-APP-CL",
    "type": "app",
    "countryCode": "cl",
    "domain": "https://cornershopapp.com",
    "multistore": false
  },
  {
    "retailerId": "Cornershop-Jumbo-CL",
    "type": "website",
    "countryCode": "cl",
    "domain": "https://web.cornershopapp.com",
    "multistore": false
  },
  {
    "retailerId": "Cornershop-Lider-CL",
    "type": "website",
    "countryCode": "cl",
    "domain": "https://web.cornershopapp.com",
    "multistore": false
  },
  {
    "retailerId": "Costco",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.costco.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Costco-AU",
    "type": "website",
    "countryCode": "au",
    "domain": "https://www.costco.com.au",
    "multistore": false
  },
  {
    "retailerId": "Costco-Business-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.costcobusinessdelivery.com",
    "multistore": true
  },
  {
    "retailerId": "Costco-EN-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.costco.ca",
    "multistore": false
  },
  {
    "retailerId": "Costco-FR-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.costco.ca",
    "multistore": false
  },
  {
    "retailerId": "Costco-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.costco.com",
    "multistore": true
  },
  {
    "retailerId": "Countdown-APP-NZ",
    "type": "app",
    "countryCode": "nz",
    "domain": "https://www.countdown.co.nz",
    "multistore": false
  },
  {
    "retailerId": "Countdown-NZ",
    "type": "website",
    "countryCode": "nz",
    "domain": "https://www.countdown.co.nz",
    "multistore": true
  },
  {
    "retailerId": "Coupang-KR",
    "type": "website",
    "countryCode": "kr",
    "domain": "https://www.coupang.com",
    "multistore": false
  },
  {
    "retailerId": "Creed-Foodservice-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.creedfoodservice.co.uk",
    "multistore": false
  },
  {
    "retailerId": "CuidaMiMascota-MX",
    "type": "website",
    "countryCode": "mx",
    "domain": "https://tienda.cuidamimascota.com.mx",
    "multistore": false
  },
  {
    "retailerId": "Currys",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.currys.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Currys-IE",
    "type": "website",
    "countryCode": "ie",
    "domain": "https://www.currys.ie",
    "multistore": false
  },
  {
    "retailerId": "DM",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.dm.de",
    "multistore": false
  },
  {
    "retailerId": "DanMurphys-AU",
    "type": "website",
    "countryCode": "au",
    "domain": "https://www.danmurphys.com.au",
    "multistore": false
  },
  {
    "retailerId": "Danube-AR-SA",
    "type": "website",
    "countryCode": "sa",
    "domain": "https://danube.sa",
    "multistore": true
  },
  {
    "retailerId": "Danube-EN-SA",
    "type": "website",
    "countryCode": "sa",
    "domain": "https://danube.sa",
    "multistore": true
  },
  {
    "retailerId": "Daraz-PK",
    "type": "website",
    "countryCode": "pk",
    "domain": "https://www.daraz.pk",
    "multistore": false
  },
  {
    "retailerId": "Deebee-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.deebee.co.uk",
    "multistore": false
  },
  {
    "retailerId": "DekaMarkt-NL",
    "type": "website",
    "countryCode": "nl",
    "domain": "https://www.dekamarkt.nl",
    "multistore": false
  },
  {
    "retailerId": "Delhaize-BE",
    "type": "website",
    "countryCode": "be",
    "domain": "https://www.delhaize.be",
    "multistore": false
  },
  {
    "retailerId": "Delhaize-FR-BE",
    "type": "website",
    "countryCode": "be",
    "domain": "https://www.delhaize.be",
    "multistore": false
  },
  {
    "retailerId": "Deliveroo-Coop-APP-UK",
    "type": "app",
    "countryCode": "uk",
    "domain": "https://deliveroo.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Deliveroo-Sainsburys-APP-UK",
    "type": "app",
    "countryCode": "uk",
    "domain": "https://deliveroo.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Delonghi",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.delonghi.com",
    "multistore": false
  },
  {
    "retailerId": "DetskyMir-RU",
    "type": "website",
    "countryCode": "ru",
    "domain": "https://www.detmir.ru",
    "multistore": false
  },
  {
    "retailerId": "Dia-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.dia.es",
    "multistore": true
  },
  {
    "retailerId": "DiaMinipreco-PT",
    "type": "website",
    "countryCode": "pt",
    "domain": "https://www.minipreco.pt",
    "multistore": false
  },
  {
    "retailerId": "Dillons-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.dillons.com",
    "multistore": true
  },
  {
    "retailerId": "Dmart-Ready-IN",
    "type": "website",
    "countryCode": "in",
    "domain": "https://www.dmart.in",
    "multistore": false
  },
  {
    "retailerId": "Dogman-SE",
    "type": "website",
    "countryCode": "se",
    "domain": "https://www.dogman.com",
    "multistore": false
  },
  {
    "retailerId": "Dollar-General-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.dollargeneral.com",
    "multistore": false
  },
  {
    "retailerId": "DoorDash-Dashmart-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.doordash.com",
    "multistore": false
  },
  {
    "retailerId": "Doordash-7-11-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.doordash.com",
    "multistore": false
  },
  {
    "retailerId": "Doordash-Alberstons-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.doordash.com",
    "multistore": false
  },
  {
    "retailerId": "Doordash-Coles-AU",
    "type": "website",
    "countryCode": "au",
    "domain": "https://www.doordash.com",
    "multistore": false
  },
  {
    "retailerId": "Doordash-Loblaws-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.doordash.com",
    "multistore": false
  },
  {
    "retailerId": "Doordash-Walgreens-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.doordash.com",
    "multistore": false
  },
  {
    "retailerId": "Drakes-AU",
    "type": "website",
    "countryCode": "au",
    "domain": "https://033.drakes.com.au",
    "multistore": false
  },
  {
    "retailerId": "Drizly-MarketviewLiquors-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://drizly.com",
    "multistore": false
  },
  {
    "retailerId": "DunnesStoresGrocery-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.dunnesstoresgrocery.com",
    "multistore": false
  },
  {
    "retailerId": "E-Fast-CR",
    "type": "website",
    "countryCode": "cr",
    "domain": "https://www.efastonline.com",
    "multistore": false
  },
  {
    "retailerId": "EDostavkya-BY",
    "type": "website",
    "countryCode": "by",
    "domain": "https://edostavka.by",
    "multistore": false
  },
  {
    "retailerId": "EFresh-GR",
    "type": "website",
    "countryCode": "gr",
    "domain": "https://www.e-fresh.gr",
    "multistore": false
  },
  {
    "retailerId": "ELeclerc-FR",
    "type": "website",
    "countryCode": "fr",
    "domain": "https://www.e.leclerc",
    "multistore": false
  },
  {
    "retailerId": "Ebay-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.ebay.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Edeka-DE",
    "type": "website",
    "countryCode": "de",
    "domain": "https://e-center-moellenkamp.edeka-shops.de",
    "multistore": false
  },
  {
    "retailerId": "Edeka24-DE",
    "type": "website",
    "countryCode": "de",
    "domain": "https://www.edeka24.de",
    "multistore": false
  },
  {
    "retailerId": "EdekaNord-DE",
    "type": "website",
    "countryCode": "de",
    "domain": "https://schubert-rostock.edeka.shop",
    "multistore": false
  },
  {
    "retailerId": "El-Palaciode-Hierro-MX",
    "type": "website",
    "countryCode": "mx",
    "domain": "https://www.elpalaciodehierro.com",
    "multistore": false
  },
  {
    "retailerId": "ElcorteIngles-PT",
    "type": "website",
    "countryCode": "pt",
    "domain": "https://www.elcorteingles.pt",
    "multistore": false
  },
  {
    "retailerId": "Elcorteingles-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.elcorteingles.es",
    "multistore": true
  },
  {
    "retailerId": "Elcorteingles-Store-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.elcorteingles.es",
    "multistore": false
  },
  {
    "retailerId": "Electroline-CY",
    "type": "website",
    "countryCode": "cy",
    "domain": "https://electroline.com.cy",
    "multistore": false
  },
  {
    "retailerId": "Electronet-GR",
    "type": "website",
    "countryCode": "gr",
    "domain": "https://www.electronet.gr",
    "multistore": false
  },
  {
    "retailerId": "Emag-RO",
    "type": "website",
    "countryCode": "ro",
    "domain": "https://www.emag.ro",
    "multistore": false
  },
  {
    "retailerId": "Eroski-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://supermercado.eroski.es",
    "multistore": false
  },
  {
    "retailerId": "EroskiSupermercado-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://supermercado.eroski.es",
    "multistore": true
  },
  {
    "retailerId": "Escentual-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.escentual.com",
    "multistore": false
  },
  {
    "retailerId": "Esselunga-IT",
    "type": "website",
    "countryCode": "it",
    "domain": "https://www.esselungaacasa.it",
    "multistore": false
  },
  {
    "retailerId": "EuroSupplies-GR",
    "type": "website",
    "countryCode": "gr",
    "domain": "https://www.eurosupplies.com",
    "multistore": false
  },
  {
    "retailerId": "Evinemama-TR",
    "type": "website",
    "countryCode": "tr",
    "domain": "https://www.evinemama.com",
    "multistore": false
  },
  {
    "retailerId": "ExtraFoods-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.extrafoods.ca",
    "multistore": false
  },
  {
    "retailerId": "FairPrice-SG",
    "type": "website",
    "countryCode": "sg",
    "domain": "https://www.fairprice.com.sg",
    "multistore": false
  },
  {
    "retailerId": "Family-Dollar-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.familydollar.com",
    "multistore": false
  },
  {
    "retailerId": "Farmasiet-NO",
    "type": "website",
    "countryCode": "no",
    "domain": "https://www.farmasiet.no",
    "multistore": false
  },
  {
    "retailerId": "Feelunique-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.feelunique.com",
    "multistore": false
  },
  {
    "retailerId": "Fera-PL",
    "type": "website",
    "countryCode": "pl",
    "domain": "https://fera.pl",
    "multistore": false
  },
  {
    "retailerId": "Fiksu-Ruoka-FI",
    "type": "website",
    "countryCode": "fi",
    "domain": "https://www.fiksuruoka.fi",
    "multistore": false
  },
  {
    "retailerId": "Filshill-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://sales.filshill.co.uk",
    "multistore": false
  },
  {
    "retailerId": "FineWineANDGoodSpirits-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.finewineandgoodspirits.com",
    "multistore": false
  },
  {
    "retailerId": "FirstVet-SE",
    "type": "website",
    "countryCode": "se",
    "domain": "https://shop.firstvet.com",
    "multistore": false
  },
  {
    "retailerId": "Flaschenpost-DE",
    "type": "website",
    "countryCode": "de",
    "domain": "https://www.flaschenpost.de",
    "multistore": true
  },
  {
    "retailerId": "Flink-DE",
    "type": "website",
    "countryCode": "de",
    "domain": "https://www.goflink.com",
    "multistore": true
  },
  {
    "retailerId": "Flink-FR",
    "type": "website",
    "countryCode": "fr",
    "domain": "https://www.goflink.com",
    "multistore": false
  },
  {
    "retailerId": "Flink-NL",
    "type": "website",
    "countryCode": "nl",
    "domain": "https://www.goflink.com",
    "multistore": true
  },
  {
    "retailerId": "Flip-KZ",
    "type": "website",
    "countryCode": "kz",
    "domain": "https://www.flip.kz",
    "multistore": false
  },
  {
    "retailerId": "Flipkart-IN",
    "type": "website",
    "countryCode": "in",
    "domain": "https://www.flipkart.com",
    "multistore": false
  },
  {
    "retailerId": "Food4Less-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.food4less.com",
    "multistore": true
  },
  {
    "retailerId": "Foodlion-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://shop.foodlion.com",
    "multistore": true
  },
  {
    "retailerId": "Foodora-Market-FI",
    "type": "website",
    "countryCode": "fi",
    "domain": "https://www.foodora.fi",
    "multistore": false
  },
  {
    "retailerId": "Foodora-Market-SE",
    "type": "website",
    "countryCode": "se",
    "domain": "https://www.foodora.se",
    "multistore": false
  },
  {
    "retailerId": "Fred-Meyer-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.fredmeyer.com",
    "multistore": true
  },
  {
    "retailerId": "FreshDirect-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.freshdirect.com",
    "multistore": false
  },
  {
    "retailerId": "Freshful-RO",
    "type": "website",
    "countryCode": "ro",
    "domain": "https://www.freshful.ro",
    "multistore": false
  },
  {
    "retailerId": "Fressnapf-DE",
    "type": "website",
    "countryCode": "de",
    "domain": "https://www.fressnapf.de",
    "multistore": false
  },
  {
    "retailerId": "Frisco-APP-PL",
    "type": "app",
    "countryCode": "pl",
    "domain": "https://commerce.frisco.pl",
    "multistore": false
  },
  {
    "retailerId": "Frisco-PL",
    "type": "website",
    "countryCode": "pl",
    "domain": "https://www.frisco.pl",
    "multistore": false
  },
  {
    "retailerId": "FrysFood-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.frysfood.com",
    "multistore": true
  },
  {
    "retailerId": "Gamestop-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.gamestop.com",
    "multistore": false
  },
  {
    "retailerId": "Garfield-BY",
    "type": "website",
    "countryCode": "by",
    "domain": "https://garfield.by",
    "multistore": false
  },
  {
    "retailerId": "Gerbes-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.gerbes.com",
    "multistore": false
  },
  {
    "retailerId": "GetSetPet-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.getsetpet.com",
    "multistore": false
  },
  {
    "retailerId": "Getir-APP-UK",
    "type": "app",
    "countryCode": "uk",
    "domain": "https://getirx-client-api-gateway.getirapi.com",
    "multistore": true
  },
  {
    "retailerId": "Giant-Eagle-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://shop.gianteagle.com",
    "multistore": true
  },
  {
    "retailerId": "Glencrest-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.glencrest.co.uk",
    "multistore": false
  },
  {
    "retailerId": "GlobalPetFoods-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://acton.globalpetfoods.com",
    "multistore": false
  },
  {
    "retailerId": "Glovo-Auchan-PL",
    "type": "website",
    "countryCode": "pl",
    "domain": "https://glovoapp.com",
    "multistore": false
  },
  {
    "retailerId": "Glovo-Carrefour-APP-ES",
    "type": "app",
    "countryCode": "es",
    "domain": "https://api.glovoapp.com",
    "multistore": false
  },
  {
    "retailerId": "Glovo-Carrefour-APP-MA",
    "type": "app",
    "countryCode": "ma",
    "domain": "https://api.glovoapp.com",
    "multistore": false
  },
  {
    "retailerId": "Glovo-Express-APP-MA",
    "type": "app",
    "countryCode": "ma",
    "domain": "https://api.glovoapp.com",
    "multistore": false
  },
  {
    "retailerId": "Glovo-Express-RO",
    "type": "website",
    "countryCode": "ro",
    "domain": "https://glovoapp.com",
    "multistore": false
  },
  {
    "retailerId": "Glovo-Marjane-APP-MA",
    "type": "app",
    "countryCode": "ma",
    "domain": "https://api.glovoapp.com",
    "multistore": false
  },
  {
    "retailerId": "Glovo-Marjane-MA",
    "type": "website",
    "countryCode": "ma",
    "domain": "https://glovoapp.com",
    "multistore": false
  },
  {
    "retailerId": "Glovo-SuperGlovo-APP-ES",
    "type": "app",
    "countryCode": "es",
    "domain": "https://api.glovoapp.com",
    "multistore": false
  },
  {
    "retailerId": "Gopuff-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.gopuff.com",
    "multistore": false
  },
  {
    "retailerId": "Gopuff-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.gopuff.com",
    "multistore": true
  },
  {
    "retailerId": "GrabMart-PH",
    "type": "website",
    "countryCode": "ph",
    "domain": "https://mart.grab.com",
    "multistore": false
  },
  {
    "retailerId": "Gurkerl-AT",
    "type": "website",
    "countryCode": "at",
    "domain": "https://www.gurkerl.at",
    "multistore": false
  },
  {
    "retailerId": "HEB",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.heb.com",
    "multistore": true
  },
  {
    "retailerId": "HEB-Plus-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.heb.com",
    "multistore": false
  },
  {
    "retailerId": "Haggen-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.haggen.com",
    "multistore": true
  },
  {
    "retailerId": "Hannaford-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.hannaford.com",
    "multistore": true
  },
  {
    "retailerId": "HarrisTeeter-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.harristeeter.com",
    "multistore": true
  },
  {
    "retailerId": "HeadsUpForTails-IN",
    "type": "website",
    "countryCode": "in",
    "domain": "https://headsupfortails.com",
    "multistore": false
  },
  {
    "retailerId": "Hebe-PL",
    "type": "website",
    "countryCode": "pl",
    "domain": "https://www.hebe.pl",
    "multistore": false
  },
  {
    "retailerId": "Heineken-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://direct.heineken.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Hemkop-SE",
    "type": "website",
    "countryCode": "se",
    "domain": "https://www.hemkop.se",
    "multistore": true
  },
  {
    "retailerId": "Hepsiburada-TR",
    "type": "website",
    "countryCode": "tr",
    "domain": "https://www.hepsiburada.com",
    "multistore": false
  },
  {
    "retailerId": "Hipercor-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.hipercor.es",
    "multistore": false
  },
  {
    "retailerId": "Hiperdino-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.hiperdino.es",
    "multistore": false
  },
  {
    "retailerId": "Holland-Barrett",
    "type": "website",
    "countryCode": "barrett",
    "domain": "https://www.hollandandbarrett.com",
    "multistore": false
  },
  {
    "retailerId": "Home-Depot-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.homedepot.ca",
    "multistore": true
  },
  {
    "retailerId": "Home-Depot-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.homedepot.com",
    "multistore": true
  },
  {
    "retailerId": "Hoogvliet-NL",
    "type": "website",
    "countryCode": "nl",
    "domain": "https://www.hoogvliet.com",
    "multistore": false
  },
  {
    "retailerId": "Hyvee-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.hy-vee.com",
    "multistore": false
  },
  {
    "retailerId": "ICA-SE",
    "type": "website",
    "countryCode": "se",
    "domain": "https://handlaprivatkund.ica.se",
    "multistore": true
  },
  {
    "retailerId": "IGA-AU",
    "type": "website",
    "countryCode": "au",
    "domain": "https://www.igashop.com.au",
    "multistore": false
  },
  {
    "retailerId": "Iceland",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.iceland.co.uk",
    "multistore": true
  },
  {
    "retailerId": "Ifood-Cobasi-BR",
    "type": "website",
    "countryCode": "br",
    "domain": "https://www.ifood.com.br",
    "multistore": false
  },
  {
    "retailerId": "Iga-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.iga.net",
    "multistore": false
  },
  {
    "retailerId": "Instacart-Albertsons-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.instacart.com",
    "multistore": false
  },
  {
    "retailerId": "Instacart-Aldi-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.instacart.com",
    "multistore": false
  },
  {
    "retailerId": "Instacart-CVS-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.instacart.com",
    "multistore": false
  },
  {
    "retailerId": "Instacart-Costco-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.instacart.ca",
    "multistore": false
  },
  {
    "retailerId": "Instacart-Costco-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.instacart.com",
    "multistore": false
  },
  {
    "retailerId": "Instacart-Kroger-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.instacart.com",
    "multistore": false
  },
  {
    "retailerId": "Instacart-Loblaws-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.instacart.ca",
    "multistore": false
  },
  {
    "retailerId": "Instacart-Petco-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.instacart.com",
    "multistore": false
  },
  {
    "retailerId": "Instacart-Publix-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.instacart.com",
    "multistore": false
  },
  {
    "retailerId": "Instacart-Safeway-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.instacart.com",
    "multistore": false
  },
  {
    "retailerId": "Instacart-SamsClub-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.instacart.com",
    "multistore": false
  },
  {
    "retailerId": "Instacart-Sprouts-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.instacart.com",
    "multistore": false
  },
  {
    "retailerId": "Instacart-TotalWineANDMore-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.instacart.com",
    "multistore": false
  },
  {
    "retailerId": "Instacart-Walmart-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.instacart.ca",
    "multistore": false
  },
  {
    "retailerId": "Instacart-Walmart-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.instacart.com",
    "multistore": false
  },
  {
    "retailerId": "Instacart-Wegmans-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.instacart.com",
    "multistore": false
  },
  {
    "retailerId": "Instacart-WoodmansFood-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.instacart.com",
    "multistore": false
  },
  {
    "retailerId": "Intermarche-Drive-FR",
    "type": "website",
    "countryCode": "fr",
    "domain": "https://www.intermarche.com",
    "multistore": false
  },
  {
    "retailerId": "Ishop-New-World-NZ",
    "type": "website",
    "countryCode": "nz",
    "domain": "https://www.newworld.co.nz",
    "multistore": true
  },
  {
    "retailerId": "Istegelsin-APP-TR",
    "type": "app",
    "countryCode": "tr",
    "domain": "https://prod.fasapi.net",
    "multistore": false
  },
  {
    "retailerId": "Istegelsin-TR",
    "type": "website",
    "countryCode": "tr",
    "domain": "https://www.istegelsin.com",
    "multistore": false
  },
  {
    "retailerId": "JJ-Foodservice-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.jjfoodservice.com",
    "multistore": false
  },
  {
    "retailerId": "JeanCoutu-EN-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.jeancoutu.com",
    "multistore": false
  },
  {
    "retailerId": "JewelOsco-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.jewelosco.com",
    "multistore": true
  },
  {
    "retailerId": "John-Lewis",
    "type": "website",
    "countryCode": "lewis",
    "domain": "https://www.johnlewis.com",
    "multistore": false
  },
  {
    "retailerId": "JohnBell-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://johnbellcroyden.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Joker-NO",
    "type": "website",
    "countryCode": "no",
    "domain": "https://joker.no",
    "multistore": true
  },
  {
    "retailerId": "Jollyes-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.jollyes.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Joueclub-FR",
    "type": "website",
    "countryCode": "fr",
    "domain": "https://www.joueclub.fr",
    "multistore": true
  },
  {
    "retailerId": "Juguettos-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://juguettos.com",
    "multistore": false
  },
  {
    "retailerId": "Jumbo-CL",
    "type": "website",
    "countryCode": "cl",
    "domain": "https://www.jumbo.cl",
    "multistore": false
  },
  {
    "retailerId": "Jumbo-CO",
    "type": "website",
    "countryCode": "co",
    "domain": "https://www.tiendasjumbo.co",
    "multistore": false
  },
  {
    "retailerId": "Jumbo-NL",
    "type": "website",
    "countryCode": "nl",
    "domain": "https://www.jumbo.com",
    "multistore": true
  },
  {
    "retailerId": "Jumia-APP-MA",
    "type": "app",
    "countryCode": "ma",
    "domain": "https://www.jumia.ma",
    "multistore": false
  },
  {
    "retailerId": "Jumia-KE",
    "type": "website",
    "countryCode": "ke",
    "domain": "https://www.jumia.co.ke",
    "multistore": false
  },
  {
    "retailerId": "Jumia-MA",
    "type": "website",
    "countryCode": "ma",
    "domain": "https://www.jumia.ma",
    "multistore": false
  },
  {
    "retailerId": "Jush!-APP-PL",
    "type": "app",
    "countryCode": "pl",
    "domain": "https://api.prod.lait.app",
    "multistore": false
  },
  {
    "retailerId": "JustEat-NL",
    "type": "website",
    "countryCode": "nl",
    "domain": "https://www.thuisbezorgd.nl",
    "multistore": false
  },
  {
    "retailerId": "JustEat-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.just-eat.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Justdogs-IN",
    "type": "website",
    "countryCode": "in",
    "domain": "https://www.justdogsstore.com",
    "multistore": false
  },
  {
    "retailerId": "KRuoka-CityMarket-FI",
    "type": "website",
    "countryCode": "fi",
    "domain": "https://www.k-ruoka.fi",
    "multistore": true
  },
  {
    "retailerId": "KRuoka-Market-FI",
    "type": "website",
    "countryCode": "fi",
    "domain": "https://www.k-ruoka.fi",
    "multistore": true
  },
  {
    "retailerId": "KRuoka-SuperMarket-FI",
    "type": "website",
    "countryCode": "fi",
    "domain": "https://www.k-ruoka.fi",
    "multistore": true
  },
  {
    "retailerId": "Kaufland-DE",
    "type": "website",
    "countryCode": "de",
    "domain": "https://www.kaufland.de",
    "multistore": true
  },
  {
    "retailerId": "Kaupat-Alepa-FI",
    "type": "website",
    "countryCode": "fi",
    "domain": "https://www.s-kaupat.fi",
    "multistore": false
  },
  {
    "retailerId": "Kaupat-Prisma-FI",
    "type": "website",
    "countryCode": "fi",
    "domain": "https://www.s-kaupat.fi",
    "multistore": true
  },
  {
    "retailerId": "Kaupat-Smarket-FI",
    "type": "website",
    "countryCode": "fi",
    "domain": "https://www.s-kaupat.fi",
    "multistore": true
  },
  {
    "retailerId": "Kauppahalli24-FI",
    "type": "website",
    "countryCode": "fi",
    "domain": "https://www.kauppahalli24.fi",
    "multistore": false
  },
  {
    "retailerId": "Kenwoodworld",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.kenwoodworld.com",
    "multistore": false
  },
  {
    "retailerId": "King-Jouet-FR",
    "type": "website",
    "countryCode": "fr",
    "domain": "https://yj3fse95rz-dsn.algolia.net",
    "multistore": true
  },
  {
    "retailerId": "KingSoopers-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.kingsoopers.com",
    "multistore": true
  },
  {
    "retailerId": "Kings-Food-Market-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.kingsfoodmarkets.com",
    "multistore": true
  },
  {
    "retailerId": "Kiwoko-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.kiwoko.com",
    "multistore": false
  },
  {
    "retailerId": "Klikindomaret-ID",
    "type": "website",
    "countryCode": "id",
    "domain": "https://www.klikindomaret.com",
    "multistore": false
  },
  {
    "retailerId": "Kmart-AU",
    "type": "website",
    "countryCode": "au",
    "domain": "https://www.kmart.com.au",
    "multistore": false
  },
  {
    "retailerId": "Knuspr-DE",
    "type": "website",
    "countryCode": "de",
    "domain": "https://www.knuspr.de",
    "multistore": true
  },
  {
    "retailerId": "Kolaymama-TR",
    "type": "website",
    "countryCode": "tr",
    "domain": "https://www.kolaymama.com",
    "multistore": false
  },
  {
    "retailerId": "Komus-RU",
    "type": "website",
    "countryCode": "ru",
    "domain": "https://www.komus.ru",
    "multistore": false
  },
  {
    "retailerId": "KrakVet-PL",
    "type": "website",
    "countryCode": "pl",
    "domain": "https://www.krakvet.pl",
    "multistore": false
  },
  {
    "retailerId": "Kritikos-GR",
    "type": "website",
    "countryCode": "gr",
    "domain": "https://kritikos-sm.gr",
    "multistore": false
  },
  {
    "retailerId": "Kroger-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.kroger.com",
    "multistore": true
  },
  {
    "retailerId": "Laika-CO",
    "type": "website",
    "countryCode": "co",
    "domain": "https://laika.com.co",
    "multistore": false
  },
  {
    "retailerId": "Laika-MX",
    "type": "website",
    "countryCode": "mx",
    "domain": "https://laika.com.mx",
    "multistore": false
  },
  {
    "retailerId": "Laika-Mas-Cotas-CL",
    "type": "website",
    "countryCode": "cl",
    "domain": "https://laikamascotas.cl",
    "multistore": false
  },
  {
    "retailerId": "Lakeland-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.lakeland.co.uk",
    "multistore": false
  },
  {
    "retailerId": "LazMall-PH",
    "type": "website",
    "countryCode": "ph",
    "domain": "https://www.lazada.com.ph",
    "multistore": false
  },
  {
    "retailerId": "LazMall-TH",
    "type": "website",
    "countryCode": "th",
    "domain": "https://www.lazada.co.th",
    "multistore": false
  },
  {
    "retailerId": "LazMall-VN",
    "type": "website",
    "countryCode": "vn",
    "domain": "https://www.lazada.vn",
    "multistore": false
  },
  {
    "retailerId": "LazMart-PH",
    "type": "website",
    "countryCode": "ph",
    "domain": "https://www.lazada.com.ph",
    "multistore": false
  },
  {
    "retailerId": "Lazada-ID",
    "type": "website",
    "countryCode": "id",
    "domain": "https://www.lazada.co.id",
    "multistore": false
  },
  {
    "retailerId": "Lazada-MY",
    "type": "website",
    "countryCode": "my",
    "domain": "https://www.lazada.com.my",
    "multistore": false
  },
  {
    "retailerId": "Lazada-PH",
    "type": "website",
    "countryCode": "ph",
    "domain": "https://www.lazada.com.ph",
    "multistore": false
  },
  {
    "retailerId": "Lazada-SG",
    "type": "website",
    "countryCode": "sg",
    "domain": "https://www.lazada.sg",
    "multistore": false
  },
  {
    "retailerId": "Lazada-TH",
    "type": "website",
    "countryCode": "th",
    "domain": "https://www.lazada.co.th",
    "multistore": false
  },
  {
    "retailerId": "Lazada-VN",
    "type": "website",
    "countryCode": "vn",
    "domain": "https://www.lazada.vn",
    "multistore": false
  },
  {
    "retailerId": "Le-Clerc",
    "type": "website",
    "countryCode": "clerc",
    "domain": "https://fd2-courses.leclercdrive.fr",
    "multistore": true
  },
  {
    "retailerId": "Lider-CL",
    "type": "website",
    "countryCode": "cl",
    "domain": "https://www.lider.cl",
    "multistore": false
  },
  {
    "retailerId": "Lidl-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.lidl.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Lisek-PL",
    "type": "website",
    "countryCode": "pl",
    "domain": "https://sklep.lisek.app",
    "multistore": false
  },
  {
    "retailerId": "Liverpool-MX",
    "type": "website",
    "countryCode": "mx",
    "domain": "https://www.liverpool.com.mx",
    "multistore": false
  },
  {
    "retailerId": "Lloyds-Pharmacy",
    "type": "website",
    "countryCode": "pharmacy",
    "domain": "https://lloydspharmacy.com",
    "multistore": false
  },
  {
    "retailerId": "Loblaws-EN-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.loblaws.ca",
    "multistore": true
  },
  {
    "retailerId": "Lookfantastic-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.lookfantastic.com",
    "multistore": false
  },
  {
    "retailerId": "Lotus-TH",
    "type": "website",
    "countryCode": "th",
    "domain": "https://www.lotuss.com",
    "multistore": false
  },
  {
    "retailerId": "Lowes-Foods-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://shop.lowesfoods.com",
    "multistore": true
  },
  {
    "retailerId": "Lowes-Home-Improvement-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.lowes.ca",
    "multistore": true
  },
  {
    "retailerId": "Lowes-Home-Improvement-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.lowes.com",
    "multistore": true
  },
  {
    "retailerId": "Lulu-AE",
    "type": "website",
    "countryCode": "ae",
    "domain": "https://www.luluhypermarket.com",
    "multistore": true
  },
  {
    "retailerId": "LupaOnline-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.lupaonline.com",
    "multistore": false
  },
  {
    "retailerId": "Magalu-BR",
    "type": "website",
    "countryCode": "br",
    "domain": "https://www.magazineluiza.com.br",
    "multistore": false
  },
  {
    "retailerId": "Makro-ZA",
    "type": "website",
    "countryCode": "za",
    "domain": "https://www.makro.co.za",
    "multistore": true
  },
  {
    "retailerId": "Mall-CZ",
    "type": "website",
    "countryCode": "cz",
    "domain": "https://www.mall.cz",
    "multistore": false
  },
  {
    "retailerId": "Marianos-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.marianos.com",
    "multistore": true
  },
  {
    "retailerId": "MarjaneDirectDelivery-MA",
    "type": "website",
    "countryCode": "ma",
    "domain": "https://www.marjane.ma",
    "multistore": false
  },
  {
    "retailerId": "Market-Street-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.marketstreetunited.com",
    "multistore": true
  },
  {
    "retailerId": "Marshalls-IN",
    "type": "website",
    "countryCode": "in",
    "domain": "https://www.marshallspetzone.com",
    "multistore": false
  },
  {
    "retailerId": "MartinSevera-SE",
    "type": "website",
    "countryCode": "se",
    "domain": "https://www.martinservera.se",
    "multistore": false
  },
  {
    "retailerId": "MasYmas-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://tienda.masymas.com",
    "multistore": false
  },
  {
    "retailerId": "Masoutis-GR",
    "type": "website",
    "countryCode": "gr",
    "domain": "https://eshop.masoutis.gr",
    "multistore": false
  },
  {
    "retailerId": "Master-Of-Malt",
    "type": "website",
    "countryCode": "malt",
    "domain": "https://www.masterofmalt.com",
    "multistore": false
  },
  {
    "retailerId": "MatHem-SE",
    "type": "website",
    "countryCode": "se",
    "domain": "https://www.mathem.se",
    "multistore": false
  },
  {
    "retailerId": "Matsmart-FI",
    "type": "website",
    "countryCode": "fi",
    "domain": "https://www.matsmart.fi",
    "multistore": false
  },
  {
    "retailerId": "Matthew-Clark-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.matthewclarklive.com",
    "multistore": false
  },
  {
    "retailerId": "MaxAndDrau-PL",
    "type": "website",
    "countryCode": "pl",
    "domain": "https://www.maxandmrau.pl",
    "multistore": false
  },
  {
    "retailerId": "MaxiZoo-DK",
    "type": "website",
    "countryCode": "dk",
    "domain": "https://www.maxizoo.dk",
    "multistore": false
  },
  {
    "retailerId": "MaxiZoo-PL",
    "type": "website",
    "countryCode": "pl",
    "domain": "https://www.maxizoo.pl",
    "multistore": false
  },
  {
    "retailerId": "Medicanimal",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.pet-supermarket.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Medpets-NL",
    "type": "website",
    "countryCode": "nl",
    "domain": "https://www.medpets.nl",
    "multistore": false
  },
  {
    "retailerId": "Mega-Image-RO",
    "type": "website",
    "countryCode": "ro",
    "domain": "https://www.mega-image.ro",
    "multistore": false
  },
  {
    "retailerId": "Meijer-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.meijer.com",
    "multistore": true
  },
  {
    "retailerId": "MenuLog-AU",
    "type": "website",
    "countryCode": "au",
    "domain": "https://www.menulog.com.au",
    "multistore": false
  },
  {
    "retailerId": "Meny-NO",
    "type": "website",
    "countryCode": "no",
    "domain": "https://meny.no",
    "multistore": true
  },
  {
    "retailerId": "Mercado-Libre-MX",
    "type": "website",
    "countryCode": "mx",
    "domain": "https://listado.mercadolibre.com.mx",
    "multistore": false
  },
  {
    "retailerId": "MercadoLibre-AR",
    "type": "website",
    "countryCode": "ar",
    "domain": "https://listado.mercadolibre.com.ar",
    "multistore": false
  },
  {
    "retailerId": "MercadoLibre-CL",
    "type": "website",
    "countryCode": "cl",
    "domain": "https://listado.mercadolibre.cl",
    "multistore": false
  },
  {
    "retailerId": "MercadoLibre-CO",
    "type": "website",
    "countryCode": "co",
    "domain": "https://listado.mercadolibre.com.co",
    "multistore": false
  },
  {
    "retailerId": "Mercadona-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://tienda.mercadona.es",
    "multistore": false
  },
  {
    "retailerId": "Mercadona-Telecompra-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.telecompra.mercadona.es",
    "multistore": false
  },
  {
    "retailerId": "Merqueo-CO",
    "type": "website",
    "countryCode": "co",
    "domain": "https://merqueo.com",
    "multistore": false
  },
  {
    "retailerId": "Metro-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.metro.ca",
    "multistore": false
  },
  {
    "retailerId": "Metro-DE",
    "type": "website",
    "countryCode": "de",
    "domain": "https://produkte.metro.de",
    "multistore": true
  },
  {
    "retailerId": "Metro-Ontario-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.metro.ca",
    "multistore": false
  },
  {
    "retailerId": "Metro-PK",
    "type": "website",
    "countryCode": "pk",
    "domain": "https://metro-online.pk",
    "multistore": false
  },
  {
    "retailerId": "Metro-Quebec-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.metro.ca",
    "multistore": false
  },
  {
    "retailerId": "Metro-Quebec-FR-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.metro.ca",
    "multistore": false
  },
  {
    "retailerId": "MetroMarket-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.metromarket.net",
    "multistore": true
  },
  {
    "retailerId": "Migroos-CH",
    "type": "website",
    "countryCode": "ch",
    "domain": "https://www.migros.ch",
    "multistore": true
  },
  {
    "retailerId": "MigrosSanal-TR",
    "type": "website",
    "countryCode": "tr",
    "domain": "https://www.migros.com.tr",
    "multistore": false
  },
  {
    "retailerId": "MisPichos-AR",
    "type": "website",
    "countryCode": "ar",
    "domain": "https://mispichos.com",
    "multistore": false
  },
  {
    "retailerId": "Miscota-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.miscota.es",
    "multistore": false
  },
  {
    "retailerId": "Mistermascotas-MX",
    "type": "website",
    "countryCode": "mx",
    "domain": "https://www.mistermascotas.com.mx",
    "multistore": false
  },
  {
    "retailerId": "Mondou-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.mondou.com",
    "multistore": false
  },
  {
    "retailerId": "Monster",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.monsterpetsupplies.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Morrisons",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://groceries.morrisons.com",
    "multistore": false
  },
  {
    "retailerId": "Morrisons-APP-UK",
    "type": "app",
    "countryCode": "uk",
    "domain": "https://mobile.groceries.morrisons.com",
    "multistore": false
  },
  {
    "retailerId": "Mueller-DE",
    "type": "website",
    "countryCode": "de",
    "domain": "https://www.mueller.de",
    "multistore": true
  },
  {
    "retailerId": "Musti-NO",
    "type": "website",
    "countryCode": "no",
    "domain": "https://www.musti.no",
    "multistore": false
  },
  {
    "retailerId": "MustiJaMirri-FI",
    "type": "website",
    "countryCode": "fi",
    "domain": "https://www.mustijamirri.fi",
    "multistore": false
  },
  {
    "retailerId": "My-Pet-Warehouse-AU",
    "type": "website",
    "countryCode": "au",
    "domain": "https://www.mypetwarehouse.com.au",
    "multistore": false
  },
  {
    "retailerId": "MyTime-DE",
    "type": "website",
    "countryCode": "de",
    "domain": "https://www.mytime.de",
    "multistore": false
  },
  {
    "retailerId": "MyToys-DE",
    "type": "website",
    "countryCode": "de",
    "domain": "https://www.mytoys.de",
    "multistore": false
  },
  {
    "retailerId": "Naivas-KE",
    "type": "website",
    "countryCode": "ke",
    "domain": "https://naivas.online",
    "multistore": false
  },
  {
    "retailerId": "Nana-APP-SA",
    "type": "app",
    "countryCode": "sa",
    "domain": "https://admin.nana.sa",
    "multistore": false
  },
  {
    "retailerId": "Natural-Life-AR",
    "type": "website",
    "countryCode": "ar",
    "domain": "https://www.natural-life.com.ar",
    "multistore": false
  },
  {
    "retailerId": "Naver-KR",
    "type": "website",
    "countryCode": "kr",
    "domain": "https://search.shopping.naver.com",
    "multistore": false
  },
  {
    "retailerId": "Nemlig-DK",
    "type": "website",
    "countryCode": "dk",
    "domain": "https://www.nemlig.com",
    "multistore": false
  },
  {
    "retailerId": "Next-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.next.co.uk",
    "multistore": false
  },
  {
    "retailerId": "NoFrills-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.nofrills.ca",
    "multistore": false
  },
  {
    "retailerId": "Nocibe-FR",
    "type": "website",
    "countryCode": "fr",
    "domain": "https://www.nocibe.fr",
    "multistore": false
  },
  {
    "retailerId": "Noon-AE",
    "type": "website",
    "countryCode": "ae",
    "domain": "https://daily.noon.com",
    "multistore": true
  },
  {
    "retailerId": "Nordstrom-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.nordstrom.com",
    "multistore": true
  },
  {
    "retailerId": "NormanGoodfellows-ZA",
    "type": "website",
    "countryCode": "za",
    "domain": "https://www.ngf.co.za",
    "multistore": false
  },
  {
    "retailerId": "Notino-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.notino.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Novapet-CL",
    "type": "website",
    "countryCode": "cl",
    "domain": "https://www.novapet.cl",
    "multistore": false
  },
  {
    "retailerId": "ODA-NO",
    "type": "website",
    "countryCode": "no",
    "domain": "https://oda.com",
    "multistore": false
  },
  {
    "retailerId": "Ocado",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.ocado.com",
    "multistore": false
  },
  {
    "retailerId": "Ocado-APP-UK",
    "type": "app",
    "countryCode": "uk",
    "domain": "https://mobile.ocado.com",
    "multistore": false
  },
  {
    "retailerId": "Ocado-Zoom-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://zoom.ocado.com",
    "multistore": false
  },
  {
    "retailerId": "Oda-FI",
    "type": "website",
    "countryCode": "fi",
    "domain": "https://oda.com",
    "multistore": false
  },
  {
    "retailerId": "Office-Depot-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.officedepot.com",
    "multistore": false
  },
  {
    "retailerId": "Olimpica-CO",
    "type": "website",
    "countryCode": "co",
    "domain": "https://www.olimpica.com",
    "multistore": false
  },
  {
    "retailerId": "Ozon-RU",
    "type": "website",
    "countryCode": "ru",
    "domain": "https://www.ozon.ru",
    "multistore": true
  },
  {
    "retailerId": "PLC-MY",
    "type": "website",
    "countryCode": "my",
    "domain": "https://www.petloverscentre.com.my",
    "multistore": false
  },
  {
    "retailerId": "PNP-ZA",
    "type": "website",
    "countryCode": "za",
    "domain": "https://www.pnp.co.za",
    "multistore": true
  },
  {
    "retailerId": "Pak-N-Save-Online-NZ",
    "type": "website",
    "countryCode": "nz",
    "domain": "https://www.paknsave.co.nz",
    "multistore": true
  },
  {
    "retailerId": "Panda-Click-APP-SA",
    "type": "app",
    "countryCode": "sa",
    "domain": "https://api.panda-click.com",
    "multistore": false
  },
  {
    "retailerId": "Pandamart-APP-MY",
    "type": "app",
    "countryCode": "my",
    "domain": "https://disco.deliveryhero.io",
    "multistore": false
  },
  {
    "retailerId": "Pandamart-APP-PH",
    "type": "app",
    "countryCode": "ph",
    "domain": "https://disco.deliveryhero.io",
    "multistore": false
  },
  {
    "retailerId": "Pandamart-PK",
    "type": "website",
    "countryCode": "pk",
    "domain": "https://www.foodpanda.pk",
    "multistore": false
  },
  {
    "retailerId": "Pandamart-SG",
    "type": "website",
    "countryCode": "sg",
    "domain": "https://www.foodpanda.sg",
    "multistore": false
  },
  {
    "retailerId": "Pandamart-TH",
    "type": "website",
    "countryCode": "th",
    "domain": "https://www.foodpanda.co.th",
    "multistore": false
  },
  {
    "retailerId": "Parfetts-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://online.parfetts.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Pavilions-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.pavilions.com",
    "multistore": false
  },
  {
    "retailerId": "Payless-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.pay-less.com",
    "multistore": true
  },
  {
    "retailerId": "Paypay-Charm-JP",
    "type": "website",
    "countryCode": "jp",
    "domain": "https://shopping.yahoo.co.jp",
    "multistore": false
  },
  {
    "retailerId": "Peppy-JP",
    "type": "website",
    "countryCode": "jp",
    "domain": "https://www.peppynet.com",
    "multistore": false
  },
  {
    "retailerId": "Pet-Barn-AU",
    "type": "website",
    "countryCode": "au",
    "domain": "https://www.petbarn.com.au",
    "multistore": false
  },
  {
    "retailerId": "Pet-Circle-AU",
    "type": "website",
    "countryCode": "au",
    "domain": "https://www.petcircle.com.au",
    "multistore": false
  },
  {
    "retailerId": "Pet-Express-PH",
    "type": "website",
    "countryCode": "ph",
    "domain": "https://www.petexpress.com.ph",
    "multistore": false
  },
  {
    "retailerId": "Pet-NZ",
    "type": "website",
    "countryCode": "nz",
    "domain": "https://www.pet.co.nz",
    "multistore": false
  },
  {
    "retailerId": "Pet-Stock-AU",
    "type": "website",
    "countryCode": "au",
    "domain": "https://www.petstock.com.au",
    "multistore": false
  },
  {
    "retailerId": "Pet-Supermarket-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.pet-supermarket.co.uk",
    "multistore": false
  },
  {
    "retailerId": "PetCulture-AU",
    "type": "website",
    "countryCode": "au",
    "domain": "https://www.petculture.com.au",
    "multistore": false
  },
  {
    "retailerId": "PetDirect-NZ",
    "type": "website",
    "countryCode": "nz",
    "domain": "https://petdirect.co.nz",
    "multistore": false
  },
  {
    "retailerId": "PetDrugsOnline-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.petdrugsonline.co.uk",
    "multistore": false
  },
  {
    "retailerId": "PetFlow-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.petflow.com",
    "multistore": false
  },
  {
    "retailerId": "PetPlace-NL",
    "type": "website",
    "countryCode": "nl",
    "domain": "https://www.petsplace.nl",
    "multistore": false
  },
  {
    "retailerId": "PetPlanet-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.petplanet.co.uk",
    "multistore": false
  },
  {
    "retailerId": "PetSense-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.petsense.com",
    "multistore": true
  },
  {
    "retailerId": "PetShop-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.petshop.co.uk",
    "multistore": false
  },
  {
    "retailerId": "PetSuppliesPlus-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.petsuppliesplus.com",
    "multistore": true
  },
  {
    "retailerId": "PetXL-NO",
    "type": "website",
    "countryCode": "no",
    "domain": "https://www.petxl.no",
    "multistore": false
  },
  {
    "retailerId": "Petburada-TR",
    "type": "website",
    "countryCode": "tr",
    "domain": "https://www.petburada.com",
    "multistore": false
  },
  {
    "retailerId": "Petco-CL",
    "type": "website",
    "countryCode": "cl",
    "domain": "https://www.petco.cl",
    "multistore": false
  },
  {
    "retailerId": "Petco-MX",
    "type": "website",
    "countryCode": "mx",
    "domain": "https://www.petco.com.mx",
    "multistore": false
  },
  {
    "retailerId": "PetenKoriatarvike-FI",
    "type": "website",
    "countryCode": "fi",
    "domain": "https://www.petenkoiratarvike.com",
    "multistore": false
  },
  {
    "retailerId": "Pethappy-CL",
    "type": "website",
    "countryCode": "cl",
    "domain": "https://www.pethappy.cl",
    "multistore": false
  },
  {
    "retailerId": "Petihtiyac-TR",
    "type": "website",
    "countryCode": "tr",
    "domain": "https://www.petihtiyac.com",
    "multistore": false
  },
  {
    "retailerId": "Petlebi-TR",
    "type": "website",
    "countryCode": "tr",
    "domain": "https://www.petlebi.com",
    "multistore": false
  },
  {
    "retailerId": "Petmekan-TR",
    "type": "website",
    "countryCode": "tr",
    "domain": "https://www.petmekan.com",
    "multistore": false
  },
  {
    "retailerId": "Pets-At-Home",
    "type": "website",
    "countryCode": "home",
    "domain": "https://www.petsathome.com",
    "multistore": false
  },
  {
    "retailerId": "Petsmart-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.petsmart.ca",
    "multistore": false
  },
  {
    "retailerId": "Petsmart-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.petsmart.com",
    "multistore": true
  },
  {
    "retailerId": "Petsy-IN",
    "type": "website",
    "countryCode": "in",
    "domain": "https://www.petsy.online",
    "multistore": false
  },
  {
    "retailerId": "Petvalu-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.petvalu.ca",
    "multistore": false
  },
  {
    "retailerId": "Petz-BR",
    "type": "website",
    "countryCode": "br",
    "domain": "https://www.petz.com.br",
    "multistore": false
  },
  {
    "retailerId": "PickNSave-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.picknsave.com",
    "multistore": true
  },
  {
    "retailerId": "Picnic-DE",
    "type": "website",
    "countryCode": "de",
    "domain": "https://storefront-prod.de.picnicinternational.com",
    "multistore": false
  },
  {
    "retailerId": "PingoDoceMercadao-PT",
    "type": "website",
    "countryCode": "pt",
    "domain": "https://mercadao.pt",
    "multistore": false
  },
  {
    "retailerId": "Plus-NL",
    "type": "website",
    "countryCode": "nl",
    "domain": "https://www.plus.nl",
    "multistore": true
  },
  {
    "retailerId": "Poiesz-NL",
    "type": "website",
    "countryCode": "nl",
    "domain": "https://webwinkel.poiesz-supermarkten.nl",
    "multistore": false
  },
  {
    "retailerId": "Potboy-MY",
    "type": "website",
    "countryCode": "my",
    "domain": "https://potboy.com.my",
    "multistore": false
  },
  {
    "retailerId": "Privab-SE",
    "type": "website",
    "countryCode": "se",
    "domain": "https://www.privab.se",
    "multistore": false
  },
  {
    "retailerId": "Proshop-DK",
    "type": "website",
    "countryCode": "dk",
    "domain": "https://www.proshop.dk",
    "multistore": false
  },
  {
    "retailerId": "Provigo-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.provigo.ca",
    "multistore": false
  },
  {
    "retailerId": "Public-CY",
    "type": "website",
    "countryCode": "cy",
    "domain": "https://www.public.cy",
    "multistore": false
  },
  {
    "retailerId": "QFC-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.qfc.com",
    "multistore": false
  },
  {
    "retailerId": "Quick-Market-APP-SA",
    "type": "app",
    "countryCode": "sa",
    "domain": "https://api.whyzr.com",
    "multistore": false
  },
  {
    "retailerId": "Rakuten-Charm-JP",
    "type": "website",
    "countryCode": "jp",
    "domain": "https://item.rakuten.co.jp",
    "multistore": false
  },
  {
    "retailerId": "Rakuten-Hokkkaido-JP",
    "type": "website",
    "countryCode": "jp",
    "domain": "https://item.rakuten.co.jp",
    "multistore": false
  },
  {
    "retailerId": "Rakuten-JP",
    "type": "website",
    "countryCode": "jp",
    "domain": "https://item.rakuten.co.jp",
    "multistore": false
  },
  {
    "retailerId": "Rakuten-Koji-JP",
    "type": "website",
    "countryCode": "jp",
    "domain": "https://item.rakuten.co.jp",
    "multistore": false
  },
  {
    "retailerId": "Rakuten-Nyanzaq-JP",
    "type": "website",
    "countryCode": "jp",
    "domain": "https://item.rakuten.co.jp",
    "multistore": false
  },
  {
    "retailerId": "Rakuten-Rakuten24-JP",
    "type": "website",
    "countryCode": "jp",
    "domain": "https://item.rakuten.co.jp",
    "multistore": false
  },
  {
    "retailerId": "Rakuten-Seiyu-JP",
    "type": "website",
    "countryCode": "jp",
    "domain": "https://sm.rakuten.co.jp",
    "multistore": false
  },
  {
    "retailerId": "Rakuten-Tech21-JP",
    "type": "website",
    "countryCode": "jp",
    "domain": "https://item.rakuten.co.jp",
    "multistore": false
  },
  {
    "retailerId": "Rakuten-Yoshitsu-JP",
    "type": "website",
    "countryCode": "jp",
    "domain": "https://item.rakuten.co.jp",
    "multistore": false
  },
  {
    "retailerId": "RakutenSoukaidrink-JP",
    "type": "website",
    "countryCode": "jp",
    "domain": "https://search.rakuten.co.jp",
    "multistore": false
  },
  {
    "retailerId": "Raleys-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://shop.raleys.com",
    "multistore": false
  },
  {
    "retailerId": "Ralphs-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.ralphs.com",
    "multistore": false
  },
  {
    "retailerId": "Randles-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.randalls.com",
    "multistore": true
  },
  {
    "retailerId": "Rappi-7Eleven-MX",
    "type": "website",
    "countryCode": "mx",
    "domain": "https://www.rappi.com.mx",
    "multistore": false
  },
  {
    "retailerId": "Rappi-Carrefour-BR",
    "type": "website",
    "countryCode": "br",
    "domain": "https://www.rappi.com.br",
    "multistore": false
  },
  {
    "retailerId": "Rappi-Carulla-CO",
    "type": "website",
    "countryCode": "co",
    "domain": "https://www.rappi.com.co",
    "multistore": false
  },
  {
    "retailerId": "Rappi-Exito-CO",
    "type": "website",
    "countryCode": "co",
    "domain": "https://www.rappi.com.co",
    "multistore": false
  },
  {
    "retailerId": "Rappi-Petz-APP-BR",
    "type": "app",
    "countryCode": "br",
    "domain": "https://services.rappi.com.br",
    "multistore": false
  },
  {
    "retailerId": "Rappi-Petz-BR",
    "type": "website",
    "countryCode": "br",
    "domain": "https://www.rappi.com.br",
    "multistore": false
  },
  {
    "retailerId": "Rappi-Turbo-BR",
    "type": "website",
    "countryCode": "br",
    "domain": "https://www.rappi.com.br",
    "multistore": false
  },
  {
    "retailerId": "Rappi-Turbo-MX",
    "type": "website",
    "countryCode": "mx",
    "domain": "https://www.rappi.com.mx",
    "multistore": false
  },
  {
    "retailerId": "RealCanadianSuperstore-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.realcanadiansuperstore.ca",
    "multistore": false
  },
  {
    "retailerId": "Redmart-SG",
    "type": "website",
    "countryCode": "sg",
    "domain": "https://redmart.lazada.sg",
    "multistore": false
  },
  {
    "retailerId": "Rema1000-DK",
    "type": "website",
    "countryCode": "dk",
    "domain": "https://shop.rema1000.dk",
    "multistore": false
  },
  {
    "retailerId": "Renspets-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.renspets.com",
    "multistore": false
  },
  {
    "retailerId": "Rewe-DE",
    "type": "website",
    "countryCode": "de",
    "domain": "https://shop.rewe.de",
    "multistore": true
  },
  {
    "retailerId": "Rite-Aid-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.riteaid.com",
    "multistore": true
  },
  {
    "retailerId": "Rohlik-CZ",
    "type": "website",
    "countryCode": "cz",
    "domain": "https://www.rohlik.cz",
    "multistore": false
  },
  {
    "retailerId": "Rossmann-DE",
    "type": "website",
    "countryCode": "de",
    "domain": "https://www.rossmann.de",
    "multistore": false
  },
  {
    "retailerId": "Rossmann-PL",
    "type": "website",
    "countryCode": "pl",
    "domain": "https://www.rossmann.pl",
    "multistore": false
  },
  {
    "retailerId": "SMmarkets-PH",
    "type": "website",
    "countryCode": "ph",
    "domain": "https://smmarkets.ph",
    "multistore": false
  },
  {
    "retailerId": "SPAR-Blakemore-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://spar.afblakemore.net",
    "multistore": false
  },
  {
    "retailerId": "SSG-KR",
    "type": "website",
    "countryCode": "kr",
    "domain": "https://www.ssg.com",
    "multistore": false
  },
  {
    "retailerId": "Safeway-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.safeway.com",
    "multistore": false
  },
  {
    "retailerId": "Sainsburys",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.sainsburys.co.uk",
    "multistore": true
  },
  {
    "retailerId": "Sams-Club-Pickup-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.samsclub.com",
    "multistore": false
  },
  {
    "retailerId": "Sams-Club-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.samsclub.com",
    "multistore": true
  },
  {
    "retailerId": "Sams-MX",
    "type": "website",
    "countryCode": "mx",
    "domain": "https://www.sams.com.mx",
    "multistore": false
  },
  {
    "retailerId": "SanchezRomero-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://sanchez-romero.online",
    "multistore": false
  },
  {
    "retailerId": "SantaIsabel-CL",
    "type": "website",
    "countryCode": "cl",
    "domain": "https://www.santaisabel.cl",
    "multistore": false
  },
  {
    "retailerId": "SaveOnFoods-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.saveonfoods.com",
    "multistore": false
  },
  {
    "retailerId": "Sephora-FR",
    "type": "website",
    "countryCode": "fr",
    "domain": "https://www.sephora.fr",
    "multistore": false
  },
  {
    "retailerId": "Sephora-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.sephora.com",
    "multistore": true
  },
  {
    "retailerId": "Sezamo-APP-RO",
    "type": "app",
    "countryCode": "ro",
    "domain": "https://api-mob.rohlikgroup.com",
    "multistore": false
  },
  {
    "retailerId": "Shaws-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.shaws.com",
    "multistore": false
  },
  {
    "retailerId": "Shipt-HEB-78414-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.shipt.com",
    "multistore": false
  },
  {
    "retailerId": "Shipt-Meijer-49341-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.shipt.com",
    "multistore": false
  },
  {
    "retailerId": "Shipt-Publix-35242-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.shipt.com",
    "multistore": false
  },
  {
    "retailerId": "Shipt-Target-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.shipt.com",
    "multistore": false
  },
  {
    "retailerId": "ShopRite-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.shoprite.com",
    "multistore": true
  },
  {
    "retailerId": "Shopee-APP-MY",
    "type": "app",
    "countryCode": "my",
    "domain": "https://mall.shopee.com.my",
    "multistore": false
  },
  {
    "retailerId": "Shopee-APP-SG",
    "type": "app",
    "countryCode": "sg",
    "domain": "https://mall.shopee.sg",
    "multistore": false
  },
  {
    "retailerId": "Shopee-APP-VN",
    "type": "app",
    "countryCode": "vn",
    "domain": "https://mall.shopee.vn",
    "multistore": false
  },
  {
    "retailerId": "Shopee-ID",
    "type": "website",
    "countryCode": "id",
    "domain": "https://shopee.co.id",
    "multistore": false
  },
  {
    "retailerId": "Shopee-MY",
    "type": "website",
    "countryCode": "my",
    "domain": "https://shopee.com.my",
    "multistore": false
  },
  {
    "retailerId": "Shopee-Mall-Coke-Store-MY",
    "type": "website",
    "countryCode": "my",
    "domain": "https://shopee.com.my",
    "multistore": false
  },
  {
    "retailerId": "Shopee-Mall-Coke-Store-SG",
    "type": "website",
    "countryCode": "sg",
    "domain": "https://shopee.sg",
    "multistore": false
  },
  {
    "retailerId": "Shopee-Mall-Coke-Store-VN",
    "type": "website",
    "countryCode": "vn",
    "domain": "https://shopee.vn",
    "multistore": false
  },
  {
    "retailerId": "Shopee-PH",
    "type": "website",
    "countryCode": "ph",
    "domain": "https://shopee.ph",
    "multistore": false
  },
  {
    "retailerId": "Shopee-SG",
    "type": "website",
    "countryCode": "sg",
    "domain": "https://shopee.sg",
    "multistore": false
  },
  {
    "retailerId": "Shopee-SuperMarket-MY",
    "type": "website",
    "countryCode": "my",
    "domain": "https://shopee.com.my",
    "multistore": false
  },
  {
    "retailerId": "Shopee-Supermarket-VN",
    "type": "website",
    "countryCode": "vn",
    "domain": "https://shopee.vn",
    "multistore": false
  },
  {
    "retailerId": "Shopee-TH",
    "type": "website",
    "countryCode": "th",
    "domain": "https://shopee.co.th",
    "multistore": false
  },
  {
    "retailerId": "Shopee-VN",
    "type": "website",
    "countryCode": "vn",
    "domain": "https://shopee.vn",
    "multistore": false
  },
  {
    "retailerId": "ShopeeMall-PH",
    "type": "website",
    "countryCode": "ph",
    "domain": "https://shopee.ph",
    "multistore": false
  },
  {
    "retailerId": "ShopeeMall-SG",
    "type": "website",
    "countryCode": "sg",
    "domain": "https://shopee.sg",
    "multistore": false
  },
  {
    "retailerId": "ShopeeMall-TH",
    "type": "website",
    "countryCode": "th",
    "domain": "https://shopee.co.th",
    "multistore": false
  },
  {
    "retailerId": "ShopeeMall-VN",
    "type": "website",
    "countryCode": "vn",
    "domain": "https://shopee.vn",
    "multistore": false
  },
  {
    "retailerId": "Sklavenitis-GR",
    "type": "website",
    "countryCode": "gr",
    "domain": "https://www.sklavenitis.gr",
    "multistore": false
  },
  {
    "retailerId": "Sligro-NL",
    "type": "website",
    "countryCode": "nl",
    "domain": "https://www.sligro.nl",
    "multistore": false
  },
  {
    "retailerId": "SmartFinal-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.smartandfinal.com",
    "multistore": true
  },
  {
    "retailerId": "Smiths-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.smithsfoodanddrug.com",
    "multistore": true
  },
  {
    "retailerId": "Smyths-DE",
    "type": "website",
    "countryCode": "de",
    "domain": "https://www.smythstoys.com",
    "multistore": true
  },
  {
    "retailerId": "Smyths-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.smythstoys.com",
    "multistore": true
  },
  {
    "retailerId": "Soriana-MX",
    "type": "website",
    "countryCode": "mx",
    "domain": "https://www.soriana.com",
    "multistore": false
  },
  {
    "retailerId": "SpecWines-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://specsonline.com",
    "multistore": false
  },
  {
    "retailerId": "Staples-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.staples.ca",
    "multistore": true
  },
  {
    "retailerId": "Staples-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.staples.com",
    "multistore": true
  },
  {
    "retailerId": "Star-Market-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.starmarket.com",
    "multistore": true
  },
  {
    "retailerId": "Stephanis-CY",
    "type": "website",
    "countryCode": "cy",
    "domain": "https://www.stephanis.com.cy",
    "multistore": false
  },
  {
    "retailerId": "StopAndShop-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://stopandshop.com",
    "multistore": false
  },
  {
    "retailerId": "Sunkost-NO",
    "type": "website",
    "countryCode": "no",
    "domain": "https://sunkost.no",
    "multistore": false
  },
  {
    "retailerId": "SuperBonarea-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.bonarea-online.com",
    "multistore": false
  },
  {
    "retailerId": "SuperMasYMas-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.supermasymasonline.com",
    "multistore": false
  },
  {
    "retailerId": "SuperPiedra-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://piedraonline.com",
    "multistore": false
  },
  {
    "retailerId": "SuperUnico-PA",
    "type": "website",
    "countryCode": "pa",
    "domain": "https://superunico.com",
    "multistore": false
  },
  {
    "retailerId": "SuperZoo-CL",
    "type": "website",
    "countryCode": "cl",
    "domain": "https://www.superzoo.cl",
    "multistore": false
  },
  {
    "retailerId": "Superdrug",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.superdrug.com",
    "multistore": false
  },
  {
    "retailerId": "SupermercadosMas-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.supermercadosmas.com",
    "multistore": false
  },
  {
    "retailerId": "Supertails-IN",
    "type": "website",
    "countryCode": "in",
    "domain": "https://supertails.com",
    "multistore": false
  },
  {
    "retailerId": "Supervalu",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://shop.supervalu.ie",
    "multistore": false
  },
  {
    "retailerId": "Sysco-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://shop.sysco.com",
    "multistore": false
  },
  {
    "retailerId": "SystemeU-FR",
    "type": "website",
    "countryCode": "fr",
    "domain": "https://www.coursesu.com",
    "multistore": false
  },
  {
    "retailerId": "TakeALot-ZA",
    "type": "website",
    "countryCode": "za",
    "domain": "https://www.takealot.com",
    "multistore": false
  },
  {
    "retailerId": "Target-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.target.com",
    "multistore": true
  },
  {
    "retailerId": "Tennents-Direct-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.tennentsdirect.com",
    "multistore": false
  },
  {
    "retailerId": "Tesco",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.tesco.com",
    "multistore": true
  },
  {
    "retailerId": "Tesco-APP-UK",
    "type": "app",
    "countryCode": "uk",
    "domain": "https://api.tesco.com",
    "multistore": false
  },
  {
    "retailerId": "Tesco-Ireland",
    "type": "website",
    "countryCode": "ireland",
    "domain": "https://www.tesco.ie",
    "multistore": false
  },
  {
    "retailerId": "The-Whisky-Exchange",
    "type": "website",
    "countryCode": "exchange",
    "domain": "https://www.thewhiskyexchange.com",
    "multistore": false
  },
  {
    "retailerId": "TheRange-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.therange.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Thomas-Ridley-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.thomasridley.co.uk",
    "multistore": false
  },
  {
    "retailerId": "ThriftyFoods-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.thriftyfoods.com",
    "multistore": false
  },
  {
    "retailerId": "ThriveMarket-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://thrivemarket.com",
    "multistore": false
  },
  {
    "retailerId": "Tiendanimal-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.tiendanimal.es",
    "multistore": false
  },
  {
    "retailerId": "Tiki-APP-VN",
    "type": "app",
    "countryCode": "vn",
    "domain": "https://api.tiki.vn",
    "multistore": false
  },
  {
    "retailerId": "Tiki-VN",
    "type": "website",
    "countryCode": "vn",
    "domain": "https://tiki.vn",
    "multistore": false
  },
  {
    "retailerId": "TimeWS-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.timews.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Tokopedia-ID",
    "type": "website",
    "countryCode": "id",
    "domain": "https://www.tokopedia.com",
    "multistore": false
  },
  {
    "retailerId": "TomThumb-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.tomthumb.com",
    "multistore": false
  },
  {
    "retailerId": "Tops-TH",
    "type": "website",
    "countryCode": "th",
    "domain": "https://www.tops.co.th",
    "multistore": false
  },
  {
    "retailerId": "ToysCenter-IT",
    "type": "website",
    "countryCode": "it",
    "domain": "https://www.toyscenter.it",
    "multistore": true
  },
  {
    "retailerId": "Tractor-Supply-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.tractorsupply.com",
    "multistore": true
  },
  {
    "retailerId": "UDF-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.opendining.net",
    "multistore": false
  },
  {
    "retailerId": "USFoods-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www3.usfoods.com",
    "multistore": false
  },
  {
    "retailerId": "UberEats-Albertsons-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.ubereats.com",
    "multistore": false
  },
  {
    "retailerId": "UberEats-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.ubereats.com",
    "multistore": false
  },
  {
    "retailerId": "UberEats-Walgreens-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.ubereats.com",
    "multistore": false
  },
  {
    "retailerId": "UberEats-Woolworths-AU",
    "type": "website",
    "countryCode": "au",
    "domain": "https://www.ubereats.com",
    "multistore": false
  },
  {
    "retailerId": "UberEats7-11-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.ubereats.com",
    "multistore": false
  },
  {
    "retailerId": "Ubereats-IGA-AU",
    "type": "website",
    "countryCode": "au",
    "domain": "https://www.ubereats.com",
    "multistore": false
  },
  {
    "retailerId": "United-Supermarket-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.unitedsupermarkets.com",
    "multistore": true
  },
  {
    "retailerId": "United-Wholesale-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "http://order.uniteduk.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Utkonos-RU",
    "type": "website",
    "countryCode": "ru",
    "domain": "https://www.utkonos.ru",
    "multistore": false
  },
  {
    "retailerId": "Very-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.very.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Vet-UK",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.vetuk.co.uk",
    "multistore": false
  },
  {
    "retailerId": "VetZoo-NO",
    "type": "website",
    "countryCode": "no",
    "domain": "https://vetzoo.no",
    "multistore": false
  },
  {
    "retailerId": "VetZoo-SE",
    "type": "website",
    "countryCode": "se",
    "domain": "https://vetzoo.se",
    "multistore": false
  },
  {
    "retailerId": "Viovet",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.viovet.co.uk",
    "multistore": false
  },
  {
    "retailerId": "VitusApotek-NO",
    "type": "website",
    "countryCode": "no",
    "domain": "https://www.vitusapotek.no",
    "multistore": false
  },
  {
    "retailerId": "Voila-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://voila.ca",
    "multistore": false
  },
  {
    "retailerId": "Voila-FR-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://voila.ca",
    "multistore": false
  },
  {
    "retailerId": "Vons-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.vons.com",
    "multistore": false
  },
  {
    "retailerId": "Waitrose",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.waitrose.com",
    "multistore": false
  },
  {
    "retailerId": "Walgreens-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.walgreens.com",
    "multistore": false
  },
  {
    "retailerId": "Walmart-CR",
    "type": "website",
    "countryCode": "cr",
    "domain": "https://www.walmart.co.cr",
    "multistore": false
  },
  {
    "retailerId": "Walmart-EN-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.walmart.ca",
    "multistore": true
  },
  {
    "retailerId": "Walmart-Grocery-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.walmart.com",
    "multistore": true
  },
  {
    "retailerId": "Walmart-US",
    "type": "website",
    "countryCode": "us",
    "domain": "https://www.walmart.com",
    "multistore": true
  },
  {
    "retailerId": "WalmartSuper-MX",
    "type": "website",
    "countryCode": "mx",
    "domain": "https://super.walmart.com.mx",
    "multistore": false
  },
  {
    "retailerId": "WalterMartDelivery-PH",
    "type": "website",
    "countryCode": "ph",
    "domain": "https://www.waltermartdelivery.com.ph",
    "multistore": true
  },
  {
    "retailerId": "Well-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://well.ca",
    "multistore": false
  },
  {
    "retailerId": "Wildberries-RU",
    "type": "website",
    "countryCode": "ru",
    "domain": "https://www.wildberries.ru",
    "multistore": false
  },
  {
    "retailerId": "Wilko",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.wilko.com",
    "multistore": false
  },
  {
    "retailerId": "Willys-SE",
    "type": "website",
    "countryCode": "se",
    "domain": "https://www.willys.se",
    "multistore": true
  },
  {
    "retailerId": "Wolt-Market-DK",
    "type": "website",
    "countryCode": "dk",
    "domain": "https://wolt.com",
    "multistore": false
  },
  {
    "retailerId": "Wolt-Market-FI",
    "type": "website",
    "countryCode": "fi",
    "domain": "https://wolt.com",
    "multistore": false
  },
  {
    "retailerId": "Wolt-Market-SE",
    "type": "website",
    "countryCode": "se",
    "domain": "https://wolt.com",
    "multistore": false
  },
  {
    "retailerId": "Woolworths-APP-AU",
    "type": "app",
    "countryCode": "au",
    "domain": "https://prod.mobile-api.woolworths.com.au",
    "multistore": false
  },
  {
    "retailerId": "Woolworths-AU",
    "type": "website",
    "countryCode": "au",
    "domain": "https://www.woolworths.com.au",
    "multistore": false
  },
  {
    "retailerId": "Woolworths-ZA",
    "type": "website",
    "countryCode": "za",
    "domain": "https://www.woolworths.co.za",
    "multistore": false
  },
  {
    "retailerId": "WorldOfSweets-DE",
    "type": "website",
    "countryCode": "de",
    "domain": "https://www.worldofsweets.de",
    "multistore": false
  },
  {
    "retailerId": "XXL-NO",
    "type": "website",
    "countryCode": "no",
    "domain": "https://www.xxl.no",
    "multistore": false
  },
  {
    "retailerId": "Xtra-PA",
    "type": "website",
    "countryCode": "pa",
    "domain": "https://www.superxtra.com",
    "multistore": false
  },
  {
    "retailerId": "Yahoo-LOHACO-JP",
    "type": "website",
    "countryCode": "jp",
    "domain": "https://store.shopping.yahoo.co.jp",
    "multistore": false
  },
  {
    "retailerId": "Yahoo-Tanomail-JP",
    "type": "website",
    "countryCode": "jp",
    "domain": "https://store.shopping.yahoo.co.jp",
    "multistore": false
  },
  {
    "retailerId": "Zehrs-CA",
    "type": "website",
    "countryCode": "ca",
    "domain": "https://www.zehrs.ca",
    "multistore": false
  },
  {
    "retailerId": "ZooArt-PL",
    "type": "website",
    "countryCode": "pl",
    "domain": "https://zooart.com.pl",
    "multistore": false
  },
  {
    "retailerId": "ZooRoyal-DE",
    "type": "website",
    "countryCode": "de",
    "domain": "https://www.zooroyal.de",
    "multistore": false
  },
  {
    "retailerId": "Zoomalia-FR",
    "type": "website",
    "countryCode": "fr",
    "domain": "https://www.zoomalia.com",
    "multistore": false
  },
  {
    "retailerId": "Zooplus",
    "type": "website",
    "countryCode": "uk",
    "domain": "https://www.zooplus.co.uk",
    "multistore": false
  },
  {
    "retailerId": "Zooplus-BE",
    "type": "website",
    "countryCode": "be",
    "domain": "https://www.zooplus.be",
    "multistore": false
  },
  {
    "retailerId": "Zooplus-DE",
    "type": "website",
    "countryCode": "de",
    "domain": "https://www.zooplus.de",
    "multistore": false
  },
  {
    "retailerId": "Zooplus-ES",
    "type": "website",
    "countryCode": "es",
    "domain": "https://www.zooplus.es",
    "multistore": false
  },
  {
    "retailerId": "Zooplus-FR",
    "type": "website",
    "countryCode": "fr",
    "domain": "https://www.zooplus.fr",
    "multistore": false
  },
  {
    "retailerId": "Zooplus-IT",
    "type": "website",
    "countryCode": "it",
    "domain": "https://www.zooplus.it",
    "multistore": false
  },
  {
    "retailerId": "Zooplus-NL",
    "type": "website",
    "countryCode": "nl",
    "domain": "https://www.zooplus.nl",
    "multistore": false
  },
  {
    "retailerId": "Zooplus-PL",
    "type": "website",
    "countryCode": "pl",
    "domain": "https://www.zooplus.pl",
    "multistore": false
  }
];

export default retailers;