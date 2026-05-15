
require("dotenv").config();
const { Pool } = require("pg");

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_HxDNE2Th5rus@ep-shy-sky-aq84793a-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

const db = new Pool({
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

const updates = [
  {
    name: "Ricochet",
    description: `Diversión y seguridad para los más pequeños
El juguete eléctrico infantil Ricochet está diseñado especialmente para niños, con un motor de 800W y velocidad regulable, es perfecto para aprender. Con sus frenos de disco y suspensión Ricochet garantizará una experiencia de conducción segura, cómoda y llena de diversión en cada trayecto.
 
Faros LED: diversión brillante y segura
El juguete eléctrico para niños Ricochet cuenta con faros LED que iluminan el camino, ofreciendo mayor visibilidad y seguridad en cada paseo. Además, agregan un toque divertido y moderno, haciendo que cada aventura sea aún más emocionante para los pequeños conductores.
 
Medidor de velocidad incorporado
El medidor de velocidad incorporado en el juguete eléctrico para niños Ricochet permite visualizar en tiempo real la velocidad. Gracias a esta función integrada, los pequeños conductores y sus padres pueden tener un mayor control, garantizando una experiencia de manejo más segura y divertida.
 
Encendido con llave: diversión que comienza con seguridad
El vehículo eléctrico para niños Ricochet incorpora un sistema de encendido con llave, haciendo que cada aventura empiece de forma emocionante y segura. Los niños disfrutan la sensación real de conducir, mientras los padres confían en un diseño pensado para protegerlos en todo momento.
 
Limitador de velocidad: control seguro en cada trayecto
El juguete eléctrico para niños Ricochet cuenta con un limitador de velocidad que permite seleccionar entre velocidad mínima, media o máxima. Así, los niños disfrutan de la emoción de conducir a una velocidad limitada por los padres, los cuales tendrán tranquilidad de un manejo seguro y adaptado a cada etapa de aprendizaje.
 
Controles completos: diversión al alcance de la mano
El juguete eléctrico para niños Ricochet incorpora todos los controles esenciales para un manejo seguro y emocionante: palanca de freno trasero y delantero, maneta de acelerador, botón de claxon, encendido y apagado de luces, y nivel de energía visible. Cada función está diseñada para que los niños disfruten la experiencia de conducir con total control y seguridad,
 
Resistente y listo para la aventura
El vehículo eléctrico para niños Ricochet soporta hasta 60kg, pesa 51kg y se recarga completamente en 6-8 horas, combinando durabilidad y practicidad. Diseñado para que los niños disfruten de la diversión con total seguridad, mientras los padres confían en un vehículo robusto y fácil de mantener.`
  },
  {
    name: "EVOKID",
    description: `Diversión y seguridad para los más pequeños
El scooter eléctrico infantil EVOKID está diseñado especialmente para niños, con un motor de 130W es perfecto para aprender. EVOKID garantizará una experiencia de conducción segura, cómoda y llena de diversión en cada trayecto.
 
Diseñado para ser seguro
Disfruta de un manejo más seguro y cómodo con EVOKID, que incorpora un freno EABS y un freno de pie, garantizando control total y confianza en cada trayecto.
 
Pantalla LED inteligente
Pantalla LED con velocímetro, y nivel de batería, para tener toda la información de tu scooter de un vistazo.
 
¡Ideal para tu aventura de aprendizaje!
Disfruta de una experiencia única mientras aprendes, con una velocidad perfecta de 12 km/h y hasta 10 km de autonomía para explorar sin límites. ¡Cada paseo se convierte en diversión y descubrimiento!
 
Fácil de llevar
Scooter plegable y portable, diseñado para transportarlo y guardarlo fácilmente, ideal para moverte por la ciudad sin esfuerzo.
 
Dimensiones precisas para tu espacio
Conoce las medidas exactas del productopara asegurarte de que se adapta perfectamente a tu hogar, combinando funcionalidad y diseño sin comprometer tu espacio.`
  },
  {
    name: "Python",
    description: `Diversión y seguridad para los más pequeños
El juguete eléctrico infantil Python está diseñado especialmente para niños, con un motor de 800W y velocidad regulable, es perfecto para aprender. Con sus frenos de disco y suspensión Python garantizará una experiencia de conducción segura, cómoda y llena de diversión en cada trayecto.
 
Faros LED: diversión brillante y segura
El juguete eléctrico para niños Python cuenta con faros LED que iluminan el camino, ofreciendo mayor visibilidad y seguridad en cada paseo. Además, agregan un toque divertido y moderno, haciendo que cada aventura sea aún más emocionante para los pequeños conductores.
 
Medidor de velocidad incorporado
El medidor de velocidad incorporado en el juguete eléctrico para niños Python permite visualizar en tiempo real la velocidad. Gracias a esta función integrada, los pequeños conductores and sus padres pueden tener un mayor control, garantizando una experiencia de manejo más segura y divertida.
 
Encendido con llave: diversión que comienza con seguridad
El vehículo eléctrico para niños Python incorpora un sistema de encendido con llave, haciendo que cada aventura empiece de forma emocionante y segura. Los niños disfrutan la sensación real de conducir, mientras los padres confían en un diseño pensado para protegerlos en todo momento.
 
Limitador de velocidad: control seguro en cada trayecto
El juguete eléctrico para niños Python cuenta con un limitador de velocidad que permite seleccionar entre velocidad mínima, media o máxima. Así, los niños disfrutan de la emoción de conducir a una velocidad limitada por los padres, los cuales tendrán tranquilidad de un manejo seguro y adaptado a cada etapa de aprendizaje.
 
Controles completos: diversión al alcance de la mano
El juguete eléctrico para niños Python incorpora todos los controles esenciales para un manejo seguro y emocionante: palanca de freno trasero y delantero, maneta de acelerador, botón de claxon, encendido y apagado de luces, y nivel de energía visible. Cada función está diseñada para que los niños disfruten la experiencia de conducir con total control y seguridad,
 
Resistente y listo para la aventura
El vehículo eléctrico para niños Python soporta hasta 60kg, pesa 51kg y se recarga completamente en 6-8 horas, combinando durabilidad y practicidad. Diseñado para que los niños disfruten de la diversión con total seguridad, mientras los padres confían en un vehículo robusto y fácil de mantener.`
  },
  {
    name: "BEETLE",
    description: `Faro LED de alta intensidad
Conduce con total confianza en cualquier momento gracias a su faro LED de última generación, diseñado para ofrecer una iluminación potente, uniforme y de gran alcance. Con un diseño moderno y elegante, el faro aporta también un toque urbano que eleva la presencia del vehículo.
 
Pantalla digital multifuncional
Equipada con una pantalla digital clara y moderna, este vehículo te brinda toda la información esencial en tiempo real. Muestra indicadores clave de funcionamiento, tendrás siempre el control al alcance de la vista. Con esta pantalla, cada recorrido se convierte en una experiencia más práctica, tecnológica y conectada.
 
Asiento ergonómico
Diseñado para ofrecer la máxima comodidad, el asiento permite que viajes con total comodidad y la parrilla de carga se puede convertir en u asiento para tu acompañante. Su estructura acolchada y resistente brinda un soporte óptimo durante recorridos largos, reduciendo la fatiga y aumentando la sensación de confort.
 
Cajuela
El Beetle cuenta con una cajuela funcional y práctica que te permite transportar tus pertenencias con comodidad en cada viaje. Su diseño optimiza el espacio disponible, brindándote la versatilidad necesaria para el uso diario o escapadas de fin de semana, sin perder el estilo característico del Beetle.
 
Suspensión y frenos de alto rendimiento
Experimenta una conducción suave, estable y segura gracias a la combinación de su suspensión mecánica de alto desempeño y su freno de disco hidráulico en la llanta delantera y freno de tambor en la llanta trasera. Los frenos garantizan una frenada rápida, progresiva y confiable en cualquier situación.
 
Potencia: 650W
Voltaje: 48V o 60V
Batería: 48V 20Ah o 60V 20Ah
Cargador: 48V 3A o 60V 3A
Tiempo de carga: 6-8h
 
Velocidad Máxima 35km/h Autonomía 40km o 45km`
  },
  {
    name: "FAMILY Q",
    description: `Faro LED de alta intensidad
Conduce con total confianza en cualquier momento gracias a su faro LED de última generación, diseñado para ofrecer una iluminación potente, uniforme y de gran alcance. Con un diseño moderno y elegante, el faro aporta también un toque urbano que eleva la presencia del vehículo.
 
Pantalla digital multifuncional
Equipada con una pantalla digital clara y moderna, este vehículo te brinda toda la información esencial en tiempo real. Muestra indicadores clave de funcionamiento, tendrás siempre el control al alcance de la vista. Con esta pantalla, cada recorrido se convierte en una experiencia más práctica, tecnológica y conectada.
 
Asiento ergonómico
Diseñado para ofrecer la máxima comodidad, el asiento permite que viajes con total comodidad y la parrilla de carga se puede convertir en u asiento para tu acompañante. Su estructura acolchada y resistente brinda un soporte óptimo durante recorridos largos, reduciendo la fatiga y aumentando la sensación de confort.
 
Suspensión y frenos de alto rendimiento
Experimenta una conducción suave, estable y segura gracias a la combinación de su suspensión mecánica de alto desempeño y su freno de disco hidráulico en la llanta delantera y freno de tambor en la llanta trasera. Los frenos garantizan una frenada rápida, progresiva y confiable en cualquier situación.
 
Potencia: 650W
Voltaje: 48V o 60V
Batería: 48V 20Ah o 60V 20Ah
Cargador: 48V 3A o 60V 3A
Tiempo de carga: 6-8h
 
Velocidad Máxima 35km/h Autonomía 45km o 50km`
  },
  {
    name: "M5",
    description: `Listo para cualquier camino
El scooter eléctrico M5 cuenta con faro de luz LED, frenos de disco, amortiguadores y motor de 500W ofreciendo seguridad, potencia y comodidad en cada trayecto.
Velocidad Máxima: 40 km/h
Autonomía: 25-40 km
 
Diseñado para ser seguro
Disfruta de un manejo más seguro y cómodo con nuestro scooter, que incorpora un freno delantero de disco y un freno trasero de disco, garantizando control total y confianza en cada trayecto.
 
Pantalla LED inteligente
Pantalla LED con velocímetro, registro de kilómetros recorridos, control de luces y direccionales, para tener toda la información de tu scooter de un vistazo
 
Control total a tu alcance
Gestiona tu scooter de manera fácil y segura con el control remoto, que incluye funciones de alarma, encendido y apagado, brindándote comodidad, protección y control en todo momento.
 
Fácil de llevar
Scooter plegable y con asiento desmontable, diseñado para transportarlo y guardarlo fácilmente, ideal para moverte por la ciudad sin esfuerzo.
 
Conduce a tu medida
Ajusta la altura y posición del manubrio fácilmente gracias a su diseño retráctil, ofreciendo comodidad y adaptabilidad para cualquier usuario y situación de manejo.
 
Dimensiones precisas para tu espacio
Manubrio retráctil y altura ajustable para adaptarse a tu postura y estilo de conducción, garantizando confort y control en cada trayecto.`
  },
  {
    name: "M4",
    description: `Listo para cualquier camino
El scooter eléctrico M4 es ligero y de fácil conducción, cuenta con un motor de 500W y sube hasta 20° de inclinación, ofreciendo seguridad, potencia y comodidad en cada trayecto.
Velocidad Máxima: 30km/h
Autonomía: 30-40 km
 
Diseñado para ser seguro
Disfruta de un manejo más seguro y cómodo con nuestro scooter, que incorpora un freno delantero electrónico y un freno trasero de disco, garantizando control total y confianza en cada trayecto.
 
Fácil de llevar
Scooter plegable y ligero, diseñado para transportarlo y guardarlo fácilmente, ideal para moverte por la ciudad sin esfuerzo.
 
Dimensiones precisas para tu espacio
Conoce las medidas exactas del productopara asegurarte de que se adapta perfectamente a tu hogar, combinando funcionalidad y diseño sin comprometer tu espacio.`
  },
  {
    name: "M1",
    description: `Listo para cualquier camino
El scooter eléctrico M1 integra todos los elementos clave en un solo vistazo: faros de luz LED, frenos de disco, amortiguadores, motor de 1200W y sistema de tres velocidades (20 km/h, 40 km/h, 60 km/h), ofreciendo seguridad, potencia y comodidad en cada trayecto.
 
Perfecto para entornos urbanos
Disfruta de una movilidad ágil y práctica en entornos urbanos con hasta 40 km de autonomía, ideal para tus trayectos diarios.
 
Conduce a tu medida
Manubrio retráctil y altura ajustable para adaptarse a tu postura y estilo de conducción, garantizando confort y control en cada trayecto.
 
Fácil de llevar
Scooter plegable y ligero, diseñado para transportarlo y guardarlo fácilmente, ideal para moverte por la ciudad sin esfuerzo.
 
100% eléctrico, 0% estrés
Olvídate de la gasolina y ahorra tiempo mientras te desplazas. Monitorea tu viaje en tiempo real con control remoto y conexión Bluetooth, disfrutando de un transporte eficiente y conectado.
 
Pantalla LED inteligente
Pantalla LED con velocímetro, registro de kilómetros recorridos, control de luces y direccionales, para tener toda la información de tu scooter de un vistazo.`
  },
  {
    name: "ZEUS",
    description: `Faro LED de alta intensidad
Conduce con total confianza en cualquier momento gracias a su faro LED de última generación, diseñado para ofrecer una iluminación potente, uniforme y de gran alcance. Con un diseño moderno y elegante, el faro aporta también un toque urbano que eleva la presencia del vehículo.
 
Pantalla digital multifuncional
Equipada con una pantalla digital clara y moderna, este vehículo te brinda toda la información esencial en tiempo real. Muestra indicadores clave de funcionamiento, tendrás siempre el control al alcance de la vista. Con esta pantalla, cada recorrido se convierte en una experiencia más práctica, tecnológica y conectada.
 
Asiento ergonómico
Diseñado para ofrecer la máxima comodidad, el asiento permite que viajes con total comodidad y la parrilla de carga se puede convertir en u asiento para tu acompañante. Su estructura acolchada y resistente brinda un soporte óptimo durante recorridos largos, reduciendo la fatiga y aumentando la sensación de confort.
 
Pedales removibles
Los pedales removibles añaden versatilidad y comodidad a tu experiencia de manejo. Podrás instalarlos fácilmente cuando quieras aprovechar un apoyo extra al conducir o retirarlos para obtener mayor libertad de espacio y una estética más limpia.
 
Suspensión y frenos de alto rendimiento
Experimenta una conducción suave, estable y segura gracias a la combinación de su suspensión mecánica de alto desempeño y su freno de disco hidráulico en la llanta delantera y en la llanta trasera. Los frenos garantizan una frenada rápida, progresiva y confiable en cualquier situación.
 
Potencia: 800W
Voltaje: 60V o 72V
Batería: 60V 20Ah o 72V 20Ah
Cargador: 60V 3A o 72V 3A
Tiempo de carga: 6-8h
 
Velocidad Máximo 45 o 49km/h Autonomía 65km o 75km`
  },
  {
    name: "POLAR",
    description: `Faro LED de alta intensidad
Conduce con total confianza en cualquier momento gracias a su faro LED de última generación, diseñado para ofrecer una iluminación potente, uniforme y de gran alcance. Con un diseño moderno y elegante, el faro aporta también un toque urbano que eleva la presencia del vehículo.
 
Pantalla digital multifuncional
Equipada con una pantalla digital clara y moderna, este vehículo te brinda toda la información esencial en tiempo real. Muestra indicadores clave de funcionamiento, tendrás siempre el control al alcance de la vista. Con esta pantalla, cada recorrido se convierte en una experiencia más práctica, tecnológica y conectada.
 
Asiento ergonómico
Diseñado para ofrecer la máxima comodidad, el asiento permite que viajes con total comodidad y la parrilla de carga se puede convertir en u asiento para tu acompañante. Su estructura acolchada y resistente brinda un soporte óptimo durante recorridos largos, reduciendo la fatiga y aumentando la sensación de confort.
 
Pedales removibles
Los pedales removibles añaden versatilidad y comodidad a tu experiencia de manejo. Podrás instalarlos fácilmente cuando quieras aprovechar un apoyo extra al conducir o retirarlos para obtener mayor libertad de espacio y una estética más limpia.
 
Suspensión y frenos de alto rendimiento
Experimenta una conducción suave, estable y segura gracias a la combinación de su suspensión mecánica de alto desempeño y su freno de disco hidráulico en la llanta delantera y en la llanta trasera. Los frenos garantizan una frenada rápida, progresiva y confiable en cualquier situación.
 
Potencia: 800W
Voltaje: 60V o 72V
Batería: 60V 20Ah o 72V 20Ah
Cargador: 60V 3A o 72V 3A
Tiempo de carga: 6-8h
 
Velocidad Máximo 45 o 49km/h Autonomía 65km o 75km`
  },
  {
    name: "MOPED",
    description: `Faro LED de alta intensidad
Conduce con total confianza en cualquier momento gracias a su faro LED de última generación, diseñado para ofrecer una iluminación potente, uniforme y de gran alcance. Con un diseño moderno y elegante, el faro aporta también un toque urbano que eleva la presencia del vehículo.
 
Pantalla digital multifuncional
Equipada con una pantalla digital clara y moderna, este vehículo te brinda toda la información esencial en tiempo real. Muestra indicadores clave de funcionamiento, tendrás siempre el control al alcance de la vista. Con esta pantalla, cada recorrido se convierte en una experiencia más práctica, tecnológica y conectada.
 
Asiento ergonómico
Diseñado para ofrecer la máxima comodidad, el asiento permite que viajes con total comodidad e incluye un asiento para tu acompañante. Su estructura acolchada y resistente brinda un soporte óptimo durante recorridos largos, reduciendo la fatiga y aumentando la sensación de confort.
 
Pedales removibles
Los pedales removibles añaden versatilidad y comodidad a tu experiencia de manejo. Podrás instalarlos fácilmente cuando quieras aprovechar un apoyo extra al conducir o retirarlos para obtener mayor libertad de espacio y una estética más limpia.
 
Suspensión y frenos de alto rendimiento
Experimenta una conducción suave, estable y segura gracias a la combinación de su suspensión mecánica de alto desempeño y su freno de disco hidráulico en la llanta delantera y freno de tambor en la llanta trasera. Los frenos garantizan una frenada rápida, progresiva y confiable en cualquier situación.
 
Potencia: 500W
Voltaje: 48V o 60V
Batería: 48V 20Ah o 60V 20Ah
Cargador: 48V 3A o 60V 3A
Tiempo de carga: 6-8h
 
Velocidad Máximo 40km/h Autonomía 50km o 65km`
  },
  {
    name: "RAYO PRO",
    description: `Faro LED de alta intensidad
Conduce con total confianza en cualquier momento gracias a su faros LED de última generación, diseñado para ofrecer una iluminación potente, uniforme y de gran alcance. Con un diseño moderno y elegante, el faro aporta también un toque urbano que eleva la presencia del vehículo.
 
Pantalla digital multifuncional
Equipada con una pantalla digital clara y moderna, este vehículo te brinda toda la información esencial en tiempo real. Muestra indicadores clave de funcionamiento, tendrás siempre el control al alcance de la vista. Con esta pantalla, cada recorrido se convierte en una experiencia más práctica, tecnológica y conectada.
 
Asiento ergonómico
Diseñado para ofrecer la máxima comodidad, el asiento permite que viajes con total comodidad. Su estructura acolchada y resistente brinda un soporte óptimo durante recorridos largos, reduciendo la fatiga y aumentando la sensación de confort.
 
Pedales removibles
Los pedales removibles añaden versatilidad y comodidad a tu experiencia de manejo. Podrás instalarlos fácilmente cuando quieras aprovechar un apoyo extra al conducir o retirarlos para obtener mayor libertad de espacio y una estética más limpia.
 
Suspensión y frenos de alto rendimiento
Experimenta una conducción suave, estable y segura gracias a la combinación de su suspensión mecánica de alto desempeño y su freno de disco hidráulico en la llanta delantera y freno de tambor en la llanta trasera. Los frenos garantizan una frenada rápida, progresiva y confiable en cualquier situación.
 
Potencia: 800W
Voltaje: 60V o 72V
Batería: 60V 20Ah o 72V 20Ah
Cargador: 60V 3A o 72V 3A
Tiempo de carga: 6-8h
 
Velocidad Máximo 45km/h o 49km/h Autonomía 65km o 75km`
  },
  {
    name: "Galaxy",
    description: `Faro LED de alta intensidad
Conduce con total confianza en cualquier momento gracias a su faro LED de última generación, diseñado para ofrecer una iluminación potente, uniforme y de gran alcance. Con un diseño moderno y elegante, el faro aporta también un toque urbano que eleva la presencia del vehículo.
 
Pantalla digital multifuncional
Equipada con una pantalla digital clara y moderna, este vehículo te brinda toda la información esencial en tiempo real. Muestra indicadores clave de funcionamiento, tendrás siempre el control al alcance de la vista. Con esta pantalla, cada recorrido se convierte en una experiencia más práctica, tecnológica y conectada.
 
Asiento ergonómico
Diseñado para ofrecer la máxima comodidad, el asiento permite que viajes con total comodidad e incluye un asiento para tu acompañante. Su estructura acolchada y resistente brinda un soporte óptimo durante recorridos largos, reduciendo la fatiga y aumentando la sensación de confort.
 
Pedales removibles
Los pedales removibles añaden versatilidad y comodidad a tu experiencia de manejo. Podrás instalarlos fácilmente cuando quieras aprovechar un apoyo extra al conducir o retirarlos para obtener mayor libertad de espacio y una estética más limpia.
 
Suspensión y frenos de alto rendimiento
Experimenta una conducción suave, estable y segura gracias a la combinación de su suspensión mecánica de alto desempeño and su freno de disco hidráulico en la llanta delantera y freno de tambor en la llanta trasera. Los frenos garantizan una frenada rápida, progresiva y confiable en cualquier situación.
 
Potencia: 800W
Voltaje: 60V o 72V
Batería: 60V 20Ah o 72V 20Ah
Cargador: 60V 3A o 72V 3A
Tiempo de carga: 6-8h
 
Velocidad Máximo 45km/h o 49km/h Autonomía 65km o 75km`
  },
  {
    name: "ÁGUILA",
    description: `Faro LED de alta intensidad
Conduce con total confianza en cualquier momento gracias a su faros LED de última generación, diseñado para ofrecer una iluminación potente, uniforme y de gran alcance. Con un diseño moderno y elegante, el faro aporta también un toque urbano que eleva la presencia del vehículo.
 
Pantalla digital multifuncional
Equipada con una pantalla digital clara y moderna, este vehículo te brinda toda la información esencial en tiempo real. Muestra indicadores clave de funcionamiento, tendrás siempre el control al alcance de la vista. Con esta pantalla, cada recorrido se convierte en una experiencia más práctica, tecnológica y conectada.
 
Asiento ergonómico
Diseñado para ofrecer la máxima comodidad, el asiento permite que viajes con total comodidad. Su estructura acolchada y resistente brinda un soporte óptimo durante recorridos largos, reduciendo la fatiga y aumentando la sensación de confort.
 
Pedales removibles
Los pedales removibles añaden versatilidad y comodidad a tu experiencia de manejo. Podrás instalarlos fácilmente cuando quieras aprovechar un apoyo extra al conducir o retirarlos para obtener mayor libertad de espacio y una estética más limpia.
 
Suspensión y frenos de alto rendimiento
Experimenta una conducción suave, estable y segura gracias a la combinación de su suspensión mecánica de alto desempeño y su freno de disco hidráulico en la llanta delantera y freno de tambor en la llanta trasera. Los frenos garantizan una frenada rápida, progresiva y confiable en cualquier situación.
 
Potencia: 800W
Voltaje: 60V o 72V
Batería: 60V 20Ah o 72V 20Ah
Cargador: 60V 3A o 72V 3A
Tiempo de carga: 6-8h
 
Velocidad Máximo 45km/h o 49km/h Autonomía 65km o 75km`
  },
  {
    name: "SOL",
    description: `Faro LED de alta intensidad
Conduce con total confianza en cualquier momento gracias a su faro LED de última generación, diseñado para ofrecer una iluminación potente, uniforme y de gran alcance. Con un diseño moderno y elegante, el faro aporta también un toque urbano que eleva la presencia del vehículo.
 
Pantalla digital multifuncional
Equipada con una pantalla digital clara y moderna, este vehículo te brinda toda la información esencial en tiempo real. Muestra indicadores clave de funcionamiento, tendrás siempre el control al alcance de la vista. Con esta pantalla, cada recorrido se convierte en una experiencia más práctica, tecnológica y conectada.
 
Asiento ergonómico
Diseñado para ofrecer la máxima comodidad, el asiento doble permite que viajes acompañado sin sacrificar el espacio ni la ergonomía. Su estructura acolchada y resistente brinda un soporte óptimo durante recorridos largos, reduciendo la fatiga y aumentando la sensación de confort.
 
Pedales removibles
Los pedales removibles añaden versatilidad y comodidad a tu experiencia de manejo. Podrás instalarlos fácilmente cuando quieras aprovechar un apoyo extra al conducir o retirarlos para obtener mayor libertad de espacio y una estética más limpia.
 
Suspensión y frenos de alto rendimiento
Experimenta una conducción suave, estable y segura gracias a la combinación de su suspensión mecánica de alto desempeño y su freno de tambor en la llanta delantera y en la llanta trasera. Los frenos garantizan una frenada rápida, progresiva y confiable en cualquier situación.
 
Potencia: 500W
Voltaje: 48V o 60V
Batería: 48V 20Ah o 60V 20Ah
Cargador: 48V 3A o 60V 3A
Tiempo de carga: 6-8h
 
Velocidad Máximo 40km/h Autonomía 50km o 65km`
  },
  {
    name: "JAGUAR",
    description: `Faros LED de alta intensidad
Conduce con total confianza en cualquier momento gracias a sus faros LED de última generación, diseñados para ofrecer una iluminación potente, uniforme y de gran alcance. Con un diseño moderno y elegante, los faros aportan también un toque distintivo y sofisticado que eleva la presencia del vehículo.
 
Pantalla digital multifuncional
Equipada con una pantalla digital clara y moderna, este vehículo te brinda toda la información esencial en tiempo real. Muestra indicadores clave de funcionamiento, tendrás siempre el control al alcance de la vista. Con esta pantalla, cada recorrido se convierte en una experiencia más práctica, tecnológica y conectada.
 
Asiento ergonómico
Diseñado para ofrecer la máxima comodidad, el asiento doble permite que viajes acompañado sin sacrificar el espacio ni la ergonomía. Su estructura acolchada y resistente brinda un soporte óptimo durante recorridos largos, reduciendo la fatiga y aumentando la sensación de confort.
 
Pedales removibles
Los pedales removibles añaden versatilidad y comodidad a tu experiencia de manejo. Podrás instalarlos fácilmente cuando quieras aprovechar un apoyo extra al conducir o retirarlos para obtener mayor libertad de espacio y una estética más limpia.
 
Suspensión y frenos de alto rendimiento
Experimenta una conducción suave, estable y segura gracias a la combinación de su suspensión mecánica de alto desempeño y su freno de disco hidráulico en la llanta delantera y freno de tambor en la llanta trasera. Los frenos garantizan una frenada rápida, progresiva y confiable en cualquier situación.
 
Potencia: 850W
Voltaje: 60V o 72V
Batería: 60V 20Ah o 72V 20Ah
Cargador: 60V 3A o 72V 3A
Tiempo de carga: 6-8h
 
Velocidad Máximo 47km/h Autonomía 65km/h o 75km`
  },
  {
    name: "TIGRE",
    description: `Faro LED de alta intensidad
Conduce con total confianza en cualquier momento gracias a su faros LED de última generación, diseñado para ofrecer una iluminación potente, uniforme y de gran alcance. Con un diseño moderno y elegante, el faro aporta también un toque urbano que eleva la presencia del vehículo.
 
Pantalla digital multifuncional
Equipada con una pantalla digital clara y moderna, este vehículo te brinda toda la información esencial en tiempo real. Muestra indicadores clave de funcionamiento, tendrás siempre el control al alcance de la vista. Con esta pantalla, cada recorrido se convierte en una experiencia más práctica, tecnológica y conectada.
 
Asiento ergonómico
Diseñado para ofrecer la máxima comodidad, el asiento doble permite que viajes acompañado sin sacrificar el espacio ni la ergonomía. Su estructura acolchada y resistente brinda un soporte óptimo durante recorridos largos, reduciendo la fatiga y aumentando la sensación de confort.
 
Pedales removibles
Los pedales removibles añaden versatilidad y comodidad a tu experiencia de manejo. Podrás instalarlos fácilmente cuando quieras aprovechar un apoyo extra al conducir o retirarlos para obtener mayor libertad de espacio y una estética más limpia.
 
Suspensión y frenos de alto rendimiento
Experimenta una conducción suave, estable y segura gracias a la combinación de su suspensión mecánica de alto desempeño y su freno de disco hidráulico en la llanta delantera y en la llanta trasera. Los frenos garantizan una frenada rápida, progresiva y confiable en cualquier situación.
 
Potencia: 850W
Voltaje: 60V
Batería: 60V 20Ah
Cargador: 60V 3A
Tiempo de carga: 6-8h
 
Velocidad Máximo 59km/h Autonomía 50-75km`
  },
  {
    name: "AURORA",
    description: `Faros LED de alta intensidad
Conduce con total confianza en cualquier momento gracias a sus faros LED de última generación, diseñados para ofrecer una iluminación potente, uniforme y de gran alcance. Con un diseño moderno y elegante, los faros aportan también un toque distintivo y sofisticado que eleva la presencia del vehículo.
 
Pantalla digital multifuncional
Equipada con una pantalla digital clara y moderna, este vehículo te brinda toda la información esencial en tiempo real. Muestra indicadores clave de funcionamiento, tendrás siempre el control al alcance de la vista. Con esta pantalla, cada recorrido se convierte en una experiencia más práctica, tecnológica y conectada.
 
Asiento ergonómico
Diseñado para ofrecer la máxima comodidad, el asiento doble permite que viajes acompañado sin sacrificar el espacio ni la ergonomía. Su estructura acolchada y resistente brinda un soporte óptimo durante recorridos largos, reduciendo la fatiga y aumentando la sensación de confort.
 
Pedales removibles
Los pedales removibles añaden versatilidad y comodidad a tu experiencia de manejo. Podrás instalarlos fácilmente cuando quieras aprovechar un apoyo extra al conducir o retirarlos para obtener mayor libertad de espacio y una estética más limpia.
 
Suspensión y frenos de alto rendimiento
Experimenta una conducción suave, estable y segura gracias a la combinación de su suspensión mecánica de alto desempeño y su freno de disco hidráulico en la llanta delantera y freno de tambor en la llanta trasera. Los frenos garantizan una frenada rápida, progresiva y confiable en cualquier situación.
 
Potencia: 850W
Voltaje: 60V o 72V
Batería: 60V 20Ah o 72V 20Ah
Cargador: 60V 3A o 72V 3A
Tiempo de carga: 6-8h
 
Velocidad Máximo 46km/h o 51km/h Autonomía 65km o 75km`
  }
];

async function updateDescriptions() {
  const client = await db.connect();
  try {
    for (const update of updates) {
      console.log(`Buscando producto: ${update.name}...`);
      const { rows } = await client.query(
        "SELECT id, nombre, descripcion FROM productos WHERE nombre ILIKE $1 AND deleted_at IS NULL",
        [`%${update.name}%`]
      );

      if (rows.length === 0) {
        console.warn(`⚠️ No se encontró el producto: ${update.name}`);
        continue;
      }

      for (const product of rows) {
        console.log(`Actualizando ID ${product.id} (${product.nombre})...`);
        const newDescription = update.description.trim();
        await client.query(
          "UPDATE productos SET descripcion = $1, edited_at = NOW() WHERE id = $2",
          [newDescription, product.id]
        );
        console.log(`✅ Descripción actualizada para: ${product.nombre}`);
      }
    }
  } catch (err) {
    console.error("❌ Error actualizando descripciones:", err.message);
  } finally {
    client.release();
    await db.end();
  }
}

updateDescriptions();
