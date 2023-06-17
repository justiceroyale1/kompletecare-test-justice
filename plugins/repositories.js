import createRepository from '~/api/repository'

export default (ctx, inject) => {
  const repositoryWithAxios = createRepository(ctx.$axios)

  const repositories = {
    investigations: repositoryWithAxios('investigations'),
    //Add more here...
  }
  inject('repositories', repositories)
}
