import dayName from './dayName';

it('returns the name of the week for the given day number', () => {
  expect(dayName(0)).toEqual('Sonntag');
  expect(dayName(1)).toEqual('Montag');
  expect(dayName(6)).toEqual('Samstag');
});
