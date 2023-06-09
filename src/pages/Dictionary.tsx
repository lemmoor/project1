import { useContext, useState } from 'react';
import { CleanedDictionary, WordResponse } from '../types/Word';
import cleanApiData from '../utils/cleanApiData';
import Pronunciation from '../components/Pronunciation';
import capitalize from '../utils/utils';
import DictionaryDefinitions from '../components/DictionaryDefintions';
import { TranslationsContext } from '../context/translationsContext';
import Footer from '../components/Footer';

function Dictionary() {
  const [searchedWord, setSearchedWord] = useState('');
  const [data, setData] = useState<CleanedDictionary | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');
  const { currentLanguage, translations } = useContext(TranslationsContext);
  const t = translations[currentLanguage];

  const fetchWord = async (word: string) => {
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
        setErr(`Couldn't find this word`);
      }
    } finally {
      setIsLoading(false);
      setSearchedWord('');
    }
  };

  return (
    <>
      <main className="container p-4 min-h-[calc(100vh-13.5rem)] my-4">
        <div className="max-w-xl mx-auto relative">
          <input
            type="text"
            placeholder={t.search}
            className="input input-bordered w-full pr-12"
            onChange={(e) => {
              setSearchedWord(e.target.value);
            }}
            value={searchedWord}
          />
          <button
            type="button"
            className="btn btn-ghost btn-square absolute right-0"
            onClick={() => fetchWord(searchedWord)}
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
          {err && <p className="text-center mt-4">{t.couldntFindWord}</p>}
        </div>
        {
          data ? (
            <section className="my-4">
              <h2 className="text-2xl font-bold mb-4">
                {capitalize(data.word)}
              </h2>
              <div className="flex items-center gap-2 m-2">
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
                      <DictionaryDefinitions
                        definitions={meaning.definitions}
                      />
                    </div>
                  );
                })}
              </div>
            </section>
          ) : null
          // ) : (
          //   !isLoading &&
          //   !err && <p className="text-center mt-4">{t.dictionatyMessage}</p>
          // )
        }
      </main>
      <Footer
        sourcesLinks={[
          { title: 'Dictionary API', link: 'https://dictionaryapi.dev/' },
        ]}
      ></Footer>
    </>
  );
}

export default Dictionary;
