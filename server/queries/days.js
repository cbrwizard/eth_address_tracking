import Day from 'server/models/Day'

export const lastDay = () =>
  Day.findOne({})
    .sort({ createdAt: -1 })
    .exec()

export const create = () =>
  new Day().save()

export const update = async (day, attributes) =>
  day.update(attributes, { runValidators: true })
