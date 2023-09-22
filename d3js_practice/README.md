Through this course we will develop a full linked view visualization that will allow our users to explore where in the world the top 20 airlines with most routes operate. In each week we will build a step towards this final solution. Therefore it is important that you keep your solutions for each step, as the solution for the current week will be the starter point to the next week.

Our dataset is a CSV file containing 23041 lines, where each line represents one airplane route. Each route contains information from the airport of origin, destination and airline. Bellow we have an example of a route.

Our goal is to use this dataset to answer questions like:
- What are the airlines with more routes, and how does the distribution looks like? Are there airlines with many more routes that others?
- Which regions of the world do these airlines cover?
- Does a given airline operate in a regional or intercontinental scale?

## Loading Data

d3.csv(dataUrl, callback)

or 

d3.csv(dataUrl)
    .then(callback)
    .catch(errorHandler) {
        do something
    }

or

d3.json(dataUrl)
    .then(callback)
    .catch(errorHandler)

<html>
<head>
</head>
<body>
    <div id="container"></div>
</body>
<script src="d3.js"></script>
<script>
    let container = d3.select("#container")
    d3.csv("data.csv").then(function (data) {
        write("Data is available")
    })
    write("Line after")
    function write(text) {
        container.append("div").text(text)
    }
</script>
</html>

--------------------------------------------

<html>
<head>
</head>
<body>
    <div id="container"></div>
</body>
<script src="d3.js"></script>
<script>
    let container = d3.select("#container")
    d3.csv("data.csv").then(function (data) {
        for (let client of data) {
            write(client.Name)
        }
    })
    
    function write(text) {
        container.append("div").text(text)
    }
</script>
</html>

## FIltering and sorting

<html>
<head>
</head>
<body>
    <div id="container"></div>
</body>
<script src="d3.js"></script>
<script>
    let container = d3.select("#container")
    d3.csv("data.csv").then(showData)

    function showData(clients) {
        for (let client of clients) {
            write(client.Name
            + ", "
            + client.weight)
        }   
    }       
    
    function write(text) {
        container.append("div").text(text)
    }
</script>
</html>

