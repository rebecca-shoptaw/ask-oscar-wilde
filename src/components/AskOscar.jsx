"use strict";
exports.__esModule = true;
//more quotes here: https://www.wilde-online.info/miscellaneous-aphorisms-page3.html
/* improvements (other than running tests):
- implement the "oh no predicament?" option
- set max width
- remove borders
- darken bg?
- make enter submit also
- mess with styling, button, etc.
*/
var react_1 = require("react");
var quotesArr = [
    "The mystery of love is greater than the mystery of death.",
    "Women are made to be loved, not to be understood.",
    "It is absurd to have a hard and fast rule about what one should read and what one shouldn't. More than half of modern culture depends on what one shouldn't read.",
    "Women, as someone says, love with their ears, just as men love with their eyes, if they ever love at all.",
    "It is better to be beautiful than to be good, but it is better to be good than to be ugly.",
    "Nothing looks so like innocence as an indiscretion.",
    "Misfortunes one can endure, they come from outside, they are accidents. But to suffer for one's faults\u2014ah! there is the sting of life.",
    "Beauty is the only thing that time cannot harm. Philosophies fall away like sand, creeds follow one another, but what is beautiful is a joy for all seasons, a possession for all eternity.",
    "Questions are never indiscreet; answers sometimes are.",
    "Twenty years of romance make a woman look like a ruin; but twenty years of marriage make her something like a public building.",
    "The only thing that one really knows about human nature is that it changes.",
    "Anyone can sympathise with the sufferings of a friend, but it requires a very fine nature to sympathise with a friend's success.",
    "Selfishness is not living as one wishes to live, it is asking others to live as one wishes to live: and unselfishness is letting other people's lives alone, not interfering with them.",
    "A man who does not think for himself does not think at all.",
    "Nowadays people seem to look on life as a speculation. It is not a speculation. It is a sacrament. Its ideal is love. Its purification is sacrifice.",
    "In old days nobody pretended to be a bit better than his neighbour. In fact, to be a bit better than one's neighbour was considered excessively vulgar and middle class. Nowadays, with our modern mania for morality, everyone has to pose as a paragon of purity, incorruptibility, and all the other seven deadly virtues. And what is the result? You all go over like ninepins\u2014one after the other.",
    "All sympathy is fine, but sympathy with suffering is the least fine mode.",
    "If you pretend to be good the world takes you very seriously. If you pretend to be bad it doesn't. Such is the astounding stupidity of optimism.",
    "It is most dangerous nowadays for a husband to pay any attention to his wife in public. It always makes people think that he beats her when they're alone. The world has grown so suspicious of anything that looks like a happy married life.",
    "Actors are so fortunate. They can choose whether they will appear in tragedy or in comedy, whether they will suffer or make merry, laugh or shed tears. But in real life it is different. Most men and women are forced to perform parts for which they have no qualifications. The world is a stage, but the play is badly cast.",
    "Men know life too early; women know life too late-that is the difference between men and women.",
    "He who stands most remote from his age is he who mirrors it best.",
    "There is only one thing in the world worse than being talked about, and that is not being talked about.",
    "Life is not governed by will or intention. Life is a question of nerves and fibres and slowly built-up cells, in which thought hides itself and passion has its dreams.",
    "Man is a being with myriad lives and myriad sensations, a complex, multiform creature that bears within itself strange legacies of thought and passion, and whose very flesh is tainted with the monstrous maladies of the dead.",
    "As long as a woman can look ten years younger than her own daughter she is perfectly satisfied.",
    "There is always something infinitely mean about other people's tragedies.",
    "Public and private life are different things. They have different laws and move on different lines.",
    "When one is placed in the position of guardian one has to adopt a very high moral tone on all subjects. It's one's duty to do so.",
    "I have always been of opinion that a man who desires to get married should know either everything or nothing.",
    "An engagement should come on a young girl as a surprise, pleasant or unpleasant, as the case may be. It is hardly a matter that she could be allowed to arrange for herself.",
    "If the lower classes don't set us a good example what on earth is the use of them? They seem, as a class, to have absolutely no sense of moral responsibility.",
    "If a woman cannot make her mistakes charming she is only a female.",
    "The world was made for men and not for women.",
    "It is always with the best intentions that the worst work is done.",
    "If you wish to understand others you must intensify your own individualism.",
    "I think that life is far too important a thing ever to talk seriously about it.",
    "What a pity that in life we only get our lessons when they are of no use to us.",
    "It is better to have a permanent income than to be fascinating.",
    "Morality is simply the attitude we adopt towards people whom we personally dislike.",
    "Relations are simply a tedious pack of people who haven't got the remotest knowledge of how to live nor the smallest instinct about when to die.",
    "Charity creates a multitude of sins.",
    "My experience is that as soon as people are old enough to know better they don't know anything at all.",
    "Truth is a very complex thing and politics is a very complex business. There are wheels within wheels. One may be under certain obligations to people that one must pay. Sooner or later in political life one has to compromise. Everyone does.",
    "The proper basis for marriage is a mutual misunderstanding.",
    "The one advantage of playing with fire is that one never gets even singed. It is the people who don't know how to play with it who get burned up.",
    "There are moments when one has to choose between living one's own life fully, entirely, completely, or dragging out some false, shallow, degrading existence that the world in its hypocrisy demands.",
    "When one is in town one amuses oneself. When one is in the country one amuses other people. It is excessively boring.",
    "Romance is the privilege of the rich, not the profession of the unemployed. The poor should be practical and prosaic.",
    "An acquaintance that begins with a compliment is sure to develop into a real friendship. It starts in the right manner.",
    "The truths of metaphysics are the truths of masks.",
    "Science can never grapple with the irrational. That is why it has no future before it in this world.",
    "The happy people of the world have their value, but only the negative value of foils. They throw up and emphasise the beauty and the fascination of the unhappy.",
    "Experience is simply the name we give our mistakes.",
];
var AskOscar = function () {
    var _a = (0, react_1.useState)(""), input = _a[0], setInput = _a[1];
    var _b = (0, react_1.useState)("Tell me about your troubles."), quote = _b[0], setQuote = _b[1];
    var newQuote = function () {
        if (input == "") {
            setQuote("Why won't you tell me what ails you??");
        }
        else {
            setQuote(quotesArr[Math.floor(Math.random() * quotesArr.length)]);
            console.log(link);
        }
        setInput("");
    };
    var link = "https://twitter.com/intent/tweet?text=%22" +
        quote.split(" ").join("%20") +
        "%22%20Oscar%20Wilde";
    return (<div id="oscar" className="d-flex flex-column m-5 justify-content-center">
      <div id="input" className="subdiv p-4 m-3">
        <h3 className="mb-3">Submit your predicament:</h3>
        <input className="input-group input-group-sm mb-3 " onChange={function (event) { return setInput(event.target.value); }} value={input}></input>
        <button id="new-quote" className="btn btn-secondary" onClick={newQuote} type="submit">
          Submit
        </button>
      </div>
      <div id="quote-box" className="subdiv p-4 m-3  d-flex flex-column">
        <h3 className="mb-3">Here is what Oscar has to say:</h3>
        <p id="text" className="quote-text p-3">
          "{quote}"
        </p>
        <p id="author" className="align-self-end mt-3">
          - Oscar Wilde
        </p>
        <a id="tweet-quote" href={link} target="_blank">
          <img id="twit-icon" width="30" height="30" src="https://img.icons8.com/ios/50/twitter--v1.png" className="align-self-end"></img>
        </a>
      </div>
    </div>);
};
exports["default"] = AskOscar;
