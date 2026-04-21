# Formularis

## FormulariCerca

Formulari per cercar els elements

### Validacio sincrona
- Que sigui minim 2 caracters i maxim 50




### Validacio asincrona
- Fem simular una consulta a l'API amb retard de 500 ms
- Si no hi ha resultats, et dona error



### Comportament
- Debounce de 400ms alhora de cercar
- Fem mostrar els errors nomes si el camp l'hem seleccionat/tocat diguem-ne
- Botó "Netejar"
- Fem un indicador visual que digui ("Validant...") mentres fa la validació








## PreferitsPanel (FormArray)

Gestie de les notes per cada element preferit.



### Funcionalitats
- Afegir notes, quantes vulguis (+)
- Eliminar notes (x)

### Validacions
- Minim 3 caracters
- Camp obligatori

### Persistència
- Les notes es guarden a localStorage juntament amb els preferits i encara es mostren si les recarreguem gracies a aquest

### FormArray
- Cada element preferit te un FormArray associat
- Es sincronitza amb el servei gracies a valueChanges