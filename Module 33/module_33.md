## Module Introduction and What is an API (module_33.1)

- API means `Application Programming Interface`.
- API is a set of functions that can be called by other programs.
- API take request and return response. Like a waiter who is taking your request and returning your response.
- API takes data from server and returns data to the client.

## Intro to JSON, JSON Structure, parse, stringify (module_33.2)

- JSON is a data format.
- JSON means `JavaScript Object Notation`.
- `stringify` converts data or object into JSON.
- after converting data into JSON, it is stored in a string.
- all the object key and value are stored in double quotes.
- only number and boolean values are not stored in double quotes.
- `parse` converts JSON into data or object.

## JSON placeholder, GET data, display data on UI (module_33.3)

- JSON placeholder is a text field in which you can enter JSON data.
- [{JSON} Placeholder](https://jsonplaceholder.typicode.com/)

```
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
```

- `fetch` is a function that makes a request to the server.
- `response` is the response from the server.
- `json` is the response from the server in JSON format.
- `then` is a function that takes a function as an argument.
- `async` `await` is more likely similar to `fetch`.\*\*

## Load more data, more APIs, send data to function (module_33.4)

- when fetching data from the server, you can use `.then` to get the response.
- `.then` takes a function as an argument.
  > practice this doing what done by JM.

## Dynamically display loaded data on your website (module_33.5)

> practice this doing what done by JM.

## Load posts and display on the website with CSS (module_33.6)

> Practice create a title with body using JSON Placeholder posts and display it in website.

## GET, POST, PATCH, DELETE, CRUD, GET Vs POST (module_33.7)

- `GET` is a method that gets data from the server.
- `GET` means how the data is retrieved.
- when new data is received, it is stored in the database.

- `POST` is a method that sends data to the server.
- when new data is sent to the server, it is called `POST`.
- when we use `POST` we need to add a `method` in the fetch function. There should be a `body` and `headers` object in the fetch function.

```
fetch('https://jsonplaceholder.typicode.com/todos/1', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    userId: 1,
    title: 'New Post',
    completed: false
  })
})
  .then(response => response.json())
  .then(json => console.log(json))`
```

- `PATCH` is a method that updates data on the server.
- when you update or edit data on the server, it is called `PATCH`.

- `DELETE` is a method that deletes data on the server.
- when you delete data on the server, it is called `DELETE`.

- `CRUD` is a method that creates, reads, updates, and deletes data on the server.

- `PUT` when a data is already in the server it will replace the data and if the data is not in the server it will add the data in the server

## HTTP GET vs HTTP POST

|                             |                                                                     GET                                                                     |                                                                                                           POST |
| :-------------------------- | :-----------------------------------------------------------------------------------------------------------------------------------------: | -------------------------------------------------------------------------------------------------------------: |
| BACK button/Reload          |                                                                  Harmless                                                                   |                                                                                      Data will be re-submitted |
| Bookmarked                  |                                                              Can be bookmarked                                                              |                                                                                           Cannot be bookmarked |
| Cached                      |                                                                Can be cached                                                                |                                                                                                     Not cached |
| Encoding type               |                                                      application/x-www-form-urlencoded                                                      |               application/x-www-form-urlencoded or multipart/form-data. Use multipart encoding for binary data |
| History                     |                                                    Parameters remain in browser history                                                     |                                                                    Parameters are not saved in browser history |
| Restrictions on data length | Yes, when sending data, the GET method adds the data to the URL; and the length of a URL is limited (maximum URL length is 2048 characters) |                                                                                                No restrictions |
| Restrictions on data type   |                                                        Only ASCII characters allowed                                                        |                                                                   No restrictions. Binary data is also allowed |
| Visibility                  |                                                   Data is visible to everyone in the URL                                                    |                                                                               Data is not displayed in the URL |
| Security                    |                                  GET is less secure compared to POST because data sent is part of the URL                                   | POST is a little safer than GET because the parameters are not stored in browser history or in web server logs |

## Debug API, Network tab,Status code, headers, bad API (module_33.8)

- To debug API, you can use `Network` tab in Chrome Dev Tools.
- `Network` tab is a tab that shows all the requests and responses.
- `Status code` is the response code from the server.
  - Informational responses (100–199)
  - Successful responses (200–299)
  - Redirection messages (300–399)
  - Client error responses (400–499)
  - Server error responses (500–599)
    - 200 is the successful response.
    - 400 is the bad request.
    - 403 is the forbidden response.
    - 404 is the not found response.
    - 500 is the server error response.
    - 502 is the bad gateway response.
- `Headers` is the response headers from the server.
- In `Header` we can see the status code and the content type.

## Home Work

> taking photos from JSON Placeholder and display it on the website using the URL.
> Difference Between GET and POST
