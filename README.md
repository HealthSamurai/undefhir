# UndeFHIR

What is it?

## Overview

What is it for?

## How its work

Database and application communication and data tranformation

Example of `undefhir.yaml`
```yaml
skip:                         # list  of resources thats will be skipped from copy
- EpisodeOfCare
- Session 

skipHistory: true             # skip resources history or not (default true)

loadFhirTerminology: true     # Load pre buildin FHIR terminology


# User defined fns
# This functions can be used in templates 

# User defined dictionaries
# can be refer to buildIn dicts
dictionary:
  - name: ruName
    file: "./dictionary/ruName.txt" 
  - name: ruFamily
    file: "./dictionary/ruFamily.txt" 
  - name: ruPatronymic
    file: "./dictionary/ruPatronymic.txt" 

fns:
  - name: ruHumanName
    desc: Создает массив русских имен
    $body:
      - given:
          - $ randNth(dictionary.ruName)
          - $ randNth(dictionary.ruPatronymic)
        family: $ randNth(dictionary.fuFamily)
      
  - name: practitionerQualification
    $body:
      - code: $ randCodeableConcept('http://terminology.hl7.org/CodeSystem/v2-0360|2.7')

copy:
  Practitioner:
    query: "select * from practitioner where ......."
    template:
      resource:
        name: $ fns.ruHumanName()
        birthDate: $ fns.fhriBirthDate()
        qualification: $ fns.practitionerQualification()

  Patient:
    template:
      resource: 
        name: $ fns.ruHumanName()
        qualification: $ fns.practitionerQualification()
        birthDate: $ fns.fhriBirthDate()

        telecom: $ fns.fhirContactPoint()
        gender: $ fns.fhirGender()
      

```

## Basic concepts

### Randomizer 

### Hasher 

### Template

### Dictionay

A `dictionary` is a set of values that can be used both for building transformation templates and also for building queries. A dictionary can be loaded from files, or using pre-prepared dictionaries, or through the result of a query to the database.

Example: `undefhir.yaml`
```yaml 
dictionary:
- name: color
  file: ./dict/colors
- name: name
  build-in: us-names 
- name: range 
  query: "select * from generate_series(1,10)" 

```

In this examle we are define 3 dictionaries.

Dictionary with name `color` will be loaded from raw file `./dict/colors`. This is plain text file with values on new line
Content of `./dict/colors`
```
Red
Green
Blue
```

Dictionary with name `name` will be loaded from pre defined dataset _(link to repository file)_
_list of availiable dicts_


Dictionary with name `range` will be loaded from sql query `select * from generate_series(1,10)` that return list of numbers from 1::10

For display entry of dictionary we can use `debug` option
```sh
$ undefhir debug -d range
Load dictionaries:
[100%] [=======================================================================]

Debug dictionary:  numbers
Source:  {:name numbers, :query select * from generate_series(1,10)}
Result: 
(1 2 3 4 5 6 7 8 9 10)
```


## API reference 

:salt

:dictionay

:template

:skip




## CLI options

## Samples



```sh
clj -i src/undefhir/core.clj -m undefhir.core -f ./test/resources/undefhir.yaml debug -d numbers
```
