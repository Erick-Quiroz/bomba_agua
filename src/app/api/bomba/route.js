import prisma from "../../../lib/prisma";

export async function GET() {
  try {
    // Ejecuta una consulta para obtener el valor de 'state' del registro con id 1
    const bomba = await prisma.bomba.findUnique({
      where: { id: 1 },
    });

    // Verifica si se encontró el registro
    if (bomba) {
      const stateValue = bomba.state.toString();

      // Retorna una respuesta en formato texto con un código de estado 200
      return new Response(stateValue, {
        status: 200,
        headers: {
          "Content-Type": "text/plain", // Especifica que el contenido es texto plano
          "Cache-Control": "no-store", // Deshabilita el almacenamiento en caché
        },
      });
    } else {
      // Si no se encontró el registro, retorna un error 404
      return new Response("Registro no encontrado", {
        status: 404,
        headers: {
          "Content-Type": "text/plain", // Especifica que el contenido es texto plano
          "Cache-Control": "no-store", // Deshabilita el almacenamiento en caché
        },
      });
    }
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
    // Si hay un error, retorna una respuesta con el mensaje de error y un código de estado 500
    return new Response(error.message || "Error al ejecutar la consulta", {
      status: 500,
      headers: {
        "Content-Type": "text/plain", // Especifica que el contenido es texto plano
        "Cache-Control": "no-store", // Deshabilita el almacenamiento en caché
      },
    });
  }
}
