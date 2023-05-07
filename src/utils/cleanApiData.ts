import { WordResponse, CleanedDictionary, Meaning } from '../types/Word';

export default function cleanApiData(data: WordResponse) {
  const dictionary: CleanedDictionary = {
    word: data.word,
    phonetics: [],
    phonetic: '',
    meanings: [],
  };

  if (data.phonetic !== '') dictionary.phonetic = data.phonetic;

  data.phonetics.forEach((item) => {
    if (item.audio !== '') {
      dictionary.phonetics.push({
        audio: item.audio,
        locale: item.audio
          .substring(item.audio.length - 6, item.audio.length - 4)
          .toUpperCase(),
        text: item.text,
        key: Math.random(),
      });
    }
  });

  data.meanings.forEach((item) => {
    const meaning: Meaning = {
      definitions: [],
      partOfSpeech: item.partOfSpeech,
      key: Math.random(),
    };
    item.definitions.forEach((d) => {
      meaning.definitions.push({
        definition: d.definition,
        example: d.example,
        key: Math.random(),
      });
    });
    dictionary.meanings.push(meaning);
  });
  return dictionary;
}
