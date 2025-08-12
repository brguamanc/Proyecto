const distancias = [
  {
    Nempresa: "Empresa A",
    Tipovehiculo: "Nuevo",//aqui si tengo
    costadquisicion: 150000.00,
    añodelvehiculo:2019,
    vidautilcontable:10,
    Flotavehicular: 12,
    kmpromediomensual: 7500,
    numerodeviajesalmes: 14,
    galonesdiselporviaje: 90,
    costodepeajes: 48,
    viaticos: 15,
    pesasybalanza: 0.30,
    cargaydescargue: 80,
    caravana:15,
    garaje:25
  },
  {
    Nempresa: "Empresa A",
    Tipovehiculo: "Usado",//aqui si tengo
    costadquisicion: 150000.00,
    añodelvehiculo:2019,
    vidautilcontable:10,
    Flotavehicular: 12,
    kmpromediomensual: 7500,
    numerodeviajesalmes: 14,
    galonesdiselporviaje: 90,
    costodepeajes: 48,
    viaticos: 15,
    pesasybalanza: 0.30,
    cargaydescargue: 80,
    caravana:15,
    garaje:25
  }
];

// Cargar opciones únicas en el desplegable de empresas
window.onload = function () {
  const selectEmpresa = document.getElementById("selectEmpresa");
  const empresasUnicas = [...new Set(distancias.map(d => d.Nempresa))];

  empresasUnicas.forEach(nombre => {
    const option = document.createElement("option");
    option.value = nombre;
    option.textContent = nombre;
    selectEmpresa.appendChild(option);
  });
};

// Actualizar campos cuando cambian las selecciones
function actualizarSeleccion() {
  const empresaSeleccionada = document.getElementById("selectEmpresa").value;
  const tipoSeleccionado = document.getElementById("selectTipo").value;

  const datos = distancias.find(d =>
    d.Nempresa === empresaSeleccionada && d.Tipovehiculo === tipoSeleccionado
  );

  if (!datos) return;

  document.getElementById('Nempresa').value = datos.Nempresa;
  document.getElementById('Tipovehiculo').value = datos.Tipovehiculo;
  //document.getElementById('kmTotal').value = datos.kmTotal;
  document.getElementById('costadquisicion').value = datos.costadquisicion;
document.getElementById('añodelvehiculo').value = datos.añodelvehiculo;
document.getElementById('vidautilcontable').value = datos.vidautilcontable;
document.getElementById('Flotavehicular').value = datos.Flotavehicular;
document.getElementById('kmpromediomensual').value = datos.kmpromediomensual;
document.getElementById('numerodeviajesalmes').value = datos.numerodeviajesalmes;
document.getElementById('galonesdiselporviaje').value = datos.galonesdiselporviaje;
//document.getElementById('costodediselporviaje').value = datos.costodediselporviaje;
document.getElementById('costodepeajes').value = datos.costodepeajes;
document.getElementById('viaticos').value = datos.viaticos;
document.getElementById('pesasybalanza').value = datos.pesasybalanza;
document.getElementById('cargaydescargue').value = datos.cargaydescargue;
document.getElementById('caravana').value = datos.caravana;
document.getElementById('garaje').value = datos.garaje;
}

function guardarDatos() {
  const Tipovehiculo = document.getElementById('Tipovehiculo').value;
  const repmotor = Tipovehiculo.toLowerCase() === 'Nuevo' ? 0 : 16000;

  const datosGuardados = {
    Nempresa: document.getElementById('Nempresa').value,
    Tipovehiculo,
    //kmTotal: parseFloat(document.getElementById('kmTotal').value),
    costadquisicion: parseFloat(document.getElementById('costadquisicion').value),
    añodelvehiculo: parseInt(document.getElementById('añodelvehiculo').value),
    vidautilcontable: parseInt(document.getElementById('vidautilcontable').value),
    Flotavehicular: parseInt(document.getElementById('Flotavehicular').value),
   // kmpromediomensual: parseFloat(document.getElementById('kmpromediomensual').value),
    numerodeviajesalmes: parseInt(document.getElementById('numerodeviajesalmes').value),
    galonesdiselporviaje: parseFloat(document.getElementById('galonesdiselporviaje').value),
    //costodediselporviaje: parseFloat(document.getElementById('costodediselporviaje').value),
    costodepeajes: parseFloat(document.getElementById('costodepeajes').value),
    viaticos: parseFloat(document.getElementById('viaticos').value),
    pesasybalanza: parseFloat(document.getElementById('pesasybalanza').value),
    cargaydescargue: parseFloat(document.getElementById('cargaydescargue').value),
    caravana: parseFloat(document.getElementById('caravana').value),
    garaje: parseFloat(document.getElementById('garaje').value),
    repmotor
  };

  console.log(datosGuardados);
  alert("Datos guardados correctamente.\nrepmotor = " + repmotor);
}

const kmdestino = [ 
      {  origen: "Paute", destino: "Paute", distancia: 0 },
{  origen: "Paute", destino: "Cuenca", distancia: 43 },
{  origen: "Paute", destino: "Camilo Ponce Enríquez", distancia: 135 },
{  origen: "Paute", destino: "Chordeleg", distancia: 22 },
{  origen: "Paute", destino: "El Pan", distancia: 40 },
{  origen: "Paute", destino: "Girón", distancia: 86 },
];

    let distanciaSeleccionada = null; // Variable global

    const origenSelect = document.getElementById('origen');
    const destinoSelect = document.getElementById('destino');

    const ciudades = new Set();
    kmdestino.forEach(item => {
      ciudades.add(item.origen);
      ciudades.add(item.destino);
    });

    ciudades.forEach(ciudad => {
      origenSelect.innerHTML += `<option value="${ciudad}">${ciudad}</option>`;
      destinoSelect.innerHTML += `<option value="${ciudad}">${ciudad}</option>`;
    });

    function buscarDistancia() {
      const origen = origenSelect.value;
      const destino = destinoSelect.value;

      const resultado = kmdestino.find(
        ruta => ruta.origen === origen && ruta.destino === destino
      );

      if (resultado) {
        distanciaSeleccionada = resultado.distancia;
        document.getElementById('resultado').innerText =
          `La distancia entre ${origen} y ${destino} es de ${distanciaSeleccionada} km.`;
      } else {
        distanciaSeleccionada = null;
        document.getElementById('resultado').innerText =
          "No se encontró una ruta con esa combinación.";
      }
    }


function calcular() {
  //const num1 = parseFloat(document.getElementById('num1').value);
  //const num2 = parseFloat(document.getElementById('num2').value);
//id="empresa"
//  const vehiculo = parseFloat(document.getElementById('vehiculo').value);
//         id="vehiculo"
  //const kmTotal = parseFloat(document.getElementById('kmTotal').value);
//         id="kmTotal"
const costadquisicion = parseFloat(document.getElementById('costadquisicion').value);
const añodelvehiculo = parseInt(document.getElementById('añodelvehiculo').value);
const vidautilcontable = parseInt(document.getElementById('vidautilcontable').value);
const Flotavehicular = parseInt(document.getElementById('Flotavehicular').value);
const kmpromediomensual = parseFloat(document.getElementById('kmpromediomensual').value);
const numerodeviajesalmes = parseInt(document.getElementById('numerodeviajesalmes').value);
const galonesdiselporviaje = parseFloat(document.getElementById('galonesdiselporviaje').value);
//const costodediselporviaje = parseFloat(document.getElementById('costodediselporviaje').value);
const costodepeajes = parseFloat(document.getElementById('costodepeajes').value);
const viaticos = parseFloat(document.getElementById('viaticos').value);
const pesasybalanza = parseFloat(document.getElementById('pesasybalanza').value);
const cargaydescargue = parseFloat(document.getElementById('cargaydescargue').value);
const caravana = parseFloat(document.getElementById('caravana').value);
const garaje = parseFloat(document.getElementById('garaje').value);

let kmTotal = distanciaSeleccionada * 2;
//let kmpromediomensual = kmTotal * numerodeviajesalmes;

const Tipovehiculo = document.getElementById('Tipovehiculo').value;
  //const repmotor = Tipovehiculo.toLowerCase() === 'Viejo' ? 16000 : 2000;
let repmotor;

if (Tipovehiculo.toLowerCase() === 'nuevo') {
  repmotor = 0;
} else {
  repmotor = 1;
}

  //document.getElementById('repmotor').textContent = repmotor;


//datos relacion trailer
 /*
 let drt1 =kmTotal/2;
 document.getElementById('drt1').textContent = drt1;
 
 document.getElementById('drt2').textContent = kmTotal;
 document.getElementById('drt3').textContent = viajesMes;
 let totalkmxmes;
 totalkmxmes = kmTotal * viajesMes;
 document.getElementById('drt4').textContent = totalkmxmes;
*/

//kmTotal
 //---------------------- COSTOS FIJOS-------------------------
 //-----------------sueldos y prestaciones---------------------
let CFc2f2 = 800;
 document.getElementById('CFc2f2').textContent = (CFc2f2).toFixed(2);
let CFc3f2 = numerodeviajesalmes ;
 document.getElementById('CFc3f2').textContent = (CFc3f2).toFixed(2);
let CFc4f2 = CFc2f2 * 12;
 document.getElementById('CFc4f2').textContent = (CFc4f2).toFixed(2);
let CFc5f2 = CFc2f2 / kmpromediomensual;
 document.getElementById('CFc5f2').textContent = (CFc5f2).toFixed(2);


 
//-----------------garaje---------------------

let CFc2f3;
  CFc2f3=(garaje).toFixed(2);
document.getElementById('CFc2f3').textContent = CFc2f3;
let CFc3f3 = (numerodeviajesalmes ).toFixed(2);
document.getElementById('CFc3f3').textContent = CFc3f3;
let CFc4f3
 CFc4f3 = (CFc2f3*12).toFixed(2);
 document.getElementById('CFc4f3').textContent = CFc4f3;
let CFc5f3 = (CFc2f3 /kmpromediomensual).toFixed(2);
 document.getElementById('CFc5f3').textContent = CFc5f3;

//-----------------Matriculación vehicular (impuesto ambiental, cabezal, plataforma, otros)---------------------
let CFc4f4;
 CFc4f4 = (175).toFixed(2);
 document.getElementById('CFc4f4').textContent = CFc4f4;

let CFc2f4;
 CFc2f4 = (CFc4f4 /12).toFixed(2);
 document.getElementById('CFc2f4').textContent = CFc2f4;

let CFc3f4;
 CFc3f4 = (numerodeviajesalmes).toFixed(2);
 document.getElementById('CFc3f4').textContent = CFc3f4;

let CFc5f4 = (CFc2f4/kmpromediomensual).toFixed(2);
 document.getElementById('CFc5f4').textContent = CFc5f4;

//-----------------Seguros; vehículos, carga---------------------

let CFc2f5;
 CFc2f5 = (530).toFixed(2);
 document.getElementById('CFc2f5').textContent = CFc2f5;

let CFc3f5;
 CFc3f5 = numerodeviajesalmes;
  document.getElementById('CFc3f5').textContent = CFc3f5;

let CFc4f5;
 CFc4f5 = (CFc2f5 * 12).toFixed(2);
 document.getElementById('CFc4f5').textContent = CFc4f5;
let CFc5f5 = (CFc2f5/kmpromediomensual).toFixed(2);
 document.getElementById('CFc5f5').textContent = CFc5f5;

 
//-----------------revisiones tecnicas--------------------

let CFc2f6;
 CFc2f6 = (4.16).toFixed(2);
 document.getElementById('CFc2f6').textContent = CFc2f6;

let CFc3f6;
 CFc3f6 = numerodeviajesalmes;
 document.getElementById('CFc3f6').textContent = CFc3f6;

let  CFc4f6;
 CFc4f6 = (CFc2f6*12).toFixed(2);
 document.getElementById('CFc4f6').textContent = CFc4f6;
let CFc5f6 = (CFc2f6 /kmpromediomensual).toFixed (2);
 document.getElementById('CFc5f6').textContent = CFc5f6;

//-----------------Gastos administrativos (contribuciones filiales, gastos de representación)--------------------
let CFc2f7;
 CFc2f7 = (10).toFixed(2);
 document.getElementById('CFc2f7').textContent = CFc2f7;

let CFc3f7;
 CFc3f7 = (numerodeviajesalmes).toFixed(2);
 document.getElementById('CFc3f7').textContent = CFc3f7;

let CFc4f7;
 CFc4f7 = (CFc2f7 * 12).toFixed(2) ;
 document.getElementById('CFc4f7').textContent = CFc4f7;

 let CFc5f7 = (CFc2f7 /kmpromediomensual).toFixed (2);
 document.getElementById('CFc5f7').textContent = CFc5f7;

//-----------------Servicios Básicos (luz, agua, teléfono convencional - celular, internet)---------------------
let CFc2f8;
 CFc2f8 = (106).toFixed(2);
 document.getElementById('CFc2f8').textContent = CFc2f8;

let CFc3f8;
 CFc3f8 = (numerodeviajesalmes).toFixed(2);
 document.getElementById('CFc3f8').textContent = CFc3f8;

let CFc4f8;
 CFc4f8 = (CFc2f8 * 12).toFixed(2);
 document.getElementById('CFc4f8').textContent = CFc4f8;

let CFc5f8 = (CFc2f8/kmpromediomensual).toFixed (2);
 document.getElementById('CFc5f8').textContent = CFc5f8;

//-----------------Costos financieros (cuota interés letra vehículo)---------------------
let CFc2f9;
 CFc2f9 = (0).toFixed(2);
 document.getElementById('CFc2f9').textContent = CFc2f9;

let CFc3f9;
 CFc3f9 = (numerodeviajesalmes).toFixed(2);;
 document.getElementById('CFc3f9').textContent = CFc3f9;

let CFc4f9;
 CFc4f9 = (CFc2f9*12).toFixed(2);
 document.getElementById('CFc4f9').textContent = CFc4f9;

let CFc5f9 = (0).toFixed(2);//(CFc2f9/kmpromediomensual).toFixed (2);
 document.getElementById('CFc5f9').textContent = CFc5f9;

//-----------------Depreciación del vehículo---------------------
let CFc4f10; 
 CFc4f10 = (((costadquisicion)-((costadquisicion)*0.1))/vidautilcontable).toFixed(2);
 document.getElementById('CFc4f10').textContent = CFc4f10;

let CFc2f10; 
 CFc2f10 = (CFc4f10 / 12).toFixed(2);
document.getElementById('CFc2f10').textContent = CFc2f10;

let CFc3f10;
 CFc3f10 = (numerodeviajesalmes).toFixed(2);
 document.getElementById('CFc3f10').textContent = CFc3f10;

let CFc5f10 =(CFc2f10/kmpromediomensual).toFixed (2);
 document.getElementById('CFc5f10').textContent = CFc5f10;

//-----------------Permisos y habilitaciones---------------------
let CFc4f11;
 CFc4f11 = (100).toFixed(2);
 document.getElementById('CFc4f11').textContent = CFc4f11;

let CFc2f11;
 CFc2f11 = (CFc4f11/12).toFixed(2);
 document.getElementById('CFc2f11').textContent = CFc2f11;

let CFc3f11;
 CFc3f11 = (numerodeviajesalmes).toFixed(2);
 document.getElementById('CFc3f11').textContent = CFc3f11;

let CFc5f11 =(CFc2f11/kmpromediomensual).toFixed (2);
 document.getElementById('CFc5f11').textContent = CFc5f11;

//-----------------Rastreo satelital GPS---------------------

let CFc2f12;
 CFc2f12 = (19.44).toFixed(2);
 document.getElementById('CFc2f12').textContent = CFc2f12;

let CFc3f12;
 CFc3f12 = (numerodeviajesalmes).toFixed(2);
 document.getElementById('CFc3f12').textContent = CFc3f12;


let CFc4f12;
 CFc4f12 = (CFc2f12*12).toFixed(2);
 document.getElementById('CFc4f12').textContent = CFc4f12;

let CFc5f12 =(CFc2f12/kmpromediomensual).toFixed (2);
 document.getElementById('CFc5f12').textContent = CFc5f12;

//-----------------Póliza andina---------------------
let CFc2f13;
 CFc2f13 = (6.25).toFixed(2);
 document.getElementById('CFc2f13').textContent = CFc2f13;

let CFc3f13;
 CFc3f13 = (numerodeviajesalmes).toFixed(2);
 document.getElementById('CFc3f13').textContent = CFc3f13;

let CFc4f13;
 CFc4f13 = (CFc2f13*12).toFixed(2);
 document.getElementById('CFc4f13').textContent = CFc4f13;
let CFc5f13 =(CFc2f13/kmpromediomensual).toFixed (2);
 document.getElementById('CFc5f13').textContent = CFc5f13;

//-----------------TOTAL ---------------------


//let totalcostosfijos;
 //totalcostosfijos =CFc4f2 + CFc4f3 + CFc4f4 +CFc4f4+CFc4f5+CFc4f6+CFc4f7+CFc4f8+CFc4f9+CFc4f10+CFc4f11+CFc4f12+CFc4f13;
 //document.getElementById('totalcostosfijos').textContent = (totalcostosfijos).toFixed(2);
let totalcostosfijos1 = 
  parseFloat(CFc2f2) +
  parseFloat(CFc2f3) +
  parseFloat(CFc2f4) + // solo una vez
  parseFloat(CFc2f5) +
  parseFloat(CFc2f6) +
  parseFloat(CFc2f7) +
  parseFloat(CFc2f8) +
  parseFloat(CFc2f9) +
  parseFloat(CFc2f10) +
  parseFloat(CFc2f11) +
  parseFloat(CFc2f12) ;
  parseFloat(CFc2f13);

document.getElementById('totalcostosfijos1').textContent = totalcostosfijos1.toFixed(2);
let totalcostosfijos2 = 
  parseFloat(CFc4f2) +
  parseFloat(CFc4f3) +
  parseFloat(CFc4f4) + // solo una vez
  parseFloat(CFc4f5) +
  parseFloat(CFc4f6) +
  parseFloat(CFc4f7) +
  parseFloat(CFc4f8) +
  parseFloat(CFc4f9) +
  parseFloat(CFc4f10) +
  parseFloat(CFc4f11) +
  parseFloat(CFc4f12) ;
  parseFloat(CFc4f13);

document.getElementById('totalcostosfijos2').textContent = totalcostosfijos2.toFixed(2);


 let totalcostosfijosf = 
  parseFloat(CFc5f2) +
  parseFloat(CFc5f3) +
  parseFloat(CFc5f4) + // solo una vez
  parseFloat(CFc5f5) +
  parseFloat(CFc5f6) +
  parseFloat(CFc5f7) +
  parseFloat(CFc5f8) +
  parseFloat(CFc5f9) +
  parseFloat(CFc5f10) +
  parseFloat(CFc5f11) +
  parseFloat(CFc5f12) ;
  parseFloat(CFc5f13);

document.getElementById('totalcostosfijosf').textContent = totalcostosfijosf.toFixed(2);





//-------------------------COSTOS MANTENIMIENTO
        
//-----------------------LLANTAS DELANTERAS</label>
let CMF1C2 = 470;
let CMF1C3 = 110000;
let CMF1C4 = 2;
let CMF1C5 ;
 CMF1C5= ( (CMF1C4*CMF1C2)/CMF1C3).toFixed(5);

 document.getElementById('CMF1C2').textContent = CMF1C2;
document.getElementById('CMF1C3').textContent = CMF1C3;
document.getElementById('CMF1C4').textContent = CMF1C4;
document.getElementById('CMF1C5').textContent = CMF1C5;
// ---------separacion----------



//-----------------------LLANTAS DE TRACCIÓN</label>
let CMF2C2 = 470;
let CMF2C3 =110000;
let CMF2C4= 8;
let CMF2C5;
 CMF2C5 =  ((CMF2C4 * CMF2C2) / CMF2C3).toFixed(5);

 document.getElementById('CMF2C2').textContent = CMF2C2;
document.getElementById('CMF2C3').textContent = CMF2C3;
document.getElementById('CMF2C4').textContent = CMF2C4;
document.getElementById('CMF2C5').textContent = CMF2C5;
// ---------separacion----------



//-----------------------LLANTAS DE ARRASTRE</label>
let CMF3C2 = 350;
let CMF3C3 = 150000;
let CMF3C4 = 12;
let CMF3C5 ;
CMF3C5 =  ((CMF3C4 * CMF3C2) / CMF3C3).toFixed(5);

document.getElementById('CMF3C2').textContent = CMF3C2;
document.getElementById('CMF3C3').textContent = CMF3C3;
document.getElementById('CMF3C4').textContent = CMF3C4;
document.getElementById('CMF3C5').textContent = CMF3C5;
// ---------separacion----------


//-----------------------RINES</label>--elimina
let CMF4C2 =80;
let CMF4C3 =450000;
let CMF4C4 =22;
let CMF4C5;
CMF4C5 =  ((CMF4C4 * CMF4C2) / CMF4C3).toFixed(2);

document.getElementById('CMF4C2').textContent = CMF4C2;
document.getElementById('CMF4C3').textContent = CMF4C3;
document.getElementById('CMF4C4').textContent = CMF4C4;
document.getElementById('CMF4C5').textContent = CMF4C5;
// ---------separacion----------



//-----------------------PINCHAZOS Y DAÑOS</label>
let CMF5C2 =15;
let CMF5C3 =90000;
let CMF5C4 =5;
let CMF5C5;
CMF5C5 =  ((CMF5C4 * CMF5C2) / CMF5C3).toFixed(5);

document.getElementById('CMF5C2').textContent = CMF5C2;
document.getElementById('CMF5C3').textContent = CMF5C3;
document.getElementById('CMF5C4').textContent = CMF5C4;
document.getElementById('CMF5C5').textContent = CMF5C5;
// ---------separacion----------


//-----------------------ALINEACIÓN</label>
let CMF6C2 =20;
let CMF6C3 =7500;
let CMF6C4 =1;
let CMF6C5;
CMF6C5 =  ((CMF6C4 * CMF6C2) / CMF6C3).toFixed(5);

document.getElementById('CMF6C2').textContent = CMF6C2;
document.getElementById('CMF6C3').textContent = CMF6C3;
document.getElementById('CMF6C4').textContent = CMF6C4;
document.getElementById('CMF6C5').textContent = CMF6C5;
// ---------separacion----------


//-----------------------BALANCEO</label>
let CMF7C2 =5;
let CMF7C3 =7500;
let CMF7C4 =1;
let CMF7C5;
CMF7C5 =  ((CMF7C4 * CMF7C2) / CMF7C3).toFixed(5);

document.getElementById('CMF7C2').textContent = CMF7C2;
document.getElementById('CMF7C3').textContent = CMF7C3;
document.getElementById('CMF7C4').textContent = CMF7C4;
document.getElementById('CMF7C5').textContent = CMF7C5;
// ---------separacion----------


//-----------------------MANTENIMIENTO ORDINARIO</label>

        
//-----------------------CAMBIO DE ACEITE</label>
let CMF8C2 =300;
let CMF8C3 =8000;
let CMF8C4 =1;
let CMF8C5;
CMF8C5 =  ((CMF8C4 * CMF8C2) / CMF8C3).toFixed(5);

document.getElementById('CMF8C2').textContent = CMF8C2;
document.getElementById('CMF8C3').textContent = CMF8C3;
document.getElementById('CMF8C4').textContent = CMF8C4;
document.getElementById('CMF8C5').textContent = CMF8C5;
// ---------separacion----------

//-----------------------ACEITE CAJA Y TRANSMISIÓN</label>
let CMF9C2 =450;
let CMF9C3 =80000;
let CMF9C4 =1;
let CMF9C5;
CMF9C5 = ( (CMF9C4 * CMF9C2) / CMF9C3).toFixed(5);

document.getElementById('CMF9C2').textContent = CMF9C2;
document.getElementById('CMF9C3').textContent = CMF9C3;
document.getElementById('CMF9C4').textContent = CMF9C4;
document.getElementById('CMF9C5').textContent = CMF9C5;
// ---------separacion----------



//-----------------------FILTROS DE AIRE</label>
let CMF10C2 =120;
let CMF10C3 =22500;
let CMF10C4 =1;
let CMF10C5;
CMF10C5 = ((CMF10C4 * CMF10C2) / CMF10C3).toFixed(5);

document.getElementById('CMF10C2').textContent = CMF10C2;
document.getElementById('CMF10C3').textContent = CMF10C3;
document.getElementById('CMF10C4').textContent = CMF10C4;
document.getElementById('CMF10C5').textContent = CMF10C5;
// ---------separacion----------


//-----------------------LUBRICANTES/FLUIDOS</label>
let CMF11C2 =23;
let CMF11C3 =90000;
let CMF11C4 =22;
let CMF11C5 ;
CMF11C5 = ((CMF11C4 * CMF11C2) / CMF11C3).toFixed(5);

document.getElementById('CMF11C2').textContent = CMF11C2;
document.getElementById('CMF11C3').textContent = CMF11C3;
document.getElementById('CMF11C4').textContent = CMF11C4;
document.getElementById('CMF11C5').textContent = CMF11C5;
// ---------separacion----------


//-----------------------LIMPIEZA</label>
let CMF12C2 =50;
let CMF12C3 =7500;
let CMF12C4 =1;
let CMF12C5;
CMF12C5 = ((CMF12C4 * CMF12C2) / CMF12C3).toFixed(5);

document.getElementById('CMF12C2').textContent = CMF12C2;
document.getElementById('CMF12C3').textContent = CMF12C3;
document.getElementById('CMF12C4').textContent = CMF12C4;
document.getElementById('CMF12C5').textContent = CMF12C5;
// ---------separacion----------

//--------------REVISION ------------
//let sistemaelectrico;
//let sistemaelectrico =((repmotor/60)/7500).toFixed(5);
//document.getElementById('sistemaelectrico').textContent = sistemaelectrico;
//-----------------------SISTEMA ELÉCTRICO</label>



let CMF13C2 = 15;
let CMF13C3 =7500;
let CMF13C4 =1;
let CMF13C5;
CMF13C5 = ((CMF13C4 * CMF13C2) / CMF13C3).toFixed(5);

document.getElementById('CMF13C2').textContent = CMF13C2;
document.getElementById('CMF13C3').textContent = CMF13C3;
document.getElementById('CMF13C4').textContent = CMF13C4;
document.getElementById('CMF13C5').textContent = CMF13C5;
// ---------separacion----------

//-----------------------MANÓMETROS</label>
let CMF14C2 =6.94;
let CMF14C3 =7500;
let CMF14C4 =1;
let CMF14C5;
CMF14C5 = ((CMF14C4 * CMF14C2) / CMF14C3).toFixed(5);

document.getElementById('CMF14C2').textContent = CMF14C2;
document.getElementById('CMF14C3').textContent = CMF14C3;
document.getElementById('CMF14C4').textContent = CMF14C4;
document.getElementById('CMF14C5').textContent = CMF14C5;
// ---------separacion----------



//-----------------------VIDRIOS Y SISTEMA DE LIMPIEZA</label>
let CMF15C2 =12.5;
let CMF15C3 = 7500;
let CMF15C4 =1;
let CMF15C5;
CMF15C5 = ((CMF15C4 * CMF15C2) / CMF15C3).toFixed(5);

document.getElementById('CMF15C2').textContent = CMF15C2;
document.getElementById('CMF15C3').textContent = CMF15C3;
document.getElementById('CMF15C4').textContent = CMF15C4;
document.getElementById('CMF15C5').textContent = CMF15C5;
// ---------separacion----------


//-----------------------LUCES</label>
let CMF16C2 =35;
let CMF16C3 =7500;
let CMF16C4 =1;
let CMF16C5;
CMF16C5 = ((CMF16C4 * CMF16C2) / CMF16C3).toFixed(5);

document.getElementById('CMF16C2').textContent = CMF16C2;
document.getElementById('CMF16C3').textContent = CMF16C3;
document.getElementById('CMF16C4').textContent = CMF16C4;
document.getElementById('CMF16C5').textContent = CMF16C5;
// ---------separacion----------


//-----------------------ACCESORIOS</label>
let CMF17C2 =20;
let CMF17C3 =7500;
let CMF17C4 =1;
let CMF17C5;
CMF17C5 = ((CMF17C4 * CMF17C2) / CMF17C3).toFixed(5);

document.getElementById('CMF17C2').textContent = CMF17C2;
document.getElementById('CMF17C3').textContent = CMF17C3;
document.getElementById('CMF17C4').textContent = CMF17C4;
document.getElementById('CMF17C5').textContent = CMF17C5;
// ---------separacion----------

//-----------------------MOTOR DE ARRANQUE</label>
let CMF18C2 =8.33;
let CMF18C3 =7500;
let CMF18C4 =1;
let CMF18C5;
CMF18C5 = ((CMF18C4 * CMF18C2) / CMF18C3).toFixed(5);

document.getElementById('CMF18C2').textContent = CMF18C2;
document.getElementById('CMF18C3').textContent = CMF18C3;
document.getElementById('CMF18C4').textContent = CMF18C4;
document.getElementById('CMF18C5').textContent = CMF18C5;
// ---------separacion----------


//-----------------------ALTERNADOR</label>
let CMF19C2 =8.33;
let CMF19C3 =7500;
let CMF19C4 =1;
let CMF19C5;
CMF19C5 = ((CMF19C4 * CMF19C2) / CMF19C3).toFixed(5);

document.getElementById('CMF19C2').textContent = CMF19C2;
document.getElementById('CMF19C3').textContent = CMF19C3;
document.getElementById('CMF19C4').textContent = CMF19C4;
document.getElementById('CMF19C5').textContent = CMF19C5;
// ---------separacion----------


//-----------------------BATERIAS</label>
let CMF20C2 =400;
let CMF20C3 =135000;
let CMF20C4 =2;
let CMF20C5;
CMF20C5 = ((CMF20C4 * CMF20C2) / CMF20C3).toFixed(5);

document.getElementById('CMF20C2').textContent = CMF20C2;
document.getElementById('CMF20C3').textContent = CMF20C3;
document.getElementById('CMF20C4').textContent = CMF20C4;
document.getElementById('CMF20C5').textContent = CMF20C5;
// ---------separacion----------


//-----------------------SISTEMA DE FRENOS</label>


//-----------------------REPARACIÓN MENOR (ENGRASADA LIMPIEZA)</label>
let CMF21C2 =23;
let CMF21C3 =90000;
let CMF21C4 =22;
let CMF21C5;
CMF21C5 = ((CMF21C4 * CMF21C2) / CMF21C3).toFixed(5);

document.getElementById('CMF21C2').textContent = CMF21C2;
document.getElementById('CMF21C3').textContent = CMF21C3;
document.getElementById('CMF21C4').textContent = CMF21C4;
document.getElementById('CMF21C5').textContent = CMF21C5;

//-----------------------REPARACIÓN MAYOR (REMACHADA Y ZAPATAS)</label>
let CMF22C2 =50;
let CMF22C3 =90000;
let CMF22C4 =22;
let CMF22C5;
CMF22C5 = ((CMF22C4 * CMF22C2) / CMF22C3).toFixed(5);

// ---------separacion----------
document.getElementById('CMF22C2').textContent = CMF22C2;
document.getElementById('CMF22C3').textContent = CMF22C3;
document.getElementById('CMF22C4').textContent = CMF22C4;
document.getElementById('CMF22C5').textContent = CMF22C5;
// ---------separacion----------



//-----------------------AJUSTES, CALIBRACIONES</label>
let CMF23C2 =10;
let CMF23C3 =7500;
let CMF23C4 =1;
let CMF23C5 ;
CMF23C5 = ((CMF23C4 * CMF23C2) / CMF23C3).toFixed(5);

document.getElementById('CMF23C2').textContent = CMF23C2;
document.getElementById('CMF23C3').textContent = CMF23C3;
document.getElementById('CMF23C4').textContent = CMF23C4;
document.getElementById('CMF23C5').textContent = CMF23C5;
// ---------separacion----------


//-----------------------TAMBORES</label>
let CMF24C2 =2;
let CMF24C3 =7500;
let CMF24C4 =1;
let CMF24C5;
CMF24C5 = ((CMF24C4 * CMF24C2) / CMF24C3).toFixed(5);

document.getElementById('CMF24C2').textContent = CMF24C2;
document.getElementById('CMF24C3').textContent = CMF24C3;
document.getElementById('CMF24C4').textContent = CMF24C4;
document.getElementById('CMF24C5').textContent = CMF24C5;
// ---------separacion----------


//-----------------------SELLOS (RETENEDORES)</label>
let CMF25C2 =2.91;
let CMF25C3 =7500;
let CMF25C4 =1;
let CMF25C5;
CMF25C5 = ((CMF25C4 * CMF25C2) / CMF25C3).toFixed(5);

document.getElementById('CMF25C2').textContent = CMF25C2;
document.getElementById('CMF25C3').textContent = CMF25C3;
document.getElementById('CMF25C4').textContent = CMF25C4;
document.getElementById('CMF25C5').textContent = CMF25C5;

// ---------separacion----------


//-----------------------SUSPENSIÓN</label>


//-----------------------RESORTES, BALLESTAS</label>
let CMF26C2 =37.5;
let CMF26C3 =7500;
let CMF26C4 =1;
let CMF26C5;
CMF26C5 = ((CMF26C4 * CMF26C2) / CMF26C3).toFixed(5);

document.getElementById('CMF26C2').textContent = CMF26C2;
document.getElementById('CMF26C3').textContent = CMF26C3;
document.getElementById('CMF26C4').textContent = CMF26C4;
document.getElementById('CMF26C5').textContent = CMF26C5;
// ---------separacion----------


//-----------------------CAUCHOS</label>
let CMF27C2 =5;
let CMF27C3 =7500;
let CMF27C4 =1;
let CMF27C5;
CMF27C5 = ((CMF27C4 * CMF27C2) / CMF27C3).toFixed(5);

document.getElementById('CMF27C2').textContent = CMF27C2;
document.getElementById('CMF27C3').textContent = CMF27C3;
document.getElementById('CMF27C4').textContent = CMF27C4;
document.getElementById('CMF27C5').textContent = CMF27C5;
// ---------separacion----------


//-----------------------SISTEMA DE TRANSMISIÓN</label>
let SISTEMADETRANSMISION =((1000/36)/kmpromediomensual).toFixed(5);
document.getElementById('SISTEMADETRANSMISION').textContent = SISTEMADETRANSMISION;


//-----------------------DIRECCIÓN</label>
let CMF28C2 =0;
let CMF28C3 =0;
let CMF28C4 =0;
let CMF28C5;
CMF28C5 =0;// (CMF28C4 * CMF28C2) / CMF28C3;

document.getElementById('CMF28C2').textContent = CMF28C2;
document.getElementById('CMF28C3').textContent = CMF28C3;
document.getElementById('CMF28C4').textContent = CMF28C4;
document.getElementById('CMF28C5').textContent = CMF28C5;
// ---------separacion----------


//-----------------------PIN</label>
let CMF29C2 =0;
let CMF29C3 =0;
let CMF29C4 =0;
let CMF29C5;
CMF29C5 = 0;//(CMF29C4 * CMF29C2) / CMF29C3;

document.getElementById('CMF29C2').textContent = CMF29C2;
document.getElementById('CMF29C3').textContent = CMF29C3;
document.getElementById('CMF29C4').textContent = CMF29C4;
document.getElementById('CMF29C5').textContent = CMF29C5;
// ---------separacion----------


//-----------------------CLUTCH EMBRAGUE</label>
let CMF30C2 =0;
let CMF30C3 =0;
let CMF30C4 =0;
let CMF30C5;
CMF30C5 = 0;//(CMF30C4 * CMF30C2) / CMF30C3;

document.getElementById('CMF30C2').textContent = CMF30C2;
document.getElementById('CMF30C3').textContent = CMF30C3;
document.getElementById('CMF30C4').textContent = CMF30C4;
document.getElementById('CMF30C5').textContent = CMF30C5;
// ---------separacion----------


//-----------------------DIFERENCIAL TRANSMISIÓN</label>
let CMF31C2 =0;
let CMF31C3 =0;
let CMF31C4 =0;
let CMF31C5;
CMF31C5 = 0;//(CMF31C4 * CMF31C2) / CMF31C3;

document.getElementById('CMF31C2').textContent = CMF31C2;
document.getElementById('CMF31C3').textContent = CMF31C3;
document.getElementById('CMF31C4').textContent = CMF31C4;
document.getElementById('CMF31C5').textContent = CMF31C5;
// ---------separacion----------


//-----------------------CAJA</label>
let CMF32C2 =0;
let CMF32C3 =0;
let CMF32C4 =0;
let CMF32C5;
CMF32C5 = 0;//(CMF32C4 * CMF32C2) / CMF32C3;

document.getElementById('CMF32C2').textContent = CMF32C2;
document.getElementById('CMF32C3').textContent = CMF32C3;
document.getElementById('CMF32C4').textContent = CMF32C4;
document.getElementById('CMF32C5').textContent = CMF32C5;
// ---------separacion----------


//-----------------------CARDÁN</label>
let CMF33C2 =0;
let CMF33C3 =0;
let CMF33C4 =0;
let CMF33C5;
CMF33C5 = 0;//(CMF33C4 * CMF33C2) / CMF33C3;

document.getElementById('CMF33C2').textContent = CMF33C2;
document.getElementById('CMF33C3').textContent = CMF33C3;
document.getElementById('CMF33C4').textContent = CMF33C4;
document.getElementById('CMF33C5').textContent = CMF33C5;
// ---------separacion----------



//-----------------------EJE DE CARGA DELANTERO</label>
let CMF34C2 =0;
let CMF34C3 =0;
let CMF34C4 =0;
let CMF34C5;
CMF34C5 = 0;//(CMF34C4 * CMF34C2) / CMF34C3;

document.getElementById('CMF34C2').textContent = CMF34C2;
document.getElementById('CMF34C3').textContent = CMF34C3;
document.getElementById('CMF34C4').textContent = CMF34C4;
document.getElementById('CMF34C5').textContent = CMF34C5;
// ---------separacion----------


//-----------------------EJE DE CARGA TRASERO</label>
let CMF35C2 =0;
let CMF35C3 =0;
let CMF35C4 =0;
let CMF35C5;
CMF35C5 = 0;//(CMF35C4 * CMF35C2) / CMF35C3;

document.getElementById('CMF35C2').textContent = CMF35C2;
document.getElementById('CMF35C3').textContent = CMF35C3;
document.getElementById('CMF35C4').textContent = CMF35C4;
document.getElementById('CMF35C5').textContent = CMF35C5;
// ---------separacion----------



//-----------------------REPARACIÓN DE MOTOR</label>

let REPARACIÓNDEMOTOR = (((266.66/kmpromediomensual))*repmotor).toFixed(5);
document.getElementById('REPARACIÓNDEMOTOR').textContent = REPARACIÓNDEMOTOR;

//-----------------------BOMBA DE AGUA</label>

let CMF36C2 =0;
let CMF36C3 =0;
let CMF36C4 =0;
let CMF36C5;
CMF36C5 =0;// (CMF36C4 * CMF36C2) / CMF36C3;

document.getElementById('CMF36C2').textContent = CMF36C2;
document.getElementById('CMF36C3').textContent = CMF36C3;
document.getElementById('CMF36C4').textContent = CMF36C4;
document.getElementById('CMF36C5').textContent = CMF36C5;
// ---------separacion----------


//-----------------------PURIFICADOR DE AIRE</label>
let CMF37C2 =0;
let CMF37C3 =0;
let CMF37C4 =0;
let CMF37C5;
CMF37C5 =0;// (CMF37C4 * CMF37C2) / CMF37C3;

document.getElementById('CMF37C2').textContent = CMF37C2;
document.getElementById('CMF37C3').textContent = CMF37C3;
document.getElementById('CMF37C4').textContent = CMF37C4;
document.getElementById('CMF37C5').textContent = CMF37C5;
// ---------separacion----------


//-----------------------RADIADOR</label>
let CMF38C2 =0;
let CMF38C3 =0;
let CMF38C4 =0;
let CMF38C5;
CMF38C5 = 0;//(CMF38C4 * CMF38C2) / CMF38C3;

document.getElementById('CMF38C2').textContent = CMF38C2;
document.getElementById('CMF38C3').textContent = CMF38C3;
document.getElementById('CMF38C4').textContent = CMF38C4;
document.getElementById('CMF38C5').textContent = CMF38C5;
// ---------separacion----------


//-----------------------ENTONACIÓN, PUESTA A PUNTO</label>
let CMF39C2 =0;
let CMF39C3 =0;
let CMF39C4 =0;
let CMF39C5;
CMF39C5 = 0;//(CMF39C4 * CMF39C2) / CMF39C3;

document.getElementById('CMF39C2').textContent = CMF39C2;
document.getElementById('CMF39C3').textContent = CMF39C3;
document.getElementById('CMF39C4').textContent = CMF39C4;
document.getElementById('CMF39C5').textContent = CMF39C5;
// ---------separacion----------


//-----------------------OVERHAUL MOTOR</label>
let CMF40C2 =0;
let CMF40C3 =0;
let CMF40C4 =0;
let CMF40C5;
CMF40C5 = 0;//(CMF40C4 * CMF40C2) / CMF40C3;

document.getElementById('CMF40C2').textContent = CMF40C2;
document.getElementById('CMF40C3').textContent = CMF40C3;
document.getElementById('CMF40C4').textContent = CMF40C4;
document.getElementById('CMF40C5').textContent = CMF40C5;
// ---------separacion----------


//-----------------------TURBO</label>
let CMF41C2 =0;
let CMF41C3 =0;
let CMF41C4 =0;
let CMF41C5;
CMF41C5 = 0;//(CMF41C4 * CMF41C2) / CMF41C3;

document.getElementById('CMF41C2').textContent = CMF41C2;
document.getElementById('CMF41C3').textContent = CMF41C3;
document.getElementById('CMF41C4').textContent = CMF41C4;
document.getElementById('CMF41C5').textContent = CMF41C5;
// ---------separacion----------


//-----------------------BOMBA DE COMBUSTIBLE</label>
let CMF42C2 =0;
let CMF42C3 =0;
let CMF42C4 =0;
let CMF42C5;
CMF42C5 = 0;//(CMF42C4 * CMF42C2) / CMF42C3;

document.getElementById('CMF42C2').textContent = CMF42C2;
document.getElementById('CMF42C3').textContent = CMF42C3;
document.getElementById('CMF42C4').textContent = CMF42C4;
document.getElementById('CMF42C5').textContent = CMF42C5;
// ---------separacion----------


//-----------------------SISTEMA DE ACEITE</label>
let CMF43C2 =0;
let CMF43C3 =0;
let CMF43C4 =0;
let CMF43C5;
CMF43C5 = 0;//(CMF43C4 * CMF43C2) / CMF43C3;

document.getElementById('CMF43C2').textContent = CMF43C2;
document.getElementById('CMF43C3').textContent = CMF43C3;
document.getElementById('CMF43C4').textContent = CMF43C4;
document.getElementById('CMF43C5').textContent = CMF43C5;
// ---------separacion----------


//-----------------------ENFRIAMIENTO</label>
let CMF44C2 =0;
let CMF44C3 =0;
let CMF44C4 =0;
let CMF44C5;
CMF44C5 = 0;//(CMF44C4 * CMF44C2) / CMF44C3;

document.getElementById('CMF44C2').textContent = CMF44C2;
document.getElementById('CMF44C3').textContent = CMF44C3;
document.getElementById('CMF44C4').textContent = CMF44C4;
document.getElementById('CMF44C5').textContent = CMF44C5;
// ---------separacion----------


//-----------------------SISTEMA DE ESCAPE</label>
let CMF45C2 =0;
let CMF45C3 =0;
let CMF45C4 =0;
let CMF45C5;
CMF45C5 = 0;//(CMF45C4 * CMF45C2) / CMF45C3;

document.getElementById('CMF45C2').textContent = CMF45C2;
document.getElementById('CMF45C3').textContent = CMF45C3;
document.getElementById('CMF45C4').textContent = CMF45C4;
document.getElementById('CMF45C5').textContent = CMF45C5;
// ---------separacion----------


//-----------------------SISTEMA ELECTRÓNICO</label>
let CMF46C2 =0;
let CMF46C3 =0;
let CMF46C4 =0;
let CMF46C5;
CMF46C5 =0;// (CMF46C4 * CMF46C2) / CMF46C3;
document.getElementById('CMF46C2').textContent = CMF46C2;
document.getElementById('CMF46C3').textContent = CMF46C3;
document.getElementById('CMF46C4').textContent = CMF46C4;
document.getElementById('CMF46C5').textContent = CMF46C5;

//-----------------------TOTAL</label>
/*let CMT =(CMF1C5 + CMF2C5 + CMF3C5 + CMF4C5 + CMF5C5 +
    CMF6C5 + CMF7C5 + CMF8C5 + CMF9C5 + CMF10C5 +
    CMF11C5 + CMF12C5 + CMF13C5 + CMF14C5 + CMF15C5 +
    CMF16C5 + CMF17C5 + CMF18C5 + CMF19C5 + CMF20C5 +
    CMF21C5 + CMF22C5 + CMF23C5 + CMF24C5 + CMF25C5 +
    CMF26C5 + CMF27C5 + CMF28C5 + CMF29C5 + CMF30C5 +
    CMF31C5 + CMF32C5 + CMF33C5 + CMF34C5 + CMF35C5 +
    CMF36C5 + CMF37C5 + CMF38C5 + CMF39C5 + CMF40C5 +
    CMF41C5 + CMF42C5 + CMF43C5 + CMF44C5 + CMF45C5 + CMF46C5 +REPARACIÓNDEMOTOR).toFixed(2);*/
//document.getElementById('CMT').textContent = CMT;
let CMT = (
  parseFloat(CMF1C5) +
    parseFloat(CMF2C5) +
    parseFloat(CMF3C5) +
    parseFloat(CMF4C5) +
    parseFloat(CMF5C5) +
    parseFloat(CMF6C5) +
    parseFloat(CMF7C5) +
    parseFloat(CMF8C5) +
    parseFloat(CMF9C5) +
    parseFloat(CMF10C5) +
    parseFloat(CMF11C5) +
    parseFloat(CMF12C5) +
    parseFloat(CMF13C5) +
    parseFloat(CMF14C5) +
    parseFloat(CMF15C5) +
    parseFloat(CMF16C5) +
    parseFloat(CMF17C5) +
    parseFloat(CMF18C5) +
    parseFloat(CMF19C5) +
    parseFloat(CMF20C5) +
    parseFloat(CMF21C5) +
    parseFloat(CMF22C5) +
    parseFloat(CMF23C5) +
    parseFloat(CMF24C5) +
    parseFloat(CMF25C5) +
    parseFloat(CMF26C5) +
    parseFloat(CMF27C5) +
    parseFloat(CMF28C5) +
    parseFloat(CMF29C5) +
    parseFloat(CMF30C5) +
    parseFloat(CMF31C5) +
    parseFloat(CMF32C5) +
    parseFloat(CMF33C5) +
    parseFloat(CMF34C5) +
    parseFloat(CMF35C5) +
    parseFloat(CMF36C5) +
    parseFloat(CMF37C5) +
    parseFloat(CMF38C5) +
    parseFloat(CMF39C5) +
    parseFloat(CMF40C5) +
    parseFloat(CMF41C5) +
    parseFloat(CMF42C5) +
    parseFloat(CMF43C5) +
    parseFloat(CMF44C5) +
    parseFloat(CMF45C5) +
    parseFloat(CMF46C5) + 
    parseFloat(SISTEMADETRANSMISION) + 
    parseFloat(REPARACIÓNDEMOTOR)
).toFixed(2);

document.getElementById('CMT').textContent = CMT;

//-----------------------------COSTOS EXTRAS--------------

//------------------------PRECIO DIESEL
//galonesdiselporviaje
let DIESEL = 1.797;

//-----------------------------DIESEL
let CEF1C2 =(galonesdiselporviaje*DIESEL).toFixed(2);
let CEF1C3 = (CEF1C2*numerodeviajesalmes).toFixed(2);
let CEF1C4 = (CEF1C3/kmpromediomensual).toFixed(2);
document.getElementById('CEF1C2').textContent = CEF1C2;
document.getElementById('CEF1C3').textContent = CEF1C3;
document.getElementById('CEF1C4').textContent = CEF1C4;



//-----------------------------PEAJE
let CEF2C2 = (costodepeajes).toFixed(2);
let CEF2C3 = (CEF2C2*numerodeviajesalmes).toFixed(2);
let CEF2C4 = (CEF2C3/kmpromediomensual).toFixed(2);
document.getElementById('CEF2C2').textContent = CEF2C2;
document.getElementById('CEF2C3').textContent = CEF2C3;
document.getElementById('CEF2C4').textContent = CEF2C4;

//-----------------------------VIÁTICOS
let CEF3C2 = (viaticos).toFixed(2);
let CEF3C3 = (CEF3C2*numerodeviajesalmes).toFixed(2);
let CEF3C4 = (CEF3C3/kmpromediomensual).toFixed(2);
document.getElementById('CEF3C2').textContent = CEF3C2;
document.getElementById('CEF3C3').textContent = CEF3C3;
document.getElementById('CEF3C4').textContent = CEF3C4;


//-----------------------------PESAS Y BALANZA
let CEF4C2 = (pesasybalanza).toFixed(2);
let CEF4C3 = (CEF4C2*numerodeviajesalmes).toFixed(2);
let CEF4C4 = (CEF4C3/kmpromediomensual).toFixed(2);

document.getElementById('CEF4C2').textContent = CEF4C2;
document.getElementById('CEF4C3').textContent = CEF4C3;
document.getElementById('CEF4C4').textContent = CEF4C4;


//-----------------------------CARGUE Y DESCARGUE
let CEF5C2 =(cargaydescargue).toFixed(2);
let CEF5C3 = (CEF5C2*numerodeviajesalmes).toFixed(2);
let CEF5C4 = (CEF5C3/kmpromediomensual).toFixed(2);

document.getElementById('CEF5C2').textContent = CEF5C2;
document.getElementById('CEF5C3').textContent = CEF5C3;
document.getElementById('CEF5C4').textContent = CEF5C4;


//-----------------------------CARAVANA
let CEF6C2 = (caravana).toFixed(2);
let CEF6C3 = (CEF6C2*numerodeviajesalmes).toFixed(2);
let CEF6C4 = (CEF6C3/kmpromediomensual).toFixed(2);

document.getElementById('CEF6C2').textContent = CEF6C2;
document.getElementById('CEF6C3').textContent = CEF6C3;
document.getElementById('CEF6C4').textContent = CEF6C4;


//----------------TOTAL----------------

//let COSTOEXTRATOTAL = (CEF1C5+CEF2C5+CEF3C5+CEF4C5+CEF5C5+CEF6C5).toFixed(2);
//document.getElementById('COSTOEXTRATOTAL').textContent = COSTOEXTRATOTAL;
let COSTOEXTRATOTAL1 = (
  parseFloat(CEF1C2) +
  parseFloat(CEF2C2) +
  parseFloat(CEF3C2) +
  parseFloat(CEF4C2) +
  parseFloat(CEF5C2) +
  parseFloat(CEF6C2)
).toFixed(2);

document.getElementById('COSTOEXTRATOTAL1').textContent = COSTOEXTRATOTAL1;


let COSTOEXTRATOTAL = (
  parseFloat(CEF1C3) +
  parseFloat(CEF2C3) +
  parseFloat(CEF3C3) +
  parseFloat(CEF4C3) +
  parseFloat(CEF5C3) +
  parseFloat(CEF6C3)
).toFixed(2);

document.getElementById('COSTOEXTRATOTAL').textContent = COSTOEXTRATOTAL;

let COSTOEXTRATOTALF = (
  parseFloat(CEF1C4) +
  parseFloat(CEF2C4) +
  parseFloat(CEF3C4) +
  parseFloat(CEF4C4) +
  parseFloat(CEF5C4) +
  parseFloat(CEF6C4)
).toFixed(2);

document.getElementById('COSTOEXTRATOTALF').textContent = COSTOEXTRATOTALF;

//--------------------------------RESULTADOS
//----------------------------COSTOS FIJOS

let COSTOFIJOT =(totalcostosfijosf).toFixed(2);
document.getElementById('COSTOFIJOT').textContent = COSTOFIJOT;


//---------------------------COSTOS MANTENIMIENTO

//let COSTOMANTET = (CMT).toFixed(2);
//document.getElementById('COSTOMANTET').textContent = COSTOMANTET;

//---------------------------COSTOS EXTRA
//let CSTEXT = (COSTOEXTRATOTALF).toFixed(2)
let COSTOEXTRAT=( parseFloat(COSTOEXTRATOTALF) + parseFloat(CMT)
).toFixed(2);
document.getElementById('COSTOEXTRAT').textContent = COSTOEXTRAT;
//--------------------------COSTO TOTAL X VEHICULO TRAILES X KM

//let COSTOTXVXTXK = COSTOFIJOT + COSTOMANTET + COSTOEXTRAT;
//document.getElementById('COSTOTXVXTXK').textContent = COSTOTXVXTXK;
let COSTOTXVXTXK = (
  parseFloat(COSTOFIJOT) +
  parseFloat(COSTOEXTRAT)
).toFixed(2);

document.getElementById('COSTOTXVXTXK').textContent = COSTOTXVXTXK;
//---------------- PRECIO DISTANCIA

let distancia = parseFloat(distanciaSeleccionada);
let costoxkm = parseFloat(COSTOTXVXTXK);

let KTQ = distancia.toFixed(2);
document.getElementById('KTQ').textContent = KTQ;

let CTQ = (distancia * costoxkm).toFixed(2);
document.getElementById('CTQ').textContent = CTQ;

//----------------- COSTO FLETE
document.getElementById('COSXKM').textContent = costoxkm.toFixed(2);

//------------- FILA 1
let P3F1  = (0.03 * costoxkm);
let P5F1  = (0.05 * costoxkm);
let P10F1 = (0.10 * costoxkm);
let P12F1 = (0.12 * costoxkm);
let P15F1 = (0.15 * costoxkm);
let P25F1 = (0.25 * costoxkm);

document.getElementById('P3F1').textContent  = P3F1.toFixed(2);
document.getElementById('P5F1').textContent  = P5F1.toFixed(2);
document.getElementById('P10F1').textContent = P10F1.toFixed(2);
document.getElementById('P12F1').textContent = P12F1.toFixed(2);
document.getElementById('P15F1').textContent = P15F1.toFixed(2);
document.getElementById('P25F1').textContent = P25F1.toFixed(2);

//------------- FILA 2
let P3F2  = P3F1 + costoxkm;
let P5F2  = P5F1 + costoxkm;
let P10F2 = P10F1 + costoxkm;
let P12F2 = P12F1 + costoxkm;
let P15F2 = P15F1 + costoxkm;
let P25F2 = P25F1 + costoxkm;

document.getElementById('P3F2').textContent  = P3F2.toFixed(2);
document.getElementById('P5F2').textContent  = P5F2.toFixed(2);
document.getElementById('P10F2').textContent = P10F2.toFixed(2);
document.getElementById('P12F2').textContent = P12F2.toFixed(2);
document.getElementById('P15F2').textContent = P15F2.toFixed(2);
document.getElementById('P25F2').textContent = P25F2.toFixed(2);

//------------- FILA 3
let P3F3  = P3F2 * distancia;
let P5F3  = P5F2 * distancia;
let P10F3 = P10F2 * distancia;
let P12F3 = P12F2 * distancia;
let P15F3 = P15F2 * distancia;
let P25F3 = P25F2 * distancia;

document.getElementById('P3F3').textContent  = P3F3.toFixed(2);
document.getElementById('P5F3').textContent  = P5F3.toFixed(2);
document.getElementById('P10F3').textContent = P10F3.toFixed(2);
document.getElementById('P12F3').textContent = P12F3.toFixed(2);
document.getElementById('P15F3').textContent = P15F3.toFixed(2);
document.getElementById('P25F3').textContent = P25F3.toFixed(2);

//------------- FILA 4
let CTQnum = parseFloat(CTQ); // porque CTQ fue convertido a string con .toFixed

let P3F4  = P3F3 - CTQnum;
let P5F4  = P5F3 - CTQnum;
let P10F4 = P10F3 - CTQnum;
let P12F4 = P12F3 - CTQnum;
let P15F4 = P15F3 - CTQnum;
let P25F4 = P25F3 - CTQnum;

document.getElementById('P3F4').textContent  = P3F4.toFixed(2);
document.getElementById('P5F4').textContent  = P5F4.toFixed(2);
document.getElementById('P10F4').textContent = P10F4.toFixed(2);
document.getElementById('P12F4').textContent = P12F4.toFixed(2);
document.getElementById('P15F4').textContent = P15F4.toFixed(2);
document.getElementById('P25F4').textContent = P25F4.toFixed(2);
return CTQ;
}

function calrenta(){
const COSFLE = parseFloat(document.getElementById('COSFLE').value);
//const CTQ =parseFloat(document.getElementById('CTQ').value);
//document.getElementById('COSFLE').textContent = COSFLE;
let ctq = calcular();
let CANITADREN =(COSFLE -  ctq ).toFixed(2);
document.getElementById('CANITADREN').textContent = CANITADREN;

let PORCEN =(((COSFLE/ctq)-1)*100).toFixed(2)+ "%";
document.getElementById('PORCEN').textContent = PORCEN;

}