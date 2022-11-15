-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 15 Nov 2022 pada 08.07
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project101_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `prices`
--

CREATE TABLE `prices` (
  `id` int(11) NOT NULL,
  `min_price` bigint(20) DEFAULT NULL,
  `max_price` bigint(20) DEFAULT NULL,
  `percentage` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `prices`
--

INSERT INTO `prices` (`id`, `min_price`, `max_price`, `percentage`, `createdAt`, `updatedAt`) VALUES
(1, 1000000, 5000000, 10, '2022-11-11 06:10:05', '2022-11-11 06:10:05'),
(2, 5000001, 10000000, 12, '2022-11-11 06:24:45', '2022-11-11 06:24:45'),
(3, 10000001, 20000000, 14, '2022-11-11 06:25:28', '2022-11-11 06:25:28'),
(4, 20000001, 100000000, 18, '2022-11-11 06:27:23', '2022-11-11 06:27:23'),
(6, 12345, 56789, 11, '2022-11-12 12:37:11', '2022-11-12 12:40:55');

-- --------------------------------------------------------

--
-- Struktur dari tabel `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `project_name` varchar(255) DEFAULT NULL,
  `deal_price` bigint(20) DEFAULT NULL,
  `fee` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `worker` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `projects`
--

INSERT INTO `projects` (`id`, `project_name`, `deal_price`, `fee`, `status`, `duration`, `worker`, `createdAt`, `updatedAt`) VALUES
(1, 'Website MBKM IPI Garut', 25000000, 18, 'On Progress', 5, 5, '2022-11-14 11:58:56', '2022-11-14 12:16:25');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `password`, `role`, `address`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'Ryhman', 'ry00hman', 'ry00hman@example.com', '$2b$10$38YfRg4EkMZ1L0yQuvA6T.o7RvUGhHB17LYva1ZMb/EWY3T7PBVyu', 'Admin', 'Bandung', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJSeWhtYW4iLCJlbWFpbCI6InJ5MDBobWFuQGV4YW1wbGUuY29tIiwidXNlcm5hbWUiOiJyeTAwaG1hbiIsInJvbGUiOiJBZG1pbiIsImFkZHJlc3MiOiJCYW5kdW5nIiwiaWF0IjoxNjY4NDI3MDY1LCJleHAiOjE2Njg0MzQyNjV9.v0jbgJtvyEma2fCi6bh96IQKW_-FB-iHc8KXoyES89g', '2022-11-02 19:08:18', '2022-11-14 11:57:45'),
(2, 'test', 'test', 'test@test.com', '$2b$10$fDocsREJWiFLnE3S2Zh5.uClblrhuuigMTxbub4PoiZxtDQmCh8DC', 'admin', 'Zimbabwe', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsIm5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwidXNlcm5hbWUiOiJ0ZXN0Iiwicm9sZSI6ImFkbWluIiwiYWRkcmVzcyI6IlppbWJhYndlIiwiaWF0IjoxNjY3ODc5OTM5LCJleHAiOjE2Njc4ODM1Mzl9.BCBr0O4coOxgIl24mpD3cPYHQ4feztt4o6QzYVzKeLI', '2022-11-02 20:26:57', '2022-11-08 03:58:59'),
(3, 'Ujang Kusno', 'UJ0010', 'uk@example.com', '$2b$10$VUwowNybUdxCq7/LFstHtuvWVFg3ZGJUFDLecBvJC79Sg5xfQrjve', 'Admin', 'Majalaya', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsIm5hbWUiOiJVamFuZyBLdXNubyIsImVtYWlsIjoidWtAZXhhbXBsZS5jb20iLCJ1c2VybmFtZSI6IlVKMDAxMCIsInJvbGUiOiJBZG1pbiIsImFkZHJlc3MiOiJNYWphbGF5YSIsImlhdCI6MTY2NzQ2MTQ5NSwiZXhwIjoxNjY3NDY1MDk1fQ.Opf7CjTdJtK-R6lVFu8qEBk7R4aDxJK-dH5HP9s5fmM', '2022-11-03 07:33:05', '2022-11-03 07:44:55'),
(5, 'Admin Test2', 'test2', 'test2@example.com', '$2b$10$gG0O.tbD2wk/2VNUWKrYjOw6S6r/zn42X.aDWF5rZeW.iIZq69TR6', 'Admin', 'Testing, Testing', NULL, '2022-11-03 07:50:33', '2022-11-12 09:15:39'),
(9, 'Alberto Giribuola', 'alberto123', 'alberto123@gmail.com', '$2b$10$I4EztlFTOqA81yVq2ZzF3uSGDMKljVG1lblgJZwUjFhaefHnLpInC', 'admin', 'Italia', NULL, '2022-11-11 00:34:15', '2022-11-11 00:34:15'),
(11, 'Hendriyanto', 'hendri111', 'hendri111@gmail.com', '$2b$10$h5UGo3m7iwLXhonL1TvvL.QzYXbituzU5nJq.fUaqtpam7IeRxbzW', 'Admin', 'Jombang', NULL, '2022-11-11 03:32:07', '2022-11-11 03:32:07'),
(13, 'Ranti Aria Sondari', 'ranti28', 'rantiariasondari@gmail.com', '$2b$10$bWmum3unGzKifTascj/9l.xoKmGI/.dXoAZBklYuF.U3ejM/Mo3f6', 'Admin', 'Cisurupan, Garut, Jawa Barat', NULL, '2022-11-11 04:05:38', '2022-11-12 09:16:31'),
(14, 'Santiago Delarosa Aguero', 'santiago101', 'santidela101@gmail.com', '$2b$10$xK0T5uIm6t/0TxEwHi49FutPWuBelHHqk/ckaVVk8/m.5bS2b/U2i', 'Admin', 'Karawang, Jawa Barat', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0LCJuYW1lIjoiU2FudGlhZ28gRGVsYXJvc2EgQWd1ZXJvIiwiZW1haWwiOiJzYW50aWRlbGExMDFAZ21haWwuY29tIiwidXNlcm5hbWUiOiJzYW50aWFnbzEwMSIsInJvbGUiOiJBZG1pbiIsImFkZHJlc3MiOiJLYXJhd2FuZywgSmF3YSBCYXJhdCIsImlhdCI6MTY2ODQxMzkyNSwiZXhwIjoxNjY4NDIxMTI1fQ.FI3d1bBYjJ6_8XG78wRp7kHqmO0mrZp6jaePD8nyxRE', '2022-11-12 08:45:36', '2022-11-14 08:18:45');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `prices`
--
ALTER TABLE `prices`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `prices`
--
ALTER TABLE `prices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
