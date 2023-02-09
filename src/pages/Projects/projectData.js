const projectData = {
  "habitat-sartorial": `
  # Habitat Sartorial is the biggest project I've built. [Link](https://www.habitatsartorial.org)
    Project Completed ~Ongoing~ | Post Written 11/17/2022 

  ![](https://github.com/tybens/sartorial/raw/main/public/images/ha317at.001.jpeg)

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
  chandlersfavalbum: `# A webapp to photoshop Chandler Bing holding your favorite album. [Link](https://www.chandlersfavoritealbum.com)
  Project Completed: Jan 2021 | Post Written:  02/09/2023 

---
## Inspiration

I was swept up in a random internet fad in early 2020 in which people would use [billclintonswag.com](https://billclintonswag.com) to photoshop Bill Clinton holding 4 of their favorite album covers and post it on social media. This webapp was relatively simple and I was really curious how it was built. So after some snooping onlie I came across Thomas Millar's source code on github. 

What better way to understand how it was built than trying to expand upon it. That is, I wanted to make a webapp that accomplished almost exactly the same thing, but for a different photo. Particularly, for this picture of Chandler Bing from the popular T.V. show Friends.

![](https://res.cloudinary.com/chickennuggets/image/upload/v1675953613/PersonalWebsite/blog/Screenshot_select-area_20230209092903_uvmywg.png)

There is still a lot that I learned for a project such as this. For example:
- I didn't know NextJS.
- how to host the webapp -> I saw Vercel in the footer of the original website and so I figured out how to use Vercel.
- how to manipulate the photoshop function to work for my usecase -> mostly through trial-and-error, but I still had to dissect the code to see what to change.
- how to set up serverless functions as a backend -> Vercel also has support for serverless functions written in Python.

I eventually added my own contribution through the addition of the ability to purchase a shirt with the photoshopped picture on it. This involved adding a complex modal for the user to fill out forms; however, the most complex part of this addition was working with the printful API to dynamically generate a shirt that could be purchased would automatically be printed and sent.

![](https://res.cloudinary.com/chickennuggets/image/upload/v1675953613/PersonalWebsite/blog/Screenshot_select-area_20230209093416_tfm6zd.png)

## What did I take away?

 - I learned how to apply a more modern website building framework (NextJS) and efficiently (and cheaply) host the website using Vercel instead of managing my own instance.

 - Through this project I learned how to build a "serverless" backend. 

 - Working with printful API was confusing and long-winded, but it is very rewarding seeing everything come together.


  `,
  lonelyraids: `# A webapp to raid lonely twitch streamers with your friends. [Link](https://www.lonelyraids.com)
    Project Completed: Dec 2020 | Post Written:  02/09/2023 


  ![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F9to5mac.com%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F09%2F01-twitch-logo.jpg%3Fquality%3D82%26strip%3Dall&f=1&nofb=1&ipt=27c34196f22f95aed666c199dc4a35d77d48b2f084d70edc3fb3b0b194975590&ipo=images)


---
## Inspiration
Over quarantine I found happiness through the creation of simple yet interesting web applications. Lonelyraids is among one of these. Lonelyraids.com allows you and your friends to collectively join Twitch live streamers that are currently streaming to zero viewers. 

After reading some demoralized twitch streamer's lamentations on reddit threads about trying to please an audience of no one and seeing that 95% of streamers at any given time are streaming to 0-5 viewers, I wanted to create a venue which encourages viewers to make each streamer's day...

![](https://res.cloudinary.com/chickennuggets/image/upload/v1675955038/PersonalWebsite/blog/Screenshot_select-area_20230209100342_xjb7ps.png)

This concept is not entirely novel, and received some recognition about two years ago, but my originality stems from the 'raid' aspect. Instead of serving each user a random stream, lonelyraids.com allows users to start a 'raid'-- in which all clients are taken to the same stream for the next three minutes. This changes what would have been an augmented view count of 1 to however many people are currently using lonelyraids-- creating a more communal experience for the lonelyraiders as well as all the more visible excitement from the (no longer) lonely streamers. 

## Challenges

The challenges I faced were almost all a result of my inexperience! This was my ~second website and involved a lot more back-end / api interoperability that I had done before. This bumpy road was overcome through countless open tabs, 100s of blog posts, youtube tutorials, and simply jumping in head first.

## Revisiting this project (Jun 4, 2021).

After a year more of coding I revisited this project looking to revamp it to reduce server costs. I had built it previously written in raw HTML/CSS with a python backend server running on a linode $5/month instance. After rewriting the frontend to be ReactJS and the backend to use firebase's serverless functions, the app runs at a net $0 cost to me. 

This shift was more complicated than it seems. I wanted the server to wait 60 seconds between raids so that users can join streamers together, but maintaining time-based variables on a serverless backend was seemingly impossible. However, through clever manipulation of database variables I was able to retain full desired functionality of the website.
`,
  teaganlamp: `# A webapp to turn off my friend teagan's desk lamp.
    Project Completed Jan 2021 | Post Written 02/09/2023 

![](https://res.cloudinary.com/chickennuggets/image/upload/v1661887581/PersonalWebsite/teaganlamp_ihdgos.png)

---
This project was written in HTML with JQuery to query the flask python backend. It prominently features a On/Off button that switches when clicked as well as a leaderboard of which username has clicked the On/Off button the most times. 

Unfortunately server costs has since resulted in having to take this webapp down. But I am in the process of revamping.


`,
  leilanibender: `# A quick portfolio website for my girlfriend. [Link](https://www.leilanibender.com)
    Project Completed: Feb 2022 | Post Written:  02/09/2023 

![](https://res.cloudinary.com/chickennuggets/image/upload/v1661887581/PersonalWebsite/leilanibender_m2syth.png)

---

This project is a testament to how quickly I can design and deploy a static website. The project took my approximately 2 hours to complete. It is written in ReactJS and hosted with firebase, as are most of my quick and easy projects. 
`,
};

export default projectData;
