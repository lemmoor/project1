import { useState } from 'react';
import { WordResponce } from '../types/Word';

function Dictionary() {
  const [searchedWord, setSearchedWord] = useState('');
  const [data, setData] = useState<WordResponce | null>(null);
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

      const result: WordResponce[] = await response.json();

      setData(result[0]);
    } catch (e) {
      if (e instanceof Error) {
        setErr(`Couldnt find this word`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="container">
      <h1 className="font-bold text-3xl text-center">Search for words</h1>
      <div className="max-w-md relative">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full pr-12"
          onChange={(e) => {
            setSearchedWord(e.target.value);
          }}
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
        {data && (
          <p>
            {data.word} <br /> {data.meanings[0].definitions[0].definition}
            <br />
            {data.phonetics[3].text} <br />
            {data.phonetic}
          </p>
        )}
        {isLoading && <p>Loading..</p>}
        {err && <p>{err}</p>}
      </div>
    </main>
  );
}

export default Dictionary;
