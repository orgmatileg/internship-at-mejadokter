-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2025 at 03:30 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `house`
--

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE `kategori` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`id`, `nama`) VALUES
(1, 'Rumah Sederhana'),
(2, 'Rumah Mewah');

-- --------------------------------------------------------

--
-- Table structure for table `rumah`
--

CREATE TABLE `rumah` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `deskripsi` text DEFAULT NULL,
  `harga` decimal(15,2) NOT NULL,
  `gambar` varchar(255) DEFAULT NULL,
  `kategori_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rumah`
--

INSERT INTO `rumah` (`id`, `nama`, `deskripsi`, `harga`, `gambar`, `kategori_id`) VALUES
(5, 'Serenity House', 'Rumah mewah bergaya classic', 837000000.00, '1751719509110-534853867.jpeg', 2),
(6, 'The Grand Crest', 'Rumah super mewah', 1250000000.00, '1751719877010-446031413.jpeg', 2),
(7, 'Luxe Sanctuary', 'Rumah mewah dengan desain minimalis', 740000000.00, '1751720379763-753004459.jpeg', 2);

-- --------------------------------------------------------

--
-- Table structure for table `submission`
--

CREATE TABLE `submission` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `no_hp` varchar(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `rumah_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `submission`
--

INSERT INTO `submission` (`id`, `nama`, `no_hp`, `email`, `rumah_id`) VALUES
(3, 'Eji', '081385331434', 'eji123@gmail.com', 7);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rumah`
--
ALTER TABLE `rumah`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kategori_id` (`kategori_id`);

--
-- Indexes for table `submission`
--
ALTER TABLE `submission`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rumah_id` (`rumah_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `rumah`
--
ALTER TABLE `rumah`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `submission`
--
ALTER TABLE `submission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `rumah`
--
ALTER TABLE `rumah`
  ADD CONSTRAINT `rumah_ibfk_1` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`);

--
-- Constraints for table `submission`
--
ALTER TABLE `submission`
  ADD CONSTRAINT `submission_ibfk_1` FOREIGN KEY (`rumah_id`) REFERENCES `rumah` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
