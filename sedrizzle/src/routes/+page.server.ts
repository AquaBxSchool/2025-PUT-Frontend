import { db } from "$lib"
import { post, postSchema, user, userSchema } from "$lib/server/db/schema"
import { eq } from "drizzle-orm"
import type { Actions, Load } from "@sveltejs/kit"

export const load: Load = async () => {
    let posts = await db.select().from(post).all()
    let users = await db.select().from(user).all()
    return { posts,users }
}

export const actions: Actions = {
    addPost: async (event) => {
        const formData = await event.request.formData();

        let dict = Object.fromEntries(formData)
        let verify = postSchema.safeParse(dict)
        
        if (!verify.success) return {
            error: verify.error.message,
            success: false
        }
        let nuser = await db.select()
            .from(user)
            .where(eq(user.id, verify.data.authorId))
            .get()

        if (nuser === undefined) return {
            error: "user does not exists",
            success: false
        }

        let npost = await db.insert(post).values(verify.data).returning()

        return {
            error: "",
            success: true
        }
    },

    addUser : async (event) => {
        const formData = await event.request.formData();

        let dict = Object.fromEntries(formData)
        let verify = userSchema.safeParse(dict)
        if (!verify.success) return {
            error: verify.error.message,
            success: false
        }

        let nuser = await db.insert(user).values(verify.data).returning()

        return {
            error: "",
            success: true
        }
    }
}