# Deposito a plazo fijo
Obtén cuanto es la ganancia de tu deposito a plazo fijo dependiendo del banco, tiempo, monto y moneda.

# Stack

**API**: Ruby on Rails  
**Client**: ReactJS  
**Database**: Postgres  
**Rails version**: 5.2.3  
**Ruby version**: 2.6.3  
**NodeJS version**: 10.15.3 (usada durante el desarrollo)  
**Postgres version**: 11.3  (usada durante el desarrollo) 

# Uso

Para correr la aplicacion es necesario seguir los siguentes pasos:

1. crear un archivo dentro de `config/` llamado `env_variables.yml` y colocar las credeciales para la base de datos de postgress, tal cual como se muestra en el `env_variables.example.yml`.

2. en el `root` de la aplicacion correr `bundle install`.

3. correr `rails db:create db:migrate db:seed`.

4. luego instalar las dependencias de JS, `cd client && yarn` (o `npm install`).

5. luego pueden elegir cualquiera de las siguientes opciones:

  - correr el comando `rake start`
  
  ó
  
  - correr el servidor de rails en el puerto 3001 `rails s -p 3001` y el cliente en el puerto 3000 `PORT=3000 npm start`
  
  # Implementaciones realizadas
  - Serializacion de datos
  - versionamiento de API
  - Se implemento una tabla para la administracion de los planes de deposito a plazo fijo que posee un banco, esto lo hace mas escalable, se altero la estructura inicial del hash en consecuencia
  
  # WIP
  - Dockerizar
  - Proteger el api via tokens
  - Mejorar estilos del frontend
  - Mejorar interaccion
  - Implementacion de pruebas de codigo
  - Implementar react router para el manejo de distintas vistas, por ejemplo, completar el CRUD de bancos y sus planes de depositos.
