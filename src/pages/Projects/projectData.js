const projectData = {
  "habitat-sartorial": `
  # Habitat Sartorial is the biggest project I've built
    Written 11/17/2022 

  ---

## The pitch
  I was approached by my good friend [Payne Vogtman](https://www.linkedin.com/in/pvogtman/) to make a website for a nonprofit he was starting for $250 dollars. He wanted commerce functionality so that he could sell clothes on the website (the nonprofit's business model) as well as a blog in order to keep the followers aligned with the company vision. 
  
  Honestly $250 was quite the undershoot for what he was asking for. So I told him that I would do it for free if I could join as one of the founders and members of the board. To which he agreed!

  This happened in March of 2021. A summer later of coding marked the first collections "drop". We released the [Lookbook for Fall/Winter 2021 Classics](https://habitatsartorial.org/content/fw21-classics-lookbook) to drive excitement before dropping the [shop](https://habitatsartorial.org/shop/collections/fw21-classics) that allowed customers to purchase the designs. What that means is that I had to finish coding the blog and shop in a single summer.  

  This project was a stretch for me initially. I had experience coding in React for Curbside Health but had only ever setup backends either as a continuously running server in Python Flask or as serverless functions with NextJS in Python.
  
  ## Coding It Up
  
  I was still beginning in my career of Javascript and React, and so to get started I followed [this tutorial](https://www.youtube.com/watch?v=377AQ0y6LPA) which brought Habitat Sartorial's website to become simply a one-page app that list random products:
  
  ![title](https://res.cloudinary.com/chickennuggets/image/upload/v1668696462/PersonalWebsite/commerce_tutorial_dd0y0w.png)
  
  However, the tutorial used a backend wrapper to commerce websites called \`CommerceJS\` which would take 3% of all sales. I didn't want to lose this 3%. And taking a look at the code it seemed I may be able to replace the API wrapper with internal ReactJS logic. Thus I was able to replace \`CommerceJS\` with the free firebase technologies.
  
  For a quick example, a snippet that adds a new user's email to our database. Written as a serverless firebase function.
  ~~~javascript
// join the email list
exports.emailListJoin = functions.https.onRequest(async (req, res) => {
    // Grab the order data (may be in req.query...)
    const email = req.body.email;
    // Push the new message into Firestore using the Firebase Admin SDK.
    const writeResult = db.collection("emails").add({
      email: {
        email,
        joined: admin.firestore.Timestamp.now(),
        how: "email list box",
      },
    });
    // Send back a message that we've successfully written the message
    res.json({ result: \`Email: \${writeResult} added to email list.\` });
  });
});
~~~
## One more anecdote of something that went wrong.

Everything was going smoothly until the night before our first collections "drop". We were opening the website up to allow purchases of our content, and so I needed the site to be bug-free. Unfortunately, however, too many problems kept popping up. I ended up pulling an all-nighter working through them, making 25+ commits and each "bug-fix" uncovering yet another bug to fix. 

I breathed a sigh of relief when I pushed the commit with the message "Woohoo, expose collections to everyone!". However, our first customer sent me a text saying their cart had a NaN total price. :(. And so I began an even more frantic sprint of bug-fixing inspired now by the fear that I was potentially losing customers.

Ultimately, I fixed that particular problem and, with 4 additional collections, independent contracting, and one sponsored concert in downtown Indianapolis, since that time have generated $10,000+ in sales. 
  ## What did I take away from this?

  - I realized that finding ways around helpful APIs that ask for money is possible, and that it may take a considerable amount of work for someone who was just starting out. 

  - I learned the hard way that even if it feels like you only have one more functionality to implement, the "final touches" of ironing out the bugs in the system will take a discouragingly long time.
  
  - I learned that I really enjoy adding small front-end flourishes that help bring the website to life. Color changes, smooth animations during page navigation, and small touches of motion all help make [habitatsartorial.org](https://habitatsartorial.org) feel modern and new.
  `,
  chandlersfavalbum: "",
  lonelyraids: "",
  teaganlamp: "",
  leilanibender: "Leilani Bender's Portfolio Website",
};

export default projectData;
