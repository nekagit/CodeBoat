import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon
} from '@radix-icons/vue'
import { h } from 'vue'

export const types = [
  {
    value: 'house',
    name: 'House'
  },
  {
    value: 'apartment',
    name: 'Apartment'
  },
]
export const statuses = [
  {
    label: 'Backlog',
    value: 'backlog',
    icon: h(QuestionMarkCircledIcon)
  },
  {
    label: 'Todo',
    value: 'todo',
    icon: h(CircleIcon)
  },
  {
    label: 'In Progress',
    value: 'in progress',
    icon: h(StopwatchIcon)
  },
  {
    label: 'Done',
    value: 'done',
    icon: h(CheckCircledIcon)
  },
  {
    label: 'Canceled',
    value: 'canceled',
    icon: h(CrossCircledIcon)
  }
]


export const priorities = [
  {
    name: 'Low',
    value: 'low',
    icon: h(ArrowDownIcon)
  },
  {
    name: 'Medium',
    value: 'medium',
    icon: h(ArrowRightIcon)
  },
  {
    name: 'High',
    value: 'high',
    icon: h(ArrowUpIcon)
  }
]
