# bxb

bidirectional transformations approach

Transforms between FHIR DSTU 3 and FHIR STU 4 

| Resource      | # Tests | % Execute OK | % RoundTrip Ok | % R4 Valid | R4 Error Count |
|---------------|---------|--------------|----------------|------------|----------------|
| Appointment   | 3       | 100          | 100            | 100        | 0              |
| ClaimResponse | 4       | 100          | 0              | 100        | 0              |
|               |         |              |                |            |                |

*ClaimRespnonse roundtrip 0 because of breaking changes in ouncome codable concept in Code*
*Use process note filed as replacement*
