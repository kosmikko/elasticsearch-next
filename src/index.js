import elasticsearch from 'elasticsearch'

export default class ElasticsearchNext {

  constructor(clientOpts) {
    this.client = new elasticsearch.Client(clientOpts)
  }

  async create(data) {
    return await this.client.create(data)
  }

  async get(opts) {
    return await this.client.get(opts)
  }

  async update(opts) {
    return await this.client.update(opts)
  }

  async search(query) {
    return await this.client.search(query)
  }

  async delete(opts) {
    return await this.client.delete(opts)
  }

  async refresh(opts) {
    return await this.client.indices.refresh(opts)
  }
}
