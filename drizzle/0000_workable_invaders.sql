-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `usuarios` (
	`id` integer PRIMARY KEY,
	`nombre` text,
	`correo` text,
	`clave` integer,
	`userAuthToken` integer,
	`fecha` integer
);
--> statement-breakpoint
CREATE TABLE `publicaciones` (
	`id` integer PRIMARY KEY,
	`publicacion` text,
	`autor` text,
	`tema` text,
	`fecha` integer,
	`id_usuarios` integer,
	FOREIGN KEY (`id_usuarios`) REFERENCES `usuarios`(`id`) ON UPDATE no action ON DELETE no action
);

*/