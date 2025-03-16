Feature: PUT Training Status

    Scenario: Verify Valid Status Code
        Given I am authenticated user
        When I make a PUT request with url: "apiBaseUrl" , path: "pathTrainingStatus", requestFile: "TrainingStatus/trainingStatusPUTRequest.json", readFile: "TrainingStatus/trainingStatusPostResponse.json"
        Then I save response of request in "TrainingStatus/trainingStatusPUTResponse.json" file
        Then I should receive response with status code 200
  
    # This Scenario Still has some work pending
    # Scenario: Verify Response Body
    #     Given I am authenticated user
    #     When I make a GET request with url: "apiBaseUrl", path: "pathTrainingStatus", query: "?page=1&pageSize=1"
    #     Then I validate the response using data from "trainingStatusAPIFixtures" and file "trainingStatus"

    Scenario Outline: Verify Response Header
        Given I am authenticated user
        When I make a PUT request with url: "apiBaseUrl" , path: "pathTrainingStatus", requestFile: "TrainingStatus/trainingStatusPUTRequest.json", readFile: "TrainingStatus/trainingStatusPostResponse.json"
        Then I should receive response headers with property "<property>" and value "<value>"

        Examples:
            | property         | value                           |
            | content-type     | application/json; charset=utf-8 |
            | content-encoding | gzip                            |

    Scenario: Verify Response Time
        Given I am authenticated user
        When I make a PUT request with url: "apiBaseUrl" , path: "pathTrainingStatus", requestFile: "TrainingStatus/trainingStatusPUTRequest.json", readFile: "TrainingStatus/trainingStatusPostResponse.json"
        Then I should receive response within 1000 milliseconds

    Scenario: Verify Invalid Status Code
        Given I am authenticated user
        When I make a PUT request with url: "apiBaseUrl" , path: "pathtrainingStatus", requestFile: "TrainingStatus/trainingStatusPUTRequest.json", readFile: "TrainingStatus/trainingStatusPostResponse.json"
        Then I should receive response with status code 404