import * as React from 'react'
import classNames from 'classnames'
import * as styles from './CardMedia.scss'

export interface CardMediaProps {
  image: string
  title?: string
  className?: undefined
}


type PropertyBag = {
  [key: string]: any
}

export const CardMedia: React.SFC<CardMediaProps> = ({className, image, ...args}) => {

  const styleableProps: PropertyBag = {

  }

  const cardImage = { backgroundImage: `url(${image})` }

  return (
    <div className={classNames(styles.cardMedia, className, styleableProps,)} style={cardImage} {...args} > </div>
  )
}

