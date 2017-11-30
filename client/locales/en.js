/*
 * Is responsible for storing the english texts.
 * TODO: move to a shared folder.
 */
const intl = {
  defaultLocale: 'en',
  locale: 'en',
  messages: {
    'app.forms.vote.no': 'No',
    'app.forms.vote.yes': 'Yes',
    'app.text.answer.nobodyVoted': 'Looks like nobody voted yet today.',
    'app.text.answer.singleWord.no': 'No.',
    'app.text.answer.singleWord.unknown': '??',
    'app.text.answer.singleWord.yes': 'Yes!',
    'app.text.answer.voteFirst': 'Be the first to vote!',
    'app.text.answer.voteTomorrow': 'You can vote only once per day. Come back tomorrow and spread the word!',
    'app.text.answer.voteToo': 'Vote too!',
    'app.text.answer.webVoted': 'The web voted so in %{percentVoted} of times.',
    'app.text.answer.webVotedEqually': 'The web voted 50/50.',
    'app.text.contact': 'For partnership please contact Fyodor at ',
    'app.text.question': 'Should I buy Ƀ today?',
    'app.text.takeCare': 'Warning: investing is a risk. This website is not responsible for any losses.',
  },
}

export default intl
