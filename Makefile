.EXPORT_ALL_VARIABLES:
.PHONY: test build

repl:
	clj -A:test:nrepl

build:
	clj -A:build
	mv target/app-1.0.0-SNAPSHOT-standalone.jar app.jar

run-jar:
	java -jar app.jar -m app.core

test:
	clj -A:test:runner


