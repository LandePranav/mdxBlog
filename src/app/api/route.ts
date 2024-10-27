import { db } from "@/db";

export async function GET(){
    // return new Response("Hello server up and Running!", {status:200});
    try {
        const data = await db.blog.findMany({
            take: 10,
            select: {title:true, category:true, slug:true, },
            orderBy: [{view_count: 'desc'}],
        });
        return Response.json(data);
    } catch (error) {
        console.error("Database error...",error);
        throw new Error("Failed to fetch popular posts!");
    }
}

export async function POST(request: Request){
    const {slug, title, category} = await request.json();

    try {
        const existingPost = await db.blog.findUnique({
            where: {slug: slug},
        });

        if(existingPost){
            await db.blog.update({
                where: {slug: slug},
                data: {
                    view_count: {increment: 1},
                },
            });
        } else {
            await db.blog.create({
                data: {
                    slug: slug,
                    title: title,
                    category: category
                }
            })
        }
    } catch (error) {
        console.error("Error updating Page View ", error);
        return new Response("Failed to post to DB...", {status:500});
    }

    return new Response("Successfully posted to DB")
}