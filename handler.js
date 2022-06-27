'use strict';

const livros = [
  {id: 1, name: 'O Senhor dos Anéis', author: 'J.R.R. Tolkien'},
  {id: 2, name: 'O Hobbit', author: 'J.R.R. Tolkien'},
  {id: 3, name: 'O Cemitério dos Bichos', author: 'J.R.R. Tolkien'},
  {id: 4, name: 'Sherlock Holmes', author: 'Sir Arthur Conan Doyle'},
  {id: 5, name: 'Harry Potter', author: 'J.K. Rowling'},
]


module.exports.livros = async (event) => {
  try {    
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        livros,        
      },
      null,
      2
    ),
  };
  } catch (err) {
    return {
      statusCode: error.statusCode ? error.statusCode : 500,
      body: JSON.stringify({
        error: err.name ? err.name : "Exception",
        error: err.message ? err.message : "Unknown error",
      }),
    };
  }
};

module.exports.obterLivro = async (event) => {
  try {
    const { livroId } = event.pathParameters;

    const livro = livros.find((livro) => livro.id == livroId);

    if(livro === undefined) {
      return{
        statusCode: 404,
        body: JSON.stringify({
          error: "Livro não encontrado",
        }, null, 2),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify(livro, null, 2),        
    };
  } catch (err) {
    console.log("Error", err);
    return {
      statusCode: err.statusCode ? err.statusCode : 500,
      body: JSON.stringify({
        error: err.name ? err.name : "Exception",
        message: err.message ? err.message : "Unknown error",
      }),
    };
  }
};

module.exports.createLivro = async (event) => {

  if(!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "Dados não fornecidos",
      }),
    };
  }

  const livro = {
    id: livros[livros.length - 1].id + 1,
    name: event.body.name,
    author: event.body.author
  }
    livros.push(livro);
    
  return {
    statusCode: 200,
    body: JSON.stringify(livros, null, 2),        
  };

}

module.exports.deleteLivro = async (event) => {
  
  const { livroId } = event.pathParameters;

  const livro = livros.find((livro) => livro.id == livroId);

    if(livro === undefined) {
      return{
        statusCode: 404,
        body: JSON.stringify({
          error: "Livro não encontrado",
        }, null, 2),
      };
    }   
    
    const index = livros.indexOf(livro);
    livros.splice(index, 1);
            
    return {
      statusCode: 200,
      body: JSON.stringify(livros, null, 2),        
    };
  }