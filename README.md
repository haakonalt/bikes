# Bysykkel

Enkel applikasjon som viser tilgjengelige bysykler i et kart og i en liste. Appen kan sees her: https://reverent-goldberg-b59152.netlify.app/


## Oppgave

Skriv en liten applikasjon som viser en liste over de ulike stasjonene, og hvor mange tilgjengelige låser og ledige
sykler som er på dem i øyeblikket.

## Tilnærming

Jeg forsøkte å identifisere hvem brukerne er, og hvilke behov de har:

- personer som ønsker å flytte seg fra A til B
- ansatte som jobber med å flytte sykler
- ansatte som ønsker å forbedre logistikk/flyt (innsiktsarbeid, data science?)

Jeg tenkte at det første behovet er den primære brukergruppen og startet ut med å tenke ut hvordan jeg kan løse deres
behov. Fra mine egne erfaringer ser jeg for meg at jeg har har følgende behov:

- finne ledige bysykler som er nært meg
- finne ledige stativ der jeg kan låse bysykkelen

Umiddelbar idé var å visualisere stasjoner i et kart. Jeg tenkte det var den mest intiutive måten å finne sykler i
nærheten.

Jeg tenkte også å ta høyde for at ansatte som jobber med å flytte sykler kunne bruke den samme applikasjonen. Derfor
lagde jeg også en enkel tabellvisning som presenterte dataene.

Tanken var at de kan da f.eks. kan sortere kolonner slik at kun stasjoner som er fulle eller har ingen sykler vises på
topp, men kom ikke helt i mål med sorteringen, da jeg ønsker å holde meg innenfor tidsbegrensningen på 2 timer.


## teknologi

- react
- snowpack
- typescript
- leaflet
- material UI

## Beskrivelse av løsning

Lot applikasjonen bevisst være relativt ustyla. Av erfaring ville 2 timers rammen bli brukt opp veldig fort om jeg startet med dette.

Gikk for en relativt enkel app uten noen form for statehåndtering. Separerte ut API-kallene og typene i egen mappe, og
mapper til min egen datastruktur som kombinerer to API-kall:

- https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json
- https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json

Wrapper begge requests med  `Promise.all` slik at de kalles samtidig.

Endte opp med to separate states for hvert API-kall i App.tsx. Er kanskje ikke nødvendig, men så for meg at jeg
potensielt ville kalle station_status endpoint på et intervall (basert på `ttl` i response). station_information ser jeg
for meg er relativt statisk.

Applikasjonen har to "modus", kartvisning og liste. 

### Kartvisning

rendrer kart med leaflet og viser frem alle stasjonene. Hver stasjon er klikkbar med info om ledige sykler / kapasitet.
Her kan nok brukeropplevelsen forbedres endel, men rakk ikke å sette meg så mye inn i leaflet API'et. 

### Liste

enkel tabell som viser de aktuelle dataene sortert på ledige sykler. Her så jeg for meg at kolonnene kan være klikkbare med sortering, men kom ikke så langt.
## TODOS

2 timer går fort, så er et par punkter jeg gjerne skulle hatt på plass før jeg blir fornøyd

- validere API response

sjekker verken statuskode eller struktur. Bør kaste exceptions hvis dette ikke er ok. Har tidligere
brukt https://github.com/pelotom/runtypes til dette formålet. Slik kan jeg definere en typestruktur og validere den
objekter runtime basert på den. Synes det er viktig å validere data i I/O boundaries slik at jeg kan stole på typene i
resten av koden.

- error boundary

javascript exceptions bør kræsje appen, ellers risikerer vi veldig forvirra brukere som får en halveis rendra side eller
annen rar oppførsel.

- forskjellige ikoner i kartet for å indikere status

Så for meg enten forskjellige farger eller ikoner basert på hvorvidt stasjoner har sykler eller ikke. Viktig å tenke på fargeblinde om jeg går for farge, så derfor tenkte jeg det var best med forskjellige ikoner.

- stasjoner klikkbare i liste for å gå til kart

## Potensielle features

### Logistikk optimalisering

Mye potensiale for å optimalisere logistikken for å fylle opp sykkelstativer. Ser for meg at man kan identifisere to
stasjoner i nærheten av hverandre der én stasjoner mangler sykler og en annen er full. Kan videre analysere historiske
data på https://oslobysykkel.no/apne-data/historisk og se på reiseruter og forutse når enkelte stasjoner blir tomme. Ser
f.eks. for meg at noen stasjoner tømmes på morgenen på vei til jobb, og man får en generell flyt av sykler mot sentrum.

## Continuous Integration / Delivery

Alle kodeendringer på github trigger en github action som kjører tester og deployer applikasjonen til netlify hvis testene passerer.

Tester er satt opp med https://www.cypress.io/ for å maksimere testdekning på færrest mulige tester.


## Howto

For å kjøre applikasjonen i dev mode:

```
npm install
npm start
```

Appen vil da være tilgjengelig på http://localhost:8080/

### Tests

```
npm test
```

Forutsetter at applikasjonen kjører på http://localhost:8080