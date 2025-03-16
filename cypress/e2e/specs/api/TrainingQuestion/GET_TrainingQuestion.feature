Feature: GET Training Question

    Scenario: Verify Valid Status Code
        Given I am authenticated user
        When I make a GET request with url: "apiBaseUrl", path: "pathTrainingQuestion", query: "?page=1&pageSize=1&name=string"
        Then I should receive response with status code 200

    # Scenario: Verify Response Body
    # Given I am authenticated user
    # When I make a GET request with url: "apiBaseUrl", path: "pathControlType", query: "?page=1&pageSize=1"
    # Then I validate the response using data from "trainingAPIFixtures" and file "training"

    Scenario Outline: Verify Response Header
        Given I am authenticated user
        When I make a GET request with url: "apiBaseUrl", path: "pathTrainingQuestion", query: "?page=1&pageSize=1&name=string"
        Then I should receive response headers with property "<property>" and value "<value>"

        Examples:
            | property         | value                           |
            | content-type     | application/json; charset=utf-8 |
            | content-encoding | gzip                            |

    Scenario: Verify Response Time
        Given I am authenticated user
        When I make a GET request with url: "apiBaseUrl", path: "pathTrainingQuestion", query: "?page=1&pageSize=1&name=string"
        Then I should receive response within 1000 milliseconds

    Scenario: Verify Invalid Status Code
        Given I am authenticated user
        When I make a GET request with url: "apiBaseUrl", path: "pathTrainingQuestion", query: "?page=0&pageSize=0&name=string"
        Then I should receive response with status code 400