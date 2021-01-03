/** @jsx jsx */
import { FunctionComponent } from 'react'
import { Box, jsx, Link } from 'theme-ui'
import { LogoProps } from './Logo.models'

export const Logo: FunctionComponent<LogoProps> = ({
  variant,
}): JSX.Element => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
  const fill =
    variant === 'dark' ? '#111' : variant === 'primary' ? '#2EC4B6' : '#fff'
  return (
    <Link
      onClick={handleClick}
      sx={{
        cursor: 'pointer',
        transition: '0.4s',
        display: 'inline-flex',
        '&:hover': { transform: 'scale(1.1)' },
      }}
    >
      <svg
        sx={{ height: 'auto', width: 80 }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 106 56"
      >
        <path
          d="M27.49 8.52c.45 0 .82-.32.82-.71V5.68c0-.4-.37-.71-.82-.71-.46 0-.82.32-.82.7v2.14c0 .39.36.7.82.7zM27.49 9.94c-.46 0-.82.31-.82.7v2.13c0 .4.36.71.82.71.45 0 .82-.31.82-.7v-2.13c0-.4-.37-.71-.82-.71zM23.38 9.94h2.47c.45 0 .82-.32.82-.71 0-.4-.37-.71-.82-.71h-2.47c-.45 0-.82.31-.82.7 0 .4.37.72.82.72zM29.13 9.94h2.46c.45 0 .82-.32.82-.71 0-.4-.37-.71-.82-.71h-2.46c-.46 0-.82.31-.82.7 0 .4.36.72.82.72zM36.51 14.9c.46 0 .82-.31.82-.7 0-.4-.36-.72-.82-.72-.45 0-.82.32-.82.71 0 .4.37.71.82.71zM62.77 14.9c.45 0 .82-.31.82-.7 0-.4-.37-.72-.82-.72-.45 0-.82.32-.82.71 0 .4.37.71.82.71zM56.61 11.36c1.59 0 2.88-1.12 2.88-2.49S58.19 6.4 56.6 6.4c-1.58 0-2.87 1.11-2.87 2.48 0 1.37 1.3 2.49 2.87 2.49zm0-3.55c.68 0 1.24.47 1.24 1.06 0 .59-.56 1.07-1.24 1.07-.67 0-1.23-.48-1.23-1.07 0-.59.56-1.06 1.23-1.06z"
          fill={fill}
        />
        <path
          d="M71.68 35.54c-.1-.07-2.38-1.63-5.73-2.78 4.93-5.55 4.3-13.56 4.27-13.92-.03-.35-.35-.63-.76-.66-.38-.02-7.99-.47-14.18 2.6-1.58-6.04-7.12-10.6-7.36-10.8a.92.92 0 00-1.07-.03c-.28.19-6.66 4.6-8.63 10.81-6.18-3.05-13.77-2.6-14.15-2.58-.4.03-.72.3-.75.66-.03.36-.67 8.37 4.27 13.92a25.65 25.65 0 00-5.73 2.78.69.69 0 00-.3.49c-.03.19.04.38.18.52.22.22 5.26 5.28 12.4 5.78a20.24 20.24 0 006.5-.74c-.17.37-.23.75-.18 1.12.3 2.7 5.73 5.2 6.34 5.47a.93.93 0 00.74.01c.06-.03 1.7-.72 3.33-1.72 2.36-1.45 3.49-2.83 3.34-4.1a2.12 2.12 0 00-.12-.48 19.29 19.29 0 005.31.44c7.14-.5 12.18-5.56 12.4-5.78a.65.65 0 00.18-.52.69.69 0 00-.3-.49zM68.6 19.58c.04 2.14-.22 9.21-5.12 13.46-4.91 4.24-13.1 4.47-15.57 4.43-.04-2.14.21-9.2 5.13-13.46 4.9-4.25 13.09-4.47 15.56-4.43zM46.77 32.23c-.59-2.77-1.83-6-4.41-8.57.33-3.34 3.41-6.12 4.7-7.14 1.16 1.1 3.88 4.02 3.96 7.3a16.94 16.94 0 00-4.25 8.41zm.54-20.76c1.43 1.31 5.45 5.32 6.5 10.13-.45.27-.88.57-1.3.9-.8-4.15-4.66-7.33-4.84-7.48a.92.92 0 00-1.07-.04c-.2.14-4.61 3.19-5.68 7.44-.4-.3-.82-.59-1.24-.85 1.37-4.95 6.02-8.86 7.63-10.1zm-22.38 8.1c2.47-.03 10.64.19 15.56 4.44a11.99 11.99 0 01.47.43c4.45 4.27 4.7 10.96 4.65 13.03-2.47.04-10.64-.18-15.56-4.43-4.9-4.25-5.16-11.32-5.12-13.46zm9.34 21.34c-5.11-.35-9.17-3.43-10.66-4.71.96-.58 2.82-1.57 5.12-2.3l.16.14c4.43 3.83 11.01 4.68 14.74 4.83l-.13.07-.5.3-.04.01c-2.1.89-5.32 1.9-8.7 1.66zm15.66 4.4c-1.08.66-2.18 1.19-2.74 1.44-2.03-.97-4.94-2.8-5.1-4.18-.16-1.33 2.98-2.92 4.76-3.59 1.98.62 5.56 2.15 5.73 3.54.08.68-.89 1.7-2.65 2.79zm9.34-4.4a18.1 18.1 0 01-6.92-.99h-.01a13.4 13.4 0 00-1.88-1.08c3.8-.21 9.97-1.15 14.19-4.8l.16-.14c2.3.73 4.16 1.73 5.12 2.3-1.48 1.28-5.54 4.36-10.66 4.71z"
          fill={fill}
        />
        <path
          d="M61.61 32.17c.21 0 .42-.08.59-.22 3.76-3.3 3.33-8.88 3.3-9.11-.03-.4-.43-.69-.87-.66-.45.03-.8.37-.76.76 0 .05.4 5.17-2.84 8.02a.64.64 0 000 1c.17.14.37.2.58.2zM32.66 31.86a.9.9 0 00.53.17c.23 0 .46-.09.63-.25.29-.3.24-.75-.1-1-3.51-2.57-3.67-7.68-3.67-7.76-.01-.4-.38-.7-.82-.7h-.02c-.45 0-.81.33-.8.72 0 .24.15 5.83 4.25 8.82zM95.9 36.03c.92.43 1.39.73 1.39.92 0 .18-.12.45-.34.81-.2.34-.47.6-.78.75l-13.7 6.73c-.1.07-.19.1-.28.1-.2 0-.3-.1-.3-.34 0-.24.09-.55.27-.91.2-.39.46-.66.78-.82l11.66-5.92c.05-.02.06-.04.04-.06 0-.05-.03-.08-.07-.1l-11.9-5.92a1.29 1.29 0 01-.61-.72c-.14-.36-.2-.66-.2-.91s.12-.38.37-.38c.06 0 .17.02.3.07l13.36 6.7z"
          fill={fill}
        />
        <path
          d="M70.47 48.1c-.23 0-.4-.05-.51-.16-.1-.1-.1-.2-.04-.34l10.1-23.63a.82.82 0 01.48-.44c.22-.1.5-.14.85-.14.2 0 .34.06.4.17.1.11.1.25.04.4L71.69 47.6c-.09.2-.24.34-.44.4-.2.07-.46.1-.78.1z"
          fill={fill}
        />
        <path
          d="M5.06 38.37c-.93-.43-1.4-.74-1.4-.92 0-.18.11-.44.32-.78.22-.36.5-.62.81-.78l13.7-6.73c.12-.07.2-.1.28-.1.2 0 .3.1.3.33 0 .25-.1.57-.3.96-.19.36-.44.62-.75.78L6.36 37.04c-.05.03-.07.06-.07.1a.4.4 0 00.1.07l11.9 5.92c.27.14.48.39.61.75.14.34.2.63.2.88s-.12.38-.37.38c-.07 0-.17-.03-.3-.07l-13.37-6.7z"
          fill={fill}
        />
      </svg>
    </Link>
  )
}
