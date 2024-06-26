# SoftDevelopersSystem
El presente proyecto es un sistema estrategico para la empresa SoftDevelopers, que le permitira medir el desempeno de su negocio, para llevar a cabo este sistema se han utilizado diversas herramientas/tecnologias entre las cuales destacan:

- Python
- C#
- ASP .NET framework
- CSS
- HTML
- Javascript
- FastApi
- SQLServer
- Visual Studio 2022

## Documentacion del proyecto
En la carpeta 'DocumentacionSoftDevelopers_IntegradorV' podra encontrar el documento que explica todo el proyecto, desde el analisis de la descripcion actual del proyecto, hasta la construccion de las diversas partes que lo componen como el EDA, SSIS y el CMI.

A continuacion se presentan los pasos para poder ejecutar el proyecto de manera correcta.

# Restauracion de las bases de datos
Se ha incluido una carpeta llamada 'Databases backup' que contiene 3 respaldos, uno correspondiente a la base de datos relacional de la empresa (softdevelopersBD.bak), la siguiente es la base de datos DataWarehouse (softDevelopersDW.bak), y por ultimo la base de datos que almacena los CMI's del proyecto web(CMIBD.bak), a su vez se ha incluido un script que se encarga de limpiar las tablas de Staging y dimensiones del DataWareHouse.

# ETL con SSIS y carga del DataWarehouse (SSIS_DW)
Para ejecutar el SSIS primero se recomienda ejecutar el script que se encuentra en la carpeta 'Databases backup' que trunca las tablas de Staging y las dimensiones del DataWarehouse.

Con las bases de datos restauradas y las tablas limpias ya podemos entrar al SSIS_DW y ejecutarlo, para comprobar si todo salio de manera correcta podemos verificarlo en Sqlserver medinte una consulta sencilla 'SELECT * FROM table_name'.

# EDA SoftDevelopers
La carpeta llamada 'EDASoftDevelopers' contiene 2 archivos, el primero es un archivo de texto plano 'requirements.txt' que contiene todas las librerias necesarias para ejecutar el script, al igual que el comando para instalarlas ya sea desde cmd o desde un notebook.

El siguiente archivo es el eda, el formato es de tipo notebook, y puede ser ejecutado tanto con la extension de jupyter en vs code como con jupyter mismo. Se recomienda cambiar el usuario y la contrasena de la conexion a la base de datos DataWarehouse puesto que es muy poco probable que todos tengamos el mismo username.

# API SoftDevelopers (API_py)
Esta carpeta contiene 3 archivos, la api(main.py), un archivo de python(edasoftdevelopers) y un documento de texto plano llamado 'requirements.txt' que contiene las librerias que son necesarias para ejecutar la API correctamente y como instalarlas ya sea desde cmd o desde un notebook.

Muchas partes del sistema estan alimentadas a traves de una API, que se encarga de realizar consultas a la base de datos DataWarehouse, el archivo 'edasoftdevelopers' contiene funciones que envian informacion a los endpoints de la API, se recomienda NO MODIFICAR las funciones de este archivo.

NOTA: Cambiar contrasena y usuario en ambos archivos (edasoftdevelopers y main.py) para evitar errores a la hora de conectar a la base de datos

## Ejecutar la API con FastApi
Para ejecutar la API asegurese de que s encuentra dentro de la carpeta que contiene el archivo llamado 'main.py' y ejecute el siguiente comando: fastapi dev main.py

La API comenzara a ejecutarse en el puerto 8000, puede irse a su localhost:8000/docs y verificar que la API esta funcionando correctamente.

# Proyecto Web (TechBridge)
Si no ha tenido inconvenientes en los pasos anteriores, entonces solo nos queda abrir nuestro proyecto llamado TechBridge con Visual Studio, y ejecutarlo, si usted no cuenta con alguna dependencia necesaria para ejecutar este proyecto, revise la documentacion de Visual Studio para obtener detalles sobre como ejecutar un proyecto ASP .NET core MVC.

Si todo salio bien, al ejecutarlo podra observar un dashboard que ya esta siendo alimentado con la API, exito!
