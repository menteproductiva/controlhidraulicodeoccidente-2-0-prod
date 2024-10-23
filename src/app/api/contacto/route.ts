export async function POST(request: Request) {
    try {
      const body = await request.json();

      console.log(body,"body");
      
  
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/Contacto`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        cache: "no-cache",
      });
  
      const data = await response.json();
  
      return new Response(JSON.stringify({ response: data }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.log(errorMessage);
      return new Response(JSON.stringify({ error: errorMessage }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }
  