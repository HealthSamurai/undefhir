# UndeFHIR

make postgres-up
make repl 


clj -i src/undefhir/core.clj -m undefhir.core -f ./test/resources/undefhir.yaml debug -d filtered-numbers -o json

# Design WIP

```yaml
dictionary:
- name: color
  file: ./dict/colors
- name: name
  build-in: us-names 

```
