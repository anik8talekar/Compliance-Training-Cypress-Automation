Feature: DELETE Training Question

     Scenario: Verify Valid Status Code
        Given I am authenticated user
        When I make a POST request with url: "apiBaseUrl" , path: "pathTrainingQuestion", requestFile: "TrainingQuestion/trainingQuestionPostRequest.json"
        And I save response of request in "TrainingQuestion/trainingQuestionPostResponse.json" file
        Then I make DELETE Request with url: "apiBaseUrl" , path: "pathTrainingQuestion", requestFile: "TrainingQuestion/trainingQuestionPostResponse.json"
        # And I save response of request in "Training/trainingPostResponse.json" file
        And  I should receive response with status code 204

    # Scenario: Verify Response Body
    # Given I am authenticated user
    # When I make DELETE Request with url: "apiBaseUrl" , path: "pathTraining", access_token: ""
    # Then I validate the response using data from "trainingAPIFixtures" and file "training"

    Scenario Outline: Verify Response Header
        Given I am authenticated user
        When I make a POST request with url: "apiBaseUrl" , path: "pathTrainingQuestion", requestFile: "TrainingQuestion/trainingQuestionPostRequest.json"
        And I save response of request in "TrainingQuestion/trainingQuestionPostResponse.json" file
        Then I make DELETE Request with url: "apiBaseUrl" , path: "pathTrainingQuestion", requestFile: "TrainingQuestion/trainingQuestionPostResponse.json"
        Then I should receive response headers with property "<property>" and value "<value>"

        Examples:
            | property         | value                           |
            | request-context  | appId=cid-v1:f4bd6513-344c-4f6b-aeda-e20d9b2ca7bc |

    Scenario: Verify Response Time
        Given I am authenticated user
        When I make a POST request with url: "apiBaseUrl" , path: "pathTrainingQuestion", requestFile: "TrainingQuestion/trainingQuestionPostRequest.json"
        And I save response of request in "TrainingQuestion/trainingQuestionPostResponse.json" file
        Then I make DELETE Request with url: "apiBaseUrl" , path: "pathTrainingQuestion", requestFile: "TrainingQuestion/trainingQuestionPostResponse.json"
        Then I should receive response within 1000 milliseconds

    Scenario: Verify Invalid Status Code
        Given I am authenticated user
        Then I make DELETE Request with url: "apiBaseUrl" , path: "pathTrainingQuestion", requestFile: "TrainingQuestion/trainingQuestionPostResponse.json"
        Then I should receive response with status code 404