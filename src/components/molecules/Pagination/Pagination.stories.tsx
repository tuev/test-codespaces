import React, { useCallback } from 'react'
import Pagination from './Pagination'
// import { console.log } from '@storybook/addon-actions'

export default {
  component: Pagination,
  title: 'Pagination',
  includeStories: ['basic', 'example'],
}

export const basic = () => {
  return <Pagination total={5} page={3} step={5} />
}

export const example = () => {
  return (
    <>
      <Pagination1 />
      <Pagination2 />
      <Pagination3 />
      <Pagination4 />
      <Pagination5 />
      <Pagination6 />
      <Pagination7 />
      <Pagination8 />
      <Pagination9 />
      <Pagination10 />
      <Pagination11 />
      <Pagination12 />
      <Pagination13 />
      <Pagination14 />
    </>
  )
}

const Pagination1 = () => {
  const props = { total: 0, page: 0, step: 5 }
  const handleChange = useCallback(page => console.log('page'), [])
  return <Pagination {...props} onChange={handleChange} />
}

const Pagination2 = () => {
  const props = { total: 0, page: 1, step: 5 }
  const handleChange = useCallback(page => console.log(page), [])
  return <Pagination {...props} onChange={handleChange} />
}

const Pagination3 = () => {
  const props = { total: 1, page: 1, step: 5 }
  const handleChange = useCallback(page => console.log(page), [])
  return <Pagination {...props} onChange={handleChange} />
}

const Pagination4 = () => {
  const props = { total: 3, page: 1, step: 5 }
  const handleChange = useCallback(page => console.log(page), [])
  return <Pagination {...props} onChange={handleChange} />
}

const Pagination5 = () => {
  const props = { total: 5, page: 3, step: 5 }
  const handleChange = useCallback(page => console.log(page), [])
  return <Pagination {...props} onChange={handleChange} />
}

const Pagination6 = () => {
  const props = { total: 5, page: 1, step: 5 }
  const handleChange = useCallback(page => console.log(page), [])
  return <Pagination {...props} onChange={handleChange} />
}

const Pagination7 = () => {
  const props = { total: 5, page: 5, step: 5 }
  const handleChange = useCallback(page => console.log(page), [])
  return <Pagination {...props} onChange={handleChange} />
}

const Pagination8 = () => {
  const props = { total: 5, page: 5, step: 5 }
  const handleChange = useCallback(page => console.log(page), [])
  return <Pagination {...props} onChange={handleChange} />
}

const Pagination9 = () => {
  const props = { total: 6, page: 5, step: 5 }
  const handleChange = useCallback(page => console.log(page), [])
  return <Pagination {...props} onChange={handleChange} />
}

const Pagination10 = () => {
  const props = { total: 6, page: 6, step: 5 }
  const handleChange = useCallback(page => console.log(page), [])
  return <Pagination {...props} onChange={handleChange} />
}

const Pagination11 = () => {
  const props = { total: 8, page: 1, step: 5 }
  const handleChange = useCallback(page => console.log(page), [])
  return <Pagination {...props} onChange={handleChange} />
}

const Pagination12 = () => {
  const props = { total: 8, page: 6, step: 5 }
  const handleChange = useCallback(page => console.log(page), [])
  return <Pagination {...props} onChange={handleChange} />
}

const Pagination13 = () => {
  const props = { total: 8, page: 6, step: 5 }
  const handleChange = useCallback(page => console.log(page), [])
  return <Pagination {...props} onChange={handleChange} />
}

const Pagination14 = () => {
  const props = { total: 12, page: 6, step: 5 }
  const handleChange = useCallback(page => console.log(page), [])
  return <Pagination {...props} onChange={handleChange} />
}
