import { query } from "../../../lib/config";

export async function GET() {
  try {
    // Ejecuta una consulta para obtener todos los empleados de la base de datos
    const bomba = await query({
      query: "SELECT * FROM state",
      values: [],
    });

    // Retorna una respuesta en formato JSON con un código de estado 200
    return new Response(JSON.stringify({ bomba }), {
      status: 200,
      headers: {
        "Content-Type": "application/json", // Especifica que el contenido es JSON
      },
    });
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
    // Si hay un error, retorna una respuesta JSON con el mensaje de error y un código de estado 500
    return new Response(
      JSON.stringify({
        error: error.message || "Error al ejecutar la consulta",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json", // Especifica que el contenido es JSON
        },
      }
    );
  }
}
