export type Meaning = {
  definitions: string[];
}

export type Word = {
  word: string;
  lexicalCategory: string;
  ipa: string | null;
  meanings: Meaning[];
  id: string;
}
