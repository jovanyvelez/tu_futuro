import { db } from '$lib/server/database/client'
import { usuarios } from '$lib/server/database/tables'
import { eq } from 'drizzle-orm'


export const handle = async ({ event, resolve }) => {

    const session = event.cookies.get('session')

    if (!session) {
        // if there is no session load page as normal
        return await resolve(event)
    }

    const user = await db.select().from(usuarios).where(eq(usuarios.token, session));

    if (!user || user.length === 0) {
        // if the session is invalid, remove the cookie and load page as normal
        event.cookies.set('session', '', {
            path: '/',
            expires: new Date(0),
          }
        )
        return await resolve(event)    
    }

    event.locals.user = user[0]

    return await resolve(event)
}