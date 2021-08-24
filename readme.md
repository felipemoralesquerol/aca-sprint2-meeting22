# Instrucciones a nivel de desarrollo
`npm init -yes`

`npm i express morgan dotenv mongoose`

`npm i bcrypt`

# Entidades incluidas
- Cuentas bancarias

Atlas atlas-rv8ohj-shard-0 [primary] testing> session = db.getMongo().startSession( { readPreference: { mode: "primary" } } );
{ id: UUID("ba08f485-d0e4-4525-87ad-853a05e55878") }
Atlas atlas-rv8ohj-shard-0 [primary] testing> coll1 = session.getDatabase("testing").productos;
testing.productos
Atlas atlas-rv8ohj-shard-0 [primary] testing> session.startTransaction( { readConcern: { level: "local" }, writeConcern: { w: "majority" } } );

Atlas atlas-rv8ohj-shard-0 [primary] testing> coll1.insertOne( { abc: 1 } );
{
  acknowledged: true,
  insertedId: ObjectId("6121d3b2e4e660b51320ae24")
}
Atlas atlas-rv8ohj-shard-0 [primary] testing> coll1.insertOne( { abc: 2 } );
{
  acknowledged: true,
  insertedId: ObjectId("6121d3cee4e660b51320ae25")
}
Atlas atlas-rv8ohj-shard-0 [primary] testing> coll1.insertOne( { abc: 3 } );
{
  acknowledged: true,
  insertedId: ObjectId("6121d3d3e4e660b51320ae26")
}
Atlas atlas-rv8ohj-shard-0 [primary] testing> coll1.find().count()
MongoServerError: Cannot run 'count' in a multi-document transaction. Please see http://dochub.mongodb.org/core/transaction-count for a recommended alternative.
Atlas atlas-rv8ohj-shard-0 [primary] testing> coll1.find()
[
  { _id: ObjectId("6121cc6ee4e660b51320ae1c"), codigo: 'xxx' },
  { _id: ObjectId("6121cc75e4e660b51320ae1d"), codigo: 'xx' },
  { _id: ObjectId("6121cc7ae4e660b51320ae1e"), codigo: 'x' },
  { _id: ObjectId("6121cf6ee4e660b51320ae1f"), codigo: 'a' },
  { _id: ObjectId("6121cffde4e660b51320ae20"), codigo: 'b' },
  { _id: ObjectId("6121d2a3e4e660b51320ae23"), codigo: 'c' },
  { _id: ObjectId("6121d3b2e4e660b51320ae24"), abc: 1 },
  { _id: ObjectId("6121d3cee4e660b51320ae25"), abc: 2 },
  { _id: ObjectId("6121d3d3e4e660b51320ae26"), abc: 3 }
]
Atlas atlas-rv8ohj-shard-0 [primary] testing> session.abortTransaction()

Atlas atlas-rv8ohj-shard-0 [primary] testing> coll1.find()
[
  { _id: ObjectId("6121cc6ee4e660b51320ae1c"), codigo: 'xxx' },
  { _id: ObjectId("6121cc75e4e660b51320ae1d"), codigo: 'xx' },
  { _id: ObjectId("6121cc7ae4e660b51320ae1e"), codigo: 'x' },
  { _id: ObjectId("6121cf6ee4e660b51320ae1f"), codigo: 'a' },
  { _id: ObjectId("6121cffde4e660b51320ae20"), codigo: 'b' },
  { _id: ObjectId("6121d2a3e4e660b51320ae23"), codigo: 'c' }
]
Atlas atlas-rv8ohj-shard-0 [primary] testing> session = db.getMongo().startSession( { readPreference: { mode: "primary" } } );
