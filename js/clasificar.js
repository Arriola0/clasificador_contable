
function lista(){
    var list = document.getElementById('lista').value;
    document.registro.texto.value = list;
}




function obtenerdatos(){

    var informacion = document.getElementById('texto').value;

    
    var cuenta2 = "Acciones adquiridas";
    var cuenta2Minuscula = "acciones adquiridas";
    var cuenta3 = "Acciones no suscritas";
    var cuenta3Minuscula = "acciones no suscritas";
    var cuenta4 = "Acciones por suscribir";
    var cuenta4Minuscula = "acciones por suscribir";
    var cuenta5 = "Acciones suscritas";
    var cuenta5Minuscula = "acciones suscritas";
    var cuenta6 = "Acreedores";
    var cuenta6Minuscula = "acreedores";
    var cuenta7 = "Acreedores hipotecarios";
    var cuenta7Minuscula = "acreedores hipotecarios";
    var cuenta8 = "Acreedores a largo plazo";
    var cuenta8Minuscula = "acreedores a largo plazo";
    var cuenta9 = "Acreedores por prendas en garantia";
    var cuenta9Minuscula = "acreedores por prenda en garantia";
    var cuenta10 = "Aguinaldos";
    var cuenta10Minuscula = "aguinaldos";
    var cuenta11 = "Aguinaldos de administración";
    var cuenta11Minuscula = "aguinaldos de administración";
    var cuenta12 = "Aguinaldos sala de ventas";
    var cuenta12Minuscula = "aguinaldos sala de ventas";
    var cuenta13 = "Aguinaldos de fábrica";
    var cuenta13Minuscula = "aguinaldos de fábrica";
    var cuenta14 = "Almacen de envases";
    var cuenta14Minuscula = "almacen de envases";
    var cuenta15 = "Alquileres cobrados";
    var cuenta15Minuscula = "alquileres cobrados";
    var cuenta16 = "Alquileres ganados";
    var cuenta16Minuscula = "alquileres ganados";
    var cuenta17 = "Alquileres producto";
    var cuenta17Minuscula = "alquileres producto";
    var cuenta18 = "Alquileres devengados";
    var cuenta18Minuscula = "alquileres devengados";
    var cuenta19 = "Alquileres percibidos";
    var cuenta19Minuscula = "alquileres percibidos";
    var cuenta20 = "Alquileres cobrados por anticipado";
    var cuenta20Minuscula = "alquileres cobrados por anticipado";
    var cuenta21 = "Alquileres percibidos no devengados";
    var cuenta21Minuscula = "alquileres percibidos no devengados";
    var cuenta22 = "Alquileres";
    var cuenta22Minuscula = "alquileres";
    var cuenta23 = "Alquileres de oficinas";
    var cuenta23Minuscula = "alquileres de oficinas";
    var cuenta24 = "Alquileres sala de ventas";
    var cuenta24Minuscula = "alquileres sala de ventas";
    var cuenta25 = "Alquileres de fabrica";
    var cuenta25Minuscula = "alquileres de fabrica";
    var cuenta26 = "Alquileres pagados por anticipado";
    var cuenta26Minuscula = "alquileres pagados por anticipado";
    var cuenta27 = "Alquileres por pagar";
    var cuenta27Minuscula = "alquileres por pagar";
    var cuenta28 = "Amortización crédito mercantil";
    var cuenta28Minuscula = "amortización crédito mercantil";
    var cuenta29 = "Amortización derecho de llave";
    var cuenta29Minuscula = "amortización derecho de llave";
    var cuenta30 = "Amortización gasto de constitucón";
    var cuenta30Minuscula = "amortización gasto de constitución";
    var cuenta31 = "Amortización gastos de instalación de fábrica";
    var cuenta31Minuscula = "amortización gastos de instalación de fábrica";
    var cuenta32 = "Amortización gastos de instalación sala de ventas";
    var cuenta32Minuscula = "amortización gastos de instalación sala de ventas";
    var cuenta33 = "Amortización gastos de instalación de administración";
    var cuenta33Minuscula = "amortización gastos de instalación de administración";
    var cuenta34 = "Amortización gastos de instalación de oficina";
    var cuenta34Minuscula = "amortización gastos de instalación de oficina";
    var cuenta35 = "Amortización gastos de organización";
    var cuenta35Minuscula = "amortización gastos de organización";
    var cuenta36 = "Amortización marcas y patentes de administración";
    var cuenta36Minuscula = "amortización marcas y patentes de administración";
    var cuenta37 = "Amortización marcas y patentes de fábrica";
    var cuenta37Minuscula = "amortización marcas y patentes de fábrica";
    var cuenta38 = "Amortización de pérdidas acumuladas";
    var cuenta38Minuscula = "amortización de pérdidas acumuladas";
    var cuenta39 = "Amortización de pérdida de ejercicios anteriores";
    var cuenta39Minuscula = "amortización de pérdida de ejercicios anteriores";
    var cuenta40 = "Amortización renombre comercial";
    var cuenta40Minuscula = "amortización renombre comercial";
    var cuenta41 = "Amortización de patentes";
    var cuenta41Minuscula = "amortización de patentes";
    var cuenta42 = "Amortizaciones acumuladas";
    var cuenta42Minuscula = "amortizaciones acumuladas";
    var cuenta43 = "Amortización";
    var cuenta43Minuscula = "amortización";
    var cuenta44 = "Anticipo de clientes";
    var cuenta44Minuscula = "anticipo de clientes";
    var cuenta45 = "Anticipo sobre ventas";
    var cuenta45Minuscula = "anticipo sobre ventas";
    var cuenta46 = "Anticipo a proveedores";
    var cuenta46Minuscula = "anticipo a proveedores";
    var cuenta47 = "Anticipo sobre compras";
    var cuenta47Minuscula = "anticipo sobre compras";
    var cuenta48 = "Anticipo sobre sueldos";
    var cuenta48Minuscula = "anticipo sobre sueldos";
    var cuenta49 = "Artículos en proceso inicial";
    var cuenta49Minuscula = "artículos en proceso inicial";
    var cuenta50 = "Artículos en proceso final";
    var cuenta50Minuscula = "artículos en proceso final";
    var cuenta51 = "Artículos terminados inicial";
    var cuenta51Minuscula = "artículos terminados inicial";
    var cuenta52 = "Artículos terminados final";
    var cuenta52Minuscula = "artículos terminados final";
    var cuenta53 = "Artículos enviados en consignación";
    var cuenta53Minuscula = "artículos enviados en consignación";
    var cuenta54 = "Artículos recibidos en consignación";
    var cuenta54Minuscula = "artículos recibidos en consignación";
   
    var cuenta55 = "Bancos";
    var cuenta55Minuscula = "bancos";
    var cuenta56 = "Bonificación de administración";
    var cuenta56Minuscula = "bonificación de administración";
    var cuenta57 = "Bonificación de fábrica";
    var cuenta57Minuscula = "bonificación de fábrica";
    var cuenta58 = "Bonificación sala de ventas";
    var cuenta58Minuscula = "bonificación sala de ventas";
    var cuenta59 = "Bonos comprados";
    var cuenta59Minuscula = "bonos comprados";
    var cuenta60 = "Bonos emitidos";
    var cuenta60Minuscula = "bonos emitidos";
    var cuenta61 = "Bono 14";
    var cuenta61Minuscula = "bono 14";
    var cuenta62 = "Bono 14 de fábrica";
    var cuenta62Minuscula = "bono 14 de fábrica";
    var cuenta63 = "Bono 14 sala de ventas";
    var cuenta63Minuscula = "bono 14 sala de ventas";
    var cuenta64 = "Bono 14 administración";
    var cuenta64Minuscula = "bono 14 administración";
    var cuenta65 = "Bono 14 por pagar";
    var cuenta65Minuscula = "bono 14 por pagar";

    
    var cuenta66 = "Caja";
    var cuenta66Minuscula = "caja";
    var cuenta67 = "Caja chica";
    var cuenta67Minuscula = "caja chica";
    var cuenta68 = "Caja y bancos";
    var cuenta68Minuscula = "caja y bancos";
    var cuenta69 = "Capital";
    var cuenta69Minuscula = "capital";
    var cuenta70 = "Capital social";
    var cuenta70Minuscula = "capital social";
    var cuenta71 = "Capital autorizado";
    var cuenta71Minuscula = "capital autorizado";
    var cuenta72 = "Clientes";
    var cuenta72Minuscula = "clientes";
    var cuenta73 = "Combustibles y lubricantes";
    var cuenta73Minuscula = "combustibles y lubricantes";
    var cuenta74 = "Combustibles y lubricantes consumidos fábrica";
    var cuenta74Minuscula = "combustibles y lubricantes consumidos fábrica";
    var cuenta75 = "Combustibles y lubricantes consumidos sala de ventas";
    var cuenta75Minuscula = "combustibles y lubricantes consumidos sala de ventas";
    var cuenta76 = "Combustibles y lubricantes consumidos administración";
    var cuenta76Minuscula = "combustibles y lubricantes consumidos administración";
    var cuenta77 = "Comisiones cobradas por anticipado";
    var cuenta77Minuscula = "comisiones cobradas por anticipado";
    var cuenta78 = "Comisiones percibidas no devengadas";
    var cuenta78Minuscula = "comisiones percibidas no devengadas";
    var cuenta79 = "Comisiones pagadas por anticipado";
    var cuenta79Minuscula = "comisiones pagadas por anticipado";
    var cuenta80 = "Comisiones gasto";
    var cuenta80Minuscula = "comisiones gasto";
    var cuenta81 = "Comisiones";
    var cuenta81Minuscula = "comisiones";
    var cuenta82 = "Comisiones percibidas";
    var cuenta82Minuscula = "comisiones percibidas";
    var cuenta83 = "Comisiones por cobrar";
    var cuenta83Minuscula = "comisiones por cobrar";
    var cuenta84 = "Comisiones ganadas";
    var cuenta84Minuscula = "comisiones ganadas";
    var cuenta85 = "Comisiones producto";
    var cuenta85Minuscula = "comisiones producto";
    var cuenta86 = "Comisiones devengadas";
    var cuenta86Minuscula = "comisiones devengadas";
    var cuenta87 = "Comisiones por pagar";
    var cuenta87Minuscula = "comisiones por pagar";
    var cuenta88 = "Comisiones sobre ventas";
    var cuenta88Minuscula = "comisiones sobre ventas";
    var cuenta89 = "Comitentes por mercaderías";
    var cuenta89Minuscula = "comitentes por mercaderías";
    var cuenta90 = "Crédito fiscal";
    var cuenta90Minuscula = "crédito fiscal";
    var cuenta91 = "Compras";
    var cuenta91Minuscula = "compras";
    var cuenta92 = "Compras de materia prima";
    var cuenta92Minuscula = "compras de materia prima";
    var cuenta93 = "Compras de mercaderías";
    var cuenta93Minuscula = "compras de mercaderías";
    var cuenta94 = "Construcciones";
    var cuenta94Minuscula = "construcciones";
    var cuenta95 = "Corresponsales deudor";
    var cuenta95Minuscula = "corresponsales deudor";
    var cuenta96 = "Corresponsales acreedor";
    var cuenta96Minuscula = "corresponsales acreedor";
    var cuenta97 = "Correo teléfono y telégrafos";
    var cuenta97Minuscula = "correo teléfono y telégrafos";
    var cuenta98 = "Crédito mercantil";
    var cuenta98Minuscula = "crédito mercantil";
    var cuenta99 = "Créditos recuperados";
    var cuenta99Minuscula = "créditos recuperados";
    var cuenta100 = "Cristaleria";
    var cuenta100Minuscula = "cristaleria";
    var cuenta101 = "Cuentas por cobrar comerciales";
    var cuenta101Minuscula = "cuentas por cobrar comerciales";
    var cuenta102 = "Cuentas por cobrar no comerciales";
    var cuenta102Minuscula = "cuentas por cobrar no comerciales";
    var cuenta103 = "Cuentas de difícil cobro";
    var cuenta103Minuscula = "cuentas de difícil cobro";
    var cuenta104 = "Cuentas dudosas";
    var cuenta104Minuscula = "cuentas dudosas";
    var cuenta105 = "Cuentas incobrables";
    var cuenta105Minuscula = "cuentas incobrables";
    var cuenta106 = "Cuentas malas";
    var cuenta106Minuscula = "cuentas malas";
    var cuenta107 = "Cuentas por pagar";
    var cuenta107Minuscula = "cuentas por pagar";
    var cuenta108 = "Cuentas por pagar comerciales";
    var cuenta108Minuscula = "cuentas por pagar comerciales";
    var cuenta108_1 = "Cuentas por pagar no comerciales";
    var cuenta108_1Minuscula = "cuentas por pagar no comerciales";
    var cuenta109 = "Cuotas laborales";
    var cuenta109Minuscula = "cuotas laborales";
    var cuenta110 = "Cuotas laborales por pagar";
    var cuenta110Minuscula = "cuotas laborales por pagar";
    var cuenta111 = "Cuotas patronales fábrica";
    var cuenta111Minuscula = "cuotas patronales fábrica";
    var cuenta112 = "Cuotas patronales administración";
    var cuenta112Minuscula = "cuotas patronales administración";
    var cuenta113 = "Cuotas patronales sala de ventas";
    var cuenta113Minuscula = "cuotas patronales sala de ventas";
    var cuenta114 = "Cuotas patronales por pagar";
    var cuenta114Minuscula = "cuotas patronales por pagar";
    var cuenta115 = "Cuenta promesa";
    var cuenta115Minuscula = "cuenta promesa";

    var cuenta116 = "Débito fiscal";
    var cuenta116Minuscula = "débito fiscal";
    var cuenta117 = "Depósitos en garantía";
    var cuenta117Minuscula = "depósitos en garantía";
    var cuenta118 = "Depreciación construcción de fábrica";
    var cuenta118Minuscula = "depreciación construcción de fábrica";
    var cuenta119 = "Depreciación construcción de oficina";
    var cuenta119Minuscula = "depreciación construcción de oficina";
    var cuenta120 = "Depreciación construcción sala de ventas";
    var cuenta120Minuscula = "depreciación construcción sala de ventas";
    var cuenta121 = "Depreciación edificios fábrica";
    var cuenta121Minuscula = "depreciación edificios fábrica";
    var cuenta122 = "Depreciación edificios oficinas";
    var cuenta122Minuscula = "depreciación edificios oficinas";
    var cuenta123 = "Depreciación edificios sala de ventas";
    var cuenta123Minuscula = "depreciación edificios sala de ventas";
    var cuenta124 = "Depreciación inmuebles oficina";
    var cuenta124Minuscula = "depreciación inmuebles oficina";
    var cuenta125 = "Depreciación inmuebles fábrica";
    var cuenta125Minuscula = "depreciación inmuebles fábrica";
    var cuenta126 = "Depreciación inmuebles sala de ventas";
    var cuenta126Minuscula = "depreciación inmuebles sala de ventas";
    var cuenta127 = "Depreciación herramientas";
    var cuenta127Minuscula = "depreciación herramientas";
    var cuenta128 = "Depreciación maquinaria";
    var cuenta128Minuscula = "depreciación maquinaria";
    var cuenta129 = "Depreciación mobiliario y equipo fábrica";
    var cuenta129Minuscula = "depreciación mobiliario y equipo fábrica";
    var cuenta130 = "Depreciación mobiliario y equipo oficina";
    var cuenta130Minuscula = "depreciación mobiliario y equipo oficina";
    var cuenta131 = "Depreciación mobiliario y equipo sala de ventas";
    var cuenta131Minuscula = "depreciación mobiliario y equipo sala de ventas";
    var cuenta132 = "Depreciación mobiliario y equipo";
    var cuenta132Minuscula = "depreciación mobiliario y equipo";
    var cuenta133 = "Depreciación de cristalería";
    var cuenta133Minuscula = "depreciación de cristalería";
    var cuenta134 = "Depreciación vehículos de reparto";
    var cuenta134Minuscula = "depreciación vehículos de reparto";
    var cuenta135 = "Depreciación vehículos de fábrica";
    var cuenta135Minuscula = "depreciación vehículos de fábrica";
    var cuenta136 = "Depreciación vehículos oficina";
    var cuenta136Minuscula = "depreciación vehículos oficina";
    var cuenta137 = "Depreciación vehículos sala de ventas";
    var cuenta137Minuscula = "depreciación vehículos sala de ventas";
    var cuenta138 = "Depreciación vehículos";
    var cuenta138Minuscula = "depreciación vehículos";
    var cuenta139 = "Depreciación acumulada de todo activo";
    var cuenta139Minuscula = "depreciación acumulada de todo activo";
    var cuenta140 = "Derecho de llave";
    var cuenta140Minuscula = "derecho de llave";
    var cuenta141 = "Descuentos concedidos";
    var cuenta141Minuscula = "descuentos concedidos";
    var cuenta142 = "Descuentos sobre acciones";
    var cuenta142Minuscula = "descuentos sobre acciones";
    var cuenta143 = "Descuentos sobre ventas";
    var cuenta143Minuscula = "descuentos sobre ventas";
    var cuenta144 = "Descuentos sobre compras";
    var cuenta144Minuscula = "descuentos sobre compras";
    var cuenta145 = "Descuentos percibidos";
    var cuenta145Minuscula = "descuentos percibidos";
    var cuenta146 = "Deudores";
    var cuenta146Minuscula = "deudores";
    var cuenta147 = "Deudores diversos";
    var cuenta147Minuscula = "deudores diversos";
    var cuenta148 = "Deudores varios";
    var cuenta148Minuscula = "deudores varios";
    var cuenta149 = "Devoluciones y rebajas sobre ventas";
    var cuenta149Minuscula = "devoluciones y rebajas sobre ventas";
    var cuenta150 = "Devoluciones y rebajas sobre compras";
    var cuenta150Minuscula = "devoluciones y rebajas sobre compras";
    var cuenta151 = "Devoluciones y rebajas sobre compras de materia prima";
    var cuenta151Minuscula = "devoluciones y rebajas sobre compras de materia prima";
    var cuenta152 = "Dividendos percibidos";
    var cuenta152Minuscula = "dividendos percibidos";
    var cuenta153 = "Dividendos no retirados o no pagados";
    var cuenta153Minuscula = "dividendos no retirados o no pagados";
    var cuenta154 = "Dividendos no retirados";
    var cuenta154Minuscula = "dividendos no retirados";
    var cuenta155 = "Dividendos no pagados";
    var cuenta155Minuscula = "dividendos no pagados";
    var cuenta156 = "Dividendos por pagar";
    var cuenta156Minuscula = "dividendos por pagar";
    var cuenta157 = "Dividendos ganados";
    var cuenta157Minuscula = "dividendos ganados";
    var cuenta158 = "";
    var cuenta158Minuscula = "";
    var cuenta159 = "Dividendos por cobrar";
    var cuenta159Minuscula = "dividendos por cobrar";
    var cuenta160 = "Divisas adquiridas";
    var cuenta160Minuscula = "divisas adquiridas";
    var cuenta161 = "Documentos por cobrar";
    var cuenta161Minuscula = "documentos por cobrar";
    var cuenta162 = "Documentos por pagar";
    var cuenta162Minuscula = "documentos por pagar";
    var cuenta163 = "Documentos endosados";
    var cuenta163Minuscula = "documentos endosados";
    var cuenta164 = "Documentos descontados";
    var cuenta164Minuscula = "documentos descontados";
    var cuenta165 = "Documentos por cobrar descontados";
    var cuenta165Minuscula = "documentos por cobrar descontados";
    var cuenta166 = "Documentos por pagar a largo plazo";
    var cuenta166Minuscula = "documentos por pagar a largo plazo";
    var cuenta167 = "Donativos";
    var cuenta167Minuscula = "donativos";
    var cuenta168 = "Donativos pagados";
    var cuenta168Minuscula = "donativos pagados";
    var cuenta169 = "Donativos por pagar";
    var cuenta169Minuscula = "donativos por pagar";
    var cuenta170 = "Donativos percibidos";
    var cuenta170Minuscula = "donativos percibidos";

    var cuenta171 = "Edificios";
    var cuenta171Minuscula = "edificios";
    var cuenta172 = "Efectos descontados";
    var cuenta172Minuscula = "efectos descontados";
    var cuenta173 = "Efectos endosados";
    var cuenta173Minuscula = "efectos endosados";
    var cuenta174 = "Efectos por cobrar";
    var cuenta174Minuscula = "efectos por cobrar";
    var cuenta175 = "Efectos por pagar";
    var cuenta175Minuscula = "efectos por pagar";
    var cuenta176 = "Efectos por pagar a largo plazo";
    var cuenta176Minuscula = "efectos por pagar a largo plazo";
    var cuenta177 = "Energía eléctrica de fábrica";
    var cuenta177Minuscula = "energía eléctrica de fábrica";
    var cuenta178 = "Energía eléctrica de oficina";
    var cuenta178Minuscula = "energía eléctrica de oficina";
    var cuenta179 = "Energía eléctrica sala de ventas";
    var cuenta179Minuscula = "energía eléctrica sala de ventas";
    var cuenta180 = "Energía eléctrica";
    var cuenta180Minuscula = "energía eléctrica";
    var cuenta180_1 = "Envases en departamento de producción";
    var cuenta180_1Minuscula = "envases en departamento de producción";
    var cuenta181 = "Equipo de computación";
    var cuenta181Minuscula = "equipo de computación";
    var cuenta182 = "Equipo de reparto";
    var cuenta182Minuscula = "equipo de reparto";
    var cuenta183 = "Especies fiscales";
    var cuenta183Minuscula = "especies fiscales";
    var cuenta184 = "Estimación para cuentas incobrables";
    var cuenta184Minuscula = "estimación para cuentas incobrables";
    var cuenta185 = "Estimación para cuentas malas";
    var cuenta185Minuscula = "estimación para cuentas malas";
    var cuenta186 = "Estimación para cuentas dudosas";
    var cuenta186Minuscula = "estimación para cuentas dudosas";
    var cuenta187 = "Estimación para cuentas de difícil cobro";
    var cuenta187Minuscula = "estimación para cuentas de difícil cobro";

    var cuenta188 = "Faltante de caja";
    var cuenta188Minuscula = "faltante de caja";
    var cuenta189 = "Fletes sobre compras";
    var cuenta189Minuscula = "fletes sobre compras";
    var cuenta190 = "Fletes sobre compras de materia prima";
    var cuenta190Minuscula = "fletes sobre compras de materia prima";
    var cuenta191 = "Fletes";
    var cuenta191Minuscula = "fletes";
    var cuenta192 = "Fórmulas patentadas";
    var cuenta192Minuscula = "fórmulas patentadas";

    var cuenta193 = "Ganancia antes del impuesto";
    var cuenta193Minuscula = "ganancia antes del impuesto";
    var cuenta194 = "Ganancia antes de impuestos y reservas";
    var cuenta194Minuscula = "ganancia antes de impuestos y reservas";
    var cuenta195 = "Ganancia antes de reservas";
    var cuenta195Minuscula = "ganancia antes de reservas";
    var cuenta196 = "Ganancia después del impuesto";
    var cuenta196Minuscula = "ganancia después del impuesto";
    var cuenta197 = "Ganancia después del impuesto y reservas";
    var cuenta197Minuscula = "ganancia después del impuesto y reservas";
    var cuenta198 = "Ganancia después de reservas";
    var cuenta198Minuscula = "ganancia después de reservas";
    var cuenta199 = "Ganancia en negociación de activos";
    var cuenta199Minuscula = "ganancia en negociación de activos";
    var cuenta200 = "Ganancia en venta de activos";
    var cuenta200Minuscula = "ganancia en venta de activos";
    var cuenta201 = "Gastos de organización";
    var cuenta201Minuscula = "gastos de organización";
    var cuenta202 = "Gastos de instalación";
    var cuenta202Minuscula = "gastos de instalación";
    var cuenta203 = "Gastos de instalación fábrica";
    var cuenta203Minuscula = "gastos de instalación fábrica";
    var cuenta204 = "Gastos diversos de fábrica";
    var cuenta204Minuscula = "gastos diversos de fábrica";
    var cuenta205 = "Gastos diversos de administración";
    var cuenta205Minuscula = "gastos diversos de administración";
    var cuenta206 = "Gastos diversos sala de ventas";
    var cuenta206Minuscula = "gastos diversos sala de ventas";
    var cuenta207 = "Gastos misceláneos de fábrica";
    var cuenta207Minuscula = "gastos misceláneos de fábrica";
    var cuenta208 = "Gastos misceláneos de oficina";
    var cuenta208Minuscula = "gastos misceláneos de oficina";
    var cuenta209 = "Gastos misceláneos sala de ventas";
    var cuenta209Minuscula = "gastos misceláneos sala de ventas";
    var cuenta210 = "Gastos publicitarios";
    var cuenta210Minuscula = "gastos publicitarios";
    var cuenta212 = "Gastos sobre compras";
    var cuenta212Minuscula = "gastos sobre compras";
    var cuenta213 = "Gastos sobre compras de materia prima";
    var cuenta213Minuscula = "gastos sobre compras de materia prima";
    var cuenta214 = "Grasas y aceites";
    var cuenta214Minuscula = "grasas y aceites";
    var cuenta215 = "Grasas y aceites consumidos fábrica";
    var cuenta215Minuscula = "grasas y aceites consumidos fábrica";
    var cuenta216 = "Grasas y aceites consumidos sala de ventas";
    var cuenta216Minuscula = "grasas y aceites consumidos sala de ventas";

    var cuenta217 = "Herramientas";
    var cuenta217Minuscula = "herramientas";
    var cuenta218 = "Hipotecas";
    var cuenta218Minuscula = "hipotecas";

    var cuenta219 = "IGSS por pagar";
    var cuenta219Minuscula = "igss por pagar";
    var cuenta220 = "IGSS laboral";
    var cuenta220Minuscula = "igss laboral";
    var cuenta222 = "IGSS";
    var cuenta222Minuscula = "igss";
    var cuenta223 = "Impuestos aduanales sobre compras";
    var cuenta223Minuscula = "impuestos aduanales sobre compras";
    var cuenta224 = "Impuestos aduanales sobre compras de materia prima";
    var cuenta224Minuscula = "impuestos aduanales sobre compras de materia prima";
    var cuenta225 = "Impuestos y contribuciones fábrica";
    var cuenta225Minuscula = "impuestos y contribuciones fábrica";
    var cuenta226 = "Impuestos y contribuciones administración";
    var cuenta226Minuscula = "impuestos y contribuciones administración";
    var cuenta227 = "Impuestos y contribuciones sala de ventas";
    var cuenta227Minuscula = "impuestos y contribuciones sala de ventas";
    var cuenta228 = "Impuestos sobre inmuebles fábrica";
    var cuenta228Minuscula = "impuestos sobre inmuebles fábrica";
    var cuenta229 = "Impuestos sobre inmuebles sala de ventas";
    var cuenta229Minuscula = "impuestos sobre inmuebles sala de ventas";
    var cuenta230 = "Impuestos sobre inmuebles oficina";
    var cuenta230Minuscula = "impuestos sobre inmuebles oficina";
    var cuenta231 = "Impuestos y contribuciones por pagar";
    var cuenta231Minuscula = "impuestos y contribuciones por pagar";
    var cuenta232 = "Impuesto sobre inmuebles por pagar";
    var cuenta232Minuscula = "impuesto sobre inmuebles por pagar";
    var cuenta233 = "Impuesto sobre la renta por pagar";
    var cuenta233Minuscula = "impuesto sobre la renta por pagar";
    var cuenta234 = "Impuesto sobre la renta pagado por anticipado";
    var cuenta234Minuscula = "impuesto sobre la renta pagado por anticipado";
    var cuenta235 = "Impuesto a las empresas mercantiles pagado por anticipado";
    var cuenta235Minuscula = "impuesto a las empresas mercantiles pagado por anticipado";
    var cuenta236 = "Impuesto sobre la renta retenido";
    var cuenta236Minuscula = "impuesto sobre la renta retenido";
    var cuenta237 = "Indemnizaciones fábrica";
    var cuenta237Minuscula = "indemnizaciones fábrica";
    var cuenta238 = "Indemnizaciones administración";
    var cuenta238Minuscula = "indemnizaciones administración";
    var cuenta239 = "Indemnizaciones sala de ventas";
    var cuenta239Minuscula = "indemnizaciones sala de ventas";
    var cuenta240 = "Inmuebles";
    var cuenta240Minuscula = "inmuebles";
    var cuenta241 = "Intereses gasto";
    var cuenta241Minuscula = "intereses gasto";
    var cuenta242 = "Intereses por cobrar";
    var cuenta242Minuscula = "intereses por cobrar";
    var cuenta243 = "Intereses percibidos no devengados";
    var cuenta243Minuscula = "intereses percibidos no devengados";
    var cuenta244 = "Intereses cobrados por anticipado";
    var cuenta244Minuscula = "intereses cobrados por anticipado";
    var cuenta245 = "Intereses pagados por anticipado";
    var cuenta245Minuscula = "intereses pagados por anticipado";
    var cuenta246 = "Intereses devengados";
    var cuenta246Minuscula = "intereses devengados";
    var cuenta247 = "Intereses ganados";
    var cuenta247Minuscula = "intereses ganados";
    var cuenta248 = "Intereses producto";
    var cuenta248Minuscula = "intereses producto";
    var cuenta249 = "Intereses por pagar";
    var cuenta249Minuscula = "intereses por pagar";
    var cuenta250 = "Inventario inicial de mercaderías";
    var cuenta250Minuscula = "inventario inicial de mercaderías";
    var cuenta251 = "Inventario inicial de artículos en proceso";
    var cuenta251Minuscula = "inventario inicial de artículos en proceso";
    var cuenta252 = "Inventario inicial de artículos terminados";
    var cuenta252Minuscula = "inventario inicial de artículos terminados";
    var cuenta253 = "Inventario inicial de materia prima";
    var cuenta253Minuscula = "inventario inicial de materia prima";
    var cuenta254 = "Inventario final de mercaderías";
    var cuenta254Minuscula = "inventario final de mercaderías";
    var cuenta255 = "Inventario final de artículos en proceso";
    var cuenta255Minuscula = "inventario final de artículos en proceso";
    var cuenta256 = "Inventario final de artículos terminados";
    var cuenta256Minuscula = "inventario final de artículos terminados";
    var cuenta257 = "Inventario final de matería prima";
    var cuenta257Minuscula = "inventario final de matería prima";
    var cuenta258 = "Inversiones";
    var cuenta258Minuscula = "inversiones";
    var cuenta259 = "Inversiones en valores";
    var cuenta259Minuscula = "inversiones en valores";
    var cuenta260 = "IVA acreditable";
    var cuenta260Minuscula = "iva acreditable";
    var cuenta261 = "IVA por acreditar";
    var cuenta261Minuscula = "iva por acreditar";
    var cuenta262 = "IVA por cobrar";
    var cuenta262Minuscula = "iva por cobrar";
    var cuenta263 = "IVA deudor";
    var cuenta263Minuscula = "iva deudor";
    var cuenta264 = "IVA debitable";
    var cuenta264Minuscula = "iva debitable";
    var cuenta265 = "IVA por debitar";
    var cuenta265Minuscula = "iva por debitar";
    var cuenta266 = "IVA por pagar";
    var cuenta266Minuscula = "iva por pagar";
    var cuenta267 = "IVA acreedor";
    var cuenta267Minuscula = "iva acreedor";
    
    var cuenta268 = "Mano de obra directa";
    var cuenta268Minuscula = "mano de obra directa";
    var cuenta269 = "Mano de obra indirecta";
    var cuenta269Minuscula = "mano de obra indirecta";
    var cuenta270 = "Maquinaria";
    var cuenta270Minuscula = "maquinaria";
    var cuenta271 = "Marcas y patentes";
    var cuenta271Minuscula = "marcas y patentes";
    var cuenta272 = "Materia prima inicial";
    var cuenta272Minuscula = "materia prima inicial";
    var cuenta273 = "Materia prima final";
    var cuenta273Minuscula = "materia prima final";
    var cuenta274 = "Materia prima estropeada";
    var cuenta274Minuscula = "materia prima estropeada";
    var cuenta275 = "Materia prima inservible";
    var cuenta275Minuscula = "materia prima inservible";
    var cuenta276 = "Materia prima destruida";
    var cuenta276Minuscula = "materia prima destruida";
    var cuenta277 = "Materia prima en aduana";
    var cuenta277Minuscula = "materia prima en aduana";
    var cuenta278 = "Materia prima en tránsito";
    var cuenta278Minuscula = "materia prima en tránsito";
    var cuenta279 = "Material de empaque";
    var cuenta279Minuscula = "material de empaque";
    var cuenta280 = "Material de empaque consumido";
    var cuenta280Minuscula = "material de empaque consumido";
    var cuenta281 = "Material de empaque consumido fábrica";
    var cuenta281Minuscula = "material de empaque consumido fábrica";
    var cuenta282 = "Mercaderías enviadas en consignación";
    var cuenta282Minuscula = "mercaderías enviadas en consignación";
    var cuenta283 = "Mercaderías inicial";
    var cuenta283Minuscula = "mercaderías inicial";
    var cuenta284 = "Mercaderías final";
    var cuenta284Minuscula = "mercaderías final";
    var cuenta285 = "Mercaderías en tránsito o en camino";
    var cuenta285Minuscula = "mercaderías en tránsito o en camino";
    var cuenta286 = "Mercaderías recibidas en consignación";
    var cuenta286Minuscula = "mercaderías recibidas en consignación";
    var cuenta287 = "Mercaderías en aduana";
    var cuenta287Minuscula = "mercaderías en aduana";
    var cuenta288 = "Mercadeías";
    var cuenta288Minuscula = "mercadeías";
    var cuenta289 = "Mobiliario y equipo";
    var cuenta289Minuscula = "mobiliario y equipo";
    var cuenta290 = "Multas y recargos";
    var cuenta290Minuscula = "multas y recargos";
    var cuenta291 = "Mercaderías ajenas";
    var cuenta291Minuscula = "mercaderías ajenas";

    var cuenta291_1 = "Papelería y utiles";
    var cuenta291_1Minuscula = "papelería y utiles";
    var cuenta292 = "Papelería y utiles consumidos";
    var cuenta292Minuscula = "papelería y utiles consumidos";
    var cuenta293 = "Patentes";
    var cuenta293Minuscula = "patentes";
    var cuenta294 = "Pérdidas acumuladas";
    var cuenta294Minuscula = "Pérdidas acumuladas";
    var cuenta295 = "Pérdida de ejercicios anteriores";
    var cuenta295Minuscula = "pérdida de ejercicios anteriores";
    var cuenta296 = "Pérdida del ejercicio";
    var cuenta296Minuscula = "pérdida del ejercicio";
    var cuenta297 = "Pérdida en negociación de activos";
    var cuenta297Minuscula = "pérdida en negociación de activos";
    var cuenta298 = "Pérdida en venta de activos";
    var cuenta298Minuscula = "pérdida en venta de activos";
    var cuenta299 = "Premios de lotería";
    var cuenta299Minuscula = "premios de lotería";
    var cuenta300 = "Prendas en garantía";
    var cuenta300Minuscula = "prendas en garantía";
    var cuenta301 = "Prestaciones laborales fábrica";
    var cuenta301Minuscula = "prestaciones laborales fábrica";
    var cuenta302 = "Prestaciones laborales de administración";
    var cuenta302Minuscula = "prestaciones laborales de administración";
    var cuenta303 = "Prestaciones laborales sala de ventas";
    var cuenta303Minuscula = "prestaciones laborales sala de ventas";
    var cuenta304 = "Préstamos bancarios";
    var cuenta304Minuscula = "préstamos bancarios";
    var cuenta305 = "Primas de seguro";
    var cuenta305Minuscula = "primas de seguro";
    var cuenta306 = "Primas de seguro vencidas";
    var cuenta306Minuscula = "primas de seguro vencidas";
    var cuenta307 = "Primas de seguro vencidas fábrica";
    var cuenta307Minuscula = "primas de seguro vencidas fábrica";
    var cuenta308 = "Primas de seguro vencidas administración";
    var cuenta308Minuscula = "primas de seguro vencidas administración";
    var cuenta309 = "Primas de seguro vencidas sala de ventas";
    var cuenta309Minuscula = "primas de seguro vencidas sala de ventas";
    var cuenta310 = "Primas de seguro no vencidas";
    var cuenta310Minuscula = "primas de seguro no vencidas";
    var cuenta311 = "Primas sobre acciones";
    var cuenta311Minuscula = "primas sobre acciones";
    var cuenta312 = "Productos percibidos no devengados";
    var cuenta312Minuscula = "productos percibidos no devengados";
    var cuenta313 = "Productos por cobrar";
    var cuenta313Minuscula = "productos por cobrar";
    var cuenta314 = "Propaganda";
    var cuenta314Minuscula = "propaganda";
    var cuenta315 = "Proveedores";
    var cuenta315Minuscula = "proveedores";
    var cuenta316 = "Proveeduría";
    var cuenta316Minuscula = "Proveeduría";
    var cuenta317 = "Provisión para cuentas incobrables";
    var cuenta317Minuscula = "provisión para cuentas incobrables";
    var cuenta318 = "Publicidad";
    var cuenta318Minuscula = "publicidad";
    var cuenta319 = "Propaganda pagada por anticipado";
    var cuenta319Minuscula = "propaganda pagada por anticipado";
    var cuenta320 = "Publicidad pagada por anticipado";
    var cuenta320Minuscula = "publicidad pagada por anticipado";

    var cuenta321 = "Recuperación de créditos";
    var cuenta321Minuscula = "recuperación de créditos";
    var cuenta322 = "Regalías";
    var cuenta322Minuscula = "regalías";
    var cuenta323 = "Regalías percibidas";
    var cuenta323Minuscula = "regalías percibidas";
    var cuenta324 = "Renombre comercial";
    var cuenta324Minuscula = "renombre comercial";
    var cuenta325 = "Reparación y mantenimiento de maquinaria";
    var cuenta325Minuscula = "reparación y mantenimiento de maquinaria";
    var cuenta326 = "Reparación y mantenimiento de vehículos";
    var cuenta326Minuscula = "reparación y mantenimiento de vehículos";
    var cuenta327 = "Repuestos y accesorios";
    var cuenta327Minuscula = "repuestos y accesorios";
    var cuenta328 = "Repuestos y accesorios consumidos";
    var cuenta328Minuscula = "repuestos y accesorios consumidos";
    var cuenta329 = "Reserva legal";
    var cuenta329Minuscula = "reserva legal";
    var cuenta330 = "Reserva para cuentas incobrables";
    var cuenta330Minuscula = "reserva para cuentas incobrables";
    var cuenta331 = "Reserva para cuentas malas";
    var cuenta331Minuscula = "reserva para cuentas malas";
    var cuenta332 = "Reserva para cuentas morosas";
    var cuenta332Minuscula = "reserva para cuentas morosas";
    var cuenta333 = "Reserva para cuentas de difícil cobro";
    var cuenta333Minuscula = "reserva para cuentas de difícil cobro";
    var cuenta334 = "Reserva para indemnizaciones";
    var cuenta334Minuscula = "reserva para indemnizaciones";
    var cuenta335 = "Retenciones laborales";
    var cuenta335Minuscula = "retenciones laborales";
    var cuenta336 = "Retención del impuesto sobre la renta";
    var cuenta336Minuscula = "retención del impuesto sobre la renta";
    var cuenta337 = "Retención ISR";
    var cuenta337Minuscula = "retención isr";

    var cuenta338 = "Seguros";
    var cuenta338Minuscula = "seguros";
    var cuenta339 = "Seguros anticipados";
    var cuenta339Minuscula = "seguros anticipados";
    var cuenta340 = "Seguros pagados por anticipado";
    var cuenta340Minuscula = "seguros pagados por anticipado";
    var cuenta341 = "Seguros no vencidos";
    var cuenta341Minuscula = "seguros no vencidos";
    var cuenta342 = "Seguros vencidos";
    var cuenta342Minuscula = "seguros vencidos";
    var cuenta343 = "Seguros vencidos de fábrica";
    var cuenta343Minuscula = "seguros vencidos de fábrica";
    var cuenta344 = "Seguros vencidos de administración";
    var cuenta344Minuscula = "seguros vencidos de administración";
    var cuenta345 = "Seguros vencidos sala de ventas";
    var cuenta345Minuscula = "seguros vencidos sala de ventas";
    var cuenta346 = "Señor x cuenta personal";
    var cuenta346Minuscula = "señor x cuenta personal";
    var cuenta347 = "Señor x cuenta particular";
    var cuenta347Minuscula = "señor x cuenta particular";
    var cuenta348 = "Socio x cuenta personal deudor";
    var cuenta348Minuscula = "socio x cuenta peronal deudor";
    var cuenta348_1 = "Socio x cuenta personal acreedor";
    var cuenta348_1Minuscula = "socio x cuenta personal acreedor";
    var cuenta349 = "Socio x cuenta particular deudor";
    var cuenta349Minuscula = "socio x cuenta particular deudor";
    var cuenta349_1 = "Socio x cuenta particular acreedor";
    var cuenta349_1Minuscula = "socio x cuenta particular acreedor";
    var cuenta350 = "Socio x cuenta promesa";
    var cuenta350Minuscula = "socio x cuenta promesa";
    var cuenta351 = "Sobrantes de caja";
    var cuenta351Minuscula = "sobrantes de caja";
    var cuenta352 = "Sueldos de administración";
    var cuenta352Minuscula = "sueldos de administración";
    var cuenta353 = "Sueldos sala de ventas";
    var cuenta353Minuscula = "sueldos sala de ventas";
    var cuenta354 = "Sueldos de vendedores";
    var cuenta354Minuscula = "sueldos de vendedores";
    var cuenta355 = "Sueldos pagados por anticipado";
    var cuenta355Minuscula = "sueldos pagados por anticipado";
    var cuenta356 = "Sueldos por pagar";
    var cuenta356Minuscula = "sueldos por pagar";
    var cuenta357 = "Suministros";
    var cuenta357Minuscula = "suministros";
    var cuenta358 = "Suministros consumidos fábrica";
    var cuenta358Minuscula = "suministros consumidos fábrica";
    var cuenta359 = "Suministros consumidos de oficina";
    var cuenta359Minuscula = "suministros consumidos de oficina";
    var cuenta360 = "Suministros consumidos sala de ventas";
    var cuenta360Minuscula = "suministros consumidos sala de ventas";
    var cuenta361 = "Superávit acumulado";
    var cuenta361Minuscula = "superávit acumulado";
    var cuenta362 = "Suscriptores de acciones";
    var cuenta362Minuscula = "suscriptores de acciones";

    var cuenta363 = "Terrenos";
    var cuenta363Minuscula = "terrenos";

    var cuenta364 = "Utiles y enseres";
    var cuenta364Minuscula = "utiles y enseres";
    var cuenta365 = "Utiles y enseres consumidos";
    var cuenta365Minuscula = "utiles y enseres consumidos";
    var cuenta366 = "Utilidad del ejercicio";
    var cuenta366Minuscula = "utilidad del ejercicio";
    var cuenta367 = "Utilidades no distribuidas";
    var cuenta367Minuscula = "utilidades no distribuidas";
    var cuenta368 = "Utilidad por distribuir";
    var cuenta368Minuscula = "utilidad por distribuir";

    var cuenta369 = "Valores mobiliarios";
    var cuenta369Minuscula = "valores mobiliarios";
    var cuenta370 = "Vehículos";
    var cuenta370Minuscula = "vehículos";
    var cuenta371 = "Vehículos de reparto";
    var cuenta371Minuscula = "vehículos de reparto";
    var cuenta372 = "Ventas";
    var cuenta372Minuscula = "ventas";
    var cuenta373 = "Ventas por realizar";
    var cuenta373Minuscula = "ventas por realizar";
    var cuenta374 = "Viáticos";
    var cuenta374Minuscula = "viáticos";
    




    var resultado1 = "ACTIVO";
    var resultado2 = "PASIVO";
    var resultado3 = "GANANCIA";
    var resultado4 = "PERDIDA";
    var resultado5 = "DEBE";
    var resultado6 = "HABER";


    var libro1 = "BALANCE GENERAL";
    var libro2 = "ESTADO DE RESULTADOS";
    var libro3 = "COSTO DE PRODUCCION";


//Acciones adquiridas
if(informacion === cuenta2){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta2Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Acciones nus suscritas
else if(informacion === cuenta3){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta3Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Acciones por suscribir
else if(informacion === cuenta4){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta4Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Acciones suscritas
else if(informacion === cuenta5){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta5Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Acreedores
else if(informacion === cuenta6){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta6Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Acreedores hipotecarios
else if(informacion === cuenta7){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta7Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Acreedores a largo plazo
else if(informacion === cuenta8){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta8Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Acreedores por prendas en garantia per contra
else if(informacion === cuenta9){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta9Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//aguinaldo
else if(informacion === cuenta10){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta10Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Aguinaldo de administracion
else if(informacion === cuenta11){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta11Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Aguinaldos sala de ventas
else if(informacion === cuenta12){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta12Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Aguinaldos de fábrica
else if(informacion === cuenta13){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta13Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//almacen de envases
else if(informacion === cuenta14){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta14Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Alquileres cobrados
else if(informacion === cuenta15){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta15Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Alquileres ganados
else if(informacion === cuenta16){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta16Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Alquileres producto
else if(informacion === cuenta17){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta17Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Alquileres devengados
else if(informacion === cuenta18){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta18Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Alquileres percibidos
else if(informacion === cuenta19){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta19Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Alquileres cobrados por anticipado
else if(informacion === cuenta20){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta20Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Alquileres percibidos no devengados
else if(informacion === cuenta21){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta21Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Alquileres
else if(informacion === cuenta22){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta22Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Alquileres de oficinas
else if(informacion === cuenta23){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta23Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Alquileres sala de ventas
else if(informacion === cuenta24){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta24Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Alquileres de fabrica
else if(informacion === cuenta25){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta25Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Alquileres pagados por anticipado
else if(informacion === cuenta26){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta26Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Alquileres por pagar
else if(informacion === cuenta27){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta27Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Amortización crédito mercantil
else if(informacion === cuenta28){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta28Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Amortización derecho de llave 
else if(informacion === cuenta29){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta29Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Amortización gasto de constitución
else if(informacion === cuenta30){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta30Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Amortización gastos de instalación de fábrica
else if(informacion === cuenta31){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta31Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Amortización gastos de instalación sala de ventas
else if(informacion === cuenta32){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta32Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Amortización gastos de instalación de administración
else if(informacion === cuenta33){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta33Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Amortización gastos de instalación de oficina
else if(informacion === cuenta34){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta34Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Amortización gastos de organización
else if(informacion === cuenta35){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta35Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Amortización marcas y patentes de administración
else if(informacion === cuenta36){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta36Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Amortización marcas y patentes de fábrica
else if(informacion === cuenta37){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta37Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Amortización de pérdidas acumuladas
else if(informacion === cuenta38){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta38Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Amortización de pérdida de ejercicios anteriores
else if(informacion === cuenta39){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta39Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Amortización renombre comercial
else if(informacion === cuenta40){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta40Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Amortización de patentes
else if(informacion === cuenta41){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta41Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Amortizaciones acumuladas
else if(informacion === cuenta42){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta42Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Amortización
else if(informacion === cuenta43){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta43Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Anticipo de clientes
else if(informacion === cuenta44){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta44Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Anticipo sobre ventas
else if(informacion === cuenta45){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta45Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Anticipo a proveedores
else if(informacion === cuenta46){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta46Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Anticipo sobre compras
else if(informacion === cuenta47){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta47Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Anticipo sobre sueldos
else if(informacion === cuenta48){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta48Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Artículos en proceso inicial
else if(informacion === cuenta49){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta49Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Artículos en proceso final
else if(informacion === cuenta50){
    document.registro.obtenerDato.value = resultado6;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta50Minuscula){
document.registro.obtenerDato.value = resultado6;
    document.registro.obtenerDato2.value = libro3;
}
//Artículos terminados inicial
else if(informacion === cuenta51){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta51Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Artículos terminados final
else if(informacion === cuenta52){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta52Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Artículos enviados en consignación
else if(informacion === cuenta53){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta53Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Artículos recibidos en consignación
else if(informacion === cuenta54){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta54Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Bancos
else if(informacion === cuenta55){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta55Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Bonificación de administración
else if(informacion === cuenta56){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta56Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Bonificación de fábrica
else if(informacion === cuenta57){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta57Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Bonificación sala de ventas
else if(informacion === cuenta58){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta58Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Bonos comprados
else if(informacion === cuenta59){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta59Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Bonos emitidos
else if(informacion === cuenta60){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta60Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Bono 14
else if(informacion === cuenta61){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta61Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Bono 14 de fábrica
else if(informacion === cuenta62){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta62Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Bono 14 sala de ventas
else if(informacion === cuenta63){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta63Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Bono 14 administración
else if(informacion === cuenta64){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta64Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Bono 14 por pagar
else if(informacion === cuenta65){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta65Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Caja
else if(informacion === cuenta66){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta66Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Caja chica
else if(informacion === cuenta67){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta67Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Caja y bancos
else if(informacion === cuenta68){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta68Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Capital
else if(informacion === cuenta69){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta69Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Capital social
else if(informacion === cuenta70){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta70Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Capital autorizado
else if(informacion === cuenta71){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta71Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Clientes
else if(informacion === cuenta72){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta72Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Combustibles y lubricantes
else if(informacion === cuenta73){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta73Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Combustibles y lubricantes consumidos fábrica
else if(informacion === cuenta74){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta74Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Combustibles y lubricantes consumidos sala de ventas
else if(informacion === cuenta75){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta75Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Combustibles y lubricantes consumidos administración
else if(informacion === cuenta76){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta76Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Comisiones cobradas por anticipado
else if(informacion === cuenta77){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta77Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Comisiones percibidas no devengadas
else if(informacion === cuenta78){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta78Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Comisiones pagadas por anticipado
else if(informacion === cuenta79){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta79Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Comisiones gasto
else if(informacion === cuenta80){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta80Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Comisiones
else if(informacion === cuenta81){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta81Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Comisiones percibidas
else if(informacion === cuenta82){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta82Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Comisiones por cobrar
else if(informacion === cuenta83){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta83Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Comisiones ganadas
else if(informacion === cuenta84){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta84Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Comisiones producto
else if(informacion === cuenta85){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta85Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Comisiones devengadas
else if(informacion === cuenta86){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta86Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Comisiones por pagar
else if(informacion === cuenta87){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta87Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Comisiones sobre ventas
else if(informacion === cuenta88){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta88Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Comitentes por mercaderías
else if(informacion === cuenta89){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta89Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Crédito fiscal
else if(informacion === cuenta90){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta90Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Compras
else if(informacion === cuenta91){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta91Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Compras de materia prima
else if(informacion === cuenta92){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta92Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Compras de mercaderías
else if(informacion === cuenta93){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta93Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Construcciones
else if(informacion === cuenta94){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta94Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Corresponsales deudor
else if(informacion === cuenta95){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta95Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Corresponsales acreedor
else if(informacion === cuenta96){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta96Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Correo teléfono y telégrafos
else if(informacion === cuenta97){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta97Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Crédito mercantil
else if(informacion === cuenta98){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta98Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Créditos recuperados
else if(informacion === cuenta99){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta99Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Cristaleria
else if(informacion === cuenta100){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta100Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Cuentas por cobrar comerciales
else if(informacion === cuenta101){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta101Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Cuentas por cobrar no comerciales
else if(informacion === cuenta102){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta102Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Cuentas de difícil cobro
else if(informacion === cuenta103){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta103Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Cuentas dudosas
else if(informacion === cuenta104){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta104Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Cuentas incobrables
else if(informacion === cuenta105){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta105Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Cuentas malas
else if(informacion === cuenta106){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta106Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Cuentas por pagar
else if(informacion === cuenta107){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta107Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Cuentas por pagar comerciales
else if(informacion === cuenta108){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta108Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Cuentas por pagar no comerciales
else if(informacion === cuenta108_1){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta108_1Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Cuotas laborales
else if(informacion === cuenta109){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta109Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Cuotas laborales por pagar
else if(informacion === cuenta110){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta110Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Cuotas patronales fábrica
else if(informacion === cuenta111){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta111Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Cuotas patronales administración
else if(informacion === cuenta112){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta112Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Cuotas patronales sala de ventas
else if(informacion === cuenta113){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta113Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Cuotas patronales por pagar
else if(informacion === cuenta114){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta114Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Cuenta promesa
else if(informacion === cuenta115){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta115Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Débito fiscal
else if(informacion === cuenta116){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta116Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Depósitos en garantía
else if(informacion === cuenta117){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta117Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Depreciación construcción de fábrica
else if(informacion === cuenta118){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta118Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Depreciación construcción de oficina
else if(informacion === cuenta119){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta119Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Depreciación construcción sala de ventas
else if(informacion === cuenta120){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta120Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Depreciación edificios fábrica
else if(informacion === cuenta121){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta121Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Depreciación edificios oficinas
else if(informacion === cuenta122){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta122Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro1;
}
//Depreciación edificios sala de ventas
else if(informacion === cuenta123){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta123Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro1;
}
//Depreciación inmuebles oficina
else if(informacion === cuenta124){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta124Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro1;
}
//Depreciación inmuebles fábrica
else if(informacion === cuenta125){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta125Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Depreciación inmuebles sala de ventas
else if(informacion === cuenta126){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta126Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Depreciación herramientas
else if(informacion === cuenta127){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta127Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Depreciación maquinaria
else if(informacion === cuenta128){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta128Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Depreciación mobiliario y equipo fábrica
else if(informacion === cuenta129){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta129Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Depreciación mobiliario y equipo oficina
else if(informacion === cuenta130){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta130Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Depreciación mobiliario y equipo sala de ventas
else if(informacion === cuenta131){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta131Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Depreciación mobiliario y equipo
else if(informacion === cuenta132){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta132Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Depreciación de cristalería
else if(informacion === cuenta133){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta133Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Depreciación vehículos de reparto
else if(informacion === cuenta134){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta134Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Depreciación vehículos de fábrica
else if(informacion === cuenta135){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta135Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Depreciación vehículos oficina
else if(informacion === cuenta136){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta136Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Depreciación vehículos sala de ventas
else if(informacion === cuenta137){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta137Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Depreciación vehículos
else if(informacion === cuenta138){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta138Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Depreciación acumulada de todo activo
else if(informacion === cuenta139){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta139Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Derecho de llave
else if(informacion === cuenta140){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta140Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Descuentos concedidos
else if(informacion === cuenta141){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta141Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Descuentos sobre acciones
else if(informacion === cuenta142){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta142Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Descuentos sobre ventas
else if(informacion === cuenta143){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta143Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Descuentos sobre compras
else if(informacion === cuenta144){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta144Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Descuentos percibidos
else if(informacion === cuenta145){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta145Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Deudores
else if(informacion === cuenta146){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta146Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Deudores diversos
else if(informacion === cuenta147){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta147Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Deudores varios
else if(informacion === cuenta148){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta148Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Devoluciones y rebajas sobre ventas
else if(informacion === cuenta149){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta149Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Devoluciones y rebajas sobre compras
else if(informacion === cuenta150){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta150Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Devoluciones y rebajas sobre compras de materia prima
else if(informacion === cuenta151){
    document.registro.obtenerDato.value = resultado6;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta151Minuscula){
document.registro.obtenerDato.value = resultado6;
    document.registro.obtenerDato2.value = libro3;
}
//Dividendos percibidos
else if(informacion === cuenta152){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta152Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Dividendos no retirados o no pagados
else if(informacion === cuenta153){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta153Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Dividendos no retirados
else if(informacion === cuenta154){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta154Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Dividendos no pagados
else if(informacion === cuenta155){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta155Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Dividendos por pagar
else if(informacion === cuenta156){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta156Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Dividendos ganados
else if(informacion === cuenta157){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta157Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Dividendos por cobrar
else if(informacion === cuenta159){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta159Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Divisas adquiridas
else if(informacion === cuenta160){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta160Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Documentos por cobrar
else if(informacion === cuenta161){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta161Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Documentos por pagar
else if(informacion === cuenta162){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta162Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Documentos endosados
else if(informacion === cuenta163){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta163Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Documentos descontados
else if(informacion === cuenta164){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta164Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Documentos por cobrar descontados
else if(informacion === cuenta165){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta165Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Documentos por pagar a largo plazo
else if(informacion === cuenta166){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta166Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Donativos
else if(informacion === cuenta167){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta167Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Donativos pagados
else if(informacion === cuenta168){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta168Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Donativos por pagar
else if(informacion === cuenta169){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta169Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Donativos percibidos
else if(informacion === cuenta170){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta170Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Edificios
else if(informacion === cuenta171){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta171Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Efectos descontados
else if(informacion === cuenta172){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta172Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Efectos endosados
else if(informacion === cuenta173){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta173Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Efectos por cobrar
else if(informacion === cuenta174){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta174Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Efectos por pagar
else if(informacion === cuenta175){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta175Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Efectos por pagar a largo plazo
else if(informacion === cuenta176){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta176Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Energía eléctrica de fábrica
else if(informacion === cuenta177){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta177Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Energía eléctrica de oficina
else if(informacion === cuenta178){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta178Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Energía eléctrica sala de ventas
else if(informacion === cuenta179){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta179Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Energía eléctrica
else if(informacion === cuenta180){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta180Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Envases en departamento de producción
else if(informacion === cuenta180_1){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta180_1Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Equipo de computación
else if(informacion === cuenta181){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta181Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Equipo de reparto
else if(informacion === cuenta182){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta182Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Especies fiscales
else if(informacion === cuenta183){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta183Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Estimación para cuentas incobrables
else if(informacion === cuenta184){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta184Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Estimación para cuentas malas
else if(informacion === cuenta185){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta185Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Estimación para cuentas dudosas
else if(informacion === cuenta186){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta186Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Estimación para cuentas de difícil cobro
else if(informacion === cuenta187){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta187Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Faltante de caja
else if(informacion === cuenta188){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta188Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Fletes sobre compras
else if(informacion === cuenta189){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta189Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Fletes sobre compras de materia prima
else if(informacion === cuenta190){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta190Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Fletes
else if(informacion === cuenta191){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta191Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Fórmulas patentadas
else if(informacion === cuenta192){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta192Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Ganancia antes del impuesto
else if(informacion === cuenta193){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta193Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Ganancia antes de impuestos y reservas
else if(informacion === cuenta194){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta194Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Ganancia antes de reservas
else if(informacion === cuenta195){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta195Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Ganancia después del impuesto
else if(informacion === cuenta196){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta196Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Ganancia después del impuesto y reservas
else if(informacion === cuenta197){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta197Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Ganancia después de reservas
else if(informacion === cuenta198){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta198Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Ganancia en negociación de activos
else if(informacion === cuenta199){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta199Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Ganancia en venta de activos
else if(informacion === cuenta200){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta200Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Gastos de organización
else if(informacion === cuenta201){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta201Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Gastos de instalación
else if(informacion === cuenta202){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta202Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Gastos de instalación fábrica
else if(informacion === cuenta203){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta203Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Gastos diversos de fábrica
else if(informacion === cuenta204){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta204Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Gastos diversos de administración
else if(informacion === cuenta205){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta205Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Gastos diversos sala de ventas
else if(informacion === cuenta206){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta206Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Gastos misceláneos de fábrica
else if(informacion === cuenta207){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta207Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Gastos misceláneos de oficina
else if(informacion === cuenta208){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta208Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Gastos misceláneos sala de ventas
else if(informacion === cuenta209){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta209Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Gastos publicitarios
else if(informacion === cuenta210){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta210Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Gastos sobre compras
else if(informacion === cuenta212){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta212Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Gastos sobre compras de materia prima
else if(informacion === cuenta213){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta213Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Grasas y aceites
else if(informacion === cuenta214){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta214Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Grasas y aceites consumidos fábrica
else if(informacion === cuenta215){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta215Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Grasas y aceites consumidos sala de ventas
else if(informacion === cuenta216){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta216Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Herramientas
else if(informacion === cuenta217){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta217Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Hipotecas
else if(informacion === cuenta218){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta218Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//IGSS por pagar
else if(informacion === cuenta219){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta219Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//IGSS laboral
else if(informacion === cuenta220){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta220Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//IGSS
else if(informacion === cuenta222){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta222Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Impuestos aduanales sobre compras
else if(informacion === cuenta223){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta223Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Impuestos aduanales sobre compras de materia prima
else if(informacion === cuenta224){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta224Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Impuestos y contribuciones fábrica
else if(informacion === cuenta225){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta225Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Impuestos y contribuciones administración
else if(informacion === cuenta226){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta226Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Impuestos y contribuciones sala de ventas
else if(informacion === cuenta227){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta227Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Impuestos sobre inmuebles fábrica
else if(informacion === cuenta228){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta228Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Impuestos sobre inmuebles sala de ventas
else if(informacion === cuenta229){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta229Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Impuestos sobre inmuebles oficina
else if(informacion === cuenta230){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta230Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Impuestos y contribuciones por pagar
else if(informacion === cuenta231){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta231Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Impuesto sobre inmuebles por pagar
else if(informacion === cuenta232){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta232Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Impuesto sobre la renta por pagar
else if(informacion === cuenta233){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta233Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Impuesto sobre la renta pagado por anticipado
else if(informacion === cuenta234){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta234Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Impuesto a las empresas mercantiles pagado por anticipado
else if(informacion === cuenta235){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta235Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Impuesto sobre la renta retenido
else if(informacion === cuenta236){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta236Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Indemnizaciones fábrica
else if(informacion === cuenta237){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta237Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Indemnizaciones administración
else if(informacion === cuenta238){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta238Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Indemnizaciones sala de ventas
else if(informacion === cuenta239){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta239Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Inmuebles
else if(informacion === cuenta240){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta240Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Intereses gasto
else if(informacion === cuenta241){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta241Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Intereses por cobrar
else if(informacion === cuenta242){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta242Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Intereses percibidos no devengados
else if(informacion === cuenta243){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta243Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Intereses cobrados por anticipado
else if(informacion === cuenta244){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta244Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Intereses pagados por anticipado
else if(informacion === cuenta245){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta245Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Intereses devengados
else if(informacion === cuenta246){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta246Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Intereses ganados
else if(informacion === cuenta247){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta247Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Intereses producto
else if(informacion === cuenta248){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta248Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Intereses por pagar
else if(informacion === cuenta249){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta249Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Inventario inicial de mercaderías
else if(informacion === cuenta250){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta250Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Inventario inicial de artículos en proceso
else if(informacion === cuenta251){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta251Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Inventario inicial de artículos terminados
else if(informacion === cuenta252){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta252Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Inventario inicial de materia prima
else if(informacion === cuenta253){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta253Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Inventario final de mercaderías
else if(informacion === cuenta254){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta254Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Inventario final de artículos en proceso
else if(informacion === cuenta255){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta255Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Inventario final de artículos terminados
else if(informacion === cuenta256){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta256Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Inventario final de matería prima
else if(informacion === cuenta257){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta257Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Inversiones
else if(informacion === cuenta258){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta258Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Inversiones en valores
else if(informacion === cuenta259){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta259Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//IVA acreditable
else if(informacion === cuenta260){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta260Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//IVA por acreditar
else if(informacion === cuenta261){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta261Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//IVA por cobrar
else if(informacion === cuenta262){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta262Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//IVA deudor
else if(informacion === cuenta263){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta263Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//IVA debitable
else if(informacion === cuenta264){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta264Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//IVA por debitar
else if(informacion === cuenta265){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta265Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//IVA por pagar
else if(informacion === cuenta266){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta266Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//IVA acreedor
else if(informacion === cuenta267){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta267Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Mano de obra directa
else if(informacion === cuenta268){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta268Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Mano de obra indirecta
else if(informacion === cuenta269){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta269Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Maquinaria
else if(informacion === cuenta270){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta270Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Marcas y patentes
else if(informacion === cuenta271){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta271Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Materia prima inicial
else if(informacion === cuenta272){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta272Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Materia prima final
else if(informacion === cuenta273){
    document.registro.obtenerDato.value = resultado6;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta273Minuscula){
document.registro.obtenerDato.value = resultado6;
    document.registro.obtenerDato2.value = libro3;
}
//Materia prima estropeada
else if(informacion === cuenta274){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta274Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Materia prima inservible
else if(informacion === cuenta275){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta275Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Materia prima destruida
else if(informacion === cuenta276){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta276Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Materia prima en aduana
else if(informacion === cuenta277){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta277Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Materia prima en tránsito
else if(informacion === cuenta278){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta278Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Material de empaque
else if(informacion === cuenta279){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta279Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Material de empaque consumido
else if(informacion === cuenta280){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta280Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Material de empaque consumido fábrica
else if(informacion === cuenta281){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta281Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Mercaderías enviadas en consignación
else if(informacion === cuenta282){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta282Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Mercaderías inicial
else if(informacion === cuenta283){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta283Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Mercaderías final
else if(informacion === cuenta284){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta284Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Mercaderías en tránsito o en camino
else if(informacion === cuenta285){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta285Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Mercaderías recibidas en consignación
else if(informacion === cuenta286){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta286Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Mercaderías en aduana
else if(informacion === cuenta287){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta287Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Mercadeías
else if(informacion === cuenta288){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta288Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Mobiliario y equipo
else if(informacion === cuenta289){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta289Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Multas y recargos
else if(informacion === cuenta290){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta290Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Mercaderías ajenas
else if(informacion === cuenta291){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta291Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Papelería y utiles
else if(informacion === cuenta291_1){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta291_1Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Papelería y utiles consumidos
else if(informacion === cuenta292){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta292Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Patentes
else if(informacion === cuenta293){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta293Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Pérdidas acumuladas
else if(informacion === cuenta294){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta294Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Pérdida de ejercicios anteriores
else if(informacion === cuenta295){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta295Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Pérdida del ejercicio
else if(informacion === cuenta296){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta296Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Pérdida en negociación de activos
else if(informacion === cuenta297){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta297Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Pérdida en venta de activos
else if(informacion === cuenta298){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta298Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Premios de lotería
else if(informacion === cuenta299){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta299Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Prendas en garantía
else if(informacion === cuenta300){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta300Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Prestaciones laborales fábrica
else if(informacion === cuenta301){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta301Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Prestaciones laborales de administración
else if(informacion === cuenta302){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta302Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Prestaciones laborales sala de ventas
else if(informacion === cuenta303){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta303Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Préstamos bancarios
else if(informacion === cuenta304){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta304Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Primas de seguro
else if(informacion === cuenta305){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta305Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Primas de seguro vencidas
else if(informacion === cuenta306){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta306Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Primas de seguro vencidas fábrica
else if(informacion === cuenta307){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta307Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Primas de seguro vencidas administración
else if(informacion === cuenta308){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta308Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Primas de seguro vencidas sala de ventas
else if(informacion === cuenta309){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta309Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Primas de seguro no vencidas
else if(informacion === cuenta310){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta310Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Primas sobre acciones
else if(informacion === cuenta311){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta311Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Productos percibidos no devengados
else if(informacion === cuenta312){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta312Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Productos por cobrar
else if(informacion === cuenta313){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta313Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Propaganda
else if(informacion === cuenta314){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta314Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Proveedores
else if(informacion === cuenta315){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta315Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Proveeduría
else if(informacion === cuenta316){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta316Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Provisión para cuentas incobrables
else if(informacion === cuenta317){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta317Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Publicidad
else if(informacion === cuenta318){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta318Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Propaganda pagada por anticipado
else if(informacion === cuenta319){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta319Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Publicidad pagada por anticipado
else if(informacion === cuenta320){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta320Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Recuperación de créditos
else if(informacion === cuenta321){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta321Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Regalías
else if(informacion === cuenta322){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta322Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Regalías percibidas
else if(informacion === cuenta323){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta323Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Renombre comercial
else if(informacion === cuenta324){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta324Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Reparación y mantenimiento de maquinaria
else if(informacion === cuenta325){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta325Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Reparación y mantenimiento de vehículos
else if(informacion === cuenta326){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta326Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Repuestos y accesorios
else if(informacion === cuenta327){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta327Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Repuestos y accesorios consumidos
else if(informacion === cuenta328){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta328Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Reserva legal
else if(informacion === cuenta329){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta329Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Reserva para cuentas incobrables
else if(informacion === cuenta330){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta330Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Reserva para cuentas malas
else if(informacion === cuenta331){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta331Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Reserva para cuentas morosas
else if(informacion === cuenta332){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta332Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Reserva para cuentas de difícil cobro
else if(informacion === cuenta333){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta333Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Reserva para indemnizaciones
else if(informacion === cuenta334){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta334Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Retenciones laborales
else if(informacion === cuenta335){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta335Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Retención del impuesto sobre la renta
else if(informacion === cuenta336){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta336Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Retención ISR
else if(informacion === cuenta337){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta337Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Seguros
else if(informacion === cuenta338){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta338Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Seguros anticipados
else if(informacion === cuenta339){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta339Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Seguros pagados por anticipado
else if(informacion === cuenta340){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta340Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Seguros no vencidos
else if(informacion === cuenta341){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta341Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Seguros vencidos
else if(informacion === cuenta342){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta342Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Seguros vencidos de fábrica
else if(informacion === cuenta343){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta343Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Seguros vencidos de administración
else if(informacion === cuenta344){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta344Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Seguros vencidos sala de ventas
else if(informacion === cuenta345){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta345Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Señor x cuenta personal
else if(informacion === cuenta346){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta346Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Señor x cuenta particular
else if(informacion === cuenta347){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta347Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Socio x cuenta personal deudor
else if(informacion === cuenta348){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta348Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Socio x cuenta personal acreedor
else if(informacion === cuenta348_1){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta348_1Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Socio x cuenta particular deudor
else if(informacion === cuenta349){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta349Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Socio x cuenta particular acreedor
else if(informacion === cuenta349_1){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta349_1Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Socio x cuenta promesa
else if(informacion === cuenta350){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta350Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Sobrantes de caja
else if(informacion === cuenta351){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta351Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Sueldos de administración
else if(informacion === cuenta352){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta352Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Sueldos sala de ventas
else if(informacion === cuenta353){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta353Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Sueldos de vendedores
else if(informacion === cuenta354){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta354Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Sueldos pagados por anticipado
else if(informacion === cuenta355){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta355Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Sueldos por pagar
else if(informacion === cuenta356){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta356Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Suministros
else if(informacion === cuenta357){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta357Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Suministros consumidos fábrica
else if(informacion === cuenta358){
    document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}else if(informacion === cuenta358Minuscula){
document.registro.obtenerDato.value = resultado5;
    document.registro.obtenerDato2.value = libro3;
}
//Suministros consumidos de oficina
else if(informacion === cuenta359){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta359Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Suministros consumidos sala de ventas
else if(informacion === cuenta360){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta360Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Superávit acumulado
else if(informacion === cuenta361){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta361Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Suscriptores de acciones
else if(informacion === cuenta362){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta362Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Terrenos
else if(informacion === cuenta363){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta363Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Utiles y enseres
else if(informacion === cuenta364){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta364Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Utiles y enseres consumidos
else if(informacion === cuenta365){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta365Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//Utilidad del ejercicio
else if(informacion === cuenta366){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta366Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Utilidades no distribuidas
else if(informacion === cuenta367){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta367Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Utilidad por distribuir
else if(informacion === cuenta368){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta368Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Valores mobiliarios
else if(informacion === cuenta369){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta369Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Vehículos
else if(informacion === cuenta370){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta370Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Vehículos de reparto
else if(informacion === cuenta371){
    document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta371Minuscula){
document.registro.obtenerDato.value = resultado1;
    document.registro.obtenerDato2.value = libro1;
}
//Ventas
else if(informacion === cuenta372){
    document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta372Minuscula){
document.registro.obtenerDato.value = resultado3;
    document.registro.obtenerDato2.value = libro2;
}
//Ventas por realizar
else if(informacion === cuenta373){
    document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}else if(informacion === cuenta373Minuscula){
document.registro.obtenerDato.value = resultado2;
    document.registro.obtenerDato2.value = libro1;
}
//Viáticos
else if(informacion === cuenta374){
    document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}else if(informacion === cuenta374Minuscula){
document.registro.obtenerDato.value = resultado4;
    document.registro.obtenerDato2.value = libro2;
}
//si no se encuentra la cuenta
else{
    document.registro.obtenerDato.value = "no se encontro";
    document.registro.obtenerDato2.value = "no se encontro";
}

}

