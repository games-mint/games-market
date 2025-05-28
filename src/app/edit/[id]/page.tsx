'use server'

import { db } from "@/db";
import EditPage from "./editPage"
import { posts } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function ({
    params,
}: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params;

    if (id !== "new") {
        const numberId = parseInt(id);
        const result = await db.select().from(posts).where(eq(posts.id, numberId));
        const post = result[0];

        if (post)
            return <EditPage post={post} />
    }


    return (
        <EditPage />
    )
}