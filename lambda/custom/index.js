"use strict";
const Alexa = require("alexa-sdk"); // import the library

//=========================================================================================================================================
//TODO: The items below this comment need your attention
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this:  const APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
const APP_ID = undefined;

// =====================================================================================================
// --------------------------------- Section 1. Data and Text strings  ---------------------------------
// =====================================================================================================
//TODO: Replace this data with your own.
//======================================================================================================

const data=[
	{firstName:"dave",lastName:"isbitski",title:"Chief Alexa evangelist",cityName:"philadelphia",twitter:"thedavedev",saytwitter:"the dave dev",github:"disbitski",saygithub:"d, isbitski",linkedin:"https://www.linkedin.com/in/davidisbitski",saylinkedin:"david isbitski",joinDate:"October 2015",gender:"m"},
	{firstName:"paul",lastName:"cutsinger",title:"Head of Voice Design Education on Amazon Alexa",cityName:"seattle",twitter:"paulcutsinger",saytwitter:"paul cutsinger",github:"paulcutsinger",saygithub:"paulcutsinger",linkedin:"https://www.linkedin.com/in/paulcutsinger",saylinkedin:"paul cutsinger",joinDate:"January 2016",gender:"m"},
	{firstName:"amit",lastName:"jotwani",title:"an Alexa AI and machine learning evangelist",cityName:"new york",twitter:"amit",saytwitter:"amit",github:"ajot",saygithub:"a, jot",linkedin:"https://www.linkedin.com/in/ajotwani",saylinkedin:"a jotwani",joinDate:"February 2016",gender:"m"},
	{firstName:"jeff",lastName:"blankenburg",title:"an Alexa evangelist",cityName:"columbus",twitter:"jeffblankenburg",saytwitter:"jeff blankenburg",github:"jeffblankenburg",saygithub:"jeffblankenburg",linkedin:"https://www.linkedin.com/in/jeffblankenburg",saylinkedin:"jeff blankenburg",joinDate:"September 2016",gender:"m"},
	{firstName:"rob",lastName:"mccauley",title:"a Solutions Architect on the Alexa Skills Team",cityName:"boston",twitter:"robmccauley",saytwitter:"rob mccauley",github:"robm26",saygithub:"rob m 26",linkedin:"https://www.linkedin.com/in/robm26",saylinkedin:"rob m 26",joinDate:"February 2016",gender:"m"},
	{firstName:"memo",lastName:"doring",title:"a Solutions Architect on the Alexa Skills Team",cityName:"seattle",twitter:"memodoring",saytwitter:"memo doring",github:"memodoring",saygithub:"memo doring",linkedin:"https://www.linkedin.com/in/guillermodoring",saylinkedin:"guillermo doring",joinDate:"April 2016",gender:"m"},
	{firstName:"jen",lastName:"gilbert",title:"a Marketing Manager on the Alexa Skills team",cityName:"seattle",twitter:"thejengil",saytwitter:"the jengil",github:"jengilbert",saygithub:"jen gilbert",linkedin:"https://www.linkedin.com/in/jenpaullgilbert/",saylinkedin:"jen paull gilbert",joinDate:"June 2016",gender:"f"}
];

//======================================================================================================
//TODO: Replace these text strings to edit the welcome and help messages
//======================================================================================================

const skillName = "Team Lookup";

//This is the welcome message for when a user starts the skill without a specific intent.
const WELCOME_MESSAGE = "Welcome to " + skillName + "Learn about Alexa Evangelists and Solutions Architects. For example, " + getGenericHelpMessage(data);

//This is the message a user will hear when they ask Alexa for help in your skill.
const HELP_MESSAGE = "I can help you find Alexa Evangelists and Solutions Architects. ";

//This is the message a user will hear when they begin a new search
const NEW_SEARCH_MESSAGE = getGenericHelpMessage(data);

//This is the message a user will hear when they ask Alexa for help while in the SEARCH state
const SEARCH_STATE_HELP_MESSAGE = getGenericHelpMessage(data);

const DESCRIPTION_STATE_HELP_MESSAGE = "Here are some things you can say: Tell me more, or give me his or her contact info";

const MULTIPLE_RESULTS_STATE_HELP_MESSAGE = "Sorry, please say the first and last name of the person you'd like to learn more about";

// This is the message use when the decides to end the search
const SHUTDOWN_MESSAGE = "Ok. ";

//This is the message a user will hear when they try to cancel or stop the skill.
const EXIT_SKILL_MESSAGE = "Ok. ";

// =====================================================================================================
// ------------------------------ Section 2. Skill Code - Intent Handlers  -----------------------------
// =====================================================================================================
// CAUTION: Editing anything below this line might break your skill.
//======================================================================================================

const states = {
	SEARCHMODE: "_SEARCHMODE",
	DESCRIPTION: "_DESCRIPTION",
	MULTIPLE_RESULTS: "_MULTIPLE_RESULTS"
};

const newSessionHandlers = {
	"LaunchRequest": function() {
		this.handler.state = states.SEARCHMODE;
		this.response.speak(WELCOME_MESSAGE).listen(getGenericHelpMessage(data));
		this.emit(':responseReady');
	},
	"SearchByNameIntent": function() {
		console.log("SEARCH INTENT");
		this.handler.state = states.SEARCHMODE;
		this.emitWithState("SearchByNameIntent");
	},
	"TellMeMoreIntent": function() {
		this.handler.state = states.SEARCHMODE;
		this.response.speak(WELCOME_MESSAGE).listen(getGenericHelpMessage(data));
		this.emit(':responseReady');
	},
	"TellMeThisIntent": function() {
		this.handler.state = states.SEARCHMODE;
		this.emitWithState("SearchByNameIntent");
	},
	"SearchByInfoTypeIntent": function() {
		this.handler.state = states.SEARCHMODE;
		this.emitWithState("SearchByInfoTypeIntent");
	},
	"AMAZON.YesIntent": function() {
		this.response.speak(getGenericHelpMessage(data)).listen(getGenericHelpMessage(data));
		this.emit(':responseReady');
	},
	"AMAZON.NoIntent": function() {
		this.response.speak(SHUTDOWN_MESSAGE);
		this.emit(':responseReady');
	},
	"AMAZON.RepeatIntent": function() {
		this.response.speak(HELP_MESSAGE).listen(getGenericHelpMessage(data));
		this.emit(':responseReady');
	},
	"AMAZON.StopIntent": function() {
		this.response.speak(EXIT_SKILL_MESSAGE);
		this.emit(':responseReady');
	},
	"AMAZON.CancelIntent": function() {
		this.response.speak(EXIT_SKILL_MESSAGE);
		this.emit(':responseReady');
	},
	"AMAZON.StartOverIntent": function() {
		this.handler.state = states.SEARCHMODE;
		var output = "Ok, starting over. " + getGenericHelpMessage(data);
		this.response.speak(output).listen(output);
		this.emit(':responseReady');
	},
	"AMAZON.HelpIntent": function() {
		this.response.speak(HELP_MESSAGE + getGenericHelpMessage(data)).listen(getGenericHelpMessage(data));
		this.emit(':responseReady');
	},
	"SessionEndedRequest": function() {
		this.emit("AMAZON.StopIntent");
	},
	"Unhandled": function() {
		this.handler.state = states.SEARCHMODE;
		this.emitWithState("SearchByNameIntent");
	}
};
let startSearchHandlers = Alexa.CreateStateHandler(states.SEARCHMODE, {
	"AMAZON.YesIntent": function() {
		this.response.speak(NEW_SEARCH_MESSAGE).listen(NEW_SEARCH_MESSAGE);
		this.emit(':responseReady');
	},
	"AMAZON.NoIntent": function() {
		this.response.speak(SHUTDOWN_MESSAGE);
		this.emit(':responseReady');
	},
	"AMAZON.RepeatIntent": function() {
		let output;
		if(this.attributes.lastSearch){
			output = this.attributes.lastSearch.lastSpeech;
			console.log("repeating last speech");
		}
		else{
			output = getGenericHelpMessage(data);
			console.log("no last speech availble. outputting standard help message.");
		}
		this.emit(":ask",output, output);
	},
	"SearchByNameIntent": function() {
		searchByNameIntentHandler.call(this);
	},
	"SearchByCityIntent": function() {
		searchByCityIntentHandler.call(this);
	},
	"SearchByInfoTypeIntent": function() {
		searchByInfoTypeIntentHandler.call(this);
	},
	"TellMeThisIntent": function() {
		this.handler.state = states.DESCRIPTION;
		this.emitWithState("TellMeThisIntent");
	},
	"TellMeMoreIntent": function() {
		this.handler.state = states.DESCRIPTION;
		this.emitWithState("TellMeMoreIntent");
	},
	"AMAZON.HelpIntent": function() {
		this.response.speak(getGenericHelpMessage(data)).listen(getGenericHelpMessage(data));
		this.emit(':responseReady');
	},
	"AMAZON.StopIntent": function() {
		this.response.speak(EXIT_SKILL_MESSAGE);
		this.emit(':responseReady');
	},
	"AMAZON.CancelIntent": function() {
		this.response.speak(EXIT_SKILL_MESSAGE);
		this.emit(':responseReady');
	},
	"AMAZON.StartOverIntent": function() {
		this.handler.state = states.SEARCHMODE;
		var output = "Ok, starting over. " + getGenericHelpMessage(data);
		this.response.speak(output).listen(output);
		this.emit(':responseReady');
	},
	"SessionEndedRequest": function() {
		this.emit("AMAZON.StopIntent");
	},
	"Unhandled": function() {
		console.log("Unhandled intent in startSearchHandlers");
		this.response.speak(SEARCH_STATE_HELP_MESSAGE).listen(SEARCH_STATE_HELP_MESSAGE);
		this.emit(':responseReady');
	}
});
let multipleSearchResultsHandlers = Alexa.CreateStateHandler(states.MULTIPLE_RESULTS, {

	"AMAZON.StartOverIntent": function() {
		this.handler.state = states.SEARCHMODE;
		var output = "Ok, starting over. " + getGenericHelpMessage(data);
		this.response.speak(output).listen(output);
		this.emit(':responseReady');
	},
	"AMAZON.YesIntent": function() {
		var output = "Hmm. I think you said - yes, but can you please say the name of the person you'd like to learn more about?";
		this.response.speak(output).listen(output);
		this.emit(':responseReady');
	},
	"AMAZON.NoIntent": function() {
		this.response.speak(SHUTDOWN_MESSAGE);
		this.emit(':responseReady');
	},
	"AMAZON.RepeatIntent": function() {
		this.response.speak(this.attributes.lastSearch.lastSpeech).listen(this.attributes.lastSearch.lastSpeech);
		this.emit(':responseReady');
	},
	"SearchByNameIntent": function() {
		let slots = this.event.request.intent.slots;
		let firstName = isSlotValid(this.event.request, "firstName");
		let lastName = isSlotValid(this.event.request, "lastName");
		let cityName = isSlotValid(this.event.request, "cityName");
		let infoType = isSlotValid(this.event.request, "infoType");

		console.log("firstName:" + firstName);
		console.log("firstName:" + lastName);
		console.log("firstName:" + cityName);
		console.log("firstName:" + infoType);
		console.log("Intent Name:" + this.event.request.intent.name);

		let canSearch = figureOutWhichSlotToSearchBy(firstName,lastName,cityName);
		console.log("Multiple results found. canSearch is set to = " + canSearch);
		let speechOutput;

		if (canSearch)
			var searchQuery = slots[canSearch].value;
		var searchResults = searchDatabase(this.attributes.lastSearch.results, searchQuery, canSearch);
		var lastSearch;
		var output;

		if (searchResults.count > 1) { //multiple results found again
			console.log("multiple results were found again");
			this.handler.state = states.MULTIPLE_RESULTS;
			output = this.attributes.lastSearch.lastSpeech;
			this.response.speak(output).listen(output);
		} else if (searchResults.count == 1) { //one result found
			this.attributes.lastSearch = searchResults;
			lastSearch = this.attributes.lastSearch;
			this.handler.state = states.DESCRIPTION;
			output = generateSearchResultsMessage(searchQuery,searchResults.results);
			this.attributes.lastSearch.lastSpeech = output;
			this.response.speak(output).listen(output);

		} else { //no match found
			lastSearch = this.attributes.lastSearch;
			let listOfPeopleFound = loopThroughArrayOfObjects(lastSearch.results);
			speechOutput = MULTIPLE_RESULTS_STATE_HELP_MESSAGE + ", " + listOfPeopleFound;
			this.response.speak(speechOutput).listen(speechOutput);
		}
		this.emit(':responseReady');
	},
	"SearchByCityIntent": function() {
		this.handler.state = states.SEARCHMODE;
		this.emitWithState("SearchByCityIntent");
	},
	"AMAZON.HelpIntent": function() {
		this.response.speak(MULTIPLE_RESULTS_STATE_HELP_MESSAGE).listen(MULTIPLE_RESULTS_STATE_HELP_MESSAGE);
		this.emit(':responseReady');
	},
	"AMAZON.StopIntent": function() {
		this.response.speak(EXIT_SKILL_MESSAGE);
		this.emit(':responseReady');
	},
	"AMAZON.CancelIntent": function() {
		this.response.speak(EXIT_SKILL_MESSAGE);
		this.emit(':responseReady');
	},
	"SessionEndedRequest": function() {
		this.emit("AMAZON.StopIntent");
	},
	"Unhandled": function() {
		console.log("Unhandled intent in multipleSearchResultsHandlers");
		this.response.speak(MULTIPLE_RESULTS_STATE_HELP_MESSAGE).listen(MULTIPLE_RESULTS_STATE_HELP_MESSAGE);
		this.emit(':responseReady');
	}
});
let descriptionHandlers = Alexa.CreateStateHandler(states.DESCRIPTION, {
	"TellMeMoreIntent": function() {
		let person;
		let speechOutput;
		let repromptSpeech;
		let cardContent;

		if(this.attributes.lastSearch){
			person = this.attributes.lastSearch.results[0];
			cardContent = generateCard(person); //calling the helper function to generate the card content that will be sent to the Alexa app.
			speechOutput = generateTellMeMoreMessage(person);
			repromptSpeech = "Would you like to find another evangelist? Say yes or no";

			console.log("the contact you're trying to find more info about is " + person.firstName);
			this.handler.state = states.SEARCHMODE;
			this.attributes.lastSearch.lastSpeech = speechOutput;
			this.response.cardRenderer(cardContent.title, cardContent.body, cardContent.image);
			this.response.speak(speechOutput).listen(repromptSpeech);
		}
		else{
			speechOutput = getGenericHelpMessage(data);
			repromptSpeech = getGenericHelpMessage(data);
			this.handler.state = states.SEARCHMODE;
			this.response.speak(speechOutput).listen(repromptSpeech);
		}

		this.emit(':responseReady');
	},
	"TellMeThisIntent": function() {
		let slots = this.event.request.intent.slots;
		let person = this.attributes.lastSearch.results[0];
		let infoType = isSlotValid(this.event.request, "infoType");
		let speechOutput;
		let repromptSpeech;
		let cardContent;

		console.log(isInfoTypeValid("github"));

		if(this.attributes.lastSearch && isInfoTypeValid(infoType)){
			person =  this.attributes.lastSearch.results[0];
			cardContent = generateCard(person);
			speechOutput = generateSpecificInfoMessage(slots,person);
			repromptSpeech = "Would you like to find another evangelist? Say yes or no";
			this.handler.state = states.SEARCHMODE;
			this.attributes.lastSearch.lastSpeech = speechOutput;
			this.response.cardRenderer(cardContent.title, cardContent.body, cardContent.image);
			this.response.speak(speechOutput).listen(repromptSpeech);
		} else {
			//not a valid slot. no card needs to be set up. respond with simply a voice response.
			speechOutput = generateSearchHelpMessage(person.gender);
			repromptSpeech = "You can ask me - what's " + genderize("his-her", person.gender) + " twitter, or give me " + genderize("his-her", person.gender) + " git-hub username";
			this.attributes.lastSearch.lastSpeech = speechOutput;
			this.handler.state = states.SEARCHMODE;
			this.response.speak(speechOutput).listen(repromptSpeech);
		}
		this.emit(':responseReady');
	},
	"SearchByNameIntent": function() {
		searchByNameIntentHandler.call(this);
	},
	"SearchByCityIntent": function() {
		searchByCityIntentHandler.call(this);
	},
	"AMAZON.HelpIntent": function() {
		var person = this.attributes.lastSearch.results[0];
		this.response.speak(generateNextPromptMessage(person,"current")).listen(generateNextPromptMessage(person,"current"));
		this.emit(':responseReady');
	},
	"AMAZON.StopIntent": function() {
		this.response.speak(EXIT_SKILL_MESSAGE);
		this.emit(':responseReady');
	},
	"AMAZON.CancelIntent": function() {
		this.response.speak(EXIT_SKILL_MESSAGE);
		this.emit(':responseReady');
	},
	"AMAZON.NoIntent": function() {
		this.response.speak(SHUTDOWN_MESSAGE);
		this.emit(':responseReady');
	},
	"AMAZON.YesIntent": function() {
		this.emit("TellMeMoreIntent");
	},
	"AMAZON.RepeatIntent": function() {
		this.response.speak(this.attributes.lastSearch.lastSpeech).listen(this.attributes.lastSearch.lastSpeech);
		this.emit(':responseReady');
	},
	"AMAZON.StartOverIntent": function() {
		this.handler.state = states.SEARCHMODE;
		var output = "Ok, starting over. " + getGenericHelpMessage(data);
		this.response.speak(output).listen(output);
		this.emit(':responseReady');
	},
	"SessionEndedRequest": function() {
		this.emit("AMAZON.StopIntent");
	},
	"Unhandled": function() {
		let person = this.attributes.lastSearch.results[0];
		console.log("Unhandled intent in DESCRIPTION state handler");
		this.response.speak("Sorry, I don't know that" + generateNextPromptMessage(person,"general"))
		.listen("Sorry, I don't know that" + generateNextPromptMessage(person,"general"));
		this.emit(':responseReady');
	}
});

// ------------------------- END of Intent Handlers  ---------------------------------

function searchDatabase(dataset, searchQuery, searchType) {
	let matchFound = false;
	let results = [];

	//beginning search
	for (let i = 0; i < dataset.length; i++) {
		if (sanitizeSearchQuery(searchQuery) == dataset[i][searchType]) {
			results.push(dataset[i]);
			matchFound = true;
		}
		if ((i == dataset.length - 1) && (matchFound == false)) {
			//this means that we are on the last record, and no match was found
			matchFound = false;
			console.log("no match was found using " + searchType);
			//if more than searchable items were provided, set searchType to the next item, and set i=0
			//ideally you want to start search with lastName, then firstname, and then cityName
		}
	}
	return {
		count: results.length,
		results: results
	};
}

function figureOutWhichSlotToSearchBy(firstName,lastName,cityName) {
	if (lastName){
		console.log("search by lastName");
		return "lastName";
	}
	else if (!lastName && firstName){
		console.log("search by firstName");
		return "firstName";
	}
	else if (!lastName && !firstName && cityName){
		console.log("search by cityName");
		return "cityName";
	}
	else{
		console.log("no valid slot provided. can't search.");
		return false;
	}
}

function searchByNameIntentHandler(){
	let firstName = isSlotValid(this.event.request, "firstName");
	let lastName = isSlotValid(this.event.request, "lastName");
	let cityName = isSlotValid(this.event.request, "cityName");
	let infoType = isSlotValid(this.event.request, "infoType");

	let canSearch = figureOutWhichSlotToSearchBy(firstName,lastName,cityName);
	console.log("canSearch is set to = " + canSearch);

	if (canSearch){
		var searchQuery = this.event.request.intent.slots[canSearch].value;
		var searchResults = searchDatabase(data, searchQuery, canSearch);

		//saving lastSearch results to the current session
		var lastSearch = this.attributes.lastSearch = searchResults;
		var output;

		//saving last intent to session attributes
		this.attributes.lastSearch.lastIntent = "SearchByNameIntent";

		if (searchResults.count > 1) { //multiple results found
			console.log("Search complete. Multiple results were found");
			let listOfPeopleFound = loopThroughArrayOfObjects(lastSearch.results);
			output = generateSearchResultsMessage(searchQuery,searchResults.results) + listOfPeopleFound + ". Who would you like to learn more about?";
			this.handler.state = states.MULTIPLE_RESULTS; // change state to MULTIPLE_RESULTS
			this.attributes.lastSearch.lastSpeech = output;
			this.response.speak(output).listen(output);
		} else if (searchResults.count == 1) { //one result found
			this.handler.state = states.DESCRIPTION; // change state to description
			console.log("one match was found");
			if (infoType) {
				//if a specific infoType was requested, redirect to specificInfoIntent
				console.log("infoType was provided as well");
				this.emitWithState("TellMeThisIntent");
			}
			else{
				console.log("no infoType was provided.");
				output = generateSearchResultsMessage(searchQuery,searchResults.results);
				this.attributes.lastSearch.lastSpeech = output;
				this.response.speak(output).listen(output);
			}
		}
		else{//no match found
			console.log("no match found");
			console.log("searchQuery was  = " + searchQuery);
			console.log("searchResults.results was  = " + searchResults);
			output = generateSearchResultsMessage(searchQuery,searchResults.results);
			this.attributes.lastSearch.lastSpeech = output;
			// this.emit(":ask", generateSearchResultsMessage(searchQuery,searchResults.results));
			this.response.speak(output).listen(output);
		}
	}
	else {
		console.log("no searchable slot was provided");
		console.log("searchQuery was  = " + searchQuery);
		console.log("searchResults.results was  = " + searchResults);

		this.response.speak(generateSearchResultsMessage(searchQuery,false)).listen(generateSearchResultsMessage(searchQuery,false));
	}

	this.emit(':responseReady');
}

function searchByCityIntentHandler(){
	var slots = this.event.request.intent.slots;
	var cityName = isSlotValid(this.event.request, "cityName");

	if (cityName){
		var searchQuery = slots.cityName.value;
		console.log("will begin search with  " + slots.cityName.value + " in cityName");
		var searchResults = searchDatabase(data, searchQuery, "cityName");

		//saving lastSearch results to the current session
		let lastSearch = this.attributes.lastSearch = searchResults;
		let output;

		//saving last intent to session attributes
		this.attributes.lastSearch.lastIntent = "SearchByNameIntent";

		if (searchResults.count > 1) { //multiple results found
			console.log("Search completed by city. Multiple results were found");
			let listOfPeopleFound = loopThroughArrayOfObjects(lastSearch.results);
			output = generateSearchResultsMessage(searchQuery,searchResults.results) + listOfPeopleFound + ". Who would you like to learn more about?";
			this.handler.state = states.MULTIPLE_RESULTS; // change state to MULTIPLE_RESULTS
			this.attributes.lastSearch.lastSpeech = output;
			this.response.speak(output).listen(output);
		} else if (searchResults.count == 1) { //one result found
			console.log("one match found");
			this.handler.state = states.DESCRIPTION; // change state to description
			output = generateSearchResultsMessage(searchQuery,searchResults.results);
			this.attributes.lastSearch.lastSpeech = output;
			// this.emit(":ask", generateSearchResultsMessage(searchQuery,searchResults.results));
			this.response.speak(output).listen(output);

		}
		else{//no match found
			console.log("no match found");
			console.log("searchQuery was  = " + searchQuery);
			console.log("searchResults.results was  = " + searchResults);
			output = generateSearchResultsMessage(searchQuery,searchResults.results);
			this.attributes.lastSearch.lastSpeech = output;
			// this.emit(":ask", generateSearchResultsMessage(searchQuery,searchResults.results));
			this.response.speak(output).listen(output);

		}
	}
	else {
		console.log("no searchable slot was provided");
		console.log("searchQuery was  = " + searchQuery);
		console.log("searchResults.results was  = " + searchResults);

		this.response.speak(generateSearchResultsMessage(searchQuery,false)).listen(generateSearchResultsMessage(searchQuery,false));
	}

	this.emit(':responseReady');

}

function searchByInfoTypeIntentHandler(){
	var slots = this.event.request.intent.slots;
	var firstName = isSlotValid(this.event.request, "firstName");
	var lastName = isSlotValid(this.event.request, "lastName");
	var cityName = isSlotValid(this.event.request, "cityName");
	var infoType = isSlotValid(this.event.request, "infoType");

	var canSearch = figureOutWhichSlotToSearchBy(firstName,lastName,cityName);
	console.log("canSearch is set to = " + canSearch);

	if (canSearch){
		var searchQuery = slots[canSearch].value;
		var searchResults = searchDatabase(data, searchQuery, canSearch);

		//saving lastSearch results to the current session
		var lastSearch = this.attributes.lastSearch = searchResults;
		var output;

		//saving last intent to session attributes
		this.attributes.lastSearch.lastIntent = "SearchByNameIntent";

		if (searchResults.count > 1) { //multiple results found
			console.log("multiple results were found");
			let listOfPeopleFound = loopThroughArrayOfObjects(lastSearch.results);
			output = generateSearchResultsMessage(searchQuery,searchResults.results) + listOfPeopleFound + ". Who would you like to learn more about?";
			this.handler.state = states.MULTIPLE_RESULTS; // change state to MULTIPLE_RESULTS
			this.attributes.lastSearch.lastSpeech = output;
			this.response.speak(output).listen(output);
		} else if (searchResults.count == 1) { //one result found
			this.handler.state = states.DESCRIPTION; // change state to description
			console.log("one match was found");
			if (infoType) {
				//if a specific infoType was requested, redirect to specificInfoIntent
				console.log("infoType was provided as well");
				let person = this.attributes.lastSearch.results[0];
				let cardContent = generateCard(person);
				let speechOutput = generateSpecificInfoMessage(slots,person);
				let repromptSpeech = "Would you like to find another evangelist? Say yes or no";
				this.attributes.lastSearch.lastSpeech = speechOutput;
				this.handler.state = states.SEARCHMODE;
				this.response.cardRenderer(cardContent.title, cardContent.body, cardContent.image);
				this.response.speak(speechOutput).listen(repromptSpeech);
				// this.emitWithState("TellMeThisIntent");
			}
			else{
				console.log("no infoType was provided.");
				output = generateSearchResultsMessage(searchQuery,searchResults.results);
				this.attributes.lastSearch.lastSpeech = output;
				// this.emit(":ask", generateSearchResultsMessage(searchQuery,searchResults.results));
				this.response.speak(output).listen(output);
			}
		}
		else{//no match found
			console.log("no match found");
			console.log("searchQuery was  = " + searchQuery);
			console.log("searchResults.results was  = " + searchResults);
			output = generateSearchResultsMessage(searchQuery,searchResults.results);
			this.attributes.lastSearch.lastSpeech = output;
			// this.emit(":ask", generateSearchResultsMessage(searchQuery,searchResults.results));
			this.response.speak(output).listen(output);
		}
	}
	else {
		console.log("no searchable slot was provided");
		console.log("searchQuery was  = " + searchQuery);
		console.log("searchResults.results was  = " + searchResults);

		this.response.speak(generateSearchResultsMessage(searchQuery,false)).listen(generateSearchResultsMessage(searchQuery,false));
	}

	this.emit(':responseReady');

}
// =====================================================================================================
// ------------------------------- Section 3. Generating Speech Messages -------------------------------
// =====================================================================================================

function generateNextPromptMessage(person,mode){
	let infoTypes = ["git-hub username","twitter handle","linked-in"];
	let prompt;

	if (mode == "current"){
		// if the mode is current, we should give more informaiton about the current contact
		prompt = ". You can say - tell me more, or  tell me " + genderize("his-her", person.gender) + " " + infoTypes[getRandom(0,infoTypes.length-1)];
	}
	//if the mode is general, we should provide general help information
	else if (mode == "general"){
		prompt = ". " + getGenericHelpMessage(data);
	}
	return prompt;
}

function generateSendingCardToAlexaAppMessage(person,mode){
	let sentence = "I have sent " + person.firstName + "'s contact card to your Alexa app" + generateNextPromptMessage(person,mode);
	return sentence;
}

function generateSearchResultsMessage(searchQuery,results){
	let sentence;
	let details;
	let prompt;

	if (results){
		switch (true) {
		case (results.length == 0):
			sentence = "Hmm. I couldn't find " + searchQuery + ". " + getGenericHelpMessage(data);
			break;
		case (results.length == 1):
			let person = results[0];
			details = person.firstName + " " + person.lastName + " is " + person.title + ", based out of " + person.cityName;
			prompt = generateNextPromptMessage(person,"current");
			sentence = details + prompt;
			console.log(sentence);
			break;
		case (results.length > 1):
			sentence = "I found " + results.length + " matching results";
			break;
		}
	}
	else{
		sentence = "Sorry, I didn't quite get that. " + getGenericHelpMessage(data);
	}
	return sentence;
}

function getGenericHelpMessage(data){
	let sentences = ["ask - who is " + getRandomName(data),"say - find an evangelist in " + getRandomCity(data)];
	return "You can " + sentences[getRandom(0,sentences.length-1)];
}

function generateSearchHelpMessage(gender){
	let sentence = "Sorry, I don't know that. You can ask me - what's " + genderize("his-her", gender) +" twitter, or give me " + genderize("his-her", gender) + " git-hub username";
	return sentence;
}

function generateTellMeMoreMessage(person){
	let sentence = person.firstName + " joined the Alexa team in " + person.joinDate + ". " + genderize("his-her", person.gender) + " Twitter handle is " + person.saytwitter + " . " + generateSendingCardToAlexaAppMessage(person,"general");
	return sentence;
}
function generateSpecificInfoMessage(slots,person){
	let infoTypeValue;
	let sentence;

	if (slots.infoType.value == "git hub"){
		infoTypeValue = "github";
		console.log("resetting gith hub to github");
	}
	else{
		console.log("no reset required for github");
		infoTypeValue = slots.infoType.value;
	}

	sentence = person.firstName + "'s " + infoTypeValue.toLowerCase() + " is - " + person["say" + infoTypeValue.toLowerCase()] + " . Would you like to find another evangelist? " + getGenericHelpMessage(data);
	return optimizeForSpeech(sentence);
}

exports.handler = function(event, context, callback) {
	let alexa = Alexa.handler(event, context);
	alexa.appId = APP_ID;
	alexa.registerHandlers(newSessionHandlers, startSearchHandlers, descriptionHandlers, multipleSearchResultsHandlers);
	alexa.execute();
};

// =====================================================================================================
// ------------------------------------ Section 4. Helper Functions  -----------------------------------
// =====================================================================================================
// For more helper functions, visit the Alexa cookbook at https://github.com/alexa/alexa-cookbook
//======================================================================================================

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomCity(arrayOfStrings) {
	return arrayOfStrings[getRandom(0, data.length - 1)].cityName;
}

function getRandomName(arrayOfStrings) {
	let randomNumber = getRandom(0, data.length - 1);
	return arrayOfStrings[randomNumber].firstName + " " + arrayOfStrings[randomNumber].lastName;
}

function titleCase(str) {
	return str.replace(str[0], str[0].toUpperCase());
}

function generateCard(person) {
	let cardTitle = "Contact Info for " + titleCase(person.firstName) + " " + titleCase(person.lastName);
	let cardBody = "Twitter: " + "@" + person.twitter + " \n" + "GitHub: " + person.github + " \n" + "LinkedIn: " + person.linkedin;
	let imageObj = {
		smallImageUrl: "https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/team-lookup/avatars/" + person.firstName + "._TTH_.jpg",
		largeImageUrl: "https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/team-lookup/avatars/" + person.firstName + "._TTH_.jpg",
	};
	return {
		"title": cardTitle,
		"body": cardBody,
		"image": imageObj
	};
}

function loopThroughArrayOfObjects(arrayOfStrings) {
	let joinedResult = "";
	// Looping through the each object in the array
	for (let i = 0; i < arrayOfStrings.length; i++) {
		//concatenating names (firstName + lastName ) for each item
		joinedResult = joinedResult + ", " + arrayOfStrings[i].firstName + " " + arrayOfStrings[i].lastName;
	}
	return joinedResult;
}

function genderize(type, gender) {
	let pronouns ={
		"m":{"he-she":"he","his-her":"his","him-her":"him"},
		"f":{"he-she":"she","his-her":"her","him-her":"her"}
	};
	return pronouns[gender][type];
}

function sanitizeSearchQuery(searchQuery){
	searchQuery = searchQuery.replace(/’s/g, "").toLowerCase();
	searchQuery = searchQuery.replace(/'s/g, "").toLowerCase();
	return searchQuery;
}

function optimizeForSpeech(str){
	let optimizedString = str.replace("github","git-hub");
	return optimizedString;
}

function isSlotValid(request, slotName){
	let slot = request.intent.slots[slotName];
	//console.log("request = "+JSON.stringify(request)); //uncomment if you want to see the request
	let slotValue;

	//if we have a slot, get the text and store it into speechOutput
	if (slot && slot.value) {
		//we have a value in the slot
		slotValue = slot.value.toLowerCase();
		return slotValue;
	} else {
		//we didn't get a value in the slot.
		return false;
	}
}

function isInArray(value, array) {
	return array.indexOf(value) > -1;
}

function isInfoTypeValid(infoType){
	let validTypes = ["git hub","github","twitter","linkedin"];
	return isInArray(infoType,validTypes);
}
