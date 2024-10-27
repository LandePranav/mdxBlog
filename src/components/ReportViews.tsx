"use client"

import { useEffect } from "react";
import { fetchUrl } from "@/lib/utils";

export default function ReportViews({slug, title, category}: {
    slug:string;
    title:string;
    category:string;
}) {
    useEffect(()=>{
        const postData = async () => {
            try {
                await fetch(fetchUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({slug,title,category})
                })
            } catch (error) {
                console.log("Something is up.....",error);
            }
        }
    },[category, slug, title])

    return(
        <>
            
        </>
    );
}