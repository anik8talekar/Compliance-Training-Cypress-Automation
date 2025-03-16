Feature: PUT Control Type API

 Scenario: Verify Valid Status Code
 Given I am authenticated user
 When I make a PUT request with url: "apiBaseUrl" , path: "pathControlType", requestFile: "ControlType/controlTypePutRequest.json", readFile: "ControlType/controlTypePostResponse.json"
 Then I save response of request in "ControlType/controlTypePutResponse.json" file
 Then I should receive response with status code 200

    # This Scenario Still has some work pending
    # Scenario: Verify Response Body
    #     Given I am authenticated user
    #     When I make a GET request with url: "apiBaseUrl", path: "pathTraining", query: "?page=1&pageSize=1"
    #     Then I validate the response using data from "trainingAPIFixtures" and file "training"

 Scenario Outline: Verify Response Header
 Given I am authenticated user
 When I make a PUT request with url: "apiBaseUrl" , path: "pathControlType", requestFile: "ControlType/controlTypePutRequest.json", readFile: "ControlType/controlTypePostResponse.json"
 Then I should receive response headers with property "<property>" and value "<value>"

 Examples:
 | property        | value                               |
 |  content-type   | application/json; charset=utf-8     |
 

 Scenario: Verify Response Time
 Given I am authenticated user
 When I make a PUT request with url: "apiBaseUrl" , path: "pathControlType", requestFile: "ControlType/controlTypePutRequest.json", readFile: "ControlType/controlTypePostResponse.json"
 Then I should receive response within 1000 milliseconds

 Scenario: Verify Invalid Status Code
 Given I am authenticated user
 When I make a PUT request with url: "apiBaseUrl" , path: "pathfalse", requestFile: "ControlType/controlTypePutRequest.json", readFile: "ControlType/controlTypePostResponse.json"
 Then I should receive response with status code 404

