export default function(state = {}, action) {
  switch(action.type) {
  case 'TEST':
    return action.test;
  }
  return state
}
