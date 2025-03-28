import sillonesData from '../../data/sillones.json';
import compresoresData from '../../data/compresores.json';
import cavitadoresData from '../../data/cavitadores.json';
import contraangulosData from '../../data/contraangulos.json';
import turbinasData from '../../data/turbinas.json';
import duchabucalData from '../../data/duchabucal.json';
import estufasData from '../../data/estufas.json';
import autoclavesData from '../../data/autoclaves.json';
import impresorasfresadorasData from '../../data/impresorasfresadoras.json';
import insertosdeultrasonidoData from '../../data/insertosdeultrasonido.json';
import lamparasData from '../../data/lamparas.json';
import lavadorasData from '../../data/lavadoras.json';
import lubricacionData from '../../data/lubricacion.json';
import micromotorData from '../../data/micromotor.json';
import motoresdeimplanteycirugiaData from '../../data/motoresdeimplanteycirugia.json';
import piezademanoData from '../../data/piezademano.json';
import radiologiaData from '../../data/radiologia.json';
import sistemadeaspiracionData from '../../data/sistemadeaspiracion.json';
import mecanicadentalData from '../../data/mecanicadental.json';
import podologiaData from '../../data/podologia.json';

const categories = {
  sillones: sillonesData,
  compresores: compresoresData,
  cavitadores: cavitadoresData,
  contraangulos: contraangulosData,
  turbinas: turbinasData,
  duchabucal: duchabucalData,
  estufas: estufasData,
  autoclaves: autoclavesData,
  impresoras_fresadoras: impresorasfresadorasData,
  insertos_de_ultrasonido: insertosdeultrasonidoData,
  lamparas: lamparasData,
  lavadoras: lavadorasData,
  lubricacion: lubricacionData,
  micromotor: micromotorData,
  motores_de_implante_y_cirugia: motoresdeimplanteycirugiaData,
  piezademano: piezademanoData,
  radiologia: radiologiaData,
  sistema_de_aspiracion: sistemadeaspiracionData,
  mecanicadental: mecanicadentalData,
  podologia: podologiaData
};

export function getCategoryData(category) {
  return categories[category.toLowerCase()] || [];
}

export function getProductById(category, id) {
  const data = getCategoryData(category);
  return data.find((product) => product.id === parseInt(id)) || null;
}