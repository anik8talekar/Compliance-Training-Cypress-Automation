Feature: POST Training

     Scenario: Verify Valid Status Code
        Given I am authenticated user
        When I make a POST request with url: "apiBaseUrl" , path: "pathTraining", requestFile: "Training/trainingPostRequest.json"
        And I save response of request in "Training/trainingPostResponse.json" file
        Then I should receive response with status code 201

    Scenario: Verify Response Body
    Given I am authenticated user
    When I make a POST request with url: "apiBaseUrl" , path: "pathTraining", requestFile: "Training/trainingPostRequest.json"
    Then I validate the response using data from "trainingAPIFixtures" and file "training"

    Scenario Outline: Verify Response Header
        Given I am authenticated user
        When I make a POST request with url: "apiBaseUrl" , path: "pathTraining", requestFile: "Training/trainingPostRequest.json"
        Then I should receive response headers with property "<property>" and value "<value>"

        Examples:
            | property         | value                           |
            | content-type     | application/json; charset=utf-8 |

    Scenario: Verify Response Time
        Given I am authenticated user
        When I make a POST request with url: "apiBaseUrl" , path: "pathTraining", requestFile: "Training/trainingPostRequest.json"
        Then I should receive response within 1000 milliseconds

    Scenario: Verify Invalid Status Code
        Given I am authenticated user
        When I make a POST request with url: "apiBaseUrl" , path: "PathTraining", requestFile: "Training/TrainingPostRequest.json"
        Then I should receive response with status code 404