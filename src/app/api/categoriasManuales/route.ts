import { getFetchOptions } from "@/utils/cacheRevalidate";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const additionalOptions = getFetchOptions()

        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/CategoriasManuales`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Pragma': 'no-cache',

            },
            // cache: 'no-cache',
            ...additionalOptions
        });

        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        };

        const data = await response.json();

        return new NextResponse(JSON.stringify({ response: data }), {
            status: 200,
            headers: {
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            }
        });
        
    } catch (error) {
        console.log(error,"error 1")
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.log(errorMessage,"soy error")
        return new Response(JSON.stringify({error: errorMessage}),{
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            }
        })
        
    }
}