// The next line is required for the css prop to work!
/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Global, Interpolation, Theme } from '@emotion/react';
import { useAstroTokens, Mode } from 'use-astro-tokens';

const App = () => {
  const [mode, setMode] = useState<Mode>('dark');
  const astro = useAstroTokens({ mode });

  const wrapperCss: Interpolation<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    gap: astro.spacing(4),
  };

  const handleThemeSwitch = () => {
    setMode(prev => {
      if (prev === 'dark') return 'light';
      return 'dark';
    });
  };

  return (
    <>
      <div css={wrapperCss}>
        <h1 css={{ ...astro.typography.display1 }}>Astro Display 1</h1>
        <h1>Astro Heading 1</h1>
        <h3>Astro Heading 3</h3>
        <p>Astro Body 1</p>
        <p css={{ ...astro.typography.body2 }}>Astro Body 2</p>
        <p css={{ ...astro.typography.body3 }}>Astro Body 3</p>
      </div>

      <button css={{ marginTop: '1rem' }} onClick={handleThemeSwitch}>
        Theme Switch
      </button>

      <Global
        styles={{
          '*': {
            margin: astro.spacing(0),
          },
          body: {
            color: astro.color.text.primary,
            backgroundColor: astro.color.background.base.default,
          },
          p: {
            ...astro.typography.body1,
          },
          h1: {
            ...astro.typography.h1,
          },
          h3: {
            ...astro.typography.h3,
          },
          button: {
            backgroundColor: astro.color.background.interactive.default,
            color: astro.color.text.inverse,
            padding: astro.spacing(2, 4),
            border: 'none',
            borderRadius: astro.radius.base,
            ...astro.typography.body1,
            ':hover': {
              backgroundColor: astro.color.background.interactive.hover,
            },
          },
        }}
      />
    </>
  );
};

export default App;
