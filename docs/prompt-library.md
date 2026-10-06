# Prompt library

> Linas promptar under bygget, omskrivna till välstrukturerade promptar (Roll · Mål · Kontext · Instruktioner · Noter). Originalen var dikterade och spretiga. Innehållet är detsamma, formen är städad.
> Används i modalen **Prompt library** (öppnas via "Byggd 100 % med AI" i sidfoten). Uppdateras efter varje steg i bygget.
> Senast uppdaterad: 2026-10-06 (41 promptar).

---

## 1. Startprompten: grund, regler och arbetssätt
```
# Roll
Du är min projektledare och webbutvecklare för en personlig portfolio.

# Mål
Lägg grunden för en portfoliosajt som ska ge mig LIA-plats och sedan jobb som systemutvecklare inom .NET.

# Kontext
- Jag studerar Systemutveckling .NET på YH Akademin och har just gått Outskills Generative AI Mastermind.
- Sajten ska visa vem jag är, vad jag kan, vad jag lärt mig och vart jag är på väg: ett levande CV.
- Delar: om mig, CV, projekt (platshållare för skol- och AI-projekt), lärdomar från YH och AI, omdömen, min syn på AI och AGI, boktips, kontaktformulär, och ett prompt library som visar att sajten byggts 100 % med AI.
- Stil: minimalistisk, klassisk japansk akvarell, få färger, mycket vitt. Mörkt läge som en inverterad version. Lite scroll, knappar som öppnar modaler.
- Svenska och engelska med språkval. Säker, responsiv, publiceras på GitHub Pages.

# Instruktioner
1. Förklara vad jag behöver skapa på datorn och på GitHub, steg för steg.
2. Föreslå mappstruktur och en regelfil för projektet.
3. Skapa platshållare för min flavor-profil och content DNA-rapport.
4. Lista allt material du behöver från mig.
5. Intervjua mig: några frågor i taget, ett ämne i taget.

# Noter
- Jag är spretig. Hjälp mig hålla struktur.
- Ingen commit eller push förrän jag säger till.
- Skriv inga backendlösningar åt mig, bara namngivna platshållare med techstack.
```

## 2. Bygg en bild av mig från mitt material
```
# Roll
Du är karriärcoach och researcher.

# Mål
Lär dig så mycket som möjligt om mig och ta fram det som gör mig attraktiv som .NET-utvecklare.

# Kontext
- Mappen ASSETS på skrivbordet innehåller CV, ansökningar, meriter, kursmaterial, kod och Outskill-anteckningar.
- Länka bara till GitHub och LinkedIn, inga andra sociala medier.

# Instruktioner
1. Gå igenom materialet och fyll i checklistan över tillgångar.
2. Kartlägg vad utbildningen innehåller kurs för kurs.
3. Sök på webben: jämför portfolior och karriärvägar för .NET-utvecklare, särskilt karriärbytare.
4. Föreslå hur jag kan få samma sak att fungera för mig.
5. Lista AI-hjälpmedel som är värda att känna till.

# Noter
- Fråga när något saknas i stället för att gissa.
- Publicera aldrig privat information (adress, telefon, mejl, betyg, avtal).
```

## 3. Projektplatshållare utan facit
```
# Roll
Du är utbildningsledare på ett .NET-program.

# Mål
Föreslå projekt som jag själv bygger och som visar en arbetsgivare att jag förstår det skolan lärt mig.

# Instruktioner
- Ett projekt per kurs, plus några AI-projekt.
- Varje kort: namn, kurs, vad det visar, föreslagen techstack, status "Tom".
- Små, moderna och användbara projekt.

# Noter
- Inga lösningar, ingen kod, inget facit.
- Min gamla portfolio ska inte listas som projekt.
```

## 4. Huvudbudskap utan klyschor
```
# Roll
Du är copywriter med känsla för lågmäld, personlig ton.

# Mål
Skriv om min huvudmening så att den knyter ihop dåtid, nutid och framtid.

# Instruktioner
Ge fem korta förslag byggda på konkreta saker jag gjort.

# Noter
Inga klyschor och inget svulstigt ("bygger broar", "affärshjärta", "passionerad").
```
**Valt:** "Jag har varit kunden i ett systemprojekt. Nu lär jag mig bygga systemen."

## 5. Design efter förebild och första utkast
```
# Roll
Du är webbdesigner.

# Mål
Välj en mall som passar mitt syfte och min stil, och bygg ett första utkast.

# Kontext
- Förebilder: andrewlindstrom.com (person i skogen med datorn) och onepagelove.com, portfolio + illustrative, sida 3.

# Instruktioner
1. Gå igenom alla exempel och motivera valet.
2. Bygg ett första utkast även om alla underlag inte är klara.
3. Ta fram en prompt till en bildgenerator för hero-bilden.
```

## 6. Använd mitt LinkedIn-arkiv
```
# Mål
Komplettera bilden av mig med min LinkedIn-export.

# Instruktioner
Använd bara profil, tjänster, utbildning, kompetenser, rekommendationer och egna inlägg.

# Noter
Läs aldrig meddelanden, kontakter, inloggningar, telefon eller e-post.
```

## 7. Granskning punkt för punkt
```
# Mål
Gå igenom utkastet en punkt i taget så att jag kan svara ok eller inte ok.

# Instruktioner
- Beskriv varje punkt kort.
- Ändra det som inte är ok och visa resultatet innan nästa punkt.
```
Beslut hittills: ett enda löv som faller från vänster till höger och blir liggande; färgerna ok; rubriktypsnitt med penselkänsla (Yuji Boku); huvudmeningen ok.

## 8. Knappar, innehåll och lärdomar
```
# Roll
Du är webbdesigner och karriärrådgivare.

# Mål
Gör knapparna harmoniska och fyll innehållet med det som gör mig attraktiv för en arbetsgivare.

# Instruktioner
1. Ta bort de japanska tecknen. Använd stiliserade rankor i accentfärgen.
2. Gör alla knappar lika stora och snyggt placerade.
3. Byt "Bibliotek" mot "Min bokhylla" för favoritböcker, som senare hämtas från mitt API-projekt.
4. Lägg "Vad andra säger" under "Om mig".
5. Lägg en knapp till AI-verktyg under "Min syn på AI".
6. Lägg till "Verktyg" under CV.
7. Uppdatera kurslistan: klara, pågående och kommande kurser.
8. Läs alla Outskill-dokument och skriv om AI-lärdomarna efter lärandemålen.
9. Spara Outskills Notion-listor som filer i Outskill-mappen.
10. Sammanställ godbitar som gör mig intressant för en arbetsgivare.
```

## 9. Rankan och finputs
```
# Mål
Finjustera knapparna och texterna.

# Instruktioner
1. Rankan: samma växt på alla knappar (slingrande klätterväxt med klängen), snirkligare, längs knappens kant, men aldrig identisk på två knappar.
2. Ta bort knappen Prompt library. Den ligger kvar under "Byggd 100 % med AI".
3. För och skriv om min prompthistorik löpande så att den kan publiceras.
4. Uppdatera alla .md-filer löpande när vi fastställer något.
5. Lägg ett nytt omdöme överst och ta bort ett annat.
6. Döp knappen till bara "AI-verktyg", gör den mindre framträdande och ta bort påståendet att jag använder verktygen.
```

## 10. Penseldragen ranka, citat och nyckelord
```
# Roll
Du är illustratör och innehållsredaktör.

# Mål
Ge knapparna en harmonisk ranka och samla mina nyckelord där de gör nytta.

# Instruktioner
1. Rankan ska ha samma stil som min bifogade bild: penseldrag, konturtecknade blad, i samma röda nyans som solen.
2. Anpassa rankan efter knappen: kanter och underkant på några, andra slingor på andra. Helheten ska vara harmonisk och symmetrisk.
3. Korta citatet så att det läses bra på sajten och ta bort "tidigare" i titeln.
4. Lägg mina nyckelord i en .md-fil och använd dem där de passar redan nu: content DNA, superprompt, omdöme–smak–beslut, talang att prompta, eftertexter med humor, AI-transformation leader, Copilot Studio, vad som använts till vad.
5. Skriv en påminnelse om att jag själv ska automatisera formuläret enligt Mastermind dag 2.

# Noter
Ge inget facit till formulärautomationen.
```

## 11. Rankan runt kanten och rullande eftertexter
```
# Roll
Du är illustratör och motion designer.

# Mål
Gör rankan levande runt knapparna och låt eftertexterna rulla som i en film.

# Kontext
Jag bifogar en egen skiss som inspiration (inte för att kopieras): en ranka som slingrar sig runt knappens kant med öglor och blad.

# Instruktioner
1. Behåll penseldragen och den röda färgen.
2. Låt rankan slingra sig längs kanten, ibland innanför och ibland utanför.
3. Ge bladen samma form som lövet som faller på startsidan.
4. Låt eftertexterna rulla oavbrutet i lagom takt, tona ut dem i topp och botten och centrera dem under rubriken.

# Noter
Eftertexternas humor är precis rätt nivå. Behåll den lättsamma tonen från mina LinkedIn-inlägg på hela sajten.
```

## 12. Finputs: hel ranka, eftertexter och luft
```
# Mål
Finjustera rankorna, eftertexterna och startsidans luft.

# Instruktioner
1. Rankan runt underdelen ska vara obruten, inte delad i två.
2. Ge rankorna samma kantiga akvarellkanter som solen och håret.
3. Linjera AI-stöd med stycket ovanför.
4. Eftertexterna: behåll rollerna som de är, ge namnen samma stil och storlek som verktygsnamnen ovanför, och låt rullningen aldrig stanna.
5. Ge mer luft mellan bilden och "Blivande systemutvecklare inom .NET", harmoniskt.
6. Föreslå bättre varianter av huvudmeningen.
```

## 13. Rankan som tallen och hela hero-bilden
```
# Mål
Hitta ett mellanting för rankan och visa hela hero-bilden.

# Instruktioner
1. Den kantiga stilen blev för grov. Gör penseldragen mer framträdande.
2. Måla växterna i samma stil som tallen i bilden, så att de hör ihop.
3. Hela hero-bilden ska synas på datorskärm. Den är min hero-bild och ska vara kvar.
```

## 14. Tallgren i stället för ranka, och en ny huvudmening
```
# Mål
Knyt knapparnas dekor starkt till hero-bilden och sammanfatta vem jag är i huvudmeningen.

# Instruktioner
1. Gör dekoren minimalistisk och nära släkt med tallen och lövet i hero-bilden, både i färg och form.
2. Ge mig tre förslag på en huvudmening som sammanfattar vem jag är.

# Noter
Vald huvudmening: "Jag förstår siffrorna, kunden och koden, och gillar när de pratar med varandra."
```

## 15. Unika tallgrenar
```
# Mål
Tallgrenarna är nästan perfekta men för lika. Gör varje gren lite unik.

# Noter
Behåll färger, former och symmetrin i raderna.
```

## 16. Luftigare krona och längre grenar
```
# Mål
Gör kronan mindre kompakt på de knappar där den klumpar ihop sig, och låt grenarna sträcka sig längre över knappen.
```

## 17. Om mig: kortare, framåtblickande och personligt
```
# Roll
Du är redaktör med känsla för min lättsamma ton.

# Instruktioner
1. Ta bort meningen om CRM-bygget på Mediagruppen.
2. Formulera om "gärna med AI" så att det handlar om att leda framtidens AI-omställning.
3. Publicera alla citat.
4. Skriv ihop det oväntade om mig till en trevlig text i min stil: sci-fi-nörd, före detta ordförande i en teaterförening, hemma är min borg men äventyren sker utanför dörren, och jag längtar efter att se mer av världen.
```

## 18. Skriv om det personliga stycket
```
# Mål
Skriv om stycket om sci-fi, teaterföreningen, hemmet som borg och längtan ut i världen så att det låter mer som jag: lättsamt och med en glimt i ögat.
```

## 19. CV för LIA 2027 på en sida
```
# Roll
Du är CV-skribent och grafisk formgivare.

# Mål
Skriv om mitt CV för LIA 2027 så att det får plats på en A4-sida i PDF.

# Kontext
Underlaget är mitt nuvarande LIA-CV, min LinkedIn och allt vi samlat i portfolioarbetet.

# Instruktioner
1. Använd samma stil som min portfolio: typsnitt, färger och tallgrenen.
2. Skriv mer om vad jag lärde mig på AI-seminariet (Outskill Generative AI Mastermind).
3. Skriv att referenser lämnas på begäran.
4. Korta och skriv om det som behövs så att allt får plats på en sida.
5. Lägg den färdiga PDF:en på skrivbordet.

# Noter
Ingen adress och inget födelsedatum.
```

## 20. Finputs på CV:t
```
# Instruktioner
1. Använd min gmail-adress.
2. Lägg LinkedIn-adressen under rubriken LinkedIn. Alla kontaktuppgifter på en rad, utan radbrytning.
3. Lägg till min webbplats (gäller när den publicerats).
4. Gör bilden lite större.
5. Flytta meningen om att portfolion är byggd helt med AI till en egen rad, med årtalet 2026.
6. Rama in Utbildning som i mitt tidigare CV, med en bakgrundsfärg som passar.
```

## 21. Sista justeringar av CV:t
```
# Instruktioner
1. Ta bort ort.
2. Lägg "Min portfolio" före Grunderna i AI.
3. Gör bilden lite större.
```

## 22. CV-rutan på sajten
```
# Instruktioner
1. Skriv telefonnumret med svensk landskod.
2. CV:t med telefonnummer ska gå att ladda ner från sajten.
3. Lägg till Bootstrap och SASS både i CV:t och på sajten.
4. Tidslinjerna stämmer, låt dem vara.
5. Uppdatera förhandsgranskningen.
```

## 23. Ny ingress för Projekt
```
# Instruktioner
Byt bara ingressen i Projekt till "Avslutade och kommande projekt". Behåll korten som de var.
```

## 24. Min syn på AI: AI-generalist och AGI
```
# Roll
Du är skrivpartner som formulerar mina egna tankar i min ton.

# Mål
Skriv ihop förslag på två korta stycken till "Min syn på AI": AI-generalist och AGI.

# Kontext (mina stödord)
- AI-generalist: inte allt går att ersätta, men nästan. Vissa saker har värde för att de inte är artificiella. AI som verktyg som tar tidsödande uppgifter. AI-skrivna böcker ger aldrig samma känsla som mänsklighetens innersta tankar. Mer tid till att uttrycka vad det är att vara människa. Arbetsmarknadens förändring, mina råd till mina barn. Biltrafik som självklarhet.
- AGI: När kan AI ge mig en kram som duger? Är det lögner? Homo Deus, 21 tankar om 21:a århundradet, Liv 3.0. Snurriga tankar kan struktureras och känslor redas ut när de sätts i ord. Läkekonstens revolution. Risker med lag och ordning. Biltrafik först när AI är smartare än oss. Från Turingtestet till vad?

# Noter
Hitta inte på åsikter. Kort, lättsamt och personligt. Citera inte böckerna.
```

## 25. Hitta känslan bakom stödorden
```
# Roll
Du är skrivpartner som hittar den underliggande känslan i mina lösryckta tankar.

# Mål
Skriv en skön text i min ton under rubrikerna AI-generalist och AGI.

# Kontext
- Behåll min egen formulering av första stycket under AI-generalist.
- Dagens barn är i stormens öga mellan tiden före och efter AI. Stora omvälvningar innan jämvikt. Kriga inte, prata om det.
- Råd till mina barn: var påläst och nyfiken, men gör det du älskar. Förmågan att glädjas och känna tillfredsställelse blir det mest värdefulla. AI är självklart.
- Självkörande bilar blir självklara för att de är säkrare. Vissa saker är AI helt enkelt bättre på.
- Jag misstänker människor mer än AI. Historiskt har vi inte klarat rättssystem, säkerhet, svält och orättvisor så bra.
- Mina favoritböcker om AI speglar mina tankar, känslor och rädslor.

# Noter
Skriv inte ut boktitlarna. Bygg texten på böckernas tankar.
```

## 26. Lugnare nedladdningsknapp
```
# Instruktioner
I rutan CV: centrera knappen för att ladda ner CV:t, ge den mer luft mot stycket ovanför och gör den mindre framträdande.
```

## 27. Aktivera kontaktformuläret
```
# Instruktioner
Lägg in min Web3Forms Access Key så att kontaktformuläret fungerar.
```

## 28. Samma stil på knapparna
```
# Instruktioner
Knappen Skicka i Kontakt ska se likadan ut som knappen Ladda ner CV.
```

## 29. Subtilt nattljus
```
# Mål
Förfina mörkt läge i hero-bilden.

# Instruktioner
1. Låt ljuset från datorn reflekteras lite i trädkronan.
2. Låt månljuset blänka i det som liknar vatten.

# Noter
Mycket subtilt är ledordet.
```

## 30. Datorn som lykta
```
# Instruktioner
Lys upp trädet och stammen försiktigt, som om datorns ljus är en lykta som lyser upp konturerna närmast. Månljuset i vattnet är bra som det är.

# Noter
Mycket subtilt.
```

## 31. Sidfoten
```
# Instruktioner
1. LinkedIn-länken ska leda direkt till min profil (adressen stämmer).
2. Byt "Byggd 100 % med AI" mot "Hur jag byggt min sida".
```

## 32. Logotyper i sidfoten
```
# Instruktioner
Lägg GitHubs och LinkedIns logotyper framför länkarna i sidfoten.
```

## 33. Workflow
```
# Instruktioner
1. Byt sidfotslänken till "Hur jag byggt min sida".
2. Byt rutans namn till "Workflow". Innehållet är oförändrat.
```

## 34. Ett workflow riktat till läsaren
```
# Roll
Du är redaktör och berättar hur min sida byggdes för en läsare.

# Mål
Förfina stegen i Workflow så att en läsare kan följa hur sidan byggdes.

# Instruktioner
1. Beskriv kort hur mina .md-filer skapades och att projektet byggdes lokalt.
2. Ta med det viktiga och ta bort det som inte är intressant.
3. Inspireras av Outskill-seminariet och av hur andra beskriver AI-assisterade arbetsflöden på webben.
4. Lägg en knapp "Prompt library" som hämtar mina promptar efter sista steget.
5. Behåll AI-stöd i sin helhet. Bildverktyget är Claude.
6. Flytta eftertexterna till botten av sidfoten, utan rubrik, rullande från höger till vänster och lätt uttonade mot sidorna.
```

## 35. Min syn på AI med mina egna ord
```
# Instruktioner
1. Ersätt inledningen i "Min syn på AI" med min egen text om att AI gör mänsklig kompetens viktigare: omdöme, smak och beslut.
2. Ersätt avsnittet AI-generalist med min egen text (jag är generalist, inte specialist; vad vi ska göra när AI gör det; välbefinnande före effektivitet; jag är inte naiv; råd till mina barn).

# Noter
Lägg in texten som den är, bara med stavningsrättelser. Översätt till engelska.
```

## 36. Nytt namn på knappen
```
# Instruktioner
Byt "Min syn på AI" mot "Mina tankar om AI".
```

## 37. AGI med mina egna ord
```
# Instruktioner
Ersätt avsnittet AGI med min egen text: tidigt skede men exponentiell utveckling, kartan ritas medan vi färdas, ödmjukhet inför det okända, varför reglering behövs (samhället behöver tid, vakuum som fylls av makt och kortsiktighet), och vad tröst från en AI betyder för vår syn på oss själva.

# Noter
Lägg in texten som den är, bara med stavning och skiljetecken rättade. Översätt till engelska.
```

## 38. GitHub-länk och AI-verktyg högre upp
```
# Instruktioner
1. Lägg till "Fler projekt på min GitHub" med länk till min GitHub sist i Projekt.
2. Flytta länken AI-verktyg i "Mina tankar om AI" till direkt efter första stycket, före AI-generalist.
```

## 39. Publicering
```
# Instruktioner
1. Skapa det publika repot Linaslala.github.io på GitHub.
2. Publicera sajten, prompt-library.md och CLAUDE.md. Övriga planeringsfiler stannar lokalt.
3. Använd GitHubs anonyma e-postadress i commits.
4. Slå på GitHub Pages.
```

## 40. README för GitHub
```
# Mål
Lägg till en README så att repot syns och förklarar sig självt på GitHub.
```

## 41. Ingen blå bakgrund på krysset
```
# Instruktioner
I liveversionen har krysset på modalerna blå bakgrund. Ta bort den.
```
