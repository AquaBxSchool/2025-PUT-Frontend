ALTER TABLE `user` RENAME COLUMN "name" TO "firstname";--> statement-breakpoint
ALTER TABLE `user` ADD `lastname` text NOT NULL;