-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 26, 2023 at 03:25 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `limodb`
--

-- --------------------------------------------------------

--
-- Table structure for table `moment`
--

CREATE TABLE `moment` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `moment` varchar(100) NOT NULL,
  `deskripsi` text NOT NULL,
  `time` varchar(100) NOT NULL,
  `feel` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `moment`
--

INSERT INTO `moment` (`id`, `userid`, `moment`, `deskripsi`, `time`, `feel`) VALUES
(1, 2, 'moemnt baru lagi', 'LOREM IPSUM DOLOR IS AMET, LIPSUM', '2023-10-31', 'hapy'),
(2, 3, 'Onboarding BTPN', 'Lorem ipsum dolor is amet, lipsuum', '2023-12-20', 'alhamdulillah'),
(4, 3, 'Happy New Year', 'LOREM IPSUM DOLOR IS AMET, LIPSUM', '2024-01-01T16:00:00.000Z', 'hapy');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`) VALUES
(5, 'padlimp', 'padli@gmail.com', '4162c311c80745a655467a8ede5420b2e9cc323e4c65e9c8b7392df3c590324a08c2d4bc36f1e4933b003c0dae861eb124614c971582e3ce946b6fae90fd8c2207480599852a7a8804f89fd1604e21c962d111669ec1556092b6b00b25f8f87200c55dbc5b5ee2c5'),
(6, 'padlimp2', 'padli@gmail.com', 'f64a3c69d15d1626502cac693288d01aaa7779ed6c1df58d14a94293b21538dd7d52494c505f129a3840722ddc2e1e9add117e4013b181d0f84b135eb445bdd77730a48cbcf8b57f9bb466fe7b0475ab57c830abfc2709271f7c697e043616b28fc15f61aa67f0be'),
(10, 'faezol', 'fmp@gmail.com', '2ab36e5be57d2f8f5f21352b7c9657a6bcbb474343b9530c841bf003955d2698cb253dfcb63410a1708245e0692abe027852a269eaeae43a410069d19878c1933a0367895973820df6cf4cb68f4ef30f6d638691ac6e498a62e7e7b30c96ce4b83e502a8f059072a2e');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `moment`
--
ALTER TABLE `moment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `moment`
--
ALTER TABLE `moment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
