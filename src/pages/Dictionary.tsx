import { useState } from 'react';
import { CleanedDictionary, WordResponse } from '../types/Word';
import cleanApiData from '../utils/cleanApiData';
import Pronunciation from '../components/Pronunciation';
import capitalize from '../utils/utils';
import DictionaryDefinitions from '../components/DictionaryDefintions';
// import bannerImg from '../assets/us-flags.jpg';

function Dictionary() {
  const [searchedWord, setSearchedWord] = useState('');
  const [data, setData] = useState<CleanedDictionary | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async (word: string) => {
    setIsLoading(true);
    setData(null);
    setErr('');

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result: WordResponse[] = await response.json();

      setData(cleanApiData(result[0]));
    } catch (e) {
      if (e instanceof Error) {
        setErr(`Couldnt find this word`);
      }
    } finally {
      setIsLoading(false);
      setSearchedWord('');
    }
  };

  return (
    <main className="container p-4">
      <div className="max-w-xl mx-auto relative">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full pr-12"
          onChange={(e) => {
            setSearchedWord(e.target.value);
          }}
          value={searchedWord}
        />
        <button
          type="button"
          className="btn btn-ghost btn-square absolute right-0"
          onClick={() => handleClick(searchedWord)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        {isLoading && <p className="text-center mt-4">Loading..</p>}
        {err && <p className="text-center mt-4">{err}</p>}
      </div>
      {data ? (
        <section className="my-4">
          <h2 className="text-2xl font-bold mb-4">{capitalize(data.word)}</h2>
          <div className="flex items-center gap-2 my-2">
            {data.phonetics.map((p) => (
              <Pronunciation
                audioSrc={p.audio}
                lang={p.locale}
                key={p.key}
                text={p.text}
              />
            ))}
          </div>
          <hr className="bg-primary h-[2px] border-0 my-2" />
          <div>
            {data.meanings.map((meaning) => {
              return (
                <div key={meaning.key}>
                  <p className="font-bold mt-4 text-lg">
                    {meaning.partOfSpeech}
                  </p>
                  <hr className="bg-secondary h-[2px] border-0 my-2 opacity-80" />
                  <DictionaryDefinitions definitions={meaning.definitions} />
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        !isLoading &&
        !err && (
          <p className="text-center mt-4">
            Search for a word to get its definitions and pronunciations
          </p>
        )
      )}
    </main>
  );
}

export default Dictionary;
