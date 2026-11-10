---
title: TACA
date: "11.2026"
category: App iOS
group: app
summary: "Timer A Cosc Aperte: un Pomodoro ispirato alla limonata a cosce aperte di Napoli. Il bicchiere si riempie mentre lavori, e alla fine esplode."
role: Idea, design e sviluppo
tools: [Claude Code, SwiftUI, SpriteKit, ActivityKit]
cover: ../../assets/covers/taca.webp
coverAlt: "TACA in funzione: il bicchiere si riempie di limonata mentre il timer scorre."
video: /media/taca.mp4
color: "#ffe45c"
ink: "#25242e"
note: "fatto con Claude Code"
order: 3
---

A Napoli d’estate c’è la limonata a cosce aperte: limone, acqua e un cucchiaino di bicarbonato che la fa schiumare di colpo, tanto che per berla ti devi allargare. TACA prende quel rito e lo trasforma in un timer Pomodoro.

## Lo schermo è un bicchiere

Scegli quanti minuti, versi, e la limonata sale mentre passa il tempo. Cubetti di ghiaccio, fette di limone ed emoji estive cadono nel liquido e galleggiano con una fisica reale. Allo scadere arriva il bicarbonato e tutto esplode in una montagna di schiuma. Salute!

![Scelta della durata con i preset 5′, 15′, 25′, 45′ e 60′.](../../assets/work/taca/01.webp)
![Il bicchiere che si riempie mentre il getto versa, con il tempo in alto.](../../assets/work/taca/02.webp)
![Il bicchiere pieno, con ghiaccio e fette di limone che galleggiano.](../../assets/work/taca/03.webp)
![Fine sessione: “Salute! Hai completato 5 min di concentrazione”.](../../assets/work/taca/04.webp)

## Il tempo scandito dal ghiaccio

Circa un cubetto al minuto, a volte accompagnato da una fetta di limone o da un’emoji estiva. Gli oggetti si urtano, ruotano e galleggiano in modo diverso: alcuni restano a galla, altri si fermano a metà, altri si posano sul fondo. E se inclini il telefono, la superficie resta orizzontale.

## Fatto con Claude Code

TACA l’ho progettata e costruita insieme a Claude Code:

- **SwiftUI** per l’interfaccia e **SpriteKit** per la fisica di ghiaccio e limoni.
- Una **Live Activity** per la schermata di blocco e la Dynamic Island, più una notifica a fine sessione.
- **Liquid Glass** e le Human Interface Guidelines: VoiceOver, testo dinamico, modalità scura e “Riduci movimento”.
