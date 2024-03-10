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

export const names = [
  {
    value: 'bug',
    name: 'Bug'
  },
  {
    value: 'feature',
    name: 'Feature'
  },
  {
    value: 'documentation',
    name: 'Documentation'
  }
]

export const statuses = [
  {
    value: 'backlog',
    name: 'Backlog',
    icon: h(QuestionMarkCircledIcon)
  },
  {
    value: 'todo',
    name: 'Todo',
    icon: h(CircleIcon)
  },
  {
    value: 'in progress',
    name: 'In Progress',
    icon: h(StopwatchIcon)
  },
  {
    value: 'done',
    name: 'Done',
    icon: h(CheckCircledIcon)
  },
  {
    value: 'canceled',
    name: 'Canceled',
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
