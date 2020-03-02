import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { fireEvent } from '@testing-library/react'
import {
  ActionList,
  ActionListHeader,
  ActionListHeaderColumn,
  ActionListItems,
  ActionListItem,
  ActionListItemColumn,
  ActionListItemActions,
  ActionListItemAction,
  ActionListRowContainer,
  ActionListRowOptionsContainer,
  ActionListColumns,
} from '.'

const columns: ActionListColumns = [
  {
    children: 'test',
    id: 'id',
    primaryKey: true,
    type: 'number',
    widthPercent: 10,
  },
  {
    children: 'test',
    id: 'name',
    type: 'string',
    widthPercent: 45,
  },
  {
    children: 'test',
    id: 'role',
    type: 'string',
    widthPercent: 45,
  },
]

describe('<ActionList />: General Layout', () => {
  let rafSpy: jest.SpyInstance<number, [FrameRequestCallback]>

  beforeEach(() => {
    rafSpy = jest
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((cb: any) => cb())
  })

  afterEach(() => {
    rafSpy.mockRestore()
  })

  test('Renders a header row and a list item row', () => {
    const { getByText } = renderWithTheme(
      <ActionList columns={columns}>
        <ActionListHeader>
          <ActionListRowContainer>
            <ActionListHeaderColumn>ID</ActionListHeaderColumn>
            <ActionListHeaderColumn>Name</ActionListHeaderColumn>
            <ActionListHeaderColumn>Role</ActionListHeaderColumn>
          </ActionListRowContainer>
          <ActionListRowOptionsContainer />
        </ActionListHeader>
        <ActionListItems>
          <ActionListItem>
            <ActionListRowContainer>
              <ActionListItemColumn>1</ActionListItemColumn>
              <ActionListItemColumn>Richard Garfield</ActionListItemColumn>
              <ActionListItemColumn>Game Designer</ActionListItemColumn>
            </ActionListRowContainer>
            <ActionListRowOptionsContainer>
              <ActionListItemActions>
                <ActionListItemAction icon="Group">
                  Some Action
                </ActionListItemAction>
              </ActionListItemActions>
            </ActionListRowOptionsContainer>
          </ActionListItem>
        </ActionListItems>
      </ActionList>
    )

    expect(getByText('ID')).toBeInTheDocument()
    expect(getByText('Name')).toBeInTheDocument()
    expect(getByText('Role')).toBeInTheDocument()
    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('Richard Garfield')).toBeInTheDocument()
    expect(getByText('Game Designer')).toBeInTheDocument()
  })

  test('Shows and hides Actions button on mouse enter and leave', () => {
    const { getByRole, getByText, queryByRole } = renderWithTheme(
      <ActionList columns={columns}>
        <ActionListHeader>
          <ActionListRowContainer>
            <ActionListHeaderColumn>ID</ActionListHeaderColumn>
            <ActionListHeaderColumn>Name</ActionListHeaderColumn>
            <ActionListHeaderColumn>Role</ActionListHeaderColumn>
          </ActionListRowContainer>
          <ActionListRowOptionsContainer />
        </ActionListHeader>
        <ActionListItems>
          <ActionListItem>
            <ActionListRowContainer>
              <ActionListItemColumn>1</ActionListItemColumn>
              <ActionListItemColumn>Richard Garfield</ActionListItemColumn>
              <ActionListItemColumn>Game Designer</ActionListItemColumn>
            </ActionListRowContainer>
            <ActionListRowOptionsContainer>
              <ActionListItemActions>
                <ActionListItemAction icon="Group">
                  Some Action
                </ActionListItemAction>
              </ActionListItemActions>
            </ActionListRowOptionsContainer>
          </ActionListItem>
        </ActionListItems>
      </ActionList>
    )

    const listItemId = getByText('1')

    fireEvent(
      listItemId,
      new MouseEvent('mouseenter', {
        bubbles: true,
        cancelable: true,
      })
    )

    getByRole('button')

    fireEvent(
      listItemId,
      new MouseEvent('mouseleave', {
        bubbles: true,
        cancelable: true,
      })
    )

    expect(queryByRole('button')).not.toBeInTheDocument()
  })

  test('Shows and hides Actions menu on button click', () => {
    const { getByRole, getByText, queryByText } = renderWithTheme(
      <ActionList columns={columns}>
        <ActionListHeader>
          <ActionListRowContainer>
            <ActionListHeaderColumn>ID</ActionListHeaderColumn>
            <ActionListHeaderColumn>Name</ActionListHeaderColumn>
            <ActionListHeaderColumn>Role</ActionListHeaderColumn>
          </ActionListRowContainer>
          <ActionListRowOptionsContainer />
        </ActionListHeader>
        <ActionListItems>
          <ActionListItem>
            <ActionListRowContainer>
              <ActionListItemColumn>1</ActionListItemColumn>
              <ActionListItemColumn>Richard Garfield</ActionListItemColumn>
              <ActionListItemColumn>Game Designer</ActionListItemColumn>
            </ActionListRowContainer>
            <ActionListRowOptionsContainer>
              <ActionListItemActions>
                <ActionListItemAction icon="Group">
                  Some Action
                </ActionListItemAction>
              </ActionListItemActions>
            </ActionListRowOptionsContainer>
          </ActionListItem>
        </ActionListItems>
      </ActionList>
    )

    const listItemId = getByText('1')

    fireEvent(
      listItemId,
      new MouseEvent('mouseenter', {
        bubbles: true,
        cancelable: true,
      })
    )

    const listItemButton = getByRole('button')

    expect(queryByText('Some Action')).not.toBeInTheDocument()

    fireEvent.click(listItemButton)

    expect(getByText('Some Action')).toBeInTheDocument()

    fireEvent.click(listItemButton)

    expect(queryByText('Some Action')).not.toBeInTheDocument()
  })

  test('Handles click on row and handles click on Action', () => {
    const handleListItemClick = jest.fn()
    const handleActionClick = jest.fn()

    const { getByText, getByRole } = renderWithTheme(
      <ActionList columns={columns}>
        <ActionListHeader>
          <ActionListRowContainer>
            <ActionListHeaderColumn>ID</ActionListHeaderColumn>
            <ActionListHeaderColumn>Name</ActionListHeaderColumn>
            <ActionListHeaderColumn>Role</ActionListHeaderColumn>
          </ActionListRowContainer>
          <ActionListRowOptionsContainer />
        </ActionListHeader>
        <ActionListItems>
          <ActionListItem onClick={handleListItemClick}>
            <ActionListRowContainer>
              <ActionListItemColumn>1</ActionListItemColumn>
              <ActionListItemColumn>Richard Garfield</ActionListItemColumn>
              <ActionListItemColumn>Game Designer</ActionListItemColumn>
            </ActionListRowContainer>
            <ActionListRowOptionsContainer>
              <ActionListItemActions>
                <ActionListItemAction icon="Group" onClick={handleActionClick}>
                  Some Action
                </ActionListItemAction>
              </ActionListItemActions>
            </ActionListRowOptionsContainer>
          </ActionListItem>
        </ActionListItems>
      </ActionList>
    )

    const listItemName = getByText('Richard Garfield')

    expect(handleListItemClick.mock.calls.length).toBe(0)
    fireEvent.click(listItemName)
    expect(handleListItemClick.mock.calls.length).toBe(1)

    fireEvent(
      listItemName,
      new MouseEvent('mouseenter', {
        bubbles: true,
        cancelable: true,
      })
    )

    const listItemButton = getByRole('button')

    fireEvent.click(listItemButton)
    expect(handleListItemClick.mock.calls.length).toBe(1)

    expect(handleActionClick.mock.calls.length).toBe(0)
    fireEvent.click(getByText('Some Action'))
    expect(handleActionClick.mock.calls.length).toBe(1)
  })
})
