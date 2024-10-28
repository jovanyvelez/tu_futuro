import { sqliteTable, AnySQLiteColumn, integer, text, foreignKey } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

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

