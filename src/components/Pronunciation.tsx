import { HiSpeakerWave } from 'react-icons/hi2';

interface PronunciationProps {
  audioSrc: string;
  lang: string;
}

function Pronunciation({ audioSrc, lang }: PronunciationProps) {
  return (
    <div className="flex gap-2 items-center">
      <span>{lang}</span>
      <HiSpeakerWave
        className="hover:text-info cursor-pointer text-xl"
        onClick={() => new Audio(audioSrc).play()}
      />
    </div>
  );
}

export default Pronunciation;
