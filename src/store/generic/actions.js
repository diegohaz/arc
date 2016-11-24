export const GENERIC_CREATE = 'GENERIC_CREATE'
export const GENERIC_UPDATE = 'GENERIC_UPDATE'
export const GENERIC_DELETE = 'GENERIC_DELETE'

export const genericCreate = (data) => ({
  type: GENERIC_CREATE,
  data
})

export const genericUpdate = (data, newData) => ({
  type: GENERIC_UPDATE,
  data,
  newData
})

export const genericDelete = (data) => ({
  type: GENERIC_DELETE,
  data
})
