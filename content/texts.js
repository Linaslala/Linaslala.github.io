/*
 * All text på sidan, på svenska och engelska.
 * [[...]] = platshållare som Lina fyller i. Visas markerade på sidan.
 * Block: p, h3, list, steps, timeline, tags, cards, cols, courses, quote, open, tools, shelf, credits, download, form, note
 */

// Projektkort: samma namn och techstack på båda språken
const PROJECTS = [
  { n: 1, name: "Skafferiet", stack: ["C#", ".NET", "OOP", "LINQ", "JSON"],
    course: { sv: "OOP med C#", en: "OOP with C#" },
    what: { sv: "Konsolapp som håller koll på matens bäst före-datum.", en: "Console app that keeps track of food best-before dates." } },
  { n: 2, name: "Bokhyllan", stack: ["SQL Server", "T-SQL", "ER/3NF", "EF Core"],
    course: { sv: "Databasutveckling", en: "Database development" },
    what: { sv: "Normaliserad databas för böcker, låntagare och lån.", en: "Normalised database for books, borrowers and loans." } },
  { n: 3, name: "Tidbokaren", stack: ["ASP.NET Core MVC", "Razor", "Identity"],
    course: { sv: "Dynamiska webbapplikationer", en: "Dynamic web applications" },
    what: { sv: "Boka tider på webben, med inloggning och roller.", en: "Book appointments online, with login and roles." } },
  { n: 4, name: "Bokhyllan API", stack: ["ASP.NET Core Web API", "EF Core", "Swagger"],
    course: { sv: "Programmering med C# .NET", en: "Programming with C# .NET" },
    what: { sv: "REST-API som också levererar boktipsen till den här sidan.", en: "REST API that also serves the book tips on this site." } },
  { n: 5, name: "Fakturamotorn", stack: ["xUnit", "FluentAssertions", "Moq"],
    course: { sv: "Testdriven utveckling", en: "Test-driven development" },
    what: { sv: "Moms, rabatter och förfallodatum, test först.", en: "VAT, discounts and due dates, tests first." } },
  { n: 6, name: "Kassaboken", stack: ["WPF", "MVVM", "SQLite"],
    course: { sv: "Windows applikationsutveckling", en: "Windows application development" },
    what: { sv: "Skrivbordsapp för hushållets utgifter.", en: "Desktop app for household expenses." } },
  { n: 7, name: "Teamtavlan", stack: ["Blazor", "SignalR", "Azure DevOps"],
    course: { sv: "Agil systemutveckling", en: "Agile development" },
    what: { sv: "Kanban-tavla som uppdateras i realtid.", en: "Kanban board that updates in real time." } },
  { n: 8, name: "Bokhyllan i molnet", stack: ["Azure", "Docker", "GitHub Actions"],
    course: { sv: "Molntjänster", en: "Cloud services" },
    what: { sv: "API:t publiceras automatiskt vid varje push.", en: "The API deploys automatically on every push." } },
  { n: 9, name: "Mini-CRM", stack: ["ASP.NET Core MVC", "EF Core", "SQL Server"],
    course: { sv: "Affärsmannaskap", en: "Business acumen" },
    what: { sv: "Från kundbehov till system: kravlista och ett litet CRM.", en: "From customer needs to system: requirements and a small CRM." } },
  { n: 10, name: "Fråga Lina", stack: [".NET", "AI-API", "smallest.ai"],
    course: { sv: "AI", en: "AI" },
    what: { sv: "Chatt- eller röstagent som svarar om mitt CV.", en: "Chat or voice agent that answers questions about my CV." } },
  { n: 11, name: "Formulärflödet", stack: ["n8n", "Web3Forms"],
    course: { sv: "Automation", en: "Automation" },
    what: { sv: "Kontaktformuläret sorteras och besvaras automatiskt.", en: "The contact form is sorted and answered automatically." } },
  { n: 12, name: "Halvar", stack: ["Claude Code", "MCP", "JobTech API", "Markdown"],
    course: { sv: "Min personliga AI-assistent", en: "My personal AI assistant" },
    status: { sv: "Pågår", en: "In progress" },
    what: { sv: "Han tar hand om det i min vardag som går att automatisera och delar ut jobben till sitt eget lilla team. Just nu letar han till exempel LIA-platser och sköter den här sidan. Han föreslår, jag bestämmer.",
            en: "He takes care of whatever in my day can be automated and hands the work out to his own small team. Right now, for example, he hunts for internships and looks after this site. He suggests, I decide." } }
];

// AI-verktyg från Outskill-anteckningarna (dag 1, dag 2, bonusdagen och Notion-listan), grupperade
const AI_TOOLS = [
  { group: { sv: "Assistenter och agenter", en: "Assistants and agents" }, items: [
    ["Claude", { sv: "AI-anställd med egen mapp, underagenter och schema", en: "AI employee with its own folder, sub-agents and schedule" }],
    ["ChatGPT / Codex", { sv: "Arbetsläge, bygga och publicera appar", en: "Work mode, build and ship apps" }],
    ["Goose", { sv: "Öppen agent som arbetar på datorn", en: "Open-source agent that works on your computer" }]
  ] },
  { group: { sv: "Modeller", en: "Models" }, items: [
    ["OpenRouter", { sv: "Hundratals modeller och rankning", en: "Hundreds of models and rankings" }],
    ["Ollama / LM Studio", { sv: "Kör modeller lokalt och privat", en: "Run models locally and privately" }]
  ] },
  { group: { sv: "Bygga och automatisera", en: "Build and automate" }, items: [
    ["n8n", { sv: "Automation: trigger, logik, action", en: "Automation: trigger, logic, action" }],
    ["Lovable", { sv: "Från produktbrief till webbapp", en: "From product brief to web app" }],
    ["Lyzr", { sv: "Agent med kunskapsbas (motorn)", en: "Agent with knowledge base (the engine)" }],
    ["Smallest.ai", { sv: "Röstagenter", en: "Voice agents" }],
    ["Copilot Studio", { sv: "Microsofts agenter och automation i Microsoft 365", en: "Microsoft agents and automation in Microsoft 365" }]
  ] },
  { group: { sv: "Research och vardag", en: "Research and everyday" }, items: [
    ["Perplexity", { sv: "Hitta förebilder och källor", en: "Find references and sources" }],
    ["NotebookLM", { sv: "Plugga med eget material", en: "Study with your own material" }],
    ["Wispr Flow", { sv: "Diktera prompter och anteckningar", en: "Dictate prompts and notes" }]
  ] },
  { group: { sv: "Bild, video och ljud", en: "Image, video and audio" }, items: [
    ["Krea", { sv: "Många bild- och videomodeller på ett ställe", en: "Many image and video models in one place" }],
    ["ElevenLabs / Suno", { sv: "Röst och musik", en: "Voice and music" }]
  ] }
];

const TEXTS = {
  sv: {
    ui: {
      skip: "Hoppa till innehållet", close: "Stäng", back: "Tillbaka", builtWithAi: "Hur jag byggt min sida",
      lang: "Byt språk", theme: "Byt ljust eller mörkt läge", status: "Tom plats", rooms: "Innehåll",
      ongoing: "Pågår", upcoming: "Kommer"
    },
    hero: {
      role: "Blivande systemutvecklare inom .NET",
      name: "Lina Samuelsson",
      tagline: "Jag förstår siffrorna, kunden och koden, och gillar när de pratar med varandra."
    },
    sections: {
      about: { title: "Om mig", blocks: [
        { p: "Jag studerar till systemutvecklare inom .NET på YH Akademin, med LIA under 2027." },
        { p: "Innan dess arbetade jag i femton år med ekonomi, marknad och projektledning." },
        { timeline: [
          ["Före", "Ekonomi, marknad och projekt"],
          ["Nu", "C#, .NET och SQL Server"],
          ["Sedan", "Backend- eller fullstackutvecklare som är med och leder framtidens AI-omställning"]
        ] },
        { p: "Sci-fi-nörd, före detta teaterordförande och hemmakär äventyrare. Jag laddar batterierna hemma men jag välkomnar nya upplevelser, gärna på platser i världen jag inte sett tidigare." },
        { h3: "Vad andra säger" },
        { quote: "Hög samarbetsförmåga, utan att tappa fokus för det egna intresset. En lösningsfokuserad problemlösare med ett systematiskt tillvägagångssätt och \"kavla upp ärmarna\"-mentalitet.", who: "John, sales and marketing specialist och digital growth manager" },
        { quote: "En engagerad student som är alltid nyfiken.", who: "Richard, .NET-utbildare" },
        { quote: "Hon tar ansvar, håller det hon lovar och bidrar med en positiv energi i gruppen.", who: "Dannell, klasskamrat" },
        { quote: "Hennes humor bidrar till en varm och trivsam atmosfär i klassen.", who: "Ninnie, klasskamrat" }
      ] },
      cv: { title: "CV", blocks: [
        { timeline: [
          ["2026–2027", "Systemutvecklare .NET, YH Akademin"],
          ["2021–2025", "Projektledare och säljstöd, Mediagruppen i Halmstad"],
          ["2014–2021", "Ekonomi och redovisning: Hotell Tylösand, Stålrör, Diplomator"],
          ["2018–2019", "Masterkurser i kommunikation, Göteborgs universitet"],
          ["2008–2014", "Ekonomie kandidat, marknadsföring, Högskolan i Halmstad"]
        ] },
        { h3: "Teknik" },
        { tags: ["C#", ".NET", "ASP.NET Core", "MVC", "Razor", "Web API", "EF Core", "ADO.NET", "SQL Server", "T-SQL", "LINQ", "OOP", "SOLID", "DI", "HTML", "CSS", "JavaScript", "Bootstrap", "SASS"] },
        { h3: "Verktyg" },
        { tags: ["Visual Studio", "VS Code", "SSMS", "Git", "GitHub", "PowerShell", "Azure DevOps", "Azure", "Swagger", "Claude", "Fortnox", "Visma"] },
        { download: "assets/cv/Lina-Samuelsson-CV-LIA-2027.pdf", label: "Ladda ner CV (PDF)" }
      ] },
      projects: { title: "Projekt", blocks: [
        { p: "Avslutade och kommande projekt." },
        { h3: "Utbildningen" }, { cards: [1, 9] },
        { h3: "AI och automation" }, { cards: [10, 12] },
        { link: "https://github.com/Linaslala", text: "Fler projekt på min GitHub:", label: "github.com/Linaslala" }
      ] },
      learned: { title: "Det jag lärt mig", blocks: [
        { cols: [
          [ { h3: "YH Akademin" }, { courses: [
            ["done", "Objektorienterad programmering med C#"],
            ["done", "Databasutveckling"],
            ["done", "Dynamiska webbapplikationer"],
            ["done", "Agil systemutveckling"],
            ["done", "Affärsmannaskap"],
            ["now", "Programmering med C# .NET"],
            ["next", "Testdriven utveckling"],
            ["next", "Windows applikationsutveckling"],
            ["next", "Molntjänster och publiceringsverktyg"]
          ] } ],
          [ { h3: "AI" }, { list: [
            "Bygga AI-agenter som tar egna uppgifter, jobbar parallellt och körs på schema",
            "Skriva strukturerade promptar: roll, mål, kontext, instruktioner",
            "Automatisera flöden i n8n: trigger, logik och action",
            "Gå från idé till app via en produktbrief",
            "Bild, video och röst med AI",
            "Säkerhet och integritet när AI får åtkomst",
            "Grunderna i AI 1 och 2, Linköpings universitet · Elements of AI"
          ] } ]
        ] }
      ] },
      ai: { title: "Mina tankar om AI", blocks: [
        { p: "AI gör inte mänsklig kompetens mindre viktig, tvärtom. Ju mer kraftfull tekniken blir, desto viktigare blir omdöme, smak och förmågan att fatta rätt beslut. AI är ett verktyg, men värdet skapas av människor som kan ställa rätt frågor, granska svaren och ta ansvar för resultatet. Därför är jag positiv till AI, så länge utvecklingen leds av kunniga och ansvarsfulla människor." },
        { open: "aitools", label: "AI-verktyg" },
        { h3: "AI-generalist" },
        { p: "Jag är ingen AI-specialist. Jag är AI-generalist. Jag tror att AI kommer att göra mer än de flesta föreställer sig, snabbare än många är beredda på. Många av de uppgifter som idag upptar vår tid kommer att automatiseras, effektiviseras eller försvinna helt. På många områden kommer AI helt enkelt att vara bättre än människor. Det betyder inte att människor blir mindre viktiga, men att vi behöver omdefiniera var vårt värde finns. För mig är därför den mest intressanta frågan inte vad AI kan göra, utan vad vi ska göra när den gör det." },
        { p: "Kreativitet, relationer, mening och förmågan att uttrycka något genuint kan inte automatiseras. Därför ser jag AI som ett verktyg, inte som en ersättare, för att hjälpa oss med repetitivt och tidskrävande arbete för att frigöra tid. Eftersom AI gör det meningslöst att fortsätta mäta mänskligt värde i produktivitet måste den tekniska utvecklingen ytterst handla om att öka människors välbefinnande, inte bara deras effektivitet." },
        { p: "Men jag är inte naiv. Vi befinner oss mitt i en av de största samhällsförändringarna i mänsklighetens historia. Historien visar att stora omställningar sällan sker utan turbulens, och det kommer sannolikt att ta tid innan vi hittar en ny balans. Därför är jag mindre orolig för AI än för vår förmåga att styra utvecklingen i rätt riktning. Ju mer kraftfull tekniken blir, desto viktigare blir samtalet om vilka värderingar, principer och gemensamma mål som ska vägleda den. Det är en utmaning som inget land kan lösa på egen hand." },
        { p: "Till mina barn ger jag ett enkelt råd: var nyfikna, var pålästa och följ utvecklingen. Men glöm inte att göra det ni älskar. AI kommer att bli en självklarhet. Förmågan att känna glädje, mening och tillfredsställelse i det ni gör är fortfarande något som bara kan komma inifrån er själva." },
        { h3: "AGI" },
        { p: "Vi befinner oss fortfarande i ett tidigt skede av AI-utvecklingen, men samtidigt har vi redan kommit längre än många trodde var möjligt för bara några år sedan. Utvecklingen mot artificiell generell intelligens (AGI) är exponentiell, vilket gör den både fascinerande och svår att förstå. Vi vet att nästa stora genombrott kommer, men vi vet inte exakt när, hur det kommer att se ut eller vilka konsekvenser det får. Det känns som att kartan ritas samtidigt som vi färdas genom landskapet." },
        { p: "Jag är inte särskilt orolig för att AI blir smartare, det blir den bevisligen. Tvärtom tror jag att utvecklingen innebär enorma framsteg inom områden som forskning, utbildning och sjukvård. Däremot är jag ödmjuk inför hur lite vi faktiskt vet om vart utvecklingen leder när förändringstakten fortsätter att accelerera." },
        { p: "Med andra ord förstår jag de högaktuella diskussionerna om att sakta ner och reglera utvecklingen. Men inte främst för att jag tror att tekniken i sig är farlig, utan för att samhället behöver tid att förstå vad AGI innebär och vilka konsekvenser det för med sig. När spelplanen förändras snabbare än våra lagar, institutioner och normer uppstår ett vakuum som riskerar att fyllas av kommersiella intressen, maktkoncentration och kortsiktiga incitament. Frågan är därför inte vad AI kommer att kunna göra, utan om vi hinner utveckla den visdom som krävs för att använda den väl." },
        { p: "Det handlar inte heller längre bara om teknik. Om en AI kan hjälpa mig att förstå mina tankar, reda ut mina känslor eller ge mig tröst när jag behöver det, spelar det då någon roll att den inte känner något själv? Frågor som tidigare hörde hemma i filosofin börjar plötsligt kännas praktiska. Den mest intressanta frågan är inte när AGI kommer, utan hur den kommer att förändra vår syn på oss själva. När intelligens inte längre är något unikt mänskligt tvingas vi fundera över vad som faktiskt är det." }
      ] },
      aitools: { title: "AI-verktyg", back: "ai", blocks: [
        { p: "Ett urval AI-verktyg som är värda att känna till." },
        { tools: true }
      ] },
      bookshelf: { title: "Min bokhylla", blocks: [
        { p: "Mina favoritböcker. Listan hämtas från mitt eget API, Bokhyllan API (projekt 4), när det är byggt." },
        { shelf: 5 },
        { note: "[[Här visas böckerna från Bokhyllan API]]" }
      ] },
      contact: { title: "Kontakt", blocks: [
        { p: "Söker LIA under 2027 och jobb efter examen. Skriv gärna!" },
        { form: true }
      ] },
      prompts: { title: "Workflow", blocks: [
        { p: "Så här byggde jag sidan, från tom mapp till publicering. Jag bestämde, AI skrev." },
        { steps: [
          "**Ett eget skrivbord åt AI:n.** Jag skapade en projektmapp på min dator och gav Claude Code tillgång till just den, som en nyanställd som får en arbetsplats och sina papper.",
          "**Regler och minne i .md-filer.** Först skrev vi CLAUDE.md, en regelfil som AI:n läser varje gång den börjar jobba. Runt den växte små markdown-filer fram: min profil, sajtkarta, projekt, tonläge (content DNA) och en logg över varje beslut.",
          "**Kontext i stället för gissningar.** AI:n läste mitt eget material: CV, kursmappar, LinkedIn-arkivet och anteckningar från en AI-kurs. Den fick inte hitta på något om mig, och inget privat fick publiceras.",
          "**Intervju före kod.** Jag dikterade mina spretiga tankar och lät AI:n ställa frågor, ett ämne i taget, innan något byggdes.",
          "**Förebild och första utkast.** Jag valde inspiration från illustrerade portfolior, och AI:n byggde ett första utkast som jag kunde reagera på.",
          "**Ok eller inte ok.** Varje del granskades punkt för punkt och gick ofta många varv. Rankan på knapparna blev till slut en tallgren.",
          "**Lokalt först.** Allt byggdes och testades i webbläsaren på min egen dator, i ljust och mörkt läge och på mobil, innan något publicerades.",
          "**Publicering.** Till sist versionshanteras sidan med Git och publiceras på GitHub Pages."
        ] },
        { download: "docs/prompt-library.md", label: "Prompt library", file: "Lina-Samuelsson-prompt-library.md" },
        { h3: "AI-stöd: vad användes till vad" },
        { credits: [
          ["Claude Code", "Kod, struktur och texter, efter mina beslut"],
          ["Claude", "Hero-bilden och tallgrenarna, målade i kod"],
          ["Wispr Flow", "Jag dikterade mina instruktioner i stället för att skriva"]
        ] }
      ] }
    },
    credits: [
      ["Regi och executive director", "Lina Samuelsson"], ["Ansvarig för smak, omdöme och beslut", "Lina Samuelsson"],
      ["Grovjobb, kod och outtröttligt tålamod", "Claude"], ["Specialeffekter", "Ett löv som faller exakt en gång"],
      ["Typsnitt", "Yuji Boku och Zen Kaku Gothic New, Google Fonts"], ["Inspiration", "onepagelove.com, andrewlindstrom.com"],
      ["Scen", "GitHub Pages"], ["Inga AI-agenter skadades under inspelningen", ""]
    ],
    form: { name: "Namn", email: "Din e-post", message: "Meddelande", send: "Skicka", sending: "Skickar …", sent: "Tack! Ditt meddelande har kommit fram, jag hör av mig.", error: "Något gick fel. Försök igen om en stund, eller nå mig via LinkedIn.", pending: "[[Formuläret aktiveras när Web3Forms-nyckeln är inlagd]]" }
  },

  en: {
    ui: {
      skip: "Skip to content", close: "Close", back: "Back", builtWithAi: "How I built my site",
      lang: "Change language", theme: "Toggle light or dark mode", status: "Empty slot", rooms: "Contents",
      ongoing: "Ongoing", upcoming: "Upcoming"
    },
    hero: {
      role: "Aspiring .NET developer",
      name: "Lina Samuelsson",
      tagline: "I understand the numbers, the customer and the code, and I like it when they talk to each other."
    },
    sections: {
      about: { title: "About", blocks: [
        { p: "I'm studying .NET development at YH Akademin, with an internship during 2027." },
        { p: "Before that I spent fifteen years in finance, marketing and project management." },
        { timeline: [
          ["Before", "Finance, marketing and projects"],
          ["Now", "C#, .NET and SQL Server"],
          ["Next", "Backend or full-stack developer helping to lead the AI transformation ahead"]
        ] },
        { p: "Sci-fi nerd, former theatre society chair and home-loving adventurer. I recharge at home, but I welcome new experiences, ideally in parts of the world I haven't seen yet." },
        { h3: "What others say" },
        { quote: "Strong ability to collaborate without losing focus on her own interest. A solution-focused problem solver with a systematic approach and a roll-up-your-sleeves mentality.", who: "John, sales and marketing specialist and digital growth manager" },
        { quote: "An engaged student who is always curious.", who: "Richard, .NET instructor" },
        { quote: "She takes responsibility, keeps her promises and brings positive energy to the group.", who: "Dannell, classmate" },
        { quote: "Her humour creates a warm and pleasant atmosphere in the class.", who: "Ninnie, classmate" }
      ] },
      cv: { title: "CV", blocks: [
        { timeline: [
          ["2026–2027", ".NET Developer programme, YH Akademin"],
          ["2021–2025", "Project manager and sales support, Mediagruppen i Halmstad"],
          ["2014–2021", "Finance and accounting: Hotell Tylösand, Stålrör, Diplomator"],
          ["2018–2019", "Master's courses in communication, University of Gothenburg"],
          ["2008–2014", "BSc Business, Marketing, Halmstad University"]
        ] },
        { h3: "Tech" },
        { tags: ["C#", ".NET", "ASP.NET Core", "MVC", "Razor", "Web API", "EF Core", "ADO.NET", "SQL Server", "T-SQL", "LINQ", "OOP", "SOLID", "DI", "HTML", "CSS", "JavaScript", "Bootstrap", "SASS"] },
        { h3: "Tools" },
        { tags: ["Visual Studio", "VS Code", "SSMS", "Git", "GitHub", "PowerShell", "Azure DevOps", "Azure", "Swagger", "Claude", "Fortnox", "Visma"] },
        { download: "assets/cv/Lina-Samuelsson-CV-LIA-2027.pdf", label: "Download CV (PDF, Swedish)" }
      ] },
      projects: { title: "Projects", blocks: [
        { p: "Completed and upcoming projects." },
        { h3: "The programme" }, { cards: [1, 9] },
        { h3: "AI and automation" }, { cards: [10, 12] },
        { link: "https://github.com/Linaslala", text: "More projects on my GitHub:", label: "github.com/Linaslala" }
      ] },
      learned: { title: "What I've learned", blocks: [
        { cols: [
          [ { h3: "YH Akademin" }, { courses: [
            ["done", "Object-oriented programming with C#"],
            ["done", "Database development"],
            ["done", "Dynamic web applications"],
            ["done", "Agile development"],
            ["done", "Business acumen"],
            ["now", "Programming with C# .NET"],
            ["next", "Test-driven development"],
            ["next", "Windows application development"],
            ["next", "Cloud services and deployment"]
          ] } ],
          [ { h3: "AI" }, { list: [
            "Building AI agents that take on tasks, work in parallel and run on a schedule",
            "Writing structured prompts: role, objective, context, instructions",
            "Automating workflows in n8n: trigger, logic and action",
            "Going from idea to app through a product brief",
            "Image, video and voice with AI",
            "Security and privacy when AI gets access",
            "Intro to AI 1 and 2, Linköping University · Elements of AI"
          ] } ]
        ] }
      ] },
      ai: { title: "My thoughts on AI", blocks: [
        { p: "AI doesn't make human skill less important, quite the opposite. The more powerful the technology becomes, the more important judgement, taste and the ability to make the right decisions become. AI is a tool, but the value is created by people who can ask the right questions, review the answers and take responsibility for the result. That's why I'm positive about AI, as long as its development is led by knowledgeable and responsible people." },
        { open: "aitools", label: "AI tools" },
        { h3: "AI generalist" },
        { p: "I'm not an AI specialist. I'm an AI generalist. I believe AI will do more than most people imagine, faster than many are prepared for. Many of the tasks that take up our time today will be automated, streamlined or disappear entirely. In many areas AI will simply be better than humans. That doesn't make people less important, but it means we need to redefine where our value lies. So for me the most interesting question isn't what AI can do, but what we should do once it does." },
        { p: "Creativity, relationships, meaning and the ability to express something genuine cannot be automated. That's why I see AI as a tool, not a replacement, helping us with repetitive and time-consuming work to free up time. Since AI makes it pointless to keep measuring human value in productivity, technological progress must ultimately be about increasing people's wellbeing, not just their efficiency." },
        { p: "But I'm not naive. We are in the middle of one of the biggest societal shifts in human history. History shows that big transitions rarely happen without turbulence, and it will probably take time before we find a new balance. That's why I worry less about AI than about our ability to steer its development in the right direction. The more powerful the technology becomes, the more important the conversation about which values, principles and shared goals should guide it. It's a challenge no country can solve on its own." },
        { p: "To my children I give a simple piece of advice: be curious, stay informed and follow what's happening. But don't forget to do what you love. AI will become a given. The ability to feel joy, meaning and satisfaction in what you do is still something that can only come from within yourselves." },
        { h3: "AGI" },
        { p: "We are still at an early stage of AI development, yet we have already come further than many thought possible just a few years ago. Progress towards artificial general intelligence (AGI) is exponential, which makes it both fascinating and hard to grasp. We know the next big breakthrough is coming, but not exactly when, what it will look like or what its consequences will be. It feels as if the map is being drawn while we travel through the landscape." },
        { p: "I'm not particularly worried about AI getting smarter, it clearly is. On the contrary, I believe it means enormous progress in areas like research, education and healthcare. What humbles me is how little we actually know about where it leads as the pace of change keeps accelerating." },
        { p: "In other words, I understand the current debate about slowing down and regulating development. Not mainly because I think the technology itself is dangerous, but because society needs time to understand what AGI means and what consequences it brings. When the playing field changes faster than our laws, institutions and norms, a vacuum appears that risks being filled by commercial interests, concentration of power and short-term incentives. So the question isn't what AI will be able to do, but whether we have time to develop the wisdom needed to use it well." },
        { p: "It's no longer just about technology either. If an AI can help me understand my thoughts, untangle my feelings or comfort me when I need it, does it matter that it doesn't feel anything itself? Questions that used to belong to philosophy suddenly feel practical. The most interesting question isn't when AGI arrives, but how it will change the way we see ourselves. When intelligence is no longer uniquely human, we are forced to think about what actually is." }
      ] },
      aitools: { title: "AI tools", back: "ai", blocks: [
        { p: "A selection of AI tools worth knowing about." },
        { tools: true }
      ] },
      bookshelf: { title: "My bookshelf", blocks: [
        { p: "My favourite books. The list is fetched from my own API, Bokhyllan API (project 4), once it's built." },
        { shelf: 5 },
        { note: "[[Books from Bokhyllan API appear here]]" }
      ] },
      contact: { title: "Contact", blocks: [
        { p: "Looking for an internship in 2027 and a job after graduation. Say hello!" },
        { form: true }
      ] },
      prompts: { title: "Workflow", blocks: [
        { p: "This is how I built the site, from an empty folder to publishing. I decided, AI wrote." },
        { steps: [
          "**A desk of its own for the AI.** I created a project folder on my computer and gave Claude Code access to that folder only, like a new hire getting a workspace and their papers.",
          "**Rules and memory in .md files.** First we wrote CLAUDE.md, a rules file the AI reads every time it starts working. Around it grew small markdown files: my profile, sitemap, projects, tone of voice (content DNA) and a log of every decision.",
          "**Context instead of guesswork.** The AI read my own material: CV, course folders, my LinkedIn archive and notes from an AI course. It was not allowed to make anything up about me, and nothing private was published.",
          "**Interview before code.** I dictated my scattered thoughts and let the AI ask questions, one topic at a time, before anything was built.",
          "**A reference and a first draft.** I picked inspiration from illustrated portfolios, and the AI built a first draft for me to react to.",
          "**Ok or not ok.** Every part was reviewed point by point, often for many rounds. The vine on the buttons ended up as a pine branch.",
          "**Local first.** Everything was built and tested in the browser on my own computer, in light and dark mode and on mobile, before anything was published.",
          "**Publishing.** Finally the site is version-controlled with Git and published on GitHub Pages."
        ] },
        { download: "docs/prompt-library.md", label: "Prompt library", file: "Lina-Samuelsson-prompt-library.md" },
        { h3: "AI support: what was used for what" },
        { credits: [
          ["Claude Code", "Code, structure and copy, following my decisions"],
          ["Claude", "The hero image and the pine branches, painted in code"],
          ["Wispr Flow", "I dictated my instructions instead of typing"]
        ] }
      ] }
    },
    credits: [
      ["Director and executive director", "Lina Samuelsson"], ["Head of taste, judgement and decisions", "Lina Samuelsson"],
      ["Heavy lifting, code and endless patience", "Claude"], ["Special effects", "One leaf that falls exactly once"],
      ["Typefaces", "Yuji Boku and Zen Kaku Gothic New, Google Fonts"], ["Inspiration", "onepagelove.com, andrewlindstrom.com"],
      ["Stage", "GitHub Pages"], ["No AI agents were harmed in the making of this site", ""]
    ],
    form: { name: "Name", email: "Your email", message: "Message", send: "Send", sending: "Sending …", sent: "Thank you! Your message has arrived, I'll get back to you.", error: "Something went wrong. Please try again later, or reach me on LinkedIn.", pending: "[[The form goes live once the Web3Forms key is added]]" }
  }
};
