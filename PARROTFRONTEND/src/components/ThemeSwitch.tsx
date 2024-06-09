import React from 'react';
import useStore from '../store/theme_store';

const ThemeSwitch: React.FC = () => {
    const { theme, toggleTheme } = useStore();

    return (
        <div className="flex items-center">
            <label
                htmlFor="theme-toggle"
                className="inline-flex relative items-center cursor-pointer"
            >
                <input
                    type="checkbox"
                    id="theme-toggle"
                    className="sr-only peer"
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                />
                <div
                    className={`w-12 h-6 bg-red-500 rounded-full peer peer-focus:outline-none transition-all ${
                        theme === 'dark' ? 'bg-green-600' : ''
                    }`}
                >
                    <div
                        className={` w-6 h-6 bg-yellow-400 rounded-full hover:bg-black  shadow-md transform transition-transform ${
                            theme === 'dark' ? 'translate-x-7' : ''
                        }`}
                    ></div>
                </div>
            </label>
        </div>
    );
};

export default ThemeSwitch;