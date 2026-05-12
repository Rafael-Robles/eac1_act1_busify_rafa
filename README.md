# Busify


Es una app d'Angular que es per al modul de prog. avançada. Aquesta aplicacio ha sigut per poder consultar totes les linies d'autobus que tenen trajectes llargs.
També conte un buscador per consultar les linies i el seu estat, ocupacio, etc.

A part, la seccio de preferits esta protegida per a que nomes usuaris amb sessio iniciada puguin entrar, sino et torna a la pagina de log in.

Aquesta app no ha sigut desenvolupada desde 0, sino que ha sigut en part la idea meva quan vaig fer el meu propi projecte final de DAW, en aquell projecte, vaig fer quasi el mateix que en aquesta app, però amb la diferència de que he utilitzat un CLI en canvi d'escriure codi PHP, JS, SQL i HTML pur.

Es per això que el disseny de la pàgina, els icones i assets estan trets d'aquell projecte meu. (busify.cat)



## Rutes de l'app


/ === Redirigeix a /cataleg
/cataleg === Component: CatalegPageComponent - Acces: Public
/cerca === Component: CercaComponent - Acces:Públic
/detall/:id === Component: DetallComponent - Acces: Public
/preferits === Component: PreferitsComponent - Acces: Privado (requiere login)
/login === Component: LoginComponent - Acces: Public
/** === Component: Redirigeix a `/cataleg`


## Com s'executara en local

Inserim aquestes comandes:

git clone https://github.com/Rafael-Robles/eac1_act1_busify_rafa.git
cd eac1_act1_busify_rafa
git checkout ra4-navegacio
npm install (en cas de que no tinguis node)
ng serve

Si tot funciona correctament el terminal et dira que entris a un link semblant a aquest: http://localhost:4200





## Build de producció

Inserim aquesta comanda: 

ng build --configuration production


Els arxius generats van a la carpeta dist/. El bundle inicial pesa 239KB i el chunk de favoritos que seria el 'lazy loading' uns 8,5KB 




## Credenciales de prueba

Per accedir a la seccio de preferits iniciant sessio, has d'anar a la pagina d'iniciar sessio i emplenar el formulari amb aquestes credencials:

- Email: admin@test.com  
- Contrasenya: 1234
