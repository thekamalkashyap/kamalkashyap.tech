import React from 'react';
import { Input } from '../components/input';
import { useHistory } from '../components/history/hook';
import { History } from '../components/history/History';
import { banner } from '../utils/bin';
import Layout from '../components/layout';

interface TerminalPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const Terminal: React.FC<TerminalPageProps> = ({ inputRef }) => {
  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  const containerRef = React.useRef(null);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const init = React.useCallback(() => setHistory(banner()), []);

  React.useEffect(() => {
    init();
  }, [init]);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [history]);

  return (
    <Layout>
      <main
        ref={containerRef}
        className="min-h-[100vh] w-full dark:text-[#00ff24] p-6 overflow-scroll text-xs sm:text-sm lg:text-base xl:text-lg"
        onClick={onClickAnywhere}
      >
        <History history={history} />

        <Input
          inputRef={inputRef}
          containerRef={containerRef}
          command={command}
          history={history}
          lastCommandIndex={lastCommandIndex}
          setCommand={setCommand}
          setHistory={setHistory}
          setLastCommandIndex={setLastCommandIndex}
          clearHistory={clearHistory}
        />
      </main>
    </Layout>
  );
};

export default Terminal;
