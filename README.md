# UndeFHIR

What is it?

## Overview

What is it for?

## How its work

Database and application communication and data tranformation

## Basic concepts

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

## CLI options

## Samples
