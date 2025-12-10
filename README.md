# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Charlotte Moolenaar

  #### Je startniveau:
  Rood / Zwart

  #### Je focus:
  Surface plane (als er nog tijd is Responsive)
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  link naar website: Osmo.supply of apple.com

  #### Screenshot(s) van de eerste pagina (small screen): 
  Homepagina Apple
  
  <img src="readme-images/apple_homepagina.jpg" width="375px" alt="Homepagina van Apple">

  #### Screenshot(s) van de tweede pagina (small screen):
  Productpagina Iphones Apple 
  
  <img src="readme-images/apple_productpagina_iphones.jpg" width="375px" alt="Productpagina Iphones van apple">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Tijdens de toegankelijkheidstest op de Apple-website kwamen een aantal bevindingen naar voren:

  - De HTML bevatte veel onduidelijke klassen en was niet volledig gevalideerd, wat de leesbaarheid van de code vermindert.
  - De structuur van de koppen (zoals H2 en H3) zou duidelijker en consistenter kunnen worden toegepast om de inhoud logischer te maken.
  - Lijstitems in de navigatie waren onduidelijk of ontbraken volledig, wat de semantiek en toegankelijkheid beïnvloedt.
  - Toegankelijkheid van afbeeldingen: Hoewel afbeeldingen werden beschreven met behulp van <aria-label>, ontbrak vaak alt-tekst, wat essentieel is voor schermlezers.
  - De site bevat weinig animaties. Dit biedt ruimte om de gebruikerservaring te verbeteren met creatieve maar toegankelijke animaties.
  - Voordat de gebruiker de hoofdinhoud bereikt, moet hij eerst de hele navigatie doorlopen (desktop). Hierdoor is het onduidelijk waar de pagina over gaat.
  - Knoppen zoals ‘Meer informatie’ zijn niet erg specifiek, waardoor het voor gebruikers moeilijk kan zijn om precies te begrijpen wat ze kunnen verwachten.
  - De website reageerde niet op de licht en donkere modus (systeem instellingen), wat de toegankelijkheid en consistentie beperkte.


  ## Test 1 Document

  <img src="readme-images/toegankelijkheidstest_test1_1.jpg" width="375px" alt="Toegankelijkeheids Test 1 blazijde 1 document">
  <img src="readme-images/toegankelijkheidstest_test1_2.jpg" width="375px" alt="Toegankelijkeheids Test 1 blazijde 2 document">
  <img src="readme-images/toegankelijkheidstest_test1_3.jpg" width="375px" alt="Toegankelijkeheids Test 1 blazijde 3 document">
  <img src="readme-images/toegankelijkheidstest_test1_4.jpg" width="375px" alt="Toegankelijkeheids Test 1 blazijde 4 document">
  <img src="readme-images/toegankelijkheidstest_test1_5.jpg" width="375px" alt="Toegankelijkeheids Test 1 blazijde 5 document">
  

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/breakdownschets_mobiel.png" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel - menu: 
  <img src="readme-images/breakdownschets_mobiel_menu.png" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Vanwege afwezigheid door griep moet ik nog een paar onderdelen doornemen, met name het gedeelte over de JS 3-stap. Na de voortgangsgesprek zal ik de HTML-pagina maken en publiceren op Github, aangezien ik hier pas later achter kwam dat we daar moesten aan beginnen. Ik begrijp wat er op de pagina moet komen te staan.


  ### Agenda voor meeting
  samen met je groepje opstellen

| Vragen die ik wil stellen        |
| ---              |
| Ik was er tijdens de laatste werkgroepen niet. Is er nog wat belangrijks gezegd over wat er met de website moet gebeuren? |
| Ik ben van website veranderd en heb voor apple.com gekozen. |



  ### Verslag van meeting
  Na het gesprek heb ik kort de belangrijkste resultaten samengevat:

  Tijdens de vergadering heb ik mijn vragen kunnen stellen. Er werd aangegeven dat de HTML-structuur en de schetsen voor de indeling uiterlijk volgende week klaar moeten zijn, omdat we dan met   het CSS-gedeelte beginnen. Daarnaast moeten we bij het eindresultaat minstens drie specifieke JavaScript-regels in ons project moeten toepassen (later heb ik deze werkgroep doorgenomen).  

Ik heb ook duidelijk gemaakt dat ik mijn gekozen website had gewijzigd in apple.com. Verder heb ik goed geluisterd naar de input van anderen. Hun vragen en uitleg over hun HTML-structuur gaven me meer inzicht in hoe ik mijn eigen structuur op een logische en duidelijke manier kan opzetten.

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  De opbouw van mijn HTML verliep goed. Ik had van tevoren een duidelijk idee hoe ik de structuur wilde aanpakken, zodat deze overzichtelijk en toegankelijk zou zijn (met duidelijke kopjes en een logische volgorde).


  ### Agenda voor meeting
  samen met je groepje opstellen

 | Vragen      |
 | ---              |
| Bij de opbouw van een section die helemaal klikbaar is, zou dat een list item en a zijn met daarin de elementen. |
  | Is de :root duidelijk genoeg qua naamgeving voor de kleuren. |
  | Mag ik een div gebruiken om twee elementen (a) naast elkaar te zetten met display flex? |


  ### Verslag van meeting
  Een punt waar ik op vastliep, was het naast elkaar plaatsen van twee <a> elementen. Ik vroeg me af of dit mogelijk was met een <div> en display: flex (omdat dit een makkelijke manier is), ik kreeg daar al snel te horen dat er een andere manier, zelf denk ik om display: grid te gebruiken. Verder verliepen de werkgroepen deze week goed, maar ik realiseer me dat ik in het volgende deel, CSS, echt gefocust moet blijven en goed moet nadenken over hoe ik verschillende elementen ga aanpakken.

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | Wat is het beste voor de H1? De visually hidden class of h1, a, img |
  | en dat ook nog | dit als er tijd is | nog een punt |                  |
  | ...            | ...                | ...          |                  |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>
