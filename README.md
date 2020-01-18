# UndeFHIR

make postgres-up
make repl 


# Design WIP


## Dictionay

A `dictionary` is a set of values that can be used both for building transformation templates and also for building queries. A dictionary can be loaded from files, or using pre-prepared dictionaries, or through the result of a query to the database.


Example:
```yaml undefhir.yaml
dictionary:
- name: color
  file: ./dict/colors
- name: name
  build-in: us-names 
- name: range 
  query: "select * from generate_series(1,10)" 

```

undefhir debug -d filtered-numbers
