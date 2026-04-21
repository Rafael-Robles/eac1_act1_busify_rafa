## Mapeig API a Model Intern


## Problemes que genera el model de l'API extern al model intern junts:

 - Forta dependencia amb l'api externa, per evitar que quan l'API canvii les variables, cambiar-los al nostre codi propi
 - Pot barregar idiomes diferents, fent que pugui haber confusió a la lectura.
 - Pot donar errors si posem tipus incorrectes com un string a un number cosa que farà errors si fem operacions, etc.

## Adaptadors

 - "adaptarElementApi()": Fa transformar nomes UN element individual
 - "adaptarElementsApi()": Transforma absolutament tota l'array d'elements de l'API

## Taula de mapeig de camps

ElementApiResponse  ElementCataleg  Tipus

id                  id              string
nom                 titol           string
descripcio          descripcio      string
categoria           categoria       string
preu                preu            number
imatge              imatgeUrl       string
popular             esPopular       boolean
stock               unitats         number


 - ElementApiResponse es el mapeig de l'API
 - ElementCataleg es el model intern nostre