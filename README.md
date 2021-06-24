# Bysykkel

## tilnærming

- hvem er brukerne og hvilke behov har de?
  - borgere som ønsker å flytte seg fra A til B
  - ansatte som jobber med å flytte sykler
  - ansatte som ønsker å forbedre logistikk/flyt (innsiktsarbeid, data science?)
- utforsket API'et
- umiddelbar idé: visualisere stasjoner i et kart, med farge som indikerer tilgjengelighet
- laster ned station_information.json og konverterer til GEOJSON. visualiserer på http://geojson.io/
  - verifiserer at alt ser tilsynelatende ok ut i kartet, at jeg ikke har byttet om lat/lon osv.
    ![geojson.io](./docs/geojson.png)
    

## Løsning

- vise stasjoner i et kart med tall + fargekode
  - bruker tall istedenfor fargekoder mtp fargeblind
- bruke https://oslobysykkel.no/apne-data/historisk for å vise trender / sannsynlighet for tilgjengelighet?
  - kanskje skape en kul visualisering av reiser med https://eng.uber.com/keplergl/  ?