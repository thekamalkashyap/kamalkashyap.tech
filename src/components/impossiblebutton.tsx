import { useEffect } from 'react';

export default function ImpossibleButton() {
  useEffect(() => {
    const switchAnimationTime = 500;
    const switchContainer = document.querySelector('#switch');
    const switchButton = document.querySelector('#button');

    const animationOne = () => {
      const arm = document.querySelector('.reach-hand-right');

      setTimeout(() => {
        arm.classList.add('reach');
        setTimeout(() => {
          flipBack();
          setTimeout(() => {
            arm.classList.remove('reach');
            setTimeout(setReady, 500);
          }, 200);
        }, 800);
      }, 500);
    };

    const animationTwo = () => {
      const arm = document.querySelector('.reach-hand-right');
      setTimeout(() => {
        arm.classList.add('reachfar');
        setTimeout(() => {
          flipBack();
          setTimeout(() => {
            arm.classList.remove('reachfar');
            setTimeout(setReady, 500);
          }, 600);
        }, 1400);
      }, 500);
    };

    const animations = [animationOne, animationTwo];

    const randomBetween = (min = 0, max = 1) => {
      if (max - min === 0) return min;
      return Math.round(Math.random() * (max - min)) + min;
    };

    const doSwitch = () => {
      const animation = animations[randomBetween(0, animations.length - 1)];

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
      <div id="darkLight">dark/light</div>
      <div id="switch" className="switch-container flipped">
        <div id="button" className="switch-button"></div>
      </div>
      <div className="animation-container">
        <div className="reach-hand-right"></div>
      </div>
    </>
  );
}
