import { useContext } from 'react';
import { TranslationsContext } from '../context/translationsContext';

function Vocabulary() {
  const { currentLanguage, translations } = useContext(TranslationsContext);
  const t = translations[currentLanguage];

  return (
    <main className="container p-4">
      <p>{t.SlangIntro}</p>
      <hr className="bg-primary h-[2px] border-0 my-2" />
      <h2 className="text-xl mt-6 font-bold">British English</h2>
      <hr className="bg-secondary h-[2px] border-0 my-2" />
      <ul className="list-decimal ml-4">
        <li className="pl-1 mt-2">
          <p className="font-bold">Mate</p>
          <p>{t.BritishSlangMate}</p>
          <p className="text-info-content italic pl-2">
            I&apos;m meeting up with my mate at the pub tonight.
          </p>
        </li>
        <li className="pl-1 mt-2">
          <p className="font-bold">Cheeky</p>
          <p>{t.BritishSlangCheeky}</p>
          <p className="text-info-content italic pl-2">
            She&apos;s got such a cheeky grin.
          </p>
        </li>
        <li className="pl-1 mt-2">
          <p className="font-bold">Bodged</p>
          <p>{t.BritishSlangBodged}.</p>
          <p className="text-info-content italic pl-2">
            I tried to fix the door handle myself, but I ended up bodging it.
          </p>
          <p className="text-info-content italic pl-2">
            The handyman botched the repair job, and I had to call someone else
            to fix it.
          </p>
        </li>
        <li className="pl-1 mt-2">
          <p className="font-bold">Gutted</p>
          <p>{t.BritishSlangGutted}</p>
          <p className="text-info-content italic pl-2">
            I was absolutely gutted when I found out I didn&apos;t get the job I
            applied for.
          </p>
        </li>
        <li className="pl-1 mt-2">
          <p className="font-bold">Quid</p>
          <p>{t.BritishSlangQuid}</p>
          <p className="text-info-content italic pl-2">
            I earned 50 quid from my part-time job last week.
          </p>
        </li>
        <li className="pl-1 mt-2">
          <p className="font-bold">Knackered</p>
          <p>{t.BritishSlangKnackered}</p>
          <p className="text-info-content italic pl-2">
            After working for 12 hours straight, I feel absolutely knackered.
          </p>
        </li>
        <li className="pl-1 mt-2">
          <p className="font-bold">Dodgy</p>
          <p>{t.BritishSlangDodgy}</p>
          <p className="text-info-content italic pl-2">
            I wouldn&apos;t trust that website, it looks pretty dodgy.
          </p>
        </li>
      </ul>
      <h2 className="text-xl mt-6 font-bold">American English</h2>
      <hr className="bg-secondary h-[2px] border-0 my-2" />
      <ul className="list-decimal ml-4">
        <li className="pl-1 mt-2">
          <p className="font-bold">Legit</p>
          <p>{t.AmericanSlangLegit}</p>
          <p className="text-info-content italic pl-2">
            That online store is legit, I&apos;ve ordered from them before and
            got my products on time.
          </p>
        </li>
        <li className="pl-1 mt-2">
          <p className="font-bold">Go Dutch</p>
          <p>{t.AmericanSlangGoDutch}</p>
          <p className="text-info-content italic pl-2">
            We decided to go Dutch and split the bill for dinner.
          </p>
        </li>
        <li className="pl-1 mt-2">
          <p className="font-bold">Zone out</p>
          <p>{t.AmericanSlangZoneOut}</p>
          <p className="text-info-content italic pl-2">
            I&apos;m sorry, I zoned out during that meeting. Can you repeat what
            you said?
          </p>
        </li>
        <li className="pl-1 mt-2">
          <p className="font-bold">Dude</p>
          <p>{t.AmericanSlangDude}</p>
          <p className="text-info-content italic pl-2">
            Hey dude, how&apos;s it going?
          </p>
        </li>
        <li className="pl-1 mt-2">
          <p className="font-bold">Curve ball</p>
          <p>{t.AmericanSlangCurveBall}</p>
          <p className="text-info-content italic pl-2">
            I thought I was prepared for the exam, but the last question threw
            me a curve ball and I had no idea how to answer it.
          </p>
        </li>
        <li className="pl-1 mt-2">
          <p className="font-bold">Ditch</p>
          <p>{t.AmericanSlangDitch}</p>
          <p className="text-info-content italic pl-2">
            The group of friends made plans to go hiking, but one of them had to
            ditch at the last minute due to work.
          </p>
        </li>
        <li className="pl-1 mt-2">
          <p className="font-bold">Have dibs on</p>
          <p>{t.AmericanSlangHaveDibsOn}</p>
          <p className="text-info-content italic pl-2">
            Don&apos;t even think about touching that last slice of pizza. I
            have dibs on it.
          </p>
        </li>
      </ul>
    </main>
  );
}

export default Vocabulary;
