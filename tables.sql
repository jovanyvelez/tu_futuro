
CREATE TABLE temas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL UNIQUE,
    descripcion TEXT
);


CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    temaId INTEGER,
    fechaCreacion NUMBER ,
    FOREIGN KEY (temaId) REFERENCES temas (id) ON DELETE SET NULL,
    UNIQUE (id, temaId) -- Esta restricción asegura unicidad para cada combinación de id y tema_id
);



CREATE TABLE articulos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuarioId INTEGER NOT NULL,
    temaId INTEGER NOT NULL,
    contenido TEXT NOT NULL,
    fechaCreacion NUMBER,
    fechaActualizacion NUMBER,
    FOREIGN KEY (usuarioId) REFERENCES usuarios (id) ON DELETE CASCADE,
    FOREIGN KEY (temaId) REFERENCES temas (id) ON DELETE CASCADE
);

