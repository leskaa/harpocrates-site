# About

![alt-text](assets/doc-image.png)

## Inspiration

Inspired, of course, by the hackathon prompt, as well as our desire to make easy-to-use and easy-to-access solutions for common daily problems, we decided to make Harpocrates. Discord is a popular social platform that many people use many times per day. Providing safety measures and tips on a convenient and frequently used platform is a great way to reach our users and remind them of digital privacy!

## How we built it
Once our team decided on a Discord bot, we went to use Replit, an in-browser IDE, for development and started the bot using a Discord.Js bot template. We brainstormed various ways of approaching data privacy that could be implemented in a Discord bot without losing sight of data privacy and security as a focal point. Through using various natural language processing techniques to filter sensitive information, web scraping using Cheerio.JS, cron scheduling, and API requests, we were able to create the current version of Harpocrates, the Data Privacy Discord bot, available today.

## Challenges we ran into

We were unfamiliar with Replit, but decided to use it so that we could all code together. It also has the added benefit of built in hosting and database functionality. Unfortunately, it was difficult to collaborate at times since everyone was editing the code and breaking the code at the same time. This meant that changes could not be tested or fixed until someone else fixed their issues. 

Addresses are complicated because there are so many of them and they can be written in many different formats. We tried many different machine learning models and datasets to try to identify addresses within text blocks. Unfortunately all the models were either too lenient or too strict when deciding whether something was an address. This is a balance we struggled to solve, and eventually decided to go with the model that was good at identifying addresses when they are written in a standardized form for the purposes of this demo. 

Another complication was running the python machine learning code in the same Replit environment as the Discord bot. It turned out to be easier to just make a microservice that our bot can interact with that exists on a separate Replit server. 

## Accomplishments that we're proud of

We created complex regular expressions to identify phone numbers and social security numbers in many different formats within text blocks. 

We explored machine learning and natural language processing using many different datasets and learning models in order to solve the problem of identifying an address within a text block. 

In order to provide updates on newly discovered scams, we learned how to scrape websites using Cheerio.Js and Axios. We hope to take this knowledge and apply it to other websites in the future in order to provide more tips, reminders, and factual information regarding data privacy.

We created an API that provides information from our machine learning model to our discord bot. 

We came up with a theme for our discord bot involving the greek god Harpocrates. This influenced our logo, colors, and design across both the discord bot and our documentation website. 

## What we learned

As was presumably intended, through the research and development of this project, we all learned a lot about digital privacy and safety and ways to implement that into our daily lives.

We have a wide range of team members who worked on Harpocrates this weekend, from those who had never done a hackathon, to those that had done many. However, despite the experience difference, everyone learned a lot. 

Austin had never done a hackathon before, so this was his first one! He learned how to use Discord JS to make a discord bot. He also got some experience working with Docusaurus and Infima to make a documentation website. 

Marguerite spent some time struggling with regular expressions and learning all the syntax to create them. She got the chance to refine her skills and help Austin learn as well as learning Docusaurus with him. 

Trent learned how to scrape a website using Cheerio.JS and make sense of the data collected in order to decide whether this website has posted any new news. He also got the chance to setup the actual Discord bot using the Discord Development Portal and Replit which was a new experience for him.

Alex learned a lot about using machine learning to identify addresses in text, as well as the difficulties and limitations of machine learning. 

## What's next for Harpocrates

We plan to improve the machine learning model for recognizing addresses in order to more accurately protect your users’ privacy. The address recognition problem is not just difficult for amateurs like us, but also for many businesses. Thus rather than machine learning, many businesses use a large set of all the possible addresses. In the future we may try to choose this approach or go back to making slight improvements to the ML model and using a larger dataset to learn from.

Everyone’s needs are different, so we believe customization is important, especially for a tool that moderates messages. We currently have the ability to enable and disable most features, however we plan to add more customization settings in order to allow different levels of moderation. 

The tips and resources will be added to, so that daily tips don’t run dry and our resources can become a one-stop shop for users trying to increase their digital privacy, security, and reduce their digital footprint.

Overall, we hope to add more features and ways to make security accessible through discord, protect your users’ information, increase ease of use, and promote digital privacy and safety awareness!