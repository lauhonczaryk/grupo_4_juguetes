-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-12-2022 a las 00:37:59
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `toys2`
--
CREATE DATABASE IF NOT EXISTS `toys2` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `toys2`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Video Juegos'),
(2, 'Deportes y Aire Libre'),
(3, 'Juegos de Mesa'),
(4, 'Juguetes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `price` int(20) NOT NULL,
  `filename` text DEFAULT NULL,
  `description` text NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_categorias` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `filename`, `description`, `category_id`) VALUES
(1, 'Cactus Bailarín Tiktok Canta Repite', 1800, NULL, 'Cantan En inglés y español!!\r\n\r\nEl juguete de CACTUS puede bailar, cantar, mover, girar y llevar al niño un momento feliz.\r\n\r\n120 canciones en inglés y español (puede haber varias canciones de otros países al azar) + iluminación + grabación + baile + repetir la voz de uno', 2),
(2, 'Titeres De Dedos Infantil De Bañera Para Bebe', 1000, NULL, 'Titeres De Dedos Infantil De Bañera Para Bebe El Duende Azul\r\n\r\nLlegaron los adorables Titeres de dedos! Son ideales para jugar en la bañera con tu bebe!\r\nVienen distintos modelos.\r\nColecciónalos todos, no te los pierdas!!\r\n\r\nEl pack viene con 5 unidades.', 4),
(3, 'Play Station 5', 300000, '', 'Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.', 1),
(4, 'Monopoly', 7800, '', '¡Un clásico! Reuní a tus amistades para disfrutar de horas de risas y diversión mientras juegan a ser agentes inmobiliarios con el Monopoly.', 3),
(5, 'Juego de la OCA', 3000, '', 'Juego de la Oca -Línea Green Box-\r\nUna versión de lujo para el tradicional juego de la oca. ¡No te pierdas los clásicos de la linea Green Box de Ruibal!', 3),
(6, 'Señor Cara de Papa', 1800, '', 'La empresa Hasbro es la propietaria de diferentes marcas, juguetes y juegos de mesa. Desde 1923 se dedica a crear y contagiar felicidad con sus productos.', 4),
(7, 'Piano Organo Musical De Aprendizaje Luminoso ', 5000, NULL, 'Piano Organo Musical De Aprendizaje Luminoso El Duende Azul\r\n\r\n¡Llegó el nuevo piano luminoso! ¡Tiene cuatro actividades diferentes: tu bebé podrá tocar lindas notas en el teclado, escuchar una melodía distinta con cada tecla, reconocer a los animales, los sonidos que hacen, los colores y los números, y al final el piano le pedirá a tu bebé que identifique animales, colores o números! ¡Tiene unas lindas luces y bolitas que saltan al tocar cada tecla, y tiene las baterías incluidas! ¡No te lo pierdas!', 4),
(8, 'Jenga Classic ', 2000, NULL, '¿Qué mejor plan para una tarde de lluvia que un juego de mesa? Con el Jng The classic vas a crear divertidos recuerdos y pasar momentos inolvidables junto a tus amigos y amigas. Con este pasatiempo entretenido las risas están aseguradas.', 3),
(9, 'Puzzle Rompecabeza 4000 Piezas', 2300, NULL, 'e lluvia van a ser las mejores! Con el rompecabezas Educa Borras 18014 vas a disfrutar de largas horas de entretenimiento asegurado. Además, ejercitarás la mente al incrementar tu concentración y desarrollar tu creatividad. Aceptá el desafío de armarlo en el menor tiempo posible, ya sea solo o trabajando en equipo con amigos o familiares.\r\n¿Sos fanático del arte? Apreciá esta obra tan famosa de una forma completamente diferente.', 3),
(12, 'Spiderman Muñeco', 4000, '', 'Figura Acción Articulada Spiderman Avengers', 4),
(14, 'Pelota de Futbol 5', 1000, NULL, 'Pelota de cuero ', 2),
(15, ' Juego de mesa Monkey Loco Ditoy', 4000, NULL, '¿Qué mejor plan para una tarde de lluvia que un juego de mesa? Con el Monky loco vas a crear divertidos recuerdos y pasar momentos inolvidables junto a tus amigos y amigas. Con este pasatiempo entretenido las risas están aseguradas.', 3),
(16, 'Juego de mesa Cocodrilos Antex', 4000, NULL, '¿Qué mejor plan para una tarde de lluvia que un juego de mesa? Con el Cocodrilos vas a crear divertidos recuerdos y pasar momentos inolvidables junto a tus amigos y amigas. Con este pasatiempo entretenido las risas están aseguradas.', 3),
(17, 'Figura Mi Pequeño Pony Hasbro', 1200, NULL, ' La empresa Hasbro es la propietaria de diferentes marcas, juguetes y juegos de mesa. Desde 1923 se dedica a crear y contagiar felicidad con sus productos.  Juguetes articulados Al tener marcadas las articulaciones podrás manejar y acomodar tus figuras como más te guste. Con ellas, vas a poder crear historias en la que los personajes puedan movilizarse y cobrar vida.', 4),
(18, 'Triciclo Rondi Junior Rider', 5100, NULL, 'Este triciclo será más que un vehículo de 3 ruedas para los niños. Gracias a su diseño y fácil uso, se volverá rápidamente un compañero de aventuras para los más chicos.', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL COMMENT 'nombre y apellido',
  `username` varchar(20) NOT NULL,
  `password` text NOT NULL,
  `email` text NOT NULL,
  `privilege` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `password`, `email`, `privilege`) VALUES
(1, 'Juan Gonella', 'gonellapol', '12345678', 'gonellapol@hotmail.com', 1),
(3, 'Laura Honczaryk', 'lauhoncz', 'laurahonczaryk', 'lchonczaryk@gmail.com', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_product`
--

CREATE TABLE IF NOT EXISTS `user_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_user` (`product_id`),
  KEY `fk_user_product` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user_product`
--

INSERT INTO `user_product` (`id`, `product_id`, `user_id`) VALUES
(1, 3, 1);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_categorias` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Filtros para la tabla `user_product`
--
ALTER TABLE `user_product`
  ADD CONSTRAINT `fk_product_user` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `fk_user_product` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
