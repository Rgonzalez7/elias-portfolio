/* El motor de The Pocket: scroll, viñetas, globos, el chibi y los capítulos.
   Es el script original del HTML, envuelto para arrancarlo desde React una sola vez. */
let arrancado = false;
export function iniciarMotor() {
  if (arrancado) return;
  arrancado = true;

const T={
 es:{lang:"EN",ctTitle:"EL CONTRATO",ct1:"Si logro que llegues al final de este manga, me escribes. Aunque sea para decir hola.",ct2:"O para quejarte de que te hice gastar 5 minutos de tu vida. Eso también cuenta.",ct3:"Llegar al final y no escribir es legalmente de mala educación. (No soy abogado.)",ctSign:"Firma: el lector",ctOk:"Firmar",ctAlt:"¿Tengo opción?",ctNo:"No.",
  chapter:"CAPÍTULO 2",name:"LA SERVILLETA",dim:"1 servilleta",hint:"Haz scroll. Es literalmente la única instrucción.",
  nar1:"En algún lugar. Un café. Está a punto de nacer una idea terrible.",no:"No. Otra vez no.",
  p1:"Este lápiz ha dibujado 47 apps. No ha terminado ninguna.",p2:"Todas empiezan igual: una idea, un café y demasiada confianza.",p3:"El problema nunca es la idea. Es todo lo que viene después.",p4:"Por eso existo yo. Bueno, por eso y por el café.",there:"Y ahí está. La culpable.",
  n1:"Una servilleta. Ahí empiezan casi todas las apps.",n2:"Un rectángulo, tres botones y una flecha que dice «aquí va algo importante».",n3:"Lo dibujaste en dos minutos. Construirlo es otra historia.",n4:"Ahí entro yo: convierto servilletas en apps que la gente abre de verdad.",n5:"Guárdala. Todavía la vamos a necesitar.",
  gag1:"Espera. El manga se lee de derecha a izquierda.",gag2:"Es broma. Aquí somos fans del alfabeto latino. De izquierda a derecha, de arriba abajo. No hagas scroll de lado.",
  who:"¿Quién eres? Elige uno. Sin presión. Bueno, un poco.",c_business:"Tengo un negocio",c_founder:"Estoy creando un producto",c_3d:"Solo vine por el 2,5D",
  nag0:"Tienes que escoger una opción. Sí, es obligatorio. No, no hay botón de saltar.",nag1:"Elige una. Prometo no juzgarte. Mucho.",nag2:"El scroll no se mueve hasta que elijas. Lo siento, aquí mando yo.",nag3:"Son literalmente tres botones. Tú puedes.",
  r_business:"Bien. Gente con dinero.",r_founder:"Valiente. O sin un peso. Ya veremos.",r_3d:"Honesto. Lo respeto. Raro, pero lo respeto.",
  q0_business:"Un negocio. Perfecto: tus clientes ya tienen el móvil en la mano.",q0_founder:"Un producto. Perfecto: una demo que funciona convence más que cien diapositivas.",q0_3d:"Vale. Para ti hay capas. Muchas capas.",
  q1:"Ya sé quién eres. Tú todavía no sabes quién soy yo.",q2:"Spoiler: el tipo que dibuja en servilletas y después las convierte en apps.",q3:"Pero antes, la servilleta. ¿Te acuerdas? Te dije que la guardaras.",q4:"Las buenas ideas no se tiran. Se doblan y van al bolsillo.",pk2:"Ahí se queda, calentita, hasta que le llegue su momento.",who0:"Pero antes de seguir, tienes que decirme quién eres.",who0b:"Es para personalizar tu experiencia. Suena a empresa grande, ¿no? Somos yo y un café.",
  tbc:"Continúa en el capítulo 3. Sí, dentro de un bolsillo.",end:"Fin. Nueve capítulos, un contrato firmado y un chibi esperando. Te toca.",
    tr1x:"Shh. No hagas ruido. Nos vamos a meter en un bolsillo.",tr4x:"¿Quieres ver cómo se vería? Justo tengo seis ejemplos.",tr5x:"Esta puerta la abro yo. Y te pido un favor: lee despacio.",
  ftag:"Tu negocio, siempre en el bolsillo de tu cliente.",fh1:"El manga",fh2:"Proyectos",fh3:"En otra parte",fTop:"Volver al contrato",fMenu:"Índice de capítulos",fWrite:"Escríbeme",
  dLegal:"Aviso legal",dPrivacy:"Política de privacidad",dCookies:"Política de cookies",close:"Cerrar",fcopy:"© 2026 Elias González. Dibujado a mano, programado a mano. Ningún pelo fue cortado en el proceso.",
  chapter10:"CAPÍTULO 8",name10:"LA|LLAMADA",dim10:"4 preguntas. Cero formularios eternos.",
  y1n:"Escríbeme. Respondo más rápido que tu último developer. La vara está baja, lo sé.",l102:"Nada de formularios de veinte campos. Cuatro preguntas y listo.",
  l103:"Te respondo en 24–48 h. Si hoy no te animas, el chat te espera aquí.",l104:"…¿Sigues aquí? Hay un capítulo más. Pero ese te lo tienes que ganar.",
  c10tbc:"Siguiente: capítulo 9. ???",
  cpick:"Buen gusto: {N}. Anotado.",cq_founder:"¿Qué estás construyendo?",cq_business:"¿Qué vende tu negocio?",cname:"Bien. ¿Y con quién tengo el gusto?",
  cmail:"Un email, para demostrarte que respondo rápido.",cbad:"Eso no parece un email. Soy sarcástico, no adivino.",cbud:"¿Presupuesto? Opcional. «Ni idea» es una respuesta válida.",
  cnobud:"¿Sin presupuesto? Valiente. Hablamos.",cbudok:"Anotado. No te juzgo. En voz alta.",cready:"Listo. Dale a «Enviarlo» y se abre tu app de correo con todo rellenado.",
  cdone:"Recibido. Te respondo en 24–48 h. Ve a tomar agua.",ph:"Escribe aquí…",msgLabel:"Tu mensaje",send:"Enviar",skip:"Saltar",sendmail:"Enviarlo",cagain:"Empezar de nuevo",
  mWhat:"Qué",mSvc:"Servicio",mName:"Nombre",mBudget:"Presupuesto",mRoute:"Ruta",mSubj:"Desde el manga",
  chapter11:"CAPÍTULO 9",name11:"ESCENA|POSTCRÉDITOS",dim11:"Te quedaste. Respeto.",
  z1:"¿Sigues aquí? Esto es una escena postcréditos. Solo la ve el 3% de la gente.",z2:"El otro 97% ya me escribió. Es broma. Todavía no me ha escrito nadie.",z3:"¿Te acuerdas de la servilleta del capítulo 2? Mírala ahora.",
  z5:"Del garabato a una app de verdad. Mismo café. Otro final.",z6:"Esto es lo que pasa cuando una mala idea se encuentra con alguien terco.",z7:"Si no escribes, no pasa nada grave. Solo que él se queda aquí esperando. Para siempre. Sin pestañear.",
  final:"Cláusula 1 del contrato: si llegas al final, me escribes. Llegaste. Lo firmaste. Hay testigos (yo).",
  write:"Cumplir el contrato",z4:"Continuará… en mi bandeja de entrada.",
  w101:"El teléfono suena sobre la mesa de dibujo",w102:"Llamada entrante · ¿TÚ?",w111:"La servilleta otra vez, con el edificio que quería dibujar de niño",
  chapter9:"CAPÍTULO 7",name9:"ELIGE TU|VENENO",dim9:"3 frascos. Sin letra pequeña.",
  x91:"Elige tu veneno.",x92:"Tres frascos. Nada de «contáctanos para precios». Eres adulto.",x93:"El orden depende de lo que me dijiste en el capítulo 2. Sí, me acuerdo.",
  x94:"Cada frasco dice lo que trae. Sin asteriscos.",x95:"Si dudas entre dos, escríbeme. Para eso está el capítulo 8.",
  x96:"Efectos secundarios: un producto de verdad.",x97:"Y no, no hay frasco de «hazlo gratis y te doy visibilidad».",
  x98:"¿Oyes eso? Alguien está llamando.",c9tbc:"Siguiente: capítulo 8. Escríbeme. Respondo más rápido que tu último developer.",
  uncork:"DESTAPAR",pick:"Este mismo",keep:"Sigo mirando",
  bpN:"EL PLANO",bpP:"DESDE $3.500",bpQ:"Tengo una idea (y una servilleta)",bpL:"Discovery: lo que quieres vs. lo que de verdad necesitas|Alcance, pantallas y arquitectura en papel|Un presupuesto real. Sin sorpresas después",
  mvN:"EL MVP",mvP:"DESDE $6.500 · 10–21 DÍAS",mvQ:"Construye la cosa",mvL:"Diseño y construcción de la primera versión real|Web y/o móvil, desplegada y funcionando|Entrega con código y documentación. Es tuyo",
  m1N:"MINIMAL ONE",m1P:"DESDE $29 / MES",m1Q:"Ponme en su bolsillo",m1L:"Tu negocio como app que tus clientes instalan|Web y panel de administración incluidos|Plan Esencial hoy; los demás en 3–5 semanas",
  w91:"La estantería del boticario",w92a:"Frasco 1",w92b:"Frasco 2",w92c:"Frasco 3",w95:"Llamada entrante · ¿TÚ?",
  chapter8:"CAPÍTULO 1",name8:"EL|ORIGEN",dim8:"Pasado trágico. Incluye cortes de pelo.",
  o1:"¿Quién es este tipo? Buena pregunta. Todo protagonista tiene un pasado trágico. Este es el mío.",o2:"De niño quería ser arquitecto.",
  o3:"Edificios. Puentes. Una casa del árbol con ascensor.",o4:"Mis padres tenían otros planes. Querían un pastor.",o5:"Además: nada de pelo largo. Innegociable.",
  o6:"Así que no fui ni pastor ni arquitecto. Fui ingeniero. Ahora le rezo al código para que compile.",
  y1:"2011",tt1:"Director de TI. Título elegante, presupuesto diminuto.",y2:"2014",tt2:"Enseñé robótica a niños. Los clientes más difíciles que he tenido.",
  y3:"2020",tt3:"Profesor de ingeniería. Califiqué cientos de proyectos. Ahora construyo los que aprueban.",y4:"2022",tt4:"Programé para los tribunales. Me porté bien. Casi siempre.",
  y5:"2024",tt5:"PM en construcción. Aprendí que «dos semanas» no significa nada.",y6:"EN CURSO",tt6:"También estoy haciendo una maestría. Sí, mientras hago todo esto. Manden café.",
  y7:"HOY",tt7:"España. Haciendo apps. Todavía adaptándome a cenar a las 10.",
  o7:"Técnicamente ahora soy arquitecto. De software. Y predico código limpio a clientes que no escuchan. Casi lo mismo.",
  o8:"Y sí, ahora tengo el pelo largo. En el manga, por lo menos. Paso a paso.",o9:"Pero esta historia no va de mí. Va de una servilleta.",o10:"Y de una idea que, como casi todas, empezó en un café.",c8tbc:"Siguiente: capítulo 2. La servilleta.",
  w81:"Flashback · el niño dibujando edificios",w82:"Los padres, enormes, y las tijeras",w83:"El ingeniero con ganas de comerse el mundo",w84:"La línea de tiempo, año por año",w85:"Hoy · España, arquitecto de software",
  chapter7:"CAPÍTULO 6",name7:"NOTIFICACIONES",dim7:"Muchas. No son tuyas. Todavía.",
  w7a:"De vuelta en el bolsillo. Misma oscuridad, misma pelusa. Pero ahora tu app vive aquí.",w7b:"Giro de guion: entrar al bolsillo es lo fácil.",
  w7c:"Lo difícil es que la abran. Aquí viven un montón de apps sin pagar alquiler. Nadie las abre. Nadie las extraña.",w7d:"El truco no es estar ahí. Es destacar. Como mi magnífico pelo.",
  c7T_business:"TU NEGOCIO",c7B_business:"Tu pedido está listo.",c7T_founder:"TU APP",c7B_founder:"Tu app acaba de tener su primer usuario.",
  tagline:"Tu negocio, siempre en el bolsillo de tu cliente.",fin:"Por fin.",
  w7e:"Sí, ese soy yo. Con cara y todo. Se acabó el misterio.",w7f:"Mis padres dijeron nada de pelo largo. Creció igual.",
  w7g:"Tus clientes pueden jurar que no necesitan otra app. Misma energía. Se van a enterar de ti igual.",
  w7h:"Solo necesitas una idea distinta a la que ya tienes. Mentira. Todavía no me la has contado.",
  w7i:"Ahora, lo que nadie ve: todo lo que hay que construir para que esa notificación llegue.",
  c7tbc:"Siguiente: capítulo 4. Parece fácil. No lo es.",
  w71:"Dentro del bolsillo del cliente · a color",w72:"El arquitecto de espaldas, el pelo al viento · a color",w73:"El teléfono brilla: ya está dentro · a color",w74:"El compás corta el aire · a color",
  chapter6:"CAPÍTULO 6",name6:"ASUNTO|SERIO",dim6:"1 producto real",
  g61:"Esta es Güibbo: práctica clínica con IA. Ningún paciente real sale traumatizado.",g62:"Una sesión de práctica: un estudiante y un paciente simulado.",
  g63:"Cada palabra se convierte en texto, en tiempo real.",live:"TRANSCRIPCIÓN EN VIVO",
  tr1:"ESTUDIANTE: ¿Cómo ha sido esta semana?",tr2:"PACIENTE: Cansada. Siempre voy atrasada.",tr3:"ESTUDIANTE: ¿Atrasada en qué, sobre todo?",tr4:"PACIENTE: En todo. Trabajo, casa…",tr5:"ESTUDIANTE: Suena agotador.",
  g64:"Así se practica antes de sentarse frente a una persona real.",g65:"Después la IA da feedback: fortalezas, qué mejorar y qué probar después.",
  fb1t:"FORTALEZA",fb1:"Pregunta abierta. Bien.",fb2t:"A MEJORAR",fb2:"Interrumpiste en el 03:12.",fb3t:"PRUEBA",fb3:"Refleja primero la emoción.",
  g66:"Las capturas van difuminadas. Este producto es privado.",priv:"PRIVADO",g67:"Esta no lleva chistes. Lleva resultados.",u5btn:"Pedir demo",
  g68:"Bueno. Se acabó lo serio. Volvemos al bolsillo.",g69:"Ya. Puedes volver a respirar.",g6a:"Prometí cero chistes y lo cumplí. Casi. Bueno, no.",g6b:"Ya sabes de dónde vengo y lo que construyo. Falta lo más incómodo: hablar de dinero.",c6tbc:"Siguiente: capítulo 7. Elige tu veneno.",
  w61:"Sala de práctica de noche · ventana con luna",w62:"La onda de la voz y la transcripción en vivo",w63:"El feedback de la IA después de la sesión",w64:"Capturas de Güibbo, difuminadas",
  chapter5:"CAPÍTULO 6",name5:"MINIMAL|ONE",dim5:"6 negocios falsos. Ellos todavía no lo saben.",
 v51:"Negocio real número 1: Minimal One. Es mi otra empresa. Sí, tengo dos. No, no duermo mucho.",mo1:"Es mi otra empresa. Sí, tengo dos. No, no duermo mucho.",
  mo2:"Minimal One le da a cada negocio su propia web y su propia app. Con su logo, sus colores y su forma de hablar.",
  pc1t:"LA WEB",pc1:"Para que te encuentren y sepan qué ofreces.",pc2t:"LA APP",pc2:"Pedidos, reservas y puntos. Tus clientes la guardan en el teléfono.",
  pc3t:"EL PANEL",pc3:"Todo ordenado para tu equipo, en vez de perdido en el chat.",
  mo4:"Sin App Store ni Google Play. Se instala desde el navegador. Apple todavía no se ha enterado.",
  v52:"Más de 10 negocios reales ya la usan. Te enseñaría los suyos, pero firmaron cosas.",v53:"Así que inventamos seis. Al menos lo intentamos. Entra, funcionan.",
  molink:"Conoce Minimal One",mo5:"¿Quieres ver cómo funciona por dentro? Tiene su propia página. Sí, también la hice yo.",mo6:"Negocio real número 2. Este va en serio. Bueno… casi en serio.",w51b:"Minimal One: la web, la app y el panel, con la marca del negocio",
 v54:"Tienen menú, reservas y puntos. Lo único falso es el café.",v55:"Si alguno se parece a tu negocio, es pura coincidencia. O una señal.",
  walk:"ENTRA",dm1:"Café para gente que se niega a correr.",dm2:"20 minutos. La charla incómoda la pones tú.",dm3:"El tiempo que te regalas. Reservado en 3 toques.",
  dm4:"Pan con problemas de paciencia. De los buenos.",dm5:"Una hora en la que nadie te encuentra.",dm6:"Como la de la abuela. Con menos platos que lavar.",
  gagN:"Abriste {n} de 6. Las otras {m} están ofendidas. Solo digo.",gag6:"Abriste las seis. O te interesa o estás procrastinando. Las dos me sirven.",
 v56:"Y al final de la calle…",v57:"…hay una puerta que no es demo.",mat:"SOLO PERSONAL. Prohibido bromear a partir de aquí.",
  c5tbc:"Siguiente: capítulo 6. El capítulo serio. Sin chistes. Lo prometo.",
  dbt1:"MENÚ",dbt2:"RESERVAR",dbt3:"PUNTOS",dlink:"Verla en Minimal One",dclose:"Salir de la tienda",
  w51:"La calle de demos · seis tiendas en fila",w58:"La puerta de Güibbo · SOLO PERSONAL",
  chapter4:"CAPÍTULO 6",name4:"NEGOCIOS|REALES",dim4:"Sin chistes. Nah, sí hay chistes.",
  m1:"Aun así, así se ve un bolsillo un jueves por la mañana…",st1:"Todas quieren atención. Ninguna es tuya. Todavía.",n0T:"1 NOTIFICACIÓN NUEVA",n0B:"…y 47 más. Agárrate.",
  m3:"Y cuando todas se callan… solo hace falta una.",m4:"¿Y qué tienen todos en común? Viven dentro de lo mismo.",
  nf1T:"CAFETERÍA",nf1B:"Tu pedido está listo. Quema, cuidado.",nf2T:"BARBERÍA",nf2B:"Turno confirmado: sábado, 10:30.",
  nf3T:"PANADERÍA",nf3B:"+1 sello. Van 7 de 10. Cruasán gratis pronto.",nf4T:"GIMNASIO",nf4B:"Clase mañana, 7 a.m. Sí, de la mañana.",
  m5:"Más de 10 negocios reales ya viven en el bolsillo de sus clientes. Reales. Con impuestos y todo.",m6:"¿Que cuántos exactamente?",
  m8:"(Y contando. Lo actualizo, lo juro por mi teclado.)",
  m10:"¿Quiénes son? No te puedo decir. A ellos les gusta su privacidad.",m11:"A mí me gusta que me paguen. Todos ganamos.",
  m12:"Ahora imagina el tuyo.",openT:"ABIERTO AHORA",openB:"Pasa. Haz como que solo estás mirando.",
  m14:"Tu negocio. Siempre en el bolsillo de tu cliente.",c4tbc:"Siguiente: capítulo 6. Minimal One. Seis negocios falsos, casi de verdad.",
  w41:"Un teléfono y una notificación amarilla",w42:"Lluvia de notificaciones de negocios reales",w43:"El cuaderno: el 9 tachado, el 10+ resaltado",w44:"Notificaciones censuradas",w45:"La vitrina con forma de teléfono: tu negocio",
  chapter3:"CAPÍTULO 4",name3:"PARECE FÁCIL. NO LO ES.",dim3:"40.000 decisiones",
  s31:"Paso uno: que parezca fácil.",s32:"Paso dos: no contarle a nadie lo difícil que fue.",s33:"Esto es lo que ve tu cliente. Un dibujo bonito.",
  s34:"Lo que no ve es lo que hay debajo.",s35:"Déjame enseñarte lo que hay dentro. Tranquilo, no da asco.",
  s36:"Toda app tiene tres capas. Como una cebolla, pero se llora menos. Casi siempre.",s37:"Vamos una por una.",
  L1:"La cara (UX y diseño): lo que tus usuarios tocan. Y juzgan. En medio segundo.",L1b:"Si se ve mal, no importa lo demás. Nadie llega a lo demás.",
  L2:"El cerebro (IA, automatizaciones y lógica): la parte que piensa para que tú no tengas que hacerlo.",L2b:"Aquí vive la IA. No, no te va a quitar el trabajo. Te va a quitar los Excel.",
  L3:"El motor (backend, datos, seguridad y despliegue): lo que la mantiene viva a las 3 a.m. mientras duermo. Casi siempre.",L3b:"Nadie lo ve. Todo el mundo nota cuando falla.",
  s38:"Ahora la volvemos a cerrar.",s39:"Con cuidado. Siempre sobran tornillos.",
  s310:"Tú ves una app. Yo veo 40.000 decisiones. Y al menos 12 crisis existenciales.",s311:"Bueno, 11. Una fue sobre tabs o espacios.",
  s312:"Por eso parece fácil. Porque alguien se encargó de que lo pareciera. Y no lo digo de memoria: tengo pruebas.",c3tbc:"Siguiente: capítulo 5. Skills para probarlo. Con barras y todo.",
  w31:"La plumilla entinta el boceto del teléfono",w32:"El teléfono explota en sus tres capas",w33:"La cara",w34:"El cerebro",w35:"El motor",w36:"El teléfono se rearma · contador 40.000",
  chapter2:"CAPÍTULO 3",name2:"BOLSILLOS AJENOS",dim2:"1 bolsillo ajeno. 48 notificaciones.",
  c2a:"Dentro de un bolsillo. Está oscuro, hay pelusa y una moneda de 2019. Aquí nadie pasa la aspiradora.",
  c2b:"Parece poca cosa. Es el lugar más disputado del mundo.",
  d1:"Ahora imagina un bolsillo que no es el tuyo.",d2:"El de alguien con 40 minutos libres al día y 11 apps para mandar mensajes.",d3:"Ese alguien es tu cliente.",
  c2c:"Y así se ve su bolsillo por dentro…",
  e1:"Aquí ya no cabe nada nuevo. Eso dice todo el mundo.",e2:"Todo el mundo se equivoca. Mira bien.",
  f1:"Saca la servilleta. Desdóblala.",r1:"Lo que era lápiz ahora es real. Bueno, casi.",
  c2d:"Bancos, apps de comida, 400 fotos de su perro. Ninguna es tuya. Qué grosería.",
  c2e:"Cada icono pelea por un pulgar. Y el pulgar ya está cansado.",
  c2f:"Pero espera. ¿Ves eso?",
  c2g:"Un hueco. Medida exacta: un pulgar.",
  c2h:"Ahí cabe tu app. Ni más grande ni más pequeña.",
  c2i:"Sí, estoy narrando desde dentro de un bolsillo. No lo hagas raro.",
  c2j:"La servilleta lo sabía. Por eso la guardamos.",
  c2k:"Mírala. Ya tiene medida de pulgar.",
  c2tbc:"Siguiente: capítulo 4. Donde se complica.",
  w21:"Dentro del bolsillo · pelusa, un recibo, una moneda",w22:"El teléfono del cliente, lleno de apps",w23:"El hueco vacío, dibujado como plano",w25:"La servilleta se abre y el teléfono se eleva",again:"Volver al contrato",old:"Ver el prototipo con imágenes",
  w11:"Cafetería · paneo de la planta a la taza",w11b:"Primer plano de la taza",w12:"El lápiz toca el papel",w13:"Nube de polvo, el lápiz se clava",w14:"La servilleta con el boceto de la app",w15:"La servilleta rompe el marco",w17:"El bolsillo · la servilleta entra · zambullida"},
 en:{lang:"ES",ctTitle:"THE CONTRACT",ct1:"If I get you to the end of this manga, you write me. Even if it’s just to say hi.",ct2:"Or to complain that I made you waste 5 minutes of your life. That counts too.",ct3:"Reaching the end and not writing is legally rude. (I’m not a lawyer.)",ctSign:"Signed: the reader",ctOk:"Sign",ctAlt:"Do I have a choice?",ctNo:"No.",
  chapter:"CHAPTER 2",name:"THE NAPKIN",dim:"1 napkin",hint:"Scroll down. That’s literally the only instruction.",
  nar1:"Somewhere. A café. A terrible idea is about to be born.",no:"No. Not again.",
  p1:"This pencil has drawn 47 apps. It has finished none.",p2:"They all start the same: an idea, a coffee and way too much confidence.",p3:"The problem is never the idea. It’s everything that comes after.",p4:"That’s why I exist. Well, that and the coffee.",there:"And there it is. The culprit.",
  n1:"A napkin. That’s where almost every app begins.",n2:"A rectangle, three buttons and an arrow that says “something important goes here.”",n3:"You drew it in two minutes. Building it is another story.",n4:"That’s where I come in: I turn napkins into apps people actually open.",n5:"Keep it. We’re going to need it.",
  gag1:"Wait. Manga reads right to left.",gag2:"Kidding. We’re Latin-alphabet fans here. Left to right, top to bottom. Don’t scroll sideways.",
  who:"Who are you? Pick one. No pressure. Some pressure.",c_business:"I run a business",c_founder:"I’m building a product",c_3d:"I’m just here for the 2.5D",
  nag0:"You have to pick one. Yes, it’s mandatory. No, there’s no skip button.",nag1:"Pick one. I promise not to judge. Much.",nag2:"The scroll won’t move until you choose. Sorry, I’m in charge here.",nag3:"It’s literally three buttons. You can do this.",
  r_business:"Good. Money people.",r_founder:"Brave. Or broke. Let’s find out.",r_3d:"Honest. I respect that. Weirdo.",
  q0_business:"A business. Perfect: your customers already have their phones out.",q0_founder:"A product. Perfect: a working demo beats a hundred slides.",q0_3d:"Fine. For you there are layers. Lots of layers.",
  q1:"Now I know who you are. You still don’t know who I am.",q2:"Spoiler: the guy who draws on napkins and then turns them into apps.",q3:"But first, the napkin. Remember? I told you to keep it.",q4:"Good ideas don’t go in the trash. They get folded and go in a pocket.",pk2:"And there it stays, nice and warm, until its moment comes.",who0:"But first, you have to tell me who you are.",who0b:"It’s to personalize your experience. Sounds like a big company, right? It’s me and a coffee.",
  tbc:"To be continued in chapter 3. Yes, inside a pocket.",end:"The end. Nine chapters, one signed contract and a chibi waiting. Your move.",
    tr1x:"Shh. Don’t make a sound. We’re climbing into a pocket.",tr4x:"Want to see what it would look like? I happen to have six examples.",tr5x:"I’ll open this one myself. One favor: read slowly.",
  ftag:"Your business. Always in your customer’s pocket.",fh1:"The manga",fh2:"Projects",fh3:"Elsewhere",fTop:"Back to the contract",fMenu:"Chapter index",fWrite:"Write me",
  dLegal:"Legal notice",dPrivacy:"Privacy policy",dCookies:"Cookie policy",close:"Close",fcopy:"© 2026 Elias González. Drawn by hand, coded by hand. No hair was cut in the process.",
  chapter10:"CHAPTER 8",name10:"THE|CALL",dim10:"4 questions. Zero endless forms.",
  y1n:"Write me. I reply faster than your last developer. Low bar, I know.",l102:"No twenty-field forms. Four questions and done.",
  l103:"I reply within 24–48 h. Not feeling it today? The chat will wait right here.",l104:"…Still here? There’s one more chapter. But you have to earn that one.",
  c10tbc:"Next: chapter 9. ???",
  cpick:"Good taste: {N}. Noted.",cq_founder:"So, what are you building?",cq_business:"So, what does your business sell?",cname:"Nice. And who do I have the pleasure of talking to?",
  cmail:"An email, so I can prove I reply fast.",cbad:"That doesn’t look like an email. I’m sarcastic, not psychic.",cbud:"Budget? Optional. ‘No idea’ is a valid answer.",
  cnobud:"No budget? Brave. We’ll talk.",cbudok:"Noted. I won’t judge. Out loud.",cready:"Ready. Hit ‘Send it’ and your email app opens with everything filled in.",
  cdone:"Got it. I’ll reply within 24–48 h. Go drink some water.",ph:"Type here…",msgLabel:"Your message",send:"Send",skip:"Skip",sendmail:"Send it",cagain:"Start over",
  mWhat:"What",mSvc:"Service",mName:"Name",mBudget:"Budget",mRoute:"Route",mSubj:"From the manga",
  chapter11:"CHAPTER 9",name11:"POST-CREDITS|SCENE",dim11:"You stayed. Respect.",
  z1:"Still here? This is a post-credits scene. Only 3% of people see it.",z2:"The other 97% already wrote me. Kidding. Nobody has written me yet.",z3:"Remember the napkin from chapter 2? Look at it now.",
  z5:"From a doodle to a real app. Same coffee. Different ending.",z6:"This is what happens when a bad idea meets someone stubborn.",z7:"If you don’t write, nothing bad happens. He just stays here waiting. Forever. Without blinking.",
  final:"Contract, clause 1: if you reach the end, you write me. You reached it. You signed. There are witnesses (me).",
  write:"Honor the contract",z4:"To be continued… in my inbox.",
  w101:"The phone rings on the drawing table",w102:"Incoming call · YOU?",w111:"The napkin again, with the building I wanted to draw as a kid",
  chapter9:"CHAPTER 7",name9:"PICK YOUR|POISON",dim9:"3 bottles. No fine print.",
  x91:"Pick your poison.",x92:"Three bottles. No ‘contact us for pricing’ nonsense. You’re an adult.",x93:"The order depends on what you told me in chapter 2. Yes, I remember.",
  x94:"Each bottle says what’s inside. No asterisks.",x95:"Torn between two? Write me. That’s what chapter 8 is for.",
  x96:"Side effects may include: an actual product.",x97:"And no, there’s no ‘do it for exposure’ bottle.",
  x98:"Hear that? Someone’s calling.",c9tbc:"Next: chapter 8. Write me. I reply faster than your last developer.",
  uncork:"UNCORK",pick:"This one",keep:"Keep browsing",
  bpN:"THE BLUEPRINT",bpP:"FROM $3,500",bpQ:"I have an idea (and a napkin)",bpL:"Discovery: what you want vs. what you actually need|Scope, screens and architecture on paper|A real estimate. No surprises later",
  mvN:"THE MVP",mvP:"FROM $6,500 · 10–21 DAYS",mvQ:"Build the thing",mvL:"Design and build of the first real version|Web and/or mobile, deployed and working|Handoff with code and docs. It’s yours",
  m1N:"MINIMAL ONE",m1P:"FROM $29 / MONTH",m1Q:"Put me in their pocket",m1L:"Your business as an app your customers install|Website and admin panel included|Essential plan live today; other plans in 3–5 weeks",
  w91:"The apothecary’s shelf",w92a:"Bottle 1",w92b:"Bottle 2",w92c:"Bottle 3",w95:"Incoming call · YOU?",
  chapter8:"CHAPTER 1",name8:"ORIGIN|ARC",dim8:"Tragic backstory. Involves haircuts.",
  o1:"Who is this guy? Fair question. Every protagonist gets a tragic backstory. Here’s mine.",o2:"As a kid, I wanted to be an architect.",
  o3:"Buildings. Bridges. A treehouse with an elevator.",o4:"My parents had other plans. They wanted a pastor.",o5:"Also: no long hair. Non-negotiable.",
  o6:"So I became neither a pastor nor an architect. I became an engineer. Now I pray to the code so it compiles.",
  y1:"2011",tt1:"IT director. Fancy title, tiny budget.",y2:"2014",tt2:"Taught robotics to kids. Toughest clients I’ve ever had.",
  y3:"2020",tt3:"Engineering professor. Graded hundreds of projects. Now I build the ones that pass.",y4:"2022",tt4:"Wrote code for the courts. Behaved. Mostly.",
  y5:"2024",tt5:"Construction PM. Learned that ‘two weeks’ means nothing.",y6:"ONGOING",tt6:"Also doing a master’s. Yes, while doing all this. Send coffee.",
  y7:"TODAY",tt7:"Spain. Building apps. Still adjusting to dinner at 10 p.m.",
  o7:"Technically I’m an architect now. Of software. And I preach clean code to clients who don’t listen. Close enough.",
  o8:"And yes, the hair is long now. In the manga, at least. Baby steps.",o9:"But this story isn’t about me. It’s about a napkin.",o10:"And an idea that, like almost all of them, started in a café.",c8tbc:"Next: chapter 2. The napkin.",
  w81:"Flashback · the kid drawing buildings",w82:"The parents, huge, and the scissors",w83:"The engineer hungry to eat the world",w84:"The timeline, year by year",w85:"Today · Spain, software architect",
  chapter7:"CHAPTER 6",name7:"NOTIFICATIONS",dim7:"A lot of them. Not yours. Yet.",
  w7a:"Back in the pocket. Same dark, same lint. But now your app lives here.",w7b:"Plot twist: getting into the pocket is the easy part.",
  w7c:"The hard part is getting opened. Plenty of apps live in here rent-free. Nobody opens them. Nobody misses them.",w7d:"The trick isn’t being there. It’s standing out. Like my magnificent hair.",
  c7T_business:"YOUR BUSINESS",c7B_business:"Your order is ready.",c7T_founder:"YOUR APP",c7B_founder:"Your app just got its first user.",
  tagline:"Your business. Always in your customer’s pocket.",fin:"Finally.",
  w7e:"Yes, that’s me. Face and all. So much for the mystery.",w7f:"My parents said no long hair. It grew anyway.",
  w7g:"Your customers may swear they don’t need another app. Same energy. They’ll notice you anyway.",
  w7h:"All you need is an idea different from the one you already have. Kidding. You haven’t told me yours yet.",
  w7i:"Now, the part nobody sees: everything it takes to build the thing that sends that notification.",
  c7tbc:"Next: chapter 4. Looks simple. Isn’t.",
  w71:"Inside the customer’s pocket · in colour",w72:"The architect from behind, hair in the wind · in colour",w73:"The phone sparkles: it’s in · in colour",w74:"The compass slices the air · in colour",
  chapter6:"CHAPTER 6",name6:"SERIOUS|BUSINESS",dim6:"1 real product",
  g61:"This is Güibbo: clinical practice with AI. No real patients get traumatized.",g62:"A practice session: a student and a simulated patient.",
  g63:"Every word becomes text, in real time.",live:"LIVE TRANSCRIPT",
  tr1:"STUDENT: How has this week been for you?",tr2:"PATIENT: Tiring. I always feel behind.",tr3:"STUDENT: Behind on what, mostly?",tr4:"PATIENT: Everything. Work, home…",tr5:"STUDENT: That sounds exhausting.",
  g64:"That’s how you practice before sitting across from a real person.",g65:"Then the AI gives feedback: strengths, what to improve and what to try next.",
  fb1t:"STRENGTH",fb1:"Open question. Good.",fb2t:"TO IMPROVE",fb2:"Interrupted at 03:12.",fb3t:"TRY NEXT",fb3:"Reflect the emotion first.",
  g66:"Screenshots stay blurred. This product is private.",priv:"PRIVATE",g67:"This one doesn’t get jokes. It gets results.",u5btn:"Request a demo",
  g68:"Okay. Serious part over. Back to the pocket.",g69:"There. You can breathe again.",g6a:"I promised zero jokes and I kept it. Almost. Okay, no.",g6b:"Now you know where I come from and what I build. Only the awkward part is left: talking about money.",c6tbc:"Next: chapter 7. Pick your poison.",
  w61:"Night practice room · window with a moon",w62:"The voice waveform and the live transcript",w63:"The AI feedback after the session",w64:"Güibbo screenshots, blurred",
  chapter5:"CHAPTER 6",name5:"MINIMAL|ONE",dim5:"6 fake businesses. They don’t know yet.",
 v51:"Real business number 1: Minimal One. My other company. Yes, I have two. No, I don’t sleep much.",mo1:"It’s my other company. Yes, I have two. No, I don’t sleep much.",
  mo2:"Minimal One gives every business its own website and its own app. With its logo, its colors and its way of talking.",
  pc1t:"THE WEBSITE",pc1:"So people find you and know what you offer.",pc2t:"THE APP",pc2:"Orders, bookings and rewards. Your customers keep it on their phone.",
  pc3t:"THE PANEL",pc3:"Everything organized for your team, instead of lost in a chat.",
  mo4:"No App Store, no Google Play. It installs from the browser. Apple hasn’t noticed yet.",
  v52:"10+ real businesses already use it. I’d show you theirs, but they signed things.",v53:"So we made up six. At least we tried. Walk in, they work.",
  molink:"Meet Minimal One",mo5:"Want to see how it works inside? It has its own page. Yes, I built that too.",mo6:"Real business number 2. This one is serious. Well… almost serious.",w51b:"Minimal One: the website, the app and the panel, with the business’s brand",
 v54:"They have menus, bookings and rewards. The only fake thing is the coffee.",v55:"If one of them looks like your business, it’s pure coincidence. Or a sign.",
  walk:"WALK IN",dm1:"Coffee for people who refuse to rush.",dm2:"20 minutes. Bring your own small talk.",dm3:"The time you gift yourself. Booked in 3 taps.",
  dm4:"Bread with patience issues. The good kind.",dm5:"One hour where nobody can find you.",dm6:"Like grandma’s. Fewer dishes.",
  gagN:"You opened {n} of 6. The other {m} are offended. Just saying.",gag6:"You opened all six. Either you’re interested or you’re procrastinating. Both work for me.",
 v56:"And at the end of the street…",v57:"…there’s a door that isn’t a demo.",mat:"STAFF ONLY. No jokes beyond this point.",
  c5tbc:"Next: chapter 6. The serious chapter. No jokes. I promise.",
  dbt1:"MENU",dbt2:"BOOK",dbt3:"REWARDS",dlink:"See it on Minimal One",dclose:"Leave the shop",
  w51:"Demo street · six shops in a row",w58:"Güibbo’s door · STAFF ONLY",
  chapter4:"CHAPTER 6",name4:"REAL|BUSINESSES",dim4:"No jokes. Nah, yes jokes.",
  m1:"Even so, this is what a pocket looks like on a Thursday morning…",st1:"They all want attention. None of them is yours. Yet.",n0T:"1 NEW NOTIFICATION",n0B:"…and 47 more. Brace yourself.",
  m3:"And when they all go quiet… it only takes one.",m4:"And what do they all have in common? They live inside the same thing.",
  nf1T:"CAFÉ",nf1B:"Your order is ready. It’s hot. Be careful.",nf2T:"BARBERSHOP",nf2B:"Appointment confirmed: Saturday, 10:30.",
  nf3T:"BAKERY",nf3B:"+1 stamp. 7 of 10. Free croissant soon.",nf4T:"GYM",nf4B:"Class tomorrow, 7 a.m. Yes, a.m.",
  m5:"10+ real businesses already live in their customers’ pockets. Real ones. With taxes and everything.",m6:"How many exactly?",
  m8:"(And counting. I update this, I swear on my keyboard.)",
  m10:"Who are they? Can’t tell you. They like their privacy.",m11:"I like getting paid. Everybody wins.",
  m12:"Now picture yours.",openT:"OPEN NOW",openB:"Come in. Pretend you’re just looking.",
  m14:"Your business. Always in your customer’s pocket.",c4tbc:"Next: chapter 6. Minimal One. Six fake businesses, almost real.",
  w41:"A phone and one yellow notification",w42:"A rain of notifications from real businesses",w43:"The notebook: 9 crossed out, 10+ highlighted",w44:"Redacted notifications",w45:"The phone-shaped shop window: your business",
  chapter3:"CHAPTER 4",name3:"LOOKS SIMPLE. ISN’T.",dim3:"40,000 decisions",
  s31:"Step one: make it look easy.",s32:"Step two: never tell anyone how hard it was.",s33:"This is what your customer sees. A pretty drawing.",
  s34:"What they don’t see is what’s underneath.",s35:"Let me show you what’s inside. Relax, it’s not gross.",
  s36:"Every app has three layers. Like an onion, but with less crying. Usually.",s37:"Let’s go one by one.",
  L1:"The face (UX & design): what your users touch. And judge. In half a second.",L1b:"If it looks bad, nothing else matters. Nobody gets to the rest.",
  L2:"The brain (AI, automations, logic): the part that thinks so you don’t have to.",L2b:"This is where the AI lives. No, it won’t take your job. It’ll take your spreadsheets.",
  L3:"The engine (backend, data, security, deploy): what keeps it alive at 3 a.m. while I sleep. Mostly.",L3b:"Nobody sees it. Everybody notices when it breaks.",
  s38:"Now we close it back up.",s39:"Carefully. There are always leftover screws.",
  s310:"You see an app. I see 40,000 decisions. And at least 12 existential crises.",s311:"Fine, 11. One was about tabs vs. spaces.",
  s312:"That’s why it looks easy. Because someone made sure it would. And I’m not guessing: I have proof.",c3tbc:"Next: chapter 5. Skills to prove it. Health bars included.",
  w31:"The dip pen inks the phone sketch",w32:"The phone explodes into its three layers",w33:"The face",w34:"The brain",w35:"The engine",w36:"The phone snaps back together · 40,000 counter",
  chapter2:"CHAPTER 3",name2:"OTHER PEOPLE’S POCKETS",dim2:"1 pocket, not yours. 48 notifications.",
  c2a:"Inside a pocket. It’s dark, there’s lint and a coin from 2019. Nobody vacuums in here.",
  c2b:"Doesn’t look like much. It’s the most fought-over place on earth.",
  d1:"Now picture a pocket that isn’t yours.",d2:"Someone with 40 free minutes a day and 11 apps just for texting.",d3:"That someone is your customer.",
  c2c:"And this is what their pocket looks like inside…",
  e1:"Nothing new fits in here. That’s what everyone says.",e2:"Everyone’s wrong. Look closer.",
  f1:"Take out the napkin. Unfold it.",r1:"What was pencil is now real. Well, almost.",
  c2d:"Banks, delivery apps, 400 photos of their dog. Zero of them are yours. Rude.",
  c2e:"Every icon is fighting for a thumb. And the thumb is tired.",
  c2f:"But wait. See that?",
  c2g:"A gap. Exact size: one thumb.",
  c2h:"Your app fits right there. Not bigger, not smaller.",
  c2i:"Yes, I’m narrating from inside a pocket. Don’t make it weird.",
  c2j:"The napkin knew. That’s why we kept it.",
  c2k:"Look at it. Already thumb-sized.",
  c2tbc:"Next: chapter 4. Where it gets complicated.",
  w21:"Inside the pocket · lint, a receipt, a coin",w22:"The customer’s phone, crammed with apps",w23:"The empty gap, drawn like a blueprint",w25:"The napkin opens and the phone lifts off",again:"Back to the contract",old:"See the prototype with art",
  w11:"Café · pan from the plant to the cup",w11b:"Close-up of the cup",w12:"The pencil touches the paper",w13:"Dust cloud, the pencil digs in",w14:"The napkin with the app sketch",w15:"The napkin breaks the frame",w17:"The pocket · the napkin goes in · the dive"}
};
let lang=(navigator.language||'es').toLowerCase().startsWith('es')?'es':'en';
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if('scrollRestoration' in history) history.scrollRestoration='manual'; scrollTo(0,0);
const state={signed:false,inked:false,route:null,short:false};
/* textos que se suman: los de la versión corta llevan «_r» y mandan sobre el original solo en ella */
Object.assign(T.es,{
  ctWho:"Elias González · Arquitecto de software",langLabel:"Cambiar a inglés",
  vcorta:"¿Poco tiempo? Versión corta: 6 capítulos",
  c_team:"Vengo a contratarte",r_team:"Bien. Esto también es un currículum, solo que con dibujos.",
  q0_team:"Si vas con prisa, abre el índice y elige «Versión corta». No me ofendo. Mucho.",
  nagFree:"Vale, sigue. No elegiste, pero que conste en acta.",
  cq_team:"¿Para qué equipo o puesto me buscas?",cbud_team:"¿Algo más? El enlace a la oferta, fechas, salario… Opcional. «Nada» también vale.",
  cnobud_team:"Perfecto. Te respondo pronto.",mWhat_team:"Puesto",mBudget_team:"Detalles",
  cdir:"¿Prefieres escribir tú?",copiar:"Copiar",copiado:"Copiado",
  o9_r:"Esta es la versión corta. Vamos directo a lo que construyo.",
  o10_r:"Dos proyectos, unos precios y una forma de escribirme. Rápido, prometido.",
  c8tbc_r:"Siguiente: capítulo 5. Mis skills, en formato videojuego.",
  name4_r:"DOS|PROYECTOS",dim4_r:"Los dos grandes. Con chistes, pero menos.",
  v51_r:"Proyecto 1: Minimal One. Una de mis dos empresas. Sí, dos. No, no duermo mucho.",
  mo6_r:"Proyecto 2: Güibbo. Este va en serio. Bueno… casi en serio.",
  g6b_r:"Esos son mis dos proyectos grandes. Si buscas a alguien así para tu equipo, el capítulo 8 es tuyo.",
  c6tbc_r:"Siguiente: capítulo 7. Precios, por si vienes con un proyecto.",
  x93_r:"Si vienes a contratarme para tu equipo, puedes saltarte esto: el capítulo 8 es tuyo.",
  z3_r:"¿Ves esta servilleta? Ahí empezó Minimal One. Mírala ahora.",
  end_r:"Fin. Seis capítulos, un contrato firmado y un chibi esperando. Te toca.",
  ftag:"Arquitecto de software. Hago productos que caben en un bolsillo.",
  fMail:"rmngzps@gmail.com",saltar:"Saltar al contacto",
  progreso:"CAP.",de:"DE"
});
Object.assign(T.en,{
  ctWho:"Elias González · Software architect",langLabel:"Switch to Spanish",
  vcorta:"Short on time? Short version: 6 chapters",
  c_team:"I’m here to hire you",r_team:"Good. This is a résumé too, just with drawings.",
  q0_team:"In a hurry? Open the contents and pick ‘Short version’. I won’t be offended. Much.",
  nagFree:"Fine, go on. You didn’t pick, but it’s on the record.",
  cq_team:"Which team or role are you hiring for?",cbud_team:"Anything else? Job link, dates, salary… Optional. ‘Nothing’ works too.",
  cnobud_team:"Perfect. I’ll get back to you soon.",mWhat_team:"Role",mBudget_team:"Details",
  cdir:"Rather write yourself?",copiar:"Copy",copiado:"Copied",
  o9_r:"This is the short version. Straight to what I build.",
  o10_r:"Two projects, some prices and a way to write me. Quick, I promise.",
  c8tbc_r:"Next: chapter 5. My skills, video game style.",
  name4_r:"TWO|PROJECTS",dim4_r:"The big two. Jokes included, fewer of them.",
  v51_r:"Project 1: Minimal One. One of my two companies. Yes, two. No, I don’t sleep much.",
  mo6_r:"Project 2: Güibbo. This one is serious. Well… almost serious.",
  g6b_r:"Those are my two big projects. If you need someone like that on your team, chapter 8 is yours.",
  c6tbc_r:"Next: chapter 7. Prices, in case you have a project.",
  x93_r:"If you’re here to hire me for your team, skip this: chapter 8 is yours.",
  z3_r:"See this napkin? Minimal One started there. Look at it now.",
  end_r:"The end. Six chapters, one signed contract and a chibi waiting. Your move.",
  ftag:"Software architect. I build products that fit in a pocket.",
  fMail:"rmngzps@gmail.com",saltar:"Skip to contact",
  progreso:"CH.",de:"OF"
});
Object.assign(T.es,{
  pc4t:"EL ESTUDIANTE",pc4:"Interviene. Con muchísima seguridad.",
  pc5t:"LA IA",pc5:"Analiza y da feedback. Sin piedad, pero con cariño.",
  pc6t:"EL PROFESOR",pc6:"Evalúa. La ceja ya venía levantada de casa.",
  g67:"Hace mucho más. Pero para eso hay que hacer clic. Ya sé, qué esfuerzo.",
  gblink:"Conoce Güibbo"
});
Object.assign(T.en,{
  pc4t:"THE STUDENT",pc4:"Steps in. Extremely confidently.",
  pc5t:"THE AI",pc5:"Analyzes and gives feedback. Ruthless, but kind.",
  pc6t:"THE PROFESSOR",pc6:"Evaluates. The eyebrow came pre-raised.",
  g67:"It does a lot more. But you have to click. I know, such effort.",
  gblink:"Meet Güibbo"
});
Object.assign(T.es,{
  chapter11:"CAPÍTULO 9",name11:"MAKING|OF",dim11:"Cómo se hizo. Spoiler: a mano.",
  z1:"¿Sigues aquí? Esto es el making of. Solo lo ve el 3% de la gente.",
  pcmk1t:"EL LÁPIZ",pcmk1:"Primero, a lápiz azul. Cuatro vistas, para que al girar no le crezca otra nariz.",
  mk2:"Sí, gira con tu scroll. No, no se marea. Yo sí.",
  pcmk3t:"LA TINTA",pcmk3:"Después, tinta y color. Mira el salto: sale a lápiz y aterriza terminado.",
  mk4:"Cinco dibujos para un salto. Ojalá madurar fuera así de rápido.",
  codeT:"EL CÓDIGO",codeF:"motor.js · lo que lo hace saltar",
  mk5:"Eso es un salto. Física de bachillerato. Por fin sirvió para algo.",
  mk6:"Cada globo es un suelo. Bajas y salta al siguiente. Subes y, ¡puf!, vuelve. Haz la prueba. Te espero.",
  codeC:["// El salto: una curva de Bézier.","const k = (ahora - inicio) / 430;","const cx = (x0 + x1) / 2;","const cy = Math.min(y0, y1) - 70;","x = (1-k)**2*x0 + 2*k*(1-k)*cx + k*k*x1;","y = (1-k)**2*y0 + 2*k*(1-k)*cy + k*k*y1;","","// Qué dibujo toca en cada momento:","pose = k < .12 ? 'salto-1'","     : k < .5  ? 'salto-2'","     : k < .72 ? 'salto-3' : 'salto-4';"]
});
Object.assign(T.en,{
  chapter11:"CHAPTER 9",name11:"MAKING|OF",dim11:"How it was made. Spoiler: by hand.",
  z1:"Still here? This is the making of. Only 3% of people see it.",
  pcmk1t:"THE PENCIL",pcmk1:"First, blue pencil. Four views, so he doesn’t grow a second nose when he turns.",
  mk2:"Yes, he spins with your scroll. No, he doesn’t get dizzy. I do.",
  pcmk3t:"THE INK",pcmk3:"Then ink and color. Watch the jump: he takes off in pencil and lands finished.",
  mk4:"Five drawings for one jump. If only growing up were this fast.",
  codeT:"THE CODE",codeF:"motor.js · what makes him jump",
  mk5:"That’s a jump. High-school physics. Finally useful.",
  mk6:"Every bubble is a floor. Scroll down and he jumps to the next. Scroll up and, poof, he’s back. Try it. I’ll wait.",
  codeC:["// The jump: a Bézier curve.","const k = (now - start) / 430;","const cx = (x0 + x1) / 2;","const cy = Math.min(y0, y1) - 70;","x = (1-k)**2*x0 + 2*k*(1-k)*cx + k*k*x1;","y = (1-k)**2*y0 + 2*k*(1-k)*cy + k*k*y1;","","// Which drawing goes when:","pose = k < .12 ? 'jump-1'","     : k < .5  ? 'jump-2'","     : k < .72 ? 'jump-3' : 'jump-4';"]
});
Object.assign(T.es,{
  name10:"SIN|TINTA",dim10:"Se me acabaron las ideas. El formulario no.",
  y1n:"Iba a dibujar un capítulo entero para terminar de convencerte.",
  l102:"Pero si a estas alturas no te convencí, ningún dibujo lo va a hacer.",l102b:"Además, ya no tengo ideas. Ni tinta.",
  l103:"Cuatro preguntas. Prometo que es lo último que te pido. Hoy.",
  x98:"Se me está acabando la tinta. Se nota, ¿no?"
});
Object.assign(T.en,{
  name10:"OUT OF|INK",dim10:"I ran out of ideas. The form didn’t.",
  y1n:"I was going to draw a whole chapter to finally convince you.",
  l102:"But if I haven’t convinced you by now, no drawing will.",l102b:"Also, I’m out of ideas. And ink.",
  l103:"Four questions. I promise it’s the last thing I’ll ask. Today.",
  x98:"I’m running out of ink. Can you tell?"
});
Object.assign(T.es,{
  pcmk7t:"EL PASO",pcmk7:"Caminar son cuatro dibujos. Se repiten mientras haces scroll.",
  mk8:"Lápiz primero, tinta después. Como todo en la vida, pero en orden.",
  mk9:"Si bajas rápido, corre. Si paras, se sienta. Si paras mucho, se duerme. Como yo.",
  codeT2:"EL CÓDIGO",codeF2:"motor.js · lo que lo hace caminar",
  codeC2:["// Camina sobre su globo al hacer scroll.","const v = rapidez > 1.6 ? .17     // corre","        : rapidez > .2  ? .06 : 0;","xo += dir * v * dt / ancho;","if (xo > .88) dir = -1;  // da la vuelta","if (xo < .12) dir = 1;","","// 4 dibujos, uno cada 130 ms.","const n = Math.floor(ahora / 130) % 4;","pose = 'camina-' + (n + 1);"]
});
Object.assign(T.en,{
  pcmk7t:"THE STEP",pcmk7:"Walking is four drawings. They repeat while you scroll.",
  mk8:"Pencil first, ink later. Like everything in life, but in order.",
  mk9:"Scroll fast and he runs. Stop and he sits. Stop for long and he falls asleep. Like me.",
  codeT2:"THE CODE",codeF2:"motor.js · what makes him walk",
  codeC2:["// Walks on his bubble while you scroll.","const v = speed > 1.6 ? .17       // runs","        : speed > .2  ? .06 : 0;","xo += dir * v * dt / width;","if (xo > .88) dir = -1;  // turns around","if (xo < .12) dir = 1;","","// 4 drawings, one every 130 ms.","const n = Math.floor(now / 130) % 4;","pose = 'walk-' + (n + 1);"]
});
/* el texto de cada clave en la versión que se está leyendo */
const tx=k=>{const d=T[lang]; return (state.short&&d[k+'_r']!=null)?d[k+'_r']:d[k]};


/* ------------------------------------------------------------------
   The lettering track. Every text the reader sees, in reading order.
   sc: scene · a: when it appears (0..1 of the scene) · e: when it goes (non-perch items)
   perch: the tiny architect can stand on it · drop: the previous perch leaves first, he falls
   l/t/w: position on screen (% of the column and of the screen height)
------------------------------------------------------------------- */

Object.assign(T.es,{
  chapter12:"CAPÍTULO 5",name12:"SKILLS PARA|PROBARLO",dim12:"1 ficha de personaje. 0 horas de sueño.",
  k1:"El capítulo anterior terminó con «tengo pruebas». Aquí están. En formato videojuego, porque puedo.",
  k1_r:"Versión corta, así que directo a la ficha. Sin rodeos. Bueno, con algunos.",
  k2:"Sí, los números me los puse yo. Como todo el mundo en LinkedIn. La diferencia es que los míos se pueden comprobar.",
  k3:"La paciencia está en 3. Iba a ponerle 5, pero alguien me pidió «un cambio pequeñito» mientras la dibujaba.",
  k4:"Habilidades pasivas. Funcionan solas, como el café.",
  k5:"La primera es tan rara que algunos clientes juran que no existe.",
  k6:"El compás es mi arma legendaria. Mide, corta y, si hace falta, señala el presupuesto.",
  k7:"El pelo da +10 de carisma. Mis padres le restarían 30. Ya lo hablamos en el capítulo 1.",
  k8:"Toda ficha honesta tiene debilidades. Estas son las mías. Úsalas con responsabilidad.",
  k9:"Si me dices «es un cambio rápido», pierdo 50 puntos de vida. Tú pierdes una semana.",
  k10:"Subí de nivel. Nueva habilidad desbloqueada: hacer tu app.",
  k11:"Bonita ficha, ¿no? Ahora la pregunta incómoda: ¿dónde la usé de verdad?",
  c12tbc:"Siguiente: capítulo 6. Negocios reales. Sin chistes. Nah, sí hay chistes.",c12tbc_r:"Siguiente: capítulo 6. Mis dos proyectos.",
  rpTag:"FICHA DE PERSONAJE",rpNivL:"NV.",rpClase:"Clase: arquitecto de software",rpRaza:"Raza: humano (con café)",rpXp:"EXP",
  rpH0:"STATS",rpH1:"HABILIDADES PASIVAS",rpH2:"EQUIPO",rpH3:"DEBILIDADES",
  rpS1:"ARQUITECTURA",rpS1d:"Sistemas que aguantan el éxito",rpS2:"FRONTEND",rpS2d:"React · Next.js · TypeScript",rpS3:"BACKEND",rpS3d:"Node · MongoDB · APIs · pagos",
  rpS4:"IA Y AUTOMATIZACIÓN",rpS4d:"Que la IA trabaje. En producción",rpS5:"APPS (PWA)",rpS5d:"Se instalan sin App Store",
  rpS6:"PACIENCIA CON «ES UN CAMBIO PEQUEÑITO»",rpS6d:"Crítica",rpS7:"HORAS DE SUEÑO",rpS7d:"Sin cambios desde 2011",
  rpP1:"Entiende lo que querías decir, no lo que dijiste.",rpP2:"Traduce «que se vea más moderno» a algo que se pueda programar.",rpP3:"Explica la nube sin dibujar una nube. Casi nunca.",
  rpE1n:"COMPÁS",rpE1t:"Arma legendaria",rpE1d:"+50 precisión. Corta el aire y el alcance del proyecto.",
  rpE2n:"CAFÉ",rpE2t:"Consumible infinito",rpE2d:"+40 concentración. −20 pulso.",
  rpE3n:"PELO LARGO",rpE3t:"Accesorio prohibido",rpE3d:"+10 carisma. −30 visibilidad. Equipado igual.",
  rpD1:"«¿Y si lo hacemos como Uber, pero para perros?»",rpD1t:"ALERGIA GRAVE",rpD2:"«Es un cambio rápido, no te va a llevar nada.»",rpD2t:"DAÑO CRÍTICO ×3",
  rpD3:"Reuniones que podían ser un correo",rpD3t:"VENENO LENTO",
  rpLvT:"Nueva habilidad desbloqueada",rpLvH:"HACER TU APP"
});
Object.assign(T.en,{
  chapter12:"CHAPTER 5",name12:"SKILLS TO|PROVE IT",dim12:"1 character sheet. 0 hours of sleep.",
  k1:"Last chapter ended with ‘I have proof’. Here it is. As a video game, because I can.",
  k1_r:"Short version, so straight to the sheet. No detours. Well, a few.",
  k2:"Yes, I gave myself these numbers. Like everyone on LinkedIn. The difference is mine can be checked.",
  k3:"Patience is at 3. I was going to give it 5, but someone asked for ‘a tiny change’ while I was drawing it.",
  k4:"Passive skills. They work on their own, like coffee.",
  k5:"The first one is so rare some clients swear it doesn’t exist.",
  k6:"The compass is my legendary weapon. It measures, it cuts and, if needed, it points at the budget.",
  k7:"The hair gives +10 charisma. My parents would take 30 off. We covered this in chapter 1.",
  k8:"Every honest sheet has weaknesses. Here are mine. Use them responsibly.",
  k9:"Tell me ‘it’s a quick change’ and I lose 50 HP. You lose a week.",
  k10:"Level up. New skill unlocked: building your app.",
  k11:"Nice sheet, right? Now the awkward question: where did I actually use it?",
  c12tbc:"Next: chapter 6. Real businesses. No jokes. Nah, yes jokes.",c12tbc_r:"Next: chapter 6. My two projects.",
  rpTag:"CHARACTER SHEET",rpNivL:"LV.",rpClase:"Class: software architect",rpRaza:"Race: human (with coffee)",rpXp:"EXP",
  rpH0:"STATS",rpH1:"PASSIVE SKILLS",rpH2:"EQUIPMENT",rpH3:"WEAKNESSES",
  rpS1:"ARCHITECTURE",rpS1d:"Systems that survive success",rpS2:"FRONTEND",rpS2d:"React · Next.js · TypeScript",rpS3:"BACKEND",rpS3d:"Node · MongoDB · APIs · payments",
  rpS4:"AI & AUTOMATION",rpS4d:"AI that works. In production",rpS5:"APPS (PWA)",rpS5d:"Installed without an App Store",
  rpS6:"PATIENCE WITH ‘IT’S A TINY CHANGE’",rpS6d:"Critical",rpS7:"HOURS OF SLEEP",rpS7d:"Unchanged since 2011",
  rpP1:"Understands what you meant, not what you said.",rpP2:"Translates ‘make it look more modern’ into something you can actually build.",rpP3:"Explains the cloud without drawing a cloud. Almost never.",
  rpE1n:"COMPASS",rpE1t:"Legendary weapon",rpE1d:"+50 precision. Cuts the air and the project scope.",
  rpE2n:"COFFEE",rpE2t:"Infinite consumable",rpE2d:"+40 focus. −20 pulse.",
  rpE3n:"LONG HAIR",rpE3t:"Forbidden accessory",rpE3d:"+10 charisma. −30 visibility. Equipped anyway.",
  rpD1:"‘What if we do it like Uber, but for dogs?’",rpD1t:"SEVERE ALLERGY",rpD2:"‘It’s a quick change, it won’t take you long.’",rpD2t:"CRITICAL HIT ×3",
  rpD3:"Meetings that could have been an email",rpD3t:"SLOW POISON",
  rpLvT:"New skill unlocked",rpLvH:"BUILDING YOUR APP"
});

const ITEMS=[
 {id:'contract',kind:'contract',sc:'contract',a:0,perch:true,l:7,t:12,w:86,cond:()=>!state.contractGone},
 {id:'hint',kind:'hint',t_:'hint',sc:'contract',a:0,perch:true,l:9,t:34,w:82,cond:()=>state.hintShown},
 {id:'vcorta',kind:'vcorta',only:'larga',sc:'contract',a:0,e:.6,perch:false,l:9,t:46,w:82,cond:()=>state.hintShown&&!state.short},
 {id:'gag1',kind:'cap',t_:'gag1',sc:'contract',a:0.775,perch:true,l:8,t:44,w:62,onLand:fakeFlip},
 {id:'gag2',kind:'cap',t_:'gag2',sc:'contract',a:1.550,perch:true,l:30,t:58,w:64},
 /* ===== origin (now chapter 1): one step every 62vh after the hint, timed from 'kid8' (span 140vh) ===== */
 {id:'t8',kind:'title',onart:true,ch:8,nfs:19,drop:true,long:true,sc:'kid8',a:0.031,perch:true,l:7,t:60,w:86},
 {id:'o1',kind:'cap',t_:'o1',sc:'kid8',a:0.354,perch:true,l:7,t:66,w:74},
 {id:'o2',kind:'cap',t_:'o2',sc:'kid8',a:0.677,perch:true,l:26,t:76,w:62},
 {id:'o3',kind:'bub',t_:'o3',sc:'kid8',a:1.000,perch:true,l:6,t:66,w:64},
 {id:'gogo',kind:'sfx',text:'ゴゴゴ',fs:14,sc:'kid8',a:1.323,perch:true,l:40,t:62},
 {id:'o4',kind:'cap',t_:'o4',sc:'kid8',a:1.646,perch:true,l:6,t:66,w:70},
 {id:'o5',kind:'bub',t_:'o5',sc:'kid8',a:1.969,perch:true,l:30,t:74,w:60},
 {id:'choki',kind:'sfx',text:'チョキン',fs:13,sc:'kid8',a:2.291,perch:true,l:8,t:66},
 {id:'o6',kind:'cap',t_:'o6',sc:'kid8',a:2.670,perch:true,l:6,t:66,w:76},
 {id:'zudon',kind:'sfx',text:'ズドーン',fs:14,sc:'kid8',a:3.145,perch:true,l:20,t:66},
 {id:'tl1',kind:'tl',tl:1,sc:'kid8',a:3.468,perch:true,l:6,t:56,w:62},
 {id:'tl2',kind:'tl',tl:2,sc:'kid8',a:3.791,perch:true,l:32,t:66,w:62},
 {id:'tl3',kind:'tl',tl:3,sc:'kid8',a:4.114,perch:true,l:6,t:56,w:62},
 {id:'tl4',kind:'tl',tl:4,sc:'kid8',a:4.437,perch:true,l:32,t:66,w:62},
 {id:'tl5',kind:'tl',tl:5,sc:'kid8',a:4.760,perch:true,l:6,t:56,w:62},
 {id:'tl6',kind:'tl',tl:6,sc:'kid8',a:5.083,perch:true,l:32,t:66,w:62},
 {id:'tl7',kind:'tl',tl:7,sc:'kid8',a:5.330,perch:true,l:6,t:56,w:62},
 {id:'o7',kind:'cap',t_:'o7',sc:'kid8',a:5.912,perch:true,l:8,t:70,w:78},
 {id:'o8',kind:'bub',t_:'o8',sc:'kid8',a:6.234,perch:true,l:30,t:64,w:62},
 {id:'o9',kind:'bub',t_:'o9',sc:'kid8',a:6.558,perch:true,l:8,t:58,w:62},
 {id:'o10',kind:'bub',t_:'o10',sc:'kid8',a:6.880,perch:true,l:32,t:70,w:60},
 {id:'c8tbc',kind:'cap',t_:'c8tbc',sc:'kid8',a:7.204,perch:true,l:10,t:80,w:80},
 {id:'title',kind:'title',onart:true,sc:'cafe',a:0.024,perch:true,drop:true,long:true,l:7,t:62,w:86},
 {id:'nar1',kind:'cap',t_:'nar1',sc:'cafe',a:0.230,perch:true,drop:true,l:7,t:70,w:66},
 {id:'fuu',kind:'sfx',text:'フー…',sc:'cafe',a:0.683,perch:true,l:8,t:56,fs:11},
 {id:'zuzu',kind:'sfx',text:'ズズッ',sc:'pencil',a:.14,perch:true,l:46,t:14},
 {id:'p1',kind:'bub',t_:'p1',sc:'pencil',a:.34,perch:true,l:6,t:22,w:54},
 {id:'gashi',kind:'sfx',text:'ガシガシ',sc:'pencil',a:.58,perch:true,l:42,t:33,fs:13},
 {id:'no',kind:'bub',t_:'no',sc:'pencil',a:.8,perch:true,l:8,t:42,w:46},
 /* between scenes: the pencil panels scroll away and he goes down the page, balloon by balloon */
 {id:'p2',kind:'bub',t_:'p2',sc:'pencil',a:.9,perch:true,jd:300,l:40,t:50,w:54},
 {id:'p3',kind:'bub',t_:'p3',sc:'pencil',a:1.21,perch:true,l:6,t:64,w:56},
 {id:'p4',kind:'bub',t_:'p4',sc:'pencil',a:1.52,perch:true,l:40,t:77,w:54},
 {id:'there',kind:'bub',t_:'there',sc:'napkin',a:0.087,perch:true,l:8,t:87,w:54},
 {id:'don',kind:'sfx',text:'ドン',sc:'napkin',a:0.189,e:1.36,perch:false,l:58,t:3,fs:20},
 {id:'n1',kind:'bub',t_:'n1',sc:'napkin',a:0.291,perch:true,l:6,t:57,w:60},
 {id:'n2',kind:'bub',t_:'n2',sc:'napkin',a:0.524,perch:true,l:36,t:67,w:58},
 {id:'n3',kind:'bub',t_:'n3',sc:'napkin',a:0.756,perch:true,l:6,t:77,w:58},
 {id:'n4',kind:'bub',t_:'n4',sc:'napkin',a:0.989,perch:true,l:28,t:58,w:66},
 {id:'n5',kind:'bub',t_:'n5',sc:'napkin',a:1.222,perch:true,l:8,t:73,w:56},
 /* the napkin goes in the pocket, a fake ending, then the question, then we sneak into the pocket */
 {id:'q4',kind:'bub',t_:'q4',sc:'pocket',a:.079,perch:true,l:8,t:78,w:58},
 {id:'spo',kind:'sfx',text:'スポッ',sc:'pocket',a:.521,perch:true,l:46,t:18},
 {id:'pk2',kind:'bub',t_:'pk2',sc:'pocket',a:.964,perch:true,l:36,t:80,w:58},
 {id:'who0',kind:'cap',t_:'who0',sc:'route',a:-.245,perch:true,l:8,t:44,w:70},
 {id:'who0b',kind:'bub',t_:'who0b',sc:'route',a:.065,perch:true,l:30,t:64,w:62},
 {id:'who',kind:'cap',t_:'who',cls:'who3d',sc:'route',a:.375,e:.955,perch:true,stay:true,l:7,t:12,w:72},
 {id:'c1',kind:'ch',route:'business',t_:'c_business',sc:'route',a:.475,e:.955,perch:false,stay:true,l:7,t:30,w:86,cond:()=>!state.route},
 {id:'c2',kind:'ch',route:'founder',t_:'c_founder',sc:'route',a:.595,e:.955,perch:false,stay:true,l:7,t:44,w:86,r:true,cond:()=>!state.route},
 {id:'c3',kind:'ch',route:'3d',t_:'c_3d',sc:'route',a:.715,e:.955,perch:false,stay:true,l:7,t:58,w:86,cond:()=>!state.route},
 {id:'c4',kind:'ch',route:'team',t_:'c_team',sc:'route',a:.835,e:.955,perch:false,stay:true,l:7,t:72,w:86,r:true,cond:()=>!state.route},
 {id:'nag',kind:'bub',t_:'nag0',sc:'route',a:.375,e:.955,perch:false,l:8,t:85,w:84,cond:()=>!state.route&&performance.now()<(state.nagUntil||0)},
 {id:'resp',kind:'bub',t_:'resp',sc:'route',a:.4,perch:true,l:14,t:84,w:72,cond:()=>!!state.route},
 {id:'q0',kind:'bub',t_:'q0',byRoute:true,sc:'route',a:1.025,perch:true,l:8,t:56,w:62,cond:()=>!!state.route},
 {id:'tr1',kind:'bub',t_:'tr1x',sc:'pdark',a:-1.65,perch:true,l:30,t:70,w:56},
 {id:'tbc',kind:'cap',t_:'tbc',sc:'pdark',a:1.45,perch:true,night:true,l:10,t:46,w:80},
 /* ===== chapter 2 ===== */
 {id:'t2',kind:'title',onart:true,ch:2,nfs:13.5,sc:'pocket2',a:0.029,perch:true,drop:true,long:true,night:true,l:7,t:60,w:86},
 {id:'c2a',kind:'cap',t_:'c2a',sc:'pocket2',a:0.332,perch:true,night:true,l:7,t:66,w:72},
 {id:'c2b',kind:'cap',t_:'c2b',sc:'pocket2',a:0.573,perch:true,night:true,l:28,t:78,w:64},
 /* down to the customer's pocket */
 {id:'d1',kind:'bub',t_:'d1',sc:'pocket2',a:0.875,perch:true,l:8,t:40,w:58},
 {id:'d2',kind:'bub',t_:'d2',sc:'pocket2',a:1.175,perch:true,l:38,t:54,w:58},
 {id:'d3',kind:'bub',t_:'d3',sc:'pocket2',a:1.474,perch:true,l:8,t:68,w:58},
 {id:'c2c',kind:'cap',t_:'c2c',sc:'apps',a:.03,perch:true,l:34,t:80,w:60},
 {id:'gotsun',kind:'sfx',text:'ゴツン',sc:'apps',a:.3,perch:true,l:50,t:13,fs:13},
 {id:'c2d',kind:'bub',t_:'c2d',sc:'apps',a:.57,perch:true,l:6,t:72,w:64},
 {id:'gyu',kind:'sfx',text:'ギュウギュウ',sc:'apps',a:.84,perch:true,l:6,t:56,fs:11},
 /* down to the gap */
 {id:'c2e',kind:'bub',t_:'c2e',sc:'apps',a:1.11,perch:true,l:8,t:44,w:60},
 {id:'e1',kind:'bub',t_:'e1',sc:'apps',a:1.38,perch:true,l:38,t:58,w:56},
 {id:'e2',kind:'bub',t_:'e2',sc:'apps',a:1.65,perch:true,l:8,t:72,w:56},
 {id:'c2f',kind:'bub',t_:'c2f',sc:'slot',a:.03,perch:true,l:38,t:84,w:52},
 {id:'shiin',kind:'sfx',text:'シーン',sc:'slot',a:.3,perch:true,l:52,t:12,fs:12},
 {id:'c2g',kind:'cap',t_:'c2g',sc:'slot',a:.57,perch:true,l:8,t:64,w:56},
 {id:'c2h',kind:'bub',t_:'c2h',sc:'slot',a:.84,perch:true,l:36,t:74,w:58},
 /* down to the napkin */
 {id:'c2i',kind:'cap',t_:'c2i',sc:'slot',a:1.11,perch:true,l:8,t:40,w:76},
 {id:'c2j',kind:'bub',t_:'c2j',sc:'slot',a:1.38,perch:true,l:34,t:54,w:62},
 /* ===== chapter 3 (cont.): back in the pocket, then the storm on the phone, then the rest of the pocket ===== */
 {id:'dosu',kind:'sfx',text:'ドスッ',fs:15,sc:'pocket7',a:0.259,perch:true,l:48,t:20},
 {id:'w7b',kind:'cap',t_:'w7b',night:true,sc:'pocket7',a:0.733,perch:true,l:24,t:76,w:70},
 {id:'w7c',kind:'bub',t_:'w7c',sc:'pocket7',a:0.970,perch:true,l:6,t:66,w:70},
 {id:'m1',kind:'cap',t_:'m1',sc:'phone4',a:-0.180,perch:true,l:7,t:66,w:64},
 {id:'st1',kind:'bub',t_:'st1',sc:'phone4',a:0.523,perch:true,l:30,t:74,w:60},
 {id:'pfff',kind:'sfx',text:'プシューッ',fs:12,sc:'phone4',a:0.766,perch:true,l:14,t:40},
 {id:'m3',kind:'bub',t_:'m3',sc:'phone4',a:1.008,perch:true,l:6,t:70,w:62},
 {id:'w7d',kind:'bub',t_:'w7d',sc:'pocket7',a:2.603,perch:true,l:30,t:64,w:62},
 {id:'w7e',kind:'bub',t_:'w7e',sc:'pocket7',a:2.840,perch:true,l:30,t:72,w:62},
 {id:'w7f',kind:'cap',t_:'w7f',sc:'pocket7',a:3.076,perch:true,l:6,t:62,w:66},
 {id:'don7',kind:'sfx',text:'ドン',fs:30,sc:'pocket7',a:3.313,perch:true,l:6,t:66},
 {id:'w7g',kind:'bub',t_:'w7g',sc:'pocket7',a:3.550,perch:true,l:26,t:74,w:70},
 {id:'tagl',kind:'cap',t_:'tagline',cls:'tagl',sc:'pocket7',a:3.786,perch:true,l:6,t:66,w:88},
 {id:'fin',kind:'cap',t_:'fin',sc:'pocket7',a:4.023,perch:true,l:30,t:78,w:40},
 {id:'kira',kind:'sfx',text:'キラッ',fs:14,sc:'pocket7',a:4.260,perch:true,l:10,t:62},
 {id:'w7h',kind:'bub',t_:'w7h',sc:'pocket7',a:4.496,perch:true,l:24,t:70,w:70},
 {id:'w7i',kind:'cap',t_:'w7i',sc:'pocket7',a:4.733,perch:true,l:6,t:62,w:74},
 {id:'c7tbc',kind:'cap',t_:'c7tbc',sc:'pocket7',a:4.969,perch:true,l:10,t:80,w:80},
 /* ===== chapter 3: one balloon every 62vh, all timed from the start of 'pen' ===== */
 {id:'t3',kind:'title',onart:true,ch:3,nfs:13.5,drop:true,long:true,sc:'pen',a:0.024,perch:true,l:7,t:60,w:86},
 {id:'s1',kind:'cap',t_:'s31',sc:'pen',a:0.270,perch:true,l:7,t:66,w:62},
 {id:'s2',kind:'cap',t_:'s32',sc:'pen',a:0.516,perch:true,l:30,t:78,w:62},
 {id:'sutsu',kind:'sfx',text:'スッ',fs:14,sc:'pen',a:0.762,perch:true,l:50,t:14},
 {id:'s3',kind:'bub',t_:'s33',sc:'pen',a:1.008,perch:true,l:8,t:70,w:60},
 {id:'s4',kind:'bub',t_:'s34',sc:'pen',a:1.254,perch:true,l:36,t:44,w:56},
 {id:'s5',kind:'bub',t_:'s35',sc:'pen',a:1.500,perch:true,l:8,t:58,w:60},
 {id:'baki',kind:'sfx',text:'バキィッ',fs:14,sc:'pen',a:1.746,perch:true,l:40,t:74},
 {id:'s6',kind:'bub',t_:'s36',sc:'pen',a:1.992,perch:true,l:8,t:70,w:64},
 {id:'s7',kind:'bub',t_:'s37',sc:'pen',a:2.238,perch:true,l:36,t:82,w:54},
 {id:'ton',kind:'sfx',text:'トン',fs:11,sc:'pen',a:2.484,perch:true,ledge:1,l:8,t:10},
 {id:'L1',kind:'cap',t_:'L1',sc:'pen',a:2.730,perch:true,l:6,t:62,w:66},
 {id:'L1b',kind:'bub',t_:'L1b',sc:'pen',a:2.976,perch:true,l:30,t:76,w:64},
 {id:'pikon',kind:'sfx',text:'ピコーン',fs:9,sc:'pen',a:3.222,perch:true,ledge:2,l:30,t:10},
 {id:'L2',kind:'cap',t_:'L2',sc:'pen',a:3.468,perch:true,l:6,t:62,w:70},
 {id:'L2b',kind:'bub',t_:'L2b',sc:'pen',a:3.714,perch:true,l:28,t:76,w:66},
 {id:'goun',kind:'sfx',text:'ゴウンゴウン',fs:7,sc:'pen',a:3.960,perch:true,ledge:3,l:46,t:10},
 {id:'L3',kind:'cap',t_:'L3',sc:'pen',a:4.206,perch:true,l:6,t:62,w:72},
 {id:'L3b',kind:'bub',t_:'L3b',sc:'pen',a:4.452,perch:true,l:32,t:76,w:62},
 {id:'s8',kind:'bub',t_:'s38',sc:'pen',a:4.698,perch:true,l:8,t:46,w:54},
 {id:'s9',kind:'bub',t_:'s39',sc:'pen',a:4.944,perch:true,l:38,t:60,w:56},
 {id:'gachan',kind:'sfx',text:'ガチャン',fs:14,sc:'pen',a:5.190,perch:true,l:8,t:72},
 {id:'s10',kind:'bub',t_:'s310',sc:'pen',a:5.437,perch:true,l:8,t:70,w:66},
 {id:'s11',kind:'bub',t_:'s311',sc:'pen',a:5.683,perch:true,l:34,t:80,w:60},
 {id:'s12',kind:'bub',t_:'s312',sc:'pen',a:5.929,perch:true,l:8,t:66,w:66},
 {id:'c3tbc',kind:'cap',t_:'c3tbc',sc:'pen',a:6.175,perch:true,l:10,t:80,w:80},
 /* ===== capítulo 5 (nuevo): la ficha de personaje. Un paso cada 62vh desde el inicio de 'rpg' ===== */
 {id:'t12',kind:'title',ch:12,nfs:15,drop:true,long:true,sc:'rpg',a:0.000,perch:true,l:7,t:62,w:86},
 {id:'k1',kind:'cap',t_:'k1',sc:'rpg',a:0.121,perch:true,l:7,t:66,w:76},
 {id:'pika',kind:'sfx',text:'ピコーン',fs:10,sc:'rpg',a:0.177,perch:true,l:46,t:62},
 {id:'k2',kind:'bub',t_:'k2',sc:'rpg',a:0.232,perch:true,l:6,t:70,w:66},
 {id:'k3',kind:'bub',t_:'k3',sc:'rpg',a:0.288,perch:true,l:30,t:76,w:64},
 {id:'k4',kind:'cap',t_:'k4',sc:'rpg',a:0.344,perch:true,l:7,t:66,w:66},
 {id:'k5',kind:'bub',t_:'k5',sc:'rpg',a:0.399,perch:true,l:32,t:74,w:60},
 {id:'jaki',kind:'sfx',text:'ジャキーン',fs:10,sc:'rpg',a:0.455,perch:true,l:8,t:64},
 {id:'k6',kind:'bub',t_:'k6',sc:'rpg',a:0.510,perch:true,l:30,t:72,w:64},
 {id:'k7',kind:'bub',t_:'k7',sc:'rpg',a:0.566,perch:true,l:6,t:76,w:66},
 {id:'k8',kind:'cap',t_:'k8',sc:'rpg',a:0.622,perch:true,l:24,t:66,w:70},
 {id:'gusa',kind:'sfx',text:'グサッ',fs:14,sc:'rpg',a:0.677,perch:true,l:10,t:64},
 {id:'k9',kind:'bub',t_:'k9',sc:'rpg',a:0.733,perch:true,l:30,t:74,w:64},
 {id:'lvup',kind:'sfx',text:'テッテレー',fs:10,sc:'rpg',a:0.788,perch:true,l:40,t:64},
 {id:'k10',kind:'bub',t_:'k10',sc:'rpg',a:0.844,perch:true,l:6,t:72,w:64},
 {id:'k11',kind:'bub',t_:'k11',sc:'rpg',a:0.900,perch:true,l:30,t:76,w:64},
 {id:'c12tbc',kind:'cap',t_:'c12tbc',sc:'rpg',a:0.955,perch:true,l:10,t:82,w:80},
 /* ===== chapter 5: one step every 62vh, timed from the start of 'street' (span 100vh) ===== */
 {id:'t4',kind:'title',onart:true,ch:4,nfs:13,stack:true,drop:true,long:true,sc:'ch6open',a:0.065,perch:true,l:7,t:60,w:86},
 {id:'v51',kind:'cap',t_:'v51',sc:'ch6open',a:0.739,perch:true,l:7,t:66,w:64},
 {id:'mo2',kind:'bub',t_:'mo2',sc:'ch6open',a:1.413,perch:true,l:6,t:66,w:70},
 {id:'pc1',kind:'piece',pc:1,sc:'mnml',a:0.000,perch:true,l:6,t:56,w:62},
 {id:'pc2',kind:'piece',pc:2,sc:'mnml',a:0.163,perch:true,l:32,t:66,w:62},
 {id:'pc3',kind:'piece',pc:3,sc:'mnml',a:0.326,perch:true,l:6,t:76,w:62},
 {id:'mo4',kind:'bub',t_:'mo4',sc:'mnml',a:0.489,perch:true,l:30,t:68,w:62},
 {id:'v52',kind:'cap',t_:'v52',sc:'mnml',a:0.653,perch:true,l:8,t:50,w:70},
 {id:'mo5',kind:'bub',t_:'mo5',sc:'mnml',a:0.816,perch:true,l:30,t:64,w:60},
 {id:'molink',kind:'cta',t_:'molink',href:'https://www.mnml.one',sc:'mnml',a:0.979,perch:true,l:20,t:72,w:60},
 {id:'mo6',kind:'bub',t_:'mo6',sc:'mnml',a:1.142,perch:true,l:8,t:62,w:64},
 /* ===== Güibbo: una escena 2,5D como la de Minimal One. 62vh por paso, desde el inicio de 'guibbo' (span 460vh) ===== */
 {id:'g61',kind:'cap',t_:'g61',navy:true,sc:'guibbo',a:0.020,perch:true,l:7,t:62,w:72},
 {id:'pc4',kind:'piece',pc:4,navy:true,sc:'guibbo',a:0.155,perch:true,l:6,t:60,w:62},
 {id:'pc5',kind:'piece',pc:5,navy:true,sc:'guibbo',a:0.290,perch:true,l:32,t:68,w:62},
 {id:'pc6',kind:'piece',pc:6,navy:true,sc:'guibbo',a:0.425,perch:true,l:6,t:76,w:62},
 {id:'g67',kind:'bub',t_:'g67',navy:true,sc:'guibbo',a:0.560,perch:true,l:28,t:66,w:66},
 {id:'cta',kind:'cta',t_:'gblink',navy:true,sc:'guibbo',a:0.695,perch:true,l:20,t:74,w:60},
 {id:'g6b',kind:'bub',t_:'g6b',sc:'guibbo',a:0.830,perch:true,l:8,t:64,w:72},
 {id:'c6tbc',kind:'cap',t_:'c6tbc',night:true,sc:'guibbo',a:0.965,perch:true,l:10,t:80,w:80},
 /* ===== chapter 9: one step every 62vh, timed from the start of 'shelf9' (span 80vh) ===== */
 {id:'t9',kind:'title',ch:9,nfs:19,drop:true,long:true,sc:'shelf9',a:-0.575,perch:true,l:7,t:60,w:86},
 {id:'x91',kind:'cap',t_:'x91',sc:'shelf9',a:0.200,perch:true,l:7,t:66,w:60},
 {id:'x92',kind:'bub',t_:'x92',sc:'shelf9',a:0.975,perch:true,l:28,t:74,w:66},
 {id:'x93',kind:'bub',t_:'x93',sc:'shelf9',a:1.750,perch:true,l:6,t:62,w:66},
 {id:'pot0',kind:'pot',slot:0,sc:'shelf9',a:2.525,perch:true,l:6,t:58,w:62},
 {id:'x94',kind:'bub',t_:'x94',sc:'shelf9',a:3.300,perch:true,l:32,t:74,w:60},
 {id:'pot1',kind:'pot',slot:1,sc:'shelf9',a:4.075,perch:true,l:32,t:58,w:62},
 {id:'x95',kind:'bub',t_:'x95',sc:'shelf9',a:4.850,perch:true,l:6,t:74,w:62},
 {id:'pot2',kind:'pot',slot:2,sc:'shelf9',a:5.625,perch:true,l:32,t:58,w:62},
 {id:'x96',kind:'cap',t_:'x96',sc:'shelf9',a:6.400,perch:true,l:8,t:70,w:74},
 {id:'x97',kind:'bub',t_:'x97',sc:'shelf9',a:7.175,perch:true,l:30,t:62,w:64},
 {id:'puru',kind:'sfx',text:'プルルル',fs:12,sc:'shelf9',a:7.950,perch:true,l:8,t:70},
 {id:'x98',kind:'bub',t_:'x98',sc:'shelf9',a:8.725,perch:true,l:30,t:72,w:60},
 {id:'c9tbc',kind:'cap',t_:'c9tbc',sc:'shelf9',a:9.500,perch:true,l:10,t:80,w:80},
 /* ===== chapter 10: one step every 62vh, timed from the start of 'call10' (span 120vh) ===== */
 {id:'t10',kind:'title',ch:10,nfs:19,drop:true,long:true,sc:'call10',a:-0.383,perch:true,l:7,t:60,w:86},
 {id:'y1n',kind:'cap',t_:'y1n',sc:'call10',a:0.133,perch:true,l:7,t:66,w:74},
 {id:'l102',kind:'bub',t_:'l102',sc:'call10',a:0.650,perch:true,l:6,t:70,w:66},
 {id:'l102b',kind:'bub',t_:'l102b',sc:'call10',a:1.167,perch:true,l:28,t:74,w:66},
 {id:'l103',kind:'bub',t_:'l103',sc:'call10',a:1.683,perch:true,l:30,t:84,w:64},
 {id:'chat10',kind:'chat10',sc:'call10',a:2.200,perch:true,l:5,t:34,w:90},
 {id:'shiin10',kind:'sfx',text:'シーン',fs:12,sc:'call10',a:2.717,perch:true,l:48,t:62},
 {id:'l104',kind:'bub',t_:'l104',sc:'call10',a:3.233,perch:true,l:6,t:70,w:70},
 {id:'c10tbc',kind:'cap',t_:'c10tbc',sc:'call10',a:3.750,perch:true,l:10,t:82,w:80},
 /* ===== chapter 11: one step every 62vh, timed from the start of 'quiet11' (span 100vh) ===== */
 {id:'t11',kind:'title',onart:true,ch:11,nfs:19,drop:true,long:true,sc:'quiet11',a:-0.460,perch:true,l:7,t:60,w:86},
 {id:'z1',kind:'cap',t_:'z1',sc:'quiet11',a:0.160,perch:true,l:7,t:64,w:74},
 {id:'z2',kind:'bub',t_:'z2',sc:'quiet11',a:0.780,perch:true,l:24,t:74,w:68},
 /* ===== el making of: 62vh por paso desde el inicio de 'mkof' (span 460vh); el cierre va en 'cont11', sobre negro ===== */
 {id:'mk1',kind:'piece',pc:'mk1',sc:'mkof',a:0.0348,perch:true,l:6,t:66,w:66},
 {id:'mk2',kind:'bub',t_:'mk2',sc:'mkof',a:0.1696,perch:true,l:28,t:72,w:66},
 {id:'mk3',kind:'piece',pc:'mk3',sc:'mkof',a:0.3043,perch:true,l:6,t:68,w:66},
 {id:'mk4',kind:'bub',t_:'mk4',sc:'mkof',a:0.4391,perch:true,l:26,t:74,w:68},
 {id:'code',kind:'code',sc:'mkof',a:0.5739,e:0.9565,stay:true,perch:true,l:5,t:17,w:90},
 {id:'mk5',kind:'bub',t_:'mk5',sc:'mkof',a:0.7087,perch:true,l:30,t:80,w:62},
 {id:'mk6',kind:'cap',t_:'mk6',sc:'mkof',a:0.8435,perch:true,l:6,t:80,w:76},
 /* ===== el caminar: 62vh por paso desde el inicio de 'mkpaso' (span 420vh) ===== */
 {id:'mk7',kind:'piece',pc:'mk7',sc:'mkpaso',a:0.030,perch:true,l:6,t:68,w:66},
 {id:'mk8',kind:'bub',t_:'mk8',sc:'mkpaso',a:0.330,perch:true,l:28,t:74,w:66},
 {id:'code2',kind:'code',v:'camina',sc:'mkpaso',a:0.560,e:0.97,stay:true,perch:true,l:5,t:17,w:90},
 {id:'mk9',kind:'cap',t_:'mk9',sc:'mkpaso',a:0.760,perch:true,l:6,t:80,w:78},
 {id:'fin11',kind:'cap',t_:'final',cls:'finalbox',sc:'cont11',a:0.05,perch:true,l:6,t:60,w:86},
 {id:'write11',kind:'btn',t_:'write',sc:'cont11',a:0.18,perch:true,l:20,t:80,w:60},
 {id:'z7',kind:'bub',t_:'z7',sc:'cont11',a:0.31,perch:true,l:8,t:70,w:70},
 {id:'tsuzuku',kind:'sfx',text:'つづく',fs:15,sc:'cont11',a:0.44,perch:true,l:30,t:62},
 {id:'z4',kind:'cap',t_:'z4',night:true,sc:'cont11',a:0.57,perch:true,l:8,t:70,w:84},
 {id:'end',kind:'end',sc:'cont11',a:0.86,perch:true,stay:true,l:6,t:24,w:88},
 {id:'footer',kind:'ext',sc:'cont11',a:1.1,perch:true,l:0,t:0,w:1}
];


/* ---------- la versión corta (para quien contrata): capítulos 1, 6, 7, 8 y 9 ----------
   Es el mismo manga sin los capítulos 2 a 5. En /corta ya llega recortada desde el servidor;
   desde la portada se recorta aquí mismo, sin recargar, al tocar «Versión corta». */
const CORTA_SC=new Set(['contract','kid8','parents8','eng8','timeline8','today8','rpg','ch6open','mnml','guibbo','back6','shelf9','bottles9','phone9','call10','desk10','gap10','quiet11','mkof','mkpaso','cont11','end']);
const TODOS=ITEMS.slice();
state.short=document.getElementById('col').dataset.version==='corta';
function recortar(){
  const vale=it=>it.only?(it.only==='corta')===state.short:(!state.short||CORTA_SC.has(it.sc));
  ITEMS.splice(0,ITEMS.length,...TODOS.filter(vale));
  if(state.short){state.route=state.route||'team'; state.skipGate=true}
}
recortar();
window.__ITEMS=ITEMS;
const track=$('#track');
function build(){ITEMS.forEach(x=>{if(x.kind==='chat'){x.done=false; x.t0=null}});
  track.innerHTML='';
  ITEMS.forEach((it,i)=>{
    let el;
    if(it.kind==='contract'){el=document.createElement('div');
      el.innerHTML=`<h1 class="ct-who">${T[lang].ctWho}</h1><h2>${T[lang].ctTitle}</h2><ol><li>${T[lang].ct1}</li><li>${T[lang].ct2}</li><li>${T[lang].ct3}</li></ol>
        <div class="ct-sign"><svg viewBox="0 0 220 40" aria-hidden="true"><path d="M6 28c14-20 22 10 34-6s16-14 22 2 18 6 26-10 12 4 20 10 24-14 34-6 18 10 30-2 20-8 36 4"/></svg><span>${T[lang].ctSign}</span></div>
        <div class="ct-btns"><button type="button" class="ok">${T[lang].ctOk}</button><button type="button" class="alt">${state.altNo?T[lang].ctNo:T[lang].ctAlt}</button></div><span class="ct-stamp" aria-hidden="true">済</span>`;
      if(state.signed) el.classList.add('signed');
      const sign=()=>{if(state.signed) return; state.signed=true; el.classList.add('signed'); cue('notes'); intro(); alFirmar()};
      el.querySelector('.ok').addEventListener('click',sign);
      el.querySelector('.alt').addEventListener('click',e=>{state.altNo=true; e.currentTarget.textContent=T[lang].ctNo; cue('bang'); setTimeout(sign,600)});
      it.perchEl=()=>el.querySelector('.ct-btns .alt')}
    else if(it.kind==='title'){el=document.createElement('div'); let k=0;
      const nm=it.ch?tx('name'+it.ch):T[lang].name;
      const multi=nm.includes('|');
      const words=(multi?nm.split('|'):nm.split(' ')).map(w=>`<span class="word">${[...w].map(c=>`<span style="animation-delay:${(k++*45)}ms">${c}</span>`).join('')}</span>`).join('');
      el.innerHTML=`<p class="tnum">${it.ch?tx('chapter'+it.ch):T[lang].chapter}</p><h2 class="tname${it.stack||multi?' stack':''}" aria-label="${nm.replace('|',' ')}" style="font-size:${it.nfs||20}cqw">${words}</h2><div class="tdim"><i></i><span>${it.ch?tx('dim'+it.ch):T[lang].dim}</span><i></i></div>`;
      it.perchEl=()=>{const w=el.querySelectorAll('.tname .word'); return w[Math.min(w.length-1,S.titleWord||0)]||el.querySelector('.tname')}}
    else if(it.kind==='hold'){el=document.createElement('button'); el.type='button';
      el.innerHTML=`<svg viewBox="0 0 100 100" aria-hidden="true"><circle class="disc" cx="50" cy="50" r="46"/><circle class="track" cx="50" cy="50" r="38"/><circle class="ring" cx="50" cy="50" r="38" stroke-dasharray="238.8" stroke-dashoffset="${state.inked?0:238.8}"/></svg><span class="lbl">${T[lang].hold}</span>`;
      if(state.inked) el.classList.add('done'); wireHold(el)}
    else if(it.kind==='ch'){el=document.createElement('button'); el.type='button'; el.setAttribute('aria-pressed',state.route===it.route?'true':'false');
      el.innerHTML=`<span class="bx" aria-hidden="true"></span><span>${T[lang][it.t_]}</span>`; if(it.r) el.classList.add('r');
      el.addEventListener('click',()=>{state.route=it.route; gateHold(false); $$('.it.ch').forEach(b=>b.setAttribute('aria-pressed',b===el?'true':'false'));
        const r=ITEMS.find(x=>x.id==='resp'); r.el.querySelector('.txt').textContent=T[lang]['r_'+state.route]; state.nagUntil=0; renderPots(); if(chat.step===0) startChat(); ITEMS.filter(x=>x.routeNote&&x.el).forEach(x=>{const rk=state.route==='founder'?'founder':'business'; x.el.querySelector('.nb b').textContent=T[lang]['c7T_'+rk]; x.el.querySelector('.nb span').textContent=T[lang]['c7B_'+rk]}); ITEMS.filter(x=>x.byRoute).forEach(x=>x.el.querySelector('.txt').textContent=T[lang][x.t_+'_'+state.route]); cue('bang')})}
    else if(it.kind==='note'){el=document.createElement('div');
      const bell='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a6 6 0 0 0-6 6v4l-2 3h16l-2-3V9a6 6 0 0 0-6-6zM9.5 19a2.5 2.5 0 0 0 5 0" fill="none" stroke="#000" stroke-width="2.2" stroke-linejoin="round"/></svg>';
      if(it.redacted) el.innerHTML=`<span class="ic">${bell}</span><span class="nb"><i class="bar" style="width:70%"></i><i class="bar" style="width:92%"></i><i class="bar" style="width:46%"></i></span>`;
      else if(it.routeNote){const rk=state.route==='founder'?'founder':'business'; el.innerHTML=`<span class="ic">${bell}</span><span class="nb"><b>${T[lang]['c7T_'+rk]}</b><span>${T[lang]['c7B_'+rk]}</span></span>`}
      else el.innerHTML=`<span class="ic">${bell}</span><span class="nb"><b>${T[lang][it.t_+'T']}</b><span>${T[lang][it.t_+'B']}</span></span>`}
    else if(it.kind==='chat'){el=document.createElement('div');
      el.innerHTML=`<p class="lv"><i></i>${T[lang].live}</p>`+[1,2,3,4,5].map(n=>`<p class="ln" data-full="${T[lang]['tr'+n].replace(/"/g,'&quot;')}"></p>`).join('');
      it.typed=0}
    else if(it.kind==='fb'){el=document.createElement('div'); el.innerHTML=`<b>${T[lang]['fb'+it.fb+'t']}</b><span>${T[lang]['fb'+it.fb]}</span>`}
    else if(it.kind==='blur'){el=document.createElement('div'); el.textContent=T[lang].priv}   /* just the stamp: the screenshots already are the blurred image above */
    else if(it.kind==='cta'){el=document.createElement('a'); el.href=it.href||'https://www.guibbo.com'; el.target='_blank'; el.rel='noopener'; el.textContent=T[lang][it.t_||'u5btn']}
    else if(it.kind==='chat10'){el=document.createElement('div');
      el.innerHTML=`<div class="chatlog" id="chatlog" aria-live="polite"></div>
        <div class="chatin" id="chatIn"><label class="sr" for="chatInput" id="chatLabel">Mensaje</label><input id="chatInput" type="text" autocomplete="off"><button type="button" id="chatSend">${T[lang].send}</button><button type="button" id="chatSkip" hidden>${T[lang].skip}</button></div>
        <div class="chatend" id="chatEnd" hidden><a id="chatMail" href="#">${T[lang].sendmail}</a><button type="button" id="chatAgain">${T[lang].cagain}</button></div>
        <p class="chatdir"><span>${T[lang].cdir}</span> <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> <button type="button" class="copiar">${T[lang].copiar}</button> <a href="https://www.linkedin.com/in/elias-gonzalez-45a3513b1" target="_blank" rel="noopener">LinkedIn</a></p>`;
      wireChat(el)}
    else if(it.kind==='vcorta'){el=document.createElement('button'); el.type='button'; el.textContent=T[lang].vcorta;
      el.addEventListener('click',()=>aCorta())}
    else if(it.kind==='btn'){el=document.createElement('button'); el.type='button'; el.textContent=T[lang][it.t_];
      el.addEventListener('click',()=>{const c=ITEMS.find(x=>x.id==='chat10'); scrollTo({top:c.at+2,behavior:'auto'}); setTimeout(()=>{const i=$('#chatInput'); i&&i.focus({preventScroll:true})},400)})}
    else if(it.kind==='pot'){el=document.createElement('div'); fillPot(el,it.slot)}
    else if(it.kind==='tl'){el=document.createElement('div'); el.innerHTML=`<b>${T[lang]['y'+it.tl]}</b><span>${T[lang]['tt'+it.tl]}</span>`}
    else if(it.kind==='piece'){el=document.createElement('div'); el.innerHTML=`<b>${T[lang]['pc'+it.pc+'t']}</b><span>${T[lang]['pc'+it.pc]}</span>`}
    else if(it.kind==='code'){el=document.createElement('div'); el.innerHTML=it.v==='camina'?codigoCaminar():codigoHTML(); it.demo={t0:0}}
    else if(it.kind==='shop'){el=document.createElement('div');
      el.innerHTML=`<b class="sn">${SHOPS[it.shop]}</b><span class="st">${T[lang]['dm'+it.shop]}</span><button type="button" class="walkin${opened.has(it.shop)?' done':''}">${T[lang].walk}</button>`;
      el.querySelector('.walkin').addEventListener('click',e=>openDemo(it.shop,e.currentTarget))}
    else if(it.kind==='big'){el=document.createElement('p'); el.textContent=it.text; if(it.cls) el.classList.add(it.cls)}
    else if(it.kind==='ext'){el=document.createElement('span'); el.hidden=true; it.perchEl=()=>document.getElementById('footName')}
    else if(it.kind==='end'){el=document.createElement('div');
      el.innerHTML=`<p>${tx('end')}</p><a href="#" class="write">${T[lang].fWrite}</a> <a href="#" class="again">${T[lang].again}</a>`;
      el.querySelector('.again').addEventListener('click',e=>{e.preventDefault(); scrollTo({top:0,behavior:'auto'})});
      el.querySelector('.write').addEventListener('click',e=>{e.preventDefault(); const c=ITEMS.find(x=>x.id==='chat10'); state.skipGate=true; scrollTo({top:c.at+2,behavior:'auto'})});
      it.perchEl=()=>el.querySelector('p')}
    else{el=document.createElement('p');
      const txt=it.text||(it.id==='resp'?(state.route?T[lang]['r_'+state.route]:''):it.byRoute?(state.route?T[lang][it.t_+'_'+state.route]:''):tx(it.t_));
      if(it.kind==='bub'){el.innerHTML='<span class="txt"></span><svg class="tail" viewBox="0 0 40 40" aria-hidden="true"><path d="M2 -4 L20 36 L38 -4"/></svg>'; el.querySelector('.txt').textContent=txt; it.tailEl=el.querySelector('.tail')}
      else el.textContent=txt;
      if(it.night) el.classList.add('night')}
    if(it.kind==='title'&&it.night) el.classList.add('night');
    if(it.kind==='title'&&it.onart) el.classList.add('onart');
    if(it.navy) el.classList.add('navy');
    if(it.cls&&it.kind!=='big') el.classList.add(it.cls);
    el.classList.add('it',it.kind); el.dataset.i=i; if(it.kind==='sfx') el.setAttribute('aria-hidden','true');
    el.style.left=it.l+'%'; el.style.top=it.t+'%'; if(it.w) el.style.width=it.w+'%'; if(it.fs) el.style.fontSize=it.fs+'cqw';
    track.appendChild(el); it.el=el; if(!it.perchEl||it._dp){it.perchEl=()=>el; it._dp=true}
    if(it.ledge){const L=it.ledge, sel=typeof L==='number'?'#ly'+L+' .ledge':L; it.perchEl=()=>document.querySelector(sel); it._dp=false}   /* he stands on the 3D layer itself */
  });
  $$('[data-t]').forEach(n=>{const v=T[lang][n.dataset.t]; if(v!=null) n.textContent=v});
  $('#lang').textContent=T[lang].lang; $('#lang').setAttribute('aria-label',T[lang].langLabel); $('#lang').lang=lang==='es'?'en':'es'; document.documentElement.lang=lang;
  $('#saltar').textContent=T[lang].saltar; $('#fMail').textContent=T[lang].fMail; renderRail(); progreso();
}
$('#lang').addEventListener('click',()=>{lang=lang==='es'?'en':'es'; build(); renderGag(); renderPots(); fitTitles(); frame(true); drawChat(); if(!$('#legal').hidden) openDoc($('#legal').dataset.doc,legalLast); if(!$('#potion').hidden) fillPotion(); if(!$('#menu').hidden) renderMenu(); if(!$('#demo').hidden) $('#demoTag').textContent=T[lang]['dm'+$('#demo').dataset.shop]});

function slamTitle(el){el.querySelectorAll('.word span').forEach((s,k)=>{
  const a=s.animate([{transform:'translateY(-160%) rotate(-14deg)',opacity:0},{transform:'translateY(8%) rotate(2deg)',opacity:1,offset:.75},{transform:'none',opacity:1}],
    {duration:340,delay:k*45,easing:'steps(5)',fill:'backwards'}); a.onfinish=()=>a.cancel(); setTimeout(()=>a.cancel(),1400)})}

function fakeFlip(){if(reduced) return; const col=$('#col'), tr=$('#track');
  cue('bang',700);
  const k=[{transform:'none'},{transform:'translateX(-7%) skewY(-2deg)'},{transform:'translateX(5%) skewY(1.5deg)'},{transform:'translateX(-3%)'},{transform:'none'}];
  col.animate(k,{duration:620,easing:'steps(6)'}); tr.animate(k.map(f=>({transform:f.transform==='none'?'translateX(-50%)':'translateX(-50%) '+f.transform})),{duration:620,easing:'steps(6)'});
  setTimeout(()=>cue('sweat',900),650)}

/* hold to ink */
function wireHold(el){const ring=el.querySelector('.ring'); let holding=false,last=0;
  const tick=t=>{if(!holding||state.inked) return; const dt=Math.min(64,t-last); last=t; state.inkK=Math.min(1,(state.inkK||0)+dt/1300);
    ring.style.strokeDashoffset=(238.8*(1-state.inkK)).toFixed(1); if(state.inkK>=1) inkDone(); else requestAnimationFrame(tick)};
  const start=e=>{if(state.inked) return; e.preventDefault(); holding=true; last=performance.now(); try{el.setPointerCapture(e.pointerId)}catch(_){} requestAnimationFrame(tick)};
  const stop=()=>{holding=false};
  el.addEventListener('pointerdown',start); el.addEventListener('pointerup',stop); el.addEventListener('pointercancel',stop); el.addEventListener('pointerleave',stop);
  el.addEventListener('contextmenu',e=>e.preventDefault());
  el.addEventListener('keydown',e=>{if((e.key===' '||e.key==='Enter')&&!e.repeat){e.preventDefault(); holding=true; last=performance.now(); requestAnimationFrame(tick)}});
  el.addEventListener('keyup',stop)}
function inkDone(){if(state.inked) return; state.inked=true; state.inkedAt=performance.now(); const h=ITEMS.find(x=>x.id==='hold').el; h.classList.add('done');
  h.querySelector('.ring').style.strokeDashoffset=0; const tg=$('#napTag span'); if(tg) tg.textContent=T[lang].w14d; cue('notes');
  try{navigator.vibrate&&navigator.vibrate(20)}catch(e){}}

/* nobody scrolls before signing */
function lock(on){document.documentElement.style.overflow=on?'hidden':''; document.body.style.overflow=on?'hidden':''}
const block=e=>{if(!state.free&&!e.target.closest('#menu,#demo,#potion,#legal')) e.preventDefault()};
/* blocking listeners make phones wait for the script on every touch: they only exist while they are needed */
addEventListener('wheel',block,{passive:false}); addEventListener('touchmove',block,{passive:false});
addEventListener('keydown',e=>{if(!state.free&&['ArrowDown','ArrowUp','PageDown','PageUp',' ','End','Home'].includes(e.key)&&!e.target.closest('button')) e.preventDefault()});
lock(true);
function intro(){
  setTimeout(()=>{state.contractGone=true},950);                       /* the stamp lands, then the contract flies off */
  setTimeout(()=>{                                                      /* he flails in the air for a second, then the hint shows up right under his feet */
    const h=ITEMS.find(x=>x.id==='hint'); h.t=Math.max(10,Math.min(state.short?80:70,(S.y+14)/innerHeight*100)); h.el.style.top=h.t+'%';
    const v=ITEMS.find(x=>x.id==='vcorta'); if(v){v.t=Math.min(84,h.t+14); v.el.style.top=v.t+'%'}
    state.hintShown=true},950+(reduced?0:1100));
}
function freeScroll(){if(state.free) return; state.free=true; lock(false); removeEventListener('wheel',block,{passive:false}); removeEventListener('touchmove',block,{passive:false})}

/* nobody leaves "who are you" without answering */
const gateY=()=>{const c=ITEMS.find(x=>x.id==='c4')||ITEMS.find(x=>x.id==='c3'); return c?c.at+30:Infinity};
let nagN=0;
function nag(){if(state.route||state.skipGate) return; const n=ITEMS.find(x=>x.id==='nag'); if(!n) return;
  /* al cuarto empujón la puerta cede: el chiste no puede costar un lector */
  if(performance.now()>(state.nagUntil||0)-1200){state.nags=(state.nags||0)+1;
    if(state.nags>=4){n.el.querySelector('.txt').textContent=T[lang].nagFree; state.skipGate=true; state.nagUntil=performance.now()+3200; gateHold(false); gateListeners(); cue('dots',1200); return}
    nagN=(nagN+1)%4; n.el.querySelector('.txt').textContent=T[lang]['nag'+nagN]}
  state.nagUntil=performance.now()+2600; cue(nagN%2?'anger':'dots',1200)}
const atGate=()=>!state.route&&!state.skipGate&&scrollY>=gateY()-2;
const gWheel=e=>{if(atGate()&&e.deltaY>0){e.preventDefault(); nag()}};
let ty0=0; addEventListener('touchstart',e=>{ty0=e.touches[0].clientY},{passive:true});
const gTouch=e=>{if(atGate()&&e.touches[0].clientY<ty0-2){e.preventDefault(); nag()}};
/* the gate's blocking listeners are attached only near the question, and removed for good once answered */
let gateOn=false;
function gateListeners(){const want=!state.route&&!state.skipGate&&state.free&&Math.abs(scrollY-gateY())<innerHeight*2.5;
  if(want===gateOn) return; gateOn=want; const f=want?addEventListener:removeEventListener;
  f('wheel',gWheel,{passive:false}); f('touchmove',gTouch,{passive:false})}
addEventListener('scroll',gateListeners,{passive:true});
addEventListener('keydown',e=>{if(atGate()&&['ArrowDown','PageDown',' ','End'].includes(e.key)&&!e.target.closest('button')){e.preventDefault(); nag()}});
/* a fling on a phone keeps gliding after the finger lifts, and no touch handler can stop that:
   so once the page reaches the question unanswered, the page itself stops scrolling until he gets an answer */
function gateHold(on){if(on===!!state.gated) return; state.gated=on; lock(on)}
addEventListener('scroll',()=>{if(!state.route&&!state.skipGate&&state.free&&scrollY>=gateY()-2){if(scrollY>gateY()+1) scrollTo(0,gateY()); gateHold(true); nag()}},{passive:true});
addEventListener('touchstart',()=>{if(state.gated) nag()},{passive:true});

/* ---------- chapter 10: the call (four questions, then your mail app opens) ---------- */
const CONTACT_EMAIL='rmngzps@gmail.com';
const chat={step:0,idea:'',name:'',email:'',budget:'',svc:null,log:[],started:false};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function say(who,key,raw){chat.log.push({who,key,raw}); drawChat()}
function ctext(m){const d=T[lang]; if(m.raw!==undefined) return m.raw; let s=d[m.key]||''; if(m.key==='cpick') s=s.replace('{N}',d[chat.svc+'N']); return s}
function drawChat(){const el=$('#chatlog'); if(!el) return; el.innerHTML=chat.log.map(m=>`<p class="msg ${m.who}">${esc(ctext(m))}</p>`).join(''); el.scrollTop=el.scrollHeight;
  $('#chatInput').placeholder=T[lang].ph; $('#chatLabel').textContent=T[lang].msgLabel;
  $('#chatSkip').hidden=chat.step!==3; $('#chatIn').hidden=chat.step>=4; $('#chatEnd').hidden=chat.step<4; $('#chatInput').type=chat.step===2?'email':'text';
  if(chat.step>=4) $('#chatMail').href=mailHref()}
function startChat(){chat.step=0; chat.log=[]; chat.started=true; if(chat.svc) say('bot','cpick'); say('bot',state.route==='founder'?'cq_founder':state.route==='team'?'cq_team':'cq_business')}
function mailHref(){const d=T[lang],nl='\n'; const eq=state.route==='team'; const body=[`${eq?d.mWhat_team:d.mWhat}: ${chat.idea}`,chat.svc?`${d.mSvc}: ${d[chat.svc+'N']}`:'',`${d.mName}: ${chat.name}`,`Email: ${chat.email}`,`${eq?d.mBudget_team:d.mBudget}: ${chat.budget||'—'}`,`${d.mRoute}: ${state.route||'—'}`].filter(Boolean).join(nl);
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(d.mSubj+': '+chat.name)}&body=${encodeURIComponent(body)}`}
function answer(v,skipped){v=(v||'').trim(); if(!v&&!skipped) return;
  if(chat.step===0){chat.idea=v; say('me',null,v); chat.step=1; say('bot','cname')}
  else if(chat.step===1){chat.name=v; say('me',null,v); chat.step=2; say('bot','cmail')}
  else if(chat.step===2){say('me',null,v); if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){say('bot','cbad'); return} chat.email=v; chat.step=3; say('bot',state.route==='team'?'cbud_team':'cbud')}
  else if(chat.step===3){const none=skipped||/^(no idea|ni idea|none|nada|-)$/i.test(v); chat.budget=none?'':v; if(v) say('me',null,v); chat.step=4; say('bot',none?(state.route==='team'?'cnobud_team':'cnobud'):'cbudok'); say('bot','cready')}
  $('#chatInput').value=''; cue('notes',900)}
function wireChat(el){if(!chat.started) startChat();
  el.querySelector('#chatSend').addEventListener('click',()=>answer($('#chatInput').value));
  el.querySelector('#chatInput').addEventListener('keydown',e=>{e.stopPropagation(); if(e.key==='Enter'){e.preventDefault(); answer($('#chatInput').value)}});
  el.querySelector('#chatSkip').addEventListener('click',()=>answer('',true));
  el.querySelector('#chatMail').addEventListener('click',()=>{$('#chatMail').href=mailHref(); cue('bang',900); setTimeout(()=>{if(chat.step===4){chat.step=5; say('bot','cdone')}},400)});
  el.querySelector('#chatAgain').addEventListener('click',()=>{chat.idea=chat.name=chat.email=chat.budget=''; startChat()});
  el.querySelector('.copiar').addEventListener('click',e=>{const b=e.currentTarget; const ok=()=>{b.textContent=T[lang].copiado; setTimeout(()=>{b.textContent=T[lang].copiar},1800)};
    try{navigator.clipboard.writeText(CONTACT_EMAIL).then(ok,()=>{})}catch(_){}});
  setTimeout(drawChat,0)}

/* ---------- chapter 9: three bottles, ordered by what the reader picked in chapter 1 ---------- */
const POT={bp:'#4DB8FF',mv:'#FF6B4A',m1:'#FFE14A'};
const potOrder=()=>state.route==='founder'?['bp','mv','m1']:state.route==='team'?['mv','m1','bp']:['m1','bp','mv'];
const uncorked=new Set();
function fillPot(el,slot){const id=potOrder()[slot], d=T[lang];
  el.style.setProperty('--liq',POT[id]); el.dataset.pot=id; el.classList.toggle('popped',uncorked.has(id));
  el.innerHTML=`<span class="cork" aria-hidden="true"></span><b class="pn9">${d[id+'N']}</b><span class="pp">${d[id+'P']}</span><span class="pq">“${d[id+'Q']}”</span><button type="button" class="uncork">${d.uncork}</button>`;
  el.querySelector('.uncork').addEventListener('click',e=>openPotion(id,e.currentTarget))}
function renderPots(){ITEMS.filter(x=>x.kind==='pot'&&x.el).forEach(x=>fillPot(x.el,x.slot));
  $$('.potpn').forEach(p=>{const id=potOrder()[+p.dataset.slot]; p.className=p.className.replace(/ p-\w+/g,'')+' p-'+id; p.setAttribute('aria-label',T[lang][id+'N'])})}
let potLast=null, potId=null;
function fillPotion(){const d=T[lang]; $('#potName').textContent=d[potId+'N']; $('#potBar').style.background=POT[potId];
  $('#potQuote').textContent='“'+d[potId+'Q']+'”'; $('#potPrice').textContent=d[potId+'P'];
  $('#potList').innerHTML=d[potId+'L'].split('|').map(x=>`<li>${x}</li>`).join('')}
function openPotion(id,btn){potId=id; potLast=btn; uncorked.add(id); renderPots(); cue('notes',1400); fillPotion();
  $('#potion').hidden=false; document.body.style.overflow='hidden'; $('#potPick').focus()}
function closePotion(){$('#potion').hidden=true; document.body.style.overflow=''; potLast&&potLast.focus()}
$('#potClose').addEventListener('click',closePotion);
$('#potion').addEventListener('click',e=>{if(e.target.id==='potion') closePotion()});
addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#potion').hidden) closePotion()});
/* "this one" goes on to the next chapter (the call), where the reader writes to me */
$('#potPick').addEventListener('click',()=>{chat.svc=potId; chat.idea=chat.name=chat.email=chat.budget=''; startChat(); closePotion(); const n=ITEMS.find(x=>x.id==='chat10'); scrollTo({top:n.at+2,behavior:'auto'})});

/* ---------- chapter 5: demo street ---------- */
const SHOPS={1:'OSO PEREZOSO',2:'COSTA',3:'AURELIA',4:'MASSA VIVA',5:'NUBE',6:'NONNA BEA'};
const opened=new Set(); let lastWalk=null;
function renderGag(){const n=opened.size, g=ITEMS.find(x=>x.id==='gag5'); if(!g||!g.el) return;
  g.el.textContent=n===6?T[lang].gag6:T[lang].gagN.replace('{n}',n).replace('{m}',6-n)}
function openDemo(n,btn){lastWalk=btn; opened.add(n); btn.classList.add('done'); renderGag(); cue('notes',1400);
  $('#demoName').textContent=SHOPS[n]; $('#demoTag').textContent=T[lang]['dm'+n]; $('#demo').dataset.shop=n; $('#demo').hidden=false; document.body.style.overflow='hidden'; $('#demoClose').focus()}
function closeDemo(){$('#demo').hidden=true; document.body.style.overflow=''; lastWalk&&lastWalk.focus()}
$('#demoClose').addEventListener('click',closeDemo);
$('#demo').addEventListener('click',e=>{if(e.target.id==='demo') closeDemo()});
addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#demo').hidden) closeDemo()});

/* ---------- depth: grid, floating story objects, the chibi's shadow ---------- */
const GL='#8a84a6', HLc='#FFE14A';
const G={
 steam:c=>`<svg viewBox="0 0 40 40"><path d="M14 36c-6-6 6-10 0-17s4-10 2-16M26 36c-6-6 6-10 0-17" fill="none" stroke="${c||GL}" stroke-width="2.4" stroke-linecap="round"/></svg>`,
 shaving:()=>`<svg viewBox="0 0 40 40"><path d="M20 20m-3 0a3 3 0 1 1 6 0a7 7 0 1 1-14 0a11 11 0 1 1 22 0" fill="none" stroke="${GL}" stroke-width="2"/><path d="M31 20l6 3" stroke="${HLc}" stroke-width="3"/></svg>`,
 coin:()=>`<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="14" fill="#fff" stroke="${GL}" stroke-width="2.4"/><circle cx="20" cy="20" r="9" fill="none" stroke="${GL}" stroke-width="1.4" stroke-dasharray="2 3"/></svg>`,
 lint:()=>`<svg viewBox="0 0 40 40"><path d="M8 22c4-8 8 6 12-2s8 8 12 0M12 14c3 4 6-2 9 2" fill="none" stroke="${GL}" stroke-width="1.8" stroke-linecap="round"/></svg>`,
 screw:()=>`<svg viewBox="0 0 40 40"><rect x="13" y="6" width="14" height="6" rx="2" fill="#fff" stroke="${GL}" stroke-width="2"/><path d="M20 12v22M15 16l10 3M15 22l10 3M15 28l10 3" stroke="${GL}" stroke-width="2"/></svg>`,
 gear:()=>`<svg viewBox="0 0 40 40"><path d="M20 4l3 5 6-2 1 6 6 1-2 6 5 3-5 3 2 6-6 1-1 6-6-2-3 5-3-5-6 2-1-6-6-1 2-6-5-3 5-3-2-6 6-1 1-6 6 2z" fill="#fff" stroke="${GL}" stroke-width="2" stroke-linejoin="round"/><circle cx="20" cy="20" r="5" fill="none" stroke="${GL}" stroke-width="2"/></svg>`,
 notif:()=>`<svg viewBox="0 0 60 24"><rect x="1" y="1" width="58" height="22" rx="8" fill="#fff" stroke="${GL}" stroke-width="2"/><circle cx="12" cy="12" r="5" fill="${HLc}" stroke="#000" stroke-width="1.4"/><rect x="22" y="9" width="30" height="5" rx="2.5" fill="${GL}" opacity=".5"/></svg>`,
 leaf:()=>`<svg viewBox="0 0 40 40"><path d="M20 4l4 9 9-3-4 9 8 4-9 3 2 9-10-5-10 5 2-9-9-3 8-4-4-9 9 3z" fill="${HLc}" stroke="#6b6450" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
 star:()=>`<svg viewBox="0 0 40 40"><path d="M20 4l3 13 13 3-13 3-3 13-3-13-13-3 13-3z" fill="#fff" stroke="#1A2B4C" stroke-width="1.8"/></svg>`,
 spark:()=>`<svg viewBox="0 0 40 40"><path d="M20 2l4 14 14 4-14 4-4 14-4-14-14-4 14-4z" fill="#FFD23A" stroke="#c98a00" stroke-width="1.2"/></svg>`,
 photo:()=>`<svg viewBox="0 0 40 40"><rect x="5" y="5" width="30" height="32" fill="#fff" stroke="${GL}" stroke-width="2"/><rect x="9" y="9" width="22" height="19" fill="${GL}" opacity=".35"/></svg>`,
 bubble:()=>`<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="13" fill="rgba(255,255,255,.6)" stroke="${GL}" stroke-width="2"/><path d="M13 15a8 8 0 0 1 6-5" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round"/></svg>`,
 ring:()=>`<svg viewBox="0 0 40 40"><path d="M10 10a14 14 0 0 0 0 20M30 10a14 14 0 0 1 0 20M5 6a20 20 0 0 0 0 28M35 6a20 20 0 0 1 0 28" fill="none" stroke="${HLc}" stroke-width="2.6" stroke-linecap="round"/></svg>`,
 napkin:()=>`<svg viewBox="0 0 40 40"><path d="M6 8l26-2 2 26-28 2z" fill="#fff" stroke="${GL}" stroke-width="2"/><rect x="12" y="12" width="9" height="15" rx="2" fill="none" stroke="${GL}" stroke-width="1.6"/><path d="M23 16q5 0 6 5" stroke="${HLc}" stroke-width="2" fill="none"/></svg>`
};
const CHG=[null,['steam','shaving','napkin'],['coin','lint'],['screw','gear'],['notif'],['leaf'],['star'],['spark'],['photo','leaf'],['bubble'],['ring','shaving'],['napkin','leaf']];
const TITLES=['t8','title','t2','t3','t12','t4','t9','t10','t11'];   /* scroll order: the origin comes first */
let FLO=[]; const FAR=$('#depthFar'), NEAR=$('#depthNear'), SHADOW=$('#cshadow');
function seeded(n){let s=n*9301+49297; return()=>{s=(s*9301+49297)%233280; return s/233280}}
const DEPTH_ON=true;
/* the storyboard (nēmu): empty panel borders and blue-pencil roughs, drawn on a seed so they never change */
const PEN='rgba(96,90,130,.20)', BLUE='rgba(110,150,205,.30)';
function rough(r,x1,y1,x2,y2,c,w){const j=()=>(r()-.5)*3; return `<path d="M${x1+j()} ${y1+j()}L${x2+j()} ${y2+j()}" stroke="${c}" stroke-width="${w}" fill="none" stroke-linecap="round"/><path d="M${x1+j()} ${y1+j()}L${x2+j()} ${y2+j()}" stroke="${c}" stroke-width="${w*.6}" fill="none" opacity=".7"/>`}
function box(r,x,y,w,h,c,lw){return rough(r,x,y,x+w,y,c,lw)+rough(r,x+w,y,x+w,y+h,c,lw)+rough(r,x+w,y+h,x,y+h,c,lw)+rough(r,x,y+h,x,y,c,lw)}
function sketch(r,x,y,w,h){const k=Math.floor(r()*6), cx=x+w*(.3+r()*.4), cy=y+h*(.35+r()*.3); let s='';
  if(k===0){const rr=Math.min(w,h)*.12; s+=`<circle cx="${cx}" cy="${cy-rr*1.6}" r="${rr}" stroke="${BLUE}" stroke-width="1.6" fill="none"/>`+rough(r,cx,cy-rr*.6,cx,cy+rr*2,BLUE,1.6)+rough(r,cx-rr*1.4,cy+rr*.2,cx+rr*1.4,cy+rr*.4,BLUE,1.4)+rough(r,cx,cy+rr*2,cx-rr,cy+rr*3.6,BLUE,1.4)+rough(r,cx,cy+rr*2,cx+rr,cy+rr*3.6,BLUE,1.4)}
  else if(k===1){s+=`<ellipse cx="${cx}" cy="${cy}" rx="${w*.26}" ry="${h*.16}" stroke="${PEN}" stroke-width="1.6" fill="none"/>`; for(let i=0;i<3;i++) s+=rough(r,cx-w*.15,cy-h*.06+i*h*.06,cx+w*.12,cy-h*.06+i*h*.06,PEN,1.2)}
  else if(k===2){s+=box(r,cx-w*.12,cy-h*.22,w*.24,h*.44,BLUE,1.6); for(let i=0;i<3;i++) s+=rough(r,cx-w*.08,cy-h*.1+i*h*.09,cx+w*.08,cy-h*.1+i*h*.09,BLUE,1.2)}
  else if(k===3){for(let i=0;i<7;i++){const xx=x+w*.1+i*w*.11; s+=rough(r,xx,y+h*.85,xx+w*.08,y+h*.55,PEN,1)}}
  else if(k===4){s+=rough(r,x+w*.15,cy,x+w*.75,cy-h*.12,BLUE,1.8)+rough(r,x+w*.75,cy-h*.12,x+w*.66,cy-h*.18,BLUE,1.8)+rough(r,x+w*.75,cy-h*.12,x+w*.68,cy-h*.03,BLUE,1.8)}
  else {const hy=y+h*(.55+r()*.2); s+=rough(r,x+w*.05,hy,x+w*.95,hy,PEN,1.3); s+=box(r,x+w*.55,hy-h*.3,w*.18,h*.3,PEN,1.2)}
  return s}
function nemuPage(seed,W,Hp){const r=seeded(seed); let s=`<svg viewBox="0 0 ${W} ${Hp}" width="${W}" height="${Hp}" xmlns="http://www.w3.org/2000/svg">`;
  const m=W*.06, g=W*.035; let y=m; const rows=2+Math.floor(r()*2);
  for(let i=0;i<rows;i++){const rh=(Hp-2*m-(rows-1)*g)/rows*(.8+r()*.4); const cols=1+Math.floor(r()*2); const tilt=(r()-.5)*W*.06;
    let x=m; for(let c=0;c<cols;c++){const cw=(W-2*m-(cols-1)*g)/cols; const h=Math.min(rh,Hp-m-y); if(h<40) break;
      s+=box(r,x,y,cw,h,PEN,2); if(r()<.85) s+=sketch(r,x,y,cw,h); if(cols>1&&c===0) x+=tilt; x+=cw+g}
    y+=rh+g; if(y>Hp-m-40) break}
  return s+'</svg>'}
/* ambient sound effects: huge, faint, the mood of each chapter */
const AMB=[null,['ゴゴゴ','ジーン'],['ザワザワ','シーン'],['ゴゴゴ','シーン'],['ガチャガチャ','カチカチ'],['ピコーン','ドヤッ'],['ピロン','ザワザワ'],['コポコポ','ゴクリ'],['リーン','ドキドキ'],['キラキラ','ジーン']];
let NEMU=null, AMBS=[];
/* hand-drawn sketches (from ChatGPT) and ambient sound effects behind the page, in parallax */
const BOC={contrato:['/img/fed8f6edcb640ff89df286d9d37bd663.webp',1525/1031],p13:['/img/c0c5f41eaeabd4046828f4b3b487c5e1.webp',867/1300],dialogo:['/img/797f6ff9d86899c3c8738e86566096d6.webp',1707/921],
  chibiA:['/img/06c37747db59ea87cf824640852535cc.webp',867/1300],p32:['/img/ba957fb3fd08f7ddc4f08d8b23ab6f7a.webp',867/1300],p36:['/img/ef410d86c1c3afd029cae0fea8c4652e.webp',867/1300],
  salto:['/img/562755e87cafe55ba9b72dd1f35a5cc0.webp',867/1300],caras:['/img/a9477b73cbce3d29e96f397909e9347f.webp',867/1300],p74:['/img/aa556f6b8c732028bbbb132cfeabf54e.webp',867/1300],
  arq:['/img/caa3b3c929659924fb7b7ae5a93d1144.webp',867/1300],footer:['/img/8bf4c5033a3c1e96f7da7869ea765186.webp',1702/924]};
const BOC_CH=[null,['contrato','p13','dialogo'],['chibiA'],['p32','p36'],['salto'],['caras'],['arq'],['p74'],['salto','arq'],['caras'],['dialogo'],['footer']];
const FIG={"u": "/img/2952ffa25327056e2180223ff63f4fd7.webp", "W": 2600, "H": 2560, "f": {"agachado": [5, 5, 510, 600], "arq-pelo": [525, 5, 442, 630], "arq-pie": [1045, 5, 215, 630], "aterriza": [1565, 5, 509, 497], "c-feliz": [2085, 5, 489, 630], "c-frente": [5, 645, 305, 630], "c-lado": [525, 645, 318, 630], "c-nervioso": [1045, 645, 509, 630], "c-senala": [1565, 645, 510, 525], "c-sentado": [2085, 645, 502, 630], "c-sorpresa": [5, 1285, 509, 630], "cayendo": [525, 1285, 509, 619], "chibi-espalda": [1045, 1285, 504, 630], "dibujando": [1565, 1285, 510, 422], "encogido": [2085, 1285, 509, 503], "frente": [5, 1925, 319, 630], "leyendo": [525, 1925, 510, 613], "recargado": [1045, 1925, 311, 630], "salto": [1565, 1925, 441, 630], "tres-cuartos": [2085, 1925, 291, 630]}};
const PLX=('ScrollTimeline' in window)&&!reduced;   /* compositor-driven parallax only where the browser supports it; otherwise they simply scroll with the page */
let plxAnims=[];
function buildDepth(){FAR.innerHTML=''; NEAR.innerHTML=''; FLO=[]; AMBS=[]; SKEL=[]; plxAnims.forEach(a=>a.cancel()); plxAnims=[];
  const old=col.querySelector(':scope > .bglayer'); if(old) old.remove(); NEMU=null;
  if(!DEPTH_ON) return; const vh=innerHeight, w=col.clientWidth, total=document.documentElement.scrollHeight, maxS=Math.max(1,total-vh);
  const tAt=TITLES.map(id=>{const it=ITEMS.find(x=>x.id===id); return it?it.at:Infinity});
  const chapterAt=y=>{let c=1; tAt.forEach((a,i)=>{if(y>=a-vh*.3) c=i+1}); return c};
  const lay=(speed)=>{const L=document.createElement('div'); L.className='plx';
    if(PLX){L.style.height=Math.ceil(maxS*speed+vh*2)+'px'; FAR.appendChild(L);
      plxAnims.push(L.animate([{transform:'translate3d(0,0,0)'},{transform:`translate3d(0,${-Math.round(maxS*speed)}px,0)`}],
        {timeline:new ScrollTimeline({source:document.scrollingElement||document.documentElement,axis:'block'}),fill:'both',easing:'linear'}))}
    else{L.classList.add('bglayer'); L.style.height=total+'px'; col.prepend(L)}
    return L};
  /* where something sits so it crosses the middle of the screen when the page is scrolled to "anchor" */
  const place=(speed,anchor,h)=>PLX?anchor*speed+vh*.5-h/2:anchor+vh*.5-h/2;
  const r=seeded(5);
  /* far layer: sketches only where the page is white (transitions, titles), never under full scenes */
  const SL=lay(.3);
  const cover=y=>{let c=0; for(const p of PINS){const dark=p.st.style.background.includes('#000')||p.st.querySelector('.pn.full'); if(!dark) continue;
      const top=y<p.top?p.top-y:(y>p.top+p.span?p.top+p.span-y:0), a=Math.max(0,top), b2=Math.min(vh,top+vh); if(b2>a) c+=(b2-a)}
    $$('.sc.gap').forEach(g=>{if(!g.style.background.includes('#000')) return; const a=Math.max(0,g.offsetTop-y), b2=Math.min(vh,g.offsetTop+g.offsetHeight-y); if(b2>a) c+=(b2-a)});
    const f=$('#foot'); if(f){const a=Math.max(0,f.offsetTop-y); if(a<vh) c+=vh-a}
    const n=tramoNegro(); if(n){const a=Math.max(n[0],y), b2=Math.min(n[1],y+vh); if(b2>a) c+=(b2-a)} return Math.min(1,c/vh)};
  const white=y=>cover(y)<.4;
  const used=[];
  const free=y=>used.every(u=>Math.abs(u-y)*(PLX?.3:1)>vh*.95);   /* spacing measured where they are drawn, so two never overlap */
  const putFull=(k,anchor,c)=>{const [u,ar]=BOC[k], tall=ar>1.2, sw=w*(tall?.92:1.35), sh=sw*ar;
    const im=new Image(); im.src=u; im.alt=''; im.decoding='async'; im.loading='lazy'; im.className='boc full'+(c===6?' navy':'');
    im.style.width=Math.round(sw)+'px'; im.style.top=Math.round(place(.3,anchor,sh))+'px'; im.style.left=Math.round(tall?w*.04:-w*.18)+'px';
    im.style.transform=`rotate(${((r()-.5)*4).toFixed(1)}deg)`; SL.appendChild(im); used.push(anchor)};
  let flip=0;
  const putFig=(name,anchor)=>{const [fx,fy,fw,fh]=FIG.f[name], h=vh*(.5+r()*.14), sc=h/fh, wpx=fw*sc;
    const el=document.createElement('div'); el.className='fig';
    el.style.width=Math.round(wpx)+'px'; el.style.height=Math.round(h)+'px'; el.style.top=Math.round(place(.3,anchor,h))+'px';
    el.style.left=Math.round(flip?w-wpx*.86:-wpx*.14)+'px';
    el.style.backgroundImage=`url(${FIG.u})`; el.style.backgroundSize=`${Math.round(FIG.W*sc)}px ${Math.round(FIG.H*sc)}px`; el.style.backgroundPosition=`${-Math.round(fx*sc)}px ${-Math.round(fy*sc)}px`;
    el.style.transform=`rotate(${((flip?1:-1)*(2+r()*3)).toFixed(1)}deg)`; flip^=1; SL.appendChild(el); used.push(anchor)};
  /* one whole sketch per chapter, at the first white moment of the chapter */
  const FULL=[null,'p13','dialogo','p32','p36','caras','arq','p74','chibiA','salto','contrato','footer'];
  const BOC_ON=false;   /* sketches parked for now: set to true to bring them back */
  for(let c=1;c<=TITLES.length&&BOC_ON;c++){const from=c===1?vh*.2:tAt[c-1]-vh*.3, to=c<TITLES.length?tAt[c]-vh:maxS; if(!isFinite(from)) continue;
    for(let y=Math.max(0,from); y<to; y+=vh*.2){if(white(y)&&free(y)){putFull(FULL[c],y); break}}}
  /* single character figures in the remaining white stretches, any pose, any chapter */
  const names=Object.keys(FIG.f); let ni=Math.floor(r()*names.length);
  for(let y=vh*.3; BOC_ON&&y<maxS; y+=vh*.25){if(white(y)&&white(y+vh*.5)&&free(y)){putFig(names[ni%names.length],y); ni+=3}}
  /* nearer layer: huge ambient sound effects */
  const AL=lay(.6); let side=0;
  for(let s=vh*.9; s<maxS; s+=vh*(1.15+r()*.45)){const ch=chapterAt(s), list=AMB[ch]||AMB[1], txt=list[Math.floor(r()*list.length)];
    const el=document.createElement('div'); el.className='amb'; el.textContent=txt; const fs=w*(.24+r()*.1); el.style.fontSize=fs+'px';
    el.style.top=Math.round(place(.6,s,fs*txt.length*.9))+'px'; if(side) el.style.right=(w*.01)+'px'; else el.style.left=(w*.01)+'px';
    el.style.transform=`rotate(${((r()-.5)*12).toFixed(1)}deg)`; side^=1; AL.appendChild(el)}
  NEMU=SL}
function frameDepth(){}
const SKW=800, SKD={"1": {"u": "/img/d2622cf45b21d768f1f4e4d180ab9b40.webp", "h": 3198, "it": [[0, 533], [533, 533], [1066, 533], [1599, 533], [2132, 533], [2665, 533]]}, "2": {"u": "/img/ede1754d74b4b9b307e4a5784068025d.webp", "h": 2799, "it": [[0, 1200], [1200, 533], [1733, 533], [2266, 533]]}, "3": {"u": "/img/37f21e78e827f8eae54545b655d94775.webp", "h": 5199, "it": [[0, 533], [533, 533], [1066, 1200], [2266, 1200], [3466, 1200], [4666, 533]]}, "4": {"u": "/img/357bdb235ed3342cefe963904701ea8d.webp", "h": 2532, "it": [[0, 400], [400, 533], [933, 533], [1466, 533], [1999, 533]]}, "5": {"u": "/img/c6775358c6300615a152e352f4ac56b8.webp", "h": 8500, "it": [[0, 450], [450, 450], [900, 1200], [2100, 1200], [3300, 1200], [4500, 1200], [5700, 1200], [6900, 1200], [8100, 400]]}, "6": {"u": "/img/c492f73b99cc93a93c79867de737987a.webp", "h": 2799, "it": [[0, 1200], [1200, 533], [1733, 533], [2266, 533]]}, "7": {"u": "/img/0dc8fd150f9f92292c29a5a842ca09f8.webp", "h": 4084, "it": [[0, 1200], [1200, 1151], [2351, 1200], [3551, 533]]}, "8": {"u": "/img/6a362bd432823c2192f4aae2cd644786.webp", "h": 2595, "it": [[0, 763], [763, 366], [1129, 400], [1529, 533], [2062, 533]]}, "9": {"u": "/img/e692fd1adc8777e29d347e45a75b9151.webp", "h": 5250, "it": [[0, 1200], [1200, 1200], [2400, 1200], [3600, 1200], [4800, 450]]}, "10": {"u": "/img/330aa3d100b2778b8f162ff3beeb764a.webp", "h": 1066, "it": [[0, 533], [533, 533]]}, "11": {"u": "/img/c0389bda7c87cdf196a28bffa91f92d7.webp", "h": 533, "it": [[0, 533]]}};
let SKEL=[], skIO=null;
function skObserve(){if(skIO) skIO.disconnect(); skIO=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const el=e.target; el.style.backgroundImage=`url(${el.dataset.bg})`; skIO.unobserve(el)}}),{rootMargin:'150% 0px'});
  SKEL.forEach(el=>skIO.observe(el))}
/* the chibi's shadow sits on whatever floor he's standing on, or about to land on */
function frameShadow(){if(!SHADOW) return; let floor=null;
  try{ if(S.mode==='perch'||S.mode==='lean') floor=S.y;
    else if(S.mode==='jump'&&S.j) floor=perchRect(S.j.i).top;
    else if(S.target!=null&&ITEMS[S.target]) floor=perchRect(S.target).top }catch(e){}
  if(floor==null||!isFinite(floor)){SHADOW.style.opacity='0'; return}
  const h=Math.max(0,floor-S.y), k=Math.max(.3,1-h/320), sw=W*.62*k, sh=W*.14*k;
  SHADOW.style.width=sw+'px'; SHADOW.style.height=sh+'px';
  SHADOW.style.transform=`translate(${(S.x-sw/2).toFixed(1)}px,${(floor-sh*.55).toFixed(1)}px)`; SHADOW.style.opacity=(k*.95).toFixed(2)}

/* ---------- footer + legal pages ---------- */
const PH=s=>`<span class="ph">${s}</span>`;
const DOCS={
 es:{legal:['Aviso legal',`
<h3>Quién está detrás</h3><p>Este sitio, eliasgonzalez.io, es de Elias González, profesional independiente en España. Puedes escribirme a rmngzps@gmail.com o llamarme al +34 672 886 847.</p>
<h3>Para qué sirve el sitio</h3><p>Presentar mi trabajo como desarrollador de software y los servicios que ofrezco. El precio de cada servicio es orientativo hasta que firmemos un presupuesto.</p>
<h3>Propiedad intelectual</h3><p>Los textos, el manga, los dibujos y el código de este sitio son míos, salvo las marcas de terceros. No los copies ni los reutilices sin permiso. Si quieres compartir el enlace, adelante.</p>
<h3>Minimal One y Güibbo</h3><p>Minimal One y Güibbo pertenecen a 3-102-946533 Sociedad de Responsabilidad Limitada (cédula jurídica 3-102-946533), sociedad registrada en Costa Rica de la que formo parte. Sus webs tienen sus propias condiciones.</p>
<h3>Responsabilidad</h3><p>Intento que todo lo que hay aquí esté al día, pero no respondo de los daños que pueda causar el uso de la información del sitio ni del contenido de las webs externas enlazadas.</p>
<h3>Ley aplicable</h3><p>Este aviso se rige por la ley española, incluida la Ley 34/2002 de servicios de la sociedad de la información (LSSI).</p>`],
  privacy:['Política de privacidad',`
<h3>Responsable</h3><p>Elias González. Contacto: rmngzps@gmail.com · +34 672 886 847.</p>
<h3>Qué datos trato y cómo me llegan</h3><p>El chat del capítulo 8 no guarda nada ni envía nada a ningún servidor: solo prepara un correo en tu propia app de email. Solo recibo tus datos si tú envías ese correo. En ese caso trato lo que me escribas: tu nombre, tu email, tu proyecto y, si lo indicas, tu presupuesto.</p>
<h3>Para qué los uso</h3><p>Para responderte y, si te interesa, preparar una propuesta. No los uso para publicidad ni los vendo.</p>
<h3>Base legal</h3><p>Tu consentimiento al escribirme y la aplicación de medidas precontractuales a tu petición (artículo 6.1.a y 6.1.b del RGPD).</p>
<h3>Cuánto tiempo los guardo</h3><p>Mientras dure nuestra conversación y, si llegamos a trabajar juntos, el tiempo que exija la ley para la facturación. Si no, los borro en un plazo máximo de 12 meses.</p>
<h3>Con quién los comparto</h3><p>Con nadie, salvo obligación legal. Mi proveedor de correo (Google, con Gmail) y el alojamiento del sitio (Vercel) los tratan solo por mi cuenta.</p>
<h3>Tus derechos</h3><p>Puedes pedir acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a rmngzps@gmail.com. Si crees que no los respeto, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).</p>`],
  cookies:['Política de cookies',`
<h3>Resumen</h3><p>Este sitio no usa cookies: ni de análisis, ni de publicidad, ni propias, ni de terceros. Por eso no ves ningún aviso de cookies al entrar.</p>
<h3>Lo que sí ocurre</h3><p>Las tipografías y las imágenes se sirven desde este mismo sitio, alojado en Vercel: no se pide nada a Google ni a ningún otro tercero al leer el manga. Como con cualquier web, el servidor recibe tu dirección IP para poder enviarte la página.</p>
<h3>Lo que recuerda la página</h3><p>Mientras la tienes abierta, la página recuerda en memoria el idioma, si firmaste el contrato y la opción que elegiste. Al cerrarla se olvida todo: por eso el contrato aparece en cada visita.</p>
<h3>Si esto cambia</h3><p>Si algún día añado cookies que no sean imprescindibles, te pediré permiso antes y actualizaré esta página.</p>`]},
 en:{legal:['Legal notice',`
<h3>Who’s behind this</h3><p>This site, eliasgonzalez.io, belongs to Elias González, a self-employed professional in Spain. You can write to rmngzps@gmail.com or call +34 672 886 847.</p>
<h3>What the site is for</h3><p>Showing my work as a software developer and the services I offer. Prices are indicative until we sign an estimate.</p>
<h3>Intellectual property</h3><p>The texts, the manga, the drawings and the code on this site are mine, except third-party trademarks. Please don’t copy or reuse them without permission. Sharing the link is fine.</p>
<h3>Minimal One and Güibbo</h3><p>Minimal One and Güibbo belong to 3-102-946533 Sociedad de Responsabilidad Limitada (legal ID 3-102-946533), a company registered in Costa Rica that I’m part of. Their websites have their own terms.</p>
<h3>Liability</h3><p>I try to keep everything here up to date, but I’m not liable for damage caused by using the information on this site or by the content of linked external websites.</p>
<h3>Applicable law</h3><p>This notice is governed by Spanish law, including Law 34/2002 on information society services (LSSI).</p>`],
  privacy:['Privacy policy',`
<h3>Controller</h3><p>Elias González. Contact: rmngzps@gmail.com · +34 672 886 847.</p>
<h3>What data and how it reaches me</h3><p>The chat in chapter 8 doesn’t store or send anything to any server: it only prepares an email in your own email app. I only receive your data if you send that email. Then I process what you write: your name, your email, your project and, if you share it, your budget.</p>
<h3>What I use it for</h3><p>To reply and, if you’re interested, to prepare a proposal. I don’t use it for advertising and I don’t sell it.</p>
<h3>Legal basis</h3><p>Your consent when you write to me, and pre-contractual steps taken at your request (GDPR article 6.1.a and 6.1.b).</p>
<h3>How long I keep it</h3><p>While our conversation lasts and, if we work together, as long as the law requires for invoicing. Otherwise I delete it within 12 months.</p>
<h3>Who I share it with</h3><p>Nobody, unless the law requires it. My email provider (Google, with Gmail) and the site’s hosting (Vercel) only process it on my behalf.</p>
<h3>Your rights</h3><p>You can request access, rectification, erasure, objection, restriction and portability by writing to rmngzps@gmail.com. If you think I’m not respecting them, you can complain to the Spanish Data Protection Agency (aepd.es).</p>`],
  cookies:['Cookie policy',`
<h3>Short version</h3><p>This site uses no cookies: no analytics, no advertising, no first-party, no third-party. That’s why you don’t see a cookie banner.</p>
<h3>What does happen</h3><p>The fonts and images are served from this same site, hosted on Vercel: nothing is requested from Google or any other third party while you read the manga. As with any website, the server receives your IP address so it can send you the page.</p>
<h3>What the page remembers</h3><p>While it’s open, the page keeps in memory your language, whether you signed the contract and the option you picked. When you close it, it forgets everything: that’s why the contract shows up on every visit.</p>
<h3>If this changes</h3><p>If I ever add non-essential cookies, I’ll ask for your permission first and update this page.</p>`]}
};
let legalLast=null;
function openDoc(k,btn){legalLast=btn; const [ti,body]=DOCS[lang][k]; $('#legalTitle').textContent=ti; $('#legalBody').innerHTML=body; $('#legal').dataset.doc=k;
  $('#legal').hidden=false; document.body.style.overflow='hidden'; $('#legalBody').scrollTop=0; $('#legalClose').focus()}
function closeDoc(){$('#legal').hidden=true; document.body.style.overflow=''; legalLast&&legalLast.focus()}
$$('.flegal [data-doc]').forEach(b=>b.addEventListener('click',()=>openDoc(b.dataset.doc,b)));
$('#legalClose').addEventListener('click',closeDoc);
$('#legal').addEventListener('click',e=>{if(e.target.id==='legal') closeDoc()});
addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#legal').hidden) closeDoc()});
$('#fTop').addEventListener('click',()=>scrollTo({top:0,behavior:'auto'}));
$('#fMenu').addEventListener('click',()=>openMenu());
$('#fWrite').addEventListener('click',()=>{const c=ITEMS.find(x=>x.id==='chat10'); state.skipGate=true; scrollTo({top:c.at+2,behavior:'auto'})});

/* ---------- sarcastic table of contents ---------- */
const MT={
 en:{title:"Contents",quip:"Skipping ahead? Fine. I spent weeks on those transitions, but fine.",sign:"Sign the contract first. You know how this works.",close:"Close",open:"Open menu",
  now:"You are here",ready:"Ready to read",draw:"Still being drawn",locked:"Locked",nope:"I said no. Scroll to the end like everyone else.",note:"Still being drawn. It’s hand-made, have some patience."},
 es:{title:"Índice",quip:"¿Te quieres saltar partes? Vale. Me pasé semanas con esas transiciones, pero vale.",sign:"Primero firma el contrato. Ya sabes cómo va esto.",close:"Cerrar",open:"Abrir menú",
  now:"Estás aquí",ready:"Listo para leer",draw:"Todavía en tinta",locked:"Bloqueado",nope:"Dije que no. Llega al final como todo el mundo.",note:"Todavía se está dibujando. Es hecho a mano, ten paciencia."}
};
const CH=[
 {n:1,id:'t8',en:["Origin arc","Tragic backstory. Involves haircuts."],es:["El origen","Pasado trágico. Incluye cortes de pelo."]},
 {n:2,id:'title',en:["The Napkin","Where it all started. Badly."],es:["La servilleta","Donde empezó todo. Mal."]},
 {n:3,id:'t2',en:["Other people’s pockets","Your customers’ phones. And way too many notifications."],es:["Bolsillos ajenos","Los teléfonos de tus clientes. Y demasiadas notificaciones."]},
 {n:4,id:'t3',en:["Looks simple. Isn’t.","What’s inside an app. Spoiler: a lot."],es:["Parece fácil. No lo es.","Lo que hay dentro de una app. Spoiler: mucho."]},
 {n:5,id:'t12',en:["Skills to prove it","A character sheet. Health bars included."],es:["Skills para probarlo","Una ficha de personaje. Con barras y todo."]},
 {n:6,id:'t4',en:["Real businesses","No jokes. Nah, yes jokes."],es:["Negocios reales","Sin chistes. Nah, sí hay chistes."],cs:{en:["Two projects","Minimal One and Güibbo."],es:["Dos proyectos","Minimal One y Güibbo."]}},
 {n:7,id:'t9',en:["Pick your poison","Prices. Yes, already. I see you."],es:["Elige tu veneno","Precios. Sí, ya. Te estoy viendo."]},
 {n:8,id:'t10',en:["Out of ink","The ideas ran out. The form didn’t."],es:["Sin tinta","Se acabaron las ideas. El formulario no."]},
 {n:9,id:'t11',locked:true,en:["???","Nice try. You have to earn this one."],es:["???","Buen intento. Este te lo tienes que ganar."],uen:["Making of","How it was made. By hand."],ues:["Making of","Cómo se hizo. A mano."]}
];
const visibles=()=>CH.filter(c=>!c.id||ITEMS.some(x=>x.id===c.id));
function capActual(){const y=scrollY; let cur=visibles()[0].n; visibles().forEach(c=>{const it=c.id&&ITEMS.find(x=>x.id===c.id); if(it&&y>=it.at-innerHeight*.5) cur=c.n}); return cur}

Object.assign(MT.es,{corta:"Versión corta: 6 capítulos",larga:"Ver el manga completo",rail:"Capítulos"});
Object.assign(MT.en,{corta:"Short version: 6 chapters",larga:"Read the full manga",rail:"Chapters"});

/* ---------- dónde está el lector: el capítulo y la barra de avance (y, en pantallas anchas, el índice al costado) ---------- */
function progreso(){const p=$('#progreso'); if(!p||!ITEMS.length) return; const t11=ITEMS.find(x=>x.id==='t11'); if(t11&&scrollY>=t11.at-innerHeight*.5) state.earned=true; const vs=visibles().filter(c=>c.id), cur=capActual(), i=Math.max(0,vs.findIndex(c=>c.n===cur)), d=T[lang];
  p.hidden=!state.signed; $('#progresoCap').textContent=cur===i+1?`${d.progreso} ${cur} ${d.de} ${vs.length}`:`${d.progreso} ${cur} · ${i+1} ${d.de} ${vs.length}`;
  const fo=$('#foot'), r=$('#rail'); if(fo&&r) r.classList.toggle('fuera',fo.getBoundingClientRect().top<innerHeight*.9);
  const max=Math.max(1,document.documentElement.scrollHeight-innerHeight); $('#progresoBar').style.transform=`scaleX(${Math.min(1,scrollY/max).toFixed(3)})`;
  $$('#rail .ritem').forEach(b=>{const now=+b.dataset.n===cur; b.toggleAttribute('aria-current',now); b.classList.toggle('now',now)})}
function renderRail(){const r=$('#rail'); if(!r) return; const m=MT[lang]; r.hidden=!state.signed; r.setAttribute('aria-label',m.rail);
  r.innerHTML=`<p class="rtit">${m.rail}</p><ol>`+visibles().map(c=>{const lk=c.locked&&!state.earned, nm=(!lk&&c.uen)?(lang==='es'?c.ues:c.uen):(state.short&&c.cs)?c.cs[lang]:c[lang];
    return `<li><button type="button" class="ritem" data-n="${c.n}"${lk?' aria-disabled="true"':''}><span class="rn">${c.n}</span><span class="rt">${nm[0]}</span></button></li>`}).join('')+`</ol>`;
  progreso()}
$('#rail').addEventListener('click',e=>{const b=e.target.closest('.ritem'); if(b) irACapitulo(+b.dataset.n,null,false)});
let progT=0; addEventListener('scroll',()=>{if(progT) return; progT=requestAnimationFrame(()=>{progT=0; const was=state.earned; progreso(); if(state.earned!==was) renderRail()})},{passive:true});
/* firmar enseña el avance, el índice del costado y el atajo al contacto */
function alFirmar(){$('#saltar').hidden=false; renderRail(); progreso()}
$('#saltar').addEventListener('click',()=>{const c=ITEMS.find(x=>x.id==='chat10'); state.skipGate=true; gateHold(false); scrollTo({top:c.at+2,behavior:'auto'}); setTimeout(()=>{const i=$('#chatInput'); i&&i.focus({preventScroll:true})},400)});

/* ---------- las hojas (índice, frascos, tienda, legal): el foco no se escapa y la página de atrás queda inerte ---------- */
const HOJAS=['#menu','#potion','#demo','#legal'];
const hojaAbierta=()=>HOJAS.map(s=>$(s)).find(h=>h&&!h.hidden);
const FONDO=()=>[$('#col'),$('#track'),$('#foot'),$('#lang'),$('#menuBtn'),$('#rail'),$('#saltar'),$('#progreso')].filter(Boolean);
new MutationObserver(()=>{const h=hojaAbierta(); FONDO().forEach(el=>{el.inert=!!h})}).observe(document.body,{subtree:true,attributes:true,attributeFilter:['hidden']});
addEventListener('keydown',e=>{if(e.key!=='Tab') return; const h=hojaAbierta(); if(!h) return;
  const f=[...h.querySelectorAll('a[href],button:not([disabled]),input,[tabindex]:not([tabindex="-1"])')].filter(x=>!x.closest('[hidden]')&&x.offsetParent!==null);
  if(!f.length) return; const a=f[0], z=f[f.length-1];
  if(!h.contains(document.activeElement)){e.preventDefault(); (e.shiftKey?z:a).focus(); return}
  if(e.shiftKey&&document.activeElement===a){e.preventDefault(); z.focus()} else if(!e.shiftKey&&document.activeElement===z){e.preventDefault(); a.focus()}});
function renderMenu(){const m=MT[lang], y=scrollY; $('#menu .mpage').classList.toggle('unsigned',!state.signed);
  $('#menuTitle').textContent=m.title; $('#menuQuip').textContent=state.signed?m.quip:m.sign; $('#menuClose').textContent=m.close; $('#menuBtnLabel').textContent=m.open;
  const cur=capActual();
  const vb=$('#menuVersion'); vb.textContent=state.short?m.larga:m.corta; vb.dataset.v=state.short?'larga':'corta';
  const t11=ITEMS.find(x=>x.id==='t11'); if(t11&&y>=t11.at-innerHeight*.5) state.earned=true;
  $('#mlist').innerHTML=visibles().map(c=>{const lk=c.locked&&!state.earned, nm=(!lk&&c.uen)?(lang==='es'?c.ues:c.uen):(state.short&&c.cs)?c.cs[lang]:c[lang]; const st=(lk||!state.signed)?'locked':!c.id?'draw':c.n===cur?'now':'ready';
    return `<li><button class="mitem" type="button" data-n="${c.n}" data-st="${st}"${st==='locked'?' aria-disabled="true"':''}><span class="mn">${c.n}</span><span class="mt">${nm[0]}</span><span class="mq">${nm[1]}</span><span class="ms">${m[st]}</span></button></li>`}).join('')}
function openMenu(){renderMenu(); $('#menu').hidden=false; $('#menuBtn').setAttribute('aria-expanded','true'); const f=$('#menu .mitem'); f&&f.focus()}
function closeMenu(){$('#menu').hidden=true; $('#menuBtn').setAttribute('aria-expanded','false'); $('#menuBtn').focus()}
$('#menuBtn').addEventListener('click',openMenu);
$('#menuClose').addEventListener('click',closeMenu);
$('#menu').addEventListener('click',e=>{if(e.target.id==='menu') closeMenu()});
function irACapitulo(n,b,cerrar){const c=CH.find(x=>x.n===n), m=MT[lang];
  if(!state.signed){const q=$('#menuQuip'); q.textContent=m.sign; q.classList.remove('nudge'); void q.offsetWidth; q.classList.add('nudge'); return false}
  if(c.locked&&!state.earned){if(b) b.querySelector('.mq').textContent=m.nope; return false}
  if(!c.id){if(b) b.querySelector('.mq').textContent=m.note; return false}
  const it=ITEMS.find(x=>x.id===c.id); if(!it) return false; if(cerrar) closeMenu(); gateHold(false); if(n>2) state.skipGate=true; scrollTo({top:Math.max(0,it.at+2),behavior:'auto'}); return true}
$('#mlist').addEventListener('click',e=>{const b=e.target.closest('.mitem'); if(!b) return; irACapitulo(+b.dataset.n,b,true)});
$('#menuVersion').addEventListener('click',()=>{if(state.short){location.href='/'; return}
  if(!state.signed){const q=$('#menuQuip'); q.textContent=MT[lang].sign; q.classList.remove('nudge'); void q.offsetWidth; q.classList.add('nudge'); return}
  closeMenu(); scrollTo({top:0,behavior:'auto'}); aCorta()});
addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#menu').hidden) closeMenu()});

/* ---------- pinning: before (scrolls in) · pin (fixed) · after (scrolls out) ---------- */
let PINS=[];
function measurePins(){PINS=$$('.sc').map(s=>{const st=s.querySelector(':scope > .stage'); return st?{s,st,top:s.offsetTop,span:s.offsetHeight-st.offsetHeight,mode:''}:null}).filter(Boolean)}
function pinFrame(){const y=scrollY; for(const p of PINS){const m=y<p.top?'before':y>p.top+p.span?'after':'pin';
  if(m!==p.mode){p.mode=m; p.st.classList.toggle('pin',m==='pin'); p.st.classList.toggle('after',m==='after')}}}
addEventListener('scroll',pinFrame,{passive:true});

/* scene geometry */
/* el capítulo 3 va entero sobre negro: el fondo fijo de la página se apaga mientras se lee (las escenas son transparentes) */
function tramoNegro(){const a=scenes.pocket2, b=scenes.pen; return a&&b?[a.top,b.top]:null}
let negroOn=null; function fondoNegro(){const n=tramoNegro(), on=!!n&&scrollY>=n[0]&&scrollY<n[1]; if(on===negroOn) return; negroOn=on; FAR&&FAR.classList.toggle('negro',on)}
addEventListener('scroll',fondoNegro,{passive:true}); addEventListener('resize',()=>{negroOn=null; fondoNegro()});
const scenes={}; function measure(){$$('.sc').forEach(s=>{scenes[s.dataset.sc]={top:s.offsetTop,span:Math.max(1,s.offsetHeight-innerHeight),el:s}});
  ITEMS.forEach(it=>{const s=scenes[it.sc]; it.at=s.top+it.a*s.span; it.until=it.e!=null?s.top+it.e*s.span:null});
  /* he hops onto the footer as soon as it rises past the middle of the screen */
  const ft=ITEMS.find(x=>x.id==='footer'), fo=document.getElementById('foot'); if(ft&&fo) ft.at=fo.offsetTop-innerHeight*.55;
  /* el «Fin» se va cuando él salta al pie: si no, el pie lo corta por la mitad */
  const en=ITEMS.find(x=>x.id==='end'); if(en&&ft) en.until=ft.at}

/* panel timelines (frames only for now) */
const ease=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
function parse(s){return s.split(';').map(seg=>{const [tt,rest]=seg.split('|'); const [t0,t1]=tt.trim().split(/\s+/).map(Number);
  const [a,b]=rest.split('>').map(x=>Object.fromEntries(x.trim().split(/\s+/).filter(Boolean).map(kv=>{const [k,v]=kv.split(':');return [k,+v]}))); return {t0,t1,a,b}})}
const tls=$$('[data-tl]').map(el=>({el,segs:parse(el.dataset.tl),sc:el.closest('.sc')}));
function stateAt(segs,p){const st={}; segs.forEach(g=>{new Set([...Object.keys(g.a),...Object.keys(g.b)]).forEach(k=>{const va=k in g.a?g.a[k]:g.b[k], vb=k in g.b?g.b[k]:g.a[k];
  if(p<=g.t0){if(!(k in st)) st[k]=va} else if(p>=g.t1) st[k]=vb; else st[k]=va+(vb-va)*ease((p-g.t0)/(g.t1-g.t0))})}); return st}

/* which perch is current: the last one whose moment has come */
function currentIndex(y){let cur=-1; ITEMS.forEach((it,i)=>{if(it.perch&&y>=it.at-1&&(!it.cond||it.cond())) cur=i}); return cur}

let curIdx=0, leaving=-1, leaveAt=0;
state.free=false;
const REVEAL=[...document.querySelectorAll('.pn[data-reveal]')].map(el=>({el,it:ITEMS.find(x=>x.id===el.dataset.reveal),on:null})).filter(r=>r.it);
function frame(force){
  const y=scrollY, vh=innerHeight;
  tls.forEach(t=>{const s=t.sc, p=Math.max(0,Math.min(1,(y-s.offsetTop)/Math.max(1,s.offsetHeight-vh))); const st=stateAt(t.segs,p);
    if(t.rest==null){const last=t.segs[0].b; t.rest=('r' in last)?`rotate(${last.r}deg)`:''; t.el.style.transform=t.rest}
    if('o' in st){const o=st.o.toFixed(2); if(o!==t.o){t.o=o; t.el.style.opacity=o}}});
  const idx=currentIndex(y);
  if(idx!==curIdx){onPerchChange(curIdx,idx); curIdx=idx}
  REVEAL.forEach(r=>{const on=y>=r.it.at-2; if(on!==r.on){r.on=on; r.el.classList.toggle('shown',on)}});
  const now=performance.now();
  ITEMS.forEach((it,i)=>{let on;
    if(it.stay) on=y>=it.at-1&&(it.until==null||y<it.until);
    else if(it.perch) on=(i===curIdx)||(i===leaving&&now<leaveAt);
    else on=y>=it.at-1&&(it.until==null||y<it.until)&&(!it.cond||it.cond());
    if(on&&!it.shown){it.shown=true; if(it.kind==='title'&&!reduced) slamTitle(it.el)}
    it.el.classList.toggle('on',on); it.el.classList.toggle('live',on); it.el.classList.toggle('gone',!on&&i<curIdx)});
}

/* ------------------------------------------------------------------
   The tiny architect
------------------------------------------------------------------- */
const WIND={style:{}};
function impact(){const tr=$('#track'); tr.classList.remove('shake'); void tr.offsetWidth; tr.classList.add('shake'); cue('bang',700); try{navigator.vibrate&&navigator.vibrate(30)}catch(e){}}
const SPR={"idle-1": "/img/d-9cc3ca425d20612d.webp", "idle-2": "/img/d-89e5d639de13bae1.webp", "blink": "/img/d-d0804977d4e1edac.webp", "look-up": "/img/d-6e31a51da22e359a.webp", "lean": "/img/d-f69ce8b2be873fe3.webp", "walk-1": "/img/d-7d46fe16a93d2bee.webp", "walk-2": "/img/d-409349503d1158aa.webp", "walk-3": "/img/d-606e606a212aecfb.webp", "walk-4": "/img/d-78e5bd31cc89a605.webp", "run-1": "/img/d-57c8552c98953aa0.webp", "run-2": "/img/d-8ae7fafbddb45dc4.webp", "run-3": "/img/d-602342ef1b75cb10.webp", "run-4": "/img/d-9e059f9122b20880.webp", "jump-1": "/img/d-0c2d0406102d873f.webp", "jump-2": "/img/d-257ea26e6af5528a.webp", "jump-3": "/img/d-4d84912f59393c88.webp", "jump-4": "/img/d-a3652326beb173b7.webp", "land": "/img/d-8954fb57a65c7277.webp", "fall-1": "/img/d-854bbc07ec25513e.webp", "fall-2": "/img/d-f14c814acf97caf1.webp", "flail-1": "/img/d-fb5d9497f50f7549.webp", "flail-2": "/img/d-3edc338a5bc48a60.webp", "sit": "/img/d-2a13d8b9b83729c3.webp", "sleep": "/img/d-a85d758e60c118be.webp", "surprised": "/img/d-f380b6fda6a1ff4b.webp", "annoyed": "/img/d-48c660477d818bcc.webp", "nervous": "/img/d-d6120e18508682f2.webp", "happy": "/img/d-ce20e5a643261153.webp", "point": "/img/d-2ed9bb08e6688080.webp"}; Object.values(SPR).forEach(u=>{const i=new Image(); i.src=u});
const C=$('#chibi'), IMG=C.querySelector('img'), SIGN=C.querySelector('.sign'), SPEED=C.querySelector('.speed'), col=$('#col');
let W=50,H=80;
function size(){const cw=col.clientWidth; W=Math.round(cw*.27); H=W; C.style.width=W+'px'; C.style.setProperty('--cw',cw+'px')}
const S={mode:'lean',x:0,y:0,vy:0,dir:-1,xo:.62,land:0,pt:0,j:null};
const GLYPH={q:'?',bang:'!',dots:'…',zz:'Zz',notes:'♪♫',
  sweat:'<svg viewBox="0 0 20 26"><path d="M10 1C6 9 2 13 2 18a8 8 0 0 0 16 0c0-5-4-9-8-17z" fill="#bfe6ff" stroke="#000" stroke-width="2.4"/></svg>',
  anger:'<svg viewBox="0 0 26 26"><path d="M3 9h7V3M23 9h-7V3M3 17h7v6M23 17h-7v6" fill="none" stroke="#000" stroke-width="5.5" stroke-linecap="round"/><path d="M3 9h7V3M23 9h-7V3M3 17h7v6M23 17h-7v6" fill="none" stroke="#FFE14A" stroke-width="2.6" stroke-linecap="round"/></svg>'};
let signT=0, signName='';
function cue(n,ms){ms=ms||(n==='notes'?1600:n==='zz'?1900:800); if(signName===n&&performance.now()<signT){signT=performance.now()+ms; return}
  signName=n; const RX={bang:'surprised',anger:'annoyed',sweat:'nervous',notes:'happy',q:'look-up'}; if(RX[n]) S.react={name:RX[n],until:performance.now()+Math.min(ms,1100)};
  SIGN.innerHTML=GLYPH[n]; SIGN.classList.remove('on'); void SIGN.offsetWidth; SIGN.classList.add('on'); signT=performance.now()+ms}
function puff(x,y){const p=document.createElement('span'); p.className='puff'; p.style.left=x+'px'; p.style.top=(y-H*.45)+'px'; document.body.appendChild(p); setTimeout(()=>p.remove(),460)}
const perchRect=i=>{const it=ITEMS[Math.max(0,i)], el=it.perchEl(), r=el.getBoundingClientRect();
  if(it.kind!=='sfx'||it.ledge) return r;
  /* sound effects are tilted and their letters sit inside the line box: stand on the ink, not on the box */
  const w=el.offsetWidth, h=el.offsetHeight, th=-8*Math.PI/180, cx=r.left+r.width/2, cy=r.top+r.height/2;
  const xo=(S.mode==='jump'&&S.j&&S.j.i===i)?S.j.xo:S.xo, lx=(xo-.5)*w, ly=-h/2+h*SFXPAD;
  return {left:r.left,right:r.right,width:r.width,height:r.height,top:cy+lx*Math.sin(th)+ly*Math.cos(th)}};
let SFXPAD=.21;

function onPerchChange(from,to){
  const now=performance.now();
  if(to===-1){leaving=-1; S.mode='flail'; S.pt=now; cue('bang',700); return}
  if(from===-1){leaving=-1; S.mode='fall'; S.vy=.05; S.target=to; S.long=false; return}
  if(to<from){ /* the reader went back up: ¡puf! */
    leaving=-1; puff(S.x,S.y);
    ITEMS.forEach(x=>{if(x.kind==='title'){x.el.style.transform=''; x.el.style.transition=''}}); S.long=false;
    requestAnimationFrame(()=>{const r=perchRect(to); S.xo=.5; S.x=r.left+r.width*S.xo; S.y=r.top; S.mode='perch'; S.land=performance.now(); puff(S.x,S.y); cue('q',700)});
    return}
  const target=ITEMS[to];
  if(target.drop){ /* his floor leaves first: he pedals, then falls */
    leaving=-1; S.mode='pedal'; S.pt=now; S.target=to; S.long=!!target.long; cue('bang',600); if(target.kind==='title') S.titleWord=9;
    if(S.long&&!reduced){target.el.style.transition='none'; target.el.style.transform=`translateY(${(innerHeight*1.1).toFixed(1)}px)`}
    return}
  leaving=from; leaveAt=now+650;     /* the old box stays until he has jumped off it */
  S.target=to;
  requestAnimationFrame(()=>{const r=perchRect(to);
    if(r.top>S.y+innerHeight*.22){S.mode='hop'; S.pt=performance.now(); S.long=false}      /* far below: step off and drop */
    else jumpTo(to)})}
function jumpTo(i){ITEMS.forEach(x=>{if(x.kind==='title') x.el.style.transform=''});const r=perchRect(i); S.mode='jump'; S.j={i,x0:S.x,y0:S.y,t0:performance.now(),xo:.28+Math.random()*.44,dur:ITEMS[i].jd||430}; S.dir=(r.left+r.width*S.j.xo)>S.x?1:-1}
function perch(i,x){if(ITEMS[i].id==='hint') freeScroll();
  if(ITEMS[i].kind==='title'&&S.titleWord>0){setTimeout(()=>{if(curIdx===i&&S.mode==='perch'){S.titleWord=0; jumpTo(i)}},520)} if(ITEMS[i].onLand&&!ITEMS[i].landed){ITEMS[i].landed=true; setTimeout(()=>{if(curIdx===i) ITEMS[i].onLand()},650)} const r=perchRect(i); S.mode='perch'; S.xo=Math.max(.1,Math.min(.9,(x-r.left)/r.width)); S.land=performance.now(); leaveAt=Math.min(leaveAt,performance.now()+120)}

let lastY=scrollY, vs=0, lastScroll=performance.now(), flips=[], lastDir=0, prev=performance.now(), saidDots=false;
addEventListener('scroll',()=>{const now=performance.now(); if(now-lastScroll>2500&&S.mode==='perch') cue('bang',600); lastScroll=now; saidDots=false},{passive:true});

function loop(now){const dt=Math.min(48,now-prev); prev=now;
  const y=scrollY, dy=y-lastY; lastY=y; vs=vs*.8+(dy/Math.max(dt,1))*.2;
  const d=Math.sign(dy); if(d&&d!==lastDir){if(lastDir) flips.push(now); lastDir=d} flips=flips.filter(t=>now-t<2600); if(flips.length>=4){cue('anger',1300); flips=[]}
  const idle=now-lastScroll, speed=Math.abs(vs);
  if(speed>2.6) cue('sweat',500);
  else if(idle>15000) cue('zz',1900);
  else if(idle>5000&&!saidDots){saidDots=true; cue('dots',1500)}
  if(now>signT) SIGN.classList.remove('on');

  let pose='idle'; const vh=innerHeight;
  if(S.mode==='lean'){const r=perchRect(curIdx); S.x=r.left+r.width*S.xo; S.y=r.top; pose='lean'}
  else if(S.mode==='perch'){const r=perchRect(curIdx); S.y=r.top;
    const walk=speed>1.6?.17:speed>.2?.06:0;
    if(walk){S.xo+=S.dir*walk*dt/Math.max(80,r.width); if(S.xo>.88){S.xo=.88;S.dir=-1} if(S.xo<.12){S.xo=.12;S.dir=1}}
    S.x=r.left+r.width*S.xo; pose=speed>1.6?'run':speed>.2?'walk':(idle>8000?'sit':'idle')}
  else if(S.mode==='flail'){pose='flail'}
  else if(S.mode==='pedal'){pose='pedal'; if(now-S.pt>(S.long?420:300)){ if(S.long){S.mode='skyfall'; S.ft=now; S.y0=S.y; S.x0=S.x} else {S.mode='fall'; S.vy=.1} }}
  else if(S.mode==='skyfall'){pose='freefall'; const el=ITEMS[S.target].el, e=now-S.ft;
    /* A: he drops with real gravity · B: the camera follows him, the page rushes up past him · C: the title hits his feet */
    const A=420, B=1500, yC=vh*.5;
    const wordOff=perchRect(S.target).top-(el.getBoundingClientRect().top), finalTop=(ITEMS[S.target].t/100)*vh+wordOff;
    el.style.transition='none';
    if(e<A){const k=e/A; S.y=S.y0+(yC-S.y0)*k*k; el.style.transform=`translateY(${(vh*1.1).toFixed(0)}px)`; WIND.style.opacity=(k*.9).toFixed(2)}
    else if(e<A+B){const k=(e-A)/B; S.y=yC+Math.sin(now/40)*1.5;
      const off=(1-k)*(vh*1.1)+(finalTop-yC)*0;                       /* the title travels up at full speed */
      el.style.transform=`translateY(${Math.max(finalTop-yC>0?0:0,off*(1)).toFixed(1)}px)`; WIND.style.opacity='.9'}
    else{const k=Math.min(1,(e-A-B)/160); S.y=yC+(finalTop-yC)*k; el.style.transform='translateY(0)'; WIND.style.opacity=(.9*(1-k)).toFixed(2);
      if(k>=1){el.style.transform=''; el.style.transition=''; S.long=false; S.y=perchRect(S.target).top; perch(S.target,S.x); impact()}}
    const r=perchRect(S.target), tx=r.left+r.width*.42; S.x+=(tx-S.x)*Math.min(1,dt/500)}
  else if(S.mode==='hop'){pose='jump'; S.y-=.12*dt; if(now-S.pt>140){S.mode='fall'; S.vy=.05}}
  else if(S.mode==='fall'){pose=S.long?'freefall':'fall'; S.vy=S.long?Math.min(.62,S.vy+.0006*dt):Math.min(2.6,S.vy+.0034*dt); const ny=S.y+S.vy*dt, r=perchRect(S.target);
    const tx=r.left+r.width*(S.long?.42:.5)+(S.long?Math.sin(now/260)*r.width*.18:0); S.x+=(tx-S.x)*Math.min(1,dt/(S.long?420:260));
    if(ny>=r.top){S.y=r.top; S.long=false; perch(S.target,S.x)} else S.y=Math.min(ny,vh-10)}
  else if(S.mode==='jump'){pose='jump'; const j=S.j, r=perchRect(j.i), k=Math.min(1,(now-j.t0)/j.dur), tx=r.left+r.width*j.xo, ty=r.top, px=(j.x0+tx)/2, py=Math.min(j.y0,ty)-70;
    S.jk=k; const a=(1-k)*(1-k), b=2*k*(1-k), c=k*k; S.x=a*j.x0+b*px+c*tx; S.y=a*j.y0+b*py+c*ty; if(k>=1) perch(j.i,tx)}
  if(reduced&&(S.mode==='jump'||S.mode==='fall'||S.mode==='hop'||S.mode==='pedal'||S.mode==='skyfall')){const i=S.mode==='jump'?S.j.i:S.target; if(ITEMS[i].id==='hint') freeScroll(); const r=perchRect(i); S.x=r.left+r.width*.5; S.y=r.top; S.mode='perch'; S.xo=.5}

  /* the drawn poses: pick the frame for what he is doing right now */
  const t=now, alt=(ms,n)=>Math.floor(t/ms)%n;
  let f='idle-1';
  const react=S.react&&now<S.react.until&&(pose==='idle'||pose==='sit')?S.react.name:null;
  if(pose==='lean') f='lean';
  else if(react) f=react;
  else if(pose==='idle'){f=(t%3600)<150?'blink':(alt(1100,2)?'idle-2':'idle-1')}
  else if(pose==='walk') f='walk-'+(alt(130,4)+1);
  else if(pose==='run') f='run-'+(alt(85,4)+1);
  else if(pose==='sit') f=idle>15000?'sleep':'sit';
  else if(pose==='pedal'||pose==='flail') f='flail-'+(alt(110,2)+1);
  else if(pose==='fall'||pose==='freefall') f='fall-'+(alt(pose==='freefall'?95:140,2)+1);
  else if(pose==='jump'){const k=S.mode==='jump'?S.jk||0:.3; f=k<.12?'jump-1':k<.5?'jump-2':k<.72?'jump-3':'jump-4'}
  const since=now-S.land; if(S.mode==='perch'&&since<180&&!react) f='land';
  if(reduced) f=pose==='lean'?'lean':'idle-1';
  if(f!==S.frame){S.frame=f; IMG.src=SPR[f]}
  let rot=0, ox=0;
  if(pose==='freefall'&&!reduced){rot=Math.sin(now/48)*4; ox=Math.sin(now/30)*1.5}
  SPEED.style.opacity=pose==='freefall'?'.85':pose==='fall'&&S.vy>.6?Math.min(1,S.vy-.6).toFixed(2):'0';
  C.style.transform=`translate(${(S.x-W/2+ox).toFixed(1)}px,${(S.y-H+H*.02).toFixed(1)}px)`;
  IMG.style.transform=`rotate(${rot.toFixed(2)}deg) scaleX(${S.dir<0?-1:1})`;
  pinFrame(); phone3D(); cork3D(); napkin3D(); apps3D(); storm(); devices3D(); guibbo3D(); making3D(); fichaRPG(); paso3D(); pan3D(); frame(); aimTails(); typeChat(now); demoSalto(now); frameDepth(); frameShadow();
  requestAnimationFrame(loop)}
/* ---------- the compass shot: a slow pan from left to right with sparks in front ---------- */
const PZ={w:$('#pzWrap'),img:$('#pzWrap .pz-img'),fx:$('#pzFx'),last:''};
(()=>{if(!PZ.fx) return; const r=seeded(41); for(let i=0;i<34;i++){const e=document.createElement('i');
  e.style.cssText=`left:${(r()*100).toFixed(1)}%;top:${(r()*100).toFixed(1)}%;--d:${(6+r()*22).toFixed(0)}px;--o:${(.35+r()*.6).toFixed(2)}`; PZ.fx.appendChild(e)}})();
function pan3D(){const s=scenes.today8; if(!s||!PZ.img) return; const y=scrollY, vh=innerHeight;
  const p=Math.max(0,Math.min(1,(y-(s.top-vh*.3))/Math.max(1,s.span+vh*.3)));           /* starts on the hair, ends on the compass */
  const W=PZ.w.clientWidth, IW=PZ.img.offsetWidth, travel=Math.max(0,IW-W), x=-travel*p;
  const key=Math.round(x)+'|'+Math.round(p*100); if(key===PZ.last) return; PZ.last=key;
  PZ.img.style.transform=`translate3d(${x.toFixed(0)}px,0,0) rotateY(${(5-p*10).toFixed(1)}deg) scale(${(1.08-p*.04).toFixed(3)})`;
  PZ.fx.style.transform=`translate3d(${(x*.35+p*-60).toFixed(0)}px,${(-p*40).toFixed(0)}px,80px)`}           /* the sparks sit closer to the camera: they move at a different speed */

/* ---------- the three screens on the café counter ---------- */

/* ---------- capítulo 9: el código del salto, con su demostración en vivo ---------- */
const PAL=/\b(const|let|Math)\b/g;
function pinta(l){if(l.trim().startsWith('//')) return `<span class="cm">${esc(l)}</span>`;
  return esc(l).replace(/('[^']*')/g,'<span class="st">$1</span>').replace(PAL,'<span class="kw">$1</span>').replace(/(?<![\w-])(\d+(?:\.\d+)?|\.\d+)(?![\w])/g,'<span class="nu">$1</span>')}
function codigoHTML(){const d=T[lang];
  return `<p class="cd-cab"><b>${d.codeT}</b><span>${d.codeF}</span></p><pre class="cd-pre" aria-label="${esc(d.codeC.filter(Boolean).join(' '))}"><code>${d.codeC.map(l=>`<span class="ln">${pinta(l)||' '}</span>`).join('')}</code></pre>
    <div class="cd-demo" aria-hidden="true"><svg viewBox="0 0 300 120" preserveAspectRatio="xMidYMid meet"><rect class="pl" x="14" y="92" width="64" height="12"/><rect class="pl" x="222" y="62" width="64" height="12"/>
      <path class="cu" d="M46 92 Q150 -8 254 62"/><circle class="cp" cx="150" cy="-8" r="0"/><line class="gu" x1="46" y1="92" x2="150" y2="22"/><line class="gu" x1="150" y1="22" x2="254" y2="62"/><circle class="pc" cx="150" cy="22" r="4"/></svg>
      <img class="cd-chibi" src="${SPR['jump-1']}" alt="" width="64" height="64">
      <ol class="cd-cuadros">${[1,2,3,4].map(n=>`<li><img src="${SPR['jump-'+n]}" alt="" width="48" height="48"></li>`).join('')}</ol></div>`}
/* el mismo salto que hace él: la Bézier entre los dos suelos, con el control 70 por encima del medio */
function demoSalto(now){demoCaminar(now); const it=ITEMS.find(x=>x.kind==='code'&&!x.v); if(!it||!it.el||!it.el.classList.contains('on')) return;
  const box=it.el.querySelector('.cd-demo'), img=it.el.querySelector('.cd-chibi'); if(!box||!img) return;
  const ciclo=1700, dur=430*2, t=reduced?dur*.5:(now%ciclo), k=Math.min(1,t/dur);
  const x0=46,y0=92,x1=254,y1=62,cx=150,cy=Math.min(y0,y1)-70;
  const x=(1-k)**2*x0+2*k*(1-k)*cx+k*k*x1, y=(1-k)**2*y0+2*k*(1-k)*cy+k*k*y1;
  const n=k<.12?1:k<.5?2:k<.72?3:4, w=box.clientWidth, h=box.clientHeight, sc=Math.min(w/300,h/120), ox=(w-300*sc)/2, oy=(h-120*sc)/2;
  const tam=img.offsetWidth||40; img.style.transform=`translate(${(ox+x*sc-tam/2).toFixed(1)}px,${(oy+y*sc-tam).toFixed(1)}px)`;
  if(it.demo.n!==n){it.demo.n=n; img.src=SPR['jump-'+n]; box.querySelectorAll('.cd-cuadros li').forEach((li,i)=>li.classList.toggle('now',i===n-1))}}


/* ---------- el caminar: su código y el chibi que lo ejecuta ---------- */
function codigoCaminar(){const d=T[lang];
  return `<p class="cd-cab"><b>${d.codeT2}</b><span>${d.codeF2}</span></p><pre class="cd-pre" aria-label="${esc(d.codeC2.filter(Boolean).join(' '))}"><code>${d.codeC2.map(l=>`<span class="ln">${pinta(l)||' '}</span>`).join('')}</code></pre>
    <div class="cd-demo cd-camina" aria-hidden="true"><svg viewBox="0 0 300 120" preserveAspectRatio="xMidYMid meet"><rect class="pl" x="20" y="92" width="260" height="12"/>
      <line class="gu" x1="${20+260*.12}" y1="84" x2="${20+260*.12}" y2="112"/><line class="gu" x1="${20+260*.88}" y1="84" x2="${20+260*.88}" y2="112"/></svg>
      <img class="cd-chibi" src="${SPR['walk-1']}" alt="" width="64" height="64">
      <ol class="cd-cuadros">${[1,2,3,4].map(n=>`<li><img src="${SPR['walk-'+n]}" alt="" width="48" height="48"></li>`).join('')}</ol></div>`}
/* lo mismo que hace él sobre su globo: avanza, da la vuelta en .12 y .88, cuatro dibujos cada 130 ms */
function demoCaminar(now){const it=ITEMS.find(x=>x.kind==='code'&&x.v==='camina'); if(!it||!it.el||!it.el.classList.contains('on')) return;
  const box=it.el.querySelector('.cd-demo'), img=it.el.querySelector('.cd-chibi'); if(!box||!img) return;
  const D=it.demo; if(D.xo==null){D.xo=.12; D.dir=1; D.t=now}
  const dt=Math.min(48,now-D.t); D.t=now;
  if(!reduced){D.xo+=D.dir*.06*dt/120; if(D.xo>.88){D.xo=.88;D.dir=-1} if(D.xo<.12){D.xo=.12;D.dir=1}}
  const n=reduced?1:Math.floor(now/130)%4+1, w=box.clientWidth, h=box.clientHeight, sc=Math.min(w/300,h/120), ox=(w-300*sc)/2, oy=(h-120*sc)/2;
  const x=20+260*D.xo, tam=img.offsetWidth||40;
  img.style.transform=`translate(${(ox+x*sc-tam/2).toFixed(1)}px,${(oy+92*sc-tam).toFixed(1)}px) scaleX(${D.dir})`;
  if(D.n!==n){D.n=n; img.src=SPR['walk-'+n]; box.querySelectorAll('.cd-cuadros li').forEach((li,i)=>li.classList.toggle('now',i===n-1))}}

/* el caminar en grande: un solo chibi que alterna sus cuatro pasos cada 130 ms (como el del manga);
   camina a lápiz y, con el scroll, la tinta lo recorre y sigue caminando terminado */
const PA={cam:$('#paCam'),big:$('#paBig')}; let paLast='', paN=0;
function paso3D(){const s=scenes.mkpaso; if(!s||!PA.cam) return; const y=scrollY, vh=innerHeight, now=performance.now();
  const n=reduced?1:Math.floor(now/130)%4+1; if(n!==paN){paN=n; PA.big.dataset.n=n}
  const at=id=>{const it=ITEMS.find(x=>x.id===id); return it?it.at:0};
  const a8=at('mk8')-vh*.25, ac=at('code2')-vh*.3, b=a8+(ac-a8)*.55;
  const T=reduced?(y>=a8?1:0):Math.max(0,Math.min(1,(y-a8)/Math.max(1,b-a8)));             /* la pasada de tinta */
  const key=[Math.round(T*200),y>=ac?1:0].join('|'); if(key===paLast) return; paLast=key;
  PA.cam.classList.toggle('codigo',y>=ac); PA.big.style.setProperty('--t',T.toFixed(3))}

/* el chibi dibujo por dibujo: el plato con sus cuatro vistas gira con el scroll,
   y el salto se dibuja cuadro a cuadro, de boceto a tinta, sobre el mismo arco del código */
const MK={cam:$('#mkCam'),plato:$('#mkPlato'),g:$$('#mkCam .mk-g'),f:$$('#mkCam .mk-f')}; let mkLast='';
/* capítulo 5: la ficha de personaje, en 2,5D. Una cámara la recorre (cada página con su ángulo y un vaivén con el scroll),
   las páginas se dan vuelta como las de un libro y quedan giradas al costado, y al subir de nivel la ficha da la vuelta entera */
const RP={cam:$('#rpCam'),f:$('#rpFicha'),c:$$('#rpFicha .rp-c'),p:$$('#rpFicha .rp-pag'),b:$$('#rpFicha .rp-st'),n:$('#rpNiv'),xp:$('#rpXp')}; let rpLast='';
const RP_ANG=[[-8,12],[24,-20],[-14,18],[16,-24],[-10,22],[6,0]];   /* rotateX, rotateY: antes de la primera página y en cada una */
function fichaRPG(){const s=scenes.rpg; if(!s||!RP.f) return; const y=scrollY, vh=innerHeight;
  const at=id=>{const it=ITEMS.find(x=>x.id===id); return it?it.at:Infinity};
  const t=['pika','k4','jaki','k8','lvup'].map(id=>at(id)-vh*.35), fin=at('c12tbc'); let pg=-1; t.forEach((v,i)=>{if(y>=v) pg=i});
  const on=y>=at('k1')-vh*.04, q=Math.max(0,Math.min(1,(y-t[0])/Math.max(1,at('k3')-vh*.35-t[0])));
  const llenas=pg<0?0:pg>0?RP.b.length:Math.min(RP.b.length,1+Math.floor(q*RP.b.length));
  const a=pg<0?at('k1')-vh*.04:t[pg], b=pg<0?t[0]:pg<4?t[pg+1]:fin, d=Math.max(0,Math.min(1,(y-a)/Math.max(1,b-a)))-.5;
  const [ax,ay]=RP_ANG[pg+1], rx=reduced?0:ax-d*8, ry=reduced?0:ay+d*16;
  const xp=Math.max(0,Math.min(1,(y-s.top)/s.span)), key=[on?1:0,pg,llenas,Math.round(xp*40),rx.toFixed(1),ry.toFixed(1)].join('|'); if(key===rpLast) return; rpLast=key;
  RP.cam.classList.toggle('on',on); RP.cam.classList.toggle('lvup',pg>=4); RP.cam.dataset.pg=pg;
  RP.cam.style.transform=`rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
  RP.p.forEach((p,i)=>{p.classList.toggle('on',i===Math.max(0,pg)); p.classList.toggle('ido',i<pg); p.style.setProperty('--k',pg-i)});
  RP.b.forEach((b,i)=>b.classList.toggle('lleno',i<llenas));
  const cara=pg<0?3:[6,1,4,5,2][pg]; RP.c.forEach(c=>c.classList.toggle('on',+c.dataset.c===cara));   /* sorprendido, con sueño, satisfecho, decidido, sudando, feliz */
  RP.n.textContent=pg>=4?'16':'15'; RP.xp.style.transform=`scaleX(${(pg>=4?1:xp*.9).toFixed(3)})`}
function making3D(){const s=scenes.mkof; if(!s||!MK.cam) return; const y=scrollY, vh=innerHeight;
  const at=id=>{const it=ITEMS.find(x=>x.id===id); return it?it.at:0};
  const a1=at('mk1')-vh*.6, a3=at('mk3')-vh*.3, a4=at('mk4')-vh*.3, ac=at('code')-vh*.3;
  const giro=reduced?0:Math.max(0,Math.min(1,(y-a1)/Math.max(1,a3-a1)))*540;                   /* vuelta y media mientras se lee el lápiz */
  const fin=(a4+ac)/2, paso=Math.max(1,(fin-a3)/4);                                                 /* el salto se reparte hasta entre el globo y el código */
  const n=y<a3?0:Math.min(5,1+Math.floor((y-a3)/paso));                                                 /* cuántos cuadros del salto van dibujados */
  /* el tercer cuadro se entinta con el scroll: la tinta barre el boceto en la dirección del salto */
  const tinta=reduced?(n>=3?1:0):Math.max(0,Math.min(1,(y-(a3+2*paso))/(paso*1.6)));
  const key=[y>=a1+vh*.25?1:0,Math.round(giro),n,y>=ac?1:0,Math.round(tinta*100)].join('|'); if(key===mkLast) return; mkLast=key;
  if(MK.f[2]) MK.f[2].style.setProperty('--t',tinta.toFixed(3));
  MK.cam.classList.toggle('lapiz',y>=a1+vh*.25); MK.cam.classList.toggle('tinta',y>=a3); MK.cam.classList.toggle('codigo',y>=ac);
  const r=Math.round(MK.cam.clientWidth*.19);
  MK.g.forEach((g,k)=>{g.style.transform=`translate(-50%,-100%) rotateY(${k*90}deg) translateZ(${r}px)`});
  MK.plato.style.transform=`rotateX(-6deg) rotateY(${(-giro).toFixed(1)}deg)`;
  MK.f.forEach((f,k)=>f.classList.toggle('in',k<n))}

/* Güibbo: la sala de noche al fondo y sus tres pantallas que llegan flotando, como las de Minimal One */
const GB={cam:$('#gbCam'),est:$('#gbCam .gb-est'),ia:$('#gbCam .gb-ia'),prof:$('#gbCam .gb-prof')}; let gbLast='';
function guibbo3D(){const s=scenes.guibbo; if(!s||!GB.cam) return; const y=scrollY, vh=innerHeight;
  const at=id=>{const it=ITEMS.find(x=>x.id===id); return it?it.at:0};
  const start=s.top-vh, end=s.top+s.span, q=Math.max(0,Math.min(1,(y-start)/Math.max(1,end-start)));
  const on=[y>=at('pc4')-vh*.3, y>=at('pc5')-vh*.3, y>=at('pc6')-vh*.3, y>=at('g67')-vh*.3];   /* la sala se enciende, después cada pantalla al nombrarla */
  const key=on.map(Number).join('')+'|'+Math.round(q*200); if(key===gbLast) return; gbLast=key;
  GB.est.classList.toggle('in',on[0]); GB.ia.classList.toggle('in',on[1]); GB.prof.classList.toggle('in',on[2]);
  GB.cam.style.transform=`translate(-50%,-50%) scale(${(1.02+q*.08).toFixed(3)}) rotateY(${(6-q*12).toFixed(1)}deg) rotateX(${(4-q*3).toFixed(1)}deg)`}
const DV={cam:$('#dvCam'),l:$('#dvCam .dv-laptop'),p:$('#dvCam .dv-phone'),t:$('#dvCam .dv-tablet')};
let dvLast='';
function devices3D(){const s=scenes.mnml; if(!s||!DV.cam) return; const y=scrollY, vh=innerHeight;
  const at=id=>{const it=ITEMS.find(x=>x.id===id); return it?it.at:0};
  const start=s.top-vh, end=s.top+s.span, q=Math.max(0,Math.min(1,(y-start)/Math.max(1,end-start)));
  const on=[y>=at('mo2')-vh*.2, y>=at('pc1')-vh*.3, y>=at('pc2')-vh*.3, y>=at('pc3')-vh*.3];   /* cup first, then web, app, panel as each is named */
  const key=on.map(Number).join('')+'|'+Math.round(q*200); if(key===dvLast) return; dvLast=key;
  DV.l.classList.toggle('in',on[1]); DV.p.classList.toggle('in',on[2]); DV.t.classList.toggle('in',on[3]);
  DV.cam.style.transform=`translate(-50%,-63%) scale(${(1+q*.08).toFixed(3)}) rotateY(${(-5+q*10).toFixed(1)}deg) rotateX(${(4-q*3).toFixed(1)}deg)`}

/* ---------- the notification storm ---------- */
const NS_TXT={es:['Nueva reserva','Pedido #482','Te dejaron 5★','Cita confirmada','Nuevo cliente','Pago recibido','Mesa para 4','Recogida lista','Corte a las 17:00','Puntos +10','Pedido en camino','Nueva reseña','Reserva mañana','Clase a las 19:00','Cupón usado','Pedido #483'],
            en:['New booking','Order #482','You got 5★','Appointment set','New customer','Payment received','Table for 4','Pickup ready','Haircut at 5pm','+10 points','Order on its way','New review','Booking tomorrow','Class at 7pm','Coupon used','Order #483']};
const NS={el:$('#nStorm'),cards:[],last:'',lang:''};
function nsBuild(){if(!NS.el) return; NS.el.innerHTML=''; NS.cards=[]; NS.lang=lang; const r=seeded(23), L=NS_TXT[lang];
  const cells=[]; for(let row=0;row<20;row++) for(let c=0;c<3;c++) cells.push([c,row]);       /* a jittered grid, so nothing is left uncovered */
  const all=[...cells,...cells];   /* 120 cards: enough to cover the screen, light enough for a phone */
  for(let i=all.length-1;i>0;i--){const j=Math.floor(r()*(i+1)); [all[i],all[j]]=[all[j],all[i]]}  /* random arrival order */
  all.forEach(([c,row],i)=>{const d=document.createElement('div'); d.className='ns'; d.innerHTML=`<i></i>${L[i%L.length]}`;
    const z=Math.round(r()*400);
    const L0=-22+c*36+r()*26, T0=-6+row*5.4+r()*3, s0=(1+r()*.45).toFixed(2), vx=(L0+18)-50, vy=T0-50, k=1/Math.max(1,Math.hypot(vx,vy));
    d.style.cssText=`left:${L0.toFixed(1)}%;top:${T0.toFixed(1)}%;--z:${z}px;--r:${((r()-.5)*28).toFixed(1)}deg;--s:${s0};`+
      `--gx:${(vx*k*(110+r()*80)).toFixed(0)}vw;--gy:${(vy*k*(110+r()*80)).toFixed(0)}vh;--gz:${z+200+Math.round(r()*500)}px;--gr:${((r()-.5)*720).toFixed(0)}deg;--gd:${(r()*.5).toFixed(2)}s;z-index:${z+300}`;
    NS.el.appendChild(d); NS.cards.push(d)});
  NS.was=false;
  NS.last=''}
function storm(){const s=scenes.phone4; if(!s||!NS.el) return; if(NS.lang!==lang) nsBuild(); const y=scrollY, vh=innerHeight;
  const at=id=>{const it=ITEMS.find(x=>x.id===id); return it?it.at:0};
  const A=at('m1')+vh*.25, B=at('st1')-vh*.1, P=at('pfff')-vh*.02;                          /* fill after "…and 47 more. Brace yourself", full by the remark, gone on the puff */
  const f=Math.max(0,Math.min(1,(y-A)/Math.max(1,B-A))), n=Math.round(NS.cards.length*Math.pow(f,1.5));
  const gone=y>=P, sw=Math.max(0,Math.min(1,(y-B)/Math.max(1,P-B))), inf=(1+sw*sw*1.1).toFixed(2), tense=sw>.75&&!gone;
  const key=n+'|'+gone+'|'+inf+'|'+tense; if(key===NS.last) return; NS.last=key;
  NS.el.style.setProperty('--inf',inf); NS.el.classList.toggle('tense',tense); NS.el.parentElement.classList.toggle('blown',gone);   /* the phone goes with them */
  NS.cards.forEach((c,i)=>{c.classList.toggle('on',i<n&&!gone); c.classList.toggle('gone',gone&&i<n)});
  if(gone&&!NS.was&&!reduced){const st=NS.el.parentElement; st.classList.remove('shake'); void st.offsetWidth; st.classList.add('shake')}
  NS.was=gone}

/* ---------- the 3D home screen ---------- */
/* every icon is its own piece: it flies in from in front of the reader's own screen and lands on its spot */
const AP_IC={u:'/img/227d672c8d34bd26e59ee9b47940e238.webp',W:1600,H:994,i:[[0, 0, 106, 150, 0, 0, 8], [108, 0, 320, 131, 110, 0, 8], [439, 0, 270, 66, 434, 0, 8], [0, 102, 332, 337, 708, 0, 8], [307, 51, 348, 324, 1044, 0, 8], [629, 4, 348, 308, 0, 341, 8], [5, 418, 329, 324, 352, 341, 8], [764, 599, 276, 232, 685, 341, 8], [731, 821, 306, 203, 965, 341, 8], [444, 611, 321, 270, 1275, 341, 8], [469, 859, 291, 165, 0, 669, 8], [131, 679, 347, 325, 295, 669, 8], [0, 738, 154, 286, 646, 669, 8], [304, 344, 349, 314, 804, 669, 8], [989, 747, 304, 277, 1157, 669, 8]]};
(()=>{const cam=$('#apCam'), ref=cam&&cam.querySelector('.ap-nueva'); if(!cam) return; const r=seeded(17);
  AP_IC.i.sort((p,q)=>(p[1]+p[0]*.3)-(q[1]+q[0]*.3)).forEach(([x,y,w,h,ax,ay,z],n)=>{const d=document.createElement('div'); d.className='ap-ic';
    d.style.cssText=`left:${(x/15.36).toFixed(2)}%;top:${(y/10.24).toFixed(2)}%;width:${(w/15.36).toFixed(2)}%;height:${(h/10.24).toFixed(2)}%;`+
      `background-image:url(${AP_IC.u});background-size:${(AP_IC.W/w*100).toFixed(2)}% ${(AP_IC.H/h*100).toFixed(2)}%;`+
      `background-position:${(ax/Math.max(1,AP_IC.W-w)*100).toFixed(2)}% ${(ay/Math.max(1,AP_IC.H-h)*100).toFixed(2)}%;--z:${z}px;`+
      `--fx:${((r()-.5)*160).toFixed(0)}%;--fy:${((r()-.5)*120+60).toFixed(0)}%;--fr:${((r()-.5)*70).toFixed(0)}deg`;
    cam.insertBefore(d,ref)})})();
const AP={cam:$('#apCam'),thumb:$('#apCam .ap-pulgar'),app:$('#apCam .ap-nueva'),slot:$('#apCam .ap-hueco')};
let apLast='';
function apps3D(){const s=scenes.slot; if(!s||!AP.cam) return; const y=scrollY, vh=innerHeight;
  const at=id=>{const it=ITEMS.find(x=>x.id===id); return it?it.at:0};
  const start=s.top-vh, end=s.top+s.span, q=Math.max(0,Math.min(1,(y-start)/Math.max(1,end-start)));
  const th=y>=at('c2g')-vh*.35, ap=y>=at('c2h')-vh*.3;
  const ics=AP.ics||(AP.ics=$$('#apCam .ap-ic')), A=s.top-vh*.55, B=at('c2g')-vh*.5;     /* one icon after another, top to bottom */
  const landed=Math.max(0,Math.min(ics.length,Math.floor((y-A)/Math.max(1,B-A)*ics.length)+1));                                  /* the thumb comes in to measure; then the app lands in the slot */
  const key=[th?1:0,ap?1:0,landed,Math.round(q*200)].join('|'); if(key===apLast) return; apLast=key;
  ics.forEach((e,i)=>e.classList.toggle('in',i<landed));
  AP.thumb.classList.toggle('in',th); AP.app.classList.toggle('in',ap); AP.slot.classList.toggle('gone',ap);
  AP.cam.style.transform=`translate(-50%,-50%) scale(${(1+q*.1).toFixed(3)}) rotateX(${(20+q*18).toFixed(1)}deg) rotateZ(${(-8+q*12).toFixed(1)}deg)`}

/* ---------- the 3D napkin ---------- */
const NK={cam:$('#nkCam'),l:{}}; $$('#nkCam .nk-l').forEach(e=>NK.l[e.className.split(' ')[1].slice(3)]=e);
/* the scene builds itself one object per beat, and he lands on each new piece */
const NK_IN={servilleta:'don',flores:'n1',dibujo:'n2',cafe:'n2',lapiz:'n3',chispa:'n4'};
let nkLast='';
function napkin3D(){const s=scenes.napkin; if(!s||!NK.cam) return; const y=scrollY, vh=innerHeight;
  const at=id=>{const it=ITEMS.find(x=>x.id===id); return it?it.at:0};
  const start=s.top-vh, end=s.top+s.span, q=Math.max(0,Math.min(1,(y-start)/Math.max(1,end-start)));
  const ins=Object.entries(NK_IN).map(([k,id])=>y>=at(id)-vh*.35?1:0);
  const key=ins.join('')+'|'+Math.round(q*200); if(key===nkLast) return; nkLast=key;
  Object.keys(NK_IN).forEach((k,i)=>NK.l[k]&&NK.l[k].classList.toggle('in',!!ins[i]));
  NK.cam.style.transform=`translate(-50%,-50%) scale(${(1+q*.12).toFixed(3)}) rotateX(${(22+q*16).toFixed(1)}deg) rotateZ(${(-7+q*11).toFixed(1)}deg)`}

/* ---------- the 3D cork board ---------- */
const CB={cam:$('#cbCam'),ph:{}}; $$('#cbCam img').forEach(i=>CB.ph[i.dataset.k]=i);
const CB_Z={hilo:10,gafete:60,robot:34,auditorio:48,casco:42,boleto:54,tribunal:38,birrete:52};
Object.entries(CB_Z).forEach(([k,z])=>{if(CB.ph[k]) CB.ph[k].style.transform=`translateZ(${z}px)`});
/* where the camera looks for each step of the timeline (pixels of the 1536x1024 board) */
const CB_T=[null,[320,290,'gafete'],[700,250,'robot'],[1200,220,'auditorio'],[265,655,'tribunal'],[680,740,'casco'],[1160,600,'birrete'],[1220,840,'boleto']];   /* IT badge, robots, lecture hall, courthouse, helmet, graduation cap, plane ticket */
let cbLast=-1;
function cork3D(){const s=scenes.timeline8; if(!s||!CB.cam) return; const y=scrollY, vh=innerHeight;
  let act=0; for(let k=1;k<=7;k++){const it=ITEMS.find(x=>x.id==='tl'+k); if(it&&y>=it.at-vh*.04) act=k}   /* the camera moves with the card it belongs to, not before */
  if(act===cbLast) return; cbLast=act;
  const PW=CB.cam.offsetWidth, PHh=CB.cam.offsetHeight, w=col.clientWidth;
  let tr;
  if(!act) tr=`translate(-50%,-50%) scale(${(w*.94/PW).toFixed(3)}) rotateX(24deg) rotateZ(-3deg)`;
  else{const [x,yy]=CB_T[act], dx=(x/1536-.5)*PW, dy=(yy/1024-.5)*PHh, rz=act%2?-6:5;
    tr=`translate(-50%,-50%) scale(.9) rotateX(34deg) rotateZ(${rz}deg) translate3d(${(-dx).toFixed(0)}px,${(-dy).toFixed(0)}px,0)`}
  CB.cam.style.transform=tr;
  const focus=act?CB_T[act][2]:null;
  Object.entries(CB_Z).forEach(([k,z])=>{const el=CB.ph[k]; if(!el||k==='hilo') return; const on=k===focus;
    el.classList.toggle('on',on); el.style.transform=`translateZ(${on?z+70:z}px)${on?' scale(1.06)':''}`})}

/* ---------- the 3D phone ---------- */
const PH3={cam:$('#phCam'),l1:$('#ly1'),l2:$('#ly2'),l3:$('#ly3'),parts:$('#phParts')};
let phLast='';
function phone3D(){const s=scenes.layers; if(!s||!PH3.cam) return; const y=scrollY, vh=innerHeight;
  const at=id=>{const it=ITEMS.find(x=>x.id===id); return it?it.at:0};
  const B=at('baki'), P=at('pikon'), G=at('goun'), start=s.top-vh, end=s.top+s.span;
  const e=Math.max(0,Math.min(1,(y-(B-vh*.15))/(vh*.45))), ease=e*e*(3-2*e);            /* bursts open on バキィッ */
  const W=col.clientWidth, g=W*.012+(W*.3-W*.012)*ease, act=y<P-vh*.25?1:y<G-vh*.25?2:3;   /* even closed, the layers keep a sliver of thickness */
  const q=Math.max(0,Math.min(1,(y-start)/Math.max(1,end-start)));                      /* the camera keeps orbiting from the moment it enters */
  const rz=(-38+q*26).toFixed(1), rx=(40+q*18).toFixed(1);
  const key=[Math.round(g),act,rz,rx].join('|'); if(key===phLast) return; phLast=key;
  PH3.cam.style.transform=`translate(-50%,-50%) rotateX(${rx}deg) rotateZ(${rz}deg)`;
  PH3.l3.style.transform=`translateZ(0px)`;
  PH3.l2.style.transform=`translateZ(${(g+(act>=3?g*1.1:0)).toFixed(0)}px)`; PH3.l2.style.opacity=act>=3?.2:1;
  PH3.l1.style.transform=`translateZ(${(g*2+(act>=2?g*1.4:0)).toFixed(0)}px)`; PH3.l1.style.opacity=act>=2?.16:1;
  PH3.parts.style.opacity=ease.toFixed(2); PH3.parts.style.transform=`translateY(${((1-ease)*30).toFixed(0)}px) scale(${(.82+ease*.18).toFixed(2)})`}
/* the live transcript types itself once it is on screen */
function typeChat(now){const c=ITEMS.find(x=>x.kind==='chat'); if(!c||!c.el) return;
  if(!c.el.classList.contains('on')){c.t0=null; return} if(c.t0==null) c.t0=now; if(c.done) return;
  const ls=[...c.el.querySelectorAll('.ln')], total=ls.reduce((a,l)=>a+l.dataset.full.length,0); let left=reduced?total:Math.floor((now-c.t0)/20);
  ls.forEach(l=>{const f=l.dataset.full, n=Math.max(0,Math.min(f.length,left)); left-=f.length; l.textContent=f.slice(0,n); l.classList.toggle('typing',n>0&&n<f.length)});
  if(left>=0) c.done=true}
/* every visible balloon points its tail at his head */
function aimTails(){const hx=S.x, hy=S.y-H*.62;
  ITEMS.forEach(it=>{if(!it.tailEl||!it.el.classList.contains('on')) return; const el=it.el, w=el.offsetWidth, h=el.offsetHeight, r=el.getBoundingClientRect();
    const cx=r.left+r.width/2, cy=r.top+r.height/2, a=Math.atan2(hy-cy,(hx-cx)*(h/w)), s=parseFloat(getComputedStyle(it.tailEl).width)||24;
    const px=w/2+(w/2-4)*Math.cos(a), py=h/2+(h/2-4)*Math.sin(a);
    it.tailEl.style.transform=`translate(${(px-s/2).toFixed(1)}px,${py.toFixed(1)}px) rotate(${(a*180/Math.PI-90).toFixed(1)}deg)`})}

/* titles shrink until every word fits on its line */
function fitTitles(){ITEMS.forEach(it=>{if(it.kind!=='title') return; const h=it.el.querySelector('.tname'); let fs=it.nfs||20; h.style.fontSize=fs+'cqw';
  let guard=40; while(guard--&&[...h.querySelectorAll('.word')].some(w=>w.scrollWidth>it.el.clientWidth+1)){fs-=.5; h.style.fontSize=fs+'cqw'}})}
function layout(){size(); fitTitles(); measure(); measurePins(); pinFrame(); cbLast=-1; tls.forEach(t=>{t.w=t.h=0}); buildDepth(); frame(true); progreso(); negroOn=null; fondoNegro()}
function aCorta(){if(state.short) return; state.short=true;
  $$('#col > .sc').forEach(s=>{if(!CORTA_SC.has(s.dataset.sc)){delete scenes[s.dataset.sc]; s.remove()}});
  recortar();
  for(let i=tls.length-1;i>=0;i--) if(!tls[i].el.isConnected) tls.splice(i,1);
  for(let i=REVEAL.length-1;i>=0;i--) if(!REVEAL[i].el.isConnected) REVEAL.splice(i,1);
  curIdx=Math.min(curIdx,ITEMS.length-1); leaving=-1;
  build(); renderGag(); renderPots(); layout(); startChat(); drawChat(); renderRail();
  try{history.replaceState(null,'','/corta')}catch(e){}
  if(!$('#menu').hidden) renderMenu(); cue('notes',1200)}

/* on phones the toolbar hides and shows while scrolling, which fires "resize" constantly:
   only rebuild when the width really changes (rotation, window resize), and never mid-scroll */
let lastW=innerWidth, rT=0;
addEventListener('resize',()=>{if(Math.abs(innerWidth-lastW)<2) return; clearTimeout(rT); rT=setTimeout(()=>{lastW=innerWidth; layout()},200)});
build(); renderGag(); renderPots(); layout(); renderRail();
requestAnimationFrame(t=>{prev=t; const r=perchRect(0); S.x=r.left+r.width*S.xo; S.y=r.top; loop(t)});
if(document.fonts&&document.fonts.ready) document.fonts.ready.then(layout);

}
