Feature: POST Card

     Scenario: Verify Valid Status Code
        Given I am authenticated user
        When I make a POST request with url: "apiBaseUrl" , path: "pathCard", requestFile: "Card/cardPostRequest.json"
        And I save response of request in "Card/cardPostResponse.json" file
        Then I should receive response with status code 201

    Scenario: Verify Response Body
    Given I am authenticated user
    When I make a POST request with url: "apiBaseUrl" , path: "pathCard", requestFile: "Card/cardPostRequest.json"
    Then I validate the response using data from "trainingAPIFixtures" and file "training"

    Scenario Outline: Verify Response Header
        Given I am authenticated user
        When I make a POST request with url: "apiBaseUrl" , path: "pathCard", requestFile: "Card/cardPostRequest.json"
        Then I should receive response headers with property "<property>" and value "<value>"

        Examples:
            | property         | value                           |
            | content-type     | application/json; charset=utf-8 |

    Scenario: Verify Response Time
        Given I am authenticated user
        When I make a POST request with url: "apiBaseUrl" , path: "pathCard", requestFile: "Card/cardPostRequest.json"
        Then I should receive response within 1000 milliseconds

    Scenario: Verify Invalid Status Code
        Given I am authenticated user
        When I make a POST request with url: "apiBaseUrl" , path: "pathfalse", requestFile: "Card/cardPostRequest.json"
        Then I should receive response with status code 404