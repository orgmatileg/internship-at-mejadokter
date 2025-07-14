-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 03 Jul 2025 pada 04.25
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_naNPM`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `buyers`
--

CREATE TABLE `buyers` (
  `id_buyers` int(11) NOT NULL,
  `house_id` int(11) NOT NULL,
  `nameB` text NOT NULL,
  `contact` text NOT NULL,
  `location` text NOT NULL,
  `Message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_swedish_ci;

--
-- Dumping data untuk tabel `buyers`
--

INSERT INTO `buyers` (`id_buyers`, `house_id`, `nameB`, `contact`, `location`, `Message`, `created_at`) VALUES
(1, 1, 'john', '09707039', 'bogor', 'tertarik', '2025-07-01 23:06:18'),
(2, 1, 'Farrel Syahputra', '081234567890', 'Cileungsi', 'Saya tertarik dengan rumah ini, mohon info lebih lanjut.', '2025-07-01 23:16:24'),
(3, 1, 'Indah Permata', '089876543210', 'Bekasi', 'Boleh saya lihat langsung rumahnya?', '2025-07-01 23:16:24'),
(4, 1, 'Dewi Anggraini', '082233445566', 'Bogor', 'Berapa harga fix rumah ini?', '2025-07-01 23:16:24');

-- --------------------------------------------------------

--
-- Struktur dari tabel `categories`
--

CREATE TABLE `categories` (
  `id_category` int(11) NOT NULL,
  `nameCat` text NOT NULL,
  `detail` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_swedish_ci;

--
-- Dumping data untuk tabel `categories`
--

INSERT INTO `categories` (`id_category`, `nameCat`, `detail`, `created_at`) VALUES
(1, 'modern', 'a houses with modern design', '2025-07-01 02:08:59'),
(2, 'tradisional', 'rumah ala ala pedesaan', '2025-07-01 04:12:51'),
(18, 'purba', 'rumah gua ala zaman mezosoikum', '2025-07-02 00:47:17');

-- --------------------------------------------------------

--
-- Struktur dari tabel `house`
--

CREATE TABLE `house` (
  `id_house` int(11) NOT NULL,
  `name` text NOT NULL,
  `address` text NOT NULL,
  `Price` text NOT NULL,
  `bed` int(11) NOT NULL,
  `bath` int(11) NOT NULL,
  `sqft` text NOT NULL,
  `picture` text NOT NULL,
  `category_id` int(11) NOT NULL,
  `seller` text NOT NULL,
  `contact` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_swedish_ci;

--
-- Dumping data untuk tabel `house`
--

INSERT INTO `house` (`id_house`, `name`, `address`, `Price`, `bed`, `bath`, `sqft`, `picture`, `category_id`, `seller`, `contact`, `created_at`) VALUES
(1, 'rumah perum parama', 'perumahan parama', '100000000', 2, 1, '1280', './assets/gambar.jpeg', 1, 'Farrel', '970787798', '2025-07-01 05:17:29'),
(2, 'Rumah Sakura Indah', 'Jl. Sakura No.5', '85000000', 3, 2, '1100', 'nothing', 2, 'Alya', '081234567890', '2025-07-01 05:08:16'),
(3, 'Villa Anggrek', 'Cluster Anggrek, Bogor', '150000000', 4, 3, '1800', 'nothing', 1, 'Rehan', '089876543210', '2025-07-01 05:08:16'),
(4, 'Rumah Minimalis', 'Jl. Melati Raya No.9', '95000000', 2, 1, '1000', 'nothing', 1, 'Dina', '082345678901', '2025-07-01 05:08:16'),
(5, 'Rumah Modern', 'Komplek Dago Asri', '200000000', 5, 3, '2100', 'nothing', 2, 'Budi', '085555555555', '2025-07-01 05:08:16'),
(6, 'Rumah Subsidi', 'Cileungsi Indah', '70000000', 2, 1, '900', 'nothing', 2, 'Fajar', '087777777777', '2025-07-01 05:08:16'),
(7, '', 'cec', 'ec1', 12, 2, '2ce', '', 1, 'cec', 'ecec', '2025-07-01 07:48:36'),
(8, '', 'ce', 'ce', 1, 2, '3', '', 2, '3d', 'cew', '2025-07-01 07:50:02'),
(9, 'ce', 'ce', 'ce', 1, 2, '3', '', 2, 'ceec', 'ce', '2025-07-01 07:50:46'),
(10, 'fe', 'fefc', 'fe', 1, 23, '323', '', 1, 'ewf', 'wd', '2025-07-01 08:24:12'),
(11, 'v', 'c', '21', 2321, 12, '21', '', 2, '32r', '3r32r', '2025-07-01 08:24:54');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `buyers`
--
ALTER TABLE `buyers`
  ADD PRIMARY KEY (`id_buyers`),
  ADD KEY `house_id` (`house_id`);

--
-- Indeks untuk tabel `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_category`);

--
-- Indeks untuk tabel `house`
--
ALTER TABLE `house`
  ADD PRIMARY KEY (`id_house`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `buyers`
--
ALTER TABLE `buyers`
  MODIFY `id_buyers` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `categories`
--
ALTER TABLE `categories`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT untuk tabel `house`
--
ALTER TABLE `house`
  MODIFY `id_house` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `buyers`
--
ALTER TABLE `buyers`
  ADD CONSTRAINT `buyers_ibfk_1` FOREIGN KEY (`house_id`) REFERENCES `house` (`id_house`);

--
-- Ketidakleluasaan untuk tabel `house`
--
ALTER TABLE `house`
  ADD CONSTRAINT `house_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id_category`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
