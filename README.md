# UndeFHIR

What is it?


* declarative tests

* 1 - stage/demo (full anon)
* 2 - dev (anon / partial )
* 3 - x100
* 4 - user space configuration (i18n)


## Overview

What is it for?

## How does it work?

Database and application communication and data transformation

Example of `undefhir.yaml`
```yaml
skip:                         # list  of resources thats will be skipped from copy
- EpisodeOfCare
- Session 

skipHistory: true             # skip resources history or not (default true)

loadFhirTerminology: true     # Load pre buildin FHIR terminology

# User defined dictionaries
# can be refer to buildIn dicts
dictionary:
  - name: ruName
    file: "./dictionary/ruName.txt" 
  - name: ruFamily
    file: "./dictionary/ruFamily.txt" 
  - name: ruPatronymic
    file: "./dictionary/ruPatronymic.txt" 

# User defined fns
# This functions can be used in templates 
fns:
  ruHumanName:
    $body:
      - given:
          - $ randNth(dictionary.ruName)
          - $ randNth(dictionary.ruPatronymic)
        family: $ randNth(dictionary.fuFamily)
      
  practitionerQualification:
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

### Dictionary

A `dictionary` is a set of values that can be used both for building transformation templates and for building queries. A dictionary can be loaded from files, or by using pre-prepared dictionaries, or through the result of a query to the database.

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

In this example we have defined 3 dictionaries.

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

For displaying entry of a dictionary we can use `debug` option
```sh
$ undefhir debug -d range
Load dictionaries:
[100%] [=======================================================================]

Debug dictionary:  numbers
Source:  {:name numbers, :query select * from generate_series(1,10)}
Result: 
(1 2 3 4 5 6 7 8 9 10)
```
### User-defined functions
User can define his own set of function, which can be used for template building. Those functions are stored under `fns` key of `undefhir.yaml`.

Example:
```yaml 
fns:
  test:
    $body:
      foo: "bar"
```

This function takes no arguments and returns a map with key `foo` and value `bar` 

You can use `debug` option to see result of this function
```sh
$ undefhir debug -f test
Load functions:
[100%] [=======================================================================]

Debug:  test
Input params: 
nil 

Result: 
{:foo bar}
```

You can use option `-o` in a case you want to display function output in `yaml` or `json` format
```sh
$ undefhir debug -f test -o json

{"foo":"bar"}
```

```sh
$ undefhir debug -f test -o yaml

{foo: bar}
```
In a case you want to create a function that takes one or several arguments see an example below

Example:
```yaml
  testWithArgs:
    $fn: ["a", "b"] 
    $body:
      a: "$ a"
      b: "$ b"
```


To debug functions with input arguments you need to specify them using `-i` option for each argument 
```sh
$ undefhir debug -f testWithArgs -o json -i "firstArg" -i "secondArg" 

{a: firstArgument, b: secondArgument}

```

```sh
$ undefhir debug -f testWithArgs -o json -i "firstArg" -i "secondArg" -o json 

{"a":"firstArg","b":"secondArg"}
```


## API reference 

:salt

:dictionary

:template

:skip




## CLI options

## Samples



```sh
clj -i src/undefhir/core.clj -m undefhir.core -f ./test/resources/undefhir.yaml debug -d numbers
```
