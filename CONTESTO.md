# Contesto del progetto

Questo file riassume cos'è il sito, le regole da rispettare e lo storico delle modifiche.
Va aggiornato dopo ogni richiesta: una nuova voce in cima allo **Storico**, e le altre sezioni se cambiano.

Ultimo aggiornamento: 15 novembre 2026

## Cos'è

Il portfolio di Angelo Lepore ("Angolo"), UI/UX designer e illustratore di Napoli.
Sito statico in Astro su GitHub Pages, con dominio **angelolepore.it** (`alepore22.github.io` rimanda lì).

## Regole date da Angelo

- La struttura è semplice e serve a far emergere lui e i suoi progetti.
- Quattro sezioni nella home, in quest'ordine: **Hero, Progetti, Chi sono, Contatti**.
- Il tono e lo stile vengono dal PDF "Angelo Lepore – Portfolio 24/25": lavanda e crema, titoli tondi e grossi, note scritte a mano, ironia.
- I progetti stanno in una **griglia bento** moderna.
- Deve sembrare un **sito**, non il PDF impaginato: testo vero, immagini ritagliate, interazioni da web.
- Il sito è in italiano.
- Tra i progetti ci sono anche le app fatte con Claude Code: **TACA** e **Demons**.

## Stato attuale

- **Online** su https://angelolepore.it con il redesign (dal 10 novembre 2026).
- **Rami:** si lavora su `redesign` (GitHub: `alepore22/alepore22.github.io`); per pubblicare si porta `redesign` su `main`. Oggi `main` e `redesign` coincidono.
- **Pubblicazione:** la sorgente di Pages è "GitHub Actions". Ogni push su `main` ricostruisce e pubblica il sito con `.github/workflows/deploy.yml`, in circa due minuti.
- **Modifiche non ancora in un commit:** nessuna.

## Com'è fatto

| Cosa | Dove |
|---|---|
| Nome, email, città, link social | `src/site.ts` |
| Dati strutturati per Google (Person, WebSite) | `src/schema.ts` |
| Dominio, sitemap, font non incorporati | `astro.config.mjs` |
| Pagina 404 | `src/pages/404.astro` |
| Report degli audit SEO (fuori dal progetto) | `~/Desktop/angelolepore.it-audit/` |
| Istruzioni per i motori di ricerca | `public/robots.txt` |
| Colori, font, pulsanti, animazioni di ingresso | `src/styles/global.css` |
| Barra in alto, footer, transizioni tra pagine | `src/layouts/Base.astro` |
| Home (hero, striscia, bento, chi sono, contatti) | `src/pages/index.astro` |
| Pagina di un progetto | `src/pages/work/[slug].astro` |
| Testi dei progetti (un file Markdown ciascuno) | `src/content/work/` |
| Campi ammessi nei file dei progetti | `src/content.config.ts` |
| Copertine | `src/assets/covers/` |
| Immagini dei progetti | `src/assets/work/<progetto>/` |
| Video (TACA) | `public/media/` |
| Ritratto con gli occhi che seguono il cursore | `src/components/Portrait.astro` |
| Demoni animati | `src/components/DemonSwarm.astro` |
| Freccia a ricciolo | `src/components/Arrow.astro` |
| Pubblicazione automatica | `.github/workflows/deploy.yml` |

Come aggiungere un progetto è spiegato nel `README.md`.

**Stile**
- Colori: lavanda `#AA80FF`, crema `#FFF5EE`, inchiostro `#141418`; ogni progetto ha il suo colore (`color` e `ink` nel suo file).
- Font: Bagel Fat One (titoli), Gaegu (note a mano), Inter (testo). Sono i più vicini a quelli del PDF, non gli originali.

**Progetti** (in ordine): Outsoon, Demons, TACA, Gododeck, Accìrete, Pharos, WeiToYou.
I filtri del bento usano il campo `group`: `uiux`, `grafica`, `app`.

**Comandi**

```bash
npm run dev
```

```bash
npm run build
```

## Cose in sospeso

- Rileggere i testi che non ha scritto Angelo: le traduzioni dei detti in Accìrete e le frasi di raccordo nei progetti.
- Confermare l'email pubblica (`src/site.ts`) e che "Unicorn Donkeys" sia corretto.
- Outsoon: manca il link all'App Store.
- TACA e Demons: i repository sono privati, quindi non hanno link; le date sono 11.2026.
- Pharos e WeiToYou usano ancora le tavole di Behance con il testo dentro le immagini.
- Su telefono il titolo "Ecco sette progetti…" va su quattro righe.
- Cartelle locali fuori da git che si possono eliminare: `_old/` e `Asset/`.
- SEO, cose che può fare solo Angelo: registrare `angelolepore.it` in Google Search Console (verifica DNS), inviare `https://angelolepore.it/sitemap-index.xml` e chiedere l'indicizzazione; mettere il link al sito su LinkedIn, Behance e App Store.
- SEO, contenuti da scrivere con Angelo: case study più lunghi (400–600 parole: vincoli, alternative scartate, risultati come download o esiti dei test); in Chi sono una frase di presentazione, formazione e collaborazioni.

## Storico

Le voci più recenti stanno in cima.

### 15 novembre 2026 — Demons senza "Flat, a tessere"
- Eliminata dal case study di Demons la sezione "Flat, a tessere. Tranne loro": la frase sulla palette, i campioni di colore, la frase sui semi e l'immagine delle sei varianti. Ora si passa dal wireframe a "Dall'appunto al mio iPhone".
- Così sparisce anche l'ultimo problema di contrasto (il campione blu). L'immagine `src/assets/work/demons/varianti.webp` resta nella cartella ma non è più usata.
- README: lo stile `swatches` resta disponibile, con la sintassi scritta lì, perché nessun progetto lo usa più.
- Pubblicato insieme alle correzioni dal secondo audit.

### 15 novembre 2026 — Correzioni dal secondo audit SEO
- Spostata la cartella `claude-seo/` (il repository del plugin SEO) fuori dal progetto, in `~/Work/claude-seo`. Le skill installate in `~/.claude/skills` sono copie e non dipendono da lei.
- Immagini responsive anche nei case study: `image.layout: 'constrained'` in `astro.config.mjs`. Accìrete su telefono da 696 a 286 KiB.
- Contrasto: le etichette delle testate ("Quando", "Cosa"…) non sono più al 75% di opacità, la gerarchia la fa il peso del testo. Tolta l'opacità anche ai codici della palette di Demons e alle etichette nella 404. Restava il campione blu della palette di Demons (4,49 contro 4,5), poi tolto insieme alla sezione.
- Title della home: "Angelo Lepore, UI/UX designer e illustratore a Napoli".
- Nuovo campo facoltativo `description` per Google nei progetti; usato per WeiToYou e Accìrete (151 e 143 caratteri). Il riassunto visibile non cambia.
- In fondo a ogni progetto, prima di "Prossimo progetto", il blocco "Altri progetti": pillole colorate verso gli altri 5 progetti, prima quelli della stessa famiglia.
- Aggiunto `public/favicon.ico`. Tradotto in italiano solo il testo del `<title>` dentro `src/assets/portrait.svg`: il disegno non è cambiato.
- Lighthouse in locale (mobile): Accìrete, Gododeck, WeiToYou accessibilità 100; Demons 96 per il campione blu (poi tolto).
- Salvato in un commit, inviato su `redesign` e pubblicato su `main`.

### 15 novembre 2026 — Nuovo audit SEO dopo i fix
- Rifatto l'audit sul sito online: punteggio **82/100** (stamattina 56). Report in `~/Desktop/angelolepore.it-audit/` (`FULL-AUDIT-REPORT.md`, `ACTION-PLAN.md`); l'audit precedente è nella sottocartella `precedente-2026-11-15-prima-dei-fix/`.
- Lighthouse in locale: home mobile 99/100/100/100, LCP 1,8 s, CLS 0. PageSpeed Insights non disponibile (quota esaurita); niente dati di campo.
- Nessun problema critico o grave. Da fare nel codice: immagini responsive nei case study, contrasto delle etichette nelle testate di 4 progetti, description più lunghe, title home con "Napoli", link tra progetti, `favicon.ico`.
- Nessuna modifica al sito in questa richiesta.

### 15 novembre 2026 — Miglioramenti SEO (dall'audit in `~/Desktop/angelolepore.it-audit`)
- Dominio: `site` ora è `https://angelolepore.it`. Canonical, `og:url` e `og:image` non puntano più a `alepore22.github.io`.
- Sitemap generata a ogni build (`@astrojs/sitemap`, esclude la 404) e `public/robots.txt` che la indica.
- Dati strutturati: Person + WebSite in home (`src/schema.ts`); CreativeWork + BreadcrumbList su ogni progetto.
- Home: l'H1 ora è "Sono Angelo Lepore, UI/UX designer e illustratore a Napoli." (stesso aspetto di prima); "Hello There!" resta il saluto grande ma non è più il titolo. Meta description da 146 caratteri.
- Progetti: nuovo campo obbligatorio `headline` e title come "TACA, timer Pomodoro napoletano per iOS · Angelo Lepore". Categorie in italiano ("Illustrazione", "Grafica"). Ogni progetto ha la sua immagine di anteprima (copertina 1200×630).
- Velocità: i font non sono più incorporati nel CSS e si caricano solo i sottoinsiemi latini (CSS da 120 KB a meno di 5 KB compressi). Video di TACA ricompresso da 1,25 MB a 490 KB, e in home parte solo quando è sullo schermo.
- Autoritratto: provato a disegnarlo una volta sola e riusarlo con `<use>`, ma il disegno risultava spostato e tagliato in alto e a sinistra. Annullato su richiesta di Angelo: `src/components/Portrait.astro` è tornato com'era, quindi il disegno resta ripetuto due volte in home e la descrizione resta in inglese.
- Nuova pagina 404 nel tono del sito, con i link ai progetti.
- Verificato in anteprima: build, JSON-LD valido, nessuno scroll orizzontale a 390 px, ritratti di nuovo interi dopo l'annullamento, video che parte allo scorrimento.
- Non fatto (da audit): `llms.txt` (facoltativo), testi più lunghi e Search Console (vedi Cose in sospeso).
- Salvato in un commit, inviato su `redesign` e pubblicato su `main`.

### 13 novembre 2026 — Striscia sotto l'hero senza vuoti
- Problema: un giro di parole è largo circa 1050 px e la striscia ne conteneva solo due. Su schermi più larghi di così, prima di ripartire restava un vuoto a destra e poi il testo compariva di colpo. Su telefono non succedeva.
- Ora ogni metà della striscia ripete le parole 4 volte (circa 4200 px), più larga di qualunque schermo: il giro riparte senza vuoti né salti. Verificato a 390, 1024, 1440, 1920, 2560 e 3440 px.
- La durata è passata da 36 a 144 secondi, quindi la velocità resta la stessa di prima.
- Se aggiungi o togli parole dalla striscia non serve cambiare altro; se le parole diventano molto meno, aumenta `tickerRepeats` in `src/pages/index.astro` (e la durata in proporzione).
- Salvato in un commit, inviato su `redesign` e pubblicato su `main`.

### 10 novembre 2026 — Email che va a capo nei contatti
- Quando la colonna è stretta, l'email andava a capo a metà parola ("outlook.c / om").
- Ora può andare a capo solo dopo la @ ("lepore.angelo@ / outlook.com"); su una riga sola quando c'è spazio. Verificato a 1440, 1100, 900, 800, 600, 375 e 320 px.
- Il link `mailto:` e il pulsante "Copia l'indirizzo" usano sempre l'indirizzo intero.
- Salvato in un commit, inviato su `redesign` e pubblicato su `main`.

### 10 novembre 2026 — Via Instagram dai contatti
- Tolto il link a Instagram nella sezione Contatti: sotto "Qui altre cose molto carine" resta solo Behance.
- Il link resta scritto in `src/site.ts` (`links.instagram`), ma il sito non lo usa più da nessuna parte.
- Salvato in un commit, inviato su `redesign` e pubblicato su `main`.

### 10 novembre 2026 — Il redesign va online
- Sorgente di GitHub Pages passata da "ramo main" a "GitHub Actions".
- `main` portato al commit `c272e24` di `redesign` (senza merge, la storia era lineare) e inviato su GitHub.
- Pubblicazione automatica riuscita: https://alepore22.github.io mostra il nuovo sito, pagine progetto e video di TACA compresi.
- Questa voce è salvata in un commit e inviata su GitHub (ramo `redesign`).

### 10 novembre 2026 — Striscia e file di contesto
- Tolto "Lettering" dalla striscia che scorre sotto l'hero. Restano: UI/UX design, Illustrazione, Grafica, App iOS, Napoli.
- Creato questo file.
- Salvato in un commit e inviato su GitHub (ramo `redesign`).

### 10 novembre 2026 — Da PDF a sito (commit `ef74402`)
- Pagine progetto riscritte con testo vero e immagini ritagliate dalle tavole del PDF, affiancate al testo.
- Bento: filtri, descrizione al passaggio del mouse, video di TACA registrato dal simulatore, demoni animati per Demons.
- Barra fissa che segue la sezione, transizioni tra pagine, fascia "Prossimo progetto", striscia scorrevole sotto l'hero.
- Contatti: pulsante "Copia l'indirizzo". Footer con link e "Torna su".
- Accìrete: ogni sfondo ha il detto e la traduzione. Demons: palette in HTML.

### 9 novembre 2026 — Restyling nel tono del PDF (commit `46c0a21`)
- Palette lavanda e crema, font Bagel Fat One, Gaegu e Inter, note a mano e frecce a ricciolo, sito in italiano.
- Sezione progetti trasformata in bento con sette progetti.
- Aggiunti Outsoon, Gododeck, Accìrete (che assorbe Neapolitan Wallpaper), TACA e Demons.

### 9 novembre 2026 — Nuovo sito in Astro (commit `4bb99a2`)
- Sostituita la pagina HTML unica con un sito Astro: home, pagine progetto da file Markdown, SEO, favicon, workflow per GitHub Pages.
- Ritratto convertito in vettoriale, con gli occhi che seguono il cursore.
- Primi tre progetti presi da Behance: Pharos, WeiToYou, Neapolitan Wallpaper.
- Creato il ramo `redesign` sopra la storia del vecchio sito.
