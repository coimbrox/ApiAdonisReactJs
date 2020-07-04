'use strict'

const Route = use('Route')

//Resource cria rota para todos os metodos
Route.resource('posts', 'PostController').apiOnly();
