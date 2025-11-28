-- MySQL dump 10.13  Distrib 8.0.43, for macos15 (arm64)
--
-- Host: localhost    Database: ford_inventory
-- ------------------------------------------------------
-- Server version	9.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accessories`
--

DROP TABLE IF EXISTS `accessories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accessories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `stock` int DEFAULT '1',
  `image` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accessories`
--

LOCK TABLES `accessories` WRITE;
/*!40000 ALTER TABLE `accessories` DISABLE KEYS */;
INSERT INTO `accessories` VALUES (2,' Splitter Delantero','Exterior',2400.00,0,'https://www.ford.mx/content/ford/mx/es_mx/home/autos/mustang/accesorios/jcr:content/par/splitter/splitter0/image/image.imgs.full.high.jpg/1731428677341.jpg'),(3,'Window Louvers','Exterior',1800.00,2,'https://www.ford.mx/content/ford/mx/es_mx/home/autos/mustang/accesorios/jcr:content/par/splitter/splitter1/image/image.imgs.full.high.jpg/1731428704512.jpg'),(4,'Protector de Asientos Traseros','Interior',4300.00,2,'https://www.ford.mx/content/ford/mx/es_mx/home/autos/mustang/accesorios/jcr:content/par/splitter_1475309573/splitter1/image/image.imgs.full.high.jpg/1731430065497.jpg'),(5,'Tapetes de uso rudo','Interior',3400.00,3,'https://www.ford.mx/content/ford/mx/es_mx/home/autos/mustang/accesorios/jcr:content/par/splitter_1475309573/splitter20/image/image.imgs.full.high.jpg/1731430178795.jpg'),(6,'Cubierta completa','Interior',6695.00,1,'https://www.ford.mx/content/ford/mx/es_mx/home/autos/mustang/accesorios/jcr:content/par/image_1359122329/image.imgs.full.high.jpg/1731430529344.jpg'),(7,'Extensión de Tirón de Arrastre Thule','Exterior',6700.00,5,'https://www.ford.mx/content/ford/mx/es_mx/home/suv/bronco/accesorios/jcr:content/par/splitter_1395797034/splitter0/mediacarouselitem_2146332605/image.imgs.full.high.jpg/1655221770012.jpg'),(8,'Canastilla de Carga con Red Thule','Exterior',10497.00,5,'https://www.ford.mx/content/ford/mx/es_mx/home/suv/bronco/accesorios/jcr:content/par/splitter_1395797034/splitter1/mediacarouselitem/image.imgs.full.high.jpg/1625066006733.jpg'),(9,'Portabicicletas de Tirón Thule','Exterior',8900.00,4,'https://www.ford.mx/content/ford/mx/es_mx/home/suv/bronco/accesorios/jcr:content/par/splitter_1395797034/splitter2/mediacarouselitem/image.imgs.full.high.jpg/1625592784978.jpg'),(10,'Extensión de Tirón de Arrastre (Yakima®)','Exterior',6400.00,8,'https://www.ford.mx/content/ford/mx/es_mx/home/suv/bronco/accesorios/jcr:content/par/splitter_758985405/splitter2/mediacarouselitem/image.imgs.full.high.jpg/1653923480767.jpg'),(11,'Portaequipajes Cerrado Yakima','General',12500.00,2,'https://www.ford.mx/content/ford/mx/es_mx/home/suv/bronco/accesorios/jcr:content/par/splitter_1766851611/splitter1/mediacarouselitem/image.imgs.full.high.jpg/1625068138735.jpg'),(12,'Paquete de arranque','General',3200.00,20,'https://www.ford.mx/content/ford/mx/es_mx/home/suv/bronco/accesorios/jcr:content/par/splitter_818029273/splitter0/mediacarouselitem_2146332605/image.imgs.full.high.jpg/1653936385151.jpg'),(13,'Argolla de amarre','Exterior',2100.00,5,'https://www.ford.mx/content/ford/mx/es_mx/home/suv/bronco/accesorios/jcr:content/par/splitter_818029273/splitter1/mediacarouselitem_555861971/image.imgs.full.high.jpg/1653936398170.jpg'),(14,'Correa de gancho de uso pesado','Exterior',1800.00,5,'https://www.ford.mx/content/ford/mx/es_mx/home/suv/bronco/accesorios/jcr:content/par/splitter_799397749/splitter0/mediacarouselitem/image.imgs.full.high.jpg/1655222738479.jpg'),(15,'Armellas Yamaki','Exterior',1200.00,10,'https://www.ford.mx/content/ford/mx/es_mx/home/suv/bronco/accesorios/jcr:content/par/splitter_799397749/splitter1/mediacarouselitem/image.imgs.full.high.jpg/1655222732241.jpg'),(16,'Cajón de Seguridad del Área de Carga','Interior',14500.00,5,'https://www.ford.mx/content/ford/mx/es_mx/home/suv/bronco/accesorios/jcr:content/par/splitter_1763374794/splitter0/mediacarouselitem_2146332605/image.imgs.full.high.jpg/1653945813143.jpg'),(17,'Mesa para puerta abatible','General',7199.00,10,'https://www.ford.mx/content/ford/mx/es_mx/home/suv/bronco/accesorios/jcr:content/par/splitter_1763374794/splitter2/mediacarouselitem/image.imgs.full.high.jpg/1653945914769.jpg');
/*!40000 ALTER TABLE `accessories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `accessory_sales`
--

DROP TABLE IF EXISTS `accessory_sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accessory_sales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `accessory_id` int NOT NULL,
  `quantity` int DEFAULT '1',
  `price` decimal(10,2) DEFAULT NULL,
  `sale_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `accessory_id` (`accessory_id`),
  CONSTRAINT `accessory_sales_ibfk_1` FOREIGN KEY (`accessory_id`) REFERENCES `accessories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=195 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accessory_sales`
--

LOCK TABLES `accessory_sales` WRITE;
/*!40000 ALTER TABLE `accessory_sales` DISABLE KEYS */;
INSERT INTO `accessory_sales` VALUES (1,3,1,1800.00,'2025-11-27 04:47:11'),(2,3,1,1800.00,'2025-11-27 04:52:10'),(3,4,1,4300.00,'2025-11-27 04:52:10'),(4,2,2,3200.00,'2025-09-24 06:00:00'),(5,7,1,7199.00,'2025-11-05 06:00:00'),(6,16,1,3400.00,'2025-10-22 06:00:00'),(7,6,3,14500.00,'2025-11-14 06:00:00'),(8,10,2,12500.00,'2025-09-21 06:00:00'),(9,7,1,3400.00,'2025-11-19 06:00:00'),(10,16,4,1800.00,'2025-09-27 06:00:00'),(11,4,5,2400.00,'2025-10-08 06:00:00'),(12,2,5,12500.00,'2025-09-08 06:00:00'),(13,13,2,1800.00,'2025-10-30 06:00:00'),(14,4,5,6400.00,'2025-09-19 06:00:00'),(15,9,4,6700.00,'2025-10-19 06:00:00'),(16,12,3,14500.00,'2025-11-24 06:00:00'),(17,17,1,6700.00,'2025-10-18 06:00:00'),(18,12,4,6700.00,'2025-11-04 06:00:00'),(19,12,5,7199.00,'2025-11-21 06:00:00'),(20,13,5,14500.00,'2025-09-14 06:00:00'),(21,2,3,14500.00,'2025-11-01 06:00:00'),(22,15,1,1200.00,'2025-09-06 06:00:00'),(23,14,4,1200.00,'2025-10-06 06:00:00'),(24,9,1,2100.00,'2025-10-24 06:00:00'),(25,15,3,2100.00,'2025-09-30 06:00:00'),(26,9,2,14500.00,'2025-11-07 06:00:00'),(27,3,2,2400.00,'2025-10-04 06:00:00'),(28,14,4,14500.00,'2025-10-24 06:00:00'),(29,7,5,3200.00,'2025-10-14 06:00:00'),(30,9,5,2100.00,'2025-09-12 06:00:00'),(31,10,1,10497.00,'2025-10-16 06:00:00'),(32,7,1,10497.00,'2025-10-30 06:00:00'),(33,5,1,1800.00,'2025-09-09 06:00:00'),(34,3,2,1800.00,'2025-11-04 06:00:00'),(35,6,2,1800.00,'2025-11-09 06:00:00'),(36,12,1,2400.00,'2025-09-15 06:00:00'),(37,13,1,1800.00,'2025-10-09 06:00:00'),(38,15,4,6400.00,'2025-09-26 06:00:00'),(39,15,2,7199.00,'2025-11-20 06:00:00'),(40,13,5,4300.00,'2025-09-23 06:00:00'),(41,13,5,8900.00,'2025-10-26 06:00:00'),(42,12,3,6695.00,'2025-09-02 06:00:00'),(43,5,1,4300.00,'2025-09-18 06:00:00'),(44,10,2,6700.00,'2025-09-19 06:00:00'),(45,16,1,8900.00,'2025-09-23 06:00:00'),(46,15,3,12500.00,'2025-11-03 06:00:00'),(47,14,5,3200.00,'2025-11-16 06:00:00'),(48,8,2,6400.00,'2025-10-25 06:00:00'),(49,10,4,1200.00,'2025-09-26 06:00:00'),(50,15,3,2100.00,'2025-09-09 06:00:00'),(51,8,4,14500.00,'2025-11-01 06:00:00'),(52,14,4,10497.00,'2025-11-19 06:00:00'),(53,5,3,1200.00,'2025-11-07 06:00:00'),(67,11,2,4073.00,'2025-11-21 06:00:00'),(68,17,1,3793.00,'2025-11-24 06:00:00'),(69,4,1,10153.00,'2025-09-14 06:00:00'),(70,14,3,2438.00,'2025-09-03 06:00:00'),(71,15,1,4946.00,'2025-11-19 06:00:00'),(72,12,4,6176.00,'2025-11-10 06:00:00'),(73,16,1,1003.00,'2025-10-20 06:00:00'),(74,14,2,3028.00,'2025-11-10 06:00:00'),(75,11,3,10422.00,'2025-11-21 06:00:00'),(76,11,1,2713.00,'2025-09-07 06:00:00'),(77,2,5,7441.00,'2025-10-21 06:00:00'),(78,9,4,13794.00,'2025-10-20 06:00:00'),(79,3,4,3670.00,'2025-11-19 06:00:00'),(80,17,1,6501.00,'2025-11-11 06:00:00'),(81,16,1,5883.00,'2025-11-04 06:00:00'),(82,12,5,12319.00,'2025-09-20 06:00:00'),(83,13,5,2006.00,'2025-11-14 06:00:00'),(84,2,4,3248.00,'2025-11-13 06:00:00'),(85,12,5,4900.00,'2025-11-12 06:00:00'),(86,6,5,8532.00,'2025-09-08 06:00:00'),(87,15,5,14904.00,'2025-09-24 06:00:00'),(88,7,1,2108.00,'2025-09-25 06:00:00'),(89,4,1,10773.00,'2025-10-01 06:00:00'),(90,12,1,1618.00,'2025-10-26 06:00:00'),(91,17,1,9330.00,'2025-10-25 06:00:00'),(92,6,4,8413.00,'2025-10-21 06:00:00'),(93,6,4,6891.00,'2025-09-15 06:00:00'),(94,10,2,7284.00,'2025-10-24 06:00:00'),(95,12,3,13466.00,'2025-10-31 06:00:00'),(96,14,5,1776.00,'2025-10-25 06:00:00'),(97,16,4,13747.00,'2025-10-02 06:00:00'),(98,2,1,12508.00,'2025-10-16 06:00:00'),(99,4,1,3942.00,'2025-10-30 06:00:00'),(100,14,4,7899.00,'2025-09-19 06:00:00'),(101,10,1,1213.00,'2025-10-30 06:00:00'),(102,7,4,5545.00,'2025-10-25 06:00:00'),(103,3,4,2757.00,'2025-10-20 06:00:00'),(104,8,3,11591.00,'2025-10-22 06:00:00'),(105,12,3,5633.00,'2025-09-27 06:00:00'),(106,10,4,4519.00,'2025-11-22 06:00:00'),(107,16,5,7000.00,'2025-10-24 06:00:00'),(108,14,5,9989.00,'2025-09-23 06:00:00'),(109,7,5,8453.00,'2025-11-23 06:00:00'),(110,4,4,9231.00,'2025-10-20 06:00:00'),(111,2,3,8644.00,'2025-09-11 06:00:00'),(112,17,3,10400.00,'2025-11-09 06:00:00'),(113,17,2,2109.00,'2025-09-21 06:00:00'),(114,16,5,12169.00,'2025-09-23 06:00:00'),(115,15,3,4404.00,'2025-10-16 06:00:00'),(116,15,4,11941.00,'2025-11-21 06:00:00'),(117,6,4,6155.00,'2025-11-19 06:00:00'),(118,9,3,1106.00,'2025-10-27 06:00:00'),(119,5,1,12060.00,'2025-11-02 06:00:00'),(120,4,4,6065.00,'2025-10-11 06:00:00'),(121,5,4,2475.00,'2025-09-23 06:00:00'),(122,16,5,12683.00,'2025-10-05 06:00:00'),(123,8,5,10828.00,'2025-10-15 06:00:00'),(124,9,4,3673.00,'2025-11-13 06:00:00'),(125,11,3,9780.00,'2025-10-31 06:00:00'),(126,10,4,10105.00,'2025-09-26 06:00:00'),(127,9,3,4945.00,'2025-11-08 06:00:00'),(128,2,5,14864.00,'2025-10-15 06:00:00'),(129,11,2,12873.00,'2025-09-28 06:00:00'),(130,2,1,10460.00,'2025-11-23 06:00:00'),(131,13,4,2088.00,'2025-10-14 06:00:00'),(132,5,4,14243.00,'2025-10-16 06:00:00'),(133,14,2,3296.00,'2025-11-21 06:00:00'),(134,4,1,9836.00,'2025-09-08 06:00:00'),(135,10,2,3922.00,'2025-11-26 06:00:00'),(136,6,3,7598.00,'2025-11-25 06:00:00'),(137,8,2,11495.00,'2025-09-13 06:00:00'),(138,9,5,14618.00,'2025-09-23 06:00:00'),(139,7,5,13989.00,'2025-10-28 06:00:00'),(140,9,2,7271.00,'2025-09-13 06:00:00'),(141,7,2,7968.00,'2025-10-21 06:00:00'),(142,7,1,7190.00,'2025-11-18 06:00:00'),(143,3,5,5725.00,'2025-11-16 06:00:00'),(144,7,5,14579.00,'2025-11-19 06:00:00'),(145,11,2,6108.00,'2025-09-14 06:00:00'),(146,12,5,9252.00,'2025-09-16 06:00:00'),(147,3,5,9927.00,'2025-09-20 06:00:00'),(148,5,2,14723.00,'2025-11-24 06:00:00'),(149,15,3,9175.00,'2025-10-25 06:00:00'),(150,7,4,13636.00,'2025-09-17 06:00:00'),(151,5,3,5216.00,'2025-11-02 06:00:00'),(152,12,1,3769.00,'2025-11-22 06:00:00'),(153,3,4,7515.00,'2025-09-04 06:00:00'),(154,14,4,9494.00,'2025-10-29 06:00:00'),(194,7,1,6700.00,'2025-11-28 05:37:55');
/*!40000 ALTER TABLE `accessory_sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conversion_funnel`
--

DROP TABLE IF EXISTS `conversion_funnel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conversion_funnel` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `mensajes_whatsapp` int DEFAULT '0',
  `agendan_cita` int DEFAULT '0',
  `asisten` int DEFAULT '0',
  `compras` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conversion_funnel`
--

LOCK TABLES `conversion_funnel` WRITE;
/*!40000 ALTER TABLE `conversion_funnel` DISABLE KEYS */;
INSERT INTO `conversion_funnel` VALUES (1,'2025-09-10',43,11,4,5),(2,'2025-09-09',28,17,15,1),(3,'2025-09-08',30,5,10,4),(4,'2025-09-07',36,24,17,9),(5,'2025-09-06',40,23,9,4),(6,'2025-09-05',49,14,10,9),(7,'2025-09-04',28,11,6,1),(8,'2025-09-03',19,18,13,3),(9,'2025-09-02',37,12,14,8),(10,'2025-09-01',39,9,17,0),(11,'2025-09-20',24,19,11,6),(12,'2025-09-19',23,23,10,7),(13,'2025-09-18',23,12,16,2),(14,'2025-09-17',34,12,16,4),(15,'2025-09-16',36,23,10,8),(16,'2025-09-15',41,11,7,5),(17,'2025-09-14',46,22,12,6),(18,'2025-09-13',12,15,10,8),(19,'2025-09-12',40,10,17,1),(20,'2025-09-11',40,12,11,7),(21,'2025-09-30',49,19,11,7),(22,'2025-09-29',17,16,8,0),(23,'2025-09-28',19,5,9,0),(24,'2025-09-27',10,23,11,9),(25,'2025-09-26',13,17,15,1),(26,'2025-09-25',27,18,4,4),(27,'2025-09-24',15,8,9,7),(28,'2025-09-23',24,17,17,0),(29,'2025-09-22',15,18,17,8),(30,'2025-09-21',15,11,3,4),(31,'2025-10-10',42,23,4,6),(32,'2025-10-09',10,6,8,5),(33,'2025-10-08',40,7,8,5),(34,'2025-10-07',35,15,12,6),(35,'2025-10-06',26,6,5,6),(36,'2025-10-05',37,14,6,9),(37,'2025-10-04',40,7,6,7),(38,'2025-10-03',19,22,14,0),(39,'2025-10-02',49,19,15,8),(40,'2025-10-01',41,12,10,2),(41,'2025-10-20',44,15,3,6),(42,'2025-10-19',22,14,10,1),(43,'2025-10-18',48,14,10,2),(44,'2025-10-17',27,17,14,8),(45,'2025-10-16',47,8,5,1),(46,'2025-10-15',28,20,8,6),(47,'2025-10-14',20,10,10,6),(48,'2025-10-13',40,23,7,7),(49,'2025-10-12',49,17,3,3),(50,'2025-10-11',41,19,9,7),(51,'2025-10-30',38,8,15,5),(52,'2025-10-29',17,12,8,5),(53,'2025-10-28',36,19,12,8),(54,'2025-10-27',30,24,7,4),(55,'2025-10-26',29,6,3,7),(56,'2025-10-25',34,23,13,7),(57,'2025-10-24',38,10,6,3),(58,'2025-10-23',48,21,5,5),(59,'2025-10-22',13,20,13,1),(60,'2025-10-21',28,24,9,3),(61,'2025-11-09',31,15,3,6),(62,'2025-11-08',15,19,4,4),(63,'2025-11-07',38,11,10,4),(64,'2025-11-06',42,19,6,0),(65,'2025-11-05',33,20,3,8),(66,'2025-11-04',20,19,13,4),(67,'2025-11-03',22,7,12,6),(68,'2025-11-02',30,16,8,2),(69,'2025-11-01',45,21,8,4),(70,'2025-10-31',18,17,12,0),(71,'2025-11-19',31,14,14,3),(72,'2025-11-18',22,17,6,3),(73,'2025-11-17',12,8,14,1),(74,'2025-11-16',37,22,8,0),(75,'2025-11-15',22,12,15,2),(76,'2025-11-14',32,8,4,1),(77,'2025-11-13',22,7,12,6),(78,'2025-11-12',36,10,8,0),(79,'2025-11-11',47,18,10,5),(80,'2025-11-10',21,19,15,8),(81,'2025-11-27',41,14,15,9),(82,'2025-11-26',17,6,16,2),(83,'2025-11-25',23,6,8,6),(84,'2025-11-24',17,23,3,4),(85,'2025-11-23',19,20,6,7),(86,'2025-11-22',13,8,11,4),(87,'2025-11-21',30,7,5,5),(88,'2025-11-20',16,7,6,8);
/*!40000 ALTER TABLE `conversion_funnel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funnel_events`
--

DROP TABLE IF EXISTS `funnel_events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funnel_events` (
  `id` int NOT NULL AUTO_INCREMENT,
  `stage` enum('whatsapp','agendado','compra') NOT NULL,
  `event_date` date NOT NULL,
  `notes` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funnel_events`
--

LOCK TABLES `funnel_events` WRITE;
/*!40000 ALTER TABLE `funnel_events` DISABLE KEYS */;
INSERT INTO `funnel_events` VALUES (1,'whatsapp','2025-09-10','Evento generado automáticamente 136'),(2,'compra','2025-09-09','Evento generado automáticamente 273'),(3,'whatsapp','2025-09-08','Evento generado automáticamente 958'),(4,'whatsapp','2025-09-07','Evento generado automáticamente 732'),(5,'compra','2025-09-06','Evento generado automáticamente 287'),(6,'agendado','2025-09-05','Evento generado automáticamente 868'),(7,'whatsapp','2025-09-04','Evento generado automáticamente 897'),(8,'agendado','2025-09-03','Evento generado automáticamente 219'),(9,'agendado','2025-09-02','Evento generado automáticamente 95'),(10,'agendado','2025-09-01','Evento generado automáticamente 817'),(11,'compra','2025-09-20','Evento generado automáticamente 672'),(12,'compra','2025-09-19','Evento generado automáticamente 401'),(13,'agendado','2025-09-18','Evento generado automáticamente 564'),(14,'compra','2025-09-17','Evento generado automáticamente 105'),(15,'whatsapp','2025-09-16','Evento generado automáticamente 923'),(16,'compra','2025-09-15','Evento generado automáticamente 580'),(17,'whatsapp','2025-09-14','Evento generado automáticamente 710'),(18,'compra','2025-09-13','Evento generado automáticamente 274'),(19,'whatsapp','2025-09-12','Evento generado automáticamente 803'),(20,'whatsapp','2025-09-11','Evento generado automáticamente 783'),(21,'compra','2025-09-30','Evento generado automáticamente 652'),(22,'compra','2025-09-29','Evento generado automáticamente 341'),(23,'whatsapp','2025-09-28','Evento generado automáticamente 610'),(24,'compra','2025-09-27','Evento generado automáticamente 508'),(25,'agendado','2025-09-26','Evento generado automáticamente 157'),(26,'whatsapp','2025-09-25','Evento generado automáticamente 407'),(27,'agendado','2025-09-24','Evento generado automáticamente 312'),(28,'whatsapp','2025-09-23','Evento generado automáticamente 255'),(29,'whatsapp','2025-09-22','Evento generado automáticamente 28'),(30,'agendado','2025-09-21','Evento generado automáticamente 230'),(31,'whatsapp','2025-10-10','Evento generado automáticamente 123'),(32,'whatsapp','2025-10-09','Evento generado automáticamente 255'),(33,'compra','2025-10-08','Evento generado automáticamente 729'),(34,'compra','2025-10-07','Evento generado automáticamente 549'),(35,'compra','2025-10-06','Evento generado automáticamente 877'),(36,'compra','2025-10-05','Evento generado automáticamente 708'),(37,'agendado','2025-10-04','Evento generado automáticamente 555'),(38,'whatsapp','2025-10-03','Evento generado automáticamente 171'),(39,'agendado','2025-10-02','Evento generado automáticamente 243'),(40,'whatsapp','2025-10-01','Evento generado automáticamente 84'),(41,'compra','2025-10-20','Evento generado automáticamente 402'),(42,'whatsapp','2025-10-19','Evento generado automáticamente 874'),(43,'compra','2025-10-18','Evento generado automáticamente 986'),(44,'compra','2025-10-17','Evento generado automáticamente 861'),(45,'whatsapp','2025-10-16','Evento generado automáticamente 486'),(46,'agendado','2025-10-15','Evento generado automáticamente 480'),(47,'whatsapp','2025-10-14','Evento generado automáticamente 744'),(48,'whatsapp','2025-10-13','Evento generado automáticamente 812'),(49,'whatsapp','2025-10-12','Evento generado automáticamente 720'),(50,'agendado','2025-10-11','Evento generado automáticamente 373'),(51,'agendado','2025-10-30','Evento generado automáticamente 601'),(52,'compra','2025-10-29','Evento generado automáticamente 60'),(53,'agendado','2025-10-28','Evento generado automáticamente 730'),(54,'agendado','2025-10-27','Evento generado automáticamente 325'),(55,'whatsapp','2025-10-26','Evento generado automáticamente 591'),(56,'agendado','2025-10-25','Evento generado automáticamente 307'),(57,'compra','2025-10-24','Evento generado automáticamente 499'),(58,'agendado','2025-10-23','Evento generado automáticamente 724'),(59,'whatsapp','2025-10-22','Evento generado automáticamente 262'),(60,'agendado','2025-10-21','Evento generado automáticamente 448'),(61,'compra','2025-11-09','Evento generado automáticamente 152'),(62,'whatsapp','2025-11-08','Evento generado automáticamente 853'),(63,'whatsapp','2025-11-07','Evento generado automáticamente 839'),(64,'compra','2025-11-06','Evento generado automáticamente 262'),(65,'agendado','2025-11-05','Evento generado automáticamente 414'),(66,'compra','2025-11-04','Evento generado automáticamente 510'),(67,'whatsapp','2025-11-03','Evento generado automáticamente 965'),(68,'compra','2025-11-02','Evento generado automáticamente 742'),(69,'compra','2025-11-01','Evento generado automáticamente 398'),(70,'whatsapp','2025-10-31','Evento generado automáticamente 880'),(71,'compra','2025-11-19','Evento generado automáticamente 142'),(72,'agendado','2025-11-18','Evento generado automáticamente 761'),(73,'agendado','2025-11-17','Evento generado automáticamente 185'),(74,'agendado','2025-11-16','Evento generado automáticamente 668'),(75,'whatsapp','2025-11-15','Evento generado automáticamente 18'),(76,'whatsapp','2025-11-14','Evento generado automáticamente 324'),(77,'agendado','2025-11-13','Evento generado automáticamente 998'),(78,'compra','2025-11-12','Evento generado automáticamente 44'),(79,'compra','2025-11-11','Evento generado automáticamente 852'),(80,'compra','2025-11-10','Evento generado automáticamente 790'),(81,'agendado','2025-11-27','Evento generado automáticamente 329'),(82,'agendado','2025-11-26','Evento generado automáticamente 137'),(83,'compra','2025-11-25','Evento generado automáticamente 647'),(84,'compra','2025-11-24','Evento generado automáticamente 48'),(85,'compra','2025-11-23','Evento generado automáticamente 91'),(86,'compra','2025-11-22','Evento generado automáticamente 293'),(87,'compra','2025-11-21','Evento generado automáticamente 751'),(88,'agendado','2025-11-20','Evento generado automáticamente 630');
/*!40000 ALTER TABLE `funnel_events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle_sales`
--

DROP TABLE IF EXISTS `vehicle_sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle_sales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `vehicle_id` int NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `sale_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `vehicle_id` (`vehicle_id`),
  CONSTRAINT `vehicle_sales_ibfk_1` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=161 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle_sales`
--

LOCK TABLES `vehicle_sales` WRITE;
/*!40000 ALTER TABLE `vehicle_sales` DISABLE KEYS */;
INSERT INTO `vehicle_sales` VALUES (1,9,915000.00,'2025-11-27 05:07:01'),(2,10,599000.00,'2025-11-27 05:07:47'),(3,13,822100.00,'2025-10-20 06:00:00'),(4,13,750900.00,'2025-11-18 06:00:00'),(5,24,850000.00,'2025-09-13 06:00:00'),(6,16,850000.00,'2025-10-08 06:00:00'),(7,25,1369900.00,'2025-10-12 06:00:00'),(8,20,850000.00,'2025-11-22 06:00:00'),(9,16,762100.00,'2025-11-06 06:00:00'),(10,12,1081000.00,'2025-11-27 06:00:00'),(11,23,599000.00,'2025-09-07 06:00:00'),(12,9,915001.00,'2025-09-08 06:00:00'),(13,14,650000.00,'2025-11-25 06:00:00'),(14,15,1299900.00,'2025-10-23 06:00:00'),(15,12,599000.00,'2025-11-12 06:00:00'),(16,25,915001.00,'2025-10-10 06:00:00'),(17,12,750900.00,'2025-09-17 06:00:00'),(18,14,1469100.00,'2025-11-01 06:00:00'),(19,22,750900.00,'2025-10-16 06:00:00'),(20,26,922100.00,'2025-11-22 06:00:00'),(21,18,822100.00,'2025-10-29 06:00:00'),(22,22,822100.00,'2025-11-26 06:00:00'),(23,15,1017300.00,'2025-11-19 06:00:00'),(24,11,915001.00,'2025-11-04 06:00:00'),(25,18,737100.00,'2025-11-09 06:00:00'),(26,18,762100.00,'2025-10-04 06:00:00'),(27,15,850000.00,'2025-10-25 06:00:00'),(34,16,796673.00,'2025-11-04 06:00:00'),(35,10,891317.00,'2025-09-02 06:00:00'),(36,14,1295220.00,'2025-11-01 06:00:00'),(37,25,1052033.00,'2025-09-15 06:00:00'),(38,22,691770.00,'2025-10-11 06:00:00'),(39,25,936690.00,'2025-10-27 06:00:00'),(40,15,1757426.00,'2025-09-12 06:00:00'),(41,11,803513.00,'2025-10-29 06:00:00'),(42,21,1330551.00,'2025-10-27 06:00:00'),(43,18,1749269.00,'2025-10-15 06:00:00'),(44,9,1516647.00,'2025-09-24 06:00:00'),(45,14,1601501.00,'2025-11-05 06:00:00'),(46,18,1170643.00,'2025-10-25 06:00:00'),(47,22,1910936.00,'2025-10-08 06:00:00'),(48,14,767514.00,'2025-09-03 06:00:00'),(49,19,1805901.00,'2025-10-22 06:00:00'),(50,14,1749259.00,'2025-09-19 06:00:00'),(51,18,681449.00,'2025-11-24 06:00:00'),(52,16,785970.00,'2025-11-03 06:00:00'),(53,9,1978483.00,'2025-11-13 06:00:00'),(54,13,1557514.00,'2025-11-09 06:00:00'),(55,23,1682073.00,'2025-10-10 06:00:00'),(56,24,512984.00,'2025-10-09 06:00:00'),(57,11,1122775.00,'2025-10-27 06:00:00'),(58,26,1971458.00,'2025-11-23 06:00:00'),(59,23,901769.00,'2025-11-15 06:00:00'),(60,18,1912141.00,'2025-09-17 06:00:00'),(61,11,623573.00,'2025-09-02 06:00:00'),(62,24,758032.00,'2025-09-29 06:00:00'),(63,10,1306114.00,'2025-10-04 06:00:00'),(64,14,1022264.00,'2025-11-14 06:00:00'),(65,12,1016071.00,'2025-09-18 06:00:00'),(66,25,684545.00,'2025-11-09 06:00:00'),(67,19,1329702.00,'2025-09-01 06:00:00'),(68,16,1893496.00,'2025-10-12 06:00:00'),(69,19,1077771.00,'2025-09-23 06:00:00'),(70,10,1597316.00,'2025-10-03 06:00:00'),(71,20,685492.00,'2025-10-30 06:00:00'),(72,9,711858.00,'2025-10-23 06:00:00'),(73,18,1940394.00,'2025-09-14 06:00:00'),(74,25,511374.00,'2025-10-02 06:00:00'),(75,22,1519297.00,'2025-09-14 06:00:00'),(76,22,736721.00,'2025-10-25 06:00:00'),(77,20,916692.00,'2025-10-15 06:00:00'),(78,21,1943908.00,'2025-11-03 06:00:00'),(79,22,1262018.00,'2025-09-30 06:00:00'),(80,11,1475932.00,'2025-11-16 06:00:00'),(81,15,1000123.00,'2025-10-15 06:00:00'),(82,18,659700.00,'2025-11-24 06:00:00'),(83,17,1272738.00,'2025-09-13 06:00:00'),(84,11,1007122.00,'2025-09-21 06:00:00'),(85,12,705905.00,'2025-09-16 06:00:00'),(86,17,1780136.00,'2025-11-13 06:00:00'),(87,20,1351442.00,'2025-11-27 06:00:00'),(88,13,1051720.00,'2025-09-03 06:00:00'),(89,9,648692.00,'2025-10-04 06:00:00'),(90,20,1998957.00,'2025-09-10 06:00:00'),(91,18,901924.00,'2025-11-09 06:00:00'),(92,12,1182117.00,'2025-11-07 06:00:00'),(93,17,717418.00,'2025-09-22 06:00:00'),(94,23,976316.00,'2025-09-14 06:00:00'),(95,23,1235013.00,'2025-09-08 06:00:00'),(96,26,1440538.00,'2025-09-18 06:00:00'),(97,10,1897714.00,'2025-10-01 06:00:00'),(98,25,1422586.00,'2025-09-26 06:00:00'),(99,19,568606.00,'2025-10-13 06:00:00'),(100,14,578680.00,'2025-10-01 06:00:00'),(101,19,1942074.00,'2025-11-27 06:00:00'),(102,10,1241596.00,'2025-09-17 06:00:00'),(103,16,1391691.00,'2025-10-31 06:00:00'),(104,20,812223.00,'2025-09-07 06:00:00'),(105,22,1402172.00,'2025-11-02 06:00:00'),(106,22,1243820.00,'2025-09-28 06:00:00'),(107,10,1146957.00,'2025-11-22 06:00:00'),(108,15,673482.00,'2025-10-08 06:00:00'),(109,22,1410712.00,'2025-11-02 06:00:00'),(110,21,1172990.00,'2025-09-09 06:00:00'),(111,11,1249984.00,'2025-09-02 06:00:00'),(112,19,1828025.00,'2025-10-29 06:00:00'),(113,20,992471.00,'2025-10-28 06:00:00'),(114,13,1041008.00,'2025-09-02 06:00:00'),(115,9,1983983.00,'2025-11-20 06:00:00'),(116,20,1111432.00,'2025-09-13 06:00:00'),(117,17,1847023.00,'2025-09-10 06:00:00'),(118,23,1753204.00,'2025-10-31 06:00:00'),(119,25,1386744.00,'2025-09-15 06:00:00'),(120,9,1603005.00,'2025-10-18 06:00:00'),(121,17,1798356.00,'2025-11-13 06:00:00');
/*!40000 ALTER TABLE `vehicle_sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicles`
--

DROP TABLE IF EXISTS `vehicles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brand` varchar(100) DEFAULT NULL,
  `model` varchar(100) DEFAULT NULL,
  `year` int DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `horsepower` int DEFAULT NULL,
  `description` text,
  `image` text,
  `sold` tinyint DEFAULT '0',
  `stock` int DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicles`
--

LOCK TABLES `vehicles` WRITE;
/*!40000 ALTER TABLE `vehicles` DISABLE KEYS */;
INSERT INTO `vehicles` VALUES (9,'Ford','Mustang',2025,915001.00,485,'Conduce tu Ford Mustang 2025, el Auto Deportivo que ha hecho historia. Lleva tus emociones al límite al disfrutar de su espectacular diseño, optimizado totalmente para favorecer la velocidad; disfruta de su manejo inigualable gracias a la gran potencia y Tecnologías que equipa. Enamórate de cada detalle.\n\nFord Mustang 2025:\nTecnología, Conectividad y Seguridad con un Diseño Legendario','https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/mustang/2025/overview/colorizer/rojo-racing/ford-mustang-2025-auto-deportivo-sport-muscle-car-color-rojo-racing.jpg.dam.full.high.jpg/1745245734481.jpg',1,NULL),(10,'Ford','Territory',2025,599000.00,187,'Disfruta de viajes seguros y placenteros con tu familia gracias al amplio espacio y moderno diseño de Ford Territory 2025, SUV de Gran Tecnología que ofrece todo lo que necesitas para convertir cada viaje en una experiencia inolvidable.','https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/territory/2025/colorizer/rojo-rubi/ford-territory-2025-camioneta-suv-tecnologica-equipada-color-rojo-rubi.jpg.dam.full.high.jpg/1722867841735.jpg',0,1),(11,'Ford','Territory',2026,650000.00,187,'Prepárate para la Nueva Ford Territory 2026, la SUV que realmente lo tiene todo para ti y tu familia. Olvídate de las preocupaciones de espacio gracias a su amplio interior que garantiza viajes con la máxima comodidad para todos. Además, Ford Territory 2026 está equipada con avanzada tecnología que te mantiene conectado y en control del Vehículo en todo momento.\n\n','https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/territory/2026/colorizer/v1/colorizer/verde-oasis/ford-territory-2026-camioneta-suv-tecnologica-color-verde-oasis.jpg.dam.full.high.jpg/1756926697163.jpg',1,1),(12,'Ford',' Bronco Sport',2025,762100.00,181,'Innovadora, capaz y de imponente diseño, Ford Bronco Sport 2025 se reinventa en el interior, exterior y con nuevas capacidades todoterreno que la hacen digna del legado de la familia Bronco. ¡Descúbrela!','https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/bronco-sport/2025/overview/colorizer/blanco-tundra/ford-bronco-sport-2025-suv-todoterreno-diseno-color-blanco-tundra.jpg.dam.full.high.jpg/1737123924947.jpg',0,1),(13,'Ford','Bronco',2025,1369900.00,300,'La aventura a bordo de Ford Bronco 2025 inicia donde termina el asfalto. Desde su robusto Diseño hasta su extraordinaria Capacidad y Desempeño, Ford Bronco es la viva imagen del icónico legado Off-Road que ha evolucionado desde 1966.','https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/bronco/2025/colorizer/claro-arena/ford-bronco-2025-suv-todoterreno-diseno-color-claro-arena.jpg.dam.full.high.jpg/1746540987730.jpg',0,1),(14,'Ford','Explorer',2025,1184100.00,300,'Diseñada para satisfacer las necesidades de los conductores más exigentes, Ford Explorer 2025 es la SUV con el equilibrio perfecto entre confort, seguridad y estilo. Redescubre un icono de la Familia Ford, que se redefine con un diseño más elegante y juvenil.','https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/explorer/2025/colorizer/rojo-cereza/ford-explorer-2025-suv-comoda-lujo-3-filas-nueva-color-rojo-cereza.jpg.dam.full.high.jpg/1725887821795.jpg',0,1),(15,'Ford','Explorer Police Interceptor',2025,922100.00,285,'Rendimiento excepcional y Tecnología que brinda seguridad y eficiencia en todo momento. Ford Explorer Police Interceptor 2025 establece un nuevo estándar de eficacia y confiabilidad.','https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/explorer/police-interceptor/2025/colorizer/negro-obsidiana/ford-explorer-police-interceptor-2025-policia-color-negro-obsidiana.jpg.dam.full.high.jpg/1725887701454.jpg',0,1),(16,'Ford','Expedition',2025,1829900.00,440,'a SUV para 8 pasajeros Ford Expedition 2025 siempre ha destacado por su perfecta combinación de lujo, confort y espacio; diseñada para satisfacer las necesidades de los conductores y pasajeros más exigentes. Conoce su apariencia totalmente nueva, con exclusivos materiales y acabados tanto en interiores como en exteriores.\n\nFord Expedition 2025: más espaciosa y lujosa que nunca.','https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/expedition/2025/overview/colorizer/gris-magneto/ford-expedition-2025-camioneta-3-filas-tecnologica-color-gris-magneto.jpg.dam.full.high.jpg/1747323179655.jpg',0,1),(17,'Ford','Maverick',2025,737100.00,250,'La Innovadora y Versátil Pickup Ford Maverick ahora se renueva, rompiendo con todos los estereotipos. Nuevo diseño, motor híbrido disponible en ambas versiones y la capacidad para adaptarse a tu estilo de vida, esta Pickup es para ti.','https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/maverick/2025/overview/colorizer/azul-electrico/ford-maverick-2025-camioneta-pickup-compacta-color-azul-electrico.jpg.dam.full.high.jpg/1747676084002.jpg',0,1),(18,'Ford','Ranger',2025,750900.00,165,'Desarrollada con la fuerza para enfrentar cualquier desafío, Ford Ranger 2025 es la Pickup que representa la fusión perfecta entre capacidad y diseño. No se trata sólo de llegar al destino, sino de disfrutar el viaje, aun si el camino se vuelve difícil. ¡Descúbrela!','https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/ranger/2025/overview/colorizer/naranja-nitro/ford-ranger-2025-camioneta-pickup-potente-4x4-color-naranja-nitro.jpg.dam.full.high.jpg/1736862984129.jpg',0,1),(19,'Ford','F-150',2025,1008100.00,325,'Con la Capacidad y Fuerza para los trabajos más pesados, Ford F-150 2025 te da la oportunidad de demostrar que el Poder se Gana. La Pickup de Trabajo con el Legado Nacidos Ford, Nacidos Fuertes cuenta con lo necesario para cualquier tarea.','https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/f-150/2025/overview/colorizer/negro-obsidiana/ford-f150-2025-pickup-trabajo-potente-capaz-color-negro-obsidiana.jpg.dam.full.high.jpg/1740496095214.jpg',0,1),(20,'Ford','Lobo',2025,1417100.00,400,'Ford Lobo 2025 es más que una Pickup, es la representación de Poder, Capacidad y Confort en un mismo lugar. Conoce la fuerza inigualable de la Pickup y descubre cómo el poder se gana.','https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/lobo/2025/colorizer/plata/ford-lobo-2025-camioneta-pickup-lujo-potente-4x4-color-plata-gris.jpg.dam.full.high.jpg/1738764842786.jpg',0,1),(21,'Ford','Super Duty Chasis',2026,1081000.00,330,'Diseñado para el jale, Ford Super Duty Chasis 2026 está equipado con Potente Motor V8, de Gran Torque y una Capacidad de Carga de hasta 5,761kg; el Camión de Trabajo ideal con la combinación perfecta de potencia y capacidad, listo para superar cualquier desafío.\n\n¡Nacidos Ford, Nacidos Fuertes!','https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/super-duty/2026/overview/colorizer/blanco-oxford/ford-superduty-chasis-2026-f350-f450-f550-camion-color-blanco-oxford.jpg.dam.full.high.jpg/1758288751413.jpg',0,1),(22,'Ford','Transit Custom',2025,850000.00,134,'Gracias a su Gran Diseño y Versatilidad, Ford Transit Custom 2025 es la Van Comercial que se adapta a todo tipo de Negocio, desde el traslado de carga hasta el transporte de personal ejecutivo.\n\nDescubre la Capacidad y Eficiencia de Ford Transit Custom 2025 y experimenta la libertad de llevar tu negocio a donde quieras, cuando quieras.','https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/transit/custom/2025/overview/colorizer/gris-mercurio/ford-transit-custom-2025-van-comercial-pasajeros-color-gris-mercurio.jpg.dam.full.high.jpg/1745353550859.jpg',0,1),(23,'Ford','Transit Van',2025,1017300.00,167,'Desarrollada para satisfacer las necesidades más exigentes en cada jornada de trabajo, Ford Transit Van 2025 entrega una Capacidad Extraordinaria y Tecnología de Vanguardia; que logra un equilibrio entre Eficiencia y Seguridad para cumplir con los estándares de tu Empresa.\n\nLleva tu Negocio al siguiente nivel con este Vehículo Comercial.','https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/transit/van/2025/colorizer/azul-marino-brillante/ford-transit-van-2025-vehiculo-carga-colores-azul-marino-brillante.jpg.dam.full.high.jpg/1736731485618.jpg',0,1),(24,'Ford','Transit Chasis',2025,822100.00,167,'Diseñada para brindar flexibilidad y versatilidad que se adaptan a las necesidades específicas de tu Empresa, Ford Transit Chasis 2025 es el Vehículo Comercial de Trabajo con la Capacidad y Tecnología para llevar tu Negocio al siguiente nivel.','https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/transit/chasis/2025/colorizer/blanco-nieve/ford-transit-chasis-2025-camion-comercial-carga-color-blanco-nieve.jpg.dam.full.high.jpg/1736731626935.jpg',0,1),(25,'Ford','Explorer ST',2025,1469100.00,400,'Ford Explorer ST 2025 te brinda una experiencia inigualable llena de velocidad y alto rendimiento, combinando una ingeniería de vanguardia con un diseño renovado, imponente y deportivo. Equipada con tecnologías avanzadas de asistencia al conductor y conectividad, esta SUV de Alto Desempeño ofrece un manejo extraordinario.','https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/explorer-st/2025/colorizer/rojo-cereza/ford-explorer-st-2025-suv-deportiva-tercera-fila-color-rojo-cereza.jpg.dam.full.high.jpg/1725887935508.jpg',0,1),(26,'Ford','Ranger Raptor',2025,1299900.00,388,'Toma el control en todo tipo de terrenos con Ford Ranger Raptor® 2025, la Pickup Off-Road que, con su Potente Motor, Tracción 4x4 y Espectacular Equipamiento en Tecnología, te ayudará a ser quien controle el camino.','https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/raptor-2018/ranger-raptor-2025/colorizer/blanco-artico/ford-ranger-raptor-2025-pickup-offroad-4x4-color-blanco-artico.jpg.dam.full.high.jpg/1747059930646.jpg',0,1);
/*!40000 ALTER TABLE `vehicles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-27 23:48:42
