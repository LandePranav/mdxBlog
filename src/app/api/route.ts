import { db } from "@/db/index";

export async function GET(){
    // return new Response("Hello ", {status:200});
    try {
        const data =  await db.blog.findMany({
            take: 10,
            select: {title:true, category:true, slug:true,},
            orderBy: [{view_count: 'desc'}],
        });
        return Response.json(data);
    } catch (error) {
        console.log("Database Error...", error);
        throw new Error("Failed to fetch popular posts!");
    }
}

export async function POST(request: Request) {
    const {slug, title, category} = await request.json();

    try{
        const existingPost  = await db.blog.findUnique({
            where: {slug: slug},
        });

        if(existingPost){
            await db.blog.update({
                where: {slug:slug},
                data: {
                    view_count: {increment: 1},
                },
            });
        }else {
            await db.blog.create({
                data: {
                    slug: slug,
                    title: title,
                    category: category,
                },
            });
        }
    }catch(error){
        console.log("Error Updating page view count ",error);
        return new Response("Failed to post to DB ", {status:500});
    }

    return new Response("Succussfully posted to DB ", {status:200});
}