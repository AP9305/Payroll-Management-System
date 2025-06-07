CREATE DATABASE  IF NOT EXISTS `dbmsfinal` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `dbmsfinal`;
-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dbmsfinal
-- ------------------------------------------------------
-- Server version	8.0.42

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
-- Table structure for table `attendance`
--

DROP TABLE IF EXISTS `attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendance` (
  `Attendance_ID` int NOT NULL AUTO_INCREMENT,
  `Employee_ID` int DEFAULT NULL,
  `Check_in` datetime DEFAULT NULL,
  `Check_out` datetime DEFAULT NULL,
  PRIMARY KEY (`Attendance_ID`),
  KEY `attendance_ibfk_1` (`Employee_ID`),
  CONSTRAINT `attendance_ibfk_1` FOREIGN KEY (`Employee_ID`) REFERENCES `employees` (`Employee_ID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=412 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance`
--

LOCK TABLES `attendance` WRITE;
/*!40000 ALTER TABLE `attendance` DISABLE KEYS */;
INSERT INTO `attendance` VALUES (301,101,'2025-05-01 09:00:00','2025-05-01 17:00:00'),(302,102,'2025-05-01 09:30:00','2025-05-01 17:30:00'),(303,103,'2025-05-01 10:00:00','2025-05-01 18:00:00'),(304,104,'2025-05-01 09:15:00','2025-05-01 17:15:00'),(401,101,'2025-05-07 09:00:00','2025-05-07 17:00:00'),(402,102,'2025-05-07 09:00:00','2025-05-07 17:00:00'),(403,103,'2025-05-06 09:00:00','2025-05-06 17:00:00'),(404,104,'2025-05-05 09:00:00','2025-05-05 17:00:00'),(405,105,'2025-05-04 09:00:00','2025-05-04 17:00:00'),(406,101,'2025-05-03 09:00:00','2025-05-03 17:00:00'),(407,102,'2025-05-02 09:00:00','2025-05-02 17:00:00'),(408,103,'2025-05-01 09:00:00','2025-05-01 17:00:00'),(411,101,'2025-05-07 22:32:00','2025-05-07 23:33:00');
/*!40000 ALTER TABLE `attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attendance_summary`
--

DROP TABLE IF EXISTS `attendance_summary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendance_summary` (
  `Summary_ID` int NOT NULL AUTO_INCREMENT,
  `Employee_ID` int DEFAULT NULL,
  `Total_Days_Present` int DEFAULT NULL,
  `Summary_Date` datetime DEFAULT NULL,
  PRIMARY KEY (`Summary_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendance_summary`
--

LOCK TABLES `attendance_summary` WRITE;
/*!40000 ALTER TABLE `attendance_summary` DISABLE KEYS */;
/*!40000 ALTER TABLE `attendance_summary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bank_details`
--

DROP TABLE IF EXISTS `bank_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bank_details` (
  `Bank_ID` int NOT NULL AUTO_INCREMENT,
  `Employee_ID` int DEFAULT NULL,
  `Account_No` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`Bank_ID`),
  KEY `bank_details_ibfk_1` (`Employee_ID`),
  CONSTRAINT `bank_details_ibfk_1` FOREIGN KEY (`Employee_ID`) REFERENCES `employees` (`Employee_ID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=223 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bank_details`
--

LOCK TABLES `bank_details` WRITE;
/*!40000 ALTER TABLE `bank_details` DISABLE KEYS */;
INSERT INTO `bank_details` VALUES (120,120,'AC120001'),(122,122,'AC122001'),(123,123,'AC123001'),(124,124,'AC124001'),(125,125,'AC125001'),(126,126,'AC126001'),(128,128,'AC128001'),(201,101,'SBIN0001010'),(202,102,'SBIN0001020'),(203,103,'SBIN0001030'),(204,104,'SBIN0001040'),(205,105,'SBIN0001050'),(207,107,'SBIN0001070'),(208,108,'SBIN0001080'),(210,110,'SBIN0001100'),(219,219,'AC219001');
/*!40000 ALTER TABLE `bank_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `bank_info_view`
--

DROP TABLE IF EXISTS `bank_info_view`;
/*!50001 DROP VIEW IF EXISTS `bank_info_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `bank_info_view` AS SELECT 
 1 AS `Employee_ID`,
 1 AS `Employee_Name`,
 1 AS `Account_No`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `bonus`
--

DROP TABLE IF EXISTS `bonus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bonus` (
  `Bonus_ID` int NOT NULL AUTO_INCREMENT,
  `Employee_ID` int DEFAULT NULL,
  `Amount` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`Bonus_ID`),
  KEY `bonus_ibfk_1` (`Employee_ID`),
  CONSTRAINT `bonus_ibfk_1` FOREIGN KEY (`Employee_ID`) REFERENCES `employees` (`Employee_ID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=410 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bonus`
--

LOCK TABLES `bonus` WRITE;
/*!40000 ALTER TABLE `bonus` DISABLE KEYS */;
INSERT INTO `bonus` VALUES (402,103,3000.00),(403,104,7000.00),(404,104,4000.00),(405,105,3500.00),(409,126,8786.00);
/*!40000 ALTER TABLE `bonus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bonus_log`
--

DROP TABLE IF EXISTS `bonus_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bonus_log` (
  `Log_ID` int NOT NULL AUTO_INCREMENT,
  `Employee_ID` int DEFAULT NULL,
  `Bonus_Amount` decimal(10,2) DEFAULT NULL,
  `Bonus_Date` datetime DEFAULT NULL,
  PRIMARY KEY (`Log_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bonus_log`
--

LOCK TABLES `bonus_log` WRITE;
/*!40000 ALTER TABLE `bonus_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `bonus_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_settings`
--

DROP TABLE IF EXISTS `company_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company_settings` (
  `id` int NOT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `gstin` varchar(50) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_settings`
--

LOCK TABLES `company_settings` WRITE;
/*!40000 ALTER TABLE `company_settings` DISABLE KEYS */;
INSERT INTO `company_settings` VALUES (1,'Your Company','Address','GSTIN','email@example.com','1234567890');
/*!40000 ALTER TABLE `company_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deductions`
--

DROP TABLE IF EXISTS `deductions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deductions` (
  `Deduction_ID` int NOT NULL AUTO_INCREMENT,
  `Amount` decimal(10,2) DEFAULT NULL,
  `Reason` varchar(255) DEFAULT NULL,
  `Employee_ID` int DEFAULT NULL,
  PRIMARY KEY (`Deduction_ID`),
  KEY `fk_deduction_employee` (`Employee_ID`),
  CONSTRAINT `fk_deduction_employee` FOREIGN KEY (`Employee_ID`) REFERENCES `employees` (`Employee_ID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=132 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deductions`
--

LOCK TABLES `deductions` WRITE;
/*!40000 ALTER TABLE `deductions` DISABLE KEYS */;
INSERT INTO `deductions` VALUES (1,500.00,'Late coming penalty',101),(2,1000.00,'Uninformed Leave',102),(3,200.00,'Canteen Charges',103),(4,600.00,'Test deduction',104),(5,700.00,'Tax Deduction',105),(104,20000.00,'Salary Cut',NULL),(111,8000.00,'Salary Cut',NULL),(115,11000.00,'Salary Cut',NULL),(116,16000.00,'Salary Cut',NULL),(121,13000.00,'Salary Cut',NULL),(122,7000.00,'Salary Cut',NULL),(124,7000.00,'Salary Cut',NULL),(128,2000.00,'Salary Cut',NULL),(130,25000.00,'poor Performance',102);
/*!40000 ALTER TABLE `deductions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department` (
  `Department_ID` int NOT NULL AUTO_INCREMENT,
  `Department_Name` varchar(100) DEFAULT NULL,
  `Department_Location` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Department_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (1,'Human Resources','Delhi'),(2,'Finance','Mumbai'),(3,'Engineering','Bengaluru'),(4,'Marketing','Noida'),(5,'Operations','Delhi');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `Employee_ID` int NOT NULL AUTO_INCREMENT,
  `Employee_Name` varchar(100) DEFAULT NULL,
  `Employee_Address` varchar(255) DEFAULT NULL,
  `Employee_Phone` varchar(15) DEFAULT NULL,
  `Employee_DOB` date DEFAULT NULL,
  `Department_ID` int DEFAULT NULL,
  PRIMARY KEY (`Employee_ID`),
  KEY `fk_employees_department` (`Department_ID`),
  CONSTRAINT `fk_employees_department` FOREIGN KEY (`Department_ID`) REFERENCES `department` (`Department_ID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=223 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (101,'Ananya Sharma','45 MG Road, Bengaluru','9876543210','1990-04-13',2),(102,'Rohan Mehta','32 Park Street, Mumbai','9876512345','1988-11-22',1),(103,'Priya Verma','120 Gariahat Road, Kolkata','9988776655','1992-06-09',1),(104,'Vikram Rao','78 Banjara Hills, Hyderabad','9123456789','1985-08-31',3),(105,'Sneha Kapoor','19 Connaught Place, Delhi','9012345678','1993-01-24',2),(107,'Neha Nair','21 Panampilly Nagar, Kochi','9123123123','1995-05-11',3),(108,'Manish Kumar','65 Fraser Town, Bengaluru','9234567890','1991-12-08',5),(110,'Arjun Khanna','33 Sadar Bazar, Pune','9456789011','1989-08-17',3),(120,'Riya Sen','12 Park Lane, Kolkata','9000000012','1992-02-12',1),(122,'Priya Das','88 Sector 17, Chandigarh','9000000014','1993-04-18',3),(123,'Rahul Jain','77 Banjara Hills, Hyderabad','9000000015','1990-05-21',4),(124,'Sneha Paul','102 Vashi, Navi Mumbai','9000000016','1994-06-24',5),(125,'Vivek Sharma','33 Sadar Bazar, Pune','9000000017','1989-07-27',1),(126,'Anjali Mehra','19 Connaught Place, Delhi','9000000018','1995-08-30',2),(128,'Divya Singh','120 Gariahat Road, Kolkata','9000000020','1993-10-05',4),(219,'Anwesha singh','4117','8376839366','2025-05-08',1);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `trg_add_bank_detail` AFTER INSERT ON `employees` FOR EACH ROW BEGIN
  INSERT INTO Bank_Details (Bank_ID, Employee_ID, Account_No)
  VALUES (NEW.Employee_ID, NEW.Employee_ID, CONCAT('AC', NEW.Employee_ID, '001'));
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `trg_default_salary` AFTER INSERT ON `employees` FOR EACH ROW BEGIN
  INSERT INTO Salary (Salary_employeeID, Salary_Final_Amount, Salary_Desc)
  VALUES (NEW.Employee_ID, 25000, 'Default Package');
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `employer`
--

DROP TABLE IF EXISTS `employer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employer` (
  `Employer_ID` int NOT NULL,
  `Employer_Name` varchar(100) DEFAULT NULL,
  `Employer_Phone` varchar(15) DEFAULT NULL,
  `Yearly_Package` decimal(12,2) DEFAULT NULL,
  PRIMARY KEY (`Employer_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employer`
--

LOCK TABLES `employer` WRITE;
/*!40000 ALTER TABLE `employer` DISABLE KEYS */;
INSERT INTO `employer` VALUES (1,'Ravi Shah','9876543000',1200000.00),(2,'Kiran Rao','9876543001',1400000.00);
/*!40000 ALTER TABLE `employer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leave_audit`
--

DROP TABLE IF EXISTS `leave_audit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leave_audit` (
  `Leave_Log_ID` int NOT NULL AUTO_INCREMENT,
  `Employee_ID` int DEFAULT NULL,
  `Leave_Type` varchar(50) DEFAULT NULL,
  `Log_Timestamp` datetime DEFAULT NULL,
  PRIMARY KEY (`Leave_Log_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leave_audit`
--

LOCK TABLES `leave_audit` WRITE;
/*!40000 ALTER TABLE `leave_audit` DISABLE KEYS */;
INSERT INTO `leave_audit` VALUES (1,103,'Maternity','2025-05-06 22:31:36'),(2,103,'Sick','2025-05-06 22:38:53'),(3,101,'Sick','2025-05-06 23:04:11'),(4,103,'Personal','2025-05-07 00:25:15'),(5,101,'Sick Leave','2025-05-07 00:29:45'),(6,102,'Casual Leave','2025-05-07 00:29:45'),(7,103,'Earned Leave','2025-05-07 00:29:45'),(8,104,'Sick Leave','2025-05-07 00:29:45'),(9,105,'Casual Leave','2025-05-07 00:29:45'),(10,101,'Earned Leave','2025-05-07 00:29:45'),(11,101,'Sick','2025-05-07 00:58:08'),(12,116,'Vacation','2025-05-07 18:42:13'),(13,101,'Sick','2025-05-07 21:22:04'),(14,101,'Maternity','2025-05-07 21:30:47'),(15,101,'Vacation','2025-06-07 00:30:33'),(16,101,'','2025-06-07 00:44:42');
/*!40000 ALTER TABLE `leave_audit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leave_management`
--

DROP TABLE IF EXISTS `leave_management`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leave_management` (
  `Leave_ID` int NOT NULL AUTO_INCREMENT,
  `Employee_ID` int DEFAULT NULL,
  `Leave_Type` varchar(50) DEFAULT NULL,
  `Leave_Desc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Leave_ID`),
  KEY `leave_details_ibfk_1` (`Employee_ID`),
  CONSTRAINT `leave_management_ibfk_1` FOREIGN KEY (`Employee_ID`) REFERENCES `employees` (`Employee_ID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=713 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leave_management`
--

LOCK TABLES `leave_management` WRITE;
/*!40000 ALTER TABLE `leave_management` DISABLE KEYS */;
INSERT INTO `leave_management` VALUES (602,102,'Casual Leave','Personal work'),(603,103,'Earned Leave','Family vacation'),(604,104,'Sick Leave','Dental appointment'),(608,103,'Sick','injury\n'),(701,101,'Sick Leave','Fever'),(702,102,'Casual Leave','Personal work'),(703,103,'Earned Leave','Vacation'),(704,104,'Sick Leave','Cold'),(705,105,'Casual Leave','Family event'),(706,101,'Earned Leave','Trip'),(711,101,'Vacation','mope\n'),(712,101,'','');
/*!40000 ALTER TABLE `leave_management` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `trg_log_leave` AFTER INSERT ON `leave_management` FOR EACH ROW BEGIN
  INSERT INTO Leave_Audit (Employee_ID, Leave_Type, Log_Timestamp)
  VALUES (NEW.Employee_ID, NEW.Leave_Type, NOW());
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `leave_summary`
--

DROP TABLE IF EXISTS `leave_summary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leave_summary` (
  `Summary_ID` int NOT NULL AUTO_INCREMENT,
  `Employee_ID` int DEFAULT NULL,
  `Leave_Type` varchar(50) DEFAULT NULL,
  `Leave_Count` int DEFAULT NULL,
  `Summary_Date` datetime DEFAULT NULL,
  PRIMARY KEY (`Summary_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leave_summary`
--

LOCK TABLES `leave_summary` WRITE;
/*!40000 ALTER TABLE `leave_summary` DISABLE KEYS */;
/*!40000 ALTER TABLE `leave_summary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leave_type`
--

DROP TABLE IF EXISTS `leave_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leave_type` (
  `LeaveType_ID` int NOT NULL,
  `Leave_Type` varchar(50) DEFAULT NULL,
  `Leave_Desc` text,
  PRIMARY KEY (`LeaveType_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leave_type`
--

LOCK TABLES `leave_type` WRITE;
/*!40000 ALTER TABLE `leave_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `leave_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `User_ID` int NOT NULL,
  `Password` varchar(100) DEFAULT NULL,
  `Login_History` text,
  PRIMARY KEY (`User_ID`),
  CONSTRAINT `login_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `user` (`User_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `trg_log_password_change` AFTER UPDATE ON `login` FOR EACH ROW BEGIN
  IF OLD.Password != NEW.Password THEN
    INSERT INTO Login_Audit (User_ID, Old_Password, New_Password, Change_Timestamp)
    VALUES (NEW.User_ID, OLD.Password, NEW.Password, NOW());
  END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `login_audit`
--

DROP TABLE IF EXISTS `login_audit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login_audit` (
  `Audit_ID` int NOT NULL AUTO_INCREMENT,
  `User_ID` int DEFAULT NULL,
  `Old_Password` varchar(255) DEFAULT NULL,
  `New_Password` varchar(255) DEFAULT NULL,
  `Change_Timestamp` datetime DEFAULT NULL,
  PRIMARY KEY (`Audit_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_audit`
--

LOCK TABLES `login_audit` WRITE;
/*!40000 ALTER TABLE `login_audit` DISABLE KEYS */;
/*!40000 ALTER TABLE `login_audit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `Payment_ID` int NOT NULL,
  `Transaction_ID` varchar(50) DEFAULT NULL,
  `Payment_Mode` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`Payment_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (701,'TXN1001','Bank Transfer'),(702,'TXN1002','UPI'),(703,'TXN1003','Cheque');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payroll`
--

DROP TABLE IF EXISTS `payroll`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payroll` (
  `Pyrl_ID` int NOT NULL,
  `Pyrl_Type` varchar(50) DEFAULT NULL,
  `Pyrl_Final_Amount` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`Pyrl_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payroll`
--

LOCK TABLES `payroll` WRITE;
/*!40000 ALTER TABLE `payroll` DISABLE KEYS */;
INSERT INTO `payroll` VALUES (1,'Monthly',67500.00),(2,'Monthly',74375.00),(3,'Monthly',58500.00);
/*!40000 ALTER TABLE `payroll` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `payroll_dashboard`
--

DROP TABLE IF EXISTS `payroll_dashboard`;
/*!50001 DROP VIEW IF EXISTS `payroll_dashboard`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `payroll_dashboard` AS SELECT 
 1 AS `Employee_ID`,
 1 AS `Employee_Name`,
 1 AS `Salary_Base_Amount`,
 1 AS `Bonus_Amount`,
 1 AS `Deduction_Amount`,
 1 AS `Final_Salary`,
 1 AS `Generated_On`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `payroll_report`
--

DROP TABLE IF EXISTS `payroll_report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payroll_report` (
  `Payroll_Report_ID` int NOT NULL AUTO_INCREMENT,
  `Employee_ID` int DEFAULT NULL,
  `Salary_ID` int DEFAULT NULL,
  `Bonus_ID` int DEFAULT NULL,
  `Deduction_ID` int DEFAULT NULL,
  `Final_Amount` decimal(10,2) DEFAULT NULL,
  `Generated_On` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Payroll_Report_ID`),
  KEY `payroll_report_ibfk_1` (`Employee_ID`),
  KEY `payroll_report_ibfk_2` (`Salary_ID`),
  KEY `payroll_report_ibfk_3` (`Bonus_ID`),
  KEY `payroll_report_ibfk_4` (`Deduction_ID`),
  CONSTRAINT `payroll_report_ibfk_1` FOREIGN KEY (`Employee_ID`) REFERENCES `employees` (`Employee_ID`) ON DELETE CASCADE,
  CONSTRAINT `payroll_report_ibfk_2` FOREIGN KEY (`Salary_ID`) REFERENCES `salary` (`Salary_employeeID`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `payroll_report_ibfk_3` FOREIGN KEY (`Bonus_ID`) REFERENCES `bonus` (`Bonus_ID`),
  CONSTRAINT `payroll_report_ibfk_4` FOREIGN KEY (`Deduction_ID`) REFERENCES `deductions` (`Deduction_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payroll_report`
--

LOCK TABLES `payroll_report` WRITE;
/*!40000 ALTER TABLE `payroll_report` DISABLE KEYS */;
INSERT INTO `payroll_report` VALUES (2,102,102,402,2,63000.00,'2025-05-06 13:58:46'),(3,103,103,403,3,65000.00,'2025-04-06 13:58:46'),(4,104,104,404,4,70000.00,'2025-03-06 13:58:46'),(5,105,105,405,5,72000.00,'2025-02-06 13:58:46');
/*!40000 ALTER TABLE `payroll_report` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `salary`
--

DROP TABLE IF EXISTS `salary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `salary` (
  `Salary_employeeID` int NOT NULL,
  `Salary_Final_Amount` decimal(10,2) DEFAULT NULL,
  `Salary_Desc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Salary_employeeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salary`
--

LOCK TABLES `salary` WRITE;
/*!40000 ALTER TABLE `salary` DISABLE KEYS */;
INSERT INTO `salary` VALUES (101,75000.00,'Monthly Salary for April 2025'),(102,85000.00,'Monthly Salary for April 2025'),(103,65000.00,'Monthly Salary for April 2025'),(104,70000.00,'Monthly Salary for April 2025'),(105,72000.00,'Monthly Salary for April 2025'),(111,17000.00,'Default Package'),(112,41000.00,'Default Package'),(113,65000.00,'Default Package'),(114,25000.00,'Default Package'),(115,14000.00,'Default Package'),(116,9000.00,'Default Package'),(120,35000.00,'Default Package'),(121,12000.00,'Default Package'),(122,18000.00,'Default Package'),(123,25000.00,'Default Package'),(124,18000.00,'Default Package'),(125,34000.00,'Default Package'),(126,27000.00,'Default Package'),(127,29000.00,'Default Package'),(128,23000.00,'Default Package'),(129,45000.00,'Default Package'),(211,25000.00,'Default Package'),(212,25000.00,'Default Package'),(213,25000.00,'Default Package'),(214,25000.00,'Default Package'),(215,25000.00,'Default Package'),(216,25000.00,'Default Package'),(217,25000.00,'Default Package'),(218,25000.00,'Default Package'),(219,25000.00,'Default Package'),(220,25000.00,'Default Package'),(221,25000.00,'Default Package'),(222,25000.00,'Default Package');
/*!40000 ALTER TABLE `salary` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `trg_salary_history` AFTER UPDATE ON `salary` FOR EACH ROW BEGIN
  IF OLD.Salary_Final_Amount != NEW.Salary_Final_Amount THEN
    INSERT INTO Salary_History (Employee_ID, Old_Salary, New_Salary, Change_Date)
    VALUES (NEW.Salary_employeeID, OLD.Salary_Final_Amount, NEW.Salary_Final_Amount, NOW());
  END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `trg_deduct_on_salary_cut` AFTER UPDATE ON `salary` FOR EACH ROW BEGIN
  IF NEW.Salary_Final_Amount < OLD.Salary_Final_Amount THEN
    INSERT INTO Deductions (Deduction_ID, Amount, Reason)
    VALUES (NEW.Salary_employeeID, OLD.Salary_Final_Amount - NEW.Salary_Final_Amount, 'Salary Cut');
  END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `salary_history`
--

DROP TABLE IF EXISTS `salary_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `salary_history` (
  `Record_ID` int NOT NULL AUTO_INCREMENT,
  `Employee_ID` int DEFAULT NULL,
  `Old_Salary` decimal(10,2) DEFAULT NULL,
  `New_Salary` decimal(10,2) DEFAULT NULL,
  `Change_Date` datetime DEFAULT NULL,
  PRIMARY KEY (`Record_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salary_history`
--

LOCK TABLES `salary_history` WRITE;
/*!40000 ALTER TABLE `salary_history` DISABLE KEYS */;
INSERT INTO `salary_history` VALUES (1,104,90000.00,70000.00,'2025-05-06 21:12:49'),(2,105,70000.00,72000.00,'2025-05-06 21:12:49'),(3,129,25000.00,45000.00,'2025-05-07 00:38:03'),(4,128,25000.00,23000.00,'2025-05-07 00:38:03'),(5,127,25000.00,29000.00,'2025-05-07 00:38:03'),(6,126,25000.00,27000.00,'2025-05-07 00:38:03'),(7,125,25000.00,34000.00,'2025-05-07 00:38:03'),(8,124,25000.00,18000.00,'2025-05-07 00:38:03'),(9,111,25000.00,17000.00,'2025-05-07 00:38:03'),(10,112,25000.00,41000.00,'2025-05-07 00:38:03'),(11,113,25000.00,65000.00,'2025-05-07 00:38:03'),(12,115,25000.00,14000.00,'2025-05-07 00:38:03'),(13,116,25000.00,9000.00,'2025-05-07 00:38:03'),(14,120,25000.00,35000.00,'2025-05-07 00:38:03'),(15,121,25000.00,12000.00,'2025-05-07 00:38:03'),(16,122,25000.00,18000.00,'2025-05-07 00:38:03');
/*!40000 ALTER TABLE `salary_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `salary_report`
--

DROP TABLE IF EXISTS `salary_report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `salary_report` (
  `Report_ID` int NOT NULL AUTO_INCREMENT,
  `Employee_ID` int DEFAULT NULL,
  `Base_Salary` decimal(10,2) DEFAULT NULL,
  `Total_Bonus` decimal(10,2) DEFAULT NULL,
  `Total_Deductions` decimal(10,2) DEFAULT NULL,
  `Final_Salary` decimal(10,2) DEFAULT NULL,
  `Report_Date` datetime DEFAULT NULL,
  `Salary_employeeID` int DEFAULT NULL,
  PRIMARY KEY (`Report_ID`),
  KEY `fk_salary_report_salary` (`Salary_employeeID`),
  CONSTRAINT `fk_salary_report_salary` FOREIGN KEY (`Salary_employeeID`) REFERENCES `salary` (`Salary_employeeID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salary_report`
--

LOCK TABLES `salary_report` WRITE;
/*!40000 ALTER TABLE `salary_report` DISABLE KEYS */;
INSERT INTO `salary_report` VALUES (1,101,75000.00,5000.00,0.00,80000.00,'2025-05-06 13:34:19',NULL),(2,102,85000.00,0.00,0.00,85000.00,'2025-05-06 13:34:19',NULL),(3,103,65000.00,3000.00,0.00,68000.00,'2025-05-06 13:34:19',NULL),(4,104,90000.00,7000.00,0.00,97000.00,'2025-05-06 13:34:19',NULL),(5,105,70000.00,0.00,0.00,70000.00,'2025-05-06 13:34:19',NULL);
/*!40000 ALTER TABLE `salary_report` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shift`
--

DROP TABLE IF EXISTS `shift`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shift` (
  `Shift_ID` int NOT NULL,
  `Employee_ID` int DEFAULT NULL,
  `Shift_Type` enum('Morning','Evening','Night') DEFAULT NULL,
  PRIMARY KEY (`Shift_ID`),
  KEY `shift_ibfk_1` (`Employee_ID`),
  CONSTRAINT `shift_ibfk_1` FOREIGN KEY (`Employee_ID`) REFERENCES `employees` (`Employee_ID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shift`
--

LOCK TABLES `shift` WRITE;
/*!40000 ALTER TABLE `shift` DISABLE KEYS */;
INSERT INTO `shift` VALUES (501,101,'Morning'),(502,102,'Evening'),(503,103,'Night'),(504,104,'Morning'),(505,105,'Evening');
/*!40000 ALTER TABLE `shift` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `trg_bonus_on_night_shift` AFTER INSERT ON `shift` FOR EACH ROW BEGIN
  IF NEW.Shift_Type = 'Night' THEN
    INSERT INTO Bonus (Bonus_ID, Employee_ID, Amount)
    VALUES (NEW.Shift_ID, NEW.Employee_ID, 500); -- Night shift bonus
  END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Temporary view structure for view `shift_schedule_view`
--

DROP TABLE IF EXISTS `shift_schedule_view`;
/*!50001 DROP VIEW IF EXISTS `shift_schedule_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `shift_schedule_view` AS SELECT 
 1 AS `Employee_ID`,
 1 AS `Employee_Name`,
 1 AS `Shift_Type`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `tax`
--

DROP TABLE IF EXISTS `tax`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tax` (
  `Tax_ID` int NOT NULL,
  `Tax_Percentage` decimal(5,2) DEFAULT NULL,
  `Tax_Amount` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`Tax_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tax`
--

LOCK TABLES `tax` WRITE;
/*!40000 ALTER TABLE `tax` DISABLE KEYS */;
INSERT INTO `tax` VALUES (1,10.00,7500.00),(2,12.50,10625.00),(3,10.00,6500.00),(4,15.00,13500.00),(5,10.00,7000.00);
/*!40000 ALTER TABLE `tax` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tax_summary`
--

DROP TABLE IF EXISTS `tax_summary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tax_summary` (
  `Tax_Report_ID` int NOT NULL AUTO_INCREMENT,
  `Employee_ID` int DEFAULT NULL,
  `Base_Salary` decimal(10,2) DEFAULT NULL,
  `Tax_Percentage` decimal(5,2) DEFAULT NULL,
  `Tax_Amount` decimal(10,2) DEFAULT NULL,
  `Report_Date` datetime DEFAULT NULL,
  PRIMARY KEY (`Tax_Report_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tax_summary`
--

LOCK TABLES `tax_summary` WRITE;
/*!40000 ALTER TABLE `tax_summary` DISABLE KEYS */;
/*!40000 ALTER TABLE `tax_summary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `User_ID` int NOT NULL,
  `User_Name` varchar(100) DEFAULT NULL,
  `User_Mobile` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`User_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'PayrollAdmin','9999988888'),(2,'HRManager','8888877777');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  `password` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','admin@example.com','1234567890','Administrator','1234');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `vw_deductions`
--

DROP TABLE IF EXISTS `vw_deductions`;
/*!50001 DROP VIEW IF EXISTS `vw_deductions`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_deductions` AS SELECT 
 1 AS `Deduction_ID`,
 1 AS `Employee_Name`,
 1 AS `Amount`,
 1 AS `Reason`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_employee_bank`
--

DROP TABLE IF EXISTS `vw_employee_bank`;
/*!50001 DROP VIEW IF EXISTS `vw_employee_bank`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_employee_bank` AS SELECT 
 1 AS `Employee_Name`,
 1 AS `Account_No`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_employee_bonuses`
--

DROP TABLE IF EXISTS `vw_employee_bonuses`;
/*!50001 DROP VIEW IF EXISTS `vw_employee_bonuses`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_employee_bonuses` AS SELECT 
 1 AS `Bonus_ID`,
 1 AS `Employee_Name`,
 1 AS `Amount`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_employee_profile`
--

DROP TABLE IF EXISTS `vw_employee_profile`;
/*!50001 DROP VIEW IF EXISTS `vw_employee_profile`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_employee_profile` AS SELECT 
 1 AS `Employee_ID`,
 1 AS `Employee_Name`,
 1 AS `Employee_Phone`,
 1 AS `Department_Name`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_payment_log`
--

DROP TABLE IF EXISTS `vw_payment_log`;
/*!50001 DROP VIEW IF EXISTS `vw_payment_log`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_payment_log` AS SELECT 
 1 AS `Payment_ID`,
 1 AS `Transaction_ID`,
 1 AS `Payment_Mode`,
 1 AS `Employee_Name`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_payroll_summary`
--

DROP TABLE IF EXISTS `vw_payroll_summary`;
/*!50001 DROP VIEW IF EXISTS `vw_payroll_summary`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_payroll_summary` AS SELECT 
 1 AS `Employee_ID`,
 1 AS `Employee_Name`,
 1 AS `Salary`,
 1 AS `Bonus`,
 1 AS `Deduction`,
 1 AS `Net_Pay`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_salary_summary`
--

DROP TABLE IF EXISTS `vw_salary_summary`;
/*!50001 DROP VIEW IF EXISTS `vw_salary_summary`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_salary_summary` AS SELECT 
 1 AS `Employee_ID`,
 1 AS `Employee_Name`,
 1 AS `Salary_Final_Amount`,
 1 AS `Salary_Desc`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_shift_allocation`
--

DROP TABLE IF EXISTS `vw_shift_allocation`;
/*!50001 DROP VIEW IF EXISTS `vw_shift_allocation`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_shift_allocation` AS SELECT 
 1 AS `Shift_ID`,
 1 AS `Employee_Name`,
 1 AS `Shift_Type`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_user_login_history`
--

DROP TABLE IF EXISTS `vw_user_login_history`;
/*!50001 DROP VIEW IF EXISTS `vw_user_login_history`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_user_login_history` AS SELECT 
 1 AS `User_Name`,
 1 AS `Login_History`*/;
SET character_set_client = @saved_cs_client;

--
-- Dumping events for database 'dbmsfinal'
--

--
-- Dumping routines for database 'dbmsfinal'
--
/*!50003 DROP PROCEDURE IF EXISTS `Generate_Attendance_Summary` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Generate_Attendance_Summary`()
BEGIN
  DECLARE done INT DEFAULT FALSE;
  DECLARE emp_id INT;
  DECLARE present_days INT;

  DECLARE cur CURSOR FOR SELECT DISTINCT Employee_ID FROM Attendance;
  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

  OPEN cur;
  read_loop: LOOP
    FETCH cur INTO emp_id;
    IF done THEN LEAVE read_loop; END IF;

    SELECT COUNT(*) INTO present_days FROM Attendance WHERE Employee_ID = emp_id;

    INSERT INTO Attendance_Summary (Employee_ID, Total_Days_Present, Summary_Date)
    VALUES (emp_id, present_days, NOW());
  END LOOP;
  CLOSE cur;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Generate_Leave_Summary` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Generate_Leave_Summary`()
BEGIN
  DECLARE done INT DEFAULT FALSE;
  DECLARE emp_id INT;
  DECLARE leave_type VARCHAR(50);
  DECLARE leave_count INT;

  DECLARE cur CURSOR FOR 
    SELECT Employee_ID, Leave_Type FROM Leave_Details GROUP BY Employee_ID, Leave_Type;

  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

  OPEN cur;
  read_loop: LOOP
    FETCH cur INTO emp_id, leave_type;
    IF done THEN LEAVE read_loop; END IF;

    SELECT COUNT(*) INTO leave_count FROM Leave_Details 
    WHERE Employee_ID = emp_id AND Leave_Type = leave_type;

    INSERT INTO Leave_Summary (Employee_ID, Leave_Type, Leave_Count, Summary_Date)
    VALUES (emp_id, leave_type, leave_count, NOW());
  END LOOP;
  CLOSE cur;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Generate_Salary_Report` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Generate_Salary_Report`()
BEGIN
  DECLARE done INT DEFAULT FALSE;
  DECLARE emp_id INT;
  DECLARE base_salary, bonus_sum, deduction_sum, final_salary DECIMAL(10,2);

  DECLARE cur CURSOR FOR SELECT Salary_employeeID, Salary_Final_Amount FROM Salary;
  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

  OPEN cur;
  read_loop: LOOP
    FETCH cur INTO emp_id, base_salary;
    IF done THEN LEAVE read_loop; END IF;

    SELECT IFNULL(SUM(Amount), 0) INTO bonus_sum FROM Bonus WHERE Employee_ID = emp_id;
    SELECT IFNULL(SUM(Amount), 0) INTO deduction_sum FROM Deductions WHERE Deduction_ID = emp_id;

    SET final_salary = base_salary + bonus_sum - deduction_sum;

    INSERT INTO Salary_Report (Employee_ID, Base_Salary, Total_Bonus, Total_Deductions, Final_Salary, Report_Date)
    VALUES (emp_id, base_salary, bonus_sum, deduction_sum, final_salary, NOW());
  END LOOP;
  CLOSE cur;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Generate_Tax_Report` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Generate_Tax_Report`()
BEGIN
  DECLARE done INT DEFAULT FALSE;
  DECLARE emp_id INT;
  DECLARE base_salary, tax_amt DECIMAL(10,2);
  DECLARE tax_pct DECIMAL(5,2);

  DECLARE cur CURSOR FOR SELECT Salary_employeeID, Salary_Final_Amount FROM Salary;
  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

  -- Assuming a flat tax from Tax table (only one record)
  SELECT Tax_Percentage INTO tax_pct FROM Tax LIMIT 1;

  OPEN cur;
  read_loop: LOOP
    FETCH cur INTO emp_id, base_salary;
    IF done THEN LEAVE read_loop; END IF;

    SET tax_amt = base_salary * (tax_pct / 100);

    INSERT INTO Tax_Summary (Employee_ID, Base_Salary, Tax_Percentage, Tax_Amount, Report_Date)
    VALUES (emp_id, base_salary, tax_pct, tax_amt, NOW());
  END LOOP;
  CLOSE cur;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Log_All_Bonuses` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Log_All_Bonuses`()
BEGIN
  DECLARE done INT DEFAULT FALSE;
  DECLARE emp_id INT;
  DECLARE amount DECIMAL(10,2);

  DECLARE cur CURSOR FOR SELECT Employee_ID, Amount FROM Bonus;
  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

  OPEN cur;
  read_loop: LOOP
    FETCH cur INTO emp_id, amount;
    IF done THEN LEAVE read_loop; END IF;

    INSERT INTO Bonus_Log (Employee_ID, Bonus_Amount, Bonus_Date)
    VALUES (emp_id, amount, NOW());
  END LOOP;
  CLOSE cur;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `bank_info_view`
--

/*!50001 DROP VIEW IF EXISTS `bank_info_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `bank_info_view` AS select `e`.`Employee_ID` AS `Employee_ID`,`e`.`Employee_Name` AS `Employee_Name`,`b`.`Account_No` AS `Account_No` from (`bank_details` `b` join `employees` `e` on((`b`.`Employee_ID` = `e`.`Employee_ID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `payroll_dashboard`
--

/*!50001 DROP VIEW IF EXISTS `payroll_dashboard`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `payroll_dashboard` AS select `e`.`Employee_ID` AS `Employee_ID`,`e`.`Employee_Name` AS `Employee_Name`,`s`.`Salary_Final_Amount` AS `Salary_Base_Amount`,coalesce(`b`.`Amount`,0) AS `Bonus_Amount`,coalesce(`d`.`Amount`,0) AS `Deduction_Amount`,`sr`.`Final_Salary` AS `Final_Salary`,`pr`.`Generated_On` AS `Generated_On` from (((((`payroll_report` `pr` join `employees` `e` on((`pr`.`Employee_ID` = `e`.`Employee_ID`))) join `salary` `s` on((`pr`.`Employee_ID` = `s`.`Salary_employeeID`))) left join `bonus` `b` on((`pr`.`Bonus_ID` = `b`.`Bonus_ID`))) left join `deductions` `d` on((`pr`.`Deduction_ID` = `d`.`Deduction_ID`))) left join `salary_report` `sr` on((`pr`.`Employee_ID` = `sr`.`Employee_ID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `shift_schedule_view`
--

/*!50001 DROP VIEW IF EXISTS `shift_schedule_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `shift_schedule_view` AS select `e`.`Employee_ID` AS `Employee_ID`,`e`.`Employee_Name` AS `Employee_Name`,`s`.`Shift_Type` AS `Shift_Type` from (`shift` `s` join `employees` `e` on((`s`.`Employee_ID` = `e`.`Employee_ID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_deductions`
--

/*!50001 DROP VIEW IF EXISTS `vw_deductions`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_deductions` AS select `d`.`Deduction_ID` AS `Deduction_ID`,`e`.`Employee_Name` AS `Employee_Name`,`d`.`Amount` AS `Amount`,`d`.`Reason` AS `Reason` from (`deductions` `d` join `employees` `e` on((`e`.`Employee_ID` = `d`.`Deduction_ID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_employee_bank`
--

/*!50001 DROP VIEW IF EXISTS `vw_employee_bank`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_employee_bank` AS select `e`.`Employee_Name` AS `Employee_Name`,`b`.`Account_No` AS `Account_No` from (`employees` `e` join `bank_details` `b` on((`e`.`Employee_ID` = `b`.`Employee_ID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_employee_bonuses`
--

/*!50001 DROP VIEW IF EXISTS `vw_employee_bonuses`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_employee_bonuses` AS select `b`.`Bonus_ID` AS `Bonus_ID`,`e`.`Employee_Name` AS `Employee_Name`,`b`.`Amount` AS `Amount` from (`bonus` `b` join `employees` `e` on((`e`.`Employee_ID` = `b`.`Employee_ID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_employee_profile`
--

/*!50001 DROP VIEW IF EXISTS `vw_employee_profile`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_employee_profile` AS select `e`.`Employee_ID` AS `Employee_ID`,`e`.`Employee_Name` AS `Employee_Name`,`e`.`Employee_Phone` AS `Employee_Phone`,`d`.`Department_Name` AS `Department_Name` from (`employees` `e` join `department` `d` on(((`e`.`Employee_ID` % 5) = `d`.`Department_ID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_payment_log`
--

/*!50001 DROP VIEW IF EXISTS `vw_payment_log`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_payment_log` AS select `pay`.`Payment_ID` AS `Payment_ID`,`pay`.`Transaction_ID` AS `Transaction_ID`,`pay`.`Payment_Mode` AS `Payment_Mode`,`e`.`Employee_Name` AS `Employee_Name` from (`payment` `pay` join `employees` `e` on((`pay`.`Payment_ID` = `e`.`Employee_ID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_payroll_summary`
--

/*!50001 DROP VIEW IF EXISTS `vw_payroll_summary`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_payroll_summary` AS select `e`.`Employee_ID` AS `Employee_ID`,`e`.`Employee_Name` AS `Employee_Name`,ifnull(`s`.`Salary_Final_Amount`,0) AS `Salary`,ifnull(`b`.`BonusTotal`,0) AS `Bonus`,ifnull(`d`.`DeductionTotal`,0) AS `Deduction`,((ifnull(`s`.`Salary_Final_Amount`,0) + ifnull(`b`.`BonusTotal`,0)) - ifnull(`d`.`DeductionTotal`,0)) AS `Net_Pay` from (((`employees` `e` left join `salary` `s` on((`e`.`Employee_ID` = `s`.`Salary_employeeID`))) left join (select `bonus`.`Employee_ID` AS `Employee_ID`,sum(`bonus`.`Amount`) AS `BonusTotal` from `bonus` group by `bonus`.`Employee_ID`) `b` on((`e`.`Employee_ID` = `b`.`Employee_ID`))) left join (select `deductions`.`Deduction_ID` AS `Employee_ID`,sum(`deductions`.`Amount`) AS `DeductionTotal` from `deductions` group by `deductions`.`Deduction_ID`) `d` on((`e`.`Employee_ID` = `d`.`Employee_ID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_salary_summary`
--

/*!50001 DROP VIEW IF EXISTS `vw_salary_summary`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_salary_summary` AS select `e`.`Employee_ID` AS `Employee_ID`,`e`.`Employee_Name` AS `Employee_Name`,`s`.`Salary_Final_Amount` AS `Salary_Final_Amount`,`s`.`Salary_Desc` AS `Salary_Desc` from (`employees` `e` join `salary` `s` on((`e`.`Employee_ID` = `s`.`Salary_employeeID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_shift_allocation`
--

/*!50001 DROP VIEW IF EXISTS `vw_shift_allocation`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_shift_allocation` AS select `s`.`Shift_ID` AS `Shift_ID`,`e`.`Employee_Name` AS `Employee_Name`,`s`.`Shift_Type` AS `Shift_Type` from (`shift` `s` join `employees` `e` on((`s`.`Employee_ID` = `e`.`Employee_ID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_user_login_history`
--

/*!50001 DROP VIEW IF EXISTS `vw_user_login_history`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_user_login_history` AS select `u`.`User_Name` AS `User_Name`,`l`.`Login_History` AS `Login_History` from (`user` `u` join `login` `l` on((`u`.`User_ID` = `l`.`User_ID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-07  0:47:34
