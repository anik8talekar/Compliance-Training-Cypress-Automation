Feature: GET Training Type

    Scenario: Verify Valid Status Code
        Given I am authenticated user
        When I make a GET request with url: "apiBaseUrl", path: "pathTrainingType", query: ""
        Then I should receive response with status code 200


     # this Scenario Still has some pending work
     # Scenario: Verify Response Body
    # Given I am authenticated user
    # When I make a GET request with url: "apiBaseUrl", path: "pathTrainingType", query: ""
    # Then I validate the response using data from "trainingTypeAPIFixtures" and file "trainingType"

    Scenario Outline: Verify Response Header
        Given I am authenticated user
        When I make a GET request with url: "apiBaseUrl", path: "pathTrainingType", query: ""
        Then I should receive response headers with property "<property>" and value "<value>"

        Examples:
            | property         | value                           |
            | content-type     | application/json; charset=utf-8 |
            | content-encoding | gzip                            |

    Scenario: Verify Response Time
        Given I am authenticated user
        When I make a GET request with url: "apiBaseUrl", path: "pathTrainingType", query: ""
        Then I should receive response within 1000 milliseconds

    Scenario: Verify Invalid Status Code
        Given I am authenticated user
        When I make a GET request with url: "apiBaseUrl", path: "pathtrainingType", query: ""
        Then I should receive response with status code 404