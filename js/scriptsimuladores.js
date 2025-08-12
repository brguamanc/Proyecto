function calcular() {
  const costoAdquisicion = parseFloat(document.getElementById('costoAdquisicion').value);
  const porcentajeEntrada = parseFloat(document.getElementById('porcentajeEntrada').value);
  const interes = parseFloat(document.getElementById('interes').value);
  const tiempoCredito = parseFloat(document.getElementById('tiempoCredito').value);
  const precioDiesel = parseFloat(document.getElementById('precioDiesel').value);
  const kmGalon = parseFloat(document.getElementById('kmGalon').value);
  const distancia = parseFloat(document.getElementById('distancia').value);
  const peaje = parseFloat(document.getElementById('peaje').value);

  const entrada = costoAdquisicion * porcentajeEntrada;
  const montoCredito = costoAdquisicion - entrada;
  const n = tiempoCredito * 12;
  const r = interes / 12;
  const cuotaMensual = (montoCredito * r) / (1 - Math.pow(1 + r, -n));
  const costoDieselPorKm = precioDiesel / kmGalon;
  const costoVariableTotal = (costoDieselPorKm * distancia) + peaje;

  document.getElementById('resultado').innerText =
    `Monto de entrada: $${entrada.toFixed(2)}\n` +
    `Crédito mensual: $${cuotaMensual.toFixed(2)}\n` +
    `Costo variable total para ${distancia} km: $${costoVariableTotal.toFixed(2)}\n` +
    `Costo variable por km: $${(costoVariableTotal / distancia).toFixed(2)}`;
}
