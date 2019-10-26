import '@testing-library/jest-dom/extend-expect'
import { fireEvent } from '@testing-library/react'
import 'jest-styled-components'
import React, { useRef } from 'react'
import { renderWithTheme } from 'looker-components-test-utils'
import { Button } from '../Button'
import { Popover } from './Popover'

const SimpleContent = <div>simple content</div>

const instantClick = jest.fn()
const requiresDismissal = jest.fn()

const PopoverGroup = () => {
  const groupRef = useRef<null | HTMLDivElement>(null)

  return (
    <>
      <div ref={groupRef}>
        <Popover content={SimpleContent} groupedPopoversRef={groupRef}>
          {(onClick, ref, className) => (
            <a onClick={onClick} ref={ref} className={className}>
              Instant Click
            </a>
          )}
        </Popover>

        <a onClick={instantClick} id="instant">
          Should activate instantly
        </a>
      </div>

      <button onClick={requiresDismissal} id="dismissed">
        Should require dismissal click
      </button>
    </>
  )
}

describe('Popover', () => {
  afterEach(() => {
    const modalRoot = document.getElementById('modal-root')
    if (modalRoot) {
      // remove modalRoot after every test so the DOCUMENT_POSITION_FOLLOWING check
      // won't misleadingly fail since render adds the output to the end of the body
      document.body.removeChild(modalRoot)
    }
  })

  test('opens on click', () => {
    const { getByText, queryByText } = renderWithTheme(
      <Popover content={SimpleContent}>
        {(onClick, ref, className) => (
          <button ref={ref} onClick={onClick} className={className}>
            Test
          </button>
        )}
      </Popover>
    )

    // Verify hidden
    expect(queryByText('simple content')).not.toBeInTheDocument()

    const trigger = getByText('Test')
    fireEvent.click(trigger)

    // Find content
    expect(getByText('simple content')).toBeInTheDocument()

    fireEvent.click(trigger)
    expect(queryByText('simple content')).not.toBeInTheDocument()
  })

  test('stopPropagation works - event on container is not called', () => {
    const mockContainerOnClick = jest.fn()

    const { getByText } = renderWithTheme(
      <div onClick={mockContainerOnClick}>
        <Popover content={SimpleContent}>
          {(onClick, ref, className) => (
            <button ref={ref} onClick={onClick} className={className}>
              Test
            </button>
          )}
        </Popover>
      </div>
    )
    const trigger = getByText('Test')
    fireEvent.click(trigger)
    expect(getByText('simple content')).toBeInTheDocument()
    expect(mockContainerOnClick).not.toHaveBeenCalled()
  })

  test('Popover opens and closes', () => {
    const { getByText, queryByText } = renderWithTheme(
      <Popover content={SimpleContent}>
        {(onClick, ref, className) => (
          <a onClick={onClick} ref={ref} className={className}>
            Instant Click
          </a>
        )}
      </Popover>
    )

    const trigger = getByText('Instant Click')
    expect(trigger).toBeInTheDocument()

    // Verify Popover close, then Open Popover and verify it's open
    expect(queryByText('simple content')).not.toBeInTheDocument()
    fireEvent.click(trigger)
    expect(getByText('simple content')).toBeInTheDocument()

    // Collapse Popover by clicking outside of it (original trigger will do)
    fireEvent.click(document)
    expect(queryByText('simple content')).not.toBeInTheDocument()
  })

  test('Open popover cancels event on "dismissal click"', () => {
    const doThing = jest.fn()

    const { getByText, queryByText } = renderWithTheme(
      <>
        <Popover content={SimpleContent}>
          {(onClick, ref, className) => (
            <button onClick={onClick} ref={ref} className={className}>
              Instant Click
            </button>
          )}
        </Popover>
        <a onClick={doThing}>Do thing...</a>
      </>
    )

    const trigger = getByText('Instant Click')
    fireEvent.click(trigger) // open Popover

    const closer = getByText('Do thing...')
    fireEvent.click(closer)
    expect(queryByText('simple content')).not.toBeInTheDocument()
    expect(doThing).toBeCalledTimes(0)
  })

  test('Popover Group - item outside group does NOT receive first click event', () => {
    const { getByText, queryByText } = renderWithTheme(<PopoverGroup />)
    const trigger = getByText('Instant Click')
    fireEvent.click(trigger) // open Popover

    const dismissed = getByText('Should require dismissal click')
    fireEvent.click(dismissed)
    // @FAIL - Doesn't work because Popover is looking for an event sent via document.addEventListener
    expect(queryByText('simple content')).not.toBeInTheDocument()
    expect(requiresDismissal).toBeCalledTimes(0)
  })

  test('Popover Group  - item within group immediately receives onClick', () => {
    const { getByText, queryByText } = renderWithTheme(<PopoverGroup />)
    const trigger = getByText('Instant Click')
    fireEvent.click(trigger) // open Popover

    const instant = getByText('Should activate instantly')
    fireEvent.click(instant)

    /*
     * Testing this with Jest is frustrating because the component expects to operating with a real DOM
     * environment. Popover is looking for an event sent via document.addEventListener which isn't
     * produced within Jest's enviornment. Attempts at mocking haven't been successful.
     */
    expect(queryByText('simple content')).not.toBeInTheDocument()
    expect(instantClick).toBeCalledTimes(1)
  })

  test('Popover trigger is shown/hidden on hover of hoverDisclosureRef', () => {
    const Component = () => {
      const hoverRef = useRef<HTMLDivElement>(null)
      return (
        <div ref={hoverRef}>
          <Popover content={SimpleContent} hoverDisclosureRef={hoverRef}>
            {(onClick, ref, className) => (
              <Button onClick={onClick} ref={ref} className={className}>
                Instant Click
              </Button>
            )}
          </Popover>
          Some text in the div
        </div>
      )
    }
    const { getByText, queryByText } = renderWithTheme(<Component />)

    const trigger = queryByText('Instant Click')
    const div = getByText('Some text in the div')

    expect(trigger).not.toBeInTheDocument()

    fireEvent(
      div,
      new MouseEvent('mouseenter', {
        bubbles: true,
        cancelable: true,
      })
    )
    const triggerNew = getByText('Instant Click')
    expect(queryByText('simple content')).not.toBeInTheDocument()
    fireEvent.click(triggerNew) // open Popover
    expect(queryByText('simple content')).toBeInTheDocument()
  })
})
