const { MongoClient } = require('mongodb');

const url = "mongodb+srv://Aakashup11:JJ4RvGbprKG4sqbV@cluster1.5lffo.mongodb.net/";

const client = new MongoClient(url);

const dbname = "Welcome";

async function main() {
  
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbname);
    const collection = db.collection("User");
    
    const data ={
      "Name" : "Ayush Sharma",
      "Phone_num":"9068195170",
      "City" : "Nanauta"
    };

    //insert

    // const insert = await collection.insertMany([data]);
    // console.log("Insertdata :" , insert);

    //update
    // const updateResult = await collection.updateOne({"Name" : "Aakash Sharma" }, { $set: {"phone_num" : "8534050101" } });
    // console.log('Updated documents =>', updateResult);

    // //detete
    // const deleteResult = await collection.deleteMany({"Name": "Ayush Sharma" });
    // console.log('Deleted documents =>', deleteResult);



    //Read
    const documents = await collection.find({}).toArray();
    console.log("Finddata : " ,documents);
     

    //Count
    // const countResult = await collection.countDocuments({});
    // console.log("total count : " , countResult);

    //Find all document with a filter of Name : Ayush.

    const result = await collection.find({"Name" : "Ayush Sharma"}).toArray();
    console.log("result : ", result);
  

     return "done";

   
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

