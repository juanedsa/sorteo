# Sorteo

El objetivo de este proyecto es realizar un Sorteo para una Rifa y seleccionar un ganador de una lista de usuarios.

Para este proyecto se Utilizaron las siguientes tecnologias:
  - Angular
  - Materialize CSS
  - Rx/js
  
# Versiones que se usaron

  - node: 6.9.1
  - angular-cli: 1.0.0-beta.28.3
  - Angular 2.4.10
 
# Proceso de desarrollo

Para obtener la lista de usuarios utilice un Api que me provee una lista de usuarios aleatorios [randomuser], una vez los tenia descargados, corro un Intervalo de 30 segundos y voy seleccionando los posibles ganadores hasta llegar al Ganador del sorteo el número 15.

# Proceso para poner en marcha.

- Clonar el proyecto
```sh
git clone https://github.com/juanedsa/sorteo.git
cd sorteo
```
- Instalar las dependencias usando node.
 ```sh
npm install
```

- correr el servidor y entrar a la direccion http://localhost:4200/
 ```sh
ng serve
```

[randomuser]: <https://randomuser.me>
