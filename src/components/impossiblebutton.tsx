import { useEffect } from 'react';

export default function ImpossibleButton() {
  useEffect(() => {
    const switchAnimationTime = 500;
    const switchContainer = document.querySelector('#switch');
    const switchButton = document.querySelector('#button');

    const animation = () => {
      const arm = document.querySelector('.reach-hand-right');
      setTimeout(() => {
        arm.classList.add('reach');
        setTimeout(() => {
          flipBack();
          setTimeout(() => {
            arm.classList.remove('reach');
            setTimeout(setReady, 500);
          }, 150);
        }, 700);
      }, 400);
    };

    const doSwitch = () => {
      switchContainer.classList.remove('ready');
      switchContainer.classList.add('flipped');
      animation();
    };

    const flipBack = () => {
      switchContainer.classList.remove('flipped');
    };

    const setReady = () => {
      switchContainer.classList.add('ready');
    };

    switchButton.addEventListener('click', () => {
      if (switchContainer.classList.contains('ready')) doSwitch();
    });

    setTimeout(() => {
      flipBack();
      setTimeout(() => {
        setReady();
      }, switchAnimationTime);
    }, 1000);
  });
  return (
    <>
      {/* <div id="darkLight" className="text-black dark:text-white">
        dark/light
      </div> */}
      <div className="switchWrapper">
        <div id="switch" className="switch-container flipped">
          <div id="button" className="switch-button"></div>
        </div>
      </div>
      <div className="handWrapper">
        <div className="reach-hand-right"></div>
      </div>
    </>
  );
}
