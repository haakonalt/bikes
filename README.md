# Bysykkel

Enkel applikasjon som viser tilgjengelige bysykler i et kart og i en liste.

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

## Potensielle features


### Logistikk optimalisering
Mye potensiale for å optimalisere logistikken for å fylle opp sykkelstativer. Ser for meg at man kan identifisere to
stasjoner i nærheten av hverandre der én stasjoner mangler sykler og en annen er full. Kan videre analysere historiske
data på https://oslobysykkel.no/apne-data/historisk og se på reiseruter og forutse når enkelte stasjoner blir tomme. Ser
f.eks. for meg at noen stasjoner tømmes på morgenen på vei til jobb, og man får en generell flyt av sykler mot sentrum.


## Howto

For å kjøre applikasjonen i dev mode:

```
npm install
npm start
```