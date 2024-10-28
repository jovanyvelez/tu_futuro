import { relations } from "drizzle-orm/relations";
import { usuarios, publicaciones } from "./schema";

export const publicacionesRelations = relations(publicaciones, ({one}) => ({
	usuario: one(usuarios, {
		fields: [publicaciones.idUsuarios],
		references: [usuarios.id]
	}),
}));

export const usuariosRelations = relations(usuarios, ({many}) => ({
	publicaciones: many(publicaciones),
}));