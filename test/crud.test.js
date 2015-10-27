import ESN from '../src'
import should from 'should'

describe('CRUD tests', () => {
  let defaultOpts = {
    index: 'foo',
    type: 'foo'
  }
  let es
  let id

  function getOpts(opts) {
    return Object.assign({}, defaultOpts, opts)
  }

  before(() => {
    es = new ESN({host: 'localhost:9200'})
  })

  it('should create a new document', async () => {
    let opts = getOpts({
      body: {
        foo: 'bar'
      }
    })
    let res = await es.create(opts)
    should.exist(res._id)
    id = res._id
    res.created.should.be.true
  })

  it('should read document', async () => {
    let res = await es.get(getOpts({id: id}))
    should.exist(res)
    should.exist(res._source)
    res.found.should.be.true
    res._id.should.equal(id)
  })

  it('should update document', async () => {
    let opts = getOpts({
      id: id,
      body: {
        doc: {
          baf: 1
        }
      }
    })
    let res = await es.update(opts)
    should.exist(res)
    should.exist(res._id)
    res._version.should.equal(2)
    res = await es.get(getOpts({id: id}))
    res._source.baf.should.equal(1)
    res._source.foo.should.equal('bar')
  })

  it('should search documents', async () => {
    let refresh = await es.refresh(getOpts({}))
    let opts = getOpts({
      body: {
        filter: {
          term: {baf: 1}
        }
      }
    })
    let res = await es.search(opts)
    console.log(JSON.stringify(res,null,2))
  })

  it('should delete document', async () => {
    let opts = getOpts({id: id})
    let res = await es.delete(opts)
    console.log(res)
  })
})
