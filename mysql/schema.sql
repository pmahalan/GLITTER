DROP DATABASE IF EXISTS `glitter_diary`;
CREATE DATABASE `glitter_diary`;
USE `glitter_diary`;

CREATE TABLE `notes` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`place` VARCHAR( 255) NOT NULL,
	`timeofyear` VARCHAR( 255 ) NOT NULL,
	`cuisine` VARCHAR( 255 ) NOT NULL,
	`thingstodo` Int(11) NOT NULL,
	`landmarks` Int(11) NOT NULL,
	PRIMARY KEY ( `id` )
)