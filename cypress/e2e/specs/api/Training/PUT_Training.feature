Feature: PUT Training API

 Scenario: Verify Valid Status Code
 Given I am authenticated user
 When I make a PUT request with url: "apiBaseUrl" , path: "pathTraining", requestFile: "Training/trainingPutRequest.json", readFile: "Training/trainingPostResponse.json"
 Then I save response of request in "Training/trainingPutResponse.json" file
 Then I should receive response with status code 200

    # This Scenario Still has some work pending
    # Scenario: Verify Response Body
    #     Given I am authenticated user
    #     When I make a GET request with url: "apiBaseUrl", path: "pathTraining", query: "?page=1&pageSize=1"
    #     Then I validate the response using data from "trainingAPIFixtures" and file "training"

 Scenario Outline: Verify Response Header
 Given I am authenticated user
 When I make a PUT request with url: "apiBaseUrl" , path: "pathTraining", requestFile: "Training/trainingPutRequest.json", readFile: "Training/trainingPostResponse.json"
 Then I should receive response headers with property "<property>" and value "<value>"

 Examples:
 | property      | value                               |
 | content-type  | application/json; charset=utf-8 |
 

 Scenario: Verify Response Time
 Given I am authenticated user
 When I make a PUT request with url: "apiBaseUrl" , path: "pathTraining", requestFile: "Training/trainingPutRequest.json", readFile: "Training/trainingPostResponse.json"
 Then I should receive response within 1000 milliseconds

 Scenario: Verify Invalid Status Code
 Given I am authenticated user
 When I make a PUT request with url: "apiBaseUrl" , path: "pathtraining", requestFile: "Training/trainingPutRequest.json", readFile: "Training/trainingPostResponse.json"
 Then I should receive response with status code 404

