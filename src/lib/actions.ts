"use server";

import { db } from '@/db';
import { Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import {z} from 'zod';

const FormSchema = z.object({
    id: z.number(),
    email: z.string().min(1, {message:"Email is required!"}),
    isSubscribed: z.boolean(),
});

const CreateSubscriber = FormSchema.omit({id:true, isSubscribed:true});

type State ={
    errors?: {
        email?: string[];
    };
    message?: string | null;
}

export default async function createSubscriber(prevState: State, formdata: FormData) {
    const validatedField =CreateSubscriber.safeParse({
        email: formdata.get('email'),
    });

    if(!validatedField.success){
        return {
            errors: validatedField.error.flatten().fieldErrors,
            message: "Emial is Required",
        }
    }

    const {email} = validatedField.data;

    try {
        await db.subscriber.create({
            data: {
                email:email,
            }
        });
        revalidatePath("/");
        return {message: "Thank you for Subscribing!"}
    } catch (error) {
        if(error){
            if(error instanceof Prisma.PrismaClientKnownRequestError){
                if(error.code === "p2002"){
                    return {
                        message: "Email already Exist in the DB.",
                    }
                }
            }
        }
        return {message: "Database Error: Failed to create Subscriber."}
    }
}