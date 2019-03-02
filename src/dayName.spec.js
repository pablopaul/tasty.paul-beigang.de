import dayName from './dayName';

it('returns the name of the week for the given day number', () => {
  expect(dayName(6)).toEqual('Samstag');
  expect(dayName(1)).toEqual('Montag');
});
