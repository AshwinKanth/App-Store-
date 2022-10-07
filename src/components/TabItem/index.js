import './index.css'

const TabItem = props => {
  const {tabItemDetails, onTabChange, isActive} = props
  const {displayText, tabId} = tabItemDetails

  const tabClassName = isActive ? 'active-tab' : 'tab-button'

  const onChangeTabItem = () => {
    onTabChange(tabId)
  }

  return (
    <li className="tab-list">
      <button className={tabClassName} onClick={onChangeTabItem} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
