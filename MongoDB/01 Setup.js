// show dbs
// use dbName

// Delete Database  => db.dropDatabase()

// Show Collections => show collections

// Create a collection named 'comments' => db.createCollection('comments')

// Drop a collection named 'comments' => db.comments.drop()

// Show all Rows in a Collection => db.comments.find()

// Show all Rows in a Collection (Prettified) => db.comments.find().pretty()

// Find the first row matching the object => db.comments.findOne({name: 'Harry'})

// Insert One Row

db.comments.insert({
    'name': 'Harry',
    'lang': 'JavaScript',
    'member_since': 5
})

// Insert many Rows

db.comments.insertMany([{
    'name': 'Harry',
    'lang': 'JavaScript',
    'member_since': 5
},
{
    'name': 'Rohan',
    'lang': 'Python',
    'member_since': 3
},
{
    'name': 'Lovish',
    'lang': 'Java',
    'member_since': 4
}])

// Search in a MongoDb Database

db.comments.find({ lang: 'Python' })

// Limit the number of rows in output
db.comments.find().limit(2)

// Count the number of rows in the output
db.comments.find().count()

// Update a row
db.comments.updateOne({ name: 'Shubham' },
    {
        $set: {
            'name': 'Harry',
            'lang': 'JavaScript',
            'member_since': 51
        }
    }, { upsert: true })


// Mongodb Increment Operator
db.comments.update({ name: 'Rohan' },
    {
        $inc: {
            member_since: 2
        }
    })

// Mongodb Rename Operator
db.comments.update({ name: 'Rohan' },
    {
        $rename: {
            member_since: 'member'
        }
    })

// Delete Row 
db.comments.remove({name: 'Harry'})