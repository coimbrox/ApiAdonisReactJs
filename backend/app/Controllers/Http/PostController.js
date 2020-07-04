'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Post = use('App/Models/Post')

/**
 * Resourceful controller for interacting with posts
 */
class PostController {
  /**
   * Show a list of all posts.
   * GET posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  //listar
  async index({ request, response, view }) {
    const post = await Post.all()

    return posts
  }

  //salvar novo
  async store({ request }) {
    const data = request.only(['content']);
    const post = await Post.create(data);

    return post;
  }

  /**
   * Display a single post.
   * GET posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  //mostrar unico
  async show({ params, request, response, view }) {
    const post = await Post.find(params.id)

    return post
  }


  //atualizar um item
  async update({ params, request, response }) {
    const data = request.only(['content']);
    const post = await Post.find(params.id)

    post.merge(data)

    await post.save()

    return post

  }

  /**
   * Delete a post with id.
   * DELETE posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  //deletar
  async destroy({ params, request, response }) {

    const post = await Post.find(params.id)

    await post.delete()
  }
}

module.exports = PostController
