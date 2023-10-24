//more quotes here: https://www.wilde-online.info/miscellaneous-aphorisms-page4.html

import { useState } from "react";

const quotesArr = [
  `The mystery of love is greater than the mystery of death.`,
  `Women are made to be loved, not to be understood.`,
  `It is absurd to have a hard and fast rule about what one should read and what one shouldn't. More than half of modern culture depends on what one shouldn't read.`,
  `Women, as someone says, love with their ears, just as men love with their eyes, if they ever love at all.`,
  `It is better to be beautiful than to be good, but it is better to be good than to be ugly.`,
  `Nothing looks so like innocence as an indiscretion.`,
  `Misfortunes one can endure, they come from outside, they are accidents. But to suffer for one's faults—ah! there is the sting of life.`,
  `Beauty is the only thing that time cannot harm. Philosophies fall away like sand, creeds follow one another, but what is beautiful is a joy for all seasons, a possession for all eternity.`,
  `Questions are never indiscreet; answers sometimes are.`,
  `Twenty years of romance make a woman look like a ruin; but twenty years of marriage make her something like a public building.`,
  `The only thing that one really knows about human nature is that it changes.`,
  `Anyone can sympathise with the sufferings of a friend, but it requires a very fine nature to sympathise with a friend's success.`,
  `Selfishness is not living as one wishes to live, it is asking others to live as one wishes to live: and unselfishness is letting other people's lives alone, not interfering with them.`,
  `A man who does not think for himself does not think at all.`,
  `Nowadays people seem to look on life as a speculation. It is not a speculation. It is a sacrament. Its ideal is love. Its purification is sacrifice.`,
  `In old days nobody pretended to be a bit better than his neighbour. In fact, to be a bit better than one's neighbour was considered excessively vulgar and middle class. Nowadays, with our modern mania for morality, everyone has to pose as a paragon of purity, incorruptibility, and all the other seven deadly virtues. And what is the result? You all go over like ninepins—one after the other.`,
  `All sympathy is fine, but sympathy with suffering is the least fine mode.`,
  `If you pretend to be good the world takes you very seriously. If you pretend to be bad it doesn't. Such is the astounding stupidity of optimism.`,
  `It is most dangerous nowadays for a husband to pay any attention to his wife in public. It always makes people think that he beats her when they're alone. The world has grown so suspicious of anything that looks like a happy married life.`,
  `Actors are so fortunate. They can choose whether they will appear in tragedy or in comedy, whether they will suffer or make merry, laugh or shed tears. But in real life it is different. Most men and women are forced to perform parts for which they have no qualifications. The world is a stage, but the play is badly cast.`,
  `Men know life too early; women know life too late-that is the difference between men and women.`,
  `He who stands most remote from his age is he who mirrors it best.`,
  `There is only one thing in the world worse than being talked about, and that is not being talked about.`,
  `Life is not governed by will or intention. Life is a question of nerves and fibres and slowly built-up cells, in which thought hides itself and passion has its dreams.`,
  `Man is a being with myriad lives and myriad sensations, a complex, multiform creature that bears within itself strange legacies of thought and passion, and whose very flesh is tainted with the monstrous maladies of the dead.`,
  `As long as a woman can look ten years younger than her own daughter she is perfectly satisfied.`,
  `There is always something infinitely mean about other people's tragedies.`,
  `Public and private life are different things. They have different laws and move on different lines.`,
  `When one is placed in the position of guardian one has to adopt a very high moral tone on all subjects. It's one's duty to do so.`,
  `I have always been of opinion that a man who desires to get married should know either everything or nothing.`,
  `An engagement should come on a young girl as a surprise, pleasant or unpleasant, as the case may be. It is hardly a matter that she could be allowed to arrange for herself.`,
  `If the lower classes don't set us a good example what on earth is the use of them? They seem, as a class, to have absolutely no sense of moral responsibility.`,
  `If a woman cannot make her mistakes charming she is only a female.`,
  `The world was made for men and not for women.`,
  `It is always with the best intentions that the worst work is done.`,
  `If you wish to understand others you must intensify your own individualism.`,
  `I think that life is far too important a thing ever to talk seriously about it.`,
  `What a pity that in life we only get our lessons when they are of no use to us.`,
  `It is better to have a permanent income than to be fascinating.`,
  `Morality is simply the attitude we adopt towards people whom we personally dislike.`,
  `Relations are simply a tedious pack of people who haven't got the remotest knowledge of how to live nor the smallest instinct about when to die.`,
  `Charity creates a multitude of sins.`,
  `My experience is that as soon as people are old enough to know better they don't know anything at all.`,
  `Truth is a very complex thing and politics is a very complex business. There are wheels within wheels. One may be under certain obligations to people that one must pay. Sooner or later in political life one has to compromise. Everyone does.`,
  `The proper basis for marriage is a mutual misunderstanding.`,
  `The one advantage of playing with fire is that one never gets even singed. It is the people who don't know how to play with it who get burned up.`,
  `There are moments when one has to choose between living one's own life fully, entirely, completely, or dragging out some false, shallow, degrading existence that the world in its hypocrisy demands.`,
  `When one is in town one amuses oneself. When one is in the country one amuses other people. It is excessively boring.`,
  `Romance is the privilege of the rich, not the profession of the unemployed. The poor should be practical and prosaic.`,
  `An acquaintance that begins with a compliment is sure to develop into a real friendship. It starts in the right manner.`,
  `The truths of metaphysics are the truths of masks.`,
  `Science can never grapple with the irrational. That is why it has no future before it in this world.`,
  `The happy people of the world have their value, but only the negative value of foils. They throw up and emphasise the beauty and the fascination of the unhappy.`,
  `There is nothing so difficult to marry as a large nose.`,
  `In this world there are only two tragedies. One is not getting what one wants, and the other is getting it. The last is much the worst—the last is a real tragedy.`,
  `Disobedience in the eyes of anyone who has read history is man's original virtue. It is through disobedience that progress has been made—through disobedience and rebellion.`,
  `It is not wise to find symbols in everything that one sees. It makes life too full of terrors.`,
  `Comfort is the only thing our civilisation can give us.`,
  `Politics are my only pleasure.`,
  `One's past is what one is. It is the only way by which people should be judged.`,
  `In a very ugly and sensible age the arts borrow, not from life, but from each other.`,
  `It is always a silly thing to give advice, but to give good advice is fatal.`,
  `Secrets from other people's wives are a necessary luxury in modern life. So, at least, I am told at the club by people who are bald enough to know better. But no man should have a secret from his own wife. She invariably finds it out. Women have a wonderful instinct about things. They discover everything except the obvious.`,
  `Life holds the mirror up to art, and either reproduces some strange type imagined by painter or sculptor or realises in fact what has been dreamed in fiction.`,
  `I feel sure that if I lived in the country for six months I should become so unsophisticated that no one would take the slightest notice of me.`,
  `To recommend thrift to the poor is both grotesque and insulting. It is like advising a man who is starving to eat less.`,
  `A thing is not necessarily true because a man dies for it.`,
  `I am always saying what I shouldn't say; in fact, I usually say what I really think—a great mistake nowadays. It makes one so liable to be misunderstood.`,
  `Experience is the name everyone gives to their mistakes.`,
  `The true perfection of man lies, not in what man has, but in what man is.`,
  `The basis of every scandal is an absolute immoral certainty.`,
  `People talk so much about the beauty of confidence. They seem to entirely ignore the much more subtle beauty of doubt. To believe is very dull. To doubt is intensely engrossing. To be on the alert is to live, to be lulled into security is to die.`,
  `Every effect that one produces gives one an enemy. To be popular one must be a mediocrity.`,
  `It is a sad truth, but we have lost the faculty of giving lovely names to things. Names are everything. I never quarrel with actions, my one quarrel is with words. That is the reason I hate vulgar realism in literature. The man who could call a spade a spade should be compelled to use one. It is the only thing he is fit for.`,
  `A high moral tone can hardly be said to conduce very much to either one's health or one's happiness.`,
  `There are terrible temptations that it requires strength—strength and courage—to yield to. To stake all one's life on one throw—whether the stake be power or pleasure I care not—there is no weakness in that. There is a horrible, a terrible, courage.`,
  `Nowadays it is only the unreadable that occurs.`,
  `All charming people are spoiled. It is the secret of their attraction.`,
  `There is more to be said for stupidity than people imagine. Personally, I have a great admiration for stupidity. It is a sort of fellow-feeling, I suppose.`,
  `All men are monsters. The only thing to do is to feed the wretches well. A good cook does wonders.`,
  `There is no such thing as an omen.`,
  `Destiny does not send us heralds. She is too wise or too cruel for that.`,
  `Crying is the refuge of plain women but the ruin of pretty ones.`,
  `Love art for its own sake and then all things that you need will be added to you. This devotion to beauty and to the creation of beautiful things is the test of all great civilisations; it is what makes the life of each citizen a sacrament and not a speculation.`,
  `It is always worth while asking a question, though it is not always answering one.`,
  `It takes a thoroughly good woman to do a thoroughly stupid thing.`,
  `With a proper background women can do anything.`,
  `Chiromancy is a most dangerous science, and one that ought not to be encouraged, except in a 'tête-à-tête.'`,
  `One should never take sides in anything. Taking sides is the beginning of sincerity, and earnestness follows shortly afterwards, and the human being becomes a bore.`,
  `A map of the world that does not include Utopia is not worth even glancing at, for it leaves out the one country at which Humanity is always landing. And when Humanity lands there, it looks out, and, seeing a better country, sets sail. Progress is the realisation of Utopias.`,
];

const AskOscar = () => {
  const [input, setInput] = useState("");
  const [quote, setQuote] = useState("Tell me about your troubles.");
  const newQuote = () => {
    if (input == "") {
      setQuote("Why won't you tell me what ails you??");
    } else {
      setQuote(quotesArr[Math.floor(Math.random() * quotesArr.length)]);
      console.log(link);
    }
  };
  const clearInput = () => {
    setInput("");
    setQuote("With what else may I assist you?");
    const inputElem = document.querySelector("textarea");
    if (inputElem) {
      inputElem.focus();
    }
  };

  const link =
    "https://twitter.com/intent/tweet?text=%22" +
    quote.split(" ").join("%20") +
    "%22%20Oscar%20Wilde";

  return (
    <div
      id="quote-box"
      className="d-flex flex-column m-5 justify-content-center"
    >
      <div id="input" className="subdiv p-4 m-3">
        <h3 className="mb-4">Submit your predicament:</h3>
        <textarea
          id="predicament"
          className="input-group input-group-sm mb-3 mt-1"
          onChange={(event) => setInput(event.target.value)}
          value={input}
          autoFocus
        ></textarea>
        <div id="buttons" className="d-flex flex-row flex-wrap">
          <button
            id="new-quote"
            className="btn btn-secondary"
            onClick={newQuote}
          >
            Submit
          </button>
          <button
            id="new-predicament"
            className="btn btn-secondary"
            onClick={clearInput}
          >
            New Predicament
          </button>
        </div>
      </div>
      <div id="quote" className="subdiv p-4 m-3  d-flex flex-column">
        <h3 className="mb-1">Here is what Oscar has to say:</h3>
        <p id="text" className="quote-text p-3 mb-1 mt-0">
          "{quote}"
        </p>
        <p id="author" className="align-self-end mt-0.5 mb-1">
          - Oscar Wilde
        </p>
        {/*<a id="tweet-quote" href={link} target="_blank" rel="noreferrer">
          <img
            id="twit-icon"
            width="30"
            height="30"
            src="https://img.icons8.com/ios/50/twitter--v1.png"
            className="align-self-end"
          ></img>
        </a>*/}
      </div>
      <div className="credits">
        Site design & coding by
        <a href="https://rebecca-shoptaw.github.io/" target="_blank">
          Rebecca Shoptaw
        </a>
      </div>
    </div>
  );
};

export default AskOscar;
