export type Person = {
  name: string;
  sex: 'Male' | 'Female' | 'Other' | undefined;
  age: number;
  occupation?: string;
  id?: number;
};
