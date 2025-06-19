## Part 1: What is Express.js?

"Express.js ek lightweight aur fast web framework hai Node.js ke liye. Agar aapko imagine karna ho, socho Express ek restaurant manager hai. Jab customer (browser) request karta hai (order deta hai), Express usse accept karke kitchen (controller logic) tak bhejta hai aur uska result wapas return karta hai."



[Client] → [Express Router] → [Controller Logic] → [Response]



## Part 3: Understanding req and res

Add route to test request:

app.post('/log', (req, res) => {
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  res.send('Logged request details');
});

Explain:

"req ka matlab hota hai incoming request. Isme headers, params, query, aur body hoti hai. res ka matlab hota hai server se outgoing response."

Show in Postman how request headers and body appear.



 ## Part 4: Route Parameters and Query Params

   app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID from route param: ${userId}`);
  });
  

  "Route params dynamic hote hain – jaise user ID, blog slug ya order number."



## Query Parameters

app.get('/search', (req, res) => {
  const { keyword, page } = req.query;
  res.send(`Search for ${keyword} on page ${page}`);
});

Try URL:

http://localhost:8000/search?keyword=express&page=2


"Query params use hote hain filters ya search ke liye — jaise Flipkart pe price range ya sort order."



### Part 5: Middleware (Built-in + Custom)

 Built-in Middleware

app.use(express.json());


"Express ke paas kuch default middleware hoti hain – jaise express.json() jo incoming request ke body ko parse karta hai."




## Custom Middleware

"Middleware ek beech ka layer hoti hai jo har request ke aane pe kuch kaam kar sakti hai. Jaise logging, auth check, etc."



 ## Part 6: Basic Error Handling
 Add catch-all middleware:

// Unknown route
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server Error' });
});

"Jab koi route match nahi karta, ya server crash ho jaye, tab error middleware help karta hai response dene mein."



## Routes works

"Har route ek specific kaam karta hai. GET data fetch karta hai, POST data save karta hai, PUT update karta hai, aur DELETE data delete karta hai."

"Real-world apps mein har feature ka alag route file hota hai. Jaise users, products, orders etc. Isse code maintain karna easy hota hai."



 Test All Routes in Postman
Method	URL	Description
GET	/api/users	Get all users
GET	/api/users/:id	Get user by ID
POST	/api/users	Create user (body: name, email)
PUT	/api/users/:id	Update user
DELETE	/api/users/:id	Delete user