# Contesto del progetto

Questo file riassume cos'è il sito, le regole da rispettare e lo storico delle modifiche.
Va aggiornato dopo ogni richiesta: una nuova voce in cima allo **Storico**, e le altre sezioni se cambiano.

Ultimo aggiornamento: 10 novembre 2026

## Cos'è

Il portfolio di Angelo Lepore ("Angolo"), UI/UX designer e illustratore di Napoli.
Sito statico in Astro, pensato per GitHub Pages su `alepore22.github.io`.

## Regole date da Angelo

- La struttura è semplice e serve a far emergere lui e i suoi progetti.
- Quattro sezioni nella home, in quest'ordine: **Hero, Progetti, Chi sono, Contatti**.
- Il tono e lo stile vengono dal PDF "Angelo Lepore – Portfolio 24/25": lavanda e crema, titoli tondi e grossi, note scritte a mano, ironia.
- I progetti stanno in una **griglia bento** moderna.
- Deve sembrare un **sito**, non il PDF impaginato: testo vero, immagini ritagliate, interazioni da web.
- Il sito è in italiano.
- Tra i progetti ci sono anche le app fatte con Claude Code: **TACA** e **Demons**.

## Stato attuale

- **Online** su https://alepore22.github.io con il redesign (dal 10 novembre 2026).
- **Rami:** si lavora su `redesign` (GitHub: `alepore22/alepore22.github.io`); per pubblicare si porta `redesign` su `main`. Oggi `main` è al commit `c272e24`: `redesign` ha in più solo l'aggiornamento di questo file, che non cambia il sito.
- **Pubblicazione:** la sorgente di Pages è "GitHub Actions". Ogni push su `main` ricostruisce e pubblica il sito con `.github/workflows/deploy.yml`, in circa due minuti.
- **Modifiche non ancora in un commit:** nessuna. Il ramo `redesign` locale e quello su GitHub coincidono.

## Com'è fatto

| Cosa | Dove |
|---|---|
| Nome, email, città, link social | `src/site.ts` |
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
- Demons: l'immagine delle varianti è a bassa risoluzione.
- Su telefono il titolo "Ecco sette progetti…" va su quattro righe.
- Cartelle locali fuori da git che si possono eliminare: `_old/` e `Asset/`.

## Storico

Le voci più recenti stanno in cima.

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
