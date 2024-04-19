-- Adminer 4.8.1 MySQL 10.11.6-MariaDB-2 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP DATABASE IF EXISTS `assignment1`;
CREATE DATABASE `assignment1` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `assignment1`;

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `categories_id` int(4) NOT NULL AUTO_INCREMENT,
  `categories_name` text NOT NULL,
  PRIMARY KEY (`categories_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `categories` (`categories_id`, `categories_name`) VALUES
(1,	'Foods'),
(2,	'Medicine'),
(3,	'Fruits'),
(4,	'Tea & Coffee'),
(5,	'Pet Foods'),
(6,	'Home & Lifestyle'),
(7,	'Health');

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `order_id` bigint(8) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `full_name` text NOT NULL,
  `phone_number` bigint(20) NOT NULL,
  `email` text NOT NULL,
  `full_address` mediumtext NOT NULL,
  `orders` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`orders`)),
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `orders` (`order_id`, `full_name`, `phone_number`, `email`, `full_address`, `orders`) VALUES
(10035768,	'zira homebush',	348999992,	'zira@homebush.com',	'Factory Outlet, Homebush NSW 2000',	'[{\"price\":1.49,\"stock\":400,\"_id\":\"3004\",\"name\":\"Bananas\",\"unit\":\"Kilo\",\"categories_name\":\"Fruits\",\"quantity\":2},{\"price\":3.5,\"stock\":200,\"_id\":\"3006\",\"name\":\"Grapes\",\"unit\":\"Kilo\",\"categories_name\":\"Fruits\",\"quantity\":1}]'),
(21528298,	'fdfdfdf dfdfdfd',	233333,	'fdff@mail.com',	'fdfdfdf, fdfdfdf nsw 2222',	'[{\"price\":3,\"stock\":2000,\"_id\":\"2000\",\"name\":\"Panadol\",\"unit\":\"Pack 24\",\"categories_name\":\"Medicine\",\"quantity\":9},{\"price\":2.89,\"stock\":500,\"_id\":\"4003\",\"name\":\"Instant Coffee\",\"unit\":\"200 gram\",\"categories_name\":\"Tea & Coffee\",\"quantity\":1}]'),
(25901648,	'zirah balweel',	384999999,	'zirah@mail.cm',	'Kent hwy, Bondi Beach NSW 3000',	'[{\"price\":2.55,\"stock\":1500,\"_id\":\"1000\",\"name\":\"Fish Fingers\",\"unit\":\"500 gram\",\"categories_name\":\"Foods\",\"quantity\":2},{\"price\":5,\"stock\":750,\"_id\":\"1001\",\"name\":\"Fish Fingers\",\"unit\":\"1000 gram\",\"categories_name\":\"Foods\",\"quantity\":1},{\"price\":1.99,\"stock\":500,\"_id\":\"3007\",\"name\":\"Apples\",\"unit\":\"Kilo\",\"categories_name\":\"Fruits\",\"quantity\":1}]'),
(55084957,	'zira ma',	39499999,	'tazi@mail.com',	'nkfladjfklj, jkjkjk NSW 2201',	'[{\"price\":5,\"stock\":750,\"quantity\":4,\"_id\":\"1001\",\"name\":\"Fish Fingers\",\"unit\":\"1000 gram\",\"categories_name\":\"Foods\"},{\"price\":2.35,\"stock\":1200,\"quantity\":2,\"_id\":\"1002\",\"name\":\"Hamburger Patties\",\"unit\":\"Pack 10\",\"categories_name\":\"Foods\"}]'),
(70135237,	'Tazirah Kode',	495939999,	'mail.zira@email.com',	'kebayoran lama, Blok M NT 1290',	'[{\"price\":7,\"stock\":175,\"quantity\":1,\"_id\":\"3002\",\"name\":\"T Bone Steak\",\"unit\":\"1000 gram\",\"image\":\"https://cdn0.woolworths.media/content/wowproductimages/large/675651.jpg\",\"categories_name\":\"Foods\"},{\"price\":7.25,\"stock\":1200,\"quantity\":2,\"_id\":\"4001\",\"name\":\"Earl Grey Tea Bags\",\"unit\":\"Pack 50\",\"image\":\"https://cdn0.woolworths.media/content/wowproductimages/large/042980.jpg\",\"categories_name\":\"Tea & Coffee\"},{\"price\":3.55,\"stock\":500,\"quantity\":1,\"_id\":\"2006\",\"name\":\"Laundry Bleach\",\"unit\":\"2 Litre Bottle\",\"image\":\"https://cdn0.woolworths.media/content/wowproductimages/large/037801.jpg\",\"categories_name\":\"Home & Lifestyle\"}]');

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `product_id` int(10) unsigned DEFAULT NULL,
  `product_name` varchar(20) DEFAULT NULL,
  `unit_price` float(8,2) DEFAULT NULL,
  `unit_quantity` varchar(15) DEFAULT NULL,
  `in_stock` int(10) unsigned DEFAULT NULL,
  `categories_id` int(4) NOT NULL,
  `image_url` text DEFAULT NULL,
  KEY `categories_id` (`categories_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

INSERT INTO `products` (`product_id`, `product_name`, `unit_price`, `unit_quantity`, `in_stock`, `categories_id`, `image_url`) VALUES
(1000,	'Fish Fingers',	2.55,	'500 gram',	1500,	1,	'https://cdn0.woolworths.media/content/wowproductimages/large/096318.jpg'),
(1001,	'Fish Fingers',	5.00,	'1000 gram',	746,	1,	'https://cdn0.woolworths.media/content/wowproductimages/large/096336.jpg'),
(1002,	'Hamburger Patties',	2.35,	'Pack 10',	1198,	1,	'https://cdn0.woolworths.media/content/wowproductimages/large/751425.jpg'),
(1003,	'Shelled Prawns',	6.90,	'250 gram',	300,	1,	'https://cdn0.woolworths.media/content/wowproductimages/large/088026.jpg'),
(1004,	'Tub Ice Cream',	1.80,	'I Litre',	800,	1,	'https://cdn0.woolworths.media/content/wowproductimages/large/096190.jpg'),
(1005,	'Tub Ice Cream',	3.40,	'2 Litre',	1200,	1,	'https://cdn0.woolworths.media/content/wowproductimages/large/040960.jpg'),
(2000,	'Panadol',	3.00,	'Pack 24',	1991,	2,	'https://cdn0.woolworths.media/content/wowproductimages/large/180047.jpg'),
(2001,	'Panadol',	5.50,	'Bottle 50',	0,	2,	'https://cdn0.woolworths.media/content/wowproductimages/large/348643.jpg'),
(2002,	'Bath Soap',	2.60,	'Pack 6',	500,	7,	'https://cdn0.woolworths.media/content/wowproductimages/large/771315.jpg'),
(2003,	'Garbage Bags Small',	1.50,	'Pack 10',	500,	6,	'https://cdn0.woolworths.media/content/wowproductimages/large/517110.jpg'),
(2004,	'Garbage Bags Large',	5.00,	'Pack 50',	300,	6,	'https://cdn0.woolworths.media/content/wowproductimages/large/094671.jpg'),
(2005,	'Washing Powder',	4.00,	'1000 gram',	800,	6,	'https://cdn0.woolworths.media/content/wowproductimages/large/141891.jpg'),
(3000,	'Cheddar Cheese',	8.00,	'500 gram',	1000,	1,	'https://cdn0.woolworths.media/content/wowproductimages/large/033500.jpg'),
(3001,	'Cheddar Cheese',	15.00,	'1000 gram',	1000,	1,	'https://cdn0.woolworths.media/content/wowproductimages/large/048115.jpg'),
(3002,	'T Bone Steak',	7.00,	'1000 gram',	174,	1,	'https://cdn0.woolworths.media/content/wowproductimages/large/675651.jpg'),
(3003,	'Navel Oranges',	3.99,	'Bag 20',	200,	3,	'https://cdn0.woolworths.media/content/wowproductimages/large/259450.jpg'),
(3004,	'Bananas',	1.49,	'Kilo',	398,	3,	'https://cdn0.woolworths.media/content/wowproductimages/large/133211.jpg'),
(3005,	'Peaches',	2.99,	'Kilo',	0,	3,	'https://cdn0.woolworths.media/content/wowproductimages/large/205512.jpg'),
(3006,	'Grapes',	3.50,	'Kilo',	199,	3,	'https://cdn0.woolworths.media/content/wowproductimages/large/405838.jpg'),
(3007,	'Apples',	1.99,	'Kilo',	499,	3,	'https://cdn0.woolworths.media/content/wowproductimages/large/105919.jpg'),
(4000,	'Earl Grey Tea Bags',	2.49,	'Pack 10',	1200,	4,	'https://cdn0.woolworths.media/content/wowproductimages/large/041944.jpg'),
(4001,	'Earl Grey Tea Bags',	7.25,	'Pack 50',	1198,	4,	'https://cdn0.woolworths.media/content/wowproductimages/large/042980.jpg'),
(4002,	'Earl Grey Tea Bags',	13.00,	'Pack 100',	800,	4,	'https://cdn0.woolworths.media/content/wowproductimages/large/072617.jpg'),
(4003,	'Instant Coffee',	2.89,	'200 gram',	499,	4,	'https://cdn0.woolworths.media/content/wowproductimages/large/156727.jpg'),
(4004,	'Instant Coffee',	5.10,	'500 gram',	500,	4,	'https://cdn0.woolworths.media/content/wowproductimages/large/035694.jpg'),
(4005,	'Chocolate Bar',	2.50,	'250 gram',	300,	1,	'https://cdn0.woolworths.media/content/wowproductimages/large/347540.jpg'),
(5000,	'Dry Dog Food',	5.95,	'5 kg Pack',	0,	5,	'https://cdn0.woolworths.media/content/wowproductimages/large/036631.jpg'),
(5001,	'Dry Dog Food',	1.95,	'1 kg Pack',	400,	5,	'https://cdn0.woolworths.media/content/wowproductimages/large/091819.jpg'),
(5002,	'Bird Food',	3.99,	'500g packet',	200,	5,	'https://cdn0.woolworths.media/content/wowproductimages/large/679545.jpg'),
(5003,	'Cat Food',	2.00,	'500g tin',	200,	5,	'https://cdn0.woolworths.media/content/wowproductimages/large/210730.jpg'),
(5004,	'Fish Food',	3.00,	'500g packet',	200,	5,	'https://cdn0.woolworths.media/content/wowproductimages/large/176674.jpg'),
(2006,	'Laundry Bleach',	3.55,	'2 Litre Bottle',	499,	6,	'https://cdn0.woolworths.media/content/wowproductimages/large/037801.jpg');

-- 2024-04-18 05:05:50
