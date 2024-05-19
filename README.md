# Moment 4, _Angular II_

Den här README-filen har skapats för att beskriva momentets syfte och hur lösningen är konstruerad.

## Momentets syfte

- Träna på att göra HTTP-anrop med Angular och HttpClient.
- Skapa services.
- Presentera data på skärmen från resultat från HTTP-anrop.
- Sortera och söka data.

## Konstruktion

Webbplatsen är en så kallad SPA; en *single page application*, dvs. en webbplats med bara en sida. Den innehåller totalt 3 komponenter; en komponent för header, en för footer och en för själva innehållet, main. Innehållet på main består utav en tabell som visar en kurslista bestående av kurskod, kursnamn och progression. Den hämtas via en service från en webbtjänst genom användning av _HttpClient_. Via _data binding_ med _*ngFor_ och _ngModel_ hämtas data och skrivs ut i en _template_ på skärmen. Via "sökfältet" kan man filtrera sökresultatet på kurskod eller kursnamn och sortera listan via klick på rubrikerna i tabellen för kurskod, kursnamn och progression. Dessa uppdateringar sker direkt i gränssnittet utan sidladdning. 

Webbplatsen är stylad med SCSS, en del globalt som normalisering, regler för body och rubriker. Resterande styling är gjord för och i respektive komponents SCSS-fil. Deklarerade variabler och font ligger i en global variables.scss-fil och importeras via _import_ på aktuella sidor. 

## Utveckling
Nedan följer en instruktion (på engelska) för hur skapandet och utvecklingen av ett Angular-projekt kan göras. Det förutsätter att Angular är installerat på datorn med det globala kommandot _npm install -g @angular/cli_. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

### Creating a project 
Run `ng new project-name` to create your Angular-project.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



**_Skapad av Jenny Lind, jeli2308._**