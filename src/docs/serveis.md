# Serveis


## ElementService

Aquest servei fa que es gestoni les comunicacions amb l'API externa


### Endopoints

 - Get elements?popular=true : Fem que nomes obtinguin aquest elements que tinguin la variable 'popular' en true
 - GET elements?nom_like=terme : Fem la cerca per nom

### Estats gestionats

 - carregant: Fa veure que la peticio s'està processant
 - error: Es mostrara un missatge d'error si falla aquesta peticio
 - elements: Es mostrara la llista d'elements carregats












## PreferitsService

Aquest servei gestiona els elements preferits que ha guardat l'usuari

### Funcionalitats

 - Afegir preferits
 - Eliminar preferits
 - Veure la quantitat de preferits total de l'usuari
 - Veure l'estat de cada objecte, per veure si es un element que esta preferit o no


### Persistencia
 - S'utilitza localStorage amb la clau 'preferits-cataleg'
 - Aquestes dades persistiran i es guardaren encara que recarreguem l'aplicacio es seguiran recuperant

### Estat reactiu
- preferits: signal amb la llista d'elements
- totalPreferits: computed amb el nombre ttoal

### Gestio d'errors

 - En aquest cas farem us del try catch per accedir a aquest localStorage