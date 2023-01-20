const boton2 = document.getElementById("boton_2");
const botonBuscar = document.getElementById("boton_buscar");

const imagenPublicidad = document.getElementById("imagenPublicidad");
const cerrarPublicidad = document.getElementById("cerrarPublicidad");
const cerrarPublicidad2 = document.getElementById("cerrarPublicidad2");
const imagenPublicidad2 = document.getElementById("imagenPublicidad2");

boton2.addEventListener("click", lista);
botonBuscar.addEventListener("click", obtenerdatos);


cerrarPublicidad.addEventListener("click", eliminarPublicidad);
cerrarPublicidad2.addEventListener("click", elliminarPublicidad2);

function lista(){
    let list = document.getElementById('lista').value;
    document.registro.texto.value = list;
}


function obtenerdatos(){

    let informacion = document.getElementById('texto').value;

    
    let cuenta2 = "Acciones adquiridas";
    let cuenta2Minuscula = "acciones adquiridas";
    let cuenta3 = "Acciones no suscritas";
    let cuenta3Minuscula = "acciones no suscritas";
    let cuenta4 = "Acciones por suscribir";
    let cuenta4Minuscula = "acciones por suscribir";
    let cuenta5 = "Acciones suscritas";
    let cuenta5Minuscula = "acciones suscritas";
    let cuenta6 = "Acreedores";
    let cuenta6Minuscula = "acreedores";
    let cuenta7 = "Acreedores hipotecarios";
    let cuenta7Minuscula = "acreedores hipotecarios";
    let cuenta8 = "Acreedores a largo plazo";
    let cuenta8Minuscula = "acreedores a largo plazo";
    let cuenta9 = "Acreedores por prendas en garantía";
    let cuenta9Minuscula = "acreedores por prenda en garantía";
    let cuenta10 = "Aguinaldos";
    let cuenta10Minuscula = "aguinaldos";
    let cuenta11 = "Aguinaldos de administración";
    let cuenta11Minuscula = "aguinaldos de administración";
    let cuenta12 = "Aguinaldos sala de ventas";
    let cuenta12Minuscula = "aguinaldos sala de ventas";
    let cuenta13 = "Aguinaldos de fábrica";
    let cuenta13Minuscula = "aguinaldos de fábrica";
    let cuenta14 = "Almacén de envases";
    let cuenta14Minuscula = "almacén de envases";
    let cuenta15 = "Alquileres cobrados";
    let cuenta15Minuscula = "alquileres cobrados";
    let cuenta16 = "Alquileres ganados";
    let cuenta16Minuscula = "alquileres ganados";
    let cuenta17 = "Alquileres producto";
    let cuenta17Minuscula = "alquileres producto";
    let cuenta18 = "Alquileres devengados";
    let cuenta18Minuscula = "alquileres devengados";
    let cuenta19 = "Alquileres percibidos";
    let cuenta19Minuscula = "alquileres percibidos";
    let cuenta20 = "Alquileres cobrados por anticipado";
    let cuenta20Minuscula = "alquileres cobrados por anticipado";
    let cuenta21 = "Alquileres percibidos no devengados";
    let cuenta21Minuscula = "alquileres percibidos no devengados";
    let cuenta22 = "Alquileres";
    let cuenta22Minuscula = "alquileres";
    let cuenta23 = "Alquileres de oficinas";
    let cuenta23Minuscula = "alquileres de oficinas";
    let cuenta24 = "Alquileres sala de ventas";
    let cuenta24Minuscula = "alquileres sala de ventas";
    let cuenta25 = "Alquileres de fabrica";
    let cuenta25Minuscula = "alquileres de fabrica";
    let cuenta26 = "Alquileres pagados por anticipado";
    let cuenta26Minuscula = "alquileres pagados por anticipado";
    let cuenta27 = "Alquileres por pagar";
    let cuenta27Minuscula = "alquileres por pagar";
    let cuenta28 = "Amortización crédito mercantil";
    let cuenta28Minuscula = "amortización crédito mercantil";
    let cuenta29 = "Amortización derecho de llave";
    let cuenta29Minuscula = "amortización derecho de llave";
    let cuenta30 = "Amortización gastos de constitución";
    let cuenta30Minuscula = "amortización gastos de constitución";
    let cuenta31 = "Amortización gastos de instalación de fábrica";
    let cuenta31Minuscula = "amortización gastos de instalación de fábrica";
    let cuenta32 = "Amortización gastos de instalación sala de ventas";
    let cuenta32Minuscula = "amortización gastos de instalación sala de ventas";
    let cuenta33 = "Amortización gastos de instalación de administración";
    let cuenta33Minuscula = "amortización gastos de instalación de administración";
    let cuenta34 = "Amortización gastos de instalación de oficina";
    let cuenta34Minuscula = "amortización gastos de instalación de oficina";
    let cuenta35 = "Amortización gastos de organización";
    let cuenta35Minuscula = "amortización gastos de organización";
    let cuenta36 = "Amortización marcas y patentes de administración";
    let cuenta36Minuscula = "amortización marcas y patentes de administración";
    let cuenta37 = "Amortización marcas y patentes de fábrica";
    let cuenta37Minuscula = "amortización marcas y patentes de fábrica";
    let cuenta38 = "Amortización de pérdidas acumuladas";
    let cuenta38Minuscula = "amortización de pérdidas acumuladas";
    let cuenta39 = "Amortización de pérdida de ejercicios anteriores";
    let cuenta39Minuscula = "amortización de pérdida de ejercicios anteriores";
    let cuenta40 = "Amortización renombre comercial";
    let cuenta40Minuscula = "amortización renombre comercial";
    let cuenta41 = "Amortización de patentes";
    let cuenta41Minuscula = "amortización de patentes";
    let cuenta42 = "Amortizaciones acumuladas";
    let cuenta42Minuscula = "amortizaciones acumuladas";
    let cuenta43 = "Amortización";
    let cuenta43Minuscula = "amortización";
    let cuenta44 = "Anticipo de clientes";
    let cuenta44Minuscula = "anticipo de clientes";
    let cuenta45 = "Anticipo sobre ventas";
    let cuenta45Minuscula = "anticipo sobre ventas";
    let cuenta46 = "Anticipo a proveedores";
    let cuenta46Minuscula = "anticipo a proveedores";
    let cuenta47 = "Anticipo sobre compras";
    let cuenta47Minuscula = "anticipo sobre compras";
    let cuenta48 = "Anticipo sobre sueldos";
    let cuenta48Minuscula = "anticipo sobre sueldos";
    let cuenta49 = "Artículos en proceso inicial";
    let cuenta49Minuscula = "artículos en proceso inicial";
    let cuenta50 = "Artículos en proceso final";
    let cuenta50Minuscula = "artículos en proceso final";
    let cuenta51 = "Artículos terminados inicial";
    let cuenta51Minuscula = "artículos terminados inicial";
    let cuenta52 = "Artículos terminados final";
    let cuenta52Minuscula = "artículos terminados final";
    let cuenta53 = "Artículos enviados en consignación";
    let cuenta53Minuscula = "artículos enviados en consignación";
    let cuenta54 = "Artículos recibidos en consignación";
    let cuenta54Minuscula = "artículos recibidos en consignación";
   
    let cuenta55 = "Bancos";
    let cuenta55Minuscula = "bancos";
    let cuenta56 = "Bonificación de administración";
    let cuenta56Minuscula = "bonificación de administración";
    let cuenta57 = "Bonificación de fábrica";
    let cuenta57Minuscula = "bonificación de fábrica";
    let cuenta58 = "Bonificación sala de ventas";
    let cuenta58Minuscula = "bonificación sala de ventas";
    let cuenta59 = "Bonos comprados";
    let cuenta59Minuscula = "bonos comprados";
    let cuenta60 = "Bonos emitidos";
    let cuenta60Minuscula = "bonos emitidos";
    let cuenta61 = "Bono 14";
    let cuenta61Minuscula = "bono 14";
    let cuenta62 = "Bono 14 de fábrica";
    let cuenta62Minuscula = "bono 14 de fábrica";
    let cuenta63 = "Bono 14 sala de ventas";
    let cuenta63Minuscula = "bono 14 sala de ventas";
    let cuenta64 = "Bono 14 administración";
    let cuenta64Minuscula = "bono 14 administración";
    let cuenta65 = "Bono 14 por pagar";
    let cuenta65Minuscula = "bono 14 por pagar";

    
    let cuenta66 = "Caja";
    let cuenta66Minuscula = "caja";
    let cuenta67 = "Caja chica";
    let cuenta67Minuscula = "caja chica";
    let cuenta68 = "Caja y bancos";
    let cuenta68Minuscula = "caja y bancos";
    let cuenta69 = "Capital";
    let cuenta69Minuscula = "capital";
    let cuenta70 = "Capital social";
    let cuenta70Minuscula = "capital social";
    let cuenta71 = "Capital autorizado";
    let cuenta71Minuscula = "capital autorizado";
    let cuenta72 = "Clientes";
    let cuenta72Minuscula = "clientes";
    let cuenta73 = "Combustibles y lubricantes";
    let cuenta73Minuscula = "combustibles y lubricantes";
    let cuenta74 = "Combustibles y lubricantes consumidos fábrica";
    let cuenta74Minuscula = "combustibles y lubricantes consumidos fábrica";
    let cuenta75 = "Combustibles y lubricantes consumidos sala de ventas";
    let cuenta75Minuscula = "combustibles y lubricantes consumidos sala de ventas";
    let cuenta76 = "Combustibles y lubricantes consumidos administración";
    let cuenta76Minuscula = "combustibles y lubricantes consumidos administración";
    let cuenta77 = "Comisiones cobradas por anticipado";
    let cuenta77Minuscula = "comisiones cobradas por anticipado";
    let cuenta78 = "Comisiones percibidas no devengadas";
    let cuenta78Minuscula = "comisiones percibidas no devengadas";
    let cuenta79 = "Comisiones pagadas por anticipado";
    let cuenta79Minuscula = "comisiones pagadas por anticipado";
    let cuenta80 = "Comisiones gasto";
    let cuenta80Minuscula = "comisiones gasto";
    let cuenta81 = "Comisiones";
    let cuenta81Minuscula = "comisiones";
    let cuenta82 = "Comisiones percibidas";
    let cuenta82Minuscula = "comisiones percibidas";
    let cuenta83 = "Comisiones por cobrar";
    let cuenta83Minuscula = "comisiones por cobrar";
    let cuenta84 = "Comisiones ganadas";
    let cuenta84Minuscula = "comisiones ganadas";
    let cuenta85 = "Comisiones producto";
    let cuenta85Minuscula = "comisiones producto";
    let cuenta86 = "Comisiones devengadas";
    let cuenta86Minuscula = "comisiones devengadas";
    let cuenta87 = "Comisiones por pagar";
    let cuenta87Minuscula = "comisiones por pagar";
    let cuenta88 = "Comisiones sobre ventas";
    let cuenta88Minuscula = "comisiones sobre ventas";
    let cuenta89 = "Comitentes por mercaderías";
    let cuenta89Minuscula = "comitentes por mercaderías";
    let cuenta90 = "Crédito fiscal";
    let cuenta90Minuscula = "crédito fiscal";
    let cuenta91 = "Compras";
    let cuenta91Minuscula = "compras";
    let cuenta92 = "Compras de materia prima";
    let cuenta92Minuscula = "compras de materia prima";
    let cuenta93 = "Compras de mercaderías";
    let cuenta93Minuscula = "compras de mercaderías";
    let cuenta94 = "Construcciones";
    let cuenta94Minuscula = "construcciones";
    let cuenta95 = "Corresponsales deudor";
    let cuenta95Minuscula = "corresponsales deudor";
    let cuenta96 = "Corresponsales acreedor";
    let cuenta96Minuscula = "corresponsales acreedor";
    let cuenta97 = "Correo, teléfono y telégrafos";
    let cuenta97Minuscula = "correo, teléfono y telégrafos";
    let cuenta98 = "Crédito mercantil";
    let cuenta98Minuscula = "crédito mercantil";
    let cuenta99 = "Créditos recuperados";
    let cuenta99Minuscula = "créditos recuperados";
    let cuenta100 = "Cristaleria";
    let cuenta100Minuscula = "cristaleria";
    let cuenta101 = "Cuentas por cobrar comerciales";
    let cuenta101Minuscula = "cuentas por cobrar comerciales";
    let cuenta102 = "Cuentas por cobrar no comerciales";
    let cuenta102Minuscula = "cuentas por cobrar no comerciales";
    let cuenta103 = "Cuentas de difícil cobro";
    let cuenta103Minuscula = "cuentas de difícil cobro";
    let cuenta104 = "Cuentas dudosas";
    let cuenta104Minuscula = "cuentas dudosas";
    let cuenta105 = "Cuentas incobrables";
    let cuenta105Minuscula = "cuentas incobrables";
    let cuenta106 = "Cuentas malas";
    let cuenta106Minuscula = "cuentas malas";
    let cuenta107 = "Cuentas por pagar";
    let cuenta107Minuscula = "cuentas por pagar";
    let cuenta108 = "Cuentas por pagar comerciales";
    let cuenta108Minuscula = "cuentas por pagar comerciales";
    let cuenta108_1 = "Cuentas por pagar no comerciales";
    let cuenta108_1Minuscula = "cuentas por pagar no comerciales";
    let cuenta109 = "Cuotas laborales";
    let cuenta109Minuscula = "cuotas laborales";
    let cuenta110 = "Cuotas laborales por pagar";
    let cuenta110Minuscula = "cuotas laborales por pagar";
    let cuenta111 = "Cuotas patronales fábrica";
    let cuenta111Minuscula = "cuotas patronales fábrica";
    let cuenta112 = "Cuotas patronales administración";
    let cuenta112Minuscula = "cuotas patronales administración";
    let cuenta113 = "Cuotas patronales sala de ventas";
    let cuenta113Minuscula = "cuotas patronales sala de ventas";
    let cuenta114 = "Cuotas patronales por pagar";
    let cuenta114Minuscula = "cuotas patronales por pagar";
    let cuenta115 = "Cuenta promesa";
    let cuenta115Minuscula = "cuenta promesa";

    let cuenta116 = "Débito fiscal";
    let cuenta116Minuscula = "débito fiscal";
    let cuenta117 = "Depósitos en garantía";
    let cuenta117Minuscula = "depósitos en garantía";
    let cuenta118 = "Depreciación construcción de fábrica";
    let cuenta118Minuscula = "depreciación construcción de fábrica";
    let cuenta119 = "Depreciación construcción de oficina";
    let cuenta119Minuscula = "depreciación construcción de oficina";
    let cuenta120 = "Depreciación construcción sala de ventas";
    let cuenta120Minuscula = "depreciación construcción sala de ventas";
    let cuenta121 = "Depreciación edificios fábrica";
    let cuenta121Minuscula = "depreciación edificios fábrica";
    let cuenta122 = "Depreciación edificios oficinas";
    let cuenta122Minuscula = "depreciación edificios oficinas";
    let cuenta123 = "Depreciación edificios sala de ventas";
    let cuenta123Minuscula = "depreciación edificios sala de ventas";
    let cuenta124 = "Depreciación inmuebles oficina";
    let cuenta124Minuscula = "depreciación inmuebles oficina";
    let cuenta125 = "Depreciación inmuebles fábrica";
    let cuenta125Minuscula = "depreciación inmuebles fábrica";
    let cuenta126 = "Depreciación inmuebles sala de ventas";
    let cuenta126Minuscula = "depreciación inmuebles sala de ventas";
    let cuenta127 = "Depreciación herramientas";
    let cuenta127Minuscula = "depreciación herramientas";
    let cuenta128 = "Depreciación maquinaria";
    let cuenta128Minuscula = "depreciación maquinaria";
    let cuenta129 = "Depreciación mobiliario y equipo fábrica";
    let cuenta129Minuscula = "depreciación mobiliario y equipo fábrica";
    let cuenta130 = "Depreciación mobiliario y equipo oficina";
    let cuenta130Minuscula = "depreciación mobiliario y equipo oficina";
    let cuenta131 = "Depreciación mobiliario y equipo sala de ventas";
    let cuenta131Minuscula = "depreciación mobiliario y equipo sala de ventas";
    let cuenta132 = "Depreciación mobiliario y equipo";
    let cuenta132Minuscula = "depreciación mobiliario y equipo";
    let cuenta133 = "Depreciación de cristalería";
    let cuenta133Minuscula = "depreciación de cristalería";
    let cuenta134 = "Depreciación vehículos de reparto";
    let cuenta134Minuscula = "depreciación vehículos de reparto";
    let cuenta135 = "Depreciación vehículos de fábrica";
    let cuenta135Minuscula = "depreciación vehículos de fábrica";
    let cuenta136 = "Depreciación vehículos oficina";
    let cuenta136Minuscula = "depreciación vehículos oficina";
    let cuenta137 = "Depreciación vehículos sala de ventas";
    let cuenta137Minuscula = "depreciación vehículos sala de ventas";
    let cuenta138 = "Depreciación vehículos";
    let cuenta138Minuscula = "depreciación vehículos";
    let cuenta139 = "Depreciación acumulada de todo activo";
    let cuenta139Minuscula = "depreciación acumulada de todo activo";
    let cuenta140 = "Derecho de llave";
    let cuenta140Minuscula = "derecho de llave";
    let cuenta141 = "Descuentos concedidos";
    let cuenta141Minuscula = "descuentos concedidos";
    let cuenta142 = "Descuentos sobre acciones";
    let cuenta142Minuscula = "descuentos sobre acciones";
    let cuenta143 = "Descuentos sobre ventas";
    let cuenta143Minuscula = "descuentos sobre ventas";
    let cuenta144 = "Descuentos sobre compras";
    let cuenta144Minuscula = "descuentos sobre compras";
    let cuenta145 = "Descuentos percibidos";
    let cuenta145Minuscula = "descuentos percibidos";
    let cuenta146 = "Deudores";
    let cuenta146Minuscula = "deudores";
    let cuenta147 = "Deudores diversos";
    let cuenta147Minuscula = "deudores diversos";
    let cuenta148 = "Deudores varios";
    let cuenta148Minuscula = "deudores varios";
    let cuenta149 = "Devoluciones y rebajas sobre ventas";
    let cuenta149Minuscula = "devoluciones y rebajas sobre ventas";
    let cuenta150 = "Devoluciones y rebajas sobre compras";
    let cuenta150Minuscula = "devoluciones y rebajas sobre compras";
    let cuenta151 = "Devoluciones y rebajas sobre compras de materia prima";
    let cuenta151Minuscula = "devoluciones y rebajas sobre compras de materia prima";
    let cuenta152 = "Dividendos percibidos";
    let cuenta152Minuscula = "dividendos percibidos";
    let cuenta153 = "Dividendos no retirados o no pagados";
    let cuenta153Minuscula = "dividendos no retirados o no pagados";
    let cuenta154 = "Dividendos no retirados";
    let cuenta154Minuscula = "dividendos no retirados";
    let cuenta155 = "Dividendos no pagados";
    let cuenta155Minuscula = "dividendos no pagados";
    let cuenta156 = "Dividendos por pagar";
    let cuenta156Minuscula = "dividendos por pagar";
    let cuenta157 = "Dividendos ganados";
    let cuenta157Minuscula = "dividendos ganados";
    let cuenta158 = "";
    let cuenta158Minuscula = "";
    let cuenta159 = "Dividendos por cobrar";
    let cuenta159Minuscula = "dividendos por cobrar";
    let cuenta160 = "Divisas adquiridas";
    let cuenta160Minuscula = "divisas adquiridas";
    let cuenta161 = "Documentos por cobrar";
    let cuenta161Minuscula = "documentos por cobrar";
    let cuenta162 = "Documentos por pagar";
    let cuenta162Minuscula = "documentos por pagar";
    let cuenta163 = "Documentos endosados";
    let cuenta163Minuscula = "documentos endosados";
    let cuenta164 = "Documentos descontados";
    let cuenta164Minuscula = "documentos descontados";
    let cuenta165 = "Documentos por cobrar descontados";
    let cuenta165Minuscula = "documentos por cobrar descontados";
    let cuenta166 = "Documentos por pagar a largo plazo";
    let cuenta166Minuscula = "documentos por pagar a largo plazo";
    let cuenta167 = "Donativos";
    let cuenta167Minuscula = "donativos";
    let cuenta168 = "Donativos pagados";
    let cuenta168Minuscula = "donativos pagados";
    let cuenta169 = "Donativos por pagar";
    let cuenta169Minuscula = "donativos por pagar";
    let cuenta170 = "Donativos percibidos";
    let cuenta170Minuscula = "donativos percibidos";

    let cuenta171 = "Edificios";
    let cuenta171Minuscula = "edificios";
    let cuenta172 = "Efectos descontados";
    let cuenta172Minuscula = "efectos descontados";
    let cuenta173 = "Efectos endosados";
    let cuenta173Minuscula = "efectos endosados";
    let cuenta174 = "Efectos por cobrar";
    let cuenta174Minuscula = "efectos por cobrar";
    let cuenta175 = "Efectos por pagar";
    let cuenta175Minuscula = "efectos por pagar";
    let cuenta176 = "Efectos por pagar a largo plazo";
    let cuenta176Minuscula = "efectos por pagar a largo plazo";
    let cuenta177 = "Energía eléctrica de fábrica";
    let cuenta177Minuscula = "energía eléctrica de fábrica";
    let cuenta178 = "Energía eléctrica de oficina";
    let cuenta178Minuscula = "energía eléctrica de oficina";
    let cuenta179 = "Energía eléctrica sala de ventas";
    let cuenta179Minuscula = "energía eléctrica sala de ventas";
    let cuenta180 = "Energía eléctrica";
    let cuenta180Minuscula = "energía eléctrica";
    let cuenta180_1 = "Envases en departamento de producción";
    let cuenta180_1Minuscula = "envases en departamento de producción";
    let cuenta181 = "Equipo de computación";
    let cuenta181Minuscula = "equipo de computación";
    let cuenta182 = "Equipo de reparto";
    let cuenta182Minuscula = "equipo de reparto";
    let cuenta183 = "Especies fiscales";
    let cuenta183Minuscula = "especies fiscales";
    let cuenta184 = "Estimación para cuentas incobrables";
    let cuenta184Minuscula = "estimación para cuentas incobrables";
    let cuenta185 = "Estimación para cuentas malas";
    let cuenta185Minuscula = "estimación para cuentas malas";
    let cuenta186 = "Estimación para cuentas dudosas";
    let cuenta186Minuscula = "estimación para cuentas dudosas";
    let cuenta187 = "Estimación para cuentas de difícil cobro";
    let cuenta187Minuscula = "estimación para cuentas de difícil cobro";

    let cuenta188 = "Faltante de caja";
    let cuenta188Minuscula = "faltante de caja";
    let cuenta189 = "Fletes sobre compras";
    let cuenta189Minuscula = "fletes sobre compras";
    let cuenta190 = "Fletes sobre compras de materia prima";
    let cuenta190Minuscula = "fletes sobre compras de materia prima";
    let cuenta191 = "Fletes";
    let cuenta191Minuscula = "fletes";
    let cuenta192 = "Fórmulas patentadas";
    let cuenta192Minuscula = "fórmulas patentadas";

    let cuenta193 = "Ganancia antes del impuesto";
    let cuenta193Minuscula = "ganancia antes del impuesto";
    let cuenta194 = "Ganancia antes de impuestos y reservas";
    let cuenta194Minuscula = "ganancia antes de impuestos y reservas";
    let cuenta195 = "Ganancia antes de reservas";
    let cuenta195Minuscula = "ganancia antes de reservas";
    let cuenta196 = "Ganancia después del impuesto";
    let cuenta196Minuscula = "ganancia después del impuesto";
    let cuenta197 = "Ganancia después del impuesto y reservas";
    let cuenta197Minuscula = "ganancia después del impuesto y reservas";
    let cuenta198 = "Ganancia después de reservas";
    let cuenta198Minuscula = "ganancia después de reservas";
    let cuenta199 = "Ganancia en negociación de activos";
    let cuenta199Minuscula = "ganancia en negociación de activos";
    let cuenta200 = "Ganancia en venta de activos";
    let cuenta200Minuscula = "ganancia en venta de activos";
    let cuenta201 = "Gastos de organización";
    let cuenta201Minuscula = "gastos de organización";
    let cuenta202 = "Gastos de instalación";
    let cuenta202Minuscula = "gastos de instalación";
    let cuenta203 = "Gastos de instalación fábrica";
    let cuenta203Minuscula = "gastos de instalación fábrica";
    let cuenta204 = "Gastos diversos de fábrica";
    let cuenta204Minuscula = "gastos diversos de fábrica";
    let cuenta205 = "Gastos diversos de administración";
    let cuenta205Minuscula = "gastos diversos de administración";
    let cuenta206 = "Gastos diversos sala de ventas";
    let cuenta206Minuscula = "gastos diversos sala de ventas";
    let cuenta207 = "Gastos misceláneos de fábrica";
    let cuenta207Minuscula = "gastos misceláneos de fábrica";
    let cuenta208 = "Gastos misceláneos de oficina";
    let cuenta208Minuscula = "gastos misceláneos de oficina";
    let cuenta209 = "Gastos misceláneos sala de ventas";
    let cuenta209Minuscula = "gastos misceláneos sala de ventas";
    let cuenta210 = "Gastos publicitarios";
    let cuenta210Minuscula = "gastos publicitarios";
    let cuenta212 = "Gastos sobre compras";
    let cuenta212Minuscula = "gastos sobre compras";
    let cuenta213 = "Gastos sobre compras de materia prima";
    let cuenta213Minuscula = "gastos sobre compras de materia prima";
    let cuenta214 = "Grasas y aceites";
    let cuenta214Minuscula = "grasas y aceites";
    let cuenta215 = "Grasas y aceites consumidos fábrica";
    let cuenta215Minuscula = "grasas y aceites consumidos fábrica";
    let cuenta216 = "Grasas y aceites consumidos sala de ventas";
    let cuenta216Minuscula = "grasas y aceites consumidos sala de ventas";

    let cuenta217 = "Herramientas";
    let cuenta217Minuscula = "herramientas";
    let cuenta218 = "Hipotecas";
    let cuenta218Minuscula = "hipotecas";

    let cuenta219 = "IGSS por pagar";
    let cuenta219Minuscula = "igss por pagar";
    let cuenta220 = "IGSS laboral";
    let cuenta220Minuscula = "igss laboral";
    let cuenta222 = "IGSS";
    let cuenta222Minuscula = "igss";
    let cuenta223 = "Impuestos aduanales sobre compras";
    let cuenta223Minuscula = "impuestos aduanales sobre compras";
    let cuenta224 = "Impuestos aduanales sobre compras de materia prima";
    let cuenta224Minuscula = "impuestos aduanales sobre compras de materia prima";
    let cuenta225 = "Impuestos y contribuciones fábrica";
    let cuenta225Minuscula = "impuestos y contribuciones fábrica";
    let cuenta226 = "Impuestos y contribuciones administración";
    let cuenta226Minuscula = "impuestos y contribuciones administración";
    let cuenta227 = "Impuestos y contribuciones sala de ventas";
    let cuenta227Minuscula = "impuestos y contribuciones sala de ventas";
    let cuenta228 = "Impuestos sobre inmuebles fábrica";
    let cuenta228Minuscula = "impuestos sobre inmuebles fábrica";
    let cuenta229 = "Impuestos sobre inmuebles sala de ventas";
    let cuenta229Minuscula = "impuestos sobre inmuebles sala de ventas";
    let cuenta230 = "Impuestos sobre inmuebles oficina";
    let cuenta230Minuscula = "impuestos sobre inmuebles oficina";
    let cuenta231 = "Impuestos y contribuciones por pagar";
    let cuenta231Minuscula = "impuestos y contribuciones por pagar";
    let cuenta232 = "Impuesto sobre inmuebles por pagar";
    let cuenta232Minuscula = "impuesto sobre inmuebles por pagar";
    let cuenta233 = "Impuesto sobre la renta por pagar";
    let cuenta233Minuscula = "impuesto sobre la renta por pagar";
    let cuenta234 = "Impuesto sobre la renta pagado por anticipado";
    let cuenta234Minuscula = "impuesto sobre la renta pagado por anticipado";
    let cuenta235 = "Impuesto a las empresas mercantiles pagado por anticipado";
    let cuenta235Minuscula = "impuesto a las empresas mercantiles pagado por anticipado";
    let cuenta236 = "Impuesto sobre la renta retenido";
    let cuenta236Minuscula = "impuesto sobre la renta retenido";
    let cuenta237 = "Indemnizaciones fábrica";
    let cuenta237Minuscula = "indemnizaciones fábrica";
    let cuenta238 = "Indemnizaciones administración";
    let cuenta238Minuscula = "indemnizaciones administración";
    let cuenta239 = "Indemnizaciones sala de ventas";
    let cuenta239Minuscula = "indemnizaciones sala de ventas";
    let cuenta240 = "Inmuebles";
    let cuenta240Minuscula = "inmuebles";
    let cuenta241 = "Intereses gasto";
    let cuenta241Minuscula = "intereses gasto";
    let cuenta242 = "Intereses por cobrar";
    let cuenta242Minuscula = "intereses por cobrar";
    let cuenta243 = "Intereses percibidos no devengados";
    let cuenta243Minuscula = "intereses percibidos no devengados";
    let cuenta244 = "Intereses cobrados por anticipado";
    let cuenta244Minuscula = "intereses cobrados por anticipado";
    let cuenta245 = "Intereses pagados por anticipado";
    let cuenta245Minuscula = "intereses pagados por anticipado";
    let cuenta246 = "Intereses devengados";
    let cuenta246Minuscula = "intereses devengados";
    let cuenta247 = "Intereses ganados";
    let cuenta247Minuscula = "intereses ganados";
    let cuenta248 = "Intereses producto";
    let cuenta248Minuscula = "intereses producto";
    let cuenta249 = "Intereses por pagar";
    let cuenta249Minuscula = "intereses por pagar";
    let cuenta250 = "Inventario inicial de mercaderías";
    let cuenta250Minuscula = "inventario inicial de mercaderías";
    let cuenta251 = "Inventario inicial de artículos en proceso";
    let cuenta251Minuscula = "inventario inicial de artículos en proceso";
    let cuenta252 = "Inventario inicial de artículos terminados";
    let cuenta252Minuscula = "inventario inicial de artículos terminados";
    let cuenta253 = "Inventario inicial de materia prima";
    let cuenta253Minuscula = "inventario inicial de materia prima";
    let cuenta254 = "Inventario final de mercaderías";
    let cuenta254Minuscula = "inventario final de mercaderías";
    let cuenta255 = "Inventario final de artículos en proceso";
    let cuenta255Minuscula = "inventario final de artículos en proceso";
    let cuenta256 = "Inventario final de artículos terminados";
    let cuenta256Minuscula = "inventario final de artículos terminados";
    let cuenta257 = "Inventario final de matería prima";
    let cuenta257Minuscula = "inventario final de matería prima";
    let cuenta258 = "Inversiones";
    let cuenta258Minuscula = "inversiones";
    let cuenta259 = "Inversiones en valores";
    let cuenta259Minuscula = "inversiones en valores";
    let cuenta260 = "IVA acreditable";
    let cuenta260Minuscula = "iva acreditable";
    let cuenta261 = "IVA por acreditar";
    let cuenta261Minuscula = "iva por acreditar";
    let cuenta262 = "IVA por cobrar";
    let cuenta262Minuscula = "iva por cobrar";
    let cuenta263 = "IVA deudor";
    let cuenta263Minuscula = "iva deudor";
    let cuenta264 = "IVA debitable";
    let cuenta264Minuscula = "iva debitable";
    let cuenta265 = "IVA por debitar";
    let cuenta265Minuscula = "iva por debitar";
    let cuenta266 = "IVA por pagar";
    let cuenta266Minuscula = "iva por pagar";
    let cuenta267 = "IVA acreedor";
    let cuenta267Minuscula = "iva acreedor";
    
    let cuenta268 = "Mano de obra directa";
    let cuenta268Minuscula = "mano de obra directa";
    let cuenta269 = "Mano de obra indirecta";
    let cuenta269Minuscula = "mano de obra indirecta";
    let cuenta270 = "Maquinaria";
    let cuenta270Minuscula = "maquinaria";
    let cuenta271 = "Marcas y patentes";
    let cuenta271Minuscula = "marcas y patentes";
    let cuenta272 = "Materia prima inicial";
    let cuenta272Minuscula = "materia prima inicial";
    let cuenta273 = "Materia prima final";
    let cuenta273Minuscula = "materia prima final";
    let cuenta274 = "Materia prima estropeada";
    let cuenta274Minuscula = "materia prima estropeada";
    let cuenta275 = "Materia prima inservible";
    let cuenta275Minuscula = "materia prima inservible";
    let cuenta276 = "Materia prima destruida";
    let cuenta276Minuscula = "materia prima destruida";
    let cuenta277 = "Materia prima en aduana";
    let cuenta277Minuscula = "materia prima en aduana";
    let cuenta278 = "Materia prima en tránsito";
    let cuenta278Minuscula = "materia prima en tránsito";
    let cuenta279 = "Material de empaque";
    let cuenta279Minuscula = "material de empaque";
    let cuenta280 = "Material de empaque consumido";
    let cuenta280Minuscula = "material de empaque consumido";
    let cuenta281 = "Material de empaque consumido fábrica";
    let cuenta281Minuscula = "material de empaque consumido fábrica";
    let cuenta282 = "Mercaderías enviadas en consignación";
    let cuenta282Minuscula = "mercaderías enviadas en consignación";
    let cuenta283 = "Mercaderías inicial";
    let cuenta283Minuscula = "mercaderías inicial";
    let cuenta284 = "Mercaderías final";
    let cuenta284Minuscula = "mercaderías final";
    let cuenta285 = "Mercaderías en tránsito o en camino";
    let cuenta285Minuscula = "mercaderías en tránsito o en camino";
    let cuenta286 = "Mercaderías recibidas en consignación";
    let cuenta286Minuscula = "mercaderías recibidas en consignación";
    let cuenta287 = "Mercaderías en aduana";
    let cuenta287Minuscula = "mercaderías en aduana";
    let cuenta288 = "Mercadeías";
    let cuenta288Minuscula = "mercadeías";
    let cuenta289 = "Mobiliario y equipo";
    let cuenta289Minuscula = "mobiliario y equipo";
    let cuenta290 = "Multas y recargos";
    let cuenta290Minuscula = "multas y recargos";
    let cuenta291 = "Mercaderías ajenas";
    let cuenta291Minuscula = "mercaderías ajenas";

    let cuenta291_1 = "Papelería y utiles";
    let cuenta291_1Minuscula = "papelería y utiles";
    let cuenta292 = "Papelería y utiles consumidos";
    let cuenta292Minuscula = "papelería y utiles consumidos";
    let cuenta293 = "Patentes";
    let cuenta293Minuscula = "patentes";
    let cuenta294 = "Pérdidas acumuladas";
    let cuenta294Minuscula = "Pérdidas acumuladas";
    let cuenta295 = "Pérdida de ejercicios anteriores";
    let cuenta295Minuscula = "pérdida de ejercicios anteriores";
    let cuenta296 = "Pérdida del ejercicio";
    let cuenta296Minuscula = "pérdida del ejercicio";
    let cuenta297 = "Pérdida en negociación de activos";
    let cuenta297Minuscula = "pérdida en negociación de activos";
    let cuenta298 = "Pérdida en venta de activos";
    let cuenta298Minuscula = "pérdida en venta de activos";
    let cuenta299 = "Premios de lotería";
    let cuenta299Minuscula = "premios de lotería";
    let cuenta300 = "Prendas en garantía";
    let cuenta300Minuscula = "prendas en garantía";
    let cuenta301 = "Prestaciones laborales fábrica";
    let cuenta301Minuscula = "prestaciones laborales fábrica";
    let cuenta302 = "Prestaciones laborales de administración";
    let cuenta302Minuscula = "prestaciones laborales de administración";
    let cuenta303 = "Prestaciones laborales sala de ventas";
    let cuenta303Minuscula = "prestaciones laborales sala de ventas";
    let cuenta304 = "Préstamos bancarios";
    let cuenta304Minuscula = "préstamos bancarios";
    let cuenta305 = "Primas de seguro";
    let cuenta305Minuscula = "primas de seguro";
    let cuenta306 = "Primas de seguro vencidas";
    let cuenta306Minuscula = "primas de seguro vencidas";
    let cuenta307 = "Primas de seguro vencidas fábrica";
    let cuenta307Minuscula = "primas de seguro vencidas fábrica";
    let cuenta308 = "Primas de seguro vencidas administración";
    let cuenta308Minuscula = "primas de seguro vencidas administración";
    let cuenta309 = "Primas de seguro vencidas sala de ventas";
    let cuenta309Minuscula = "primas de seguro vencidas sala de ventas";
    let cuenta310 = "Primas de seguro no vencidas";
    let cuenta310Minuscula = "primas de seguro no vencidas";
    let cuenta311 = "Primas sobre acciones";
    let cuenta311Minuscula = "primas sobre acciones";
    let cuenta312 = "Productos percibidos no devengados";
    let cuenta312Minuscula = "productos percibidos no devengados";
    let cuenta313 = "Productos por cobrar";
    let cuenta313Minuscula = "productos por cobrar";
    let cuenta314 = "Propaganda";
    let cuenta314Minuscula = "propaganda";
    let cuenta315 = "Proveedores";
    let cuenta315Minuscula = "proveedores";
    let cuenta316 = "Proveeduría";
    let cuenta316Minuscula = "Proveeduría";
    let cuenta317 = "Provisión para cuentas incobrables";
    let cuenta317Minuscula = "provisión para cuentas incobrables";
    let cuenta318 = "Publicidad";
    let cuenta318Minuscula = "publicidad";
    let cuenta319 = "Propaganda pagada por anticipado";
    let cuenta319Minuscula = "propaganda pagada por anticipado";
    let cuenta320 = "Publicidad pagada por anticipado";
    let cuenta320Minuscula = "publicidad pagada por anticipado";

    let cuenta321 = "Recuperación de créditos";
    let cuenta321Minuscula = "recuperación de créditos";
    let cuenta322 = "Regalías";
    let cuenta322Minuscula = "regalías";
    let cuenta323 = "Regalías percibidas";
    let cuenta323Minuscula = "regalías percibidas";
    let cuenta324 = "Renombre comercial";
    let cuenta324Minuscula = "renombre comercial";
    let cuenta325 = "Reparación y mantenimiento de maquinaria";
    let cuenta325Minuscula = "reparación y mantenimiento de maquinaria";
    let cuenta326 = "Reparación y mantenimiento de vehículos";
    let cuenta326Minuscula = "reparación y mantenimiento de vehículos";
    let cuenta327 = "Repuestos y accesorios";
    let cuenta327Minuscula = "repuestos y accesorios";
    let cuenta328 = "Repuestos y accesorios consumidos";
    let cuenta328Minuscula = "repuestos y accesorios consumidos";
    let cuenta329 = "Reserva legal";
    let cuenta329Minuscula = "reserva legal";
    let cuenta330 = "Reserva para cuentas incobrables";
    let cuenta330Minuscula = "reserva para cuentas incobrables";
    let cuenta331 = "Reserva para cuentas malas";
    let cuenta331Minuscula = "reserva para cuentas malas";
    let cuenta332 = "Reserva para cuentas morosas";
    let cuenta332Minuscula = "reserva para cuentas morosas";
    let cuenta333 = "Reserva para cuentas de difícil cobro";
    let cuenta333Minuscula = "reserva para cuentas de difícil cobro";
    let cuenta334 = "Reserva para indemnizaciones";
    let cuenta334Minuscula = "reserva para indemnizaciones";
    let cuenta335 = "Retenciones laborales";
    let cuenta335Minuscula = "retenciones laborales";
    let cuenta336 = "Retención del impuesto sobre la renta";
    let cuenta336Minuscula = "retención del impuesto sobre la renta";
    let cuenta337 = "Retención ISR";
    let cuenta337Minuscula = "retención isr";

    let cuenta338 = "Seguros";
    let cuenta338Minuscula = "seguros";
    let cuenta339 = "Seguros anticipados";
    let cuenta339Minuscula = "seguros anticipados";
    let cuenta340 = "Seguros pagados por anticipado";
    let cuenta340Minuscula = "seguros pagados por anticipado";
    let cuenta341 = "Seguros no vencidos";
    let cuenta341Minuscula = "seguros no vencidos";
    let cuenta342 = "Seguros vencidos";
    let cuenta342Minuscula = "seguros vencidos";
    let cuenta343 = "Seguros vencidos de fábrica";
    let cuenta343Minuscula = "seguros vencidos de fábrica";
    let cuenta344 = "Seguros vencidos de administración";
    let cuenta344Minuscula = "seguros vencidos de administración";
    let cuenta345 = "Seguros vencidos sala de ventas";
    let cuenta345Minuscula = "seguros vencidos sala de ventas";
    let cuenta346 = "Señor x cuenta personal";
    let cuenta346Minuscula = "señor x cuenta personal";
    let cuenta347 = "Señor x cuenta particular";
    let cuenta347Minuscula = "señor x cuenta particular";
    let cuenta348 = "Socio x cuenta personal deudor";
    let cuenta348Minuscula = "socio x cuenta peronal deudor";
    let cuenta348_1 = "Socio x cuenta personal acreedor";
    let cuenta348_1Minuscula = "socio x cuenta personal acreedor";
    let cuenta349 = "Socio x cuenta particular deudor";
    let cuenta349Minuscula = "socio x cuenta particular deudor";
    let cuenta349_1 = "Socio x cuenta particular acreedor";
    let cuenta349_1Minuscula = "socio x cuenta particular acreedor";
    let cuenta350 = "Socio x cuenta promesa";
    let cuenta350Minuscula = "socio x cuenta promesa";
    let cuenta351 = "Sobrantes de caja";
    let cuenta351Minuscula = "sobrantes de caja";
    let cuenta352 = "Sueldos de administración";
    let cuenta352Minuscula = "sueldos de administración";
    let cuenta353 = "Sueldos sala de ventas";
    let cuenta353Minuscula = "sueldos sala de ventas";
    let cuenta354 = "Sueldos de vendedores";
    let cuenta354Minuscula = "sueldos de vendedores";
    let cuenta355 = "Sueldos pagados por anticipado";
    let cuenta355Minuscula = "sueldos pagados por anticipado";
    let cuenta356 = "Sueldos por pagar";
    let cuenta356Minuscula = "sueldos por pagar";
    let cuenta357 = "Suministros";
    let cuenta357Minuscula = "suministros";
    let cuenta358 = "Suministros consumidos fábrica";
    let cuenta358Minuscula = "suministros consumidos fábrica";
    let cuenta359 = "Suministros consumidos de oficina";
    let cuenta359Minuscula = "suministros consumidos de oficina";
    let cuenta360 = "Suministros consumidos sala de ventas";
    let cuenta360Minuscula = "suministros consumidos sala de ventas";
    let cuenta361 = "Superávit acumulado";
    let cuenta361Minuscula = "superávit acumulado";
    let cuenta362 = "Suscriptores de acciones";
    let cuenta362Minuscula = "suscriptores de acciones";

    let cuenta363 = "Terrenos";
    let cuenta363Minuscula = "terrenos";

    let cuenta364 = "Utiles y enseres";
    let cuenta364Minuscula = "utiles y enseres";
    let cuenta365 = "Utiles y enseres consumidos";
    let cuenta365Minuscula = "utiles y enseres consumidos";
    let cuenta366 = "Utilidad del ejercicio";
    let cuenta366Minuscula = "utilidad del ejercicio";
    let cuenta367 = "Utilidades no distribuidas";
    let cuenta367Minuscula = "utilidades no distribuidas";
    let cuenta368 = "Utilidad por distribuir";
    let cuenta368Minuscula = "utilidad por distribuir";

    let cuenta369 = "Valores mobiliarios";
    let cuenta369Minuscula = "valores mobiliarios";
    let cuenta370 = "Vehículos";
    let cuenta370Minuscula = "vehículos";
    let cuenta371 = "Vehículos de reparto";
    let cuenta371Minuscula = "vehículos de reparto";
    let cuenta372 = "Ventas";
    let cuenta372Minuscula = "ventas";
    let cuenta373 = "Ventas por realizar";
    let cuenta373Minuscula = "ventas por realizar";
    let cuenta374 = "Viáticos";
    let cuenta374Minuscula = "viáticos";
    

    let resultado1 = "ACTIVO";
    let resultado2 = "PASIVO";
    let resultado3 = "GANANCIA";
    let resultado4 = "PERDIDA";
    let resultado5 = "DEBE";
    let resultado6 = "HABER";


    let libro1 = "BALANCE GENERAL";
    let libro2 = "ESTADO DE RESULTADOS";
    let libro3 = "COSTO DE PRODUCCION";


//Acciones adquiridas
if(informacion == cuenta2 || informacion == cuenta2Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Acciones nus suscritas
else if(informacion == cuenta3 || informacion == cuenta3Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Acciones por suscribir
else if(informacion == cuenta4 || informacion == cuenta4Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Acciones suscritas
else if(informacion == cuenta5 || informacion == cuenta5Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Acreedores
else if(informacion == cuenta6 || informacion == cuenta6Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Acreedores hipotecarios
else if(informacion == cuenta7 || informacion == cuenta7Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Acreedores a largo plazo
else if(informacion == cuenta8 || informacion == cuenta8Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Acreedores por prendas en garantia per contra
else if(informacion == cuenta9 || informacion == cuenta9Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//aguinaldo
else if(informacion == cuenta10 || informacion == cuenta10Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Aguinaldo de administracion
else if(informacion == cuenta11 || informacion == cuenta11Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Aguinaldos sala de ventas
else if(informacion == cuenta12 || informacion == cuenta12Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Aguinaldos de fábrica
else if(informacion == cuenta13 || informacion == cuenta13Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//almacen de envases
else if(informacion == cuenta14 || informacion == cuenta14Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Alquileres cobrados
else if(informacion == cuenta15 || informacion == cuenta15Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Alquileres ganados
else if(informacion == cuenta16 || informacion == cuenta16Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Alquileres producto
else if(informacion == cuenta17 || informacion == cuenta17Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Alquileres devengados
else if(informacion == cuenta18 || informacion == cuenta18Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Alquileres percibidos
else if(informacion == cuenta19 || informacion == cuenta19Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Alquileres cobrados por anticipado
else if(informacion == cuenta20 || informacion == cuenta20Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Alquileres percibidos no devengados
else if(informacion == cuenta21 || informacion == cuenta21Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Alquileres
else if(informacion == cuenta22 || informacion == cuenta22Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Alquileres de oficinas
else if(informacion == cuenta23 || informacion == cuenta23Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Alquileres sala de ventas
else if(informacion == cuenta24 || informacion == cuenta24Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Alquileres de fabrica
else if(informacion == cuenta25 || informacion == cuenta25Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Alquileres pagados por anticipado
else if(informacion == cuenta26 || informacion == cuenta26Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Alquileres por pagar
else if(informacion == cuenta27 || informacion == cuenta27Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Amortización crédito mercantil
else if(informacion == cuenta28 || informacion == cuenta28Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Amortización derecho de llave 
else if(informacion == cuenta29 || informacion == cuenta29Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Amortización gasto de constitución
else if(informacion == cuenta30 || informacion == cuenta30Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Amortización gastos de instalación de fábrica
else if(informacion == cuenta31 || informacion == cuenta31Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Amortización gastos de instalación sala de ventas
else if(informacion == cuenta32 || informacion == cuenta32Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Amortización gastos de instalación de administración
else if(informacion == cuenta33 || informacion == cuenta33Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Amortización gastos de instalación de oficina
else if(informacion == cuenta34 || informacion == cuenta34Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Amortización gastos de organización
else if(informacion == cuenta35 || informacion == cuenta35Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Amortización marcas y patentes de administración
else if(informacion == cuenta36 || informacion == cuenta36Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Amortización marcas y patentes de fábrica
else if(informacion == cuenta37 || informacion == cuenta37Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Amortización de pérdidas acumuladas
else if(informacion == cuenta38 || informacion == cuenta38Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Amortización de pérdida de ejercicios anteriores
else if(informacion == cuenta39 || informacion == cuenta39Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Amortización renombre comercial
else if(informacion == cuenta40 || informacion == cuenta40Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Amortización de patentes
else if(informacion == cuenta41 || informacion == cuenta41Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Amortizaciones acumuladas
else if(informacion == cuenta42 || informacion == cuenta42Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Amortización
else if(informacion == cuenta43 || informacion == cuenta43Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Anticipo de clientes
else if(informacion == cuenta44 || informacion == cuenta44Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Anticipo sobre ventas
else if(informacion == cuenta45 || informacion == cuenta45Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Anticipo a proveedores
else if(informacion == cuenta46 || informacion == cuenta46Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Anticipo sobre compras
else if(informacion == cuenta47 || informacion == cuenta47Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Anticipo sobre sueldos
else if(informacion == cuenta48 || informacion == cuenta48Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Artículos en proceso inicial
else if(informacion == cuenta49 || informacion == cuenta49Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Artículos en proceso final
else if(informacion == cuenta50 || informacion == cuenta50Minuscula){
    document.registro.obtenerDato.value = resultado6;
    document.registro.obtenerDato2.value = libro3;
}
//Artículos terminados inicial
else if(informacion == cuenta51 || informacion == cuenta51Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Artículos terminados final
else if(informacion == cuenta52 || informacion == cuenta52Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Artículos enviados en consignación
else if(informacion == cuenta53 || informacion == cuenta53Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Artículos recibidos en consignación
else if(informacion == cuenta54 || informacion == cuenta54Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Bancos
else if(informacion == cuenta55 || informacion == cuenta55Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Bonificación de administración
else if(informacion == cuenta56 || informacion == cuenta56Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Bonificación de fábrica
else if(informacion == cuenta57 || informacion == cuenta57Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Bonificación sala de ventas
else if(informacion == cuenta58 || informacion == cuenta58Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Bonos comprados
else if(informacion == cuenta59 || informacion == cuenta59Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Bonos emitidos
else if(informacion == cuenta60 || informacion == cuenta60Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Bono 14
else if(informacion == cuenta61 || informacion == cuenta61Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Bono 14 de fábrica
else if(informacion == cuenta62 || informacion == cuenta62Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Bono 14 sala de ventas
else if(informacion == cuenta63 || informacion == cuenta63Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Bono 14 administración
else if(informacion == cuenta64 || informacion == cuenta64Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Bono 14 por pagar
else if(informacion == cuenta65 || informacion == cuenta65Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Caja
else if(informacion == cuenta66 || informacion == cuenta66Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Caja chica
else if(informacion == cuenta67 || informacion == cuenta67Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Caja y bancos
else if(informacion == cuenta68 || informacion == cuenta68Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Capital
else if(informacion == cuenta69 || informacion == cuenta69Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Capital social
else if(informacion == cuenta70 || informacion == cuenta70Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Capital autorizado
else if(informacion == cuenta71 || informacion == cuenta71Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Clientes
else if(informacion == cuenta72 || informacion == cuenta72Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Combustibles y lubricantes
else if(informacion == cuenta73 || informacion == cuenta73Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Combustibles y lubricantes consumidos fábrica
else if(informacion == cuenta74 || informacion == cuenta74Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Combustibles y lubricantes consumidos sala de ventas
else if(informacion == cuenta75 || informacion == cuenta75Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Combustibles y lubricantes consumidos administración
else if(informacion == cuenta76 || informacion == cuenta76Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Comisiones cobradas por anticipado
else if(informacion == cuenta77 || informacion == cuenta77Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Comisiones percibidas no devengadas
else if(informacion == cuenta78 || informacion == cuenta78Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Comisiones pagadas por anticipado
else if(informacion == cuenta79 || informacion == cuenta79Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Comisiones gasto
else if(informacion == cuenta80 || informacion == cuenta80Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Comisiones
else if(informacion == cuenta81 || informacion == cuenta81Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Comisiones percibidas
else if(informacion == cuenta82 || informacion == cuenta82Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Comisiones por cobrar
else if(informacion == cuenta83 || informacion == cuenta83Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Comisiones ganadas
else if(informacion == cuenta84 || informacion == cuenta84Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Comisiones producto
else if(informacion == cuenta85 || informacion == cuenta85Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Comisiones devengadas
else if(informacion == cuenta86 || informacion == cuenta86Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Comisiones por pagar
else if(informacion == cuenta87 || informacion == cuenta87Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Comisiones sobre ventas
else if(informacion == cuenta88 || informacion == cuenta88Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Comitentes por mercaderías
else if(informacion == cuenta89 || informacion == cuenta89Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Crédito fiscal
else if(informacion == cuenta90 || informacion == cuenta90Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Compras
else if(informacion == cuenta91 ||  informacion == cuenta91Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Compras de materia prima
else if(informacion == cuenta92 || informacion == cuenta92Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Compras de mercaderías
else if(informacion == cuenta93 || informacion == cuenta93Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Construcciones
else if(informacion == cuenta94 || informacion == cuenta94Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Corresponsales deudor
else if(informacion == cuenta95 || informacion == cuenta95Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Corresponsales acreedor
else if(informacion == cuenta96 || informacion == cuenta96Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Correo teléfono y telégrafos
else if(informacion == cuenta97 || informacion == cuenta97Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Crédito mercantil
else if(informacion == cuenta98 || informacion == cuenta98Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Créditos recuperados
else if(informacion == cuenta99 || informacion == cuenta99Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Cristaleria
else if(informacion == cuenta100 || informacion == cuenta100Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Cuentas por cobrar comerciales
else if(informacion == cuenta101 || informacion == cuenta101Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Cuentas por cobrar no comerciales
else if(informacion == cuenta102 || informacion == cuenta102Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Cuentas de difícil cobro
else if(informacion == cuenta103 || informacion == cuenta103Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Cuentas dudosas
else if(informacion == cuenta104 || informacion == cuenta104Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Cuentas incobrables
else if(informacion == cuenta105 || informacion == cuenta105Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Cuentas malas
else if(informacion == cuenta106 || informacion == cuenta106Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Cuentas por pagar
else if(informacion == cuenta107 || informacion == cuenta107Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Cuentas por pagar comerciales
else if(informacion == cuenta108 || informacion == cuenta108Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Cuentas por pagar no comerciales
else if(informacion == cuenta108_1 || informacion == cuenta108_1Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Cuotas laborales
else if(informacion == cuenta109 || informacion == cuenta109Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Cuotas laborales por pagar
else if(informacion == cuenta110 || informacion == cuenta110Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Cuotas patronales fábrica
else if(informacion == cuenta111 || informacion == cuenta111Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Cuotas patronales administración
else if(informacion == cuenta112 || informacion == cuenta112Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Cuotas patronales sala de ventas
else if(informacion == cuenta113 || informacion == cuenta113Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Cuotas patronales por pagar
else if(informacion == cuenta114 || informacion == cuenta114Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Cuenta promesa
else if(informacion == cuenta115 || informacion == cuenta115Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Débito fiscal
else if(informacion == cuenta116 || informacion == cuenta116Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Depósitos en garantía
else if(informacion == cuenta117 || informacion == cuenta117Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Depreciación construcción de fábrica
else if(informacion == cuenta118 || informacion == cuenta118Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Depreciación construcción de oficina
else if(informacion == cuenta119 || informacion == cuenta119Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Depreciación construcción sala de ventas
else if(informacion == cuenta120 || informacion == cuenta120Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Depreciación edificios fábrica
else if(informacion == cuenta121 || informacion == cuenta121Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Depreciación edificios oficinas
else if(informacion == cuenta122 || informacion == cuenta122Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Depreciación edificios sala de ventas
else if(informacion == cuenta123 || informacion == cuenta123Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Depreciación inmuebles oficina
else if(informacion == cuenta124 || informacion == cuenta124Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Depreciación inmuebles fábrica
else if(informacion == cuenta125 || informacion == cuenta125Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Depreciación inmuebles sala de ventas
else if(informacion == cuenta126 || informacion == cuenta126Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Depreciación herramientas
else if(informacion == cuenta127 || informacion == cuenta127Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Depreciación maquinaria
else if(informacion == cuenta128 || informacion == cuenta128Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Depreciación mobiliario y equipo fábrica
else if(informacion == cuenta129 || informacion == cuenta129Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Depreciación mobiliario y equipo oficina
else if(informacion == cuenta130 || informacion == cuenta130Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Depreciación mobiliario y equipo sala de ventas
else if(informacion == cuenta131 || informacion == cuenta131Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Depreciación mobiliario y equipo
else if(informacion == cuenta132 || informacion == cuenta132Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Depreciación de cristalería
else if(informacion == cuenta133 || informacion == cuenta133Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Depreciación vehículos de reparto
else if(informacion == cuenta134 || informacion == cuenta134Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Depreciación vehículos de fábrica
else if(informacion == cuenta135 || informacion == cuenta135Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Depreciación vehículos oficina
else if(informacion == cuenta136 || informacion == cuenta136Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Depreciación vehículos sala de ventas
else if(informacion == cuenta137 || informacion == cuenta137Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Depreciación vehículos
else if(informacion == cuenta138 || informacion == cuenta138Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Depreciación acumulada de todo activo
else if(informacion == cuenta139 || informacion == cuenta139Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Derecho de llave
else if(informacion == cuenta140 || informacion == cuenta140Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Descuentos concedidos
else if(informacion == cuenta141 || informacion == cuenta141Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Descuentos sobre acciones
else if(informacion == cuenta142 || informacion == cuenta142Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Descuentos sobre ventas
else if(informacion == cuenta143 || informacion == cuenta143Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Descuentos sobre compras
else if(informacion == cuenta144 || informacion == cuenta144Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Descuentos percibidos
else if(informacion == cuenta145 || informacion == cuenta145Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Deudores
else if(informacion == cuenta146 || informacion == cuenta146Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Deudores diversos
else if(informacion == cuenta147 || informacion == cuenta147Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Deudores varios
else if(informacion == cuenta148 || informacion == cuenta148Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Devoluciones y rebajas sobre ventas
else if(informacion == cuenta149 || informacion == cuenta149Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Devoluciones y rebajas sobre compras
else if(informacion == cuenta150 || informacion == cuenta150Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Devoluciones y rebajas sobre compras de materia prima
else if(informacion == cuenta151 || informacion == cuenta151Minuscula){
    document.registro.obtenerDato.value = resultado6;
    document.registro.obtenerDato2.value = libro3;
}
//Dividendos percibidos
else if(informacion == cuenta152 || informacion == cuenta152Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Dividendos no retirados o no pagados
else if(informacion == cuenta153 || informacion == cuenta153Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Dividendos no retirados
else if(informacion == cuenta154 || informacion == cuenta154Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Dividendos no pagados
else if(informacion == cuenta155 || informacion == cuenta155Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Dividendos por pagar
else if(informacion == cuenta156 || informacion == cuenta156Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Dividendos ganados
else if(informacion == cuenta157 || informacion == cuenta157Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Dividendos por cobrar
else if(informacion == cuenta159 || informacion == cuenta159Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Divisas adquiridas
else if(informacion == cuenta160 || informacion == cuenta160Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Documentos por cobrar
else if(informacion == cuenta161 || informacion == cuenta161Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Documentos por pagar
else if(informacion == cuenta162 || informacion == cuenta162Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Documentos endosados
else if(informacion == cuenta163 || informacion == cuenta163Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Documentos descontados
else if(informacion == cuenta164 || informacion == cuenta164Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Documentos por cobrar descontados
else if(informacion == cuenta165 || informacion == cuenta165Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Documentos por pagar a largo plazo
else if(informacion == cuenta166 || informacion == cuenta166Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Donativos
else if(informacion == cuenta167 || informacion == cuenta167Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Donativos pagados
else if(informacion == cuenta168 || informacion == cuenta168Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Donativos por pagar
else if(informacion == cuenta169 || informacion == cuenta169Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Donativos percibidos
else if(informacion == cuenta170 || informacion == cuenta170Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Edificios
else if(informacion == cuenta171 || informacion == cuenta171Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Efectos descontados
else if(informacion == cuenta172 || informacion == cuenta172Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Efectos endosados
else if(informacion == cuenta173 || informacion == cuenta173Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Efectos por cobrar
else if(informacion == cuenta174 || informacion == cuenta174Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Efectos por pagar
else if(informacion == cuenta175 || informacion == cuenta175Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Efectos por pagar a largo plazo
else if(informacion == cuenta176 || informacion == cuenta176Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Energía eléctrica de fábrica
else if(informacion == cuenta177 || informacion == cuenta177Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Energía eléctrica de oficina
else if(informacion == cuenta178 || informacion == cuenta178Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Energía eléctrica sala de ventas
else if(informacion == cuenta179 || informacion == cuenta179Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Energía eléctrica
else if(informacion == cuenta180 || informacion == cuenta180Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Envases en departamento de producción
else if(informacion == cuenta180_1 || informacion == cuenta180_1Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Equipo de computación
else if(informacion == cuenta181 || informacion == cuenta181Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Equipo de reparto
else if(informacion == cuenta182 || informacion == cuenta182Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Especies fiscales
else if(informacion == cuenta183 || informacion == cuenta183Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Estimación para cuentas incobrables
else if(informacion == cuenta184 || informacion == cuenta184Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Estimación para cuentas malas
else if(informacion == cuenta185 || informacion == cuenta185Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Estimación para cuentas dudosas
else if(informacion == cuenta186 || informacion == cuenta186Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Estimación para cuentas de difícil cobro
else if(informacion == cuenta187 || informacion == cuenta187Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Faltante de caja
else if(informacion == cuenta188 || informacion == cuenta188Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Fletes sobre compras
else if(informacion == cuenta189 || informacion == cuenta189Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Fletes sobre compras de materia prima
else if(informacion == cuenta190 || informacion == cuenta190Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Fletes
else if(informacion == cuenta191 || informacion == cuenta191Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Fórmulas patentadas
else if(informacion == cuenta192 || informacion == cuenta192Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Ganancia antes del impuesto
else if(informacion == cuenta193 || informacion == cuenta193Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Ganancia antes de impuestos y reservas
else if(informacion == cuenta194 || informacion == cuenta194Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Ganancia antes de reservas
else if(informacion == cuenta195 || informacion == cuenta195Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Ganancia después del impuesto
else if(informacion == cuenta196 || informacion == cuenta196Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Ganancia después del impuesto y reservas
else if(informacion == cuenta197 || informacion == cuenta197Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Ganancia después de reservas
else if(informacion == cuenta198 || informacion == cuenta198Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Ganancia en negociación de activos
else if(informacion == cuenta199 || informacion == cuenta199Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Ganancia en venta de activos
else if(informacion == cuenta200 || informacion == cuenta200Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Gastos de organización
else if(informacion == cuenta201 || informacion == cuenta201Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Gastos de instalación
else if(informacion == cuenta202 || informacion == cuenta202Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Gastos de instalación fábrica
else if(informacion == cuenta203 || informacion == cuenta203Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Gastos diversos de fábrica
else if(informacion == cuenta204 || informacion == cuenta204Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Gastos diversos de administración
else if(informacion == cuenta205 || informacion == cuenta205Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Gastos diversos sala de ventas
else if(informacion == cuenta206 || informacion == cuenta206Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Gastos misceláneos de fábrica
else if(informacion == cuenta207 || informacion == cuenta207Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Gastos misceláneos de oficina
else if(informacion == cuenta208 || informacion == cuenta208Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Gastos misceláneos sala de ventas
else if(informacion == cuenta209 || informacion == cuenta209Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Gastos publicitarios
else if(informacion == cuenta210 || informacion == cuenta210Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Gastos sobre compras
else if(informacion == cuenta212 || informacion == cuenta212Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Gastos sobre compras de materia prima
else if(informacion == cuenta213 || informacion == cuenta213Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Grasas y aceites
else if(informacion == cuenta214 || informacion == cuenta214Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Grasas y aceites consumidos fábrica
else if(informacion == cuenta215 || informacion == cuenta215Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Grasas y aceites consumidos sala de ventas
else if(informacion == cuenta216 || informacion == cuenta216Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Herramientas
else if(informacion == cuenta217 || informacion == cuenta217Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Hipotecas
else if(informacion == cuenta218 || informacion == cuenta218Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//IGSS por pagar
else if(informacion == cuenta219 || informacion == cuenta219Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//IGSS laboral
else if(informacion == cuenta220 || informacion == cuenta220Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//IGSS
else if(informacion == cuenta222 || informacion == cuenta222Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Impuestos aduanales sobre compras
else if(informacion == cuenta223 || informacion == cuenta223Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Impuestos aduanales sobre compras de materia prima
else if(informacion == cuenta224 || informacion == cuenta224Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Impuestos y contribuciones fábrica
else if(informacion == cuenta225 || informacion == cuenta225Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Impuestos y contribuciones administración
else if(informacion == cuenta226 || informacion == cuenta226Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Impuestos y contribuciones sala de ventas
else if(informacion == cuenta227 || informacion == cuenta227Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Impuestos sobre inmuebles fábrica
else if(informacion == cuenta228 || informacion == cuenta228Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Impuestos sobre inmuebles sala de ventas
else if(informacion == cuenta229 || informacion == cuenta229Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Impuestos sobre inmuebles oficina
else if(informacion == cuenta230 || informacion == cuenta230Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Impuestos y contribuciones por pagar
else if(informacion == cuenta231 || informacion == cuenta231Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Impuesto sobre inmuebles por pagar
else if(informacion == cuenta232 || informacion == cuenta232Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Impuesto sobre la renta por pagar
else if(informacion == cuenta233 || informacion == cuenta233Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Impuesto sobre la renta pagado por anticipado
else if(informacion == cuenta234 || informacion == cuenta234Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Impuesto a las empresas mercantiles pagado por anticipado
else if(informacion == cuenta235 || informacion == cuenta235Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Impuesto sobre la renta retenido
else if(informacion == cuenta236 || informacion == cuenta236Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Indemnizaciones fábrica
else if(informacion == cuenta237 || informacion == cuenta237Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Indemnizaciones administración
else if(informacion == cuenta238 || informacion == cuenta238Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Indemnizaciones sala de ventas
else if(informacion == cuenta239 || informacion == cuenta239Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Inmuebles
else if(informacion == cuenta240 || informacion == cuenta240Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Intereses gasto
else if(informacion == cuenta241 || informacion == cuenta241Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Intereses por cobrar
else if(informacion == cuenta242 || informacion == cuenta242Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Intereses percibidos no devengados
else if(informacion == cuenta243 || informacion == cuenta243Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Intereses cobrados por anticipado
else if(informacion == cuenta244 || informacion == cuenta244Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Intereses pagados por anticipado
else if(informacion == cuenta245 || informacion == cuenta245Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Intereses devengados
else if(informacion == cuenta246 || informacion == cuenta246Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Intereses ganados
else if(informacion == cuenta247 || informacion == cuenta247Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Intereses producto
else if(informacion == cuenta248 || informacion == cuenta248Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Intereses por pagar
else if(informacion == cuenta249 || informacion == cuenta249Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Inventario inicial de mercaderías
else if(informacion == cuenta250 || informacion == cuenta250Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Inventario inicial de artículos en proceso
else if(informacion == cuenta251 || informacion == cuenta251Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Inventario inicial de artículos terminados
else if(informacion == cuenta252 || informacion == cuenta252Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Inventario inicial de materia prima
else if(informacion == cuenta253 || informacion == cuenta253Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Inventario final de mercaderías
else if(informacion == cuenta254 || informacion == cuenta254Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Inventario final de artículos en proceso
else if(informacion == cuenta255 || informacion == cuenta255Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Inventario final de artículos terminados
else if(informacion == cuenta256 || informacion == cuenta256Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Inventario final de matería prima
else if(informacion == cuenta257 || informacion == cuenta257Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Inversiones
else if(informacion == cuenta258 || informacion == cuenta258Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Inversiones en valores
else if(informacion == cuenta259 || informacion == cuenta259Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//IVA acreditable
else if(informacion == cuenta260 || informacion == cuenta260Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//IVA por acreditar
else if(informacion == cuenta261 || informacion == cuenta261Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//IVA por cobrar
else if(informacion == cuenta262 || informacion == cuenta262Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//IVA deudor
else if(informacion == cuenta263 || informacion == cuenta263Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//IVA debitable
else if(informacion == cuenta264 || informacion == cuenta264Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//IVA por debitar
else if(informacion == cuenta265 || informacion == cuenta265Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//IVA por pagar
else if(informacion == cuenta266 || informacion == cuenta266Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//IVA acreedor
else if(informacion == cuenta267 || informacion == cuenta267Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Mano de obra directa
else if(informacion == cuenta268 || informacion == cuenta268Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Mano de obra indirecta
else if(informacion == cuenta269 || informacion == cuenta269Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Maquinaria
else if(informacion == cuenta270 || informacion == cuenta270Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Marcas y patentes
else if(informacion == cuenta271 || informacion == cuenta271Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Materia prima inicial
else if(informacion == cuenta272 || informacion == cuenta272Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Materia prima final
else if(informacion == cuenta273 || informacion == cuenta273Minuscula){
    document.registro.obtenerDato.value = resultado6;
    document.registro.obtenerDato2.value = libro3;
}
//Materia prima estropeada
else if(informacion == cuenta274 || informacion == cuenta274Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Materia prima inservible
else if(informacion == cuenta275 || informacion == cuenta275Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Materia prima destruida
else if(informacion == cuenta276 || informacion == cuenta276Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Materia prima en aduana
else if(informacion == cuenta277 || informacion == cuenta277Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Materia prima en tránsito
else if(informacion == cuenta278 || informacion == cuenta278Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Material de empaque
else if(informacion == cuenta279 || informacion == cuenta279Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Material de empaque consumido
else if(informacion == cuenta280 || informacion == cuenta280Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Material de empaque consumido fábrica
else if(informacion == cuenta281 || informacion == cuenta281Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Mercaderías enviadas en consignación
else if(informacion == cuenta282 || informacion == cuenta282Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Mercaderías inicial
else if(informacion == cuenta283 || informacion == cuenta283Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Mercaderías final
else if(informacion == cuenta284 || informacion == cuenta284Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Mercaderías en tránsito o en camino
else if(informacion == cuenta285 || informacion == cuenta285Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Mercaderías recibidas en consignación
else if(informacion == cuenta286 || informacion == cuenta286Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Mercaderías en aduana
else if(informacion == cuenta287 || informacion == cuenta287Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Mercadeías
else if(informacion == cuenta288 || informacion == cuenta288Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Mobiliario y equipo
else if(informacion == cuenta289 || informacion == cuenta289Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Multas y recargos
else if(informacion == cuenta290 || informacion == cuenta290Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Mercaderías ajenas
else if(informacion == cuenta291 || informacion == cuenta291Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Papelería y utiles
else if(informacion == cuenta291_1 || informacion == cuenta291_1Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Papelería y utiles consumidos
else if(informacion == cuenta292 || informacion == cuenta292Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Patentes
else if(informacion == cuenta293 || informacion == cuenta293Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Pérdidas acumuladas
else if(informacion == cuenta294 || informacion == cuenta294Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Pérdida de ejercicios anteriores
else if(informacion == cuenta295 || informacion == cuenta295Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Pérdida del ejercicio
else if(informacion == cuenta296 || informacion == cuenta296Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Pérdida en negociación de activos
else if(informacion == cuenta297 || informacion == cuenta297Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Pérdida en venta de activos
else if(informacion == cuenta298 || informacion == cuenta298Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Premios de lotería
else if(informacion == cuenta299 || informacion == cuenta299Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Prendas en garantía
else if(informacion == cuenta300 || informacion == cuenta300Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Prestaciones laborales fábrica
else if(informacion == cuenta301 || informacion == cuenta301Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Prestaciones laborales de administración
else if(informacion == cuenta302 || informacion == cuenta302Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Prestaciones laborales sala de ventas
else if(informacion == cuenta303 || informacion == cuenta303Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Préstamos bancarios
else if(informacion == cuenta304 || informacion == cuenta304Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Primas de seguro
else if(informacion == cuenta305 || informacion == cuenta305Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Primas de seguro vencidas
else if(informacion == cuenta306 || informacion == cuenta306Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Primas de seguro vencidas fábrica
else if(informacion == cuenta307 || informacion == cuenta307Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Primas de seguro vencidas administración
else if(informacion == cuenta308 || informacion == cuenta308Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Primas de seguro vencidas sala de ventas
else if(informacion == cuenta309 || informacion == cuenta309Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Primas de seguro no vencidas
else if(informacion == cuenta310 || informacion == cuenta310Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Primas sobre acciones
else if(informacion == cuenta311 || informacion == cuenta311Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Productos percibidos no devengados
else if(informacion == cuenta312 || informacion == cuenta312Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Productos por cobrar
else if(informacion == cuenta313 || informacion == cuenta313Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Propaganda
else if(informacion == cuenta314 || informacion == cuenta314Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Proveedores
else if(informacion == cuenta315 || informacion == cuenta315Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Proveeduría
else if(informacion == cuenta316 || informacion == cuenta316Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Provisión para cuentas incobrables
else if(informacion == cuenta317 || informacion == cuenta317Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Publicidad
else if(informacion == cuenta318 || informacion == cuenta318Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Propaganda pagada por anticipado
else if(informacion == cuenta319 || informacion == cuenta319Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Publicidad pagada por anticipado
else if(informacion == cuenta320 || informacion == cuenta320Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Recuperación de créditos
else if(informacion == cuenta321 || informacion == cuenta321Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Regalías
else if(informacion == cuenta322 || informacion == cuenta322Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Regalías percibidas
else if(informacion == cuenta323 || informacion == cuenta323Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Renombre comercial
else if(informacion == cuenta324 || informacion == cuenta324Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Reparación y mantenimiento de maquinaria
else if(informacion == cuenta325 || informacion == cuenta325Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Reparación y mantenimiento de vehículos
else if(informacion == cuenta326 || informacion == cuenta326Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Repuestos y accesorios
else if(informacion == cuenta327 || informacion == cuenta327Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Repuestos y accesorios consumidos
else if(informacion == cuenta328 || informacion == cuenta328Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Reserva legal
else if(informacion == cuenta329 || informacion == cuenta329Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Reserva para cuentas incobrables
else if(informacion == cuenta330 || informacion == cuenta330Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Reserva para cuentas malas
else if(informacion == cuenta331 || informacion == cuenta331Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Reserva para cuentas morosas
else if(informacion == cuenta332 || informacion == cuenta332Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Reserva para cuentas de difícil cobro
else if(informacion == cuenta333 || informacion == cuenta333Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Reserva para indemnizaciones
else if(informacion == cuenta334 || informacion == cuenta334Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Retenciones laborales
else if(informacion == cuenta335 || informacion == cuenta335Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Retención del impuesto sobre la renta
else if(informacion == cuenta336 || informacion == cuenta336Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Retención ISR
else if(informacion == cuenta337 || informacion == cuenta337Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Seguros
else if(informacion == cuenta338 || informacion == cuenta338Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Seguros anticipados
else if(informacion == cuenta339 || informacion == cuenta339Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Seguros pagados por anticipado
else if(informacion == cuenta340 || informacion == cuenta340Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Seguros no vencidos
else if(informacion == cuenta341 || informacion == cuenta341Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Seguros vencidos
else if(informacion == cuenta342 || informacion == cuenta342Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Seguros vencidos de fábrica
else if(informacion == cuenta343 || informacion == cuenta343Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Seguros vencidos de administración
else if(informacion == cuenta344 || informacion == cuenta344Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Seguros vencidos sala de ventas
else if(informacion == cuenta345 || informacion == cuenta345Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Señor x cuenta personal
else if(informacion == cuenta346 || informacion == cuenta346Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Señor x cuenta particular
else if(informacion == cuenta347 || informacion == cuenta347Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Socio x cuenta personal deudor
else if(informacion == cuenta348 || informacion == cuenta348Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Socio x cuenta personal acreedor
else if(informacion == cuenta348_1 || informacion == cuenta348_1Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Socio x cuenta particular deudor
else if(informacion == cuenta349 || informacion == cuenta349Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Socio x cuenta particular acreedor
else if(informacion == cuenta349_1 || informacion == cuenta349_1Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Socio x cuenta promesa
else if(informacion == cuenta350 || informacion == cuenta350Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Sobrantes de caja
else if(informacion == cuenta351 || informacion == cuenta351Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Sueldos de administración
else if(informacion == cuenta352 || informacion == cuenta352Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Sueldos sala de ventas
else if(informacion == cuenta353 || informacion == cuenta353Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Sueldos de vendedores
else if(informacion == cuenta354 || informacion == cuenta354Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Sueldos pagados por anticipado
else if(informacion == cuenta355 || informacion == cuenta355Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Sueldos por pagar
else if(informacion == cuenta356 || informacion == cuenta356Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Suministros
else if(informacion == cuenta357 || informacion == cuenta357Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Suministros consumidos fábrica
else if(informacion == cuenta358 || informacion == cuenta358Minuscula){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Suministros consumidos de oficina
else if(informacion == cuenta359 || informacion == cuenta359Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Suministros consumidos sala de ventas
else if(informacion == cuenta360 || informacion == cuenta360Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Superávit acumulado
else if(informacion == cuenta361 || informacion == cuenta361Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Suscriptores de acciones
else if(informacion == cuenta362 || informacion == cuenta362Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Terrenos
else if(informacion == cuenta363 || informacion == cuenta363Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Utiles y enseres
else if(informacion == cuenta364 || informacion == cuenta364Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Utiles y enseres consumidos
else if(informacion == cuenta365 || informacion == cuenta365Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//Utilidad del ejercicio
else if(informacion == cuenta366 || informacion == cuenta366Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Utilidades no distribuidas
else if(informacion == cuenta367 || informacion == cuenta367Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Utilidad por distribuir
else if(informacion == cuenta368 || informacion == cuenta368Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Valores mobiliarios
else if(informacion == cuenta369 || informacion == cuenta369Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Vehículos
else if(informacion == cuenta370 || informacion == cuenta370Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Vehículos de reparto
else if(informacion == cuenta371 || informacion == cuenta371Minuscula){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = resultado5;
}
//Ventas
else if(informacion == cuenta372 || informacion == cuenta372Minuscula){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = resultado6;
}
//Ventas por realizar
else if(informacion == cuenta373 || informacion == cuenta373Minuscula){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = resultado6;
}
//Viáticos
else if(informacion == cuenta374 || informacion == cuenta374Minuscula){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = resultado5;
}
//si no se encuentra la cuenta
else{
    document.registro.obtenerDato.value = "no se encontro";
    document.registro.obtenerDato2.value = "no se encontro";
}

}


function eliminarPublicidad(){
    imagenPublicidad.style.display = "none";
}

function elliminarPublicidad2(){
    imagenPublicidad2.style.display = "none";
}



