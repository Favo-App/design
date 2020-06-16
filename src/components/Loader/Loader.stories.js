import React from 'react'

import Loader from './Loader'

export default {
  title: 'Design System/components/Loader/Loading',
  component: Loader,
}

export const Default = () => (
  <Loader />
)

export const Centralized = () => (
  <Loader center />
)

export const WithCustomSize = () => (
  <Loader size={20} />
)
