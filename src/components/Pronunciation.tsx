import { HiSpeakerWave } from 'react-icons/hi2';

interface PronunciationProps {
  audioSrc: string;
  lang: string;
  text: string;
}

function Pronunciation({ audioSrc, lang, text }: PronunciationProps) {
  return (
    <div className="flex gap-2 items-center">
      <span>{lang}</span>
      <HiSpeakerWave
        className="hover:text-secondary cursor-pointer text-xl"
        onClick={() => new Audio(audioSrc).play()}
      />
      <span>{text}</span>
    </div>
  );
}

export default Pronunciation;
