Feature: GET Training Type by ID

    Scenario Outline: Verify Valid Status Code
        Given I am authenticated user
        When I make a GET request with url: "apiBaseUrl", path: "pathTrainingType", query: "<parameter>"
        Then I should receive response with status code 200

        Examples:
            | parameter |
            | /1        |
            | /3        |
            | /4        |
            | /5        |
  
    #This Scenario Still has some work pending
    # Scenario: Verify Response Body
    #     Given I am authenticated user
    #     When I make a GET request with url: "apiBaseUrl", path: "pathTrainingStatus", query: "/1"
    #     Then I validate the response using data from "trainingStatusbyIDApiFixtures" and file "trainingStatusbyID"

    Scenario Outline: Verify Response Header
        Given I am authenticated user
        When I make a GET request with url: "apiBaseUrl", path: "pathTrainingType", query: "/3"
        Then I should receive response headers with property "<property>" and value "<value>"

        Examples:
            | property         | value                           |
            | content-type     | application/json; charset=utf-8 |
            | content-encoding | gzip                            |

    Scenario: Verify Response Time
        Given I am authenticated user
        When I make a GET request with url: "apiBaseUrl", path: "pathTrainingType", query: "/3"
        Then I should receive response within 1000 milliseconds

    Scenario Outline: Verify with requesting invalid parameter
        Given I am authenticated user
        When I make a GET request with url: "apiBaseUrl", path: "pathTrainingType", query: "<parameter>"
        Then I should receive response with status code 400
        

        Examples:
            | parameter |
            | /test     |
            | /@#$%#    |

    
    Scenario Outline: Verify with requesting invalid resource
        Given I am authenticated user
        When I make a GET request with url: "apiBaseUrl", path: "pathTrainingType", query: "<parameter>"
        Then I should receive response with status code 404
        

        Examples:
            | parameter  |
            | /-1        |
            | /-100      |
            | /999999999 |
            


                 