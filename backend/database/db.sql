CREATE DATABASE sgirs


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    nit INTEGER NOT NULL,
    idsector INTEGER REFERENCES sectores(id),
    nomestablecimiento VARCHAR(255) UNIQUE NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    comuna INTEGER NOT NULL,
    barrio VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    nomresponsable VARCHAR(255) NOT NULL,
    numero VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    gravatar VARCHAR(255)
);

CREATE TABLE userformularios(
    id SERIAL PRIMARY KEY,
    idformulario INTEGER REFERENCES formulario(id),
    validacion BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

CREATE TABLE formularios(
    id SERIAL PRIMARY KEY,
    formulario VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);



CREATE TABLE sectores(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO sectores (nombre) VALUES ('Comercial y servicios'), ('Organicos'), ('Instituciones educativas'), ('Eventos masivos'), ('Entidades publicas'), ('Desarrollos multifamiliares')

CREATE TABLE questions(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    pregunta1 VARCHAR,
    pregunta1pdf VARCHAR,
    pregunta2 VARCHAR,
    pregunta2pdf VARCHAR,
    pregunta3 VARCHAR,
    pregunta3pdf VARCHAR,
    pregunta4 VARCHAR,
    pregunta5 VARCHAR,
    pregunta6 VARCHAR,
    pregunta7 VARCHAR,
    pregunta8 VARCHAR,
    pregunta9 VARCHAR,
    pregunta10 VARCHAR,
    pregunta10pdf VARCHAR,
    pregunta11 VARCHAR,
    pregunta12 VARCHAR,
    pregunta12pdf VARCHAR,
    pregunta13 VARCHAR,
    pregunta14 VARCHAR,
    pregunta15 VARCHAR,
    pregunta16 VARCHAR,
    pregunta17 VARCHAR,
    pregunta17pdf VARCHAR,
    pregunta18 VARCHAR,
    pregunta19 VARCHAR,
    pregunta20 VARCHAR,
    pregunta21 VARCHAR,
    pregunta22 VARCHAR,
    pregunta23 VARCHAR,
    pregunta23pdf VARCHAR,
    pregunta24 VARCHAR,
    pregunta25 VARCHAR,
    pregunta26 VARCHAR,
    pregunta27 VARCHAR,
    pregunta28 VARCHAR,
    pregunta28pdf VARCHAR,
    pregunta29 VARCHAR,
    pregunta30 VARCHAR,
    pregunta31 VARCHAR,
    pregunta31pdf VARCHAR,
    pregunta32 VARCHAR,
    pregunta33 VARCHAR,
    pregunta34 VARCHAR,
    pregunta35 VARCHAR,
    pregunta35pdf VARCHAR,
    pregunta36 VARCHAR,
    pregunta37 VARCHAR,
    pregunta38 VARCHAR,
    pregunta39 VARCHAR,
    pregunta40 VARCHAR,
    pregunta40pdf VARCHAR,
    pregunta41 VARCHAR,
    pregunta41pdf VARCHAR,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

CONSULTAS PARA LOS INDICADORES ORGANICOS

CREATE TABLE i1_organicos(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    enero1 VARCHAR(255) NOT NULL,
    febrero1 VARCHAR(255) NOT NULL,
    marzo1 VARCHAR(255) NOT NULL,
    abril1 VARCHAR(255) NOT NULL,
    mayo1 VARCHAR(255) NOT NULL,
    junio1 VARCHAR(255) NOT NULL,
    enero2 VARCHAR(255) NOT NULL,
    febrero2 VARCHAR(255) NOT NULL,
    marzo2 VARCHAR(255) NOT NULL,
    abril2 VARCHAR(255) NOT NULL,
    mayo2 VARCHAR(255) NOT NULL,
    junio2 VARCHAR(255) NOT NULL,
    totalenero VARCHAR(255) NOT NULL,
    totalfebrero VARCHAR(255) NOT NULL,
    totalmarzo VARCHAR(255) NOT NULL,
    totalabril VARCHAR(255) NOT NULL,
    totalmayo VARCHAR(255) NOT NULL,
    totaljunio VARCHAR(255) NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CONSULTAS PARA LOS INDICADORES COMERCIAL Y SERVICIOS

CREATE TABLE i1_comercial(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    i1enero1 FLOAT,
    i1febrero1 FLOAT,
    i1marzo1 FLOAT,
    i1abril1 FLOAT,
    i1mayo1 FLOAT,
    i1junio1 FLOAT,
    i1enero2 FLOAT,
    i1febrero2 FLOAT,
    i1marzo2 FLOAT,
    i1abril2 FLOAT,
    i1mayo2 FLOAT,
    i1junio2 FLOAT,
    i1totalenero FLOAT,
    i1totalfebrero FLOAT,
    i1totalmarzo FLOAT,
    i1totalabril FLOAT,
    i1totalmayo FLOAT,
    i1totaljunio FLOAT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE i2_comercial(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    i2enero1 FLOAT,
    i2febrero1 FLOAT,
    i2marzo1 FLOAT,
    i2abril1 FLOAT,
    i2mayo1 FLOAT,
    i2junio1 FLOAT,
    i2enero2 FLOAT,
    i2febrero2 FLOAT,
    i2marzo2 FLOAT,
    i2abril2 FLOAT,
    i2mayo2 FLOAT,
    i2junio2 FLOAT,
    i2totalenero FLOAT,
    i2totalfebrero FLOAT,
    i2totalmarzo FLOAT,
    i2totalabril FLOAT,
    i2totalmayo FLOAT,
    i2totaljunio FLOAT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE i3_comercial(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    i3enero1 FLOAT,
    i3febrero1 FLOAT,
    i3marzo1 FLOAT,
    i3abril1 FLOAT,
    i3mayo1 FLOAT,
	i3junio1 FLOAT,
    i3totalenero FLOAT,
    i3totalfebrero FLOAT,
    i3totalmarzo FLOAT,
    i3totalabril FLOAT,
    i3totalmayo FLOAT,
    i3totaljunio FLOAT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE i4_comercial(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    pregunta1 VARCHAR(255) NOT NULL,
    pregunta2 VARCHAR(255) NOT NULL,
    pregunta3 VARCHAR(255) NOT NULL,
    pregunta4 VARCHAR(255) NOT NULL,
    pregunta5 VARCHAR(255) NOT NULL,
    pregunta6 VARCHAR(255) NOT NULL,
    pregunta7 VARCHAR(255) NOT NULL,
    pregunta8 VARCHAR(255) NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );


CREATE TABLE i5_comercial(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    i5enero1 FLOAT,
    i5febrero1 FLOAT,
    i5marzo1 FLOAT,
    i5abril1 FLOAT,
    i5mayo1 FLOAT,
    i5junio1 FLOAT,
    i5enero2 FLOAT,
    i5febrero2 FLOAT,
    i5marzo2 FLOAT,
    i5abril2 FLOAT,
    i5mayo2 FLOAT,
    i5junio2 FLOAT,
    i5totalenero FLOAT,
    i5totalfebrero FLOAT,
    i5totalmarzo FLOAT,
    i5totalabril FLOAT,
    i5totalmayo FLOAT,
    i5totaljunio FLOAT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CONSULTAS PARA LOS INDICADORES INSTITUCIONES EDUCATIVAS

CREATE TABLE i1_educativas(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    i1enero1 FLOAT,
    i1febrero1 FLOAT,
    i1marzo1 FLOAT,
    i1abril1 FLOAT,
    i1mayo1 FLOAT,
    i1junio1 FLOAT,
    i1enero2 FLOAT,
    i1febrero2 FLOAT,
    i1marzo2 FLOAT,
    i1abril2 FLOAT,
    i1mayo2 FLOAT,
    i1junio2 FLOAT,
    i1totalenero FLOAT,
    i1totalfebrero FLOAT,
    i1totalmarzo FLOAT,
    i1totalabril FLOAT,
    i1totalmayo FLOAT,
    i1totaljunio FLOAT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );


CREATE TABLE i2_educativas(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    pregunta1 VARCHAR(255) NOT NULL,
    pregunta2 VARCHAR(255) NOT NULL,
    pregunta3 VARCHAR(255) NOT NULL,
    pregunta4 VARCHAR(255) NOT NULL,
    pregunta5 VARCHAR(255) NOT NULL,
    pregunta6 VARCHAR(255) NOT NULL,
    pregunta7 VARCHAR(255) NOT NULL,
    pregunta8 VARCHAR(255) NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );


CREATE TABLE i3_educativas(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    i3enero1 FLOAT,
    i3febrero1 FLOAT,
    i3marzo1 FLOAT,
    i3abril1 FLOAT,
    i3mayo1 FLOAT,
    i3junio1 FLOAT,
    i3enero2 FLOAT,
    i3febrero2 FLOAT,
    i3marzo2 FLOAT,
    i3abril2 FLOAT,
    i3mayo2 FLOAT,
    i3junio2 FLOAT,
    i3totalenero FLOAT,
    i3totalfebrero FLOAT,
    i3totalmarzo FLOAT,
    i3totalabril FLOAT,
    i3totalmayo FLOAT,
    i3totaljunio FLOAT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );


CREATE TABLE i4_educativas(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    i4enero1 FLOAT,
    i4febrero1 FLOAT,
    i4marzo1 FLOAT,
    i4abril1 FLOAT,
    i4mayo1 FLOAT,
    i4junio1 FLOAT,
    i4enero2 FLOAT,
    i4febrero2 FLOAT,
    i4marzo2 FLOAT,
    i4abril2 FLOAT,
    i4mayo2 FLOAT,
    i4junio2 FLOAT,
    i4totalenero FLOAT,
    i4totalfebrero FLOAT,
    i4totalmarzo FLOAT,
    i4totalabril FLOAT,
    i4totalmayo FLOAT,
    i4totaljunio FLOAT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );


CREATE TABLE i5_educativas(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    i5enero1 FLOAT,
    i5febrero1 FLOAT,
    i5marzo1 FLOAT,
    i5abril1 FLOAT,
    i5mayo1 FLOAT,
    i5junio1 FLOAT,
    i5enero2 FLOAT,
    i5febrero2 FLOAT,
    i5marzo2 FLOAT,
    i5abril2 FLOAT,
    i5mayo2 FLOAT,
    i5junio2 FLOAT,
    i5totalenero FLOAT,
    i5totalfebrero FLOAT,
    i5totalmarzo FLOAT,
    i5totalabril FLOAT,
    i5totalmayo FLOAT,
    i5totaljunio FLOAT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );


CONSULTAS PARA LOS INDICADORES EVENTOS MASIVOS

CREATE TABLE i1_masivos(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    i1enero1 FLOAT,
    i1febrero1 FLOAT,
    i1marzo1 FLOAT,
    i1abril1 FLOAT,
    i1mayo1 FLOAT,
    i1junio1 FLOAT,
    i1enero2 FLOAT,
    i1febrero2 FLOAT,
    i1marzo2 FLOAT,
    i1abril2 FLOAT,
    i1mayo2 FLOAT,
    i1junio2 FLOAT,
    i1totalenero FLOAT,
    i1totalfebrero FLOAT,
    i1totalmarzo FLOAT,
    i1totalabril FLOAT,
    i1totalmayo FLOAT,
    i1totaljunio FLOAT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE i2_masivos(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    pregunta1 VARCHAR(255) NOT NULL,
    pregunta2 VARCHAR(255) NOT NULL,
    pregunta3 VARCHAR(255) NOT NULL,
    pregunta4 VARCHAR(255) NOT NULL,
    pregunta5 VARCHAR(255) NOT NULL,
    pregunta6 VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE i3_masivos(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    i3enero1 FLOAT,
    i3febrero1 FLOAT,
    i3marzo1 FLOAT,
    i3abril1 FLOAT,
    i3mayo1 FLOAT,
    i3junio1 FLOAT,
    i3enero2 FLOAT,
    i3febrero2 FLOAT,
    i3marzo2 FLOAT,
    i3abril2 FLOAT,
    i3mayo2 FLOAT,
    i3junio2 FLOAT,
    i3totalenero FLOAT,
    i3totalfebrero FLOAT,
    i3totalmarzo FLOAT,
    i3totalabril FLOAT,
    i3totalmayo FLOAT,
    i3totaljunio FLOAT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE i4_masivos(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    i4enero1 FLOAT,
    i4febrero1 FLOAT,
    i4marzo1 FLOAT,
    i4abril1 FLOAT,
    i4mayo1 FLOAT,
    i4junio1 FLOAT,
    i4enero2 FLOAT,
    i4febrero2 FLOAT,
    i4marzo2 FLOAT,
    i4abril2 FLOAT,
    i4mayo2 FLOAT,
    i4junio2 FLOAT,
    i4totalenero FLOAT,
    i4totalfebrero FLOAT,
    i4totalmarzo FLOAT,
    i4totalabril FLOAT,
    i4totalmayo FLOAT,
    i4totaljunio FLOAT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );


CONSULTAS PARA LOS INDICADORES COMERCIAL Y SERVICIOS

CREATE TABLE i1_publicas(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    i1enero1 FLOAT,
    i1febrero1 FLOAT,
    i1marzo1 FLOAT,
    i1abril1 FLOAT,
    i1mayo1 FLOAT,
    i1junio1 FLOAT,
    i1enero2 FLOAT,
    i1febrero2 FLOAT,
    i1marzo2 FLOAT,
    i1abril2 FLOAT,
    i1mayo2 FLOAT,
    i1junio2 FLOAT,
    i1totalenero FLOAT,
    i1totalfebrero FLOAT,
    i1totalmarzo FLOAT,
    i1totalabril FLOAT,
    i1totalmayo FLOAT,
    i1totaljunio FLOAT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );


CREATE TABLE i2_publicas(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    i2enero1 FLOAT,
    i2febrero1 FLOAT,
    i2marzo1 FLOAT,
    i2abril1 FLOAT,
    i2mayo1 FLOAT,
    i2junio1 FLOAT,
    i2enero2 FLOAT,
    i2febrero2 FLOAT,
    i2marzo2 FLOAT,
    i2abril2 FLOAT,
    i2mayo2 FLOAT,
    i2junio2 FLOAT,
    i2totalenero FLOAT,
    i2totalfebrero FLOAT,
    i2totalmarzo FLOAT,
    i2totalabril FLOAT,
    i2totalmayo FLOAT,
    i2totaljunio FLOAT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );


CREATE TABLE i3_publicas(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    i3enero1 FLOAT,
    i3febrero1 FLOAT,
    i3marzo1 FLOAT,
    i3abril1 FLOAT,
    i3mayo1 FLOAT,
    i3junio1 FLOAT,
    i3enero2 FLOAT,
    i3febrero2 FLOAT,
    i3marzo2 FLOAT,
    i3abril2 FLOAT,
    i3mayo2 FLOAT,
    i3junio2 FLOAT,
    i3totalenero FLOAT,
    i3totalfebrero FLOAT,
    i3totalmarzo FLOAT,
    i3totalabril FLOAT,
    i3totalmayo FLOAT,
    i3totaljunio FLOAT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE i4_publicas(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    pregunta1 VARCHAR(255) NOT NULL,
    pregunta2 VARCHAR(255) NOT NULL,
    pregunta3 VARCHAR(255) NOT NULL,
    pregunta4 VARCHAR(255) NOT NULL,
    pregunta5 VARCHAR(255) NOT NULL,
    pregunta6 VARCHAR(255) NOT NULL,
    pregunta7 VARCHAR(255) NOT NULL,
    pregunta8 VARCHAR(255) NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CONSULTAS PARA LOS INDICADORES DESARROLLOS MULTIFAMILIARES

CREATE TABLE i1_multifamiliares(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    i1enero1 FLOAT,
    i1febrero1 FLOAT,
    i1marzo1 FLOAT,
    i1abril1 FLOAT,
    i1mayo1 FLOAT,
    i1junio1 FLOAT,
    i1enero2 FLOAT,
    i1febrero2 FLOAT,
    i1marzo2 FLOAT,
    i1abril2 FLOAT,
    i1mayo2 FLOAT,
    i1junio2 FLOAT,
    i1totalenero FLOAT,
    i1totalfebrero FLOAT,
    i1totalmarzo FLOAT,
    i1totalabril FLOAT,
    i1totalmayo FLOAT,
    i1totaljunio FLOAT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE i2_multifamiliares(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    pregunta1 VARCHAR(255) NOT NULL,
    pregunta2 VARCHAR(255) NOT NULL,
    pregunta3 VARCHAR(255) NOT NULL,
    pregunta4 VARCHAR(255) NOT NULL,
    pregunta5 VARCHAR(255) NOT NULL,
    pregunta6 VARCHAR(255) NOT NULL,
    pregunta7 VARCHAR(255) NOT NULL,
    pregunta8 VARCHAR(255) NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE i3_multifamiliares(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    i3enero1 FLOAT,
    i3febrero1 FLOAT,
    i3marzo1 FLOAT,
    i3abril1 FLOAT,
    i3mayo1 FLOAT,
    i3junio1 FLOAT,
    i3enero2 FLOAT,
    i3febrero2 FLOAT,
    i3marzo2 FLOAT,
    i3abril2 FLOAT,
    i3mayo2 FLOAT,
    i3junio2 FLOAT,
    i3totalenero FLOAT,
    i3totalfebrero FLOAT,
    i3totalmarzo FLOAT,
    i3totalabril FLOAT,
    i3totalmayo FLOAT,
    i3totaljunio FLOAT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE i4_multifamiliares(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    i4enero1 FLOAT,
    i4febrero1 FLOAT,
    i4marzo1 FLOAT,
    i4abril1 FLOAT,
    i4mayo1 FLOAT,
    i4junio1 FLOAT,
    i4enero2 FLOAT,
    i4febrero2 FLOAT,
    i4marzo2 FLOAT,
    i4abril2 FLOAT,
    i4mayo2 FLOAT,
    i4junio2 FLOAT,
    i4totalenero FLOAT,
    i4totalfebrero FLOAT,
    i4totalmarzo FLOAT,
    i4totalabril FLOAT,
    i4totalmayo FLOAT,
    i4totaljunio FLOAT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE i5_multifamiliares(
    id SERIAL PRIMARY KEY,
    userid INTEGER UNIQUE REFERENCES users(id),
    i5enero1 FLOAT,
    i5febrero1 FLOAT,
    i5marzo1 FLOAT,
    i5abril1 FLOAT,
    i5mayo1 FLOAT,
    i5junio1 FLOAT,
    i5enero2 FLOAT,
    i5febrero2 FLOAT,
    i5marzo2 FLOAT,
    i5abril2 FLOAT,
    i5mayo2 FLOAT,
    i5junio2 FLOAT,
    i5totalenero FLOAT,
    i5totalfebrero FLOAT,
    i5totalmarzo FLOAT,
    i5totalabril FLOAT,
    i5totalmayo FLOAT,
    i5totaljunio FLOAT,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
