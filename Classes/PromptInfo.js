var fs = require("fs");

/**
* Object containing interface prompt information.
* @class
* @prop {string} this.text
* @prop {number} this.usages
* @prop {boolean} this.active
* @see Interface
*/
class PromptInfo {
	
	/**
	* Instantiates a PromptInfo object.
	* @constructor
	*/
	constructor()
	{
		this.text = "Input a command";
		this.usages = 0;
		this.active = true;
	}

	/**
	* Return the number of times this prompt has been used.
	* @returns {number} Usage count
	*/
	getUseTimes()
	{
		// Return the amount of uses.
		return this.usages;
	}
	
	/**
	* Returns the text contained in the prompt.
	* @returns {string} Current prompt text
	*/
	getPrompt()
	{
		// Return the current text.
		return this.text;
	}
	
	/**
	* Sets the text within the prompt.
	* @param {string} text - Text to be set in the prompt
	*/
	setText(text)
	{
		this.text = text;
		fs.writeFileSync("data/savedData.json", JSON.stringify({ "text" : this.text }));
	}
	
	/**
	* Returns whether the prompt is active or not.
	* @returns {boolean} Current prompt activity
	*/
	isActive()
	{
		return this.active;
	}
	
}

module.exports = PromptInfo;
