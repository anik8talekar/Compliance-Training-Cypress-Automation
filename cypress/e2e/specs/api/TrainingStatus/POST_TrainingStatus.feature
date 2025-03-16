Feature: POST Training Status

    Scenario: Verify Valid Status Code
        Given I am authenticated user
        When I make a POST request with url: "apiBaseUrl" , path: "pathTrainingStatus", requestFile: "TrainingStatus/trainingStatusPostRequest.json"
        And I save response of request in "TrainingStatus/trainingStatusPostResponse.json" file
        Then I should receive response with status code 201

       
    # this Scenario Still has some pending work
     # Scenario: Verify Response Body
    # Given I am authenticated user
    # When I make a GET request with url: "apiBaseUrl", path: "pathTrainingType", query: ""
    # Then I validate the response using data from "trainingTypeAPIFixtures" and file "trainingType"

    Scenario Outline: Verify Response Header
        Given I am authenticated user
        When I make a POST request with url: "apiBaseUrl" , path: "pathTrainingStatus", requestFile: "TrainingStatus/trainingStatusPostRequest.json"
        Then I should receive response headers with property "<property>" and value "<value>"

        Examples:
            | property         | value                           |
            | content-type     | application/json; charset=utf-8 |
           #| content-encoding | gzip                            |

    Scenario: Verify Response Time
        Given I am authenticated user
        When I make a POST request with url: "apiBaseUrl" , path: "pathTrainingStatus", requestFile: "TrainingStatus/trainingStatusPostRequest.json"
        Then I should receive response within 1000 milliseconds

    Scenario: Verify Invalid Status Code
        Given I am authenticated user
        When I make a POST request with url: "apiBaseUrl" , path: "pathtrainingStatus", requestFile: "TrainingStatus/trainingStatusPostRequest.json"
        Then I should receive response with status code 404

