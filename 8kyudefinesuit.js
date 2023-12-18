/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'*/
function defineSuit(card) {
  let c = 'clubs'
  let d = 'diamonds'
  let h = 'hearts'
  let s = 'spades'
  
  let split = card.split('')
  
  switch (split[split.length-1]) {
      case '♣':
        return c
      case '♦':
        return d
      case '♥':
        return h
      case '♠':
        return s
      default:
        'Not a suit.'
  }
}