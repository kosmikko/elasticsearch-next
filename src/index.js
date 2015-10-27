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

  // index operations:
  async indexCreate(opts) {
    return await this.client.indices.create(opts)
  }

  async indexDelete(opts) {
    return await this.client.indices.delete(opts)
  }

  async indexRefresh(opts) {
    return await this.client.indices.refresh(opts)
  }

  // mapping operations:
  async mappingUpdate(opts) {
    return await this.client.indices.putMapping(opts)
  }

  async mappingGet(opts) {
    return await this.client.indices.getMapping(opts)
  }

  async mappingDelete(opts) {
    return await this.client.indices.deleteMapping(opts)
  }

}
