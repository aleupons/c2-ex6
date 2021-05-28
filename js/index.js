const pacients = [
  {
    paciente: {
      nombre: "Manuel",
      edad: 25,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Marta",
      edad: 56,
      sexo: "M",
    },
    diasIngresado: 5,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Julia",
      edad: 38,
      sexo: "M",
    },
    diasIngresado: 1,
    dieta: "Sin sal",
  },
  {
    paciente: {
      nombre: "Esteban",
      edad: 40,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Arturo",
      edad: 19,
      sexo: "H",
    },
    diasIngresado: 2,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Isabel",
      edad: 63,
      sexo: "M",
    },
    diasIngresado: 6,
    dieta: "Sin sal",
  },
];

function extraccioDades(pacients) {
  const nPacients = pacients.length;
  const nMayoresEdad = pacients.filter(
    (pacients) => pacients.paciente.edad >= 18
  ).length;
  const nHombresDiabeticos = pacients.filter(
    (pacients) =>
      pacients.paciente.sexo.toLowerCase() === "h" &&
      pacients.dieta.toLowerCase() === "diabetes"
  ).length;
  const totalDiasIngreso = pacients.reduce(
    (acumulador, pacient) => pacient.diasIngresado + acumulador,
    0
  );
  const mediaEdadMujeres = pacients
    .filter((pacients) => pacients.paciente.sexo.toLowerCase() === "m")
    .reduce(
      (acumulador, pacient, i, pacients) =>
        pacient.paciente.edad / pacients.length + acumulador,
      0
    );
  const dades = {
    nPacients,
    nMayoresEdad,
    nHombresDiabeticos,
    totalDiasIngreso,
    mediaEdadMujeres,
  };
  return dades;
}

console.log(extraccioDades(pacients));

/* {
    nPacientes: (número de pacientes),
    nMayoresEdad: (número de pacientes mayores de edad),
    nHombresDiabeticos: (número de pacientes hombres con dieta para diabetes),
    totalDiasIngreso: (suma de los días de ingreso de todos los pacientes),
    mediaEdadMujeres: (edad media de las pacientes mujeres)
} */
