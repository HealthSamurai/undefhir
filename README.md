# UndeFHIR


# Design WIP

```edn

{:dict {:colors  "./colors.txt"
          :animals "./animals.txt"}

   :templates {:$rnd-humanName [{:given ["$rand-nth dict.colors"]
                                 :family "$rand-nth dict.animals"}]}

   :onon {:Patient {:name      :$rnd-HumanName
                    :telecom   :$rnd-ContactPoint
                    :birthDate :$rnd-birthDate}
          :Practitioner {:name :$rnd-HumanName
                         :qualification :$rnd-qualification}}}
```
