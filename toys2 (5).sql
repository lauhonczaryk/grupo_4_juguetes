-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-01-2023 a las 18:07:51
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
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `filename`, `description`, `category_id`) VALUES
(1, 'Cactus Bailarín Tiktok Canta Repite', 1800, 'productImage1670464546514-.jpg', 'Cantan En inglés y español!!El juguete de CACTUS puede bailar, cantar, mover, girar y llevar al niño un momento feliz.120 canciones en inglés y español (puede haber varias canciones de otros países al azar) + iluminación + grabación + baile + repetir la voz de uno', 2),
(2, 'Títeres De Dedos Infantil De Bañera', 1000, 'productImage1670464575663-.jpg', 'Titeres De Dedos Infantil De Bañera Para Bebe El Duende AzulLlegaron los adorables Titeres de dedos! Son ideales para jugar en la bañera con tu bebe!Vienen distintos modelos.Colecciónalos todos, no te los pierdas!!El pack viene con 5 unidades.', 4),
(3, 'Play Station 5', 30500, 'productImage1673229021967-.webp', 'Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.', 1),
(4, 'Monopoly', 7800, 'productImage1671498864891-.webp', '¡Un clásico! Reuní a tus amistades para disfrutar de horas de risas y diversión mientras juegan a ser agentes inmobiliarios con el Monopoly.', 3),
(5, 'Juego de la OCA', 3000, 'productImage1670464799299-.webp', 'Juego de la Oca -Línea Green Box-Una versión de lujo para el tradicional juego de la oca. ¡No te pierdas los clásicos de la linea Green Box de Ruibal!', 3),
(6, 'Señor Cara de Papa', 1800, 'productImage1670464823348-.webp', 'La empresa Hasbro es la propietaria de diferentes marcas, juguetes y juegos de mesa. Desde 1923 se dedica a crear y contagiar felicidad con sus productos.', 4),
(8, 'Jenga Classic ', 2000, 'productImage1670624982899-.webp', '¿Qué mejor plan para una tarde de lluvia que un juego de mesa? Con el Jng The classic vas a crear divertidos recuerdos y pasar momentos inolvidables junto a tus amigos y amigas. Con este pasatiempo entretenido las risas están aseguradas.', 3),
(12, 'Spiderman Muñeco', 4000, 'productImage1670625228830-.webp', 'Figura Acción Articulada Spiderman Avengers', 4),
(14, 'Pelota de Fútbol ', 1000, 'productImage1670625271603-.webp', 'Pelota de cuero para jugar Fútbol', 2),
(15, 'Monkey Loco ', 4000, 'productImage1670625304666-.jpg', '¿Qué mejor plan para una tarde de lluvia que un juego de mesa? Con el Monky loco vas a crear divertidos recuerdos y pasar momentos inolvidables junto a tus amigos y amigas. Con este pasatiempo entretenido las risas están aseguradas.', 3),
(16, 'Cocodrilos Antex', 4000, 'productImage1670625337331-.webp', '¿Qué mejor plan para una tarde de lluvia que un juego de mesa? Con el Cocodrilos vas a crear divertidos recuerdos y pasar momentos inolvidables junto a tus amigos y amigas. Con este pasatiempo entretenido las risas están aseguradas.', 3),
(17, 'Figura Mi Pequeño Pony Hasbro', 1200, 'productImage1670625352458-.jpg', ' La empresa Hasbro es la propietaria de diferentes marcas, juguetes y juegos de mesa. Desde 1923 se dedica a crear y contagiar felicidad con sus productos.  Juguetes articulados Al tener marcadas las articulaciones podrás manejar y acomodar tus figuras como más te guste. Con ellas, vas a poder crear historias en la que los personajes puedan movilizarse y cobrar vida.', 4),
(18, 'Triciclo Rondi Junior Rider', 5100, 'productImage1670625366361-.jpg', 'Este triciclo será más que un vehículo de 3 ruedas para los niños. Gracias a su diseño y fácil uso, se volverá rápidamente un compañero de aventuras para los más chicos.', 2),
(27, 'TEG Tradicional', 7000, 'productImage1673307668668-.jpg', 'Divertido juego bélico para pasar una tarde', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL COMMENT 'nombre y apellido',
  `avatar` text NOT NULL,
  `password` text NOT NULL,
  `email` text NOT NULL,
  `privilege` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `avatar`, `password`, `email`, `privilege`) VALUES
(1, 'Juan Gonella', '', '12345678', 'gonellapol@hotmail.com', '1'),
(15, 'Administrador', 'user-1673126612421.png', '$2a$10$E786FWWIahlYmQjNDVfi7uKoXL5LyXH8Rs.NAExOlikW1/o/P7jXi', 'admin@gmail.com', 'administrador'),
(20, 'Matías LLansó', 'user-1673228057172.jpg', '$2a$10$0dOPoxbYsfz./EV2yZrWO.gkWFK1WoH6IgKgqkc5Y9A9P69B88dWG', 'matias.llanso@gmail.com', 'user'),
(21, 'ejemplo', 'user-1673291194530.png', '$2a$10$.rhfwUXfcVf1KeTZ6dku2uoRgaoGVSEUi5QFK7TrAjbU4S6TzEugG', 'ejemplo@gmail.com', 'user'),
(22, 'Laura Honczaryk', 'user-1673300181813.webp', '$2a$10$d.LJ9zmQXHZfxukRNzcHEeBVG0C/OeENG3m.NLGCSd0QAA2/msQEi', 'lchonczaryk@gmail.com', 'user'),
(23, 'Juan Peréz', 'user-1673307527344.png', '$2a$10$g88FWijbcy.i3DHo1VhE9usTjbi8AGGNqSVU.SXdv92XsVfa1Lco2', 'juanperez@gmail.com', 'user');

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
