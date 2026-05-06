import { useTranslatedText } from '../hooks/useTranslation'

function TranslatedText({ as: Element = 'span', children, className = '', text }) {
  const sourceText = text ?? children
  const { isTranslating, text: translatedText } = useTranslatedText(String(sourceText ?? ''))

  return (
    <Element className={className}>
      {translatedText}
      {isTranslating ? <span className="sr-only"> Translating</span> : null}
    </Element>
  )
}

export default TranslatedText
