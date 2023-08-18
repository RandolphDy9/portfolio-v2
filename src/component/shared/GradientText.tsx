type TextType = {
  text: string;
  classes: string;
}

const GradientText = ({ text, classes }: TextType) => {
  return (
    <div className={`${classes} bg-gradient-to-r from-from via-via to-to text-transparent bg-clip-text`}>
      { text }
    </div>
  )
}

export default GradientText;