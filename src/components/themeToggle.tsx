import React, { useEffect, useState } from 'react';

function ThemeToggle() {
  useEffect(() => {
    const themeToggleSwitch = document.querySelector(
      '#theme-btn',
    ) as HTMLInputElement | null;

    let theme = window.sessionStorage.getItem('theme');

    if (theme == 'dark') {
      themeToggleSwitch.checked = false;
      document.documentElement.setAttribute('data-theme', 'light');
    } else if (theme == 'light') {
      themeToggleSwitch.checked = true;
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    themeToggleSwitch.addEventListener('click', () => {
      if (themeToggleSwitch.checked == true) {
        window.sessionStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelector('html').classList.remove('dark');
      } else if (themeToggleSwitch.checked == false) {
        window.sessionStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'light');
        document.querySelector('html').classList.add('dark');
      }
    });
  }, []);

  return (
    <>
      <div className="main-wrapper">
        <div className="theme-switch-wrapper">
          <label htmlFor="theme-btn">
            <input type="checkbox" name="themeSwitch" id="theme-btn" />
            <div className="slider-wrapper">
              <div className="theme-btn-slider"></div>
              <span className="star star-1"></span>
              <span className="star star-2"></span>
              <span className="star star-3"></span>
              <span className="star star-4"></span>
              <span className="star star-5"></span>
              <span className="star star-6"></span>
            </div>
          </label>
        </div>
      </div>
    </>
  );
}

export default ThemeToggle;
