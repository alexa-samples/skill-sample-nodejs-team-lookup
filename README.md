# Build An Alexa Team Lookup Skill
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/team-lookup/header._TTH_.png" />

[![Voice User Interface](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/1-off._TTH_.png)](https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/step-by-step/1-voice-user-interface.md)[![Lambda Function](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/2-off._TTH_.png)](https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/step-by-step/2-lambda-function.md)[![Connect VUI to Code](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/3-off._TTH_.png)](https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/step-by-step/3-connect-vui-to-code.md)[![Testing](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/4-off._TTH_.png)](https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/step-by-step/4-testing.md)[![Customization](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/5-off._TTH_.png)](https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/step-by-step/5-customization.md)[![Publication](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/6-off._TTH_.png)](https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/step-by-step/6-publication.md)

<!--<a href="https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/step-by-step/1-voice-user-interface.md"><img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/1-off._TTH_.png" /></a><a href="https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/step-by-step/2-lambda-function.md"><img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/2-off._TTH_.png" /></a><a href="https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/step-by-step/3-connect-vui-to-code.md"><img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/3-off._TTH_.png" /></a><a href="https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/step-by-step/4-testing.md"><img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/4-off._TTH_.png" /></a><a href="https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/step-by-step/5-customization.md"><img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/5-off._TTH_.png" /></a><a href="https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/step-by-step/6-publication.md"><img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/6-off._TTH_.png" /></a>-->

## What You Will Learn

In addition to the concepts listed below, the guide will walk you through the basics of how to build the skill using [AWS Lambda](http://aws.amazon.com/lambda), and the [Alexa Skills Kit (ASK)](https://developer.amazon.com/alexa-skills-kit).

*  Introduction to the new [Alexa Skill Builder](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/ask-define-the-vui-with-gui) (Beta) JSON schema
* Voice User Interface (VUI) design
*  Skill certification
*  Session attributes (to maintain context)
*  State management
*  SSML

### New Tips and Tricks
As with any sample code, the idea here is also to encourage you to learn and explore new skill building concepts. Here are some new tips and tricks you’d be able to learn using the Team Lookup skill:


1. Using the new [Alexa Skill Builder](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/ask-define-the-vui-with-gui) to build the interaction model.
2. **Searching** a given dataset based with a given query.
3. Using **session attributes** effectively to -
	1. Store **"last speech"** messages, so when the user asks information to be repeated, you can pull it from the session attributes.
	2. Add context by storing **"last search"** results in the session attributes. This enables contextual followup questions like “what’s his twitter”, or “give me her linkedin”.
	3. Store **"last intent"** for other logic processing when knowing what the user last requested is important.
4. Sending **cards with images** to the Alexa companion app
5. **Randomize help messages** so there’s a bit of variety.
6. **New helper functions** (Slow Spell,Pronouns, Random help message generator, and more)
7. **Extending Custom Slots**
8. Using custom slots for **commonly used phrases** to reduce the number of sample utterances, making the interaction model easier to maintain.


## What You Will Need
*  [Amazon Developer Portal Account](http://developer.amazon.com)
*  [Amazon Web Services Account](http://aws.amazon.com/)
*  The sample code on [GitHub](https://github.com/alexa/skill-sample-nodejs-team-lookup).
*  Simple graphical editing tool (to create an icon for your skill)

## What Your Skill Will Do

An Alexa skill built using the Alexa Node SDK, that lets you find information about Alexa Evangelists and Solutions Architects.

The idea behind this new sample app is pretty simple. Wouldn’t it be cool if there was a way you could look up the contact information for people by just asking Alexa?

The sample data included with this template for instance lets you search for Alexa Evangelists and Solutions Architects by city, and their first/last names. So, you could say “find me an evangelist in Seattle”, and it would respond with  the name of the evangelist/s, along with their Twitter, LinkedIn, and GitHub handles.


**Here are some things you can say** -
1. Alexa, ask team lookup to find me an evangelist in seattle
2. Alexa, ask team lookup who is dave
3. Alexa, ask team lookup for amit’s twitter handle


## How the Template is Laid Out
The code for the template is laid out in four sections:

1. **Data and text strings:** (Replace this data with your own): The first section includes the data and the text strings that you can replace with your data to customize your skill, and include information about your team.
2. **Skill code - Intent Handlers:** The second section is the core part of the code that makes the skill work. This includes all the intent handlers, and any other supporting functions. Feel free to explore this section, while you  try to understand how things work, but be careful as editing this section may break your skill.
3. **Generating speech:** The third section includes all the functions that generate the output speech, or what Alexa says back to the user.
4. **Helper functions:** Finally, the fourth section includes some helper functions. These are functions that perform one very specific small task. These are written in a way that they can be reused in any skill. Just copy/paste them in to your skill, and use away. You can find more of these

## Make It Your Own
You can replace the sample data included in this template, and make it your own. See the [customization](https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/step-by-step/5-customization.md) section for more details and ideas on how.

**Scenario 1 - just replace the data, and publish:** Imagine you are a real estate company, and you'd like to enable your customers, and prospects to be able to find a local agent by just talking to Alexa. You can take this template, replace it with your data, and then publish it. Then anyone with access to an Alexa device can just say - “*Alexa, ask my broker to find me an agent in New York*”.  

**Scenario 2 - replace the data, and use it privately:** The first scenario entails publishing your skill and making it available in the Alexa skills store. But you could also use your skill privately to look up information for your friends and family: "*Alexa, ask people finder what's jessica's twitter handle*"

**Scenario 3 - replace the data, add more features, and publish:** Finally, you can also use the sample code as a base and build up - say, by adding more information types like email and Instagram handles. You could also add search by geolocation, so it would return results for people who are currently in a given city.


We can't wait to see what you build. Let us know if you have any questions/feedback at [@AlexaDevs](https://twitter.com/alexadevs).

<br/>
<a href="https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/step-by-step/1-voice-user-interface.md"><img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/buttons/button_get_started._TTH_.png" /></a>

<img height="1" width="1" src="https://www.facebook.com/tr?id=1847448698846169&ev=PageView&noscript=1"/>
