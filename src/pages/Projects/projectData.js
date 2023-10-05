const projectData = {
  "habitat-sartorial": `
  # [Habitat Sartorial](https://www.habitatsartorial.org) is the biggest webapp I've built. [Github](https://github.com/tybens/sartorial)
    Project Completed ~Ongoing~ | Post Written 11/17/2022 

  ![](https://github.com/tybens/sartorial/raw/main/public/images/ha317at.001.jpeg)

  ---

  ## A Golden Opportunity with a Price Tag

  When Payne Vogtman, a dear friend and visionary entrepreneur, approached me with an idea, I was intrigued. He was spearheading a nonprofit initiative that revolved around selling clothes - a business model I hadn't dabbled in before. With a budget of just $250, he envisioned a website with e-commerce capabilities and a blog to narrate the company's journey. The figure he quoted was notably on the lower side for such an endeavor, but the promise of the project was hard to ignore.
  
  Seeing the potential and understanding the constraints, I made a counteroffer: "Why not let me join as a co-founder and board member, and I'll waive the fee?" Payne agreed, and our partnership was sealed.
  
  ## A Summer to Remember
  
  March 2021 marked the beginning of our collaboration. Fast forward to the summer, and the excitement was palpable as we geared up for our first collection "drop". We teased our audience with the [Fall/Winter 2021 Classics Lookbook](https://habitatsartorial.org/content/fw21-classics-lookbook) before unveiling the [shop](https://habitatsartorial.org/shop/collections/fw21-classics), a culmination of countless coding hours. The challenge? I had a single summer to develop the blog and shop.
  
  The task was daunting. While I had previously tinkered with React for Curbside Health, my backend experience was limited to Python Flask and serverless functions with NextJS in Python.
  
  ## From Novice to Navigator
  
  My initial foray into Habitat Sartorial's website was influenced by a [tutorial](https://www.youtube.com/watch?v=377AQ0y6LPA). This guide led to a rudimentary one-page app listing random products. Interestingly, it relied on \`CommerceJS\`, an API wrapper that levied a 3% sales fee. As an entrepreneur, every percentage mattered, and I was convinced that this could be bypassed. My solution? Replace \`CommerceJS\` with free Firebase technologies, seamlessly integrating them into the existing ReactJS setup.
  
  For instance, adding a user's email to our database now involved a serverless Firebase function:
  
~~~javascript
  exports.emailListJoin = functions.https.onRequest(async (req, res) => {
      const email = req.body.email;
      const writeResult = db.collection("emails").add({
        email: {
          email,
          joined: admin.firestore.Timestamp.now(),
          how: "email list box",
        },
      });
      res.json({ result: \`Email: \${writeResult} added to email list.\` });
    });
  });
~~~

## The Night Before The Drop

I breathed a sigh of relief when I pushed the commit with the message "Woohoo, expose collections to everyone!". However, our first customer sent me a text saying their cart had a NaN total price. :(. And so I began an even more frantic sprint of bug-fixing inspired now by the fear that I was potentially losing customers.

But determination prevailed. Post this frenzied episode, our endeavors bore fruit - over time, we amassed $10,000+ in sales through multiple collections, gigs, and partnerships.

## Reflections from My Journey

Three key takeaways from this endeavor:
  1. **Innovation Over Investment:** While helpful APIs can ease the process, there's always a way to bypass their costs, albeit with more work.
  2. **Expect the Unexpected:** No matter how close you feel to the finish line, finalizing your code presents challenges that will demand more time and patience than expeceted.
  3. **The Devil's in the Details:** It's the minute front-end flourishes that amplify user experience. Color transitions, fluid animations, and interactive elements transformed habitatsartorial.org into a contemporary haven.`,

  predictinghomelessness: `# Predicting rates of homelessness with climate and market data. [Github](https://github.com/tybens/predicting-homelessness)
    Project Completed: Dec 2022 | Post Written:  04/15/2023 

![](https://raw.githubusercontent.com/tybens/predicting-homelessness/main/figures/banner.png)

---

In recent years, society has seen an ever-growing concern about homelessness. While numerous studies have been conducted to understand its causes, the ever-changing dynamics of modern society means many factors intersect and influence the rates of homelessness. However, with the emergence of advanced data science models, we now have tools at our disposal that can unravel the complex relationship between these variables and the rates of homelessness.

With this in mind, I embarked on a mission: to not only apply modern machine learning techniques to predict homelessness rates but to use these predictions as a compass to guide policy and support decisions. The objective was clear - to gain a deeper understanding of the factors influencing homelessness and offer more effective solutions.

I opted for two advanced analytical approaches:
1. A regularized linear regression model, which I fine-tuned using hyperparameter tuning techniques.
2. TabNet, a state-of-the-art deep learning approach that combines the best of tree-based algorithms and neural networks. (source provided)

The findings were illuminating. The tuned regularized linear regression model accounted for 76% of the variance in rates of homelessness, a significant improvement over the baseline linear regression's 54%. Even more intriguing was the TabNet model. It highlighted feature importances distinct from the linear models, unveiling some unexpected insights. The top predictors turned out to be the median home value from 2016, the 2011 share of renters, the 2011 percentage of homeowners burdened with severe costs, and the rate of poverty.

To illustrate this, the top predictor is shown as a heatmap over the US. Consider the communities that are highlighted in this heatmap in comparison to understood rates of homelessness.

![](https://github.com/tybens/predicting-homelessness/blob/main/figures/top-predictor-heatmap.png)

`,
spacetiger: `# [SpaceTiger](https://spacetiger.tigerapps.org): Like yelp but for unofficial spaces on college campuses [Github](https://github.com/tybens/spacetiger)
Project Completed: Dec 2022 | Post Written:  06/16/2023

---
## Inspiration
Leilani Bender. Also, I've only stuck to one or two secret study spots per year that I enjoyed on campus because it takes effort  

##


`,

  chandlersfavalbum: `# [Chandlersfavoritealbum](https://www.chandlersfavoritealbum.com): A webapp to photoshop Chandler Bing holding your favorite album. [Github](https://github.com/tybens/chandlers-favorite-album)
  Project Completed: Jan 2021 | Post Written:  02/09/2023 

---
## Inspiration

I was swept up in a random internet fad in early 2020 in which people would use [billclintonswag.com](https://billclintonswag.com) to photoshop Bill Clinton holding 4 of their favorite album covers and post it on social media. This webapp was relatively simple and I was really curious how it was built. So after some snooping onlie I came across Thomas Millar's source code on github. 

What better way to understand how it was built than trying to expand upon it. That is, I wanted to make a webapp that accomplished almost exactly the same thing, but for a different photo. Particularly, for this picture of Chandler Bing from the popular T.V. show Friends.

![](https://res.cloudinary.com/chickennuggets/image/upload/v1675953613/PersonalWebsite/blog/Screenshot_select-area_20230209092903_uvmywg.png)

There is still a lot that I learned for a project such as this. For example:
- I didn't know NextJS.
- how to host the webapp
  - I saw Vercel in the footer of the original website and so I figured out what that was and how to use it.
- how to manipulate the photoshop function to work for my usecase
  - This was mostly through trial-and-error, but I still had to dissect the code to see what to change.
- how to set up serverless functions as a backend
  - Vercel also has support for serverless functions written in Python.

I eventually added the ability to purchase a shirt with the photoshopped picture on it. This involved adding a complex modal for the user to fill out forms; however, the most complex part of this addition was working with the printful API to dynamically generate a shirt that could be purchased and would automatically be printed and sent.

![](https://res.cloudinary.com/chickennuggets/image/upload/v1675953613/PersonalWebsite/blog/Screenshot_select-area_20230209093416_tfm6zd.png)

## Making it into an instagram bot: [Github](https://github.com/tybens/chandlers-instagram-bot)

This project was inspired also by the instagram page @chandler_holding_ur_fav_album, a page that posts only photos identical to what my site generates. This instagram page had 100k+ followers and hadn't posted in a year and so I knew there was a market want. 

I began by scraping this instagram channel's comments for requests of album covers. I had one simple check to see if a comment was requesting an album cover or not. If a comment has the words \`by\` or \`-\` in them, I assumed that an instagram user was asking for "album by artist" or "album - artist" and could save the data accordingly.

With this database of requests, I created 600+ photoshopped photos as well as custom captions that included the requesting instagram accounts username to tag and notify them. In the code below, I search duckduckgo for the artist's instagram handle and wikipedia for a brief summary of the album to append to the caption.
~~~python
try:
    summary = wikipedia.summary(album + f" ({artist} album)", sentences=2)
except:
    summary = ""
thisSearch = search(artist + " Instagram")[0]
handle = thisSearch.split("/")[-2] if "instagram" in thisSearch else ""
artist_nospace = artist.replace(" ", "")
caption = f"{album} by {artist} as requested by {username} \\n - \\n" + summary + \n
          f" \\n - \\n@{handle} @friends #{artist_nospace} #photoshop #record #album #chandlerholdingurfavalbum #chandler{artist_nospace}"

data.append({"caption": caption, "path_to_pic": path, "artist_handle": handle, "date_posted": date_posted })
print(f"{posts} generated album: {album} \\t thanks to username: {username}\\t date: {date_posted}\\t path: {path}")
~~~

I then set up a python script to post exactly one post to the account daily. This ran for a couple months, had some posts blow up to around 1000+ likes/shares, and had **so** many thankful comments from the original requesters.

However, Instagram didn't like the script that would log in to my account on the daily to post. (I ultimately had to make a burner email account that my script would login to to obtain the dual-security code to login to Instagram). Ultimately, my account was banned and that's where the project stands.

 - I learned how to apply a more modern website building framework (NextJS) and efficiently (and cheaply) host the website using Vercel instead of managing my own instance.

 - Through this project I learned how to build a "serverless" backend. 

 - Working with printful API was confusing and long-winded, but it is very rewarding seeing everything come together: a single click of a button generates a photoshopped photo, puts it on a shirt, and allows purchase of said shirt.


  `,
  lonelyraids: `# [Lonelyraids.com](https://www.lonelyraids.com): A webapp to raid lonely twitch streamers with your friends. [Github](https://github.com/tybens/lonelyraids-react)
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

After a year more of coding I revisited this project looking to revamp it to reduce server costs. I had built it previously written in raw HTML/CSS with a python backend server running on a linode $5/month instance (the legacy github code can be found [here](https://github.com/tybens/lonelyraids.com)). After rewriting the frontend to be ReactJS and the backend to use firebase's serverless functions, the app runs at a net $0 cost to me. 

This shift was more complicated than it seems. I wanted the server to wait 60 seconds between raids so that users can join streamers together, but maintaining time-based variables on a serverless backend was seemingly impossible. However, through clever manipulation of database variables I was able to retain full desired functionality of the website.
`,
  teaganlamp: `# [teaganlamp.com](https://teaganlamp.com/): A webapp to turn off my friend teagan's desk lamp. [Github](https://github.com/tybens/teaganlamp.com)
    Project Completed Jan 2021 | Post Written 02/09/2023 

![](https://res.cloudinary.com/chickennuggets/image/upload/v1661887581/PersonalWebsite/teaganlamp_ihdgos.png)

---
This project was written in HTML with JQuery to query the flask python backend. It prominently features a On/Off button that switches when clicked as well as a leaderboard of which username has clicked the On/Off button the most times. 

This project did at one point actually turn off my buddy Teagan's desk lamp. However, due to the annoyance of it he has since disconnected this functionality. As it stands this site is a simple 'cookie clicker'-esque public leaderboard.

## Why this project stands out:
- It is hosted on a small linode server. That is, an nginx server is configured to expose the flask app to public domain. This took a while to figure out and was kind of annoying, which is why I now use firebase for hosting.



`,
  leilanibender: `# [Leilanibender.com](https://leilanibender.web.app/): A quick portfolio website for my girlfriend. [Github](https://github.com/tybens/leilanibender.com)
    Project Completed: Feb 2022 | Post Written:  02/09/2023 

![](https://res.cloudinary.com/chickennuggets/image/upload/v1661887581/PersonalWebsite/leilanibender_m2syth.png)

---

This project is a testament to how quickly I can design and deploy a static website. The project took my approximately 2 hours to complete. It is written in ReactJS and hosted with firebase, as are most of my quick and easy projects. 
`,
};

export default projectData;
