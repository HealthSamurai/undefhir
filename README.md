# UndeFHIR

make postgres-up
make repl 


clj -i src/undefhir/core.clj -m undefhir.core -f ./test/resources/undefhir.yaml debug -d filtered-numbers -o json

# Design WIP

```edn

{:dictionary {:colors  "./colors.txt"
              :animals "./animals.txt"}

   :templates {:$rnd-humanName [{:given ["$rand-nth dict.colors"]
                                 :family "$rand-nth dict.animals"}]}

   :onon {:Patient {:name      :$rnd-HumanName
                    :telecom   :$rnd-ContactPoint
                    :birthDate :$rnd-birthDate}
          :Practitioner {:name :$rnd-HumanName
                         :qualification :$rnd-qualification}}}
```
