
type LayoutType = {
  children: React.ReactNode;
}

const TwoColumnLayout = ({ children }: LayoutType) => {
  return (
    <div className="flex">
      <div className="w-1/3 p-4 bg-gray-200 border">
        image?
      </div>
      <div className="w-2/3 p-4 bg-gray-100 overflow-y-scroll">
        {children}
      </div>
    </div>
  )
}

export default TwoColumnLayout;