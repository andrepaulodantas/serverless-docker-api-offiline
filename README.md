# serverless-docker-api-offiline

# docker-serverless-offline

Run a lambda function locally using serverless and the serverless-offline plugin.

# Usage

First initialize npm in your directory, to generate a new package.json. e.g.

``` npm init -y ```

Run the following command to build & run the container

``` docker build -t serverless . ```

The container will be running at `docker run -dp 3000:3000 serverless`

After a few seconds, open your web browser to http://localhost:3000/dev/livros. You should see our app.

Edit serverless.yml to add new API methods, and define the handler to be called when the URI is hit. 

The basic example provided calls handler.py when any GET request is made to `http://0.0.0.0:3000/test`
