// main.js
const admin = require("firebase-admin");
const serviceAccount = require("./fir-connect-ca799-firebase-adminsdk-ooqsh-b6afc833c2.json");

// Inicializa Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-connect-ca799-default-rtdb.firebaseio.com",
});

class DatabaseService {
  constructor() {
    this.ref = admin.database().ref("db"); // Referencia a la ruta base
  }

  async addData(tabla, data) {
    const newRef = this.ref.child(tabla).push(); // Usa push para agregar un nuevo registro
    await newRef.set(data);
    console.log(`Datos agregados en ${newRef.toString()}`);
  }

  async getData(tabla) {
    const snapshot = await this.ref.child(tabla).once("value");
    const data = snapshot.val();
    const result = [];

    for (const id in data) {
      result.push({ id, ...data[id] });
    }

    return result; // Retorna los datos consultados con los IDs incluidos
  }

  async updateData(tabla, id, data) {
    await this.ref.child(`${tabla}/${id}`).update(data);
    console.log(`Datos actualizados en ${tabla}/${id}`);
  }

  async deleteData(tabla, id) {
    await this.ref.child(`${tabla}/${id}`).remove();
    console.log(`Datos eliminados en ${tabla}/${id}`);
  }

  async getDataById(tabla, id) {
    const snapshot = await this.ref.child(`${tabla}/${id}`).once("value");
    return { id, ...snapshot.val() }; // Retorna los datos del ID especificado
  }
}

// Función principal como flecha
const main = async () => {
  try {
    const db = new DatabaseService();
    await db.addData("tabla1", {
      nombre: "Ejemplo 1",
      descripcion: "Este es el primer dato de ejemplo",
    });
    await db.addData("tabla1", {
      nombre: "Ejemplo 2",
      descripcion: "Este es el segundo dato de ejemplo",
    });

    const retrievedData = await db.getData("tabla1"); // Obtiene datos
    console.log("Datos consultados:", retrievedData); // Muestra los datos obtenidos

    // Actualiza datos
    if (retrievedData.length > 0) {
      await db.updateData("tabla1", retrievedData[0].id, {
        descripcion: "Descripción actualizada",
      });
    }

    // Obtiene datos por ID
    const updatedData = await db.getDataById("tabla1", retrievedData[0].id);
    console.log("Datos actualizados:", updatedData);

    // Elimina datos
    if (retrievedData.length > 1) {
      await db.deleteData("tabla1", retrievedData[1].id);
      console.log("Datos eliminados");
    }

    console.log("Operación completada");
    //Borrar la base de datos
    // await db.ref.remove();
    process.exit(0); // Finaliza la ejecución del aplicativo
  } catch (error) {
    console.error("Error en la operación:", error);
    process.exit(1); // Finaliza con error
  }
};

main();
