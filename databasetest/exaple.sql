BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "inventory" (
	"id"	INTEGER UNIQUE,
	"name"	TEXT,
	"count"	INTEGER,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "customers" (
	"id"	INTEGER NOT NULL UNIQUE,
	"name"	TEXT,
	"order_id"	INTEGER
);
CREATE TABLE IF NOT EXISTS "order" (
	"order_id"	INTEGER UNIQUE,
	"name"	TEXT,
	"description"	TEXT,
	PRIMARY KEY("order_id")
);
INSERT INTO "inventory" VALUES (100,'Cheese',14);
INSERT INTO "inventory" VALUES (101,'Bread',10);
INSERT INTO "inventory" VALUES (102,'Patty',0);
INSERT INTO "customers" VALUES (123456,'Hans',101);
INSERT INTO "customers" VALUES (123457,'Mark',101);
INSERT INTO "customers" VALUES (123458,'Max',102);
INSERT INTO "order" VALUES (100,'Burger yellow','Burger with extra cheese');
INSERT INTO "order" VALUES (101,'Burger normal','average Burger...');
INSERT INTO "order" VALUES (102,'Burger unhealthy','3x patty');
COMMIT;
