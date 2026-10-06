# CLAUDE.md – regler för Linas portfoliosajt

> v0.2 (2026-10-06). Lina äger den här filen. Ändra fritt.

## Syfte
En personlig portfolio som presenterar Lina för en potentiell arbetsgivare, med målet att få praktikplats (LIA) och sedan jobb.
Lina studerar systemutveckling .NET på YH-akademin. Sajten fungerar som ett levande CV med en tydlig linje: vad jag gjort innan → vad jag gör nu → vad jag vill göra.
Besökaren ska på under en minut förstå: vem Lina är, vad hon kan, och hur man kontaktar henne.
Sajten är öppen med att den är byggd 100 % med AI (se Prompt library).

Sektioner och modaler: `docs/sitemap.md`. Projektplatshållare: `docs/projects.md`.

## Arbetssätt med Claude
- **Ett steg i taget.** Claude föreslår, Lina godkänner, sedan byggs det.
- **Intervju före innehåll.** Claude hittar inte på fakta om Lina. Saknas något skrivs en tydlig platshållare: `[[SAKNAS: beskrivning]]`.
- **Inga commits eller push** utan att Lina uttryckligen ber om det.
- Läs alltid `docs/om-lina.md`, `docs/flavor-profile.md` och `docs/content-dna.md` innan du skriver text eller väljer design.
- **Fråga hellre än gissa.** Lina vill intervjuas. Ställ några frågor i taget, ett ämne i taget.
- Svara Lina på svenska.
- **Granska punkt för punkt.** Lina svarar ok eller inte ok, en punkt i taget.
- **Uppdatera .md-filerna löpande.** Så fort något fastställs skrivs det in i rätt fil i `docs/` (och här vid behov).
- **För prompthistoriken.** Varje ny instruktion från Lina skrivs om till en välstrukturerad prompt i `docs/prompt-library.md`.

## Integritet
- Råmaterial ligger i `C:\Users\linas\Desktop\ASSETS`. Det kopieras aldrig in i repot i sin helhet.
- Publicera **aldrig**: adress, födelsedatum, betygsdetaljer, anställningsavtal, löner, personlighets- eller logiktester.
- Telefonnummer (+46) och gmail-adressen finns **bara** i den nedladdningsbara CV-PDF:en (`assets/cv/Lina-Samuelsson-CV-LIA-2027.pdf`), Linas eget beslut 2026-10-06. Inte i sidans text.
- Inget från Linas mejl eller privata dokument publiceras. Ingen e-postadress visas på sidan; kontakt sker via formuläret.
- Sociala länkar: **endast GitHub och LinkedIn.**
- Citat från andra personer publiceras bara när Lina har bekräftat att det är okej.
- Inga hemliga nycklar i koden. Web3Forms Access Key är publik per design och får ligga i `js/main.js`.

## Text på sidan
- **Ton:** lättsam som Linas LinkedIn-inlägg, med en glimt i ögat. Humornivån i eftertexterna (Prompt library) är måttstocken. Saklig grund, aldrig svulstig.
- **Lite text.** Varje modal: en rubrik, högst 2–3 korta stycken eller en lista. Hellre kort och tydligt än komplett.
- Tydliga ramar: varje del av sidan har ett eget syfte (se `docs/sitemap.md`) och blandas inte med de andra.

## Projekt
- `docs/projects.md` innehåller **tomma platshållare** med förslag på namn, kurs och techstack. Lina bygger dem själv, utan facit och utan kodhjälp. Färdiga projekt visas inte som egna kort (beslut 2026-10-06).
- Den gamla WebPortfolio används inte och listas inte som projekt. Den här sajten är Linas framtida sida.
- Formulärautomationen (n8n, Mastermind dag 2) bygger Lina själv. Ge inget facit.

## AI-verktyg
- Listan på sajten hämtas från Outskill-anteckningarna (`docs/ai-verktyg.md`), inte från egna tillägg.

## Teknik (låst om inget annat beslutas)
- Statisk sajt: ren HTML, CSS och lite vanilla JavaScript. Inget byggsteg, inget ramverk.
- Hostas på **GitHub Pages** från grenen `main`, rotmappen.
- Inga externa beroenden utöver eventuella Google Fonts.
- Fungerar utan JavaScript så långt det går (innehållet ska synas även om modaler inte öppnas).

## Funktioner som ska finnas
- **Språkväxlare svenska/engelska.** All text ligger i `content/texts.js` (både sv och en), aldrig hårdkodad i HTML. JS-fil i stället för JSON så att sidan även fungerar när den öppnas direkt från disk.
- **Förhandsvisning:** `node .claude/serve.js` → http://localhost:5500
- **Ljust/mörkt läge.** Följer systemets inställning, med en knapp för att byta. Färger definieras som CSS-variabler i `:root`.
- **Modalbaserad navigation.** Startsidan är en lugn "hall" med 7 lika stora knappar (Om mig, CV, Projekt, Det jag lärt mig, Mina tankar om AI, Min bokhylla, Kontakt). Sidfotslänken "Hur jag byggt min sida" öppnar rutan **Workflow** (byggstegen, knappen Prompt library och AI-stöd). Eftertexterna rullar horisontellt längst ner i sidfoten.
- **Mobilanpassad.** Designa för mobil först. Minst 16 px marginal, ingen horisontell scroll.
- **Tillgänglighet.** Modaler går att stänga med Esc, fokus fångas i öppen modal, alla bilder har alt-text, tillräcklig kontrast i båda lägena.

## Stil
- Minimalistisk japansk akvarell: mycket luft, mjuka papperstoner, en röd accent, tunna linjer.
- Rubriker i Yuji Boku, brödtext i Zen Kaku Gothic New.
- Knapparna har en minimalistisk tallgren längs underkanten, i samma färger och former som tallen och lövet i hero-bilden. Layouterna speglas per rad.
- Hero-bilden får aldrig beskäras.
- Inga japanska tecken som dekor. Ingen rörelse utom lövet som faller en gång.
- Alla beslut finns i `docs/flavor-profile.md`.

## Projekt med backend
Sajten bygger **inte** backendlösningar. Projekt som kräver server visas som **namngivna platshållare** med:
titel, kort beskrivning, techstack, status, och länk till repo eller demo om den finns.

## Mappstruktur
```
WebSite/
├── CLAUDE.md                 ← den här filen
├── index.html                ← enda sidan
├── css/
│   └── style.css
├── js/
│   └── main.js               ← modaler, språk, tema
├── content/
│   └── texts.js              ← all text, sv + en, och projektkorten
├── assets/
│   ├── img/                  ← foto, akvarellbilder, projektbilder
│   ├── cv/                   ← CV som PDF (sv + en)
│   └── icons/
└── docs/                     ← planering, publiceras inte i navigationen
    ├── om-lina.md            ← bilden av Lina, från ASSETS
    ├── sitemap.md
    ├── godbitar.md           ← det som gör Lina attraktiv
    ├── nyckelord.md          ← Linas nyckelord och var de används
    ├── prompt-library.md     ← prompthistoriken, omskriven
    ├── design-val.md
    ├── illustration-prompt.md
    ├── projects.md
    ├── research.md
    ├── ai-verktyg.md
    ├── flavor-profile.md
    ├── content-dna.md
    ├── assets-checklist.md
    └── workflow.md
```
