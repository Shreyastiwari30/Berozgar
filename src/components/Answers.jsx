import React, { useEffect, useState } from 'react';
import { checkheading, replaceheading } from './helper';

const Answers = ({ ans, index }) => {
  const [heading, setHeading] = useState(false);
  const [answer, setAnswer] = useState(ans);

  useEffect(() => {
    if (checkheading(ans)) {
      setHeading(true);
      setAnswer(replaceheading(ans));
    } else {
      setHeading(false);
      setAnswer(ans);
    }
  }, [ans]);

  
  if (ans.startsWith("•")) {
    return (
      <li className="ml-6 list-disc text-base leading-relaxed text-black">
        {ans.slice(1).trim()}
      </li>
    );
  }

  if (heading || ans.endsWith(":")) {
    return (
      <h3 className="pt-4 font-bold text-lg text-black">
        {answer}
      </h3>
    );
  }

  return (
    <p className="pl-5 text-base text-black leading-relaxed">
      {answer}
    </p>
  );
};

export default Answers;
