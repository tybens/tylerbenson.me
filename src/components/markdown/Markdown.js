import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from "react-gfm"

const Markdown = ({ page }) => {
  return (
    <ReactMarkdown children={page} plugins={[remarkGfm]} />
  )
}

export default Markdown