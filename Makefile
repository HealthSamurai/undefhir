PGPORT = 5441
PGHOST = localhost
PGUSER = postgres
PGDATABASE = postgres
PGPASSWORD = postgres
PGIMAGE ?= aidbox/db:11.4.0-P1

.EXPORT_ALL_VARIABLES:
.PHONY: test build


repl:
	clj -A:test:nrepl

build:
	clj -A:build
	mv target/app-1.0.0-SNAPSHOT-standalone.jar app.jar

run-jar:
	java -jar app.jar

test:
	clj -A:test:runner

# Postgres
postgres-up:
	docker-compose up -d
postgres-down:
	docker-compose down
