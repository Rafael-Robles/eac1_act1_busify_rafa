# Busify, Optimitzacio

## Estrategia OnPush

He aplicat un OnPush en dos components de l'app, la cosa es que Angular no te per que comprobar un component per a cada cicle si no es mostra res nou,
nomes es comprovara quan hi hagi alguna cosa nova que s'hagi de mostrar

### Components amb OnPush

BusCardComponent

El vaig escollir perque es una targeta que nomes mostra infomacio que rep de fora gràcies a @Input. Cada vegada que l'usuari fa scroll, Angular comprova que les targetes que hagin cambiat de referencia





CatalegPageComponent

La llista de busos es genera nomes una sola vegada i no canvia mentres l'usuari va utilitzant aquesta. Amb OnPush faig que Angular no comprovi innecerariament cada que 
fem algo a l'app.




### Inmutabilitat

OnPush no modifica els objectes directament, quan vulgui actualitzar algun bus, en canvi de fer bus.places = 40, en crearia un objecte nou
Exemple:
bus = { ...bus, places: 40 };


Aixi angular detecta que la referencia ha cambiat i així doncs si torna a comprobar ara si el component.






## Virtualizació amb Angular CDK

Per al llistat de busos he utilitzat el scroll virtual de CDK com ha dit l'exercici, son 60 parametres al DOM pero l'usuari nomes veu com 6 o 7 a la vegada

cdk-virtual-scroll-viewport i *cdkVirtualFor nomes mostraran els elements visibles a cada moment, unes apareixen mentres que altres s'esborren del frontend, com si els nodes
s'estiguessin reciclant.



### Configuración usada



- Directiva: *cdkVirtualFor dins de cdk-virtual-scroll-viewport
- itemSize: 100px (altura de cada targeta de bus amb el seu respectiu padding) 
- Altura viewport: 500px
- Numero de linies de bus: 60



He posat el itemSize a 100px perque cada targeta te 80px de contingut més els 20px del padding.
