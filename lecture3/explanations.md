1. What is MongoDB?

## Teaching Script (Hindi + English):

“MongoDB ek NoSQL database hai — iska matlab hai ki yeh traditional table-based database nahi hai. Isme data documents ke format mein store hota hai — basically JSON-like format.”

Real-Life Example:

“Socho ek shopping website hai — har user ka naam, email, password hota hai.
SQL database mein aapko har user ke liye ek strict table banana padta hai — lekin MongoDB mein aap user ke data ko ek flexible JSON document ki tarah store kar sakte ho.”


{
  "name": "Dheeraj Agrahari",
  "email": "dheeraj@gmail.com",
  "age": 23
}


2. Local MongoDB vs MongoDB Atlas

“MongoDB ko do tarike se use kiya ja sakta hai:

Local system pe (MongoDB Compass ke through)

Cloud ke through (MongoDB Atlas)”

Real-Life Comparison:

“Local MongoDB waise hai jaise apne computer pe khud ki bakery banana. Sirf aap access kar sakte ho.
Atlas cloud waise hai jaise ek Zomato cloud kitchen — world ke kisi bhi kone se access kar sakte ho. Production level pe hamesha cloud preferred hota hai.”




 2. Setup MongoDB Atlas 
 Walkthrough:

Visit https://www.mongodb.com/cloud/atlas

Create free account

Create free cluster (AWS, Shared, M0)

Add Database User (username + password)

Add Network Access (Allow access from anywhere 0.0.0.0/0)

Create database & collection manually (optional)


 4. Why Mongoose?

“Mongoose ek ODM hai — Object Data Modeling tool — jo aapke MongoDB documents ko structure deta hai using Schema.”

Real-Life Analogy:

“Socho ek Google Form hai jisme aapko ‘Name’, ‘Email’ aur ‘Age’ bharna hota hai. Mongoose wahi form banata hai for your MongoDB collection — jisme required fields, validations, etc. defined hote hain.”


POST /api/users
{
  "name": "Ravi",
  "email": "ravi123@gmail.com",
  "age": 25
}

Ye API aapka real life registration form ka backend hai. Jab koi user app pe register karta hai, to ye API uska data database mein daalti hai.”