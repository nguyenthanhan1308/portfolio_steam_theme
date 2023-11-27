import React from 'react';
import {useGetTheme} from '../theme-provider';
export default function Community() {
  const theme = useGetTheme();
  console.log("🚀 ~ file: page.tsx:5 ~ Community ~ theme:", theme);
  return (
    <div>community</div>
  )
}
