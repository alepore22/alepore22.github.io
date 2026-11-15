---
title: Demons
date: "11.2026"
category: App iOS
headline: "journal vocale per iOS"
group: app
summary: "Un journal vocale che ha paura di te: ogni nota vocale diventa un piccolo demone che fluttua sullo schermo."
role: Idea, design e sviluppo
tools: [Figma, Claude Code, SwiftUI, AVFoundation, Core Haptics]
cover: ../../assets/covers/demons.webp
coverAlt: "Il demone di Demons, un fumetto nero con due occhi chiari, su fondo viola."
color: "#7b3cf0"
ink: "#ffffff"
note: "fatto con Claude Code"
order: 2
---

Tutti abbiamo pensieri intrusivi. Scriverli in un diario funziona, ma è freddo: un elenco di testo che nessuno vuole rileggere. E se un pensiero avesse un corpo? Dargli una forma vuol dire metterlo fuori da te.

<div class="split narrow">

## Una schermata, tre gesti

Niente tab bar, niente menu. Tutto lo schermo è dei demoni: vagano, rimbalzano, si evitano.

- **Premi il microfono** e registri: nasce un demone.
- **Lo tocchi** e riascolti la nota, con la sua voce.
- **Lo trascini nel secchio** e sparisce per sempre, con un Wilhelm Scream.

![La schermata di Demons su iPhone, con sei demoni che fluttuano e il microfono in basso a destra.](../../assets/work/demons/schermata.webp)

</div>

<div class="split flip narrow">

## Prima, su carta

Il microfono sta in basso a destra, dove arriva il pollice. Il cestino è nascosto: emerge solo mentre trascini un demone. Il resto è spazio libero.

![Il wireframe: demoni tratteggiati, cestino nascosto e microfono.](../../assets/work/demons/wireframe.webp)

</div>

## Dall’appunto al mio iPhone

Disegnato in Figma e costruito con Claude Code:

- **SwiftUI nativo**, una schermata sola.
- **62 test automatici** su audio, fisica, vibrazione e scossoni.
- **Italiano e inglese.**
- Se scuoti il telefono i demoni vengono sballottati, e qualcuno resta confuso con gli occhi a spirale.
