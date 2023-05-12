import { useContext } from 'react';
import { TranslationsContext } from '../context/translationsContext';

function Idioms() {
  const { currentLanguage, translations } = useContext(TranslationsContext);
  const t = translations[currentLanguage];

  return (
    <main className="container p-4">
      <p>{t.IdiomsIntro}</p>
      <hr className="bg-primary h-[2px] border-0 my-2" />
      <h2 className="text-xl mt-6 font-bold">British English</h2>
      <hr className="bg-secondary h-[2px] border-0 my-2" />
      <ul className="list-decimal ml-4">
        <li className="pl-1 mt-2">
          <p className="font-bold">Bob&apos;s your uncle</p>
          <p>{t.britishIdiomsBobsYourUncle}</p>
          <p className="text-info-content italic pl-2">
            Simply mix all the ingredients together, bake in the oven for 30
            minutes, and Bob&apos;s your uncle - you&apos;ve got a delicious
            homemade cake!
          </p>
        </li>
        <li className="pl-1 mt-2">
          <p className="font-bold">Add another string to your bow</p>
          <p>{t.britishIdiomsAddAnotherString}</p>
          <p className="text-info-content italic pl-2">
            After working as a graphic designer for several years, Jane decided
            to add another string to her bow and took a course in web
            development.
          </p>
        </li>
        <li className="pl-1 mt-2">
          <p className="font-bold">That went down a treat</p>
          <p>{t.britishIdiomsThatWentDown}</p>
          <p className="text-info-content italic pl-2">
            After the game, we all went to the pub and had some burgers and
            beers, and it went down a treat.
          </p>
        </li>
        <li className="pl-1 mt-2">
          <p className="font-bold">Not my cup of tea</p>
          <p>{t.britishIdiomsNotMyCup}</p>
          <p className="text-info-content italic pl-2">
            I know some people love spicy food, but it&apos;s just not my cup of
            tea.
          </p>
        </li>
        <li className="pl-1 mt-2">
          <p className="font-bold">
            I haven&apos;t done/heard that in donkey&apos;s years
          </p>
          <p>{t.britishIdiomsDonkeysYears}</p>
          <p className="text-info-content italic pl-2">
            I ran into an old friend at the supermarket yesterday. We
            hadn&apos;t seen each other in donkey&apos;s years!
          </p>
        </li>
      </ul>
      <h2 className="text-xl mt-6 font-bold">American English</h2>
      <hr className="bg-secondary h-[2px] border-0 my-2" />
      <ul className="list-decimal ml-4">
        <li className="pl-1 mt-2">
          <p className="font-bold">Get your ducks in a row</p>
          <p>{t.americanIdiomsGetYourDucks}</p>
          <p className="text-info-content italic pl-2">
            Before presenting the proposal to the investors, we need to get our
            ducks in a row and make sure all the details are sorted out.
          </p>
        </li>
        <li className="pl-1 mt-2">
          <p className="font-bold">Out of your league</p>
          <p>{t.americanIdiomsOutOfYourLeague}</p>
          <p className="text-info-content italic pl-2">
            That project is way out of our league, we don&apos;t have the
            expertise or the resources to handle it.
          </p>
        </li>
        <li className="pl-1 mt-2">
          <p className="font-bold">Bare bones</p>
          <p>{t.americanIdiomsBareBones}</p>
          <p className="text-info-content italic pl-2">
            The presentation was just the bare bones, they didn&apos;t go into
            much detail.
          </p>
        </li>
        <li className="pl-1 mt-2">
          <p className="font-bold">Jump on the bandwagon</p>
          <p>{t.americanIdiomsJumpOnTheBandwagon}</p>
          <p className="text-info-content italic pl-2">
            When a new trend emerges, people are quick to jump on the bandwagon
            and try it out.
          </p>
        </li>
        <li className="pl-1 mt-2">
          <p className="font-bold">Up my alley</p>
          <p>{t.americanIdiomsUpMyAlley}</p>
          <p className="text-info-content italic pl-2">
            I love spicy food, so this new restaurant is right up my alley.
          </p>
        </li>
      </ul>
    </main>
  );
}

export default Idioms;
