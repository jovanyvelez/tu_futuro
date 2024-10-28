// See https://svelte.dev/docs/kit/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				id: string
				nombre: string
				email: string
				rol: string
				contrasena: string | null
				token: string | null
				edad: string | null
			}
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export { };
