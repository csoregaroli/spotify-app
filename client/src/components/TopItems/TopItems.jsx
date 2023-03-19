import TopItemsList from './TopItemsList'

const TopItems = () => {
  return (
    <div>
      <TopItemsList type='tracks' />
      <TopItemsList type='artists' />
    </div>
  )
}

export default TopItems
