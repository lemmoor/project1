export interface CleanedDictionary {
  word: string;
  phonetics: Audio[];
  phonetic: string;
  meanings: Meaning[];
}

export interface Audio {
  audio: string;
  locale: string;
  text: string;
  key: number;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  key: number;
}

export interface Definition {
  definition: string;
  example?: string;
  key: number;
}

export interface WordResponse {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: ApiMeaning[];
  license: License;
  sourceUrls: string[];
}

export interface License {
  name: string;
  url: string;
}

export interface ApiMeaning extends Meaning {
  synonyms: string[];
  antonyms: string[];
  definitions: ApiDefinition[];
}

export interface ApiDefinition extends Definition {
  synonyms: string[];
  antonyms: string[];
}

export interface Phonetic {
  text: string;
  audio: string;
  sourceUrl?: string;
  license?: License;
}
