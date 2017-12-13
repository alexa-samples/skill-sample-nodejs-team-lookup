# Build An Alexa Team Lookup Skill
[![Voice User Interface](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/1-on._TTH_.png)](https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/step-by-step/1-voice-user-interface.md)[![Lambda Function](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/2-off._TTH_.png)](https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/step-by-step/2-lambda-function.md)[![Connect VUI to Code](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/3-off._TTH_.png)](https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/step-by-step/3-connect-vui-to-code.md)[![Testing](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/4-off._TTH_.png)](https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/step-by-step/4-testing.md)[![Customization](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/5-off._TTH_.png)](https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/step-by-step/5-customization.md)[![Publication](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/navigation/6-off._TTH_.png)](https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/step-by-step/6-publication.md)

## Setting up Your Voice User Interface

There are two parts to an Alexa skill.  The first part is the [Voice User Interface (VUI)](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/defining-the-voice-interface).  This is where we define how we will handle a user's voice input, and which code should be executed when specific commands are uttered.  The second part is the actual code logic for our skill, and we will handle that in [the next step](https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/step-by-step/2-lambda-function.md) of this step-by-step guide.

1.  **Go to the [Amazon Developer Portal](http://developer.amazon.com)**.  On the top right corner of the screen, click the **Sign In** button. </br>(If you don't already have an account, you will be able to create a new one for free.)

    ![Sign in](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-1-developer-portal._TTH_.png)

2.  Once you have signed in, **click the Alexa button** at the top of the screen.

    ![Alexa button](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-2-alexa-button._TTH_.png)

3.  On the Alexa page, choose the **Get Started** button for the Alexa Skills Kit.

    ![Get Started](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-3-alexa-skills-kit._TTH_.png)

4.  Select **Add a New Skill.** This will get you to the first page of your new Alexa skill.

    ![Amazon Developer Portal](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-4-add-a-new-skill._TTH_.png)

5.  **Fill out the Skill Information screen.**  </br>Make sure to review the tips we provide below the screenshot.

    ![Skill Information](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-5-skill-information._TTH_.png)

    ### Skill Information Instructions

    |   | Description | Example  |
    | ------------- | ------------- | ------------- |
    | **Skill Type**  | For this skill, we are creating a skill using the Custom Interaction Model. This is the default choice.  | Custom Interaction Model  |
    | **Language**  | Choose the first language you want to support.  You can add additional languages in the future, but we need to start with one. (This guide is using U.S. English to start.)  | U.S English  |
    | **Name**  | This is the name of the skill as it will be displayed in the [Alexa app](http://alexa.amazon.com).  | Team Lookup  |
    | **Invocation Name**  | This is the name spoken by your users to start the skill. Use a name like "Team Lookup" for this sample skill. Some common issues that developers experience with invocation names are listed in the following table. In addition, please review the [Invocation Name Requirements](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/choosing-the-invocation-name-for-an-alexa-skill) as you consider an invocation name for your skill.   | Team Lookup  |
    | **Audio Player**  | For this Team Lookup skill, we won't be using any audio files, so you can select No for this option.  If you would like to learn more about adding audio to your skills, please check out our [Audio Player Guide](https://github.com/alexa/skill-sample-nodejs-audio-player).  | No  |


    ### Invocation Name Requirements

    | Invocation Name Requirements  | Examples of incorrect invocation names |
    | ------------- | ------------- |
    | The skill invocation name must not infringe upon the intellectual property rights of an entity or person.  | korean air; septa check  |
    | Invocation names should be more than one word (unless it is a brand or intellectual property), and must not be a name or place   | horoscope; trivia; guide; new york  |
    | Two word invocation names are not allowed when one of the words is a definite article, indefinite article, or a preposition  | any poet; the bookie; the fool  |
    | The invocation name must not contain any of the Alexa skill launch phrases and connecting words.  Launch phrase examples include "launch," "ask," "tell," "load," and "begin."  Connecting word examples include "to," "from," "by," "if," "and," "whether."  | trivia game for star wars; better with bacon  |
    | The invocation name must not contain the wake words "Alexa," "Amazon," "Echo," "Computer," or the words "skill" or "app."  | hackster initial skill; word skills  |
    | The invocation name must be written in each language you choose to support.  For example, the German version of your skill must have an invocation name written in German, while the English (US) version must have an invocation name written in English.   | kitchen stories (German skill)  |

6.  Click on **Save***, and then click **Next** button to move to the **Interaction Model.**

    ![Next Button](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-6-next-button._TTH_.png)

7. Click on the **Launch Skill Builder** (Beta) button . This will launch the new Skill Builder Dashboard.
![Launch Skill Builder](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/team-lookup/1-7-skill-builder-launch.png)

8. Click on **Code Editor** on the top left corner of the dashboard.
![Code Editor](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-8-skill-builder-code-editor.png)

9. Replace the contents of the box containing by **copy-pasting** the contents of the [interaction-model.json](https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/speech-assets/interaction-model.json) file.
![Replace JSON](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-9-skill-builder-json-replace.png)
10. Click on **Apply Changes**
11. You will see the Skill Builder populate the intents and slot types for our skill on the left sidebar.
![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/team-lookup/1-11-skill-builder-intents-slots-populated.png)
10. Click on the **Save Model** button, and then click on the **Build Model** button.
![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/team-lookup/1-12-skill-builder-build-save-model.png)
![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/team-lookup/1-12-skill-builder-building-model.png)

    ### What just happened - Understanding Intents, Slots, and Sample Utterances
    Let's take a look at what happened behind the scenes when we imported the contents of the interaction-model.json file. If you look closely, this file includes a JSON schema representing the intents, slots, and some sample utterances for our skill. Based on this JSON schema, the skill builder created the intents, slots, and the sample utterances for our skill.

    1.  **Intent Schema** An intent schema defines the actions that we want our users to be able to take.  
    2.  **Custom Slot Types** Custom slots are sets of training data for Alexa to give her an idea of the types of data you expect to receive from your skill users. Note that the values in a custom slot *do not* function like a drop-down list on a website.  If your custom slot contains a list of colors in the rainbow, and your user responds with a color that isn't in your list, you will still receive "sky blue" as an answer, and your skill must be able to handle those situations.
    3.  **Sample Utterances** Sample utterances guide Alexa to map what a user says to the Intents that we defined earlier. **Copy** these sample utterances and **paste** them into the **Sample Utterances** box in your browser.

    ### List of Intents and Slot Names used by the Team Lookup Skill

    For commonly recurring sets like first name, and city names, Amazon provides [Built-In Slots]((https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference#list-types)). For others, we need to define our own **custom slot types**.

    For example, note that while the intent “SearchByNameIntent”, has five slots defined: firstName, lastName, infoType, whoPhrase, and whatPhrase, only one of them - "**firstName**" uses a built-in slot - AMAZON.US_FIRST_NAME. See the table below.


    | Intent Name  | Slots  |
    | ------------- | ------------- |
    | SearchByName  | **firstName**, lastName, infoType, whoPhrase, whatPhrase  |
    | SearchByCity  | cityName  |
    | SearchByInfoType  | firstName, lastName, infoType, whatPhrase  |
    | TellMeMoreIntent  | No Slots  |
    | TellMeThisIntent  | infoType, whatPhrase  |

    ### List of Built-in Intents used by the Team Lookup skill

    | Slot Type  | Description |
    | ------------- | ------------- |
    | AMAZON.HelpIntent  | Provide help about how to use the skill.|
    | AMAZON.CancelIntent | Let the user cancel a transaction or task (but remain in the skill), or let the user completely exit the skill |
    | AMAZON.YesIntent | Let the user provide a positive response to a yes/no question for confirmation. |
    | AMAZON.NoIntent | Let the user provide a negative response to a yes/no question for confirmation. |
    | AMAZON.StopIntent | Let the user stop an action (but remain in the skill), or let the user completely exit the skill |
    | AMAZON.RepeatIntent | Let the user request to repeat the last action. |
    | AMAZON.StartOverIntent | Let the user request to restart an action. |

    For a complete list of Built-in intents, see [Standard Built-in Intents](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents).

    ### List of Custom Slot Types used by the Team Lookup skill

    | Slot Type  | Description |
    | ------------- | ------------- |
    | **AMAZON.US_FIRST_NAME**  | Built-In Slot Type that is extended by us with some additional first names.|
    | LAST_NAME | Last names |
    | LIST_OF_INFO_TYPES | Info types that can be searched for, example - twitter, github, linkedin |
    | WHAT_PHRASE | list of "what is" phrases that can be used to search, example "tell me", "give me", "what's","what is" |
    | WHO_PHRASE | list of "who is" phrases that can be used to search, example "who is", "find" |



8.  If your interaction model builds successfully, click on **Configuration** button to move on to Configuration. In our next step of this guide, we will be creating our Lambda function in the AWS developer console, but keep this browser tab open, because we will be returning here on [Page #3: Connect VUI to Code](https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/step-by-step/3-connect-vui-to-code.md).
![](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/1-13-skill-builder-configuration.png)

    If you get an error from your interaction model, check through this list:

    *  **Are your custom slots named correctly? Please refer to the table above listing the custom slots types.**
    *  **Did you copy and paste the provided code into the appropriate boxes?**
    *  **Did you accidentally add any unwanted characters to the Interaction Model or Sample Utterances?**

<br/><br/>
[![Next: Lambda Function](https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/general/buttons/button_next_lambda_function._TTH_.png)](https://github.com/alexa/skill-sample-nodejs-team-lookup/blob/master/step-by-step/2-lambda-function.md)

<img height="1" width="1" src="https://www.facebook.com/tr?id=1847448698846169&ev=PageView&noscript=1"/>
