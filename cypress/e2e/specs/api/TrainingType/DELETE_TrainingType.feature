Feature: DELETE Training Type

    Scenario: Verify Valid Status Code
        Given I am authenticated user
        When I make a POST request with url: "apiBaseUrl" , path: "pathTrainingType", requestFile: "TrainingType/trainingTypePostRequest.json"
        And I save response of request in "TrainingType/trainingTypePostResponse.json" file
        Then I make DELETE Request with url: "apiBaseUrl" , path: "pathTrainingType", requestFile: "TrainingType/trainingTypePostResponse.json"
        And I should receive response with status code 204

       
    # this Scenario Still has some pending work
     # Scenario: Verify Response Body
    # Given I am authenticated user
    # When I make a GET request with url: "apiBaseUrl", path: "pathTrainingType", query: ""
    # Then I validate the response using data from "trainingTypeAPIFixtures" and file "trainingType"

    Scenario Outline: Verify Response Header
        Given I am authenticated user
        When I make a POST request with url: "apiBaseUrl" , path: "pathTrainingType", requestFile: "TrainingType/trainingTypePostRequest.json"
        And I save response of request in "TrainingType/trainingTypePostResponse.json" file
        Then I make DELETE Request with url: "apiBaseUrl" , path: "pathTrainingType", requestFile: "TrainingType/trainingTypePostResponse.json"
        Then I should receive response headers with property "<property>" and value "<value>"

        Examples:
            | property         | value                                             |
            | request-context  | appId=cid-v1:f4bd6513-344c-4f6b-aeda-e20d9b2ca7bc |
           #| content-encoding | gzip                            |

    Scenario: Verify Response Time
        Given I am authenticated user
        When I make a POST request with url: "apiBaseUrl" , path: "pathTrainingType", requestFile: "TrainingType/trainingTypePostRequest.json"
        And I save response of request in "TrainingType/trainingTypePostResponse.json" file
        Then I make DELETE Request with url: "apiBaseUrl" , path: "pathTrainingType", requestFile: "TrainingType/trainingTypePostResponse.json"
        Then I should receive response within 1000 milliseconds

    Scenario: Verify Invalid Status Code
        Given I am authenticated user
        When I make a POST request with url: "apiBaseUrl" , path: "pathtrainingStatus", requestFile: "TrainingStatus/trainingStatusPostRequest.json"
        Then I should receive response with status code 404

