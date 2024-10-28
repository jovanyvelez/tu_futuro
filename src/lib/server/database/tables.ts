import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core"


export const usuarios = sqliteTable("usuarios", {
	id: integer().primaryKey(),
	nombre: text(),
	correo: text(),
	clave: integer(),
	userAuthToken: integer(),
	fecha: integer(),
});

export const publicaciones = sqliteTable("publicaciones", {
	id: integer().primaryKey(),
	publicacion: text(),
	autor: text(),
	tema: text(),
	fecha: integer(),
	idUsuarios: integer("id_usuarios").references(() => usuarios.id),
});
