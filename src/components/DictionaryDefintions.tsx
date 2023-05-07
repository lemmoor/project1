import { useState } from 'react';
import { Definition } from '../types/Word';

interface DictionaryDefinitionsProps {
  definitions: Definition[];
}

function DictionaryDefinitions({ definitions }: DictionaryDefinitionsProps) {
  const [isListOpen, setIsListOpen] = useState(false);
  const n = 3;

  function showList(list: Definition[]) {
    return list.map((d) => {
      return (
        <div key={d.key}>
          <p>{d.definition}</p>
          <p className="text-info-content italic ml-2">{d.example}</p>
        </div>
      );
    });
  }

  return (
    <>
      {showList(definitions.slice(0, n))}
      {definitions.length > n && (
        <button
          type="button"
          className="btn btn-secondary btn-sm btn-wide my-2 block"
          onClick={() => setIsListOpen((prev) => !prev)}
        >
          Show {isListOpen ? 'less' : 'more'}
        </button>
      )}
      {isListOpen && showList(definitions.slice(n))}
    </>
  );
}

export default DictionaryDefinitions;
