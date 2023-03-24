export function getFirstName(fullName: string): string {
  const [ firstName ] = fullName.split(' ');

  return firstName;
}